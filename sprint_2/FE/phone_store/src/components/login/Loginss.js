import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup"

const Loginss = () => {
    const navigate = useNavigate();
    const [isSignUpMode, setIsSignUpMode] = useState(false);

    const handleSignUpClick = () => {
        setIsSignUpMode(true);
    };

    const handleSignInClick = () => {
        setIsSignUpMode(false);
    };
    useEffect(() => {
        document.title = 'VVT Shop - Trang đăng nhập'
    })
    const handleLogin = async () => {
        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;
        const account = {
            username: username,
            password: password
        }
        try {
            const result = axios.post(`http://localhost:8080/api/user/login`, account);
            localStorage.setItem("JWT", (await result).data);
            Swal.fire("Đăng nhập thành công", "", "success");
            navigate("/home")
        } catch (e) {
            Swal.fire({
                icon: 'error',
                text: 'Tên tài khoản hoặc mật khẩu không đúng',
            })
        }

    }

    const addAccounts = async (values, setErrors) => {
        try {
            await axios.post("http://localhost:8080/api/user", values);
            Swal.fire("Thêm tài khoản thành công", "", "success");
            navigate("")
        } catch (e) {
            if (e.response.status === 406) {
                console.log(e);
                setErrors(e.response.data);
            } else {
                Swal.fire(e.response.data, "", "warning");
                // alert(e.response.data);
            }
        }
    }

    return (
        <>
            <meta charSet="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>Login</title>
            <style
                dangerouslySetInnerHTML={{
                    __html:
                        '\n    @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap");\n\n    * {\n      margin: 0;\n      padding: 0;\n      box-sizing: border-box;\n    }\n\n    body {\n      background-image: linear-gradient(to right bottom, #051937, #194363, #36728e, #5ba4b6, #8ad8dc);\n    }\n\n    body,\n    input {\n      font-family: "Poppins", sans-serif;\n    }\n\n    .container {\n      position: relative;\n      width: 100%;\n      background: rgba(89, 149, 253, 0.15);\n      min-height: 100vh;\n      overflow: hidden;\n    }\n\n    .forms-container {\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      left: 0;\n    }\n\n    .signin-signup {\n      position: absolute;\n      top: 50%;\n      transform: translate(-50%, -50%);\n      left: 75%;\n      width: 50%;\n      transition: 1s 0.7s ease-in-out;\n      display: grid;\n      grid-template-columns: 1fr;\n      z-index: 5;\n    }\n\n    form {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      flex-direction: column;\n      padding: 0rem 5rem;\n      transition: all 0.2s 0.7s;\n      overflow: hidden;\n      grid-column: 1 / 2;\n      grid-row: 1 / 2;\n    }\n\n    form.sign-up-form {\n      opacity: 0;\n      z-index: 1;\n    }\n\n    form.sign-in-form {\n      z-index: 2;\n    }\n\n    .title {\n      border-bottom: solid rgba(89, 149, 253, 0.95) 3px;\n      font-size: 2.2rem;\n      color: #fff;\n      margin-bottom: 10px;\n    }\n\n    .input-field {\n      max-width: 380px;\n      width: 100%;\n      background: rgba(89, 149, 253, 0.95);\n      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);\n      backdrop-filter: blur(18.5px);\n      -webkit-backdrop-filter: blur(18.5px);\n      border-radius: 10px;\n      border: 1px solid rgba(255, 255, 255, 0.18);\n      margin: 10px 0;\n      height: 55px;\n      border-radius: 55px;\n      display: grid;\n      grid-template-columns: 15% 85%;\n      padding: 0 0.4rem;\n      position: static;\n    }\n\n    .input-field i {\n      text-align: center;\n      line-height: 55px;\n      color: #555;\n      transition: 0.5s;\n      font-size: 1.1rem;\n    }\n\n    .input-field input {\n      background: none;\n      outline: none;\n      border: none;\n      line-height: 1;\n      font-weight: 600;\n      font-size: 1.1rem;\n      color: #333;\n    }\n\n    .input-field input::placeholder {\n      color: #555;\n      font-weight: 500;\n    }\n\n    .social-text {\n      padding: 0.7rem 0;\n      font-size: 1rem;\n    }\n\n    .social-media {\n      display: flex;\n      justify-content: center;\n    }\n\n    .social-icon {\n      background: rgba(74, 144, 226, 0.35);\n      backdrop-filter: blur(1.0px);\n      -webkit-backdrop-filter: blur(1.0px);\n      border-radius: 10px;\n      border: 1px solid rgba(255, 255, 255, 0.18);\n      height: 46px;\n      width: 46px;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      margin: 0 0.45rem;\n      color: #fff;\n      border-radius: 50%;\n      border: 1px solid #333;\n      text-decoration: none;\n      font-size: 1.1rem;\n      transition: 0.3s;\n    }\n\n    .social-icon:hover {\n      color: #fff;\n      transform: translateY(-0.25em);\n      border-color: #4481eb;\n    }\n\n    .btn {\n      width: 150px;\n      background: rgba(89, 149, 253, 0.95);\n      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);\n      backdrop-filter: blur(18.5px);\n      -webkit-backdrop-filter: blur(18.5px);\n      border-radius: 10px;\n      border: 1px solid rgba(255, 255, 255, 0.18);\n      outline: none;\n      height: 49px;\n      border-radius: 49px;\n      color: #fff;\n      text-transform: uppercase;\n      font-weight: 600;\n      margin: 10px 0;\n      cursor: pointer;\n      transition: 0.5s;\n    }\n\n    .btn:hover {\n      background-color: #4d84e2;\n    }\n\n    .panels-container {\n      position: absolute;\n      height: 100%;\n      width: 100%;\n      top: 0;\n      left: 0;\n      display: grid;\n      grid-template-columns: repeat(2, 1fr);\n    }\n\n    .container:before {\n      content: "";\n      position: absolute;\n      height: 2000px;\n      width: 2000px;\n      top: -10%;\n      right: 48%;\n      transform: translateY(-50%);\n      transition: 1.8s ease-in-out;\n      border-radius: 50%;\n      z-index: 6;\n      background: rgba(255, 255, 255, 0.25);\n      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);\n      backdrop-filter: blur(4px);\n      -webkit-backdrop-filter: blur(4px);\n    }\n\n\n    .panel {\n      display: flex;\n      flex-direction: column;\n      align-items: flex-end;\n      justify-content: space-around;\n      text-align: center;\n      z-index: 6;\n    }\n\n    .left-panel {\n      pointer-events: all;\n      padding: 3rem 17% 2rem 12%;\n    }\n\n    .right-panel {\n      pointer-events: none;\n      padding: 3rem 12% 2rem 17%;\n    }\n\n    .panel .content {\n      color: #fff;\n      transition: transform 0.9s ease-in-out;\n      transition-delay: 0.6s;\n    }\n\n    .panel h3 {\n      font-weight: 600;\n      line-height: 1;\n      font-size: 1.5rem;\n    }\n\n    .panel p {\n      font-size: 0.95rem;\n      padding: 0.7rem 0;\n    }\n\n    .btn.transparent {\n      margin: 0;\n      background: none;\n      border: 2px solid #fff;\n      width: 130px;\n      height: 41px;\n      font-weight: 600;\n      font-size: 0.8rem;\n    }\n\n    .right-panel .content {\n      transform: translateX(800px);\n    }\n\n    /* ANIMATION */\n\n    .container.sign-up-mode:before {\n      transform: translate(100%, -50%);\n      right: 52%;\n    }\n\n    .container.sign-up-mode .left-panel .content {\n      transform: translateX(-800px);\n    }\n\n    .container.sign-up-mode .signin-signup {\n      left: 25%;\n    }\n\n    .container.sign-up-mode form.sign-up-form {\n      opacity: 1;\n      z-index: 2;\n    }\n\n    .container.sign-up-mode form.sign-in-form {\n      opacity: 0;\n      z-index: 1;\n    }\n\n    .container.sign-up-mode .right-panel .content {\n      transform: translateX(0%);\n    }\n\n    .container.sign-up-mode .left-panel {\n      pointer-events: none;\n    }\n\n    .container.sign-up-mode .right-panel {\n      pointer-events: all;\n    }\n\n\n    @media (max-width: 870px) {\n      .container {\n        min-height: 800px;\n        height: 100vh;\n      }\n\n      .signin-signup {\n        width: 100%;\n        top: 95%;\n        transform: translate(-50%, -100%);\n        transition: 1s 0.8s ease-in-out;\n      }\n\n      .signin-signup,\n      .container.sign-up-mode .signin-signup {\n        left: 50%;\n      }\n\n      .panels-container {\n        grid-template-columns: 1fr;\n        grid-template-rows: 1fr 2fr 1fr;\n      }\n\n      .panel {\n        flex-direction: row;\n        justify-content: space-around;\n        align-items: center;\n        padding: 2.5rem 8%;\n        grid-column: 1 / 2;\n      }\n\n      .right-panel {\n        grid-row: 3 / 4;\n      }\n\n      .left-panel {\n        grid-row: 1 / 2;\n      }\n\n\n      .panel .content {\n        padding-right: 15%;\n        transition: transform 0.9s ease-in-out;\n        transition-delay: 0.8s;\n      }\n\n      .panel h3 {\n        font-size: 1.2rem;\n      }\n\n      .panel p {\n        font-size: 0.7rem;\n        padding: 0.5rem 0;\n      }\n\n      .btn.transparent {\n        width: 110px;\n        height: 35px;\n        font-size: 0.7rem;\n      }\n\n      .container:before {\n        width: 1500px;\n        height: 1500px;\n        transform: translateX(-50%);\n        left: 30%;\n        bottom: 68%;\n        right: initial;\n        top: initial;\n        transition: 2s ease-in-out;\n      }\n\n      .container.sign-up-mode:before {\n        transform: translate(-50%, 100%);\n        bottom: 32%;\n        right: initial;\n      }\n\n      .container.sign-up-mode .left-panel .content {\n        transform: translateY(-300px);\n      }\n\n      .container.sign-up-mode .right-panel .content {\n        transform: translateY(0px);\n      }\n\n      .right-panel .content {\n        transform: translateY(300px);\n      }\n\n      .container.sign-up-mode .signin-signup {\n        top: 5%;\n        transform: translate(-50%, 0);\n      }\n    }\n\n    @media (max-width: 570px) {\n      form {\n        padding: 0 1.5rem;\n      }\n\n\n      .panel .content {\n        padding: 0.5rem 1rem;\n      }\n\n      .container {\n        padding: 1.5rem;\n      }\n\n      .container:before {\n        bottom: 72%;\n        left: 50%;\n      }\n\n      .container.sign-up-mode:before {\n        bottom: 28%;\n        left: 50%;\n      }\n    }\n\n  '
                }}
            />
            <input type="hidden" id="status" defaultValue="${status}"/>
            <div className={`container ${isSignUpMode ? 'sign-up-mode' : ''}`}>
                <div className="forms-container">
                    <div className="signin-signup">
                        <form action="home.html" className="sign-in-form" method="post">
                            {/*      <form action="/login?action=login" class="sign-in-form" method="post">*/}
                            <h2 className="title">Đăng nhập</h2>
                            <div className="input-field">
                                <i className="fas fa-user"/>
                                <input
                                    type="text"
                                    placeholder="Username"
                                    id="username"
                                    name="username"
                                    required
                                />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock"/>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    id="password"
                                    name="password"
                                    required
                                />
                            </div>
                            <button className="btn solid"
                                    type="button"
                                    onClick={() => handleLogin()}
                            >
                                Đăng nhập
                            </button>
                            <p className="social-text">Hoặc Đăng nhập bằng nền tảng xã hội</p>
                            <div className="social-media">
                                <a href="#" className="social-icon">
                                    <i className="fab fa-facebook-f"/>
                                </a>
                                <a href="#" className="social-icon">
                                    <i className="fab fa-twitter"/>
                                </a>
                                <a href="#" className="social-icon">
                                    <i className="fab fa-google"/>
                                </a>
                                <a href="#" className="social-icon">
                                    <i className="fab fa-linkedin-in"/>
                                </a>
                            </div>
                        </form>
                        <Formik initialValues={{
                            username: "",
                            password: "",
                            confirmPassword: ""
                        }
                        } onSubmit={(values, setErrors) => {
                            addAccounts(values, setErrors);
                        }
                        }
                                validationSchema={Yup.object({
                                    username: Yup.string().required('Vui lòng nhập tên người dùng'),
                                    password: Yup.string().required('Vui lòng nhập mật khẩu'),
                                    confirmPassword: Yup.string()
                                        .oneOf([Yup.ref('password'), null], 'Xác nhận mật khẩu không khớp')
                                        .required('Vui lòng xác nhận mật khẩu'),
                                })}
                        >
                            <Form
                                action="/login?action=registration"
                                className="sign-up-form"
                                method="post"
                            >
                                <h2 className="title">Đăng ký</h2>
                                <div className="input-field">
                                    <i className="fas fa-user"/>
                                    <Field
                                        type="text"
                                        placeholder="Username"
                                        name="username"
                                        required="required"
                                    />
                                </div>
                                <div style={{height:"12px"}}>
                                    <ErrorMessage className="text-danger" name="username" component="small"/>
                                </div>
                                {/*<div className="input-field">*/}
                                {/*    <i className="fas fa-envelope"/>*/}
                                {/*    <input*/}
                                {/*        type="email"*/}
                                {/*        placeholder="Email"*/}
                                {/*        name="email"*/}
                                {/*        required="required"*/}
                                {/*    />*/}
                                {/*</div>*/}
                                <div className="input-field">
                                    <i className="fas fa-lock"/>
                                    <Field
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                        required="required"
                                    />
                                </div>
                                <div style={{height:"12px"}}>
                                    <ErrorMessage className="text-danger" name="password" component="small"/>
                                </div>
                                <div className="input-field">
                                    <i className="fas fa-lock"/>
                                    <Field
                                        type="password"
                                        placeholder="Xác nhận password"
                                        name="confirmPassword"
                                        required="required"
                                    />
                                </div>
                                <div style={{height:"12px"}}>
                                    <ErrorMessage className="text-danger" name="confirmPassword" component="small"/>
                                </div>
                                <input type="submit" className="btn" value="Đăng ký"/>
                                <p className="social-text">Hoặc Đăng ký bằng nền tảng xã hội</p>
                                <div className="social-media">
                                    <a href="#" className="social-icon">
                                        <i className="fab fa-facebook-f"/>
                                    </a>
                                    <a href="#" className="social-icon">
                                        <i className="fab fa-twitter"/>
                                    </a>
                                    <a href="#" className="social-icon">
                                        <i className="fab fa-google"/>
                                    </a>
                                    <a href="#" className="social-icon">
                                        <i className="fab fa-linkedin-in"/>
                                    </a>
                                </div>
                            </Form>
                        </Formik>
                    </div>
                </div>
                <div className="panels-container">
                    <div className="panel left-panel">
                        <div className="content">
                            <h3>Chào mừng trở lại</h3>
                            <p>
                                Để theo dõi chúng tôi, vui lòng đăng nhập bằng thông tin cá nhân của
                                bạn
                            </p>
                            <button className="btn transparent" id="sign-up-btn" onClick={handleSignUpClick}>
                                Đăng ký
                            </button>
                        </div>
                    </div>
                    <div className="panel right-panel">
                        <div className="content">
                            <h3>Chào bạn</h3>
                            <p>
                                Nhập thông tin cá nhân của bạn và bắt đầu hành trình với chúng tôi
                            </p>
                            <button className="btn transparent" id="sign-in-btn" onClick={handleSignInClick}>
                                Đăng nhập
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <link rel="stylesheet" href="alert/dist/sweetalert.css"/>
        </>
    )
}

export default Loginss;