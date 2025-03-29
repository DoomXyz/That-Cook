import React, { Component } from "react";
import { connect } from "react-redux";
import { IonIcon } from "@ionic/react"; //import thư viện icon
import {
  home,
  mailOutline,
  eyeOffOutline,
  eyeOutline,
  call,
  person,
  personOutline,
  location,
} from "ionicons/icons"; //chỉ import các icon cần dùng
import "./Register.scss"; //import scss
import { createTaiKhoan } from '../../services/userServices';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      HoTen: '',
      SDT: '',
      Email: '',
      Password: '',
      GioiTinh: 1,
      confirmPassword: '',
      DiaChi: '',
      MaLoaiTK: 3,
      isTogglePassword1: false,
      isTogglePassword2: false,
      errMessage: ''
    };
  }
  componentDidMount() { }
  handleTogglePassword1 = () => {
    this.setState({
      isTogglePassword1: !this.state.isTogglePassword1
    })
  }
  handleTogglePassword2 = () => {
    this.setState({
      isTogglePassword2: !this.state.isTogglePassword2
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
    if (this.state.Password !== this.state.confirmPassword) {
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
  handleRegister = async (data) => {
    this.setState({
      errMessage: ''
    })
    let isValid = this.checkValidateInput();
    if (isValid) {
      try {
        let response = await createTaiKhoan(data);
        if (response && response.errCode !== 0) {
          alert("Tạo tk thành công");
        } else {
          alert("cút mẹ r");
        }
      } catch (e) {
        console.log(e);
      }
    }
  }
  render() {
    return (
      <div className="body">
        <div className="register-container">
          <div className="form">
            <div className="home-button">
              <a href="">
                <IonIcon icon={home}></IonIcon>
              </a>
            </div>
            <div className="register-content">
              <h1>ĐĂNG KÝ</h1>
              <div class="R1">
                <div class="inputbox">
                  <IonIcon icon={person}></IonIcon>
                  <input
                    type="text"
                    placeholder=""
                    value={this.state.HoTen}
                    onChange={(event) => this.handleOnChangeInput(event, "HoTen")}
                  />
                  <label>Họ Tên</label>
                </div>
                <div class="inputbox">
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
              <div class="R1">
                <div class="inputbox">
                  <IonIcon icon={mailOutline}></IonIcon>
                  <input
                    type="email"
                    placeholder=""
                    value={this.state.Email}
                    onChange={(event) => this.handleOnChangeInput(event, "Email")}
                  />
                  <label>Email</label>
                </div>
                <div class="inputbox">
                  <IonIcon
                    icon={this.state.isTogglePassword1 ? eyeOutline : eyeOffOutline}
                    onClick={() => this.handleTogglePassword1()}>
                  </IonIcon>
                  <input
                    type={this.state.isTogglePassword1 ? 'text' : 'password'}
                    placeholder=""
                    value={this.state.Password}
                    onChange={(event) => this.handleOnChangeInput(event, "Password")}
                  />
                  <label>Mật khẩu</label>
                </div>
              </div>
              <div class="R1">
                <div class="selectbox">
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
                <div class="inputbox">
                  <IonIcon
                    icon={this.state.isTogglePassword2 ? eyeOutline : eyeOffOutline}
                    onClick={() => this.handleTogglePassword2()}>
                  </IonIcon>
                  <input
                    type={this.state.isTogglePassword2 ? 'text' : 'password'}
                    placeholder=""
                    value={this.state.confirmPassword}
                    onChange={(event) => this.handleOnChangeInput(event, "confirmPassword")}
                  />
                  <label>Xác nhận mật khẩu</label>
                  <span id="passwordMismatch" class="error-message"></span>
                </div>
              </div>
              <div class="address">
                <div class="inputbox">
                  <IonIcon icon={location}></IonIcon>
                  <input
                    type="text"
                    placeholder=""
                    value={this.state.DiaChi}
                    onChange={(event) => this.handleOnChangeInput(event, "DiaChi")}
                  />
                  <label>Địa chỉ</label>
                </div>
              </div>
              <div className='error-message'>
                {this.state.errMessage}
              </div>
              <button
                className="register-button"
                onClick={() => { this.handleRegister(this.state) }}
              >
                <p>Đăng ký</p>
              </button>
              <div class="login">
                <p>Đã có tài khoản?</p>
                <a onClick={() => { this.props.navigate('/login') }}>Đăng nhập</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(Register);
