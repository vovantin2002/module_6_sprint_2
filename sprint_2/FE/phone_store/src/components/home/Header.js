export default function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light container-fluid " style="font-size: 13px;             background-image: linear-gradient(to right bottom, #051937, #194363, #36728e, #5ba4b6, #8ad8dc);
">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/" style="color: white">
                        PHONE STORE
                        <!--                <img src="https://png.pngtree.com/png-clipart/20200727/original/pngtree-smartphone-shop-sale-logo-design-png-image_5069958.jpg" alt="" width="50" height="50">-->
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <!--            <%&#45;&#45;        left&#45;&#45;%>-->
                    <div>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/home"
                                       style="color: white">
                                        <i className="fa-solid fa-house-chimney"></i>
                                        Trang chủ
                                    </a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                       data-bs-toggle="dropdown" aria-expanded="false" style="color: white">
                                        <i className="fa-solid fa-book"></i>
                                        Danh mục
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="#">Điện thoại</a></li>
                                        <li><a className="dropdown-item" href="#">Phụ kiện</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown1" role="button"
                                       data-bs-toggle="dropdown" aria-expanded="false" style="color: white">
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
                                    <form action="/product" method="get" className="d-flex">
                                        <input type="text" name="action" value="search" hidden>
                                            <input name="name" className="form-control me-2" type="text"
                                                   placeholder="Bạn cần tìm gì?"
                                                   aria-label="Search">
                                                <button className="btn btn-outline-light" type="submit">
                                                    <i className="fa-solid fa-magnifying-glass"></i>
                                                </button>
                                    </form>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#"
                                       style="margin-left: 10px;color: white">
                                        <span><i className="fa-solid fa-phone" style="color: white"></i></span>Liên hệ
                                        Shop
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!--            <%&#45;&#45;        left&#45;&#45;%>-->

                    <!--            <%&#45;&#45;        right&#45;&#45;%>-->
                    <div>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <!--                        <c:if test="${sessionScope.user==null}">-->
                                <!--                            <a class="nav-link active" aria-current="page" href="/login" style="color: white">-->
                                <!--                                <i class="fa-solid fa-truck-fast"></i>Đơn hàng của bạn-->
                                <!--                            </a>-->
                                <!--                        </c:if>-->
                                <!--                        <c:if test="${sessionScope.user!=null}">-->
                                <a className="nav-link active" aria-current="page"
                                   href="/order?action=back&id=${sessionScope.user.userId}" style="color: white">
                                    <i className="fa-solid fa-truck-fast"></i>Đơn hàng của bạn
                                </a>
                                <!--                        </c:if>-->
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/view/cart_shopping/cart.jsp"
                                   style="color: white">
                                    <!--                            <i class="fa-solid fa-bag-shopping" style="font-size: 20px"></i> <b style="font-size: 15px">${sessionScope.cart.itemsList.size()}</b>-->
                                </a>
                            </li>
                            <!--                    <c:choose>-->
                            <!--                        <c:when test="${sessionScope.user!=null && sessionScope.user.getRoleID()==1}">-->
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button"
                                   data-bs-toggle="dropdown" aria-expanded="false">
                                    <!--                                    <span><b style="color: white"> Xin chào ${sessionScope.user.getUserName()}</b></span>-->
                                </a>
                                <ul className="dropdown-menu p-0" aria-labelledby="navbarDropdown2">
                                    <li><a className="dropdown-item" href="/customer">Quản lý khách hàng</a></li>
                                    <li><a className="dropdown-item" href="/employee">Quản lý nhân viên</a></li>
                                    <li><a className="dropdown-item" href="/product">Quản lý sản phẩm</a></li>
                                    <li><a className="dropdown-item" href="/order">Quản lý đơn hàng</a></li>
                                    <li><a className="dropdown-item" href="#">Thông tin tài khoản</a></li>
                                    <li>
                                        <hr className="dropdown-divider">
                                    </li>
                                    <li><a className="nav-link active" aria-current="page" href="/logout">
                                        Đăng xuất
                                    </a>
                                    </li>
                                </ul>
                            </li>
                            <!--                        </c:when>-->
                            <!--                        <c:when test="${sessionScope.user!=null && sessionScope.user.getRoleID()==2}">-->
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown3" role="button"
                                   data-bs-toggle="dropdown" aria-expanded="false">
                                    <!--                                    <span><b style="color: white;">Xin chào ${sessionScope.user.getUserName()}</b></span>-->
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown3">
                                    <li><a className="dropdown-item"
                                           href="/customer?action=detail&idAccount=${sessionScope.user.userId}">Thông
                                        tin tài
                                        khoản</a></li>
                                    <li>
                                        <hr className="dropdown-divider">
                                    </li>
                                    <li>
                                        <a className="nav-link active" aria-current="page" href="/logout">Đăng xuất
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <!--                        </c:when>-->
                            <!--                        <c:otherwise>-->
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="login.html"
                                   style="color: white">
                                    <i className="fa-solid fa-circle-user"></i>Đăng Nhập
                                </a>
                            </li>
                            <!--                        </c:otherwise>-->
                            <!--                    </c:choose>-->
                        </ul>
                    </div>
                </div>
            </nav>
        </>
)
}