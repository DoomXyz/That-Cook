import React, { Component } from 'react';
import { connect } from 'react-redux';
import { IonIcon } from "@ionic/react"; //import thư viện icon
import { mailOutline, eyeOffOutline, eyeOutline, person, call, location, personOutline, text } from "ionicons/icons"; //chỉ import các icon cần dùng
import './AdminEditUserModal.scss';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { emitter } from '../../utils/emitter';
import { data } from 'react-router-dom';
import _ from 'lodash';

class AdminEditUserModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            matk: '',
            Email: '',
            HoTen: '',
            SDT: '',
            GioiTinh: 1,
            DiaChi: '',
            MaLoaiTK: 3,
            errMessage: ''
        }
    }
    componentDidMount() {
        let user = this.props.currentUser;
        if (user && !_.isEmpty(user)) {
            this.setState({
                matk: user.MATK,
                Email: user.Email,
                HoTen: user.HoTen,
                SDT: user.SDT,
                GioiTinh: user.GioiTinh,
                DiaChi: user.DiaChi,
                MaLoaiTK: user.MaLoaiTK,
            })
        }
    }
    toggle = () => {
        this.props.toggleFromModal();
    }
    handleOnChangeInput = (event, type) => {
        let copyState = { ...this.state };
        copyState[type] = event.target.value;
        this.setState({
            ...copyState
        })
    }
    checkValidateInput = () => {
        let isValid = true;
        let arrInput = ['Email', 'HoTen', 'SDT', 'DiaChi'];
        let textInput = ['Email', 'Họ tên', 'Số điện thoại', 'Địa chỉ']
        for (let i = 0; i < arrInput.length; i++) {
            if (!this.state[arrInput[i]]) {
                isValid = false;
                this.setState({
                    errMessage: textInput[i] + ' không được bỏ trống!'
                })
                break;
            }
        }
        return isValid;
    }
    handleEditUser = () => {
        this.setState({
            errMessage: ''
        })
        let isValid = this.checkValidateInput();
        if (isValid) {
            this.props.editUser(this.state);
        }
    }
    render() {
        return (
            <Modal
                show={this.props.isOpen}
                onHide={this.toggle}
                className="edit-user-modal"
                centered
                backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>Chỉnh sửa thông tin</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="R1">
                        <div className="inputbox">
                            <IonIcon icon={person}></IonIcon>
                            <input
                                type="text"
                                placeholder=""
                                value={this.state.HoTen}
                                onChange={(event) => this.handleOnChangeInput(event, "HoTen")}
                            />
                            <label>Họ Tên</label>
                        </div>
                        <div className="inputbox">
                            <IonIcon icon={call}></IonIcon>
                            <input
                                type="tel"
                                placeholder=""
                                value={this.state.SDT}
                                onChange={(event) => this.handleOnChangeInput(event, "SDT")}
                            />
                            <label>Số điện thoại</label>
                        </div>
                    </div>
                    <div className="R1">
                        <div className="inputbox">
                            <IonIcon icon={mailOutline}></IonIcon>
                            <input
                                type="email"
                                placeholder=""
                                value={this.state.Email}
                                onChange={(event) => this.handleOnChangeInput(event, "Email")}
                                disabled
                            />
                            <label>Email</label>
                        </div>
                    </div>
                    <div className="R1">
                        <div className="selectbox">
                            <label>Giới tính</label>
                            <select
                                value={this.state.GioiTinh}
                                onChange={(event) => this.handleOnChangeInput(event, "GioiTinh")}
                            >
                                <option value="1">Nam</option>
                                <option value="2">Nữ</option>
                                <option value="3">Khác</option>
                            </select>
                            <IonIcon icon={personOutline}></IonIcon>
                        </div>
                    </div>
                    <div className="address">
                        <div className="inputbox">
                            <IonIcon icon={location}></IonIcon>
                            <input
                                type="text"
                                placeholder=""
                                value={this.state.DiaChi}
                                onChange={(event) => this.handleOnChangeInput(event, "DiaChi")}
                            />
                            <label>Địa chỉ</label>
                        </div>
                        <div className="selectbox">
                            <label>Phân quyền</label>
                            <select
                                value={this.state.MaLoaiTK}
                                onChange={(event) => this.handleOnChangeInput(event, "MaLoaiTK")}
                                disabled
                            >
                                <option value="1">Admin</option>
                                <option value="2">Chủ cửa hàng</option>
                                <option value="3">Khách hàng</option>
                            </select>
                            <IonIcon icon={personOutline}></IonIcon>
                        </div>
                        <div className='error-message'>
                            {this.state.errMessage}
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.toggle}>
                        Đóng
                    </Button>
                    <Button variant="primary" onClick={this.handleEditUser}>
                        Lưu
                    </Button>
                </Modal.Footer>
            </Modal >
        );
    }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminEditUserModal);