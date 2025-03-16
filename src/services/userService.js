import { response } from "express";
import db from "../models/index";
import bcrypt from 'bcrypt';
import { InvalidConnectionError, where } from "sequelize";
let handleUserLogin = (email, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userData = {}
            let isExist = await checkUserEmail(email);
            if (isExist) {
                let user = await db.TaiKhoan.findOne({
                    attributes: ['Email', 'MaLoaiTK', 'Password'],
                    where: { Email: email },
                    raw: true,
                })
                if (user) {
                    let check = await bcrypt.compareSync(password, user.Password)
                    if (check) {
                        userData.errCode = 0;
                        userData.errMessage = 'Đúng mật khẩu!~';
                        delete user.Password;
                        userData.user = user;
                    } else {
                        userData.errCode = 2;
                        userData.errMessage = 'Sai mật khẩu';
                    }
                } else {
                    userData.errCode = 1;
                    userData.errMessage = 'Email không tồn tại';
                }

            } else {
                userData.errCode = 1;
                userData.errMessage = 'Email không tồn tại';
            }
            resolve(userData)
        } catch (e) {
            reject(e);
        }
    })
}

let checkUserEmail = (userEmail) => {
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

let checkUserPassword = (userPassword) => {
    return new Promise(async (resolve, reject) => {
        try {

        } catch (e) {
            reject(e);
        }
    })
}

module.exports = {
    handleUserLogin: handleUserLogin,
}