import axios from "../axios"

const handleLoginApi = (email, password) => {
    console.log('Sending request to:', axios.defaults.baseURL + '/api/login');
    return axios.post('/api/login', { email, password });
}

//dùng cho ví dụ truyền tham số
const getAllTaiKhoan = (thamso) => {
    return axios.get(`/api/get-taikhoan?matk=${thamso}`)
}

const createTaiKhoan = (data) => {
    return axios.post('/api/create-taikhoan', data);
}
//cách truyền tham số nhưng khác cái trên
const deleteTaiKhoan = (id) => {
    return axios.delete('/api/delete-taikhoan', {
        data: {
            matk: id
        }
    });
}

const editTaiKhoan = (data) => {
    return axios.put('/api/edit-taikhoan', data)
}

export {
    handleLoginApi,
    getAllTaiKhoan,
    createTaiKhoan,
    deleteTaiKhoan,
    editTaiKhoan,
}