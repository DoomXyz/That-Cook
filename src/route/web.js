import express from "express";
import homeController from "../controllers/homeController";
import userController from "../controllers/userController";

let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", homeController.getHomePage);

  router.get("/register", homeController.userRegister);
  router.post("/post-crud", homeController.saveTodb);

  router.get("/list-user", homeController.userShow);
  router.get("/edit-user", homeController.userEdit);
  router.post("/put-user", homeController.updateTodb);
  router.get("/delete-user", homeController.deleteFromdb);
  router.get("/delete-user", homeController.deleteFromdb);
  router.get("/Home", homeController.sanphamShow);
  router.get("/login", homeController.getLogin);
  router.get("/owner", homeController.ownerhome);
  router.get("/cart", homeController.usercart);
  router.get("/pay", homeController.userpay);
  router.get("/product", homeController.userproduct);
  router.get("/delivery", homeController.userdelivery);

  router.post("/api/login", userController.handleLogin);
  //Chuẩn men RESTAPI
  router.get("/api/get-taikhoan", userController.handleGetTaiKhoan);
  router.post("/api/create-taikhoan", userController.handleCreateTaiKhoan);
  router.put("/api/edit-taikhoan", userController.handleEditTaiKhoan);
  router.delete("/api/delete-taikhoan", userController.handleDeleteTaiKhoan);

  return app.use("/", router);
};

module.exports = initWebRoutes;
