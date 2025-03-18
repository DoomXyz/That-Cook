import { where } from 'sequelize';
import db from '../models/index';
import bcrypt from 'bcrypt';

let saltRounds = 10;

let createNewUser = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPasswordFromBcrypt = await hashUserPassword(data.Password)
            await db.TaiKhoan.create({
                MATK: "TKAD000011",
                Email: data.Email,
                Password: hashPasswordFromBcrypt,
                HoTen: data.HoTen,
                GioiTinh: data.GioiTinh,
                SDT: data.SDT,
                DiaChi: data.DiaChi,
                MaLoaiTK: 1,
                Khoa: 0
            })
            resolve('Thêm thành công')
        } catch (e) {
            reject(e);
        }
    })
}

let hashUserPassword = (password) => {
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

let getAllUser = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let users = db.TaiKhoan.findAll({
                raw: true,
            });
            resolve(users);
        } catch (e) {
            reject(e);
        }
    })
}

let getSanPham = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let sp = db.SanPham.findAll({
                raw: true,
            });
            resolve(sp);
        } catch (e) {
            reject(e)
        }
    })
}

let getTaiKhoanMATK = (maTK) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.TaiKhoan.findOne({
                where: { MATK: maTK },
                raw: true
            })
            if (user) {
                resolve(user)
            } else {
                resolve({})
            }
        } catch (e) {
            reject(e);
        }
    })
}

let updateUser = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.TaiKhoan.findOne({
                where: { MATK: data.MATK },
            })
            if (user) {
                user.HoTen = data.HoTen;
                user.SDT = data.SDT;
                user.DiaChi = data.DiaChi;
                await user.save();
                let allUsers = await db.TaiKhoan.findAll();
                resolve(allUsers);
            } else {
                resolve();
            }
        } catch (e) {
            reject(e);
        }
    })
}

let deleteUser = (matk) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.TaiKhoan.findOne({
                where: { MATK: matk }
            })
            if (user) {
                await user.destroy();
            }
            resolve(); //return;
        } catch (e) {
            reject(e);
        }
    })
}

module.exports = {
    createNewUser: createNewUser,
    getAllUser: getAllUser,
    getTaiKhoanMATK: getTaiKhoanMATK,
    updateUser: updateUser,
    deleteUser: deleteUser,
    getSanPham: getSanPham,
}