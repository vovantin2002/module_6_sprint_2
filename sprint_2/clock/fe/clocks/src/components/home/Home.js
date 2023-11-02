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
    // const navigate = useNavigate();
    // const [products, setProducts] = useState([]);
    // const [productsOutstanding, setProductsOutstanding] = useState([]);
    // const [productsNew, setProductsNew] = useState([]);
    // const getProducts = async () => {
    //     const product = await axios.get("http://localhost:8080/api/product?page=3&size=4")
    //     setProducts(product?.data.content);
    // }
    // const getProductsByOrderQuantity = async () => {
    //     const product = await axios.get("http://localhost:8080/api/product/order")
    //     setProductsOutstanding(product?.data);
    // }
    // const getNewProducts = async () => {
    //     const product = await axios.get("http://localhost:8080/api/product?page=0&size=4")
    //     setProductsNew(product?.data.content);
    // }
    // useEffect(() => {
    //     getProducts();
    // }, [])
    // useEffect(() => {
    //     getProductsByOrderQuantity();
    // }, [])
    // useEffect(() => {
    //     getNewProducts();
    // }, [])
    //
    // function formatPrice(price) {
    //     const formatter = new Intl.NumberFormat('vi-VN');
    //     return formatter.format(price);
    // }
    // useEffect(() => {
    //     document.title = "VVT Shop - Trang chủ";
    // }, []);
    //
    // const infoAppUserByJwtToken = () => {
    //     const jwtToken = localStorage.getItem("JWT");
    //     if (jwtToken) {
    //         const result = jwt_decode(jwtToken);
    //         return result;
    //     }
    // };
    // const addToCart = async (cartId) => {
    //     const isLoggedIn = infoAppUserByJwtToken();
    //     if (!isLoggedIn) {
    //         Swal.fire("Vui lòng đăng nhập tài khoản!", "", "warning");
    //         navigate("/");
    //     } else {
    //         const id = await axios.get(`http://localhost:8080/api/user/getId?userName=${isLoggedIn.sub}`);
    //         console.log(id.data);
    //         const cart = {
    //             quantity: 1,
    //             products: {
    //                 productId: cartId
    //             },
    //             accounts: {
    //                 accountId: id.data
    //             }
    //         }
    //         try {
    //             await axios.post(
    //                 `http://localhost:8080/api/cart/add`, cart);
    //             // await axios.post(
    //             //     `http://localhost:8080/api/cart/${cartId}`);
    //             Swal.fire("Thêm sản phẩm vào giỏ hàng thành công", "", "success");
    //         }catch (e){
    //             Swal.fire("Sản phẩm đã tồn tại trong giỏ hàng! ", "", "warning");
    //         }
    //     }
    // };
    return (
        <>
            <Header></Header>
            {/* #header */}
            {/* start banner Area */}
            <section className="banner-area" id="home">
                <div className="container">
                    <div className="row fullscreen d-flex align-items-center justify-content-center">
                        <div className="banner-content col-lg-10">
                            {/*                <h5 class="text-white text-uppercase">Now you can feel the Heat</h5>*/}
                            <h1>Tương lai mới thông minh</h1>
                            <a href="#" className="primary-btn text-uppercase">
                                Mua ngay
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            {/* End banner Area */}
            {/* Start unique-feature Area */}
            <section className="unique-feature-area section-gap" id="unique">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="menu-content pb-60 col-lg-10">
                            <div className="title text-center">
                                <h1 className="mb-10 text-white">MỘT SỐ SẢN PHẨM NỔI BẬT </h1>
                                {/*                    <p>Who are in extremely love with eco friendly system.</p>*/}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="single-unique-product">
                                <img className="img-fluid" src="img/u1.jpg" alt="" />
                                <div className="desc">
                                    <h4>Apple Watch White</h4>
                                    <h6>£399.00</h6>
                                    <a className="text-uppercase primary-btn" href="#">
                                        Thêm vào giỏ hàng
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-unique-product">
                                <img className="img-fluid" src="img/u2.jpg" alt="" />
                                <div className="desc">
                                    <h4>Apple Watch White</h4>
                                    <h6>£399.00</h6>
                                    <a className="text-uppercase primary-btn" href="#">
                                        Thêm vào giỏ hàng
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-unique-product">
                                <img className="img-fluid" src="img/u3.jpg" alt="" />
                                <div className="desc">
                                    <h4>Apple Watch White</h4>
                                    <h6>£399.00</h6>
                                    <a className="text-uppercase primary-btn" href="#">
                                        Thêm vào giỏ hàng
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-unique-product">
                                <img className="img-fluid" src="img/u4.jpg" alt="" />
                                <div className="desc">
                                    <h4>Apple Watch White</h4>
                                    <h6>£399.00</h6>
                                    <a className="text-uppercase primary-btn" href="#">
                                        Thêm vào giỏ hàng
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End faq Area */}
            <Footer></Footer>
</>
    )
}