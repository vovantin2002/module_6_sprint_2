import Header from "../home/Header";
import Footer from "../home/Footer";
import {useEffect, useState} from "react";
import axios from "axios";
import "./DetailProduct.css";
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {Link} from "react-router-dom";


export default function Product() {
    const [products, setProducts] = useState([]);
    const getProducts = async () => {
        const product = await axios.get("http://localhost:8080/api/product")
        setProducts(product?.data.content);
    }
    useEffect(() => {
        getProducts();
    }, [])
    return (
        <>
            <Header></Header>
            <div style={{backgroundColor: "#f8f9fa"}}>
                <div id="carouselExampleFade" className="carousel slide carousel-fade w-100"
                     data-bs-ride="carousel" data-bs-interval="3000"
                     style={{marginTop: "20px", marginBottom: "20px", marginLeft: "20px", marginRight: "20px", borderRadius:"10px"}}>
                    <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            {/*// <!-- Đây là các mục trong carousel -->*/}
                            <div className="carousel-item active" style={{ borderRadius:"10px"}}>
                                <img
                                    src="https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/10/11/638326123868033069_F-C1_1200x300.png"
                                    className="d-block w-100" alt="Image 1"/>
                            </div>
                            <div className="carousel-item">
                                <img
                                    src="https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/10/6/638321846764449015_F-C1_1200x300.png"
                                    className="d-block w-100" alt="Image 2"/>
                            </div>
                            <div className="carousel-item">
                                <img
                                    src="https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/10/11/638326123868033069_F-C1_1200x300.png"
                                    className="d-block w-100" alt="Image 3"/>
                            </div>
                        </div>

                        {/*// <!-- Đây là các nút điều khiển carousel -->*/}
                        {/*<a className="carousel-control-prev" href="#myCarousel" role="button" data-bs-slide="prev">*/}
                        {/*    <span className="carousel-control-prev-icon" aria-hidden="true"></span>*/}
                        {/*    <span className="visually-hidden">Previous</span>*/}
                        {/*</a>*/}
                        {/*<a className="carousel-control-next" href="#myCarousel" role="button" data-bs-slide="next">*/}
                        {/*    <span className="carousel-control-next-icon" aria-hidden="true"></span>*/}
                        {/*    <span className="visually-hidden">Next</span>*/}
                        {/*</a>*/}
                    </div>
                    {/*<Carousel>*/}
                    {/*    <div>*/}
                    {/*        <img src="https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/10/11/638326123868033069_F-C1_1200x300.png" alt="Image 1" />*/}
                    {/*    </div>*/}
                    {/*    <div>*/}
                    {/*        <img src="https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/10/11/638326123868033069_F-C1_1200x300.png" alt="Image 2" />*/}
                    {/*    </div>*/}
                    {/*    <div>*/}
                    {/*        <img src="https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/10/11/638326123868033069_F-C1_1200x300.png" alt="Image 3" />*/}
                    {/*    </div>*/}
                    {/*</Carousel>*/}
                    <div id="carouselExampleFade" className="carousel slide carousel-fade w-100"
                         data-bs-ride="carousel" data-bs-interval="3000" style={{marginTop: "-5px"}}>
                        <div className="carousel-inner">
                            <div className="slick-track" style={{
                                width: "15600px;",
                                opacity: "1;",
                                transform: "translate3d(-7200px, 0px, 0px);"
                            }}>
                                <div data-index="-1" tabIndex="-1" className="slick-slide slick-cloned"
                                     aria-hidden="true"
                                     style={{width: "1200px;"}}>
                                    <div>
                                        <div className={"carousel-item"} tabIndex="-1"
                                             style={{width: "100%;", display: "inline-block;"}}><a
                                            href="https://fptshop.com.vn/dien-thoai/iphone-14-pro-max"><img
                                            src="https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/10/11/638326123868033069_F-C1_1200x300.pnhttps://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/10/11/638326123868033069_F-C1_1200x300.png"
                                            alt="iPhone 14 PRM Cate Mobile_T10" title="iPhone 14 PRM Cate Mobile_T10"
                                            style={{height: "300px;"}}/></a></div>
                                    </div>
                                </div>
                                <div data-index="0" className="slick-slide" tabIndex="-1" aria-hidden="true"
                                     style={{outline: "none;", width: "1200px;"}}>
                                    <div>
                                        <div className={"carousel-item"} tabIndex="-1"
                                             style={{width: "100%;", display: "inline-block;"}}><a
                                            href="https://fptshop.com.vn/dien-thoai/samsung-galaxy-a05"><img
                                            src="https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/10/6/638321846764449015_F-C1_1200x300.png"
                                            alt="Cate thu cũ 2G lấy A05 | A05S T9"
                                            title="Cate thu cũ 2G lấy A05 | A05S T9"
                                            style={{height: "300px;"}}/></a></div>
                                    </div>
                                </div>
                                <div data-index="1" className="slick-slide" tabIndex="-1" aria-hidden="true"
                                     style={{outline: "none;", width: "1200px;"}}>
                                    <div>
                                        <div className={"carousel-item"} tabIndex="-1"
                                             style={{width: "100%;", display: "inline-block;"}}><a
                                            href="https://fptshop.com.vn/dien-thoai/realme-c51"><img
                                            src="https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/10/3/638319207158675908_F-C1_1200x300.png"
                                            alt="realme C51_C1" title="realme C51_C1" style={{height: "300px;"}}/></a>
                                        </div>
                                    </div>
                                </div>
                                <div data-index="2" className="slick-slide" tabIndex="-1" aria-hidden="true"
                                     style={{outline: "none;", width: "1200px;"}}>
                                    <div>
                                        <div className={"carousel-item"} tabIndex="-1"
                                             style={{width: "100%;", display: "inline-block;"}}><a
                                            href="https://fptshop.com.vn/dien-thoai/vivo-v-series"><img
                                            src="https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/10/1/638317476292540238_F-C1_1200x300.png"
                                            alt="C1 vivo T10" title="C1 vivo T10" style={{height: "300px;"}}/></a></div>
                                    </div>
                                </div>
                                <div data-index="3" className="slick-slide" tabIndex="-1" aria-hidden="true"
                                     style={{outline: "none;", width: "1200px;"}}>
                                    <div>
                                        <div className={"carousel-item"} tabIndex="-1"
                                             style={{width: "100%;", display: "inline-block;"}}><a
                                            href="https://fptshop.com.vn/dien-thoai/nokia-5710-xpressaudio"><img
                                            src="https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/10/1/638317195199194071_F-C1_1200x300@2x.png"
                                            alt="C1 Nokia T10" title="C1 Nokia T10" style={{height: "300px;"}}/></a>
                                        </div>
                                    </div>
                                </div>
                                <div data-index="4" className="slick-slide" tabIndex="-1" aria-hidden="true"
                                     style={{outline: "none;", width: "1200px;"}}>
                                    <div>
                                        <div className={"carousel-item"} tabIndex="-1"
                                             style={{width: "100%;", display: "inline-block;"}}><a
                                            href="https://fptshop.com.vn/dien-thoai/iphone-13"><img
                                            src="https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/8/1/638264776256861272_F-C1_1200x300iP13 1.png"
                                            alt="iPhone 13 C1 mobile" title="iPhone 13 C1 mobile"
                                            style={{height: "300px;"}}/></a></div>
                                    </div>
                                </div>
                                <div data-index="5" className="slick-slide slick-active slick-current" tabIndex="-1"
                                     aria-hidden="false"
                                     style={{outline: "none;", width: "1200px;"}}>
                                    <div>
                                        <div className={"carousel-item"} tabIndex="-1"
                                             style={{width: "100%;", display: "inline-block;"}}><a
                                            href="https://fptshop.com.vn/dien-thoai/iphone-14-pro-max"><img
                                            src="https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/10/11/638326123868033069_F-C1_1200x300.png"
                                            alt="iPhone 14 PRM Cate Mobile_T10" title="iPhone 14 PRM Cate Mobile_T10"
                                            style={{height: "300px;"}}/></a></div>
                                    </div>
                                </div>
                                <div data-index="6" tabIndex="-1" className="slick-slide slick-cloned"
                                     aria-hidden="true"
                                     style={{width: "1200px;"}}>
                                    <div>
                                        <div className={"carousel-item"} tabIndex="-1"
                                             style={{width: "100%;", display: "inline-block;"}}><a
                                            href="https://fptshop.com.vn/dien-thoai/samsung-galaxy-a05"><img
                                            src="https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/10/6/638321846764449015_F-C1_1200x300.png"
                                            alt="Cate thu cũ 2G lấy A05 | A05S T9"
                                            title="Cate thu cũ 2G lấy A05 | A05S T9"
                                            style={{height: "300px;"}}/></a></div>
                                    </div>
                                </div>
                                <div data-index="7" tabIndex="-1" className="slick-slide slick-cloned"
                                     aria-hidden="true"
                                     style={{width: "1200px;"}}>
                                    <div>
                                        <div className={"carousel-item"} tabIndex="-1"
                                             style={{width: "100%;", display: "inline-block;"}}><a
                                            href="https://fptshop.com.vn/dien-thoai/realme-c51"><img
                                            src="https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/10/3/638319207158675908_F-C1_1200x300.png"
                                            alt="realme C51_C1" title="realme C51_C1" style={{height: "300px;"}}/></a>
                                        </div>
                                    </div>
                                </div>
                                <div data-index="8" tabIndex="-1" className="slick-slide slick-cloned"
                                     aria-hidden="true"
                                     style={{width: "1200px;"}}>
                                    <div>
                                        <div className={"carousel-item"} tabIndex="-1"
                                             style={{width: "100%;", display: "inline-block;"}}><a
                                            href="https://fptshop.com.vn/dien-thoai/vivo-v-series"><img
                                            src="https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/10/1/638317476292540238_F-C1_1200x300.png"
                                            alt="C1 vivo T10" title="C1 vivo T10" style={{height: "300px;"}}/></a></div>
                                    </div>
                                </div>
                                <div data-index="9" tabIndex="-1" className="slick-slide slick-cloned"
                                     aria-hidden="true"
                                     style={{width: "1200px;"}}>
                                    <div>
                                        <div className={"carousel-item"} tabIndex="-1"
                                             style={{width: "100%;", display: "inline-block;"}}><a
                                            href="https://fptshop.com.vn/dien-thoai/nokia-5710-xpressaudio"><img
                                            src="https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/10/1/638317195199194071_F-C1_1200x300@2x.png"
                                            alt="C1 Nokia T10" title="C1 Nokia T10" style={{height: "300px;"}}/></a>
                                        </div>
                                    </div>
                                </div>
                                <div data-index="10" tabIndex="-1" className="slick-slide slick-cloned"
                                     aria-hidden="true"
                                     style={{width: "1200px;"}}>
                                    <div>
                                        <div className={"carousel-item"} tabIndex="-1"
                                             style={{width: "100%;", display: "inline-block;"}}><a
                                            href="https://fptshop.com.vn/dien-thoai/iphone-13"><img
                                            src="https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/8/1/638264776256861272_F-C1_1200x300iP13 1.png"
                                            alt="iPhone 13 C1 mobile" title="iPhone 13 C1 mobile"
                                            style={{height: "300px;"}}/></a></div>
                                    </div>
                                </div>
                                <div data-index="11" tabIndex="-1" className="slick-slide slick-cloned"
                                     aria-hidden="true"
                                     style={{width: "1200px;"}}>
                                    <div>
                                        <div className={"carousel-item"} tabIndex="-1"
                                             style={{width: "100%;", display: "inline-block;"}}><a
                                            href="https://fptshop.com.vn/dien-thoai/iphone-14-pro-max"><img
                                            src="https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/10/11/638326123868033069_F-C1_1200x300.png"
                                            alt="iPhone 14 PRM Cate Mobile_T10" title="iPhone 14 PRM Cate Mobile_T10"
                                            style={{height: "300px;"}}/></a></div>
                                    </div>
                                </div>
                            </div>
                        </div>

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
                        <div className="cdt-filter__block" style={{marginBottom: "20px"}}>
                            <div className="cdt-filter__title" data-toggle="collapse" data-target="#hang-san-xuat"
                                 aria-expanded="true"><b><h5>Hãng sản xuất</h5></b>
                            </div>
                            <div className="cdt-filter__checklist listfilterv4 filterBrand" data-query="hang-san-xuat"
                                 data-level="-1">
                                <div data-search="" data-value="" data-id="0"
                                     className="checkbox checkboxAll frowitem  active"><a title="Tất cả"><i
                                    className="iconcate-checkbox"></i>Tất cả</a></div>
                                <div data-search="Apple (iPhone)apple (iphone)APPLE (IPHONE)" data-name="Apple (iPhone)"
                                     data-value="apple-iphone" className="checkbox frowitem"><a
                                    data-value="apple-iphone"
                                    data-id="157"
                                    title="Apple (iPhone)"
                                    href="/dien-thoai/apple-iphone?sort=ban-chay-nhat"><i
                                    className="iconcate-checkbox"></i><label>Apple (iPhone)</label></a></div>
                                <div data-search="SamsungsamsungSAMSUNG" data-name="Samsung" data-value="samsung"
                                     className="checkbox frowitem"><a data-value="samsung" data-id="159" title="Samsung"
                                                                      href="/dien-thoai/samsung?sort=ban-chay-nhat"><i
                                    className="iconcate-checkbox"></i><label>Samsung</label></a></div>
                                <div data-search="OppooppoOPPO" data-name="Oppo" data-value="oppo"
                                     className="checkbox frowitem"><a data-value="oppo" data-id="403" title="Oppo"
                                                                      href="/dien-thoai/oppo?sort=ban-chay-nhat"><i
                                    className="iconcate-checkbox"></i><label>Oppo</label></a></div>
                                <div data-search="XiaomixiaomiXIAOMI" data-name="Xiaomi" data-value="xiaomi"
                                     className="checkbox frowitem"><a data-value="xiaomi" data-id="1933" title="Xiaomi"
                                                                      href="/dien-thoai/xiaomi?sort=ban-chay-nhat"><i
                                    className="iconcate-checkbox"></i><label>Xiaomi</label></a></div>
                                <div data-search="HonorhonorHONOR" data-name="Honor" data-value="honor"
                                     className="checkbox frowitem"><a data-value="honor" data-id="2060" title="Honor"
                                                                      href="/dien-thoai/honor?sort=ban-chay-nhat"><i
                                    className="iconcate-checkbox"></i><label>Honor</label></a></div>
                                <div data-search="realmerealmeREALME" data-name="realme" data-value="realme"
                                     className="checkbox frowitem"><a data-value="realme" data-id="2119" title="realme"
                                                                      href="/dien-thoai/realme?sort=ban-chay-nhat"><i
                                    className="iconcate-checkbox"></i><label>realme</label></a></div>
                                <div data-search="VivovivoVIVO" data-name="Vivo" data-value="vivo"
                                     className="checkbox frowitem"><a data-value="vivo" data-id="1701" title="Vivo"
                                                                      href="/dien-thoai/vivo?sort=ban-chay-nhat"><i
                                    className="iconcate-checkbox"></i><label>Vivo</label></a></div>
                                <div data-search="AsusasusASUS" data-name="Asus" data-value="asus"
                                     className="checkbox frowitem"><a data-value="asus" data-id="163" title="Asus"
                                                                      href="/dien-thoai/asus?sort=ban-chay-nhat"><i
                                    className="iconcate-checkbox"></i><label>Asus</label></a></div>
                                <div data-search="MasstelmasstelMASSTEL" data-name="Masstel" data-value="masstel"
                                     className="checkbox frowitem"><a data-value="masstel" data-id="456" title="Masstel"
                                                                      href="/dien-thoai/masstel?sort=ban-chay-nhat"><i
                                    className="iconcate-checkbox"></i><label>Masstel</label></a></div>
                                <div data-search="NokianokiaNOKIA" data-name="Nokia" data-value="nokia"
                                     className="checkbox frowitem"><a data-value="nokia" data-id="161" title="Nokia"
                                                                      href="/dien-thoai/nokia?sort=ban-chay-nhat"><i
                                    className="iconcate-checkbox"></i><label>Nokia</label></a></div>
                            </div>
                        </div>
                        <div className="cdt-filter__block">
                            <div className="cdt-filter__title" data-toggle="collapse" data-target="#muc-gia"
                                 aria-expanded="true"><b><h5>Mức giá</h5></b>
                            </div>
                            <div className="cdt-filter__checklist listfilterv4 filterPrice" data-query="muc-gia">
                                <div data-search="" data-value="" data-id="0"
                                     className="checkbox checkboxAll frowitem  active"><a title="Tất cả"><i
                                    className="iconcate-checkbox"></i>Tất cả</a></div>
                                <div data-search="Dưới 2 triệudưới 2 triệuDƯỚI 2 TRIỆU" data-name="Dưới 2 triệu"
                                     data-value="duoi-2-trieu" className="checkbox frowitem"><a
                                    data-value="duoi-2-trieu"
                                    data-id="0"
                                    title="Dưới 2 triệu"
                                    href="/dien-thoai/duoi-2-trieu?sort=ban-chay-nhat"><i
                                    className="iconcate-checkbox"></i><label>Dưới 2 triệu</label></a></div>
                                <div data-search="Từ 2 - 4 triệutừ 2 - 4 triệuTỪ 2 - 4 TRIỆU" data-name="Từ 2 - 4 triệu"
                                     data-value="tu-2-4-trieu" className="checkbox frowitem"><a
                                    data-value="tu-2-4-trieu"
                                    data-id="0"
                                    title="Từ 2 - 4 triệu"
                                    href="/dien-thoai/tu-2-4-trieu?sort=ban-chay-nhat"><i
                                    className="iconcate-checkbox"></i><label>Từ 2 - 4 triệu</label></a></div>
                                <div data-search="Từ 4 - 7 triệutừ 4 - 7 triệuTỪ 4 - 7 TRIỆU" data-name="Từ 4 - 7 triệu"
                                     data-value="tu-4-7-trieu" className="checkbox frowitem"><a
                                    data-value="tu-4-7-trieu"
                                    data-id="0"
                                    title="Từ 4 - 7 triệu"
                                    href="/dien-thoai/tu-4-7-trieu?sort=ban-chay-nhat"><i
                                    className="iconcate-checkbox"></i><label>Từ 4 - 7 triệu</label></a></div>
                                <div data-search="Từ 7 - 13 triệutừ 7 - 13 triệuTỪ 7 - 13 TRIỆU"
                                     data-name="Từ 7 - 13 triệu"
                                     data-value="tu-7-13-trieu" className="checkbox frowitem"><a
                                    data-value="tu-7-13-trieu"
                                    data-id="0"
                                    title="Từ 7 - 13 triệu"
                                    href="/dien-thoai/tu-7-13-trieu?sort=ban-chay-nhat"><i
                                    className="iconcate-checkbox"></i><label>Từ 7 - 13 triệu</label></a></div>
                                <div data-search="Trên 13 triệutrên 13 triệuTRÊN 13 TRIỆU" data-name="Trên 13 triệu"
                                     data-value="tren-13-trieu" className="checkbox frowitem"><a
                                    data-value="tren-13-trieu"
                                    data-id="0"
                                    title="Trên 13 triệu"
                                    href="/dien-thoai/tren-13-trieu?sort=ban-chay-nhat"><i
                                    className="iconcate-checkbox"></i><label>Trên 13 triệu</label></a></div>
                            </div>
                        </div>
                    </div>
                    <div className={"col-9"} style={{marginTop: "20px"}}>
                        <div className="card-header">
                            <div className="cdt-head" style={{border: "1px solid #f8f9fa;"}}>
                                <h1 className="cdt-head__title">Điện thoại</h1><span>(285 sản phẩm)</span>
                            </div>
                        </div>
                        <div className="box-container cate-box cat-prd box-pad15 bg-white mb24">

                            {/*<div className="row cat-prd-oustanding margin-18">*/}
                            {/*    <div className="col-11 title f20"><h5>ĐIỆN THOẠI NỔI BẬT</h5></div>*/}
                            {/*    <div className="col-1 cat-prd-tabs"><a href="/dien-thoai"><small>Xem tất cả</small></a></div>*/}
                            {/*</div>*/}


                            <div className="row product-list"
                                 style={{marginTop: "15px", marginBottom: "15px", marginLeft: "15px"}}>
                                {products.map((product, index) => (
                                    <div className="col-4 cdt-product"
                                         style={{marginTop: "20px;", marginBottom: "15px"}} key={index}>
                                        <div className="cdt-product__img">
                                            <a href={`product/${product.productId}`}>
                                              <span
                                                  className=" lazy-load-image-background opacity lazy-load-image-loaded">
                                                <img className={"image-home"} src={product?.imageUrl}
                                                     alt={product.modelName} title={product.modelName} height="214"/>
                                              </span>
                                            </a>
                                        </div>
                                        <div className="cdt-product__info">
                                            <h3>
                                                <a style={{color: "black"}} href={product.link}
                                                   title={product.modelName}
                                                   className="cdt-product__name">
                                                    {product.modelName}
                                                </a>
                                            </h3>
                                            <div className="cdt-product__price">
                                                <div className="tcdm text-left">
                                                    <div className="price">{product.price}</div>
                                                </div>
                                            </div>
                                            <div className="cdt-product__config list-layout">
                                                <div className="cdt-product__config__param">
                                                    {/*<span data-title="CPU">*/}
                                                    {/*  <i className="icon-cpu"></i>*/}
                                                    {/*    {product.cpu}*/}
                                                    {/*</span>*/}
                                                    <span data-title="Màn hình">
                  <i className="icon-mobile"></i>
                                                        {product.screenSize}
                </span>
                                                    <span data-title="RAM">
                  <i className="icon-ram"></i>
                                                        {product.ramCapacity}
                </span>
                                                    <span data-title="Bộ nhớ trong">
                  <i className="icon-hdd-black"></i>
                                                        {product.storageCapacity}
                </span>
                                                </div>
                                            </div>
                                            <div className="cdt-product__btn">
                                                <a href={product.link} className="btn btn-primary btn-sm btn-main">
                                                    MUA NGAY
                                                </a>
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
            <Footer></Footer>
        </>
    )
}