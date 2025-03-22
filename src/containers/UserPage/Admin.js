import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { IonIcon } from "@ionic/react"; //import thư viện icon
import { pencil, trash } from "ionicons/icons"; //chỉ import các icon cần dùng
import './admin.scss'; //import scss
import { getAllTaiKhoan } from '../../services/userServices'

class Admin extends Component {
    //Life cycle:
    //1. chạy constructor để khai báo các state
    //2. chạy render html
    //3. chạy didmount để gắn giá trị từ backend
    constructor(props) {
        super(props);
        this.state = {
            arrTaiKhoan: []
        }
    }
    async componentDidMount() {
        let response = await getAllTaiKhoan('ALL')
        if (response && response.errCode === 0) {
            this.setState({
                arrTaiKhoan: response.taikhoan
            })
        }
    }

    render() {
        let arrTK = this.state.arrTaiKhoan;
        const getAccountType = (maLoaiTK) => {
            if (maLoaiTK === 1) return 'Admin';
            if (maLoaiTK === 2) return 'Chủ cửa hàng';
            if (maLoaiTK === 3) return 'Khách hàng';
        };
        return (
            <div className='admin-container'>
                <div className='main-title'>
                    Manage User
                </div>
                <div className='users-table'>
                    <table className='table'>
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
                            console.log('check map: ', item, index);
                            return (
                                <tr>
                                    <td>{item.MATK}</td>
                                    <td>{item.Email}</td>
                                    <td>{item.HoTen}</td>
                                    <td>{item.GioiTinh ? 'Nam' : 'Nữ'}</td>
                                    <td>{item.SDT}</td>
                                    <td>{item.DiaChi}</td>
                                    <td>{getAccountType(item.MaLoaiTK)}</td>
                                    <td>{item.createdAt}</td>
                                    <td>{item.updatedAt}</td>
                                    <td>
                                        <button className='btn-edit'><IonIcon icon={pencil}></IonIcon></button>
                                        <button className='btn-delete'><IonIcon icon={trash}></IonIcon></button>
                                    </td>
                                </tr>
                            )
                        })
                        }
                    </table>
                </div>

            </div>
        );
    }
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = {
};
export default connect(mapStateToProps, mapDispatchToProps)(Admin);