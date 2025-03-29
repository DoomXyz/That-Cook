import React, { Component } from "react";
import { IonIcon } from "@ionic/react"; //import thư viện icon
import { menu, cart, bag, person, searchOutline } from "ionicons/icons";
import { Link } from "react-router-dom";
import "./HomeHeader.scss";

class Header extends Component {
  render() {
    return (
      //   <div className="header-container">
      //     <div className="header-content">
      //       <div className="left-content">
      //         <IonIcon icon={menu} className="menu-icon"></IonIcon>
      //         <div className="header-logo"></div>
      //       </div>
      //       <div className="center-content">
      //         <div className="sub-content">
      //           <b>THỨC ĂN CHO CHÓ</b>
      //         </div>
      //         <div className="sub-content">
      //           <b>THỨC ĂN CHO MÈO</b>
      //         </div>
      //         <div className="sub-content">
      //           <b>PHỤ KIỆN CHO CHÓ</b>
      //         </div>
      //         <div className="sub-content">
      //           <b>PHỤ KIỆN CHO MÈO</b>
      //         </div>
      //       </div>
      //       <div className="right-content">
      //         <div className="stuff-content">
      //           <IonIcon icon={cart} className="cart-icon"></IonIcon>
      //           <div className="sub-stuff">Giỏ hàng</div>
      //         </div>
      //         <div className="stuff-content">
      //           <div className="sub-stuff">Đăng nhập/Đăng ký</div>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      <div className="body-container">
        <div className="header-container">
          <div className="header-top">
            <div className="logo"></div>
            <div className="menu">
              <li>
                <a>
                  THỨC ĂN <br></br> CHO CHÓ
                </a>
                <ul className="sub-menu">
                  <li>
                    <a>THỨC ĂN HẠT CHO CHÓ</a>
                  </li>
                  <li>
                    <a>PATE CHO CHÓ</a>
                  </li>
                  <li>
                    <a>
                      BÁNH THƯỜNG &<br></br>ĂN VẶT CHO CHÓ
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a>
                  THỨC ĂN <br></br> CHO MÈO
                </a>
                <ul className="sub-menu">
                  <li>
                    <a>THỨC ĂN HẠT CHO MÈO</a>
                  </li>
                  <li>
                    <a>PATE CHO MÈO</a>
                  </li>
                  <li>
                    <a>
                      BÁNH THƯỜNG &<br></br>ĂN VẶT CHO MÈO
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a>
                  PHỤ KIỆN <br></br> CHO CHÓ
                </a>
                <ul className="sub-menu">
                  <li>
                    <a>QUẦN ÁO CHO CHÓ</a>
                  </li>
                  <li>
                    <a>VÒNG CỔ & DÂY DẮT CHO CHÓ</a>
                  </li>
                  <li>
                    <a>ĐỒ CHƠI & HUẤN LUYỆN CHO CHÓ</a>
                  </li>
                  <li>
                    <a>BALO & TÚI ĐỰNG CHO CHÓ</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>
                  PHỤ KIỆN <br></br> CHO MÈO
                </a>
                <ul className="sub-menu">
                  <li>
                    <a>QUẦN ÁO CHO MÈO</a>
                  </li>
                  <li>
                    <a>VÒNG CỔ & DÂY DẮT CHO MÈO</a>
                  </li>
                  <li>
                    <a>ĐỒ CHƠI & HUẤN LUYỆN CHO MÈO</a>
                  </li>
                  <li>
                    <a>BALO & TÚI ĐỰNG CHO MÈO</a>
                  </li>
                </ul>
              </li>

              <li>
                <a>LIÊN HỆ</a>
              </li>
            </div>
            <div className="others">
              <li>
                <a href="http://localhost:8080/cart" className="shopping-bag">
                  <IonIcon icon={bag}></IonIcon>
                </a>
              </li>
              <li>
                <a href="#" className="user" id="user-icon">
                  <IonIcon icon={person}></IonIcon>
                  <p>Đăng nhập/ Đ.kí</p>
                </a>
                {/* <div className="user-info-form" id="user-info-form">
                  <div className="form-header">
                    <h2>Thông tin người dùng</h2>
                    <span className="close-form" id="close-form">
                      &times;
                    </span>
                  </div>
                  <form>
                    <div className="r1">
                      <div className="user-img">img</div>
                      <div className="form-group">
                        <label for="name">Tên:</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value="Phoebe :3"
                          readonly
                        ></input>
                        <label for="phone">Số điện thoại:</label>
                        <input
                          type="text"
                          id="phone"
                          name="phone"
                          value="0901121130"
                          readonly
                        ></input>
                      </div>
                    </div>
                    <div className="user-img-add">
                      <label for="image-upload">Sửa hình ảnh</label>
                      <input
                        type="file"
                        id="image-upload"
                        name="image-upload"
                        accept="image/*"
                      ></input>
                    </div>
                    <div className="form-group">
                      <label for="email">Email:</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value="nguyenvana@example.com"
                        readonly
                      ></input>
                    </div>
                    <div className="form-group password-group">
                      <label for="password">Mật khẩu:</label>
                      <div class="password-wrapper">
                        <input
                          type="password"
                          id="password"
                          name="password"
                          value="squishy_phoebe"
                          readonly
                        ></input>
                        <span className="toggle-password">
                          <ion-icon name="eye" class="eye-icon"></ion-icon>
                        </span>
                      </div>
                    </div>
                    <div className="form-group">
                      <label for="address">Địa chỉ:</label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value="123 Đường ABC, Quận 1, TP.HCM"
                        readonly
                      ></input>
                    </div>
                  </form>
                </div> */}
              </li>
            </div>
          </div>
          <div className="searchs">
            <input
              placeholder="Tìm kiếm sản phẩm..."
              type="input"
              class="search"
              name=""
              maxlength="40"
              size="20"
            ></input>
            <IonIcon icon={searchOutline}></IonIcon>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
