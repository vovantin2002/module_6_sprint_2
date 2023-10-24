import Header from "../home/Header";
import Footer from "../home/Footer";
import React, {useEffect, useState} from "react";
import axios from "axios";
import "./DetailProduct.css";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "./DetailProduct.css"
import {useLocation, useNavigate} from 'react-router-dom';
import {Carousel} from "react-bootstrap";
import Swal from "sweetalert2";
import jwt_decode from "jwt-decode";
import {AiOutlineDoubleLeft, AiOutlineDoubleRight} from "react-icons/ai";

export default function Product() {
    const [totalPage, setTotalPage] = useState(0);
    const [page, setPage] = useState(0);
    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const searchTerm = searchParams.get('term');
    const [products, setProducts] = useState([]);
    const [priceRange, setPriceRange] = useState('');
    const [selectedBrands, setSelectedBrands] = useState('');

    const handlePriceChange = (event) => {
        const value = event.target.value;
        setPriceRange(value);
    };
    function formatPrice(price) {
        const formatter = new Intl.NumberFormat('vi-VN');
        return formatter.format(price);
    }

    const getMinMaxValues = () => {
        if (priceRange) {
            const [min, max] = priceRange.split('-');
            return {min, max};
        }
        return {min: '', max: ''};
    };

    const {min, max} = getMinMaxValues();

    const handleBrandChange = (event) => {
        const value = event.target.value;
        console.log(value)
        setSelectedBrands(value);
        console.log(selectedBrands)
    };

    const search = async (searchTerm,min,max, page, selectedBrands) => {
        console.log(min)
        console.log(max)
        console.log(selectedBrands)
        console.log(page)
        if (searchTerm){
            const result = await axios.get(`http://localhost:8080/api/product?modelName=${searchTerm}&productTypes=&minPrice=${min}&maxPrice=${max}&phoneBrands=${selectedBrands}&page=${page}&size=9`);
            await setProducts(result?.data.content);
            setTotalPage(result?.data.totalPages);
        }else {
            const result = await axios.get(`http://localhost:8080/api/product?modelName=&productTypes=&minPrice=${min}&maxPrice=${max}&phoneBrands=${selectedBrands}&page=0&size=9`);
            await setProducts(result?.data.content);
            setTotalPage(result?.data.totalPages);
        }

        // await console.log(result.data.content);

    };
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
            // setAppUserId(id.data);
            const cart = {
                quantity: 1,
                products: {
                    productId: cartId
                },
                accounts: {
                    accountId: id.data
                }
            }
            await axios.post(
                `http://localhost:8080/api/cart/add`, cart);
            // const response = await addToCartFromHomeAndDetails(
            //     id.data,
            //     medicineId,
            //     1
            // );
            // dispatch(getAllCarts(id.data));
            Swal.fire("Thêm sản phẩm vào giỏ hàng thành công", "", "success");
        }
    };
    const previousPage = () => {
        if (page > 0) {
            setPage((pre) => pre - 1)
        }
    }

    const nextPage = () => {
        if (page + 1 < totalPage) {
            setPage((pre) => pre + 1)
        }
    }
    useEffect(() => {
        search(searchTerm,min,max, page,selectedBrands);
    }, [searchTerm,min, max, page, selectedBrands])
    // useEffect(() => {
    //     search(searchTerm,min,max,selectedBrands);
    // }, [])
    return (
        <>
            <Header></Header>
            <div style={{backgroundColor: "#f8f9fa"}}>
                <div id="carouselExampleFade" className="carousel slide carousel-fade w-100"
                     data-bs-ride="carousel" data-bs-interval="3000"
                     style={{
                         marginTop: "20px",
                         marginBottom: "20px",
                         // marginLeft: "20px",
                         marginRight: "20px",
                         borderRadius: "10px"
                     }}>
                    <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
                        <Carousel fade interval={2000} style={{marginTop: "-5px"}}>
                            <Carousel.Item>
                                <img
                                    src="https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/10/11/638326123868033069_F-C1_1200x300.png"
                                    className="d-block w-100" alt="Image 1"/>                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    src="https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/10/6/638321846764449015_F-C1_1200x300.png"
                                    className="d-block w-100" alt="Image 2"/>                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    src="https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/10/11/638326123868033069_F-C1_1200x300.png"
                                    className="d-block w-100" alt="Image 3"/>                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    src="https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/10/6/638321846764449015_F-C1_1200x300.png"
                                    alt="Cate thu cũ 2G lấy A05 | A05S T9"
                                    title="Cate thu cũ 2G lấy A05 | A05S T9"
                                    style={{height: "300px;"}}/>                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    src="https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/10/3/638319207158675908_F-C1_1200x300.png"
                                    alt="realme C51_C1" title="realme C51_C1" style={{height: "300px;"}}/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    src="https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/10/1/638317476292540238_F-C1_1200x300.png"
                                    alt="C1 vivo T10" title="C1 vivo T10" style={{height: "300px;"}}/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    src="https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/10/1/638317195199194071_F-C1_1200x300@2x.png"
                                    alt="C1 Nokia T10" title="C1 Nokia T10" style={{height: "300px;"}}/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    src="https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/8/1/638264776256861272_F-C1_1200x300iP13 1.png"
                                    alt="iPhone 13 C1 mobile" title="iPhone 13 C1 mobile"
                                    style={{height: "300px;"}}/>
                            </Carousel.Item>
                        </Carousel>
                        {/*<div className="carousel-inner">*/}
                            {/*// <!-- Đây là các mục trong carousel -->*/}

                        {/*    <div className="slick-track" style={{*/}
                        {/*        width: "15600px;",*/}
                        {/*        opacity: "1;",*/}
                        {/*        transform: "translate3d(-7200px, 0px, 0px);"*/}
                        {/*    }}>*/}
                        {/*        <div data-index="5" className="slick-slide slick-active slick-current" tabIndex="-1"*/}
                        {/*             aria-hidden="false"*/}
                        {/*             style={{outline: "none;", width: "1200px;"}}>*/}
                        {/*            <div>*/}
                        {/*                <div className={"carousel-item"} tabIndex="-1"*/}
                        {/*                     style={{width: "100%;", display: "inline-block;"}}><a*/}
                        {/*                    href="https://fptshop.com.vn/dien-thoai/iphone-14-pro-max"><img*/}
                        {/*                    src="https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/10/11/638326123868033069_F-C1_1200x300.png"*/}
                        {/*                    alt="iPhone 14 PRM Cate Mobile_T10" title="iPhone 14 PRM Cate Mobile_T10"*/}
                        {/*                    style={{height: "300px;"}}/></a></div>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*        <div data-index="6" tabIndex="-1" className="slick-slide slick-cloned"*/}
                        {/*             aria-hidden="true"*/}
                        {/*             style={{width: "1200px;"}}>*/}
                        {/*            <div>*/}
                        {/*                <div className={"carousel-item"} tabIndex="-1"*/}
                        {/*                     style={{width: "100%;", display: "inline-block;"}}><a*/}
                        {/*                    href="https://fptshop.com.vn/dien-thoai/samsung-galaxy-a05"><img*/}
                        {/*                    src="https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/10/6/638321846764449015_F-C1_1200x300.png"*/}
                        {/*                    alt="Cate thu cũ 2G lấy A05 | A05S T9"*/}
                        {/*                    title="Cate thu cũ 2G lấy A05 | A05S T9"*/}
                        {/*                    style={{height: "300px;"}}/></a></div>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*        <div data-index="7" tabIndex="-1" className="slick-slide slick-cloned"*/}
                        {/*             aria-hidden="true"*/}
                        {/*             style={{width: "1200px;"}}>*/}
                        {/*            <div>*/}
                        {/*                <div className={"carousel-item"} tabIndex="-1"*/}
                        {/*                     style={{width: "100%;", display: "inline-block;"}}><a*/}
                        {/*                    href="https://fptshop.com.vn/dien-thoai/realme-c51"><img*/}
                        {/*                    src="https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/10/3/638319207158675908_F-C1_1200x300.png"*/}
                        {/*                    alt="realme C51_C1" title="realme C51_C1" style={{height: "300px;"}}/></a>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*        <div data-index="8" tabIndex="-1" className="slick-slide slick-cloned"*/}
                        {/*             aria-hidden="true"*/}
                        {/*             style={{width: "1200px;"}}>*/}
                        {/*            <div>*/}
                        {/*                <div className={"carousel-item"} tabIndex="-1"*/}
                        {/*                     style={{width: "100%;", display: "inline-block;"}}><a*/}
                        {/*                    href="https://fptshop.com.vn/dien-thoai/vivo-v-series"><img*/}
                        {/*                    src="https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/10/1/638317476292540238_F-C1_1200x300.png"*/}
                        {/*                    alt="C1 vivo T10" title="C1 vivo T10" style={{height: "300px;"}}/></a></div>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*        <div data-index="9" tabIndex="-1" className="slick-slide slick-cloned"*/}
                        {/*             aria-hidden="true"*/}
                        {/*             style={{width: "1200px;"}}>*/}
                        {/*            <div>*/}
                        {/*                <div className={"carousel-item"} tabIndex="-1"*/}
                        {/*                     style={{width: "100%;", display: "inline-block;"}}><a*/}
                        {/*                    href="https://fptshop.com.vn/dien-thoai/nokia-5710-xpressaudio"><img*/}
                        {/*                    src="https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/10/1/638317195199194071_F-C1_1200x300@2x.png"*/}
                        {/*                    alt="C1 Nokia T10" title="C1 Nokia T10" style={{height: "300px;"}}/></a>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*        <div data-index="10" tabIndex="-1" className="slick-slide slick-cloned"*/}
                        {/*             aria-hidden="true"*/}
                        {/*             style={{width: "1200px;"}}>*/}
                        {/*            <div>*/}
                        {/*                <div className={"carousel-item"} tabIndex="-1"*/}
                        {/*                     style={{width: "100%;", display: "inline-block;"}}><a*/}
                        {/*                    href="https://fptshop.com.vn/dien-thoai/iphone-13"><img*/}
                        {/*                    src="https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/8/1/638264776256861272_F-C1_1200x300iP13 1.png"*/}
                        {/*                    alt="iPhone 13 C1 mobile" title="iPhone 13 C1 mobile"*/}
                        {/*                    style={{height: "300px;"}}/></a></div>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*        <div data-index="11" tabIndex="-1" className="slick-slide slick-cloned"*/}
                        {/*             aria-hidden="true"*/}
                        {/*             style={{width: "1200px;"}}>*/}
                        {/*            <div>*/}
                        {/*                <div className={"carousel-item"} tabIndex="-1"*/}
                        {/*                     style={{width: "100%;", display: "inline-block;"}}><a*/}
                        {/*                    href="https://fptshop.com.vn/dien-thoai/iphone-14-pro-max"><img*/}
                        {/*                    src="https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/10/11/638326123868033069_F-C1_1200x300.png"*/}
                        {/*                    alt="iPhone 14 PRM Cate Mobile_T10" title="iPhone 14 PRM Cate Mobile_T10"*/}
                        {/*                    style={{height: "300px;"}}/></a></div>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        <button className="carousel-control-prev" type="button"
                                data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button"
                                data-bs-target="#carouselExampleFade" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className={"row"} style={{marginTop: "20px"}}>
                    <div className={"col-3"} style={{marginTop: "20px"}}>
                        <div className="cdt-filter__block" style={{marginLeft:"10px",marginBottom: "20px"}}>
                            <div className="cdt-filter__title" data-toggle="collapse" data-target="#hang-san-xuat"
                                 aria-expanded="true"><b><h5>Hãng sản xuất</h5></b>

                            </div>
                            <div>
                                {/*<label>*/}
                                {/*    Hãng điện thoại:*/}
                                {/*</label>*/}
                                <table style={{
                                    borderCollapse: "separate;",
                                    borderSpacing: "0 10px; "/* Khoảng cách ngang và dọc giữa các hàng */
                                }}>
                                    <input
                                        style={{backgroundColor: "#cb1c22", marginBottom:"10px"}}
                                        type="checkbox"
                                        value=""
                                        checked={selectedBrands === ''}
                                        onChange={handleBrandChange}
                                    />
                                    Tất cả
                                    <tr style={{marginTop:"10px",marginBottom: '10px'}}>

                                        <td>
                                            <label>
                                                <input
                                                    style={{backgroundColor: "#cb1c22"}}
                                                    type="checkbox"
                                                    value="2"
                                                    checked={selectedBrands==='2'}
                                                    onChange={handleBrandChange}
                                                />
                                                Samsung
                                            </label>
                                            <br/>
                                        </td>
                                        <td>
                                            <label>
                                                <input
                                                    style={{backgroundColor: "#cb1c22"}}
                                                    type="checkbox"
                                                    value="7"
                                                    checked={selectedBrands==='7'}
                                                    onChange={handleBrandChange}
                                                />
                                                Apple (iPhone)
                                            </label>
                                        </td>
                                        <br/>
                                    </tr>
                                    <tr style={{height: "10px"}}></tr>
                                    <tr style={{marginBottom: '10px'}}>
                                        <td>
                                            <label>
                                                <input
                                                    style={{backgroundColor: "#cb1c22"}}
                                                    type="checkbox"
                                                    value="3"
                                                    checked={selectedBrands==='3'}
                                                    onChange={handleBrandChange}
                                                />
                                                Oppo
                                            </label>
                                            <br/>
                                        </td>
                                        <td>
                                            <label>
                                                <input
                                                    style={{backgroundColor: "#cb1c22"}}
                                                    type="checkbox"
                                                    value="8"
                                                    checked={selectedBrands==='8'}
                                                    onChange={handleBrandChange}
                                                />
                                                Xiaomi
                                            </label>
                                            <br/>
                                        </td>

                                    </tr>
                                    <tr style={{height: "10px"}}></tr>
                                    <tr style={{marginBottom: '10px'}}>
                                        <td>
                                            <label>
                                                <input
                                                    style={{backgroundColor: "#cb1c22"}}
                                                    type="checkbox"
                                                    value="4"
                                                    checked={selectedBrands==='4'}
                                                    onChange={handleBrandChange}
                                                />
                                                Honor
                                            </label>
                                            <br/>
                                        </td>
                                        <td>
                                            <label>
                                                <input
                                                    style={{backgroundColor: "#cb1c22"}}
                                                    type="checkbox"
                                                    value="9"
                                                    checked={selectedBrands==='9'}
                                                    onChange={handleBrandChange}
                                                />
                                                realme
                                            </label>
                                            <br/>
                                        </td>
                                    </tr>
                                    <tr style={{height: "10px"}}></tr>
                                    <tr style={{marginBottom: '10px'}}>
                                        <td>
                                            <label>
                                                <input
                                                    style={{backgroundColor: "#cb1c22"}}
                                                    type="checkbox"
                                                    value="5"
                                                    checked={selectedBrands==='5'}
                                                    onChange={handleBrandChange}
                                                />
                                                Vivo
                                            </label>
                                            <br/>
                                        </td>
                                        <td>
                                            <label>
                                                <input
                                                    style={{backgroundColor: "#cb1c22"}}
                                                    type="checkbox"
                                                    value="1"
                                                    checked={selectedBrands==='1'}
                                                    onChange={handleBrandChange}
                                                />
                                                Asus
                                            </label>
                                            <br/>
                                        </td>
                                    </tr>
                                    <tr style={{height: "10px"}}></tr>
                                    <tr style={{marginBottom: '10px'}}>
                                        <td>
                                            <label>
                                                <input
                                                    style={{backgroundColor: "#cb1c22"}}
                                                    type="checkbox"
                                                    value="6"
                                                    checked={selectedBrands==='6'}
                                                    onChange={handleBrandChange}
                                                />
                                                Masstel
                                            </label>
                                            <br/>
                                        </td>
                                        <td>
                                            <label>
                                                <input
                                                    style={{backgroundColor: "#cb1c22"}}
                                                    type="checkbox"
                                                    value="10"
                                                    checked={selectedBrands==='10'}
                                                    onChange={handleBrandChange}
                                                />
                                                Nokia
                                            </label>
                                            <br/>
                                        </td>
                                    </tr>
                                    <tr style={{height: "10px"}}></tr>
                                    <label style={{marginBottom: "10px"}}>
                                        <h5>Mức giá</h5>
                                        <input
                                            style={{backgroundColor: "#cb1c22"}}
                                            type="checkbox"
                                            value=""
                                            checked={priceRange === ''}
                                            onChange={handlePriceChange}
                                        />
                                        Tất cả
                                    </label>
                                    <br/>
                                    <label style={{marginBottom: "10px"}}>
                                        <input
                                            style={{backgroundColor: "#cb1c22"}}
                                            type="checkbox"
                                            value="0-2000000"
                                            checked={priceRange === '0-2000000'}
                                            onChange={handlePriceChange}
                                        />
                                        Dưới 2 triệu
                                    </label>
                                    <br/>
                                    <label style={{marginBottom: "10px"}}>
                                        <input
                                            style={{backgroundColor: "#cb1c22"}}
                                            type="checkbox"
                                            value="2000000-4000000"
                                            checked={priceRange === '2000000-4000000'}
                                            onChange={handlePriceChange}
                                        />
                                        Từ 2 - 4 triệu
                                    </label>
                                    <br/>
                                    <label style={{marginBottom: "10px"}}>
                                        <input
                                            style={{backgroundColor: "#cb1c22"}}
                                            type="checkbox"
                                            value="4000000-7000000"
                                            checked={priceRange === '4000000-7000000'}
                                            onChange={handlePriceChange}
                                        />
                                        Từ 4 - 7 triệu
                                    </label>
                                    <br/>
                                    <label style={{marginBottom: "10px"}}>
                                        <input
                                            style={{backgroundColor: "#cb1c22"}}
                                            type="checkbox"
                                            value="7000000-13000000"
                                            checked={priceRange === '7000000-13000000'}
                                            onChange={handlePriceChange}
                                        />
                                        Từ 7 - 13 triệu
                                    </label>
                                    <br/>
                                    <label style={{marginBottom: "10px"}}>
                                        <input
                                            style={{backgroundColor: "#cb1c22"}}
                                            type="checkbox"
                                            value="13000000-1000000000"
                                            checked={priceRange === '13000000-1000000000'}
                                            onChange={handlePriceChange}
                                        />
                                        Trên 13 triệu
                                    </label>

                                    <br/>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className={"col-9"} style={{marginTop: "20px"}}>
                        <div className="card-header">
                            <div className="cdt-head" style={{display:"inline",border: "1px solid #f8f9fa;"}}>
                                    <h1 className="cdt-head__title">Điện thoại</h1>
                                    {/*<span>(285 sản phẩm)</span>*/}
                            </div>
                        </div>
                        <div className="box-container cate-box cat-prd box-pad15 bg-white mb24">

                            {/*<div className="row cat-prd-oustanding margin-18">*/}
                            {/*    <div className="col-11 title f20"><h5>SẢN PHẨM MỚI NHẤT</h5></div>*/}
                            {/*</div>*/}


                            <div className="row product-list">
                                {products.map((product, index) => (
                                    <div className="col-4 cdt-product" style={{marginTop: "20px;"}} key={index}>
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
                                                    MUA NGAY
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
                            {/*<div*/}
                            {/*    className="px-5 py-3 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between">*/}
                            {/*    <div className="justify-content-center d-flex">*/}
                            {/*        <button className="btn btn-primary" style={{margin: 5}} onClick={() => previousPage()}>*/}
                            {/*            <AiOutlineDoubleLeft/>*/}
                            {/*        </button>*/}
                            {/*        <div*/}
                            {/*            className="text-sm py-2 px-4"*/}
                            {/*            style={{*/}
                            {/*                background: "#0d6efd",*/}
                            {/*                color: "#ffffff",*/}
                            {/*                margin: 5,*/}
                            {/*                borderRadius: 5,*/}
                            {/*            }}>*/}
                            {/*            <span>{page + 1}/{totalPage}</span>*/}
                            {/*        </div>*/}
                            {/*        <button className="btn btn-primary" style={{margin: 5}} onClick={() => nextPage()}>*/}
                            {/*            <AiOutlineDoubleRight/>*/}
                            {/*        </button>*/}
                            {/*        <div*/}
                            {/*            className="rounded-lg"*/}
                            {/*            style={{*/}
                            {/*                background: "#0d6efd",*/}
                            {/*                color: "black",*/}
                            {/*                margin: 5,*/}
                            {/*                borderRadius: 5,*/}
                            {/*            }}>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}