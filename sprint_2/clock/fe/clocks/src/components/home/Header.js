import {useEffect, useState} from "react";
import axios from "axios";
import Product from "../product/Product";
import {Link, useNavigate} from "react-router-dom";
import jwt_decode from "jwt-decode";
import Swal from "sweetalert2";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faClock} from '@fortawesome/free-solid-svg-icons';
import logo from './Màu đào Hình tròn Logo đám cưới.png';
import {FaShoppingCart, FaSignOutAlt, FaUser} from "react-icons/fa";

export const name = async () => {
    let name = document.getElementById("name").value;
    return name;
}
export default function Header() {
    const [JwtToken, setJwtToken] = useState(localStorage.getItem("JWT"));
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
    const [id, setId] = useState(""); // Trạng thái đăng nhập
    const [username, setUsername] = useState(''); // Tên người dùng

    const handleSearch = async (event) => {
        event.preventDefault();
        navigate(`/product?term=${encodeURIComponent(searchTerm)}`);
    };
    const infoAppUserByJwtToken = () => {
        const jwtToken = localStorage.getItem("JWT");
        if (jwtToken) {
            const result = jwt_decode(jwtToken);
            return result;
        }
    };
    useEffect(() => {
        getUsername();
    }, []);
    useEffect(() => {
        getId();
    }, []);
    const getUsername = async () => {
        const response = await infoAppUserByJwtToken();
        setUsername(response);
    };
    const getId = async () => {
        try {
            const isLoggedIn = infoAppUserByJwtToken();
            const id = await axios.get(`http://localhost:8080/api/user/getId?userName=${isLoggedIn.sub}`);
            setId(id.data);
        } catch (e) {
            console.log(e)
        }

    }
    const handleLogOut = () => {
        localStorage.removeItem("JWT");
        setJwtToken(undefined);
        setUsername(undefined);
        Swal.fire({
            title: "Đăng xuất thành công",
            icon: "success",
        });
    };
    return (
        <header id="header" style={{background: "rgba(4, 9, 30, 0.9)"}}>
            <div className="container">
                <div className="row align-items-center justify-content-between d-flex">
                    <div id="logo" className={"col-3"}>
                        <a style={{display: 'flex', alignItems: 'center', color: "white", textDecoration: "none"}}
                           href="/home">
                            <img style={{borderRadius: "10%"}} src={logo} alt="Màu đào Hình tròn Logo đám cưới"
                                 width={50} height={50}/>
                            <h1 style={{color: "white", textDecoration: "none", marginLeft: '10px'}}>VVT Shop</h1>
                        </a>
                    </div>
                    <nav className={"col-9"} id="nav-menu-container">
                        <ul className="nav-menu">
                            <li className=" menu-active">
                                <a href="/home">
                                    <i className="fa-solid fa-house-chimney"/> Trang chủ
                                </a>
                            </li>
                            <li className=" nav-item">
                                <Link
                                    to={"/product"}
                                    role="button"
                                    style={{color: "white"}}
                                >
                                    <FontAwesomeIcon icon={faClock}/> <i className="fa-duotone fa-watch"></i> Đồng hồ

                                </Link>
                            </li>
                            <li>
                                <form action="/product" method="get" className="d-flex" onSubmit={handleSearch}>
                                    <input type="text" name="action" value="search" hidden/>
                                    <input name="name" id="name" className="form-control me-2" type="text"
                                           value={searchTerm}
                                           onChange={(event) => setSearchTerm(event.target.value)}
                                           placeholder="Bạn cần tìm gì?"
                                           aria-label="Search"/>
                                    <button className="btn btn-outline-light" type="submit">
                                        <i className="fa-solid fa-magnifying-glass"></i>
                                    </button>
                                </form>
                            </li>
                            {username && (
                                <li className={""}>
                                    <Link className="nav-link active" aria-current="page"
                                          to={`/cart/${id}`} style={{color: "white"}}>
                                        <i className="fa-solid fa-cart-shopping"/> Giỏ hàng của bạn
                                    </Link>
                                </li>
                            )}
                            {!username ? (
                                <li className="nav-item" style={{position: "absolute", right: 0}}>
                                    <a className="nav-link active" aria-current="page" href="/"
                                       style={{color: "white"}}>
                                        <i className="fa-solid fa-circle-user"></i> Đăng Nhập
                                    </a>
                                </li>
                            ) : (
                                <li className="nav-item dropdown" style={{position: "absolute", right: 0}}>
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown"
                                       role="button"
                                       data-bs-toggle="dropdown" aria-expanded="false"
                                       style={{color: "white"}}>
                                        <i className="fa-solid fa-circle-user"></i> {username.sub}

                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown"
                                        style={{left: "auto", right: "0"}}>
                                        <li>
                                            <a href="/history"><FaShoppingCart/> Lịch sử mua
                                                hàng</a>
                                        </li>
                                        <li>
                                            <a href="/info"><FaUser/> Thông tin cá nhân</a>
                                        </li>
                                        <li>
                                            <div
                                                onClick={() => handleLogOut()}
                                            >
                                                <a><FaSignOutAlt/> Đăng xuất</a>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                            )}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}