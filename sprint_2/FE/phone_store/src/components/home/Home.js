import Header from "./Header";
import Footer from "./Footer";
import {useEffect, useState} from "react";
import axios from "axios";
import "./Home.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Swal from "sweetalert2";
import {useNavigate} from "react-router-dom";
import jwt_decode from "jwt-decode";
import React from 'react';
import {Carousel} from 'react-bootstrap';


export default function Home() {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [productsOutstanding, setProductsOutstanding] = useState([]);
    const [productsNew, setProductsNew] = useState([]);
    const getProducts = async () => {
        const product = await axios.get("http://localhost:8080/api/product?page=3&size=4")
        setProducts(product?.data.content);
    }
    const getProductsByOrderQuantity = async () => {
        const product = await axios.get("http://localhost:8080/api/product/order")
        setProductsOutstanding(product?.data);
    }
    const getNewProducts = async () => {
        const product = await axios.get("http://localhost:8080/api/product?page=0&size=4")
        setProductsNew(product?.data.content);
    }
    useEffect(() => {
        getProducts();
    }, [])
    useEffect(() => {
        getProductsByOrderQuantity();
    }, [])
    useEffect(() => {
        getNewProducts();
    }, [])

    function formatPrice(price) {
        const formatter = new Intl.NumberFormat('vi-VN');
        return formatter.format(price);
    }
    useEffect(() => {
        document.title = "VVT Shop - Trang chủ";
    }, []);

    const infoAppUserByJwtToken = () => {
        const jwtToken = localStorage.getItem("JWT");
        if (jwtToken) {
            const result = jwt_decode(jwtToken);
            return result;
        }
    };
    const addToCart = async (cartId) => {
        const isLoggedIn = infoAppUserByJwtToken();
        if (!isLoggedIn) {
            Swal.fire("Vui lòng đăng nhập tài khoản!", "", "warning");
            navigate("/");
        } else {
            const id = await axios.get(`http://localhost:8080/api/user/getId?userName=${isLoggedIn.sub}`);
            console.log(id.data);
            const cart = {
                quantity: 1,
                products: {
                    productId: cartId
                },
                accounts: {
                    accountId: id.data
                }
            }
            try {
                await axios.post(
                    `http://localhost:8080/api/cart/add`, cart);
                // await axios.post(
                //     `http://localhost:8080/api/cart/${cartId}`);
                Swal.fire("Thêm sản phẩm vào giỏ hàng thành công", "", "success");
            }catch (e){
                Swal.fire("Sản phẩm đã tồn tại trong giỏ hàng! ", "", "warning");
            }
        }
    };
    return (
        <>
            <div id="home">
                <Header></Header>
                <main>
                    <div className="container-fluid">
                        <div className="container-fluid">
                            <div className="row w-100 h-100" style={{marginTop: "15px"}}>
                                <div className="col-2">
                                    <div>
                                        <div className="btn-group dropend w-100">
                                            <button type="button" className="btn btn-outline-dark dropdown-toggle"
                                                     aria-expanded="false">
                                                <i className="fa-solid fa-phone"></i>
                                                Điện thoại
                                            </button>
                                            {/*<ul className="dropdown-menu">*/}

                                            {/*</ul>*/}
                                        </div>
                                    </div>
                                    <div className="margin">
                                        <div className="btn-group dropend w-100">
                                            <button type="button" className="btn btn-outline-dark dropdown-toggle"
                                                     aria-expanded="false">
                                                <i className="fa-solid fa-headphones"></i>
                                                Tai nghe
                                            </button>
                                        </div>
                                    </div>
                                    <div className="margin">
                                        <div className="btn-group dropend w-100 ">
                                            <a type="button" className="btn btn-outline-dark dropdown-toggle"
                                                aria-expanded="false">
                                                <i className="fa-solid fa-battery-full"></i>
                                                Sạc dự phòng
                                            </a>
                                        </div>
                                    </div>
                                    <div className="margin">
                                        <div className="btn-group dropend w-100">
                                            <button type="button" className="btn btn-outline-dark dropdown-toggle"
                                                     aria-expanded="false">
                                                <i className="fa-solid fa-gear"></i>
                                                Phụ kiện
                                            </button>
                                        </div>
                                    </div>
                                    <div className="margin">
                                        <div className="btn-group dropend w-100">
                                            <button type="button" className="btn btn-outline-dark dropdown-toggle"
                                                     aria-expanded="false">
                                                <i className="fa-brands fa-hotjar"></i>
                                                Best Saler
                                            </button>
                                        </div>
                                    </div>
                                    <div className="margin">
                                        <div className="btn-group dropend w-100">
                                            <button type="button" className="btn btn-outline-dark dropdown-toggle"
                                                     aria-expanded="false">
                                                <i className="fa-solid fa-volume-high"></i>
                                                Khuyến mãi
                                            </button>
                                        </div>
                                    </div>
                                    <div className="margin">
                                        <div className="btn-group dropend w-100">
                                            <button type="button" className="btn btn-outline-dark dropdown-toggle"
                                                    data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="fa-solid fa-magnifying-glass-dollar"></i>
                                                Tìm theo giá
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="#">Dưới 10 triệu</a></li>
                                                <li><a className="dropdown-item" href="#">Từ 10 - 15 triệu</a></li>
                                                <li><a className="dropdown-item" href="#">Từ 15 - 20 triệu</a></li>
                                                <li><a className="dropdown-item" href="#">Từ 20 - 25 triệu</a></li>
                                                <li><a className="dropdown-item" href="#">Trên 25 triệu</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-7 side">
                                    <Carousel fade interval={2000} style={{marginTop: "-5px"}}>
                                        <Carousel.Item>
                                            <img
                                                src="https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/9/26/638313613716762671_F-C1_1200x300.png"
                                                className="d-block w-100" alt="..." style={{height: "280px"}}/>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                src="https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/8/1/638264776256861272_F-C1_1200x300iP13%201.png"
                                                className="d-block w-100" alt="..." style={{height: "280px"}}/>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                src="https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/10/3/638319207158675908_F-C1_1200x300.png"
                                                className="d-block w-100" alt="..." style={{height: "280px"}}/>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                src="https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/10/1/638317476292540238_F-C1_1200x300.png"
                                                className="d-block w-100" alt="..." style={{height: "280px"}}/>
                                        </Carousel.Item>
                                    </Carousel>
                                </div>
                                <div className="col-3">
                                    <div style={{width: "100%", height: "100px"}}>
                                        <a href="#">
                                            <img
                                                src="https://images.fpt.shop/unsafe/fit-in/385x100/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/8/1/638264776251597698_H2_385x100iP13%201.png"
                                                className="card-img-top" alt="..."/>
                                        </a>
                                    </div>
                                    <div style={{width: "100%", height: "100px"}}>
                                        <a href="#">
                                            <img
                                                src="https://images.fpt.shop/unsafe/fit-in/filters:quality(80):fill(transparent)/fptshop.com.vn/Uploads/Originals/2023/9/28/638315415283081044_Frame%201000004439@2x.png"
                                                className="card-img-top" alt="..."/>
                                        </a>
                                    </div>
                                    <div style={{width: "100%", height: "100px"}}>
                                        <a href="#">
                                            <img
                                                src="https://cdn2.cellphones.com.vn/insecure/rs:fill:595:0/q:80/plain/https://dashboard.cellphones.com.vn/storage/cate-ip15-th10.png"
                                                className="card-img-top" alt="..."/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/*sản phẩm nổi bật*/}
                            <div className="box-container cate-box cat-prd box-pad15 bg-white mb24">

                                <div className="row cat-prd-oustanding margin-18">
                                    <div className="col-11 title f20"><h5>SẢN PHẨM NỐI BẬT</h5></div>
                                    <div className="col-1 cat-prd-tabs"><a href="/product"><small>Xem tất cả</small></a>
                                    </div>
                                </div>


                                <div className="row product-list">
                                    {productsOutstanding.map((product, index) => (
                                        <div className="col-3 cdt-product" style={{marginTop: "20px;"}} key={index}>
                                            <div className="cdt-product__img"
                                                 style={{textAlign: "center", marginTop: "10px;"}}>
                                                <a href={`product/${product.product_Id}`}>
                                              <span
                                                  className=" lazy-load-image-background opacity lazy-load-image-loaded">
                                                <div>
                                                  <img className="image-home" src={product.image_Url.split(',')[0]} alt={product.model_Name} title={product.model_Name}
                                                       height="214"/>
                                                </div>
                                              </span>
                                                </a>
                                            </div>
                                            <div className="cdt-product__info">
                                                <h6 style={{fontWeight: "bold"}}>
                                                    {/*<a href={product.link} title={product.modelName}*/}
                                                    {/*   className="cdt-product__name">*/}
                                                    {product.model_Name}
                                                    {/*</a>*/}
                                                </h6>
                                                <div className="cdt-product__price" style={{marginBottom: "10px"}}>
                                                    <div className="tcdm text-left">
                                                        <div className="price">{formatPrice(product.price)} đ</div>
                                                    </div>
                                                </div>
                                                <div className="cdt-product__config list-layout">
                                                    <div className="product__badge" style={{display: "flex"}}>
                                                        <p
                                                            className="product__more-info__item">{product.screen_Size} inches</p>
                                                        <p
                                                            className="product__more-info__item">{product.ram_Capacity} GB</p>
                                                        <p
                                                            className="product__more-info__item">{product.storage_Capacity} GB</p>
                                                    </div>
                                                </div>
                                                <div className="cdt-product__btn">
                                                    <button onClick={() => addToCart(product.product_Id)}
                                                            className="btn btn-primary btn-sm btn-main">
                                                        THÊM VÀO GIỎ HÀNG
                                                    </button>
                                                    {/*<a href={product.link} className="btn btn-primary btn-sm btn-main">*/}
                                                    {/*    MUA NGAY*/}
                                                    {/*</a>*/}
                                                    {/*<a href={product.compareLink}*/}
                                                    {/*   className="btn btn-secondary btn-sm btn-sub">*/}
                                                    {/*    SO SÁNH*/}
                                                    {/*</a>*/}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="container-fluid">
                                <div className="row"
                                     style={{backgroundColor: "#ffd391", marginTop: "10px", borderRadius: "10px"}}>
                                    <div>
                                        <div className="col-12" style={{textAlignlign: "center", marginTopop: "15px"}}>
                                            <img src="https://cdn2.cellphones.com.vn/600x,webp/media/wysiwyg/hst.png"/>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="col-12" style={{marginBottom: "10px"}}>
                                            <div className="row product-list">
                                                {products.map((product, index) => (
                                                    <div className="col-3 cdt-product" style={{marginTop: "20px;"}} key={index}>
                                                        <div className="cdt-product__img"
                                                             style={{textAlign: "center", marginTop: "10px;"}}>
                                                            <a href={`product/${product.product_Id}`}>
                                              <span
                                                  className=" lazy-load-image-background opacity lazy-load-image-loaded">
                                                <div>
                                                  <img className="image-home" src={product.image_Url.split(',')[1]} alt={product.model_Name} title={product.model_Name}
                                                       height="214"/>
                                                </div>
                                              </span>
                                                            </a>
                                                        </div>
                                                        <div className="cdt-product__info">
                                                            <h6 style={{fontWeight: "bold"}}>
                                                                {/*<a href={product.link} title={product.modelName}*/}
                                                                {/*   className="cdt-product__name">*/}
                                                                {product.model_Name}
                                                                {/*</a>*/}
                                                            </h6>
                                                            <div className="cdt-product__price" style={{marginBottom: "10px"}}>
                                                                <div className="tcdm text-left">
                                                                    <div className="price">{formatPrice(product.price)} đ</div>
                                                                </div>
                                                            </div>
                                                            <div className="cdt-product__config list-layout">
                                                                <div className="product__badge" style={{display: "flex"}}>
                                                                    <p
                                                                        className="product__more-info__item">{product.screen_Size} inches</p>
                                                                    <p
                                                                        className="product__more-info__item">{product.ram_Capacity} GB</p>
                                                                    <p
                                                                        className="product__more-info__item">{product.storage_Capacity} GB</p>
                                                                </div>
                                                            </div>
                                                            <div className="cdt-product__btn">
                                                                <button onClick={() => addToCart(product.product_Id)}
                                                                        className="btn btn-primary btn-sm btn-main">
                                                                    THÊM VÀO GIỎ HÀNG
                                                                </button>
                                                                {/*<a href={product.link} className="btn btn-primary btn-sm btn-main">*/}
                                                                {/*    MUA NGAY*/}
                                                                {/*</a>*/}
                                                                {/*<a href={product.compareLink}*/}
                                                                {/*   className="btn btn-secondary btn-sm btn-sub">*/}
                                                                {/*    SO SÁNH*/}
                                                                {/*</a>*/}
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <span className=" lazy-load-image-background opacity lazy-load-image-loaded"
                                      style={{
                                          display: "inline-block",
                                          height: "200px",
                                          marginTop: "20px",
                                          marginBottom: "20px",
                                          borderRadius: "10px"
                                      }}><img style={{borderRadius: "10px"}}
                                              src="https://images.fpt.shop/unsafe/fit-in/1200x200/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/9/30/638317084560547430_F-H5_1200x200.png"
                                              alt="H5_Tab A8 Wifi" title="H5_Tab A8 Wifi" height="200"/></span>
                            </div>
                            {/*sản phẩm mới nhất*/}
                            <div className="box-container cate-box cat-prd box-pad15 bg-white mb24">

                                <div className="row cat-prd-oustanding margin-18">
                                    <div className="col-11 title f20"><h5>SẢN PHẨM MỚI NHẤT</h5></div>
                                    {/*<div className="col-1 cat-prd-tabs"><a href="/product"><small>Xem tất cả</small></a>*/}
                                    {/*</div>*/}
                                </div>


                                <div className="row product-list">
                                    {productsNew.map((product, index) => (
                                        <div className="col-3 cdt-product" style={{marginTop: "20px;"}} key={index}>
                                            <div className="cdt-product__img"
                                                 style={{textAlign: "center", marginTop: "10px;"}}>
                                                <a href={`product/${product.product_Id}`}>
                                              <span
                                                  className=" lazy-load-image-background opacity lazy-load-image-loaded">
                                                <div>
                                                  <img className="image-home" src={product.image_Url.split(',')[2]} alt={product.model_Name} title={product.model_Name}
                                                       height="214"/>
                                                </div>
                                              </span>
                                                </a>
                                            </div>
                                            <div className="cdt-product__info">
                                                <h6 style={{fontWeight: "bold"}}>
                                                    {/*<a href={product.link} title={product.modelName}*/}
                                                    {/*   className="cdt-product__name">*/}
                                                    {product.model_Name}
                                                    {/*</a>*/}
                                                </h6>
                                                <div className="cdt-product__price" style={{marginBottom: "10px"}}>
                                                    <div className="tcdm text-left">
                                                        <div className="price">{formatPrice(product.price)} đ</div>
                                                    </div>
                                                </div>
                                                <div className="cdt-product__config list-layout">
                                                    <div className="product__badge" style={{display: "flex"}}>
                                                        <p
                                                            className="product__more-info__item">{product.screen_Size} inches</p>
                                                        <p
                                                            className="product__more-info__item">{product.ram_Capacity} GB</p>
                                                        <p
                                                            className="product__more-info__item">{product.storage_Capacity} GB</p>
                                                    </div>
                                                </div>
                                                <div className="cdt-product__btn">
                                                    <button onClick={() => addToCart(product.product_Id)}
                                                            className="btn btn-primary btn-sm btn-main">
                                                        THÊM VÀO GIỎ HÀNG
                                                    </button>
                                                    {/*<a href={product.link} className="btn btn-primary btn-sm btn-main">*/}
                                                    {/*    MUA NGAY*/}
                                                    {/*</a>*/}
                                                    {/*<a href={product.compareLink}*/}
                                                    {/*   className="btn btn-secondary btn-sm btn-sub">*/}
                                                    {/*    SO SÁNH*/}
                                                    {/*</a>*/}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>

                </main>
                {/*// <!-- Back to Top -->*/}
                <a style={{
                    position: "fixed;",
                    display: "none;",
                    right: "45px;",
                    bottom: "45px;",
                    zIndex: "99;",
                    backgroundColor: "#FEA116;",
                    borderColor: " #FEA116;"
                }} href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i
                    className="bi bi-arrow-up"></i></a>
                <Footer></Footer>
            </div>
        </>
    )
}