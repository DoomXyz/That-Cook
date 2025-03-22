import { response } from "express";
import db from "../models/index";
import bcrypt from 'bcrypt';
import { InvalidConnectionError, where } from "sequelize";

let saltRounds = 10;

let handleTaiKhoanLogin = (email, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let taikhoanData = {}
            let isExist = await checkTaiKhoanEmail(email);
            if (isExist) {
                let taikhoan = await db.TaiKhoan.findOne({
                    attributes: ['Email', 'MaLoaiTK', 'Password'],
                    where: { Email: email },
                    raw: true,
                })
                if (taikhoan) {
                    let checkPasword = await bcrypt.compareSync(password, taikhoan.Password)
                    if (checkPasword) {
                        taikhoanData.errCode = 0;
                        taikhoanData.errMessage = 'Đúng mật khẩu!~';
                        delete taikhoan.Password;
                        taikhoanData.taikhoan = taikhoan;
                    } else {
                        taikhoanData.errCode = 2;
                        taikhoanData.errMessage = 'Sai mật khẩu';
                    }
                } else {
                    taikhoanData.errCode = 1;
                    taikhoanData.errMessage = 'Email không tồn tại';
                }
            } else {
                taikhoanData.errCode = 1;
                taikhoanData.errMessage = 'Email không tồn tại';
            }
            resolve(taikhoanData)
        } catch (e) {
            reject(e);
        }
    })
}

let checkTaiKhoanEmail = (userEmail) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.TaiKhoan.findOne({
                where: { Email: userEmail }
            })
            if (user) {
                resolve(true)
            } else {
                resolve(false)
            }
        } catch (e) {
            reject(e);
        }
    })
}

let checkTaiKhoanSDT = (userSDT) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.TaiKhoan.findOne({
                where: { SDT: userSDT }
            })
            if (user) {
                resolve(true)
            } else {
                resolve(false)
            }
        } catch (e) {
            reject(e);
        }
    })
}

let hashPassword = (password) => {
    return new Promise((resolve, reject) => {
        try {
            if (!password || typeof password !== 'string') {
                throw new Error('Invalid password');
            }
            let salt = bcrypt.genSaltSync(saltRounds);
            let hashPassword = bcrypt.hashSync(password, salt);
            resolve(hashPassword);
        } catch (e) {
            reject(e);
        }
    })
}

let getTaiKhoan = (matk) => {
    return new Promise(async (resolve, reject) => {
        try {
            let taikhoan = '';
            if (matk === 'ALL') {
                taikhoan = db.TaiKhoan.findAll({
                    attributes: {
                        exclude: ['Password']
                    }
                })
            }
            if (matk && matk !== 'ALL') {
                taikhoan = await db.TaiKhoan.findOne({
                    where: { MATK: matk },
                    attributes: {
                        exclude: ['Password']
                    }
                })
            }
            resolve(taikhoan)
        } catch (e) {
            reject(e)
        }
    })
}

let createTaiKhoan = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            //Kiểm tra dữ liệu nhập vào
            if (!data.Email) {
                return resolve({
                    errCode: 1,
                    errMessage: 'Thiếu email!'
                });
            }
            //Kiểm tra Email đã tồn tại chưa
            let isEmailExist = await checkTaiKhoanEmail(data.Email);
            if (isEmailExist) {
                resolve({
                    errCode: 1,
                    errCode: 'Email đã tồn tại trong hệ thống!',
                })
            }
            //Kiểm tra các dữ liệu đầy đủ chưa
            if (!data.Password || !data.HoTen || !data.GioiTinh || !data.SDT || !data.DiaChi) {
                return resolve({
                    errCode: 2,
                    errMessage: 'Thông tin nhập không đầy đủ!'
                });
            }
            //Kiểm tra SĐT đã tồn tại chưa
            let isSDTExist = await checkTaiKhoanSDT(data.SDT);
            if (isSDTExist) {
                resolve({
                    errCode: 3,
                    errCode: 'Số điện thoại đã tồn tại trong hệ thống!',
                })
            }
            //Tạo mã tài khoản độc nhất
            const roleMap = {
                1: "AD", // Admin
                2: "CH", // Chủ cửa hàng
                3: "KH", // Khách hàng
                // 4: "BS"  // Bác sĩ
            };
            // Mặc định là KH nếu MaLoaiTK không hợp lệ
            const prefix = `TK${roleMap[data.MaLoaiTK] || "KH"}`;
            // Lấy timestamp
            const timestamp = Date.now().toString();
            // Tạo chuỗi 6 chữ số ngẫu nhiên từ timestamp
            const digits = [];
            for (let i = 0; i < 6; i++) {
                digits.push(timestamp[Math.floor(Math.random() * 13)]);
            }
            const uniquePart = digits.join("");
            const newMATK = `${prefix}${uniquePart}`;

            // Kiểm tra xem MATK mới có trùng trong DB không
            let finalMATK = newMATK;
            let existingAccount = await db.TaiKhoan.findOne({
                where: { MATK: finalMATK }
            });
            // Nếu trùng, thử lại với 6 số ngẫu nhiên mới
            let attempts = 0;
            while (existingAccount && attempts < 5) {
                const newDigits = [];
                for (let i = 0; i < 6; i++) {
                    newDigits.push(timestamp[Math.floor(Math.random() * 13)]);
                }
                finalMATK = `${prefix}${newDigits.join("")}`;
                attempts++;
                existingAccount = await db.TaiKhoan.findOne({
                    where: { MATK: finalMATK }
                });
            }
            if (attempts >= 5) {
                resolve({
                    errCode: 4,
                    errMessage: 'You luck too bad!'
                })
            }
            //Mã hóa mật khẩu
            let hashPasswordFromBcrypt = await hashPassword(data.Password);
            //Luư dữ liệu xuống db
            await db.TaiKhoan.create({
                MATK: finalMATK,
                Email: data.Email,
                Password: hashPasswordFromBcrypt,
                HoTen: data.HoTen,
                GioiTinh: data.GioiTinh,
                SDT: data.SDT,
                DiaChi: data.DiaChi,
                MaLoaiTK: data.MaLoaiTK || 3,
                Khoa: 0
            })
            resolve({
                errCode: 0,
                errMessage: 'Create account successfully!'
            })
        } catch (e) {
            reject(e);
        }
    })
}

let deleteTaiKhoan = (matk) => {
    return new Promise(async (resolve, reject) => {
        let taikhoan = await db.TaiKhoan.findOne({
            where: { MATK: matk }
        })
        if (!taikhoan) {
            resolve({
                errCode: 2,
                errMessage: "Tài khoản cần xóa không tồn tại!"
            })
            await taikhoan.destroy();
            resolve({
                errCode: 0,
                errMessage: "Xóa tài khoản thành công!"
            })
        }
    })
}

module.exports = {
    handleTaiKhoanLogin,
    getTaiKhoan,
    createTaiKhoan,
    deleteTaiKhoan,
}