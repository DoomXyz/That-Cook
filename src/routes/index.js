// import React, { Component } from 'react';
import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from '../containers/Login/Login';
import AdminPage from '../containers/AdminPage/Admin';
// import UserPage from '../containers/User/UserPage';

// class AppRoutes extends Component {
//     render() {
//         const { navigate } = this.props; // Nhận navigate từ props
//         return (
//             <Routes>
//                 <Route path="/login" element={<Login />} />
//                 <Route path="/user" element={<UserPage />} />
//             </Routes>
//         );
//     }
// }
//bên trên là viết theo class còn bên dưới là chuyển sang function để phù hợp với react-dom6
const AppRoutes = () => {
    const navigate = useNavigate(); // Lấy navigate từ hook
    return (
        //navigate bên trái là tên tự đặt, nếu đổi thành nav thì bên Login.js hay chỗ nào dùng
        //phải đổi từ this.props.navigate('/...') sang this.props.nav('/...')
        <Routes>
            <Route path="/login" element={<Login navigate={navigate} />} />
            {/* <Route path="/user" element={<UserPage />} /> */}
            <Route path="/user/admin" element={<AdminPage navigate={navigate} />} />
        </Routes>
    );
};

export default AppRoutes;