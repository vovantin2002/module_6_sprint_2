export default function Footer() {
    return(
        <>
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
                            <div><a href="#"><i className="fa-solid fa-phone-volume"></i>Gọi mua hàng 19005508</a></div>
                            <div><a href="#"><i className="fa-solid fa-phone-volume"></i>Gọi khiếu nại 19003508</a>
                            </div>
                            <div><a href="#"><i className="fa-solid fa-phone-volume"></i>Gọi bảo hành 19001508</a></div>
                        </div>
                        <div className="col-3 size">
                            <div><a href="#"><i className="fa-solid fa-file-pen"></i>Chính sách bảo hành</a></div>
                            <div><a href="#"><i className="fa-solid fa-money-check-dollar"></i>Chính sách thanh toán</a>
                            </div>
                            <div><a href="#"><i className="fa-brands fa-usps"></i>Chính sách giao hàng</a></div>
                            <div><a href="#"><i className="fa-solid fa-user-secret"></i>Chính sách bảo mật</a></div>
                        </div>
                        <div className="col-3">
                            <img src="https://theme.hstatic.net/1000026716/1000440777/14/20150827110756-dathongbao.png"
                                 style="width: 100%">
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}