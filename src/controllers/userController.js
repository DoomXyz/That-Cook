import taikhoanService from "../services/taikhoanService";
import jwt from "jsonwebtoken";
let handleLogin = async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    if (!email || !password) {
        return res.status(400).json({
            errCode: 1,
            errMessage: 'Lỗi thiếu Email hoặc Mật khẩu'
        })
    }
    let taikhoanData = await taikhoanService.handleTaiKhoanLogin(email, password);
    if (taikhoanData.errCode === 0) {
        //Login thành công -> tạo jwt
        const token = jwt.sign(
            { MATK: taikhoanData.taikhoan.MATK, MaLoaiTK: taikhoanData.taikhoan.MaLoaiTK }, //Payload chứa thông tin cần thiết
            process.env.JWT_SECRET || 'shikanoko', //Secret key
            { expiresIn: '1h' } //Token hết hạn sau 1 giờ đổi thành '30m' là thành 30 phút
        );
        return res.status(200).json({
            errCode: taikhoanData.errCode,
            errMessage: taikhoanData.errMessage,
            taikhoan: taikhoanData.taikhoan ? taikhoanData.taikhoan : {},
            token: token
        });
    }

}

let handleGetTaiKhoan = async (req, res) => {
    let matk = req.query.matk
    if (matk) {
        let taikhoan = await taikhoanService.getTaiKhoan(matk);
        return res.status(200).json({
            errCode: 0,
            errMessage: 'Get success!',
            taikhoan
        });
    } else {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'Missing required parameters',
            taikhoan: []
        });
    }
}

let handleCreateTaiKhoan = async (req, res) => {
    let response = await taikhoanService.createTaiKhoan(req.body);
    return res.status(200).json(response);
}

let handleEditTaiKhoan = async (req, res) => {
    let response = await taikhoanService.updateTaiKhoan(req.body)
    return res.status(200).json(response);
}

let handleDeleteTaiKhoan = async (req, res) => {
    if (!req.body.matk) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'Missing required parameters',
        })
    }
    let response = await taikhoanService.deleteTaiKhoan(req.body.matk);
    return res.status(200).json(response);
}

module.exports = {
    handleLogin,
    handleGetTaiKhoan,
    handleCreateTaiKhoan,
    handleEditTaiKhoan,
    handleDeleteTaiKhoan,
}