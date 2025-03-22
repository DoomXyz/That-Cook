import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../store/actions/userActions'; // Import action logout

class UserPage extends Component {
    handleLogout = () => {
        this.props.logoutUser(); // Dispatch action logout
        this.props.navigate('/login'); // Chuyển hướng về /login
    };

    render() {
        const { email, maLoaiTK } = this.props; //khởi tạo các phần tử để lấy thông tin từ local storage
        return (
            <div style={{ padding: '20px', textAlign: 'center' }}>
                <h1>Thông tin người dùng</h1>
                <p>Email: {email || 'Không có dữ liệu'}</p>
                <p>Mã loại tài khoản: {maLoaiTK || 'Không có dữ liệu'}</p>
                <button
                    onClick={this.handleLogout}
                    style={{ padding: '10px 20px', marginTop: '20px', cursor: 'pointer' }}
                >
                    Đăng xuất
                </button>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    email: state.user.email,
    maLoaiTK: state.user.maLoaiTK,
});

const mapDispatchToProps = {
    logoutUser, // Thêm action logout vào props
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);