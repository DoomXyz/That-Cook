import React, { Component } from 'react';
import { IonIcon } from "@ionic/react"; //import thư viện icon
import { menu, cart } from "ionicons/icons";
import { Link } from 'react-router-dom';
import './HomeHeader.scss';

class Header extends Component {
    render() {
        return (
            <div className='header-container'>
                <div className='header-content'>
                    <div className='left-content'>
                        <IonIcon icon={menu} className='menu-icon'></IonIcon>
                        <div className='header-logo'></div>
                    </div>
                    <div className='center-content'>
                        <div className='sub-content'>
                            <b>THỨC ĂN CHO CHÓ</b>
                        </div>
                        <div className='sub-content'>
                            <b>THỨC ĂN CHO MÈO</b>
                        </div>
                        <div className='sub-content'>
                            <b>PHỤ KIỆN CHO CHÓ</b>
                        </div>
                        <div className='sub-content'>
                            <b>PHỤ KIỆN CHO MÈO</b>
                        </div>
                    </div>
                    <div className='right-content'>
                        <div className='stuff-content'>
                            <IonIcon icon={cart} className='cart-icon'></IonIcon>
                            <div className='sub-stuff'>Giỏ hàng</div>
                        </div>
                        <div className='stuff-content'>
                            <div className='sub-stuff'>Đăng nhập/Đăng ký</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;