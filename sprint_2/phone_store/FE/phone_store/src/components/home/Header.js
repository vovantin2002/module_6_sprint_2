import {useEffect, useState} from "react";
import axios from "axios";
import Product from "../product/Product";
import {Link, useNavigate} from "react-router-dom";
import jwt_decode from "jwt-decode";
import Swal from "sweetalert2";

export const name = async () => {
    let name = document.getElementById("name").value;
    console.log(name)
    return name;
}
export default function Header() {
    const [products, setProducts] = useState([]);
    const [JwtToken, setJwtToken] = useState(localStorage.getItem("JWT"));
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
    const [id, setId] = useState(""); // Trạng thái đăng nhập
    const [isLoggedIn, setIsLoggedIn] = useState(""); // Trạng thái đăng nhập
    const [username, setUsername] = useState(''); // Tên người dùng

    const handleLogin = () => {
        // Logic đăng nhập
        setIsLoggedIn(true);
        setUsername('John Doe'); // Thay thế 'John Doe' bằng tên người dùng thực tế
    };

    const handleLogout = () => {
        // Logic đăng xuất
        setIsLoggedIn(false);
        setUsername('');
    };

    const handleSearch = async (event) => {
        event.preventDefault();
        navigate(`/product?term=${encodeURIComponent(searchTerm)}`);
        // const result = await axios.get(`http://localhost:8080/api/product?modelName=${searchTerm}&productTypes=&minPrice=&maxPrice=&phoneBrands=&page=0&size=8`);
        // await console.log(result.data.content);
        // await setProducts(result?.data.content);

        // onSearch(searchTerm);
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
            console.log(id.data);
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
        // navigate("/home");
    };
    return (
        <>
            {/*<div>*/}
            {/*    {*/}
            {/*        <Product props={searchTerm}></Product>*/}
            {/*    }*/}
            {/*</div>*/}
            <nav className="navbar navbar-expand-lg navbar-light container-fluid" style={{
                fontSize: '13px',
                backgroundImage: 'linear-gradient(to right bottom, #051937, #194363, #36728e, #5ba4b6, #8ad8dc)'
            }}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/home" style={{color: "white"}}>
                        VVT SHOP
                        {/*// <!--                <img src="https://png.pngtree.com/png-clipart/20200727/original/pngtree-smartphone-shop-sale-logo-design-png-image_5069958.jpg" alt="" width="50" height="50">-->*/}
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/*// <!--            <%&#45;&#45;        left&#45;&#45;%>-->*/}
                    <div>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/home"
                                       style={{color: "white"}}>
                                        <i className="fa-solid fa-house-chimney"></i>
                                        Trang chủ
                                    </a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                       data-bs-toggle="dropdown" aria-expanded="false" style={{color: "white"}}>
                                        <i className="fa-solid fa-book"></i>
                                        Danh mục
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="/product">Điện thoại</a></li>
                                        <li><a className="dropdown-item" href="#">Phụ kiện</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown1" role="button"
                                       data-bs-toggle="dropdown" aria-expanded="false" style={{color: "white"}}>
                                        <i className="fa-solid fa-location-dot"></i>
                                        Xem vị trí cửa hàng
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">
                                        <li><a className="dropdown-item" href="#">Đà Nẵng</a></li>
                                        <li><a className="dropdown-item" href="#">Hà Nội</a></li>
                                        <li><a className="dropdown-item" href="#">Hồ Chí Minh</a></li>
                                    </ul>
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
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#"
                                       style={{marginLeft: "10px", color: "white"}}>
                                        <span><i className="fa-solid fa-phone" style={{color: "white"}}></i></span>Liên
                                        hệ
                                        Shop
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/*// <!--            <%&#45;&#45;        left&#45;&#45;%>-->*/}
                    {/*//*/}
                    {/*// <!--            <%&#45;&#45;        right&#45;&#45;%>-->*/}
                    <div>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {username && (
                                <li className="nav-item" style={{marginTop: "auto", marginBottom: "auto"}}>
                                    {/*// <!--                        <c:if test="${sessionScope.user==null}">-->*/}
                                    {/*// <!--                            <a class="nav-link active" aria-current="page" href="/login" style={{color: "white"}}>-->*/}
                                    {/*// <!--                                <i class="fa-solid fa-truck-fast"></i>Đơn hàng của bạn-->*/}
                                    {/*// <!--                            </a>-->*/}
                                    {/*// <!--                        </c:if>-->*/}
                                    {/*// <!--                        <c:if test="${sessionScope.user!=null}">-->*/}
                                    <Link className="nav-link active" aria-current="page"
                                          to={`/cart/${id}`} style={{color: "white"}}>
                                        <i className="fa-solid fa-cart-shopping"></i>Đơn hàng của bạn
                                    </Link>
                                    {/*// <!--                        </c:if>-->*/}
                                </li>
                            )}
                            {/*<li className="nav-item">*/}
                            {/*    <a className="nav-link active" aria-current="page" href="/view/cart_shopping/cart.jsp"*/}
                            {/*       style={{color: "white"}}>*/}
                            {/*// <!--                            <i class="fa-solid fa-bag-shopping" style="font-size: 20px"></i> <b style="font-size: 15px">${sessionScope.cart.itemsList.size()}</b>-->*/}
                            {/*    </a>*/}
                            {/*</li>*/}
                            {/*// <!--                    <c:choose>-->*/}
                            {/*// <!--                        <c:when test="${sessionScope.user!=null && sessionScope.user.getRoleID()==1}">-->*/}
                            {/*<li className="nav-item dropdown">*/}
                            {/*    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button"*/}
                            {/*       data-bs-toggle="dropdown" aria-expanded="false">*/}
                            {/*// <!--                                    <span><b style={{color: "white"}}> Xin chào ${sessionScope.user.getUserName()}</b></span>-->*/}
                            {/*    </a>*/}
                            {/*    <ul className="dropdown-menu p-0" aria-labelledby="navbarDropdown2">*/}
                            {/*        <li><a className="dropdown-item" href="/customer">Quản lý khách hàng</a></li>*/}
                            {/*        <li><a className="dropdown-item" href="/employee">Quản lý nhân viên</a></li>*/}
                            {/*        <li><a className="dropdown-item" href="/product">Quản lý sản phẩm</a></li>*/}
                            {/*        <li><a className="dropdown-item" href="/order">Quản lý đơn hàng</a></li>*/}
                            {/*        <li><a className="dropdown-item" href="#">Thông tin tài khoản</a></li>*/}
                            {/*        <li>*/}
                            {/*            <hr className="dropdown-divider"/>*/}
                            {/*        </li>*/}
                            {/*        <li><a className="nav-link active" aria-current="page" href="/logout">*/}
                            {/*            Đăng xuất*/}
                            {/*        </a>*/}
                            {/*        </li>*/}
                            {/*    </ul>*/}
                            {/*</li>*/}
                            {/*// <!--                        </c:when>-->*/}
                            {/*// <!--                        <c:when test="${sessionScope.user!=null && sessionScope.user.getRoleID()==2}">-->*/}
                            {/*<li className="nav-item dropdown">*/}
                            {/*    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown3" role="button"*/}
                            {/*       data-bs-toggle="dropdown" aria-expanded="false">*/}
                            {/*// <!--                                    <span><b style="color: white;">Xin chào ${sessionScope.user.getUserName()}</b></span>-->*/}
                            {/*    </a>*/}
                            {/*    <ul className="dropdown-menu" aria-labelledby="navbarDropdown3">*/}
                            {/*        <li><a className="dropdown-item"*/}
                            {/*               href="/customer?action=detail&idAccount=${sessionScope.user.userId}">Thông*/}
                            {/*            tin tài*/}
                            {/*            khoản</a></li>*/}
                            {/*        <li>*/}
                            {/*            <hr className="dropdown-divider"/>*/}
                            {/*        </li>*/}
                            {/*        <li>*/}
                            {/*            <div*/}
                            {/*                className="dropdown-text"*/}
                            {/*                onClick={() => handleLogOut()}*/}
                            {/*            >*/}
                            {/*                Đăng xuất*/}
                            {/*            </div>*/}
                            {/*            /!*<a className="nav-link active" aria-current="page" href="/logout">Đăng xuất*!/*/}
                            {/*            /!*</a>*!/*/}
                            {/*        </li>*/}
                            {/*    </ul>*/}
                            {/*</li>*/}
                            {/*// <!--                        </c:when>-->*/}
                            {/*// <!--                        <c:otherwise>-->*/}
                            {/*<ul>*/}
                            {isLoggedIn ? (
                                <li className="nav-item">
                                        <span className="nav-link" style={{color: 'white'}}>
                                          <i className="fa-solid fa-circle-user"></i>
                                            {username}
                                        </span>
                                    <button className="btn" onClick={handleLogout}>
                                        Đăng Xuất
                                    </button>
                                </li>
                            ) : (
                                <li className="nav-item">
                                    <a
                                        className="nav-link active"
                                        aria-current="page"
                                        href="/"
                                        style={{color: 'white'}}

                                    >
                                        {!username ? (
                                            <li className="nav-item">
                                                <a className="nav-link active" aria-current="page" href="/"
                                                   style={{color: "white"}}>
                                                    <i className="fa-solid fa-circle-user"></i>Đăng Nhập
                                                </a>
                                            </li>
                                            // <Link to="/login">
                                            //     <span className="user-info">Đăng nhập</span>
                                            // </Link>
                                        ) : (
                                            <li className="nav-item dropdown">
                                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown"
                                                   role="button"
                                                   data-bs-toggle="dropdown" aria-expanded="false"
                                                   style={{color: "white"}}>
                                                    <i className="fa-solid fa-circle-user"></i>
                                                    {username.sub}
                                                </a>
                                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown" style={{left:"auto",right:"0"}}>
                                                    <li>
                                                        <div>
                                                            <a className="dropdown-item" href="/history">Lịch sử mua
                                                                hàng</a>
                                                        </div></li>
                                                    <li>
                                                        <div
                                                            className="dropdown-item"
                                                            onClick={() => handleLogOut()}
                                                        >
                                                            Đăng xuất
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                        )}
                                        {/*<i className="fa-solid fa-circle-user"></i>Đăng Nhập*/}
                                    </a>
                                </li>
                            )}
                            {/*</ul>*/}
                            {/*// <!--                        </c:otherwise>-->*/}
                            {/*// <!--                    </c:choose>-->*/}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}