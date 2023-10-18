import Header from "./Header";
import Footer from "./Footer";
import {useEffect, useState} from "react";
import axios from "axios";
import "./Home.css";
import 'bootstrap-icons/font/bootstrap-icons.css';


export default function Home() {
    const [products, setProducts] = useState([]);
    const [productsNew, setProductsNew] = useState([]);
    const getProducts = async () => {
        const product = await axios.get("http://localhost:8080/api/product")
        setProducts(product?.data.content);
    }
    const getNewProducts = async () => {
        const product = await axios.get("http://localhost:8080/api/product?page=0&size=4")
        setProductsNew(product?.data.content);
    }
    useEffect(() => {
        getProducts();
    }, [])
    useEffect(() => {
        getNewProducts();
    }, [])
    function formatPrice(price) {
        const formatter = new Intl.NumberFormat('vi-VN');
        return formatter.format(price);
    }
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
                                                    data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="fa-solid fa-phone"></i>
                                                Điện thoại
                                            </button>
                                            <ul className="dropdown-menu">

                                            </ul>
                                        </div>
                                    </div>
                                    <div className="margin">
                                        <div className="btn-group dropend w-100">
                                            <button type="button" className="btn btn-outline-dark dropdown-toggle"
                                                    data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="fa-solid fa-headphones"></i>
                                                Tai nghe
                                            </button>
                                        </div>
                                    </div>
                                    <div className="margin">
                                        <div className="btn-group dropend w-100 ">
                                            <a type="button" className="btn btn-outline-dark dropdown-toggle"
                                               data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="fa-solid fa-battery-full"></i>
                                                Sạc dự phòng
                                            </a>
                                        </div>
                                    </div>
                                    <div className="margin">
                                        <div className="btn-group dropend w-100">
                                            <button type="button" className="btn btn-outline-dark dropdown-toggle"
                                                    data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="fa-solid fa-gear"></i>
                                                Phụ kiện
                                            </button>
                                        </div>
                                    </div>
                                    <div className="margin">
                                        <div className="btn-group dropend w-100">
                                            <button type="button" className="btn btn-outline-dark dropdown-toggle"
                                                    data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="fa-brands fa-hotjar"></i>
                                                Best Saler
                                            </button>
                                        </div>
                                    </div>
                                    <div className="margin">
                                        <div className="btn-group dropend w-100">
                                            <button type="button" className="btn btn-outline-dark dropdown-toggle"
                                                    data-bs-toggle="dropdown" aria-expanded="false">
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
                                    <div id="carouselExampleFade" className="carousel slide carousel-fade w-100"
                                         data-bs-ride="carousel" data-bs-interval="3000" style={{marginTop: "-5px"}}>
                                        <div className="carousel-inner">
                                            <div className="carousel-item">
                                                <img
                                                    src="https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/9/26/638313613716762671_F-C1_1200x300.png"
                                                    className="d-block w-100" alt="..." style={{height: "280px"}}/>
                                            </div>
                                            <div className="carousel-item">
                                                <img
                                                    src="https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/8/1/638264776256861272_F-C1_1200x300iP13%201.png"
                                                    className="d-block w-100" alt="..." style={{height: "280px"}}/>
                                            </div>
                                            <div className="carousel-item active">
                                                <img
                                                    src="https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/10/3/638319207158675908_F-C1_1200x300.png"
                                                    className="d-block w-100" alt="..." style={{height: "280px"}}/>
                                            </div>
                                            <div className="carousel-item">
                                                <img
                                                    src="https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/10/1/638317476292540238_F-C1_1200x300.png"
                                                    className="d-block w-100" alt="..." style={{height: "280px"}}/>
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
                                    {productsNew.map((product, index) => (
                                        <div className="col-3 cdt-product" style={{marginTop: "20px;"}} key={index}>
                                            <div className="cdt-product__img"  style={{textAlign:"center",marginTop: "10px;"}}>
                                                <a href={`product/${product.productId}`}>
                                              <span
                                                  className=" lazy-load-image-background opacity lazy-load-image-loaded">
                                                <img className={"image-home"} src={product?.imageUrl}
                                                     alt={product.modelName} title={product.modelName} height="214"/>
                                              </span>
                                                </a>
                                            </div>
                                            <div className="cdt-product__info">
                                                <h6 style={{fontWeight:"bold"}}>
                                                    {/*<a href={product.link} title={product.modelName}*/}
                                                    {/*   className="cdt-product__name">*/}
                                                    {product.modelName}
                                                    {/*</a>*/}
                                                </h6>
                                                <div className="cdt-product__price" style={{marginBottom:"10px"}}>
                                                    <div className="tcdm text-left">
                                                        <div className="price">{formatPrice(product.price)} đ</div>
                                                    </div>
                                                </div>
                                                <div className="cdt-product__config list-layout">
                                                    <div className="product__badge" style={{display:"flex"}}>
                                                        <p
                                                            className="product__more-info__item">{product.screenSize} inches</p><p
                                                        className="product__more-info__item">{product.ramCapacity} GB</p><p
                                                        className="product__more-info__item">{product.storageCapacity} GB</p></div>
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
                                            <div className="row">
                                                <div className="col-2">
                                                    <div className="card">
                                                        <a href="detail.html">
                                                            <img
                                                                src="https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/9/14/638302786719525352_ip-15-pro-max-dd.jpg"
                                                                className="card-img-top" alt="..."/>
                                                        </a>
                                                        <div className="card-body">
                                                            <h6 className="card-title">iPhone 15 Pro Max 256GB</h6>
                                                            <p className="card-text"><small className="text-muted">Last
                                                                updated 3 mins ago</small></p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-2">
                                                    <div className="card">
                                                        <img
                                                            src="https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/3/31/638158962810512367_ss-galaxy-s22-dd-icon.jpg"
                                                            className="card-img-top" alt="..."/>
                                                        <div className="card-body">
                                                            <h6 className="card-title">Samsung Galaxy S22 5G 128GB
                                                            </h6>
                                                            <p className="card-text"><small className="text-muted">Last
                                                                updated 3 mins ago</small></p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-2">
                                                    <div className="card">
                                                        <img
                                                            src="https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/3/27/638155148198300095_oppo-reno8-t-4g-dd.jpg"
                                                            className="card-img-top" alt="..."/>
                                                        <div className="card-body">
                                                            <h6 className="card-title">
                                                                OPPO Reno8 T 4G 256GB</h6>
                                                            <p className="card-text"><small className="text-muted">Last
                                                                updated 3 mins ago</small></p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-2">
                                                    <div className="card">
                                                        <img
                                                            src="https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/6/30/638237370001190590_honor-x8-dd-docquyen.jpg"
                                                            className="card-img-top" alt="..."/>
                                                        <div className="card-body">
                                                            <h6 className="card-title">Honor X8A 8GB-128GB
                                                            </h6>
                                                            <p className="card-text"><small className="text-muted">Last
                                                                updated 3 mins ago</small></p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-2">
                                                    <div className="card">
                                                        <img
                                                            src="https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/3/24/638152739283440892_xiaomi-redmi-note-12-dd-bh.jpg"
                                                            className="card-img-top" alt="..."/>
                                                        <div className="card-body">
                                                            <h6 className="card-title">
                                                                Xiaomi Redmi Note 12 4GB-128GB</h6>
                                                            <p className="card-text"><small className="text-muted">Last
                                                                updated 3 mins ago</small></p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-2">
                                                    <div className="card">
                                                        <img
                                                            src="https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/10/4/638320081767757292_samsung-galaxy-a05s-dd-moi.jpg"
                                                            className="card-img-top" alt="..."/>
                                                        <div className="card-body">
                                                            <h6 className="card-title">
                                                                Samsung Galaxy A05s 128GB</h6>
                                                            <p className="card-text"><small className="text-muted">Last
                                                                updated 3 mins ago</small></p>
                                                        </div>
                                                    </div>
                                                </div>
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
                                            <div className="cdt-product__img"  style={{textAlign:"center",marginTop: "10px;"}}>
                                                <a href={`product/${product.productId}`}>
                                              <span
                                                  className=" lazy-load-image-background opacity lazy-load-image-loaded">
                                                <img className={"image-home"} src={product?.imageUrl}
                                                     alt={product.modelName} title={product.modelName} height="214"/>
                                              </span>
                                                </a>
                                            </div>
                                            <div className="cdt-product__info">
                                                <h6 style={{fontWeight:"bold"}}>
                                                    {/*<a href={product.link} title={product.modelName}*/}
                                                    {/*   className="cdt-product__name">*/}
                                                        {product.modelName}
                                                    {/*</a>*/}
                                                </h6>
                                                <div className="cdt-product__price" style={{marginBottom:"10px"}}>
                                                    <div className="tcdm text-left">
                                                        <div className="price">{formatPrice(product.price)} đ</div>
                                                    </div>
                                                </div>
                                                <div className="cdt-product__config list-layout">
                                                    <div className="product__badge" style={{display:"flex"}}>
                                                        <p
                                                            className="product__more-info__item">{product.screenSize} inches</p><p
                                                        className="product__more-info__item">{product.ramCapacity} GB</p><p
                                                        className="product__more-info__item">{product.storageCapacity} GB</p></div>
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