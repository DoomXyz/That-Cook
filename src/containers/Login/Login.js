import React, { Component } from 'react';
import { connect } from 'react-redux';
import { IonIcon } from "@ionic/react"; //import thư viện icon
import { home, mailOutline, eyeOffOutline, eyeOutline } from "ionicons/icons"; //chỉ import các icon cần dùng
import './Login.scss'; //import scss
import { handleLoginApi } from '../../services/userServices'; //import hành động login
import { setUserInfo } from '../../store/actions/userActions'; //import hành động lưu thông tin người dùng xuống local storage để sử dụng

class Login extends Component {
    constructor(props) {
        super(props);
        //set cả state cần quản lý ở giá trị mặc định
        this.state = {
            email: '',
            password: '',
            isTogglePassword: false,
            errMessage: '',
        }
    }
    //state khi thay đổi ô email để set ô email theo người dùng nhập ở thời gian thực
    handleOnChangeEmail = (event) => {
        this.setState({
            email: event.target.value,
        })
    }
    //tương tự trên nhưng là password
    handleOnChangePassword = (event) => {
        this.setState({
            password: event.target.value,
        })
    }
    //state khi ấn nút đăng nhập
    handleLogin = async () => {
        this.setState({
            errMessage: ''
        })
        try {
            //gọi api login ở backend, truyển email và password đi để kiểm tra
            //biến data dùng để lưu thông tin trả về từ api
            let data = await handleLoginApi(this.state.email, this.state.password);
            //nếu nhận được thông tin từ backend với mã lỗi khác 0 -> các trường hợp sai mail, sai pass,...
            if (data && data.errCode !== 0) {
                this.setState({
                    errMessage: data.errMessage
                })
            }
            //login thành công
            if (data && data.errCode === 0) {
                // Lưu token vào localStorage
                localStorage.setItem('token', data.token);
                this.props.setUserInfo(data.taikhoan); //data có dạng data.user chứa các thông tin của người dùng, truyền nó đi để tiến hành lưu vào local storage
                // Chuyển hướng dựa trên MaLoaiTK
                if (data.taikhoan.MaLoaiTK === 1) {
                    this.props.navigate('/user/admin'); // Admin vào trang admin
                } else {
                    this.props.navigate('/user'); // User thường vào trang user tương lại là về trang shop
                }
            }
        } catch (error) {
            //lỗi không có thông tin được gửi đi api, trường hợp email và password đều trống
            if (error.response) {
                if (error.response.data) {
                    this.setState({
                        errMessage: error.response.data.errMessage
                    })
                }
            }
        }
    }
    //quản lý state ẩn hiện password
    handleTogglePassword = () => {
        this.setState({
            //khi ấn vào thì chuyển state thành state đối nghịch
            isTogglePassword: !this.state.isTogglePassword
        })
    }
    //hàm render ra trang html
    //class -> className
    //for -> htmlFor
    render() {
        return (
            //1 trang html bắt buộc phải được bọc bằng 1 div lớn
            <div className='login-background'>
                <div className='login-container'>
                    <div className='login-content'>
                        <div className='home-button'>
                            <a href=""><IonIcon icon={home}></IonIcon></a>
                        </div>
                        <div className='text-login'>
                            ĐĂNG NHẬP
                        </div>
                        <div className="inputbox">
                            <IonIcon icon={mailOutline}></IonIcon>
                            <input type="email"
                                placeholder=''
                                //set value của ô input bằng dữ liệu của state
                                value={this.state.email}
                                //quản lý event khi thay đổi thì gọi hàm handleOnChangeEmail để chuyển state
                                onChange={(event) => this.handleOnChangeEmail(event)}
                                required />
                            <label>Email</label>
                        </div>
                        <div className="inputbox">
                            <div className="toggle-password"
                                //quản lý event khi click vào thì gọi hàm để chuyển state
                                onClick={() => this.handleTogglePassword()}
                            >
                                <IonIcon
                                    //biến icon của IonIcon, icon sẽ dựa vào state isTogglePassword true hoặc false để đổi icon tương ứng
                                    icon={this.state.isTogglePassword ? eyeOutline : eyeOffOutline}></IonIcon>
                            </div>
                            <input
                                //các state hoạt động như email
                                type={this.state.isTogglePassword ? 'text' : 'password'}
                                id="password"
                                placeholder=''
                                value={this.state.password}
                                onChange={(event) => this.handleOnChangePassword(event)}
                                required />
                            <label>Mật khẩu</label>
                        </div>
                        <div className='error-message'>
                            {this.state.errMessage}
                        </div>
                        <div className="password-util">
                            <label><input type="checkbox" className="remember-password" />Nhớ mật khẩu</label>
                            <a className='forgot-password'>Quên mật khẩu?</a>
                        </div>
                        <button className='login-button'
                            //quản lý event khi click vào thì gọi hàm
                            onClick={() => { this.handleLogin() }}>
                            <p>Đăng nhập</p>
                        </button>
                        <div className='signin'>
                            <p>
                                Không có tài khoản?
                                <a href=""> Đăng ký ngay</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

//hàm kết nối đến Redux
const mapStateToProps = (state) => ({
    userEmail: state.user.email, // Lấy email từ Redux
    userMaLoaiTK: state.user.maLoaiTK, // Lấy MaLoaiTK từ Redux
});

const mapDispatchToProps = {
    setUserInfo, //gọi hành động
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);