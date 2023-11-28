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
    const [idAccount, setIdAccount] = useState('');
    const [reviews, setReviews] = useState([]);
    const [product, setProducts] = useState({});
    const [images, setImages] = useState([]);
    const [ratings, setRatings] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [showEvaluate, setShowEvaluate] = useState(false);
    useEffect(() => {
        getProducts();
        getAccount();
        // fetchReviews();
    }, [])
    const getProducts = async () => {
        try {
            const product = await axios.get(`http://localhost:8080/api/product/${id}`)
            setProducts(product?.data);
            const str = product.data.image_Url.split(",");
            setImages(str);
            const response = await axios.get(`http://localhost:8080/api/review/${product?.data?.product_Id}`);
            response?.data?.content?.forEach((review) => {
                if (review?.rating) {
                    ratings.push(review?.rating);
                }
            });
            setReviews(response?.data?.content);
        } catch (e) {
            console.log(e)
        }
    }

    const getAccount = async () => {
        try {
            const isLoggedIn = infoAppUserByJwtToken();
            const result = await axios.get(`http://localhost:8080/api/user?userName=${isLoggedIn.sub}`);
            setIdAccount(result?.data?.accountId)
            setCustomer(result?.data?.customers?.customerId)
        } catch (e) {
            console.log(e)
        }
    }

    function calculateAverageRating(ratings) {
        // console.log(ratings)
        if (ratings?.length === 0) {
            return 0; // Trả về 0 nếu danh sách rỗng
        }

        const sum = ratings?.reduce((accumulator, currentValue) => accumulator + currentValue);
        const average = sum / ratings?.length;
        return average;
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
            console.log(id)
            console.log(idAccount)
           const result=await axios.get(`http://localhost:8080/api/order-detail?id=${id}&accountId=${idAccount}`);
            console.log(result)
           if (result.data.length<1){
               await Swal.fire("Chưa mua hàng không thể đánh giá !", "", "warning");
           }else {
               await axios.post("http://localhost:8080/api/review", rating);
               setInputStar(0);
               setInputValue('');
               setBeCommented(!beCommented);
               fetchReviews();
           }
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
            const response = await axios.get(`http://localhost:8080/api/review/${product?.product_Id}`);
            setReviews(response?.data?.content);
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
        if (minutesAgo < 1) {
            humanizedDuration = `1 phút `;
        }

        return humanizedDuration + 'trước';
    };
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    function calculateDiscountPercentage(originalPrice, salePrice) {
        const discount = originalPrice - salePrice;
        const discountPercentage = (discount / originalPrice) * 100;
        return Math.round(discountPercentage);
    }

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
            <div className="container-fluid" style={{marginTop: "95px"}}>
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
                                                    <td style={{width:"100px"}}>Thương hiệu</td>
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
                                                    <td>Bề dày mặt số</td>
                                                    <td style={{paddingLeft: "10px"}}>{product?.dial_Thickness} mm</td>
                                                </tr>
                                                <tr style={{height: "8px"}}></tr>
                                                <tr style={{paddingBottom: "20px"}}>
                                                    <td>Đường kính mặt số</td>
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
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
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
                                        <p>
                                            <span style={{
                                                textDecoration: "line-through",
                                                color: "#999999",
                                                fontSize: "15px"
                                            }}>
                                                {formatPrice(product?.original_Price)} đ
                                            </span>
                                            <span style={{
                                                background: "#f9e9e2",
                                                borderRadius: " 2px",
                                                color: "#ef5555",
                                                marginLeft: "10px",
                                                padding: "2px 2px",
                                                fontSize: "12px"
                                            }}>
                                                -{calculateDiscountPercentage(product?.original_Price, product?.price)}%
                                            </span>{" "}
                                        </p>
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
                                            style={{color: "#cb1c22"}}>{calculateAverageRating(ratings)}/5</h1></div>
                                        <div className="tin">
                                            {Array.from({length: 5}, (_, index) => (
                                                <span
                                                    key={index}
                                                    style={{
                                                        color: calculateAverageRating(ratings) >= index + 1 ? '#efb140' : '#cbd1d6',
                                                        fontSize: calculateAverageRating(ratings) >= index + 1 ? '24px' : '20px',
                                                        fontWeight: "900;",
                                                        content: "\f005",
                                                        fontFamily: "Font Awesome 5 Free",
                                                        display: "inline-block;"
                                                    }}
                                                >
                                        {calculateAverageRating(ratings) >= index + 1 ? '\u2605' : '\u2606'}
                                    </span>
                                            ))}
                                            {/*<input type="radio" name="rating" id="star5" value="5"/>*/}
                                            {/*<label htmlFor="star5"></label>*/}
                                            {/*/!*<input type="radio" name="rating" id="star4" value="4"/>*!/*/}
                                            {/*<label htmlFor="star4"></label>*/}
                                            {/*/!*<input type="radio" name="rating" id="star3" value="3"/>*!/*/}
                                            {/*<label htmlFor="star3"></label>*/}
                                            {/*/!*<input type="radio" name="rating" id="star2" value="2"/>*!/*/}
                                            {/*<label htmlFor="star2"></label>*/}
                                            {/*/!*<input type="radio" name="rating" id="star1" value="1"/>*!/*/}
                                            {/*<label htmlFor="star1"></label>*/}
                                        </div>
                                        <div className="text text-grayscale m-t-4">{reviews.length} đánh giá</div>
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