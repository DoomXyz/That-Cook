import db from '../models/index';
import CRUDService from '../services/CRUDService';

let getHomePage = async (req, res) => {
    // try {
    //     let data = await db.TaiKhoans.findAll();
    //     return res.render("homepage.ejs", { data: JSON.stringify(data) });
    // } catch (e) {
    //     console.log(e)
    // }
    return res.redirect("/home");
}

let userRegister = (req, res) => {
    return res.render('register.ejs');
}

let saveTodb = async (req, res) => {
    await CRUDService.createNewUser(req.body)
    console.log(req.body);
    return res.send('post crud from server')
}

let userShow = async (req, res) => {
    let data = await CRUDService.getAllUser();
    // console.log('=-----------------------------------------------=');
    // console.log(data);
    // console.log('=-----------------------------------------------=');
    return res.render('list-user.ejs', {
        dataTable: data
    });
}

let sanphamShow = async (req, res) => {
    let data = await CRUDService.getSanPham();
    return res.render('homepage/Home.ejs', {
        dataTable: data
    });
}

let userEdit = async (req, res) => {
    let maTK = req.query.matk;
    if (maTK) {
        let userData = await CRUDService.getTaiKhoanMATK(maTK);

        return res.render('edit-user.ejs', {
            user: userData,
        })
    } else {
        return res.send("User not found");
    }
}

let updateTodb = async (req, res) => {
    let data = req.body;
    await CRUDService.updateUser(data);
    return res.redirect("/list-user");
}

let deleteFromdb = async (req, res) => {
    let maTK = req.query.matk;
    if (maTK) {
        await CRUDService.deleteUser(maTK);
    } else {
        return res.send("User not found!");
    }

    return res.send("Delete success!");
}

module.exports = {
    getHomePage: getHomePage,
    userRegister: userRegister,
    saveTodb: saveTodb,
    userShow: userShow,
    userEdit: userEdit,
    updateTodb: updateTodb,
    deleteFromdb: deleteFromdb,
    sanphamShow: sanphamShow,
}