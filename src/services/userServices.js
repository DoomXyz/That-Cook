import axios from "../axios";

const handleLoginApi = (email, password) => {
  console.log("Sending request to:", axios.defaults.baseURL + "/api/login");
  console.log("Payload:", { email, password });
  return axios
    .post("/api/login", { email, password })
    .then((response) => {
      console.log("Response received:", response);
      return response;
    })
    .catch((error) => {
      console.error("Request failed:", error);
      throw error;
    });
};
//Hàm gọi API cần token (ví dụ: kiểm tra /user/admin)
const getAdminPage = (token) => {
  return axios.get("/user/admin", {
    headers: {
      Authorization: `Bearer ${token}`, //Gửi token trong header
    },
  });
};
//dùng cho ví dụ truyền tham số
const getAllTaiKhoan = (thamso) => {
  return axios.get(`/api/get-taikhoan?matk=${thamso}`);
};

const createTaiKhoan = (data) => {
  return axios.post("/api/create-taikhoan", data);
};
//cách truyền tham số nhưng khác cái trên
const deleteTaiKhoan = (id) => {
  return axios.delete("/api/delete-taikhoan", {
    data: {
      matk: id,
    },
  });
};

const editTaiKhoan = (data) => {
  return axios.put("/api/edit-taikhoan", data);
};

export {
  handleLoginApi,
  getAdminPage,
  getAllTaiKhoan,
  createTaiKhoan,
  deleteTaiKhoan,
  editTaiKhoan,
};
