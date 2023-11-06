import Header from "../home/Header";
import Footer from "../home/Footer";
import "./DetailProduct.css";
import axios from "axios";
import {useEffect, useState} from "react";
import moment from 'moment';
import 'moment/locale/vi';
import {useNavigate, useParams} from "react-router-dom";
import Swal from "sweetalert2";
import ReactStars from "react-rating-stars-component";
import jwt_decode from "jwt-decode";
import {format} from "date-fns";
import swal from "sweetalert2"; // Import locale for Vietnamese
moment.locale('vi'); // Set the locale to Vietnamese

export default function DetailProduct() {
    const [beCommented, setBeCommented] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [customer, setCustomer] = useState('');
    const [iputStar, setInputStar] = useState(0);
    const navigate = useNavigate();
    const {id} = useParams();
    const [reviews, setReviews] = useState([]);
    const [product, setProducts] = useState({});
    const [images, setImages] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [showEvaluate, setShowEvaluate] = useState(false);
    useEffect(() => {
        getProducts();
        getAccount();
        fetchReviews()
    }, [])
    const getProducts = async () => {
        try {
            const product = await axios.get(`http://localhost:8080/api/product/${id}`)
            console.log(product?.data);
            setProducts(product?.data);
            const str = product.data.image_Url.split(",");
            setImages(str);
            console.log(product.data);
        } catch (e) {
            console.log(e)
        }
    }

    const getAccount = async () => {
        try {
            const isLoggedIn = infoAppUserByJwtToken();
            const result = await axios.get(`http://localhost:8080/api/user?userName=${isLoggedIn.sub}`);
            console.log(result?.data);
            setCustomer(result?.data?.customers?.customerId)
            console.log(result.data.customers.customerId)
        } catch (e) {
            console.log(e)
        }
    }

    const ratingChanged = (newRating) => {
        setInputStar(newRating);
    }
    const handleCreateRating = async () => {
        const currentDate = format(new Date(), 'yyyy-MM-dd HH:mm:ss');
        const userId = localStorage.getItem("id");
        const rating = {
            rating: iputStar,
            reviewText: inputValue,
            reviewDate: currentDate,
            products: {
                productId: id
            },
            customers: {
                customerId: customer
            }
        }
        try {
            console.log(rating)
            await axios.post("http://localhost:8080/api/review", rating);
            console.log(rating)
            setInputStar(0);
            setInputValue('');
            setBeCommented(!beCommented);
            fetchReviews();
        } catch (error) {
            await Swal.fire("Đánh giá thất bại!", "", "warning");
        }
    }

    async function checkQuantity(productId, inputQuantity) {
        const res = await axios.get(
            `http://localhost:8080/api/cart/check-quantity?productId=${productId}&inputQuantity=${inputQuantity}`
        );
        return res.status;
    }

    const fetchReviews = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/review/${product?.product_Id}`); // Replace with your API endpoint
            setReviews(response?.data?.content);
            console.log("dsvsdv");
            console.log(response?.data?.content);
        } catch (error) {
            console.error(error);
        }
    };
    console.log(reviews)
    // useEffect(() => {
    //     fetchReviews();
    // }, []);
    const getTimeAgo = (reviewDate) => {
        const currentTime = moment();
        const reviewTime = moment(reviewDate);
        const duration = moment.duration(currentTime.diff(reviewTime));

        const daysAgo = duration.days(); // Số ngày trước
        const hoursAgo = duration.hours(); // Số giờ trước
        const minutesAgo = duration.minutes(); // Số phút trước

        let humanizedDuration = '';

        if (daysAgo > 0) {
            humanizedDuration += `${daysAgo} ngày `;
        }

        if (hoursAgo > 0) {
            humanizedDuration += `${hoursAgo} giờ `;
        }

        if (minutesAgo > 0) {
            humanizedDuration += `${minutesAgo} phút `;
        }

        return humanizedDuration + 'trước';
    };
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };
    const infoAppUserByJwtToken = () => {
        const jwtToken = localStorage.getItem("JWT");
        if (jwtToken) {
            const result = jwt_decode(jwtToken);
            return result;
        }
    };
    useEffect(() => {
        document.title = "VVT Shop - Chi tiết điện thoại";
    }, []);
    const addToCart = async (cartId) => {
        const isLoggedIn = infoAppUserByJwtToken();
        if (!isLoggedIn) {
            Swal.fire("Vui lòng đăng nhập tài khoản!", "", "warning");
            navigate("/");
        } else {
            try {
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
                checkQuantity(cartId, 1)
                try {
                    await axios.post(
                        `http://localhost:8080/api/cart/add`, cart);
                    // await axios.post(
                    //     `http://localhost:8080/api/cart/${cartId}`);
                    Swal.fire("Thêm sản phẩm vào giỏ hàng thành công", "", "success");
                } catch (e) {
                    Swal.fire("Sản phẩm đã tồn tại trong giỏ hàng! ", "", "warning");
                }
            } catch (e) {
                swal.fire(
                    "Sản phẩm vượt quá số lượng cho phép!",
                    // "Số lượng còn lại ở kho: " + quantityInStock,
                    "warning"
                );
            }

        }
    };
    const handleTextareaResize = (event) => {
        adjustTextareaHeight(event.target);
    };
    const adjustTextareaHeight = (element) => {
        element.style.height = 'auto';
        element.style.height = `${element.scrollHeight}px`;
    };

    function formatPrice(price) {
        const formatter = new Intl.NumberFormat('vi-VN');
        return formatter.format(price);
    }


    return (
        <>
            <Header></Header>
            <div className="container-fluid" style={{ marginTop:"95px"}}>
                <div style={{backgroundColor: "#f8f9fa"}}>
                    <div className="container">
                        <div className={"row"}>
                            <div className={"col-8"}><h4><b>{product?.name}</b></h4></div>
                        </div>
                        <hr/>
                        <div className="row">
                            <div className="product row">
                                <div className="product-image col-6" style={{textAlign: "center"}}>
                                    <div
                                        id="carouselExampleIndicators"
                                        className="carousel slide col col-md-6 col-auto"
                                        data-bs-ride="true"
                                        style={{height: "100%"}}
                                    >
                                        <div className="carousel-indicators">
                                            {images.length > 0 &&
                                                images.map((el, index) => {
                                                    return (
                                                        <button
                                                            type="button"
                                                            data-bs-target="#carouselExampleIndicators"
                                                            data-bs-slide-to={index}
                                                            className={index === activeIndex ? "active" : ""}
                                                            aria-current="true"
                                                            aria-label={`Slide ${index + 1}`}
                                                            style={{width: 60, height: 70}}
                                                        >
                                                            <img
                                                                src={el}
                                                                alt="..."
                                                                className="d-block w-100"
                                                                style={{border: "1px lightskyblue solid"}}
                                                            />
                                                        </button>
                                                    );
                                                })}
                                        </div>
                                        {/* ----- */}
                                        <div className="carousel-inner">
                                            {images.length > 0 &&
                                                images.map((el, index) => {
                                                    return (
                                                        <div
                                                            className={`carousel-item ${
                                                                index === activeIndex ? "active" : ""
                                                            }`}
                                                        >
                                                            <img src={el} className="d-block w-100" alt="..."/>
                                                        </div>
                                                    );
                                                })}
                                        </div>
                                        <button
                                            className="carousel-control-prev"
                                            type="button"
                                            data-bs-target="#carouselExampleIndicators"
                                            data-bs-slide="prev"
                                        >
                    <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                    />
                                            <span className="visually-hidden">Previous</span>
                                        </button>
                                        <button
                                            className="carousel-control-next"
                                            type="button"
                                            data-bs-target="#carouselExampleIndicators"
                                            data-bs-slide="next"
                                        >
                    <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                    />
                                            <span className="visually-hidden">Next</span>
                                        </button>
                                    </div>
                                    {/*<img style={{width: "60%"}}*/}
                                    {/*     src={product.imageUrl}*/}
                                    {/*     alt="Phone"/>*/}
                                    <br/>

                                    {/*<h5><Link href="cart.html" className="product-button">Thêm vào giỏ hàng</Link></h5>*/}

                                </div>
                                <div className="product-details col-6">
                                    {/*// <!--                    <div class="product-title">Điện thoại XYZ</div>-->*/}
                                    {/*// <!--                    <div class="product-description">Mô tả sản phẩm điện thoại XYZ.</div>-->*/}
                                    <div className="card re-card st-card">
                                        <h5 className="card-title" style={{marginLeft: "10px", marginTop: "16px"}}><b>Thông
                                            tin sản phẩm</b></h5>
                                        <div className="card-body"
                                             style={{
                                                 backgroundColor: "#f8f9fa",
                                                 marginLeft: "10px",
                                                 marginTop: "16px"
                                             }}>
                                            <table className="st-pd-table">
                                                <tbody>
                                                <tr style={{borderSpacing: "10px;"}}>
                                                    <td>Thương hiệu</td>
                                                    <td style={{paddingLeft: "10px"}}>{product?.brands}
                                                    </td>
                                                </tr>
                                                <tr style={{height: "8px"}}></tr>
                                                {/*<tr style={{paddingBottom: "20px"}}>*/}
                                                {/*    <td>Xuất xứ</td>*/}
                                                {/*    <td style={{paddingLeft: "10px"}}>{product?.origin} </td>*/}
                                                {/*</tr>*/}
                                                <tr style={{height: "8px"}}></tr>
                                                <tr style={{paddingBottom: "20px"}}>
                                                    <td>Kính</td>
                                                    <td style={{paddingLeft: "10px"}}>{product?.glasses} </td>
                                                </tr>
                                                <tr style={{paddingBottom: "20px"}}>
                                                    <td>Màu mặt số</td>
                                                    <td style={{paddingLeft: "10px"}}>{product?.dial_Color} </td>
                                                </tr>
                                                <tr style={{height: "8px"}}></tr>
                                                <tr style={{paddingBottom: "20px"}}>
                                                    <td>Bảo hành quốc tế</td>
                                                    <td style={{paddingLeft: "10px"}}>{product?.international_Warranty} </td>
                                                </tr>
                                                <tr style={{height: "8px"}}></tr>
                                                <tr style={{paddingBottom: "20px"}}>
                                                    <td>Bề dày mặc số</td>
                                                    <td style={{paddingLeft: "10px"}}>{product?.dial_Thickness} mm</td>
                                                </tr>
                                                <tr style={{height: "8px"}}></tr>
                                                <tr style={{paddingBottom: "20px"}}>
                                                    <td>Đường kính mặc số</td>
                                                    <td style={{paddingLeft: "10px"}}>{product?.dial_Diameter} mm</td>
                                                    {/*<td style={{paddingLeft:"10px"}}>1 - 1 eSIM, 1 Nano SIM </td>*/}
                                                </tr>
                                                <tr style={{height: "8px"}}></tr>
                                                <tr style={{paddingBottom: "20px"}}>
                                                    <td>Chức năng</td>
                                                    <td style={{paddingLeft: "10px"}}>{product?.functions}</td>
                                                </tr>
                                                <tr style={{height: "8px"}}></tr>
                                                <tr style={{paddingBottom: "20px"}}>
                                                    <td>Xuất xứ</td>
                                                    <td style={{paddingLeft: "10px"}}>{product?.origin}</td>
                                                    {/*<td style={{paddingLeft:"10px"}}>Trung Quốc </td>*/}
                                                </tr>
                                                <tr style={{height: "8px"}}></tr>
                                                {/*<tr style={{paddingBottom: "20px"}}>*/}
                                                {/*    <td>Thời gian ra mắt</td>*/}
                                                {/*    <td style={{paddingLeft: "10px"}}>{product?.launch_Time}</td>*/}
                                                {/*</tr>*/}
                                                {/* Các thông tin khác */}
                                                </tbody>
                                            </table>
                                            {/*<div className="st-pd-table-viewDetail">*/}
                                            {/*    <a href="#" className="re-link js--open-modal">Xem cấu hình chi tiết <span*/}
                                            {/*        className="carret"></span></a>*/}
                                            {/*</div>*/}
                                            {/*<div className="st-pd-table-viewDetail"><a href="#"*/}
                                            {/*                                           className="re-link js--open-modal">Xem*/}
                                            {/*    cấu hình chi*/}
                                            {/*    tiết <span className="carret"></span></a></div>*/}
                                        </div>
                                    </div>
                {/*                    <div className="product-info">*/}
                {/*                        <div className="display-header text-light">*/}
                {/*                            <h2 itemProp="name" className="product-title text-light">Order Your*/}
                {/*                                Choice</h2>*/}
                {/*                            <p>Experience the elegance of Reddy on your wrist. Place your order today*/}
                {/*                                and enjoy free worldwide shipping.</p>*/}
                {/*                        </div>*/}
                {/*                        <div className="product-action mt-4">*/}
                {/*                            <div className="detail-list mt-3">*/}
                {/*                                <ul className="text-light list-unstyled">*/}
                {/*                                    <li className="pb-3">*/}
                {/*                                        <strong>Watch Model:</strong>*/}
                {/*                                        <a href="#" className="text-light">Reddy Watch</a>*/}
                {/*                                    </li>*/}
                {/*                                    <li className="pb-3">*/}
                {/*                                        <strong>Price:</strong>*/}
                {/*                                        <a href="#" className="text-light">$2000.00</a>*/}
                {/*                                    </li>*/}
                {/*                                    <li className="color-product-options pb-3">*/}
                {/*                                        <div className="color-toggle d-flex" data-option-index="0">*/}
                {/*                                            <div className="item-title">*/}
                {/*                                                <strong>Choose Strap Color:</strong>*/}
                {/*                                            </div>*/}
                {/*                                            <div className="color-item ms-2" data-val="Cement"*/}
                {/*                                                 title="Cement">*/}
                {/*                                                <span className="color-inner d-block rounded-pill"*/}
                {/*                                                      style={{backgroundColor: "#ABA194"}}></span>*/}
                {/*                                            </div>*/}
                {/*                                            <div className="color-item ms-2" data-val="Reddish Brown"*/}
                {/*                                                 title="Reddish Brown">*/}
                {/*                                                <span className="color-inner d-block rounded-pill"*/}
                {/*                                                      style={{backgroundColor: "#812013"}}></span>*/}
                {/*                                            </div>*/}
                {/*                                            <div className="color-item ms-2" data-val="Woody Brown"*/}
                {/*                                                 title="Woody Brown">*/}
                {/*                                                <span className="color-inner d-block rounded-pill"*/}
                {/*                                                      style={{backgroundColor: "#4A3937"}}></span>*/}
                {/*                                            </div>*/}
                {/*                                        </div>*/}
                {/*                                    </li>*/}
                {/*                                </ul>*/}
                {/*                            </div>*/}
                {/*                            <div className="product-quantity">*/}
                {/*                                <div className="input-group product-qty me-3 border rounded-2"*/}
                {/*                                     style={{maxWidth: "130px"}}>*/}
                {/*    <span className="input-group-btn bg-gray-2">*/}
                {/*      <button type="button" className="quantity-left-minus btn btn-number" data-type="minus"*/}
                {/*              data-field="">*/}
                {/*        <svg width="16" height="16">*/}
                {/*          <use ></use>*/}
                {/*        </svg>*/}
                {/*      </button>*/}
                {/*    </span>*/}
                {/*                                    <input type="text" id="quantity" name="quantity"*/}
                {/*                                           className="form-control input-number text-center bg-gray-1"*/}
                {/*                                           value="1" min="1" max="100"/>*/}
                {/*<span className="input-group-btn bg-gray-2">*/}
                {/*      <button type="button" className="quantity-right-plus btn btn-number" data-type="plus"*/}
                {/*              data-field="">*/}
                {/*        <svg width="16" height="16">*/}
                {/*          <use></use>*/}
                {/*        </svg>*/}
                {/*      </button>*/}
                {/*    </span>*/}
                {/*                                </div>*/}
                {/*                                <button type="submit" name="add" id="add-to-cart"*/}
                {/*                                        className="btn btn-lg btn-outline-dark btn-bg-light text-uppercase mt-5 rounded-pill fw-bold">Order*/}
                {/*                                    Now*/}
                {/*                                </button>*/}
                {/*                            </div>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}

                                </div>
                                <div className={"row"} style={{marginLeft: "10px", marginTop: "15px"}}>
                                    <div className={"col-6"}>

                                    </div>
                                    <div className="col-3 product-price">
                                        <b><h4 style={{
                                            color: "#cb1c22", fontSizeize: "28px;",
                                            fontWeighteight: "500;",
                                            lineHeight: "36px;",
                                        }}>{formatPrice(product?.price)}₫</h4></b>
                                    </div>
                                    <div className={"col-3"}>
                                        <button style={{backgroundColor: "#cb1c22", color: "white"}}
                                                onClick={() => addToCart(product.product_Id)}
                                                className="btn btn-primary btn-xl btn-full" id="btn-buy-now">
                                            THÊM VÀO GIỎ HÀNG
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    {product?.description}
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className={"card re-card st-card"}
                         style={{marginTop: "30px", marginLeft: "30px", marginBottom: "30px"}}>
                        <div className="card-title" style={{marginLeft: "15px", marginTop: "15px"}}>
                            <h3 className="h5 heading">Đánh giá sản phẩm </h3>
                        </div>
                        <hr/>
                        <div className="user-rate__box" style={{
                            padding: "16px 0;", margin: " 0;",
                            // padding:" 0;",
                            border: "0;",
                            fontSizeize: "100%;",
                            fontWeight: "normal",
                            verticalAlign: "baseline",
                            background: "transparent",
                            marginLeft: "15px"
                        }}>
                            <div className="row">
                                <div className="col-4" style={{marginBottom: "20px"}}>
                                    <div className="star" style={{textAlign: "center"}}>
                                        <div className="text f-s-p-16">Đánh Giá Trung Bình</div>
                                        <div className="f-s-ui-44 text-primary f-w-500 m-t-4"><h1
                                            style={{color: "#cb1c22"}}>5/5</h1></div>
                                        <div className="tin">
                                            {/*<input type="radio" name="rating" id="star5" value="5"/>*/}
                                            <label htmlFor="star5"></label>
                                            {/*<input type="radio" name="rating" id="star4" value="4"/>*/}
                                            <label htmlFor="star4"></label>
                                            {/*<input type="radio" name="rating" id="star3" value="3"/>*/}
                                            <label htmlFor="star3"></label>
                                            {/*<input type="radio" name="rating" id="star2" value="2"/>*/}
                                            <label htmlFor="star2"></label>
                                            {/*<input type="radio" name="rating" id="star1" value="1"/>*/}
                                            <label htmlFor="star1"></label>
                                        </div>
                                        <div className="text text-grayscale m-t-4">45 đánh giá</div>
                                    </div>
                                </div>
                                <div className="col-4" style={{textAlign: "center"}}>
                                    {/*{showEvaluate ? (*/}
                                    {/*<h3>Comment</h3>*/}
                                    <ReactStars
                                        count={5}
                                        onChange={ratingChanged}
                                        value={iputStar}
                                        size={50}
                                        activeColor="#f4ab20"
                                    />
                                    <textarea className="form-control thanh-son-comment "
                                              value={inputValue}
                                              maxLength={1000}
                                              placeholder="Hãy chia sẻ cảm nhận của bạn về sản phẩm . . ."
                                              onChange={handleInputChange}
                                              onInput={handleTextareaResize}
                                    />
                                </div>
                                <div className="col-4" style={{textAlign: "center"}}>
                                    <div className="action">
                                        <div className="text">Bạn đã dùng sản phẩm này?</div>
                                        <button onClick={() => {
                                            handleCreateRating().then();
                                        }}
                                                style={{marginTop: "10px"}} className="btn btn-primary btn-lg m-t-8"
                                                aria-controls="comment-rate-invalid">GỬI
                                            ĐÁNH GIÁ
                                        </button>
                                    </div>
                                </div>
                                <hr/>
                            </div>
                        </div>

                        {/*<h1>Đánh giá sản phẩm</h1>*/}
                        {reviews?.map((review) => (
                            <div key={review?.reviewId} className={"row"}
                                 style={{marginLeft: "10px", marginBottom: "30px"}}>
                                <div className={"col-1"}
                                     style={{
                                         width: '40px',
                                         height: '40px',
                                         borderRadius: '50%',
                                         backgroundColor: '#cbd1d6',
                                         display: 'flex',
                                         justifyContent: 'center',
                                         alignItems: 'center',
                                         color: 'white',
                                         fontWeight: 'bold',
                                     }}
                                >
                                    {review?.customers?.name
                                        .split(' ')
                                        .map((word) => word[0])
                                        .join('')}
                                </div>

                                <div className={"col-11"}>
                                    <h5>{review?.customers?.name}</h5>
                                    {Array.from({length: 5}, (_, index) => (
                                        <span
                                            key={index}
                                            style={{
                                                color: review?.rating >= index + 1 ? '#efb140' : '#cbd1d6',
                                                fontSize: review?.rating >= index + 1 ? '24px' : '20px',
                                                fontWeight: "900;",
                                                content: "\f005",
                                                fontFamily: "Font Awesome 5 Free",
                                                display: "inline-block;"
                                            }}
                                        >
                                        {review?.rating >= index + 1 ? '\u2605' : '\u2606'}
                                    </span>
                                    ))}
                                    <div>{review?.reviewText}</div>
                                    <div className={"row"}>{getTimeAgo(review?.reviewDate)}
                                        <div className={"col-4"}>
                                            <div className="link link-xs" style={{color: "blue"}}>Thích Trả lời</div>
                                            <div className="link link-xs" aria-controls="comment-reply-invalid"
                                                 style={{color: "blue"}}></div>
                                        </div>
                                        <div className={"col-8"}></div>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}