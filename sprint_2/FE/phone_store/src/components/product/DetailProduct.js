export default function DetailProduct() {
    return(
        <>
            <div>
                <!--<input type="hidden" id="status" value="${status}">-->
                <!--<nav class="navbar navbar-expand-lg navbar-light container-fluid " style="font-size: 13px;             background-image: linear-gradient(to right bottom, #051937, #194363, #36728e, #5ba4b6, #8ad8dc);-->
                <!--">-->
                <!--    <div class="container-fluid">-->
                <!--        <a class="navbar-brand" href="/" style="color: white">-->
                <!--            PHONE STORE-->
                <!--            &lt;!&ndash;                <img src="https://png.pngtree.com/png-clipart/20200727/original/pngtree-smartphone-shop-sale-logo-design-png-image_5069958.jpg" alt="" width="50" height="50">&ndash;&gt;-->
                <!--        </a>-->
                <!--        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"-->
                <!--                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"-->
                <!--                aria-expanded="false" aria-label="Toggle navigation">-->
                <!--            <span class="navbar-toggler-icon"></span>-->
                <!--        </button>-->
                <!--        &lt;!&ndash;            <%&#45;&#45;        left&#45;&#45;%>&ndash;&gt;-->
                <!--        <div>-->
                <!--            <div class="collapse navbar-collapse" id="navbarSupportedContent">-->
                <!--                <ul class="navbar-nav me-auto mb-2 mb-lg-0">-->
                <!--                    <li class="nav-item">-->
                <!--                        <a class="nav-link active" aria-current="page" href="/home" style="color: white">-->
                <!--                            <i class="fa-solid fa-house-chimney"></i>-->
                <!--                            Trang chủ-->
                <!--                        </a>-->
                <!--                    </li>-->
                <!--                    <li class="nav-item dropdown">-->
                <!--                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"-->
                <!--                           data-bs-toggle="dropdown" aria-expanded="false" style="color: white">-->
                <!--                            <i class="fa-solid fa-book"></i>-->
                <!--                            Danh mục-->
                <!--                        </a>-->
                <!--                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">-->
                <!--                            <li><a class="dropdown-item" href="#">Laptop</a></li>-->
                <!--                            <li><a class="dropdown-item" href="#">Phụ kiện</a></li>-->
                <!--                        </ul>-->
                <!--                    </li>-->
                <!--                    <li class="nav-item dropdown">-->
                <!--                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown1" role="button"-->
                <!--                           data-bs-toggle="dropdown" aria-expanded="false" style="color: white">-->
                <!--                            <i class="fa-solid fa-location-dot"></i>-->
                <!--                            Xem vị trí cửa hàng-->
                <!--                        </a>-->
                <!--                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown1">-->
                <!--                            <li><a class="dropdown-item" href="#">Đà Nẵng</a></li>-->
                <!--                            <li><a class="dropdown-item" href="#">Hà Nội</a></li>-->
                <!--                            <li><a class="dropdown-item" href="#">Hồ Chí Minh</a></li>-->
                <!--                        </ul>-->
                <!--                    </li>-->
                <!--                    <li>-->
                <!--                        <form action="/product" method="get" class="d-flex">-->
                <!--                            <input type="text" name="action" value="search" hidden>-->
                <!--                            <input name="name" class="form-control me-2" type="text" placeholder="Bạn cần tìm gì?"-->
                <!--                                   aria-label="Search">-->
                <!--                            <button class="btn btn-outline-light" type="submit">-->
                <!--                                <i class="fa-solid fa-magnifying-glass"></i>-->
                <!--                            </button>-->
                <!--                        </form>-->
                <!--                    </li>-->
                <!--                    <li class="nav-item">-->
                <!--                        <a class="nav-link active" aria-current="page" href="#" style="margin-left: 10px;color: white">-->
                <!--                            <span><i class="fa-solid fa-phone" style="color: white"></i></span>Liên hệ Shop-->
                <!--                        </a>-->
                <!--                    </li>-->
                <!--                </ul>-->
                <!--            </div>-->
                <!--        </div>-->
                <!--        &lt;!&ndash;            <%&#45;&#45;        left&#45;&#45;%>&ndash;&gt;-->

                <!--        &lt;!&ndash;            <%&#45;&#45;        right&#45;&#45;%>&ndash;&gt;-->
                <!--        <div>-->
                <!--            <ul class="navbar-nav me-auto mb-2 mb-lg-0">-->
                <!--                <li class="nav-item">-->
                <!--                    &lt;!&ndash;                        <c:if test="${sessionScope.user==null}">&ndash;&gt;-->
                <!--                    &lt;!&ndash;                            <a class="nav-link active" aria-current="page" href="/login" style="color: white">&ndash;&gt;-->
                <!--                    &lt;!&ndash;                                <i class="fa-solid fa-truck-fast"></i>Đơn hàng của bạn&ndash;&gt;-->
                <!--                    &lt;!&ndash;                            </a>&ndash;&gt;-->
                <!--                    &lt;!&ndash;                        </c:if>&ndash;&gt;-->
                <!--                    &lt;!&ndash;                        <c:if test="${sessionScope.user!=null}">&ndash;&gt;-->
                <!--                    <a class="nav-link active" aria-current="page" href="/order?action=back&id=${sessionScope.user.userId}" style="color: white">-->
                <!--                        <i class="fa-solid fa-truck-fast"></i>Đơn hàng của bạn-->
                <!--                    </a>-->
                <!--                    &lt;!&ndash;                        </c:if>&ndash;&gt;-->
                <!--                </li>-->
                <!--                <li class="nav-item">-->
                <!--                    <a class="nav-link active" aria-current="page" href="/view/cart_shopping/cart.jsp"-->
                <!--                       style="color: white">-->
                <!--                        &lt;!&ndash;                            <i class="fa-solid fa-bag-shopping" style="font-size: 20px"></i> <b style="font-size: 15px">${sessionScope.cart.itemsList.size()}</b>&ndash;&gt;-->
                <!--                    </a>-->
                <!--                </li>-->
                <!--                &lt;!&ndash;                    <c:choose>&ndash;&gt;-->
                <!--                &lt;!&ndash;                        <c:when test="${sessionScope.user!=null && sessionScope.user.getRoleID()==1}">&ndash;&gt;-->
                <!--                <li class="nav-item dropdown">-->
                <!--                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button"-->
                <!--                       data-bs-toggle="dropdown" aria-expanded="false">-->
                <!--                        &lt;!&ndash;                                    <span><b style="color: white"> Xin chào ${sessionScope.user.getUserName()}</b></span>&ndash;&gt;-->
                <!--                    </a>-->
                <!--                    <ul class="dropdown-menu p-0" aria-labelledby="navbarDropdown2">-->
                <!--                        <li><a class="dropdown-item" href="/customer">Quản lý khách hàng</a></li>-->
                <!--                        <li><a class="dropdown-item" href="/employee">Quản lý nhân viên</a></li>-->
                <!--                        <li><a class="dropdown-item" href="/product">Quản lý sản phẩm</a></li>-->
                <!--                        <li><a class="dropdown-item" href="/order">Quản lý đơn hàng</a></li>-->
                <!--                        <li><a class="dropdown-item" href="#">Thông tin tài khoản</a></li>-->
                <!--                        <li>-->
                <!--                            <hr class="dropdown-divider">-->
                <!--                        </li>-->
                <!--                        <li><a class="nav-link active" aria-current="page" href="/logout">-->
                <!--                            Đăng xuất-->
                <!--                        </a>-->
                <!--                        </li>-->
                <!--                    </ul>-->
                <!--                </li>-->
                <!--                &lt;!&ndash;                        </c:when>&ndash;&gt;-->
                <!--                &lt;!&ndash;                        <c:when test="${sessionScope.user!=null && sessionScope.user.getRoleID()==2}">&ndash;&gt;-->
                <!--                <li class="nav-item dropdown">-->
                <!--                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown3" role="button"-->
                <!--                       data-bs-toggle="dropdown" aria-expanded="false">-->
                <!--                        &lt;!&ndash;                                    <span><b style="color: white;">Xin chào ${sessionScope.user.getUserName()}</b></span>&ndash;&gt;-->
                <!--                    </a>-->
                <!--                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown3">-->
                <!--                        <li><a class="dropdown-item" href="/customer?action=detail&idAccount=${sessionScope.user.userId}">Thông tin tài khoản</a></li>-->
                <!--                        <li>-->
                <!--                            <hr class="dropdown-divider">-->
                <!--                        </li>-->
                <!--                        <li>-->
                <!--                            <a class="nav-link active" aria-current="page" href="/logout">Đăng xuất-->
                <!--                            </a>-->
                <!--                        </li>-->
                <!--                    </ul>-->
                <!--                </li>-->
                <!--                &lt;!&ndash;                        </c:when>&ndash;&gt;-->
                <!--                &lt;!&ndash;                        <c:otherwise>&ndash;&gt;-->
                <!--                <li class="nav-item">-->
                <!--                    <a class="nav-link active" aria-current="page" href="/login" style="color: white">-->
                <!--                        <i class="fa-solid fa-circle-user"></i>Đăng Nhập-->
                <!--                    </a>-->
                <!--                </li>-->
                <!--                &lt;!&ndash;                        </c:otherwise>&ndash;&gt;-->
                <!--                &lt;!&ndash;                    </c:choose>&ndash;&gt;-->
                <!--            </ul>-->
                <!--        </div>-->
                <!--    </div>-->
                <!--</nav>-->
                <div>
                    <input type="hidden" id="status" value="${status}">
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
                                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown"
                                                   role="button"
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
                                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown1"
                                                   role="button"
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
                                                    <span><i className="fa-solid fa-phone"
                                                             style="color: white"></i></span>Liên hệ Shop
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
                                               href="/order?action=back&id=${sessionScope.user.userId}"
                                               style="color: white">
                                                <i className="fa-solid fa-truck-fast"></i>Đơn hàng của bạn
                                            </a>
                                            <!--                        </c:if>-->
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link active" aria-current="page"
                                               href="/view/cart_shopping/cart.jsp"
                                               style="color: white">
                                                <!--                            <i class="fa-solid fa-bag-shopping" style="font-size: 20px"></i> <b style="font-size: 15px">${sessionScope.cart.itemsList.size()}</b>-->
                                            </a>
                                        </li>
                                        <!--                    <c:choose>-->
                                        <!--                        <c:when test="${sessionScope.user!=null && sessionScope.user.getRoleID()==1}">-->
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown2"
                                               role="button"
                                               data-bs-toggle="dropdown" aria-expanded="false">
                                                <!--                                    <span><b style="color: white"> Xin chào ${sessionScope.user.getUserName()}</b></span>-->
                                            </a>
                                            <ul className="dropdown-menu p-0" aria-labelledby="navbarDropdown2">
                                                <li><a className="dropdown-item" href="/customer">Quản lý khách hàng</a>
                                                </li>
                                                <li><a className="dropdown-item" href="/employee">Quản lý nhân viên</a>
                                                </li>
                                                <li><a className="dropdown-item" href="/product">Quản lý sản phẩm</a>
                                                </li>
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
                                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown3"
                                               role="button"
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
                                                    <a className="nav-link active" aria-current="page" href="/logout">Đăng
                                                        xuất
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <!--                        </c:when>-->
                                        <!--                        <c:otherwise>-->
                                        <li className="nav-item">
                                            <a className="nav-link active" aria-current="page" href="/login"
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
                        <div className="container">
                            <h1><b>iPhone 15 Pro Max 256GB</b></h1>
                            <hr>
                                <div className="row">
                                    <div className="product row">
                                        <div className="product-image col-6">
                                            <img
                                                src="https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/9/14/638302786719525352_ip-15-pro-max-dd.jpg"
                                                alt="Phone">
                                                <br>
                                                    <div className="product-price">36.490.000₫</div>
                                                    <a href="cart.html" className="product-button">Thêm vào giỏ hàng</a>
                                        </div>
                                        <div className="product-details col-6">
                                            <!--                    <div class="product-title">Điện thoại XYZ</div>-->
                                            <!--                    <div class="product-description">Mô tả sản phẩm điện thoại XYZ.</div>-->
                                            <div className="card re-card st-card"><h1 className="card-title"><b>Thông số
                                                kỹ thuật</b></h1>
                                                <div className="card-body">
                                                    <table className="st-pd-table">
                                                        <tbody>
                                                        <tr>
                                                            <td>Màn hình</td>
                                                            <td>6.7 inch, OLED, Super Retina XDR, 2796 x 1290 Pixels
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Camera sau</td>
                                                            <td>48.0 MP + 12.0 MP + 12.0 MP</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Camera Selfie</td>
                                                            <td>12.0 MP</td>
                                                        </tr>
                                                        <tr>
                                                            <td>RAM</td>
                                                            <td>8 GB</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Bộ nhớ trong</td>
                                                            <td>256 GB</td>
                                                        </tr>
                                                        <tr>
                                                            <td>CPU</td>
                                                            <td>Apple A17 Pro</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Dung lượng pin</td>
                                                            <td>29 Giờ</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Thẻ sim</td>
                                                            <td>1 - 1 eSIM, 1 Nano SIM</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Hệ điều hành</td>
                                                            <td>iOS 17</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Xuất xứ</td>
                                                            <td>Trung Quốc</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Thời gian ra mắt</td>
                                                            <td>09/2023</td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                    <div className="st-pd-table-viewDetail"><a href="#"
                                                                                               className="re-link js--open-modal">Xem
                                                        cấu hình chi
                                                        tiết <span className="carret"></span></a></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                        </div>
                </div>
                <footer>
                    <div className="container-fluid">
                        <div className="row" style="background-color: #f2f2f2; margin-top: 15px">
                            <div className="col-6 d-flex justify-content-center">
                                <div style="padding: 20px;"><h5>Follow this page</h5></div>
                                <div style="padding: 20px;">
                                    <a href="https://www.facebook.com/" style="color: black"><i
                                        className="fa-brands fa-facebook-f"></i></a>
                                    <a href="https://twitter.com/?lang=vi" style="color: black"><i
                                        className="fa-brands fa-twitter"></i></a>
                                    <a href="https://www.instagram.com/" style="color: black"><i
                                        className="fa-brands fa-instagram"></i></a>
                                    <a href="https://www.linkedin.com/?original_referer=https%3A%2F%2Fwww.google.com%2F"
                                       style="color: black"><i className="fa-brands fa-invision"></i></a>
                                </div>
                            </div>
                            <div className="col-6 d-flex justify-content-center">
                                <div style="padding: 20px;"><h5>Share this page </h5></div>
                                <div style="padding: 20px;">
                                    <a href="https://www.facebook.com/" style="color: black"><i
                                        className="fa-brands fa-facebook-f"></i></a>
                                    <a href="https://twitter.com/?lang=vi" style="color: black"><i
                                        className="fa-brands fa-twitter"></i></a>
                                    <a href="https://www.linkedin.com/?original_referer=https%3A%2F%2Fwww.google.com%2F"
                                       style="color: black"><i className="fa-brands fa-invision"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="row footer d-flex text-center" id="footer"
                             style="background-color: #f2f2f2; font-size: 15px">
                            <div className="col-3 size">
                                <div><h5> PHONE STORE </h5></div>
                                <div>Tận tâm phục vụ</div>
                                <div>Ưu đãi tốt nhất</div>
                            </div>
                            <div className="col-3 size">
                                <div><i className="fa-solid fa-headphones"></i>Tổng đài hỗ trợ miễn phí</div>
                                <div><a href="#"><i className="fa-solid fa-phone-volume"></i>Gọi mua hàng 19005508</a>
                                </div>
                                <div><a href="#"><i className="fa-solid fa-phone-volume"></i>Gọi khiếu nại 19003508</a>
                                </div>
                                <div><a href="#"><i className="fa-solid fa-phone-volume"></i>Gọi bảo hành 19001508</a>
                                </div>
                            </div>
                            <div className="col-3 size">
                                <div><a href="#"><i className="fa-solid fa-file-pen"></i>Chính sách bảo hành</a></div>
                                <div><a href="#"><i className="fa-solid fa-money-check-dollar"></i>Chính sách thanh toán</a>
                                </div>
                                <div><a href="#"><i className="fa-brands fa-usps"></i>Chính sách giao hàng</a></div>
                                <div><a href="#"><i className="fa-solid fa-user-secret"></i>Chính sách bảo mật</a></div>
                            </div>
                            <div className="col-3">
                                <img
                                    src="https://theme.hstatic.net/1000026716/1000440777/14/20150827110756-dathongbao.png"
                                    style="width: 100%">
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}