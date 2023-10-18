// import "./Login.css";
// import {useState} from "react";
// import {useNavigate} from "react-router-dom";
// import Swal from "sweetalert2";
//
// export default function Login() {
//     const [status, setStatus] = useState('');
//     const navigate = useNavigate();
//     // const handleLogin = async () => {
//     //     let userName = document.getElementById('userName').value;
//     //     let password = document.getElementById('password').value;
//     //     const appUser = {
//     //         userName: userName,
//     //         password: password
//     //     }
//     //     try {
//     //         // const result = axios.post(`http://localhost:8080/api/user/login`, appUser);
//     //         // await localStorage.setItem("JWT", result.data);
//     //         // appUserService.addJwtTokenToLocalStorage();
//     //         navigate("/home")
//     //     } catch (e) {
//     //         Swal.fire({
//     //             icon: 'error',
//     //             text: 'Tài khoản hoặc mật khẩu không đúng',
//     //         })
//     //     }
//     //
//     // }
//
//     const handleLogin = (event) => {
//         event.preventDefault();
//         // Xử lý đăng nhập
//         // Cập nhật trạng thái (status) tùy thuộc vào kết quả đăng nhập
//         var status = document.getElementById("status").value;
//         if (status == "failed") {
//             Swal("SORRY", "Wrong Username or Password", "error");
//         } else if (status == "invalidEmail") {
//             Swal("sorry", "Please Enter Username", "error");
//         } else if (status == "invalidPassword") {
//             Swal("sorry", "Please Enter Password", "error");
//         }
//         setStatus('failed');
//     };
//
//     const handleRegistration = (event) => {
//         event.preventDefault();
//         // Xử lý đăng ký
//         const sign_in_btn = document.querySelector("#sign-in-btn");
//         const sign_up_btn = document.querySelector("#sign-up-btn");
//         const container = document.querySelector(".container");
//
//         sign_up_btn.addEventListener("click", () => {
//             container.classList.add("sign-up-mode");
//         });
//
//         sign_in_btn.addEventListener("click", () => {
//             container.classList.remove("sign-up-mode");
//         });
//
//     };
//     const [isSignUpMode, setIsSignUpMode] = useState(false);
//
//     const handleSignUpClick = () => {
//         setIsSignUpMode(true);
//     };
//
//     const handleSignInClick = () => {
//         setIsSignUpMode(false);
//     };
//
//     const handleInputChange = (event) => {
//         // Xử lý thay đổi giá trị các ô đầu vào (input fields)
//     };
//
//     const switchToSignInMode = () => {
//         setStatus('');
//     };
//
//     const switchToSignUpMode = () => {
//         setStatus('');
//     };
//     return (
//         <>
//             <div id="tincute">
//                 {/*<input type="hidden" id="status" value="${status}">*/}
//                 <div className="container">
//                     <div className="forms-container">
//                         <div className="signin-signup">
//                             <form action="home.html" className="sign-in-form" method="post" onSubmit={handleLogin}>
//                                 {/*// <!--      <form action="/login?action=login" class="sign-in-form" method="post">-->*/}
//                                 <h2 className="title">Đăng nhập</h2>
//                                 <div className="input-field">
//                                     <i className="fas fa-user"></i>
//                                     <input type="text" placeholder="Username" name="username" required="required"
//                                            onChange={handleInputChange}/>
//                                 </div>
//                                 <div className="input-field">
//                                     <i className="fas fa-lock"></i>
//                                     <input type="password" placeholder="Password" name="password" required="required"
//                                            onChange={handleInputChange}/>
//                                 </div>
//                                 <a href="home.html">
//                                     <input type="submit" value="Đăng nhập" className="btn solid"/>
//                                     {/*// <!--        <input type="submit" value="Login" class="btn solid"/>-->*/}
//                                 </a>
//                                 <p className="social-text">Hoặc Đăng nhập bằng nền tảng xã hội</p>
//                                 <div className="social-media">
//                                     <a href="#" className="social-icon">
//                                         <i className="fab fa-facebook-f"></i>
//                                     </a>
//                                     <a href="#" className="social-icon">
//                                         <i className="fab fa-twitter"></i>
//                                     </a>
//                                     <a href="#" className="social-icon">
//                                         <i className="fab fa-google"></i>
//                                     </a>
//                                     <a href="#" className="social-icon">
//                                         <i className="fab fa-linkedin-in"></i>
//                                     </a>
//                                 </div>
//                             </form>
//                             <form action="/login?action=registration" className="sign-up-form" method="post"
//                                   onSubmit={handleRegistration}>
//                                 <h2 className="title">Đăng ký</h2>
//                                 <div className="input-field">
//                                     <i className="fas fa-user"></i>
//                                     <input type="text" placeholder="Username" name="username" required="required"
//                                            onChange={handleInputChange}/>
//                                 </div>
//                                 <div className="input-field">
//                                     <i className="fas fa-envelope"></i>
//                                     <input type="email" placeholder="Email" name="email" required="required"
//                                            onChange={handleInputChange}/>
//                                 </div>
//                                 <div className="input-field">
//                                     <i className="fas fa-lock"></i>
//                                     <input type="password" placeholder="Password" name="password" required="required"
//                                            onChange={handleInputChange}/>
//                                 </div>
//                                 <input type="submit" className="btn" value="Đăng ký"/>
//                                 <p className="social-text">Hoặc Đăng ký bằng nền tảng xã hội</p>
//                                 <div className="social-media">
//                                     <a href="#" className="social-icon">
//                                         <i className="fab fa-facebook-f"></i>
//                                     </a>
//                                     <a href="#" className="social-icon">
//                                         <i className="fab fa-twitter"></i>
//                                     </a>
//                                     <a href="#" className="social-icon">
//                                         <i className="fab fa-google"></i>
//                                     </a>
//                                     <a href="#" className="social-icon">
//                                         <i className="fab fa-linkedin-in"></i>
//                                     </a>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                     <div className="panels-container">
//                         <div className="panel left-panel">
//                             <div className="content">
//                                 <h3>Chào mừng trở lại</h3>
//                                 <p>
//                                     Để theo dõi chúng tôi, vui lòng đăng nhập bằng thông tin cá nhân của bạn
//                                 </p>
//                                 <button className="btn transparent" id="sign-up-btn" onClick={handleSignUpClick}>
//                                     Đăng ký
//                                 </button>
//                             </div>
//                         </div>
//                         <div className="panel right-panel">
//                             <div className="content">
//                                 <h3>Chào bạn</h3>
//                                 <p>
//                                     Nhập thông tin cá nhân của bạn và bắt đầu hành trình với chúng tôi
//                                 </p>
//
//                                 <button className="btn transparent" type={"submit"} id="sign-in-btn" onClick={handleSignInClick}>
//                                     Đăng nhập
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                     {status === 'failed' && (
//                         <script>
//                             swal('SORRY', 'Wrong Username or Password', 'error');
//                         </script>
//                     )}
//                     {status === 'invalidEmail' && (
//                         <script>
//                             swal('sorry', 'Please Enter Username', 'error');
//                         </script>
//                     )}
//                     {status === 'invalidPassword' && (
//                         <script>
//                             swal('sorry', 'Please Enter Password', 'error');
//                         </script>
//                     )}
//                 </div>
//             </div>
//         </>
//     )
// }