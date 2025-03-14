import express from 'express';
import homeController from "../controllers/homeController"

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/register', homeController.userRegister);
    router.post('/post-register', homeController.saveTodb);
    router.get('/list-user', homeController.userShow);
    router.get('/edit-user', homeController.userEdit);
    router.post('/put-user', homeController.updateTodb);
    router.get('/delete-user', homeController.deleteFromdb);
    router.get('/delete-user', homeController.deleteFromdb);
    router.get('/Home', homeController.sanphamShow);
    return app.use("/", router)
}

module.exports = initWebRoutes;