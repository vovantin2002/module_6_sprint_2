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
import {format} from "date-fns"; // Import locale for Vietnamese
moment.locale('vi'); // Set the locale to Vietnamese

export default function DetailProduct() {
    const [beCommented, setBeCommented] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [customer, setCustomer] = useState('');
    const [iputStar, setInputStar] = useState(0);
    const navigate = useNavigate();
    const {id} = useParams();
    const [reviews, setReviews] = useState([]);
    const [product, setProducts] = useState([]);
    const [images, setImages] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [showEvaluate, setShowEvaluate] = useState(false);
    const getProducts = async () => {
        try {
            const product = await axios.get(`http://localhost:8080/api/product/${id}`)
            console.log(product?.data);
            setProducts(product?.data);
            const str = product.data.image_Url.split(",");
            setImages(str);
            console.log(product.data.image_Url);
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(()=>{
        getAccount()
    },[])
    const getAccount = async () => {
        try {
            const isLoggedIn = infoAppUserByJwtToken();
            const result = await axios.get(`http://localhost:8080/api/user?userName=${isLoggedIn.sub}`);
            console.log(result?.data);
            setCustomer(result?.data?.customers?.customerId)
            console.log(result.data.customers.customerId)
        }catch (e) {
            console.log(e)
        }

    }

    const ratingChanged = (newRating) => {
        setInputStar(newRating);
    }
    const handleCreateRating = async () => {
        const currentDate = format(new Date(), 'yyyy-MM-dd HH:mm:ss');
        const userId = localStorage.getItem("id");
        // if (iputStar === 0 || inputValue === "") {
        //     await Swal.fire("Please rate and comment on the product", "", "warning")
        // } else {
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
        // }

    }
    useEffect(() => {
        getProducts();
    }, [])
    const fetchReviews = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/review'); // Replace with your API endpoint
            setReviews(response?.data.content);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        fetchReviews();
    }, []);
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
            <div style={{backgroundColor: "#f8f9fa"}}>
                <div className="container">
                    <div className={"row"}>
                        <div className={"col-8"}><h4><b>{product?.model_Name}</b></h4></div>
                        {/*<div className="col-4 product-price">*/}
                        {/*    <b><h4 style={{*/}
                        {/*        color: "#cb1c22", fontSizeize: "28px;",*/}
                        {/*        fontWeighteight: "500;",*/}
                        {/*        lineHeight: "36px;"*/}
                        {/*    }}>{formatPrice(product?.price)}₫</h4></b>*/}
                        {/*    <button style={{backgroundColor: "#cb1c22", color: "white"}}*/}
                        {/*            onClick={() => addToCart(product.productId)}*/}
                        {/*            className="btn btn-primary btn-xl btn-full" id="btn-buy-now">*/}
                        {/*        THÊM VÀO GIỎ HÀNG*/}
                        {/*    </button>*/}
                        {/*</div>*/}
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
                                <div className="col-4 product-price">
                                    <b><h4 style={{
                                        color: "#cb1c22", fontSizeize: "28px;",
                                        fontWeighteight: "500;",
                                        lineHeight: "36px;"
                                    }}>{formatPrice(product?.price)}₫</h4></b>
                                    <button style={{backgroundColor: "#cb1c22", color: "white"}}
                                            onClick={() => addToCart(product.productId)}
                                            className="btn btn-primary btn-xl btn-full" id="btn-buy-now">
                                        THÊM VÀO GIỎ HÀNG
                                    </button>
                                </div>
                                {/*<h5><Link href="cart.html" className="product-button">Thêm vào giỏ hàng</Link></h5>*/}

                            </div>
                            <div className="product-details col-6">
                                {/*// <!--                    <div class="product-title">Điện thoại XYZ</div>-->*/}
                                {/*// <!--                    <div class="product-description">Mô tả sản phẩm điện thoại XYZ.</div>-->*/}
                                <div className="card re-card st-card">
                                    <h5 className="card-title" style={{marginLeft: "10px", marginTop: "16px"}}><b>Thông
                                        số kỹ thuật</b></h5>
                                    <div className="card-body"
                                         style={{backgroundColor: "#f8f9fa", marginLeft: "10px", marginTop: "16px"}}>
                                        <table className="st-pd-table">
                                            <tbody>
                                            <tr style={{borderSpacing: "10px;"}}>
                                                <td>Màn hình</td>
                                                <td style={{paddingLeft: "10px"}}>{product?.screen_Size} inch
                                                </td>
                                            </tr>
                                            <tr style={{height: "8px"}}></tr>
                                            <tr style={{paddingBottom: "20px"}}>
                                                <td>Camera sau</td>
                                                <td style={{paddingLeft: "10px"}}>{product?.camera_Resolution} MP</td>
                                            </tr>
                                            <tr style={{height: "8px"}}></tr>
                                            <tr style={{paddingBottom: "20px"}}>
                                                <td>RAM</td>
                                                <td style={{paddingLeft: "10px"}}>{product?.battery_Capacity} GB</td>
                                            </tr>
                                            <tr style={{height: "8px"}}></tr>
                                            <tr style={{paddingBottom: "20px"}}>
                                                <td>Bộ nhớ trong</td>
                                                <td style={{paddingLeft: "10px"}}>{product?.storage_Capacity} GB</td>
                                            </tr>
                                            <tr style={{height: "8px"}}></tr>
                                            <tr style={{paddingBottom: "20px"}}>
                                                <td>Dung lượng pin</td>
                                                <td style={{paddingLeft: "10px"}}>{product?.battery_Capacity} Giờ</td>
                                            </tr>
                                            <tr style={{height: "8px"}}></tr>
                                            <tr style={{paddingBottom: "20px"}}>
                                                <td>Thẻ sim</td>
                                                <td style={{paddingLeft: "10px"}}>{product?.sim}</td>
                                                {/*<td style={{paddingLeft:"10px"}}>1 - 1 eSIM, 1 Nano SIM </td>*/}
                                            </tr>
                                            <tr style={{height: "8px"}}></tr>
                                            <tr style={{paddingBottom: "20px"}}>
                                                <td>Hệ điều hành</td>
                                                <td style={{paddingLeft: "10px"}}>{product?.operating_System}</td>
                                            </tr>
                                            <tr style={{height: "8px"}}></tr>
                                            <tr style={{paddingBottom: "20px"}}>
                                                <td>Xuất xứ</td>
                                                <td style={{paddingLeft: "10px"}}>{product?.origin}</td>
                                                {/*<td style={{paddingLeft:"10px"}}>Trung Quốc </td>*/}
                                            </tr>
                                            <tr style={{height: "8px"}}></tr>
                                            <tr style={{paddingBottom: "20px"}}>
                                                <td>Thời gian ra mắt</td>
                                                <td style={{paddingLeft: "10px"}}>{product?.launch_Time}</td>
                                            </tr>
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
                                {/*<h3>Evaluate</h3>*/}
                                {/*<div className="col-auto">*/}
                                {/*    <h5 className="mt-2">Your rating:</h5>*/}
                                {/*</div>*/}

                                {/*<button onClick={() => {*/}
                                {/*    handleCreateRating().then();*/}
                                {/*}}*/}
                                {/*        className="btn btn-outline-primary thanh-son-comment-button">*/}
                                {/*    <i className="fa-solid fa-arrow-right mt-1"></i>*/}
                                {/*</button>*/}
                                {/*) : ""}*/}
                                {/*<div className="progress-block">*/}
                                {/*    <div className="progress-block__line"><span className="text">5</span><span*/}
                                {/*        className="cm-ic-star cm-ic-color-warning cm-ic-xs m-x-4"></span>*/}
                                {/*        <div className="progress progress-success progress-sm progress-line">*/}
                                {/*            <div className="progress-bar" style={{width: "82%;"}}></div>*/}
                                {/*        </div>*/}
                                {/*        <span className="text m-l-4">37</span></div>*/}
                                {/*    <div className="progress-block__line"><span className="text">4</span><span*/}
                                {/*        className="cm-ic-star cm-ic-color-warning cm-ic-xs m-x-4"></span>*/}
                                {/*        <div className="progress progress-success progress-sm progress-line">*/}
                                {/*            <div className="progress-bar" style={{width: "18%;"}}></div>*/}
                                {/*        </div>*/}
                                {/*        <span className="text m-l-4">8</span></div>*/}
                                {/*    <div className="progress-block__line"><span className="text">3</span><span*/}
                                {/*        className="cm-ic-star cm-ic-color-warning cm-ic-xs m-x-4"></span>*/}
                                {/*        <div className="progress progress-success progress-sm progress-line">*/}
                                {/*            <div className="progress-bar" style={{width: "0%;"}}></div>*/}
                                {/*        </div>*/}
                                {/*        <span className="text m-l-4">0</span></div>*/}
                                {/*    <div className="progress-block__line"><span className="text">2</span><span*/}
                                {/*        className="cm-ic-star cm-ic-color-warning cm-ic-xs m-x-4"></span>*/}
                                {/*        <div className="progress progress-success progress-sm progress-line">*/}
                                {/*            <div className="progress-bar" style={{width: "0%;"}}></div>*/}
                                {/*        </div>*/}
                                {/*        <span className="text m-l-4">0</span></div>*/}
                                {/*    <div className="progress-block__line"><span className="text">1</span><span*/}
                                {/*        className="cm-ic-star cm-ic-color-warning cm-ic-xs m-x-4"></span>*/}
                                {/*        <div className="progress progress-success progress-sm progress-line">*/}
                                {/*            <div className="progress-bar" style={{width: "0%;"}}></div>*/}
                                {/*        </div>*/}
                                {/*        <span className="text m-l-4">0</span></div>*/}
                                {/*</div>*/}
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
                    {reviews.map((review) => (
                        <div key={review.reviewId} className={"row"} style={{marginLeft: "10px", marginBottom: "30px"}}>
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
                                {review.customers.name
                                    .split(' ')
                                    .map((word) => word[0])
                                    .join('')}
                            </div>

                            <div className={"col-11"}>
                                <h5>{review.customers.name}</h5>
                                {Array.from({length: 5}, (_, index) => (
                                    <span
                                        key={index}
                                        style={{
                                            color: review.rating >= index + 1 ? '#efb140' : '#cbd1d6',
                                            fontSize: review.rating >= index + 1 ? '24px' : '20px',
                                            fontWeight: "900;",
                                            content: "\f005",
                                            fontFamily: "Font Awesome 5 Free",
                                            // fontSize: "inherit;",
                                            display: "inline-block;"
                                        }}
                                    >
                                        {review.rating >= index + 1 ? '\u2605' : '\u2606'}
                                    </span>
                                ))}
                                <div>{review.reviewText}</div>
                                <div className={"row"}>{getTimeAgo(review.reviewDate)}
                                    {/*<div style={{ display: "inline-block" }}>*/}
                                    <div className={"col-4"}>
                                        {/*<li></li>*/}
                                        <div className="link link-xs" style={{color: "blue"}}>Thích Trả lời</div>
                                        {/*<li></li>*/}
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
            <Footer></Footer>
        </>
    )
}