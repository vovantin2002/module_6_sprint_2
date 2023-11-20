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
    const [selectedColor, setSelectedColor] = useState('');
    const [selectedCategories, setSelectedCategories] = useState('');

    const handleColorChange = (event) => {
        setSelectedColor(event.target.value);
    };

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
        setSelectedBrands(value);
    };
    const handleCategoriesChange = (event) => {
        const value = event.target.value;
        setSelectedCategories(value);
    };

    const search = async (searchTerm, min, max, page, selectedBrands, selectedColor, selectedCategories) => {
        try {
            if (searchTerm) {
                const result = await axios.get(`http://localhost:8080/api/product?name=${searchTerm}&color=${selectedColor}&minPrice=${min}&maxPrice=${max}&brands=${selectedBrands}&categories=${selectedCategories}&page=&size=`);
                await setProducts(result?.data.content);
                setTotalPage(result?.data.totalPages);
            } else {
                const result = await axios.get(`http://localhost:8080/api/product?name=&color=${selectedColor}&minPrice=${min}&maxPrice=${max}&brands=${selectedBrands}&categories=${selectedCategories}&page=&size=`);
                await setProducts(result?.data.content);
                setTotalPage(result?.data.totalPages);
            }
        } catch (e) {
            console.log(e)
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
    useEffect(() => {
        document.title = "VVT Shop - Đồng hồ";
    }, []);
    const addToCart = async (cartId) => {
        const isLoggedIn = infoAppUserByJwtToken();
        if (!isLoggedIn) {
            Swal.fire("Vui lòng đăng nhập tài khoản!", "", "warning");
            navigate("/");
        } else {
            const id = await axios.get(`http://localhost:8080/api/user/getId?userName=${isLoggedIn.sub}`);
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
            } catch (e) {
                Swal.fire("Sản phẩm đã tồn tại trong giỏ hàng! ", "", "warning");
            }
        }
    };
    const previousPage = () => {
        if (page > 0) {
            setPage((pre) => pre - 1)
        }
    }
    function calculateDiscountPercentage(originalPrice, salePrice) {
        const discount = originalPrice - salePrice;
        const discountPercentage = (discount / originalPrice) * 100;
        return Math.round(discountPercentage);
    }

    const nextPage = () => {
        if (page + 1 < totalPage) {
            setPage((pre) => pre + 1)
        }
    }
    useEffect(() => {
        search(searchTerm, min, max, page, selectedBrands, selectedColor, selectedCategories);
    }, [searchTerm, min, max, page, selectedBrands,selectedColor, selectedCategories])
    // useEffect(() => {
    //     search(searchTerm,min,max,selectedBrands);
    // }, [])
    return (
        <>
            <div>
                <Header></Header>
                <div className="container-fluid" style={{marginTop: "68px"}}>
                    <div style={{backgroundColor: "#f8f9fa"}}>
                        <div id="carouselExampleFade" className="carousel slide carousel-fade w-100"
                             data-bs-interval="3000"
                             style={{
                                 marginTop: "20px",
                                 marginBottom: "20px",
                                 // marginLeft: "20px",
                                 marginRight: "20px",
                                 borderRadius: "10px"
                             }}>
                            <div className="category-image"><img
                                src="https://cdn.galle.vn/media/catalog/category/banner_dong_ho_nam_1440x262.jpg" alt=""
                                title="Đồng hồ nam" className="image"/></div>
                        </div>
                        <div className={"row"} style={{marginTop: "20px"}}>
                            <div className={"col-3"} style={{marginTop: "20px"}}>
                                <div className="cdt-filter__block" style={{marginLeft: "10px", marginBottom: "20px"}}>
                                    {/*<div className="cdt-filter__title" data-toggle="collapse"*/}
                                    {/*     data-target="#hang-san-xuat"*/}
                                    {/*     aria-expanded="true">*/}
                                    {/*</div>*/}
                                    <div>
                                        <table style={{
                                            borderCollapse: "separate;",
                                            borderSpacing: "0 10px; "/* Khoảng cách ngang và dọc giữa các hàng */
                                        }}>
                                            <label style={{marginBottom: "10px"}}>
                                            <h5>Thương hiệu</h5>
                                            <input
                                                style={{backgroundColor: "#cb1c22", marginBottom: "10px"}}
                                                type="checkbox"
                                                value=""
                                                checked={selectedBrands === ''}
                                                onChange={handleBrandChange}
                                            /> Tất cả
                                            </label>
                                            <tr style={{marginTop: "10px", marginBottom: '10px'}}>

                                                <td>
                                                    <label>
                                                        <input
                                                            style={{backgroundColor: "#cb1c22"}}
                                                            type="checkbox"
                                                            value="1"
                                                            checked={selectedBrands === '1'}
                                                            onChange={handleBrandChange}
                                                        /> Alpina
                                                    </label>
                                                    <br/>
                                                </td>
                                                <td>
                                                    <label>
                                                        <input
                                                            style={{backgroundColor: "#cb1c22"}}
                                                            type="checkbox"
                                                            value="2"
                                                            checked={selectedBrands === '2'}
                                                            onChange={handleBrandChange}
                                                        /> Baume & Mercier

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
                                                            checked={selectedBrands === '3'}
                                                            onChange={handleBrandChange}
                                                        /> Bering

                                                    </label>
                                                    <br/>
                                                </td>
                                                <td>
                                                    <label>
                                                        <input
                                                            style={{backgroundColor: "#cb1c22"}}
                                                            type="checkbox"
                                                            value="4"
                                                            checked={selectedBrands === '4'}
                                                            onChange={handleBrandChange}
                                                        /> Calvin Klein

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
                                                            checked={selectedBrands === '5'}
                                                            onChange={handleBrandChange}
                                                        /> Candino

                                                    </label>
                                                    <br/>
                                                </td>
                                                <td>
                                                    <label>
                                                        <input
                                                            style={{backgroundColor: "#cb1c22"}}
                                                            type="checkbox"
                                                            value="6"
                                                            checked={selectedBrands === '6'}
                                                            onChange={handleBrandChange}
                                                        /> Casio

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
                                                            value="7"
                                                            checked={selectedBrands === '7'}
                                                            onChange={handleBrandChange}
                                                        /> Century

                                                    </label>
                                                    <br/>
                                                </td>
                                                <td>
                                                    <label>
                                                        <input
                                                            style={{backgroundColor: "#cb1c22"}}
                                                            type="checkbox"
                                                            value="8"
                                                            checked={selectedBrands === '8'}
                                                            onChange={handleBrandChange}
                                                        /> Certina

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
                                                            value="9"
                                                            checked={selectedBrands === '9'}
                                                            onChange={handleBrandChange}
                                                        /> Chronoswiss

                                                    </label>
                                                    <br/>
                                                </td>
                                                <td>
                                                    <label>
                                                        <input
                                                            style={{backgroundColor: "#cb1c22"}}
                                                            type="checkbox"
                                                            value="10"
                                                            checked={selectedBrands === '10'}
                                                            onChange={handleBrandChange}
                                                        /> Citizen

                                                    </label>
                                                    <br/>
                                                </td>
                                            </tr>
                                            {/*<br/>*/}
                                            <tr style={{height: "10px"}}></tr>
                                            <label style={{marginBottom: "10px"}}>
                                                <h5>Mức giá</h5>
                                                <input
                                                    style={{backgroundColor: "#cb1c22"}}
                                                    type="checkbox"
                                                    value=""
                                                    checked={priceRange === ''}
                                                    onChange={handlePriceChange}
                                                /> Tất cả

                                            </label>
                                            <br/>
                                            <label style={{marginBottom: "10px"}}>
                                                <input
                                                    style={{backgroundColor: "#cb1c22"}}
                                                    type="checkbox"
                                                    value="0-500000"
                                                    checked={priceRange === '0-500000'}
                                                    onChange={handlePriceChange}
                                                /> Dưới 500k

                                            </label>
                                            <br/>
                                            <label style={{marginBottom: "10px"}}>
                                                <input
                                                    style={{backgroundColor: "#cb1c22"}}
                                                    type="checkbox"
                                                    value="500000-1000000"
                                                    checked={priceRange === '500000-1000000'}
                                                    onChange={handlePriceChange}
                                                /> Từ 500k - 1 triệu

                                            </label>
                                            <br/>
                                            <label style={{marginBottom: "10px"}}>
                                                <input
                                                    style={{backgroundColor: "#cb1c22"}}
                                                    type="checkbox"
                                                    value="1000000-1500000"
                                                    checked={priceRange === '1000000-1500000'}
                                                    onChange={handlePriceChange}
                                                /> Từ 1 - 1 triệu rưỡi

                                            </label>
                                            <br/>
                                            <label style={{marginBottom: "10px"}}>
                                                <input
                                                    style={{backgroundColor: "#cb1c22"}}
                                                    type="checkbox"
                                                    value="1500000-2000000"
                                                    checked={priceRange === '1500000-2000000'}
                                                    onChange={handlePriceChange}
                                                /> Từ 1 triệu rưỡi - 2 triệu

                                            </label>
                                            <br/>
                                            <label style={{marginBottom: "10px"}}>
                                                <input
                                                    style={{backgroundColor: "#cb1c22"}}
                                                    type="checkbox"
                                                    value="2000000-1000000000"
                                                    checked={priceRange === '2000000-1000000000'}
                                                    onChange={handlePriceChange}
                                                /> Trên 2 triệu

                                            </label>
                                            <tr style={{height: "10px"}}></tr>
                                            <label style={{marginBottom: "10px"}}>
                                                <h5>Danh mục</h5>
                                                <input
                                                    style={{backgroundColor: "#cb1c22"}}
                                                    type="checkbox"
                                                    value=""
                                                    checked={selectedCategories === ''}
                                                    onChange={handleCategoriesChange}
                                                /> Tất cả

                                            </label>
                                            <br/>
                                            <label style={{marginBottom: "10px"}}>
                                                <input
                                                    style={{backgroundColor: "#cb1c22"}}
                                                    type="checkbox"
                                                    value="1"
                                                    checked={selectedCategories === '1'}
                                                    onChange={handleCategoriesChange}
                                                /> Đồng hồ nam
                                            </label>
                                            <br/>
                                            <label style={{marginBottom: "10px"}}>
                                                <input
                                                    style={{backgroundColor: "#cb1c22"}}
                                                    type="checkbox"
                                                    value="2"
                                                    checked={selectedCategories === '2'}
                                                    onChange={handleCategoriesChange}
                                                /> Đồng hồ nữ
                                            </label>
                                            <br/>
                                            <label style={{marginBottom: "10px"}}>
                                                <input
                                                    style={{backgroundColor: "#cb1c22"}}
                                                    type="checkbox"
                                                    value="3"
                                                    checked={selectedCategories === '3'}
                                                    onChange={handleCategoriesChange}
                                                /> Smartwatch
                                                {/*\Đồng hồ thông minh ()*/}
                                            </label>
                                            <br/>
                                            <label style={{marginBottom: "10px"}}>
                                                <input
                                                    style={{backgroundColor: "#cb1c22"}}
                                                    type="checkbox"
                                                    value="4"
                                                    checked={selectedCategories === '4'}
                                                    onChange={handleCategoriesChange}
                                                /> Sports watch
                                                {/*Đồng hồ thể thao ()*/}
                                            </label>
                                            <br/>
                                            <label style={{marginBottom: "10px"}}>
                                                <input
                                                    style={{backgroundColor: "#cb1c22"}}
                                                    type="checkbox"
                                                    value="5"
                                                    checked={selectedCategories === '5'}
                                                    onChange={handleCategoriesChange}
                                                /> Khác
                                            </label>

                                            <br/>
                                            <tr style={{height: "10px"}}></tr>
                                            <label style={{marginBottom: "10px"}}>
                                                <h5>Màu mặt</h5>
                                                <input
                                                    style={{backgroundColor: "#cb1c22"}}
                                                    type="checkbox"
                                                    value=""
                                                    checked={selectedColor === ''}
                                                    onChange={handleColorChange}
                                                /> Tất cả

                                            </label>
                                            <br/>
                                            <label style={{marginBottom: "10px"}}>
                                                <input
                                                    style={{backgroundColor: "#cb1c22"}}
                                                    type="checkbox"
                                                    value="Trắng"
                                                    checked={selectedColor === 'Trắng'}
                                                    onChange={handleColorChange}
                                                /> Trắng

                                            </label>
                                            <br/>
                                            <label style={{marginBottom: "10px"}}>
                                                <input
                                                    style={{backgroundColor: "#cb1c22"}}
                                                    type="checkbox"
                                                    value="Xanh"
                                                    checked={selectedColor === 'Xanh'}
                                                    onChange={handleColorChange}
                                                /> Xanh

                                            </label>
                                            <br/>
                                            <label style={{marginBottom: "10px"}}>
                                                <input
                                                    style={{backgroundColor: "#cb1c22"}}
                                                    type="checkbox"
                                                    value="Đen"
                                                    checked={selectedColor === 'Đen'}
                                                    onChange={handleColorChange}
                                                /> Đen

                                            </label>
                                            <br/>
                                            <label style={{marginBottom: "10px"}}>
                                                <input
                                                    style={{backgroundColor: "#cb1c22"}}
                                                    type="checkbox"
                                                    value="Bạc"
                                                    checked={selectedColor === 'Bạc'}
                                                    onChange={handleColorChange}
                                                /> Bạc

                                            </label>
                                            <br/>
                                            <label style={{marginBottom: "10px"}}>
                                                <input
                                                    style={{backgroundColor: "#cb1c22"}}
                                                    type="checkbox"
                                                    value="Nâu"
                                                    checked={selectedColor === 'Nâu'}
                                                    onChange={handleColorChange}
                                                /> Nâu

                                            </label>



                                            <br/>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className={"col-9"} style={{marginTop: "20px"}}>
                                <div className="card-header">
                                    <div className="cdt-head" style={{display: "flex", alignItems: "center", border: "1px solid #f8f9fa"}}>
                                        <h1 className="cdt-head__title">Đồng hồ </h1>
                                        <span style={{marginLeft:"10px"}}> ({products.length} sản phẩm)</span>
                                    </div>
                                </div>
                                <div className="box-container cate-box cat-prd box-pad15 bg-white mb24">
                                    {
                                        products.length>0 ?(
                                            <div className="row">
                                                {products.map((product, index) => (
                                                    <div key={index} className="col-4">
                                                        <div className="single-unique-product">
                                                            <a href={`product/${product.product_Id}`}>
                                                                <img className="image-home" src={product.image_Url.split(',')[index]}
                                                                     alt={product.name} title={product.name}
                                                                     height="214"/>
                                                            </a>
                                                            <div className="desc">
                                                                <h6 style={{height:"30px"}}>{product?.name}</h6>
                                                                <p>
                                                                     <span style={{textDecoration: "line-through", color:"#999999", fontSize:"15px"}}>
                                                                        {formatPrice(product?.original_Price)} đ
                                                                    </span>
                                                                                        <span style={{background: "#f9e9e2",
                                                                                            borderRadius:" 2px",
                                                                                            color: "#ef5555",
                                                                                            marginLeft: "10px",
                                                                                            padding: "2px 2px",
                                                                                            fontSize: "12px"}}>
                                                                        -{calculateDiscountPercentage(product?.original_Price,product?.price)}%
                                                                    </span>{" "}
                                                                </p>
                                                                <h6 style={{color:"red"}}>{formatPrice(product?.price)} đ</h6>
                                                                <button onClick={() => addToCart(product?.product_Id)} className="text-uppercase primary-btn" style={{textDecoration: "none"}}>
                                                                    Thêm vào giỏ hàng
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        ):(
                                            <h3 style={{color: "red"}}>Không có sản phẩm nào!</h3>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        </>
    )
}