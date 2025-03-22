import axios from "../axios"

const handleLoginApi = (email, password) => {
    console.log('Sending request to:', axios.defaults.baseURL + '/api/login');
    return axios.post('/api/login', { email, password });
}

//dùng cho ví dụ truyền tham số
const getAllTaiKhoan = (thamso) => {
    return axios.get(`/api/get-taikhoan?matk=${thamso}`)
}

export {
    handleLoginApi,
    getAllTaiKhoan,
}