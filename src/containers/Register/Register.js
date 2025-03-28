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
} from "ionicons/icons"; //chỉ import các icon cần dùng
import "./Register.scss"; //import scss

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  render() {
    return (
      <div className="body">
        <div className="register-container">
          <form>
            <div className="home-button">
              <a href="">
                <IonIcon icon={home}></IonIcon>
              </a>
            </div>
            <div className="register-content">
              <h1>Đăng ký</h1>
              <div class="R1">
                <div class="inputbox">
                  <ion-icon name="person"></ion-icon>
                  <input type="text" placeholder="" name="HoTen" required />
                  <label>Họ Tên</label>
                </div>
                <div class="inputbox">
                  <ion-icon name="call"></ion-icon>
                  <input type="tel" placeholder="" name="SDT" required />
                  <label>Số điện thoại</label>
                </div>
              </div>
              <div class="R1">
                <div class="inputbox">
                  <ion-icon name="mail-outline"></ion-icon>
                  <input type="email" placeholder="" required name="Email" />
                  <label>Email</label>
                </div>
                <div class="inputbox">
                  <ion-icon
                    name="eye-off-outline"
                    id="togglePassword"
                  ></ion-icon>
                  <input
                    type="password"
                    placeholder=""
                    name="Password"
                    id="password"
                    required
                  />
                  <label>Mật khẩu</label>
                </div>
              </div>
              <div class="R1">
                <div class="selectbox">
                  <label>Giới tính</label>
                  <select name="GioiTinh">
                    <option value="1">Nam</option>
                    <option value="2">Nữ</option>
                    <option value="3">Khác</option>
                  </select>
                  <ion-icon name="person-outline"></ion-icon>
                </div>
                <div class="inputbox">
                  <ion-icon
                    name="eye-off-outline"
                    id="toggleConfirmPassword"
                  ></ion-icon>
                  <input
                    type="password"
                    placeholder=""
                    id="confirmPassword"
                    required
                  />
                  <label>Xác nhận mật khẩu</label>
                  <span id="passwordMismatch" class="error-message"></span>
                </div>
              </div>
              <div class="address">
                <div class="inputbox">
                  <ion-icon name="location"></ion-icon>
                  <input type="text" placeholder="" name="DiaChi" required />
                  <label>Địa chỉ</label>
                </div>
              </div>
              <button
                className="register-button"
                //quản lý event khi click vào thì gọi hàm
              >
                <p>Đăng nhập</p>
              </button>
              <div class="login">
                <p>Đã có tài khoản?</p>
                <a href="http://localhost:8080/login">Đăng nhập</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(Register);
