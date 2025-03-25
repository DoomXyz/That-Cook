import React, { Component } from 'react';
import { connect } from 'react-redux';
import { IonIcon } from "@ionic/react"; //import thư viện icon
import { mailOutline, eyeOffOutline, eyeOutline, person, call, location, personOutline, text } from "ionicons/icons"; //chỉ import các icon cần dùng
import './AdminCreateUserModal.scss';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { emitter } from '../../utils/emitter';
import { data } from 'react-router-dom';

class AdminCreateUserModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Email: '',
            Password: '',
            confirmPassword: '',
            HoTen: '',
            SDT: '',
            GioiTinh: 1,
            DiaChi: '',
            MaLoaiTK: 3,
            isTogglePassword: false,
            errMessage: ''
        }
        this.listenToEmitter();
    }
    listenToEmitter() {
        emitter.on('EVENT_CLEAR_MODAL_DATA', () => {
            this.setState({
                Email: '',
                Password: '',
                confirmPassword: '',
                HoTen: '',
                SDT: '',
                GioiTinh: 1,
                DiaChi: '',
                MaLoaiTK: 3,
                isTogglePassword: false,
                errMessage: ''
            })
        })
    }
    componentDidMount() {
    }
    toggle = () => {
        this.props.toggleFromModal();
    }
    handleTogglePassword = () => {
        this.setState({
            isTogglePassword: !this.state.isTogglePassword
        })
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
        if (this.state.password !== this.state.confirmpassword) {
            this.setState({
                errMessage: 'Mật khẩu không trùng nhau'
            })
            isValid = false;
        } else {
            let arrInput = ['Email', 'Password', 'HoTen', 'SDT', 'DiaChi'];
            let textInput = ['Email', 'Password', 'Họ tên', 'Số điện thoại', 'Địa chỉ']
            for (let i = 0; i < arrInput.length; i++) {
                if (!this.state[arrInput[i]]) {
                    isValid = false;
                    this.setState({
                        errMessage: textInput[i] + ' không được bỏ trống!'
                    })
                    break;
                }
            }
        }
        return isValid;
    }
    handleAddNewUser = () => {
        this.setState({
            errMessage: ''
        })
        let isValid = this.checkValidateInput();
        if (isValid) {
            this.props.createNewUser(this.state);
        }
    }
    render() {
        return (
            <Modal
                show={this.props.isOpen}
                onHide={this.toggle} //overdrive onHide -> this.toggle
                className="create-user-modal"
                centered
                backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>Tạo người dùng mới</Modal.Title>
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
                            />
                            <label>Email</label>
                        </div>
                        <div className="inputbox">
                            <div className="toggle-password"
                                onClick={() => this.handleTogglePassword()}
                            >
                                <IonIcon
                                    icon={this.state.isTogglePassword ? eyeOutline : eyeOffOutline}></IonIcon>
                            </div>
                            <input
                                type={this.state.isTogglePassword ? 'text' : 'password'}
                                placeholder=""
                                value={this.state.Password}
                                onChange={(event) => this.handleOnChangeInput(event, "Password")}
                            />
                            <label>Mật khẩu</label>
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
                        <div className="inputbox">
                            <div className="toggle-password"
                                onClick={() => this.handleTogglePassword()}
                            >
                                <IonIcon
                                    icon={this.state.isTogglePassword ? eyeOutline : eyeOffOutline}></IonIcon>
                            </div>
                            <input
                                type={this.state.isTogglePassword ? 'text' : 'password'}
                                placeholder=""
                                value={this.state.confirmPassword}
                                onChange={(event) => this.handleOnChangeInput(event, "confirmPassword")}
                            />
                            <label>Xác nhận mật khẩu</label>
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
                    <Button variant="primary" onClick={this.handleAddNewUser}>
                        Tạo
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

export default connect(mapStateToProps, mapDispatchToProps)(AdminCreateUserModal);