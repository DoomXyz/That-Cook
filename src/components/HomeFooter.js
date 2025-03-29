import React, { Component } from 'react';
import { IonIcon } from "@ionic/react"; //import thư viện icon
import { logoInstagram, logoTwitter } from "ionicons/icons";
import './HomeFooter.scss';

class Footer extends Component {
    render() {
        return (
            <div class="footer">
                <div class="contact">
                    <p>Thông tin liên hệ</p>
                    <li><b>Mincow</b> là trang mua sắm trực tuyến các sản phẩm bán lẻ dành cho thú cưng của <b>Mincow Pet Shop</b>.
                        <b>Công ty TNHH MINCOW</b>. Giấy chứng nhận Đăng ký Kinh doanh số 0315592769 do Sở Kế hoạch và Đầu tư Thành phố
                        Hồ Chí Minh cấp ngày 28/03/2019.
                    </li>
                </div>
                <div class="address">
                    <p>Thông tin cửa hàng</p>
                    <li><b>Địa chỉ</b>: 136 Huỳnh Văn Bánh, p. 11, quận Phú Nhuận, HCM</li>
                    <li><b>0901131141</b></li>
                    <li>info@mincow.vn</li>
                </div>
                <div class="support">
                    <div class="suport-cus">
                        <p>Chăm sóc khách hàng</p>
                        <li><img src="images/icon/phone-call.png" alt="" /><b>0901131141</b></li>
                    </div>

                </div>
            </div>
        );
    }
}

export default Footer;