import Header from "../home/Header";
import Footer from "../home/Footer";
import "./DetailProduct.css";
import axios from "axios";
import {useEffect, useState} from "react";
import moment from 'moment';
import 'moment/locale/vi';
import {useParams} from "react-router-dom"; // Import locale for Vietnamese
moment.locale('vi'); // Set the locale to Vietnamese

export default function DetailProduct() {
    const {id} = useParams();
    const [reviews, setReviews] = useState([]);
    const [product, setProducts] = useState([]);
    const getProducts = async () => {
        const product = await axios.get(`http://localhost:8080/api/product/${id}`)
        setProducts(product?.data);
    }
    useEffect(() => {
        getProducts();
    }, [])

    useEffect(() => {
        // Fetch reviews from the server
        const fetchReviews = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/review'); // Replace with your API endpoint
                setReviews(response?.data.content);
            } catch (error) {
                console.error(error);
            }
        };

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
    return (
        <>
        <Header></Header>
        <div style={{backgroundColor: "#f8f9fa"}}>
            <div className="container">
                <h4><b>iPhone 15 Pro Max 256GB</b></h4>
                <hr/>
                <div className="row">
                    <div className="product row">
                        <div className="product-image col-6" style={{textAlign: "center"}}>
                            <img style={{width: "60%"}}
                                 src="https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/9/14/638302786719525352_ip-15-pro-max-dd.jpg"
                                 alt="Phone"/>
                            <br/>
                            <div className="product-price">
                                <b><h4 style={{
                                    color: "#cb1c22", fontSizeize: "28px;",
                                    fontWeighteight: "500;",
                                    lineHeight: "36px;"
                                }}>36.490.000₫</h4></b>
                            </div>
                            <button style={{backgroundColor: "#cb1c22", color: "white"}}
                                    className="btn btn-primary btn-xl btn-full" id="btn-buy-now">
                                <div><strong>THÊM VÀO GIỎ HÀNG</strong></div>
                            </button>
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
                                            <td style={{paddingLeft:"10px"}}>{product.screenSize} inch
                                            </td>
                                        </tr>
                                        <tr style={{height:"8px"}}></tr>
                                        <tr style={{paddingBottom:"20px"}}>
                                            <td>Camera sau</td>
                                            <td style={{paddingLeft:"10px"}}>{product.cameraResolution} MP</td>
                                        </tr>
                                        <tr style={{height:"8px"}}></tr>
                                        <tr style={{paddingBottom:"20px"}}>
                                            <td>RAM</td>
                                            <td style={{paddingLeft:"10px"}}>{product.ramCapacity} GB</td>
                                        </tr>
                                        <tr style={{height:"8px"}}></tr>
                                        <tr style={{paddingBottom:"20px"}}>
                                            <td>Bộ nhớ trong</td>
                                            <td style={{paddingLeft:"10px"}}>{product.storageCapacity} GB</td>
                                        </tr>
                                        <tr style={{height:"8px"}}></tr>
                                        <tr style={{paddingBottom:"20px"}}>
                                            <td>Dung lượng pin</td>
                                            <td style={{paddingLeft:"10px"}}>{product.batteryCapacity} Giờ</td>
                                        </tr>
                                        <tr style={{height:"8px"}}></tr>
                                        <tr style={{paddingBottom:"20px"}}><td>Thẻ sim</td>
                                            <td style={{paddingLeft:"10px"}}>{product.sim}</td>
                                            {/*<td style={{paddingLeft:"10px"}}>1 - 1 eSIM, 1 Nano SIM </td>*/}
                                        </tr>
                                        <tr style={{height:"8px"}}></tr>
                                        <tr style={{paddingBottom:"20px"}}>
                                            <td>Hệ điều hành</td>
                                            <td style={{paddingLeft:"10px"}}>{product.operatingSystem}</td>
                                        </tr>
                                        <tr style={{height:"8px"}}></tr>
                                        <tr style={{paddingBottom:"20px"}}><td>Xuất xứ</td>
                                            <td style={{paddingLeft:"10px"}}>{product.origin}</td>
                                            {/*<td style={{paddingLeft:"10px"}}>Trung Quốc </td>*/}
                                        </tr>
                                        <tr style={{height:"8px"}}></tr>
                                        <tr style={{paddingBottom:"20px"}}><td>Thời gian ra mắt</td>
                                            <td style={{paddingLeft:"10px"}}>{product.launchTime}</td>
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
                    <div className="col-4">
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
                    <div className="col-4">
                        <div className="progress-block">
                            <div className="progress-block__line"><span className="text">5</span><span
                                className="cm-ic-star cm-ic-color-warning cm-ic-xs m-x-4"></span>
                                <div className="progress progress-success progress-sm progress-line">
                                    <div className="progress-bar" style={{width: "82%;"}}></div>
                                </div>
                                <span className="text m-l-4">37</span></div>
                            <div className="progress-block__line"><span className="text">4</span><span
                                className="cm-ic-star cm-ic-color-warning cm-ic-xs m-x-4"></span>
                                <div className="progress progress-success progress-sm progress-line">
                                    <div className="progress-bar" style={{width: "18%;"}}></div>
                                </div>
                                <span className="text m-l-4">8</span></div>
                            <div className="progress-block__line"><span className="text">3</span><span
                                className="cm-ic-star cm-ic-color-warning cm-ic-xs m-x-4"></span>
                                <div className="progress progress-success progress-sm progress-line">
                                    <div className="progress-bar" style={{width: "0%;"}}></div>
                                </div>
                                <span className="text m-l-4">0</span></div>
                            <div className="progress-block__line"><span className="text">2</span><span
                                className="cm-ic-star cm-ic-color-warning cm-ic-xs m-x-4"></span>
                                <div className="progress progress-success progress-sm progress-line">
                                    <div className="progress-bar" style={{width: "0%;"}}></div>
                                </div>
                                <span className="text m-l-4">0</span></div>
                            <div className="progress-block__line"><span className="text">1</span><span
                                className="cm-ic-star cm-ic-color-warning cm-ic-xs m-x-4"></span>
                                <div className="progress progress-success progress-sm progress-line">
                                    <div className="progress-bar" style={{width: "0%;"}}></div>
                                </div>
                                <span className="text m-l-4">0</span></div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="action">
                            <div className="text">Bạn đã dùng sản phẩm này?</div>
                            <a className="btn btn-primary btn-lg m-t-8" aria-controls="comment-rate-invalid">GỬI
                                ĐÁNH GIÁ</a></div>
                    </div>
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
                                <div className="link link-xs" style={{ color: "blue" }}>Thích  Trả lời</div>
                                {/*<li></li>*/}
                                <div className="link link-xs" aria-controls="comment-reply-invalid" style={{ color: "blue" }}></div>
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