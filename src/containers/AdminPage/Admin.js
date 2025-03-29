import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { IonIcon } from "@ionic/react"; //import thư viện icon
import { pencil, trash, addOutline, logOutOutline } from "ionicons/icons"; //chỉ import các icon cần dùng
import './Admin.scss'; //import scss
import { getAllTaiKhoan, createTaiKhoan, deleteTaiKhoan, editTaiKhoan, getAdminPage } from '../../services/userServices';
import AdminCreateUserModal from './AdminCreateUserModal';
import AdminEditUserModal from './AdminEditUserModal';
import { emitter } from '../../utils/emitter';
import { logoutUser } from '../../store/actions/userActions';

class Admin extends Component {
    //Life cycle:
    //1. chạy constructor để khai báo các state
    //2. chạy render html
    //3. chạy didmount để gắn giá trị từ backend
    constructor(props) {
        super(props);
        this.state = {
            arrTaiKhoan: [],
            isShowCreateUserModal: false,
            isShowEditUserModal: false,
            userEdit: {},
        }
    }
    async componentDidMount() {
        // const token = localStorage.getItem('token');
        // if (!token || this.props.userMaLoaiTK !== 1) {
        //     //Nếu không có token hoặc không phải admin, chuyển hướng về /login
        //     this.props.navigate('/login');
        //     return;
        // }
        // try {
        //     //Gọi API để kiểm tra quyền truy cập /user/admin
        //     await getAdminPage(token);
        //     await this.loadAllTaiKhoan();
        //     this.setState({ isLoading: false });
        // } catch (error) {
        //     console.log('Access denied:', error);
        //     this.props.navigate('/login'); //Nếu lỗi (token không hợp lệ), về /login
        // }
        await this.loadAllTaiKhoan();
    }
    loadAllTaiKhoan = async () => {
        let response = await getAllTaiKhoan('ALL')
        if (response && response.errCode === 0) {
            this.setState({
                arrTaiKhoan: response.taikhoan
            })
        }
    }
    toggleCreateUserModal = () => {
        this.setState({
            isShowCreateUserModal: !this.state.isShowCreateUserModal,
        });
    }
    toggleEditUserModal = () => {
        this.setState({
            isShowEditUserModal: !this.state.isShowEditUserModal,
        })
    }
    createNewUser = async (data) => {
        try {
            let response = await createTaiKhoan(data);
            if (response && response.errCode !== 0) {
                alert(response.errMessage)
            } else {
                await this.loadAllTaiKhoan();
                this.setState({
                    isShowCreateUserModal: false
                })
                emitter.emit('EVENT_CLEAR_MODAL_DATA')
            }
        } catch (e) {
            console.log(e);
        }

    }
    deleteUser = async (user) => {
        try {
            let response = await deleteTaiKhoan(user.MATK)
            if (response && response.errCode !== 0) {
                alert(response.errMessage)
            } else {
                await this.loadAllTaiKhoan();
            }
        } catch (e) {
            console.log(e)
        }
    }
    editUser = (user) => {
        this.setState({
            isShowEditUserModal: true,
            userEdit: user
        })
    }
    doEditUser = async (user) => {
        try {
            let response = await editTaiKhoan(user);
            if (response && response.errCode !== 0) {
                alert(response.errMessage)
            } else {
                await this.loadAllTaiKhoan();
                this.setState({
                    isShowEditUserModal: false
                })
            }
        } catch (e) {
            console.log(e)
        }
    }
    // handleLogout = () => {
    //     localStorage.removeItem('token'); // Xóa token khỏi localStorage
    //     this.props.logoutUser(); // Reset Redux state về initialState
    //     this.props.navigate('/login'); // Chuyển hướng về trang login
    // };
    render() {
        // if (this.state.isLoading) {
        //     return <div>Loading...</div>; // Hiển thị khi đang kiểm tra quyền
        // }
        let arrTK = this.state.arrTaiKhoan;
        const getAccountType = (maLoaiTK) => {
            if (maLoaiTK === 1) return 'Admin';
            if (maLoaiTK === 2) return 'Chủ cửa hàng';
            if (maLoaiTK === 3) return 'Khách hàng';
        };
        const getGender = (gioiTinh) => {
            if (gioiTinh === 1) return 'Nam';
            if (gioiTinh === 2) return 'Nữ';
            if (gioiTinh === 3) return 'Khác';
        }
        return (
            <div className='admin-container'>
                <AdminCreateUserModal
                    isOpen={this.state.isShowCreateUserModal}
                    toggleFromModal={this.toggleCreateUserModal}
                    createNewUser={this.createNewUser}
                />
                {
                    this.state.isShowEditUserModal &&
                    <AdminEditUserModal
                        isOpen={this.state.isShowEditUserModal}
                        toggleFromModal={this.toggleEditUserModal}
                        currentUser={this.state.userEdit}
                        editUser={this.doEditUser}
                    />
                }
                <div className='main-title'>
                    Manage Users
                </div>
                <button className='btn-create'
                    onClick={() => this.toggleCreateUserModal()}
                >
                    <IonIcon icon={addOutline}></IonIcon>
                </button>
                <button className='btn-logout'
                    onClick={() => this.handleLogout()}
                >
                    <IonIcon icon={logOutOutline}></IonIcon>
                </button>
                <div className='users-table'>
                    <table className='table'>
                        <tbody>
                            <tr>
                                <th>MATK</th>
                                <th>Email</th>
                                <th>Họ tên</th>
                                <th>Giới tính</th>
                                <th>SĐT</th>
                                <th>Địa chỉ</th>
                                <th>Mã loại TK</th>
                                <th>Thời gian tạo</th>
                                <th>Thời gian sửa</th>
                                <th>Action</th>
                            </tr>
                            {arrTK && arrTK.map((item, index) => {
                                return (
                                    <tr>
                                        <td>{item.MATK}</td>
                                        <td>{item.Email}</td>
                                        <td>{item.HoTen}</td>
                                        <td>{getGender(item.GioiTinh)}</td>
                                        <td>{item.SDT}</td>
                                        <td>{item.DiaChi}</td>
                                        <td>{getAccountType(item.MaLoaiTK)}</td>
                                        <td>{item.createdAt}</td>
                                        <td>{item.updatedAt}</td>
                                        <td>
                                            <button className='btn-edit' onClick={() => this.editUser(item)}><IonIcon icon={pencil}></IonIcon></button>
                                            <button className='btn-delete' onClick={() => this.deleteUser(item)}><IonIcon icon={trash}></IonIcon></button>
                                        </td>
                                    </tr>
                                )
                            })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    // userMaLoaiTK: state.user.maLoaiTK, //Lấy MaLoaiTK từ Redux
});

const mapDispatchToProps = {
    // logoutUser,
};
export default connect(mapStateToProps, mapDispatchToProps)(Admin);