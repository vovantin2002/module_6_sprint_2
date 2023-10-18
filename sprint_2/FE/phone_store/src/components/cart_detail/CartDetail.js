import Header from "../home/Header";
import Footer from "../home/Footer";
import "./CartDetail.css"
import {useState} from "react";

export default function CartDetail() {
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        address: '',
        email: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };const formStyles = {
        display: "flex",
        flexDirection: "column",
        maxWidth: "806px",
        margin: "0 auto",
        border: "1px solid black",
        padding: "10px",
        borderRadius: "10px",
        marginLeft:"10px",
        marginRight:"10px",
        marginBottom:"10px",
        marginTop:"10px"
    };

    const formGroupStyles = {
        marginBottom: "1rem",
    };

    const labelStyles = {
        fontWeight: "bold",
    };

    const inputStyles = {
        width: "100%",
        padding: "0.5rem",
        borderRadius: "8px",
        border: "1px solid #ccc",
    //     background: "var(--white)",
    // boxShadow: "0 0 0 1px var(--gray-400)",
    // // borderRadius: "8px",
    // // padding: "16px",
    // fontSize: "16px",
    // fontWeight: "400",
    // lineHeight: "24px",
    // letterSpacing: ".005em"
    };

    const buttonStyles = {
        textAlign:"center",
        padding: "0.5rem 1rem",
        backgroundColor: "#007bff",
        // color: "#fff",
        // border: "none",
        // borderRadius: "4px",
        // cursor: "pointer",
        width: "400px",
        background: "#007bff",
        /*boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",*/
        backdropFilter: "blur(18.5px)",
        WebkitBackdropFilter: "blur(18.5px)",
        // borderRadius: "10px",
        border: "1px solid rgba(255, 255, 255, 0.18)",
        outline: "none",
        height: "49px",
        borderRadius: "49px",
        color: "#fff",
        textTransform: "uppercase",
        fontWeight: "600",
        margin: "10px 0",
        cursor: "pointer",
        transition: "0.5s",
    };

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     console.log(formData);
    //     setFormData({
    //         fullName: "",
    //         phoneNumber: "",
    //         address: "",
    //         email: "",
    //     });
    // }


    const handleSubmit = (e) => {
        e.preventDefault();
        // Process the form data, e.g., send it to the server
        console.log(formData);
        // Reset the form
        setFormData({
            fullName: '',
            phoneNumber: '',
            address: '',
            email: '',
        });
    };
    return (
        <>
            <Header></Header>
            <div id={"cart"} style={{backgroundColor: "#edf0f3",}}>
                <form action="/order?action=create">
                    <section className="h-100 h-custom" style={{backgroundColor: "#d2c9ff;"}}>
                        <div className="container-fluid py-5 h-100">
                            <div className="row d-flex justify-content-center align-items-center h-100">
                                <div className="col-12"  style={{maxWidth: "806px",}}>
                                    <div className="card card-registration card-registration-2"
                                         style={{borderRadius: "15px;"}}>
                                        <div className="card-body p-0">
                                            <div className="row g-0">
                                                <div className="col-lg-12">
                                                    <div className="p-5">
                                                        <div
                                                            className="d-flex justify-content-between align-items-center mb-5">
                                                            <h5 style={{textAlign:"center"}} className="fw-bold mb-0 text-black">Giỏ hàng của bạn</h5>
                                                            {/*<h6 className="mb-0 text-muted"></h6>*/}
                                                        </div>
                                                        <hr className="my-4"/>
                                                        {/*// <!--                    <c:forEach items="${sessionScope.cart.itemsList}" var="cart">-->*/}
                                                        <div
                                                            className="row mb-4 d-flex justify-content-between align-items-center">
                                                            <div className="col-md-2 col-lg-2 col-xl-2">
                                                                {/*// <!--                          <img src="${cart.product.image}" class="img-fluid rounded-3"-->*/}
                                                                {/*// <!--                               style="width: 150px; height: 120px">-->*/}
                                                                <img
                                                                    src="https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/9/14/638302786719525352_ip-15-pro-max-dd.jpg"
                                                                    className="img-fluid rounded-3"
                                                                    style={{width: "150px;", height: "120px"}}/>
                                                            </div>
                                                            <div className="col-md-3 col-lg-3 col-xl-3">
                                                                {/*// <!--                          <h6 class="text-muted">${cart.product.productName}</h6>-->*/}
                                                                <h6 className="text-muted">iPhone 15 Pro Max 256GB</h6>
                                                            </div>
                                                            <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                                                <a role="button"
                                                                   href="/cart?action=quantityMinus&id=${cart.product.productId}">
                                                                    <i className="fas fa-minus"></i>
                                                                </a>
                                                                <input style={{textAlign: "center", width: "50px"}}
                                                                       name="quantity" value="1" type="number"
                                                                       readOnly
                                                                       className="form-control form-control-sm"/>
                                                                <a role="button"
                                                                   href="/cart?action=quantityPlus&id=${cart.product.productId}">
                                                                    <i className="fas fa-plus"></i>
                                                                </a>
                                                            </div>
                                                            <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                                                {/*// <!--                          <h6 class="mb-0">Giá: ${cart.priceItem()}</h6>-->*/}
                                                            </div>
                                                            <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                                                <a role="button" className="btn-outline-dark"
                                                                   data-bs-toggle="modal"
                                                                   data-bs-target="#modelId"
                                                                   onClick="remove('${cart.product.productId}','${cart.product.productName}')">
                                                                    <i className="fas fa-times"></i>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        {/*<hr className="my-4"/>*/}
                                                        {/*// <!--                    </c:forEach>-->*/}
                                                        {/*<div>*/}
                                                        {/*    <h5 style={{marginLeft: "700px"}}*/}
                                                        {/*        className="text-uppercase">Tổng tiền:*/}
                                                        {/*        36.490.000₫ </h5>*/}
                                                            {/*// <!--                      <h5 style="margin-left: 700px" class="text-uppercase">Total price: ${sessionScope.cart.total} </h5>-->*/}
                                                        {/*</div>*/}
                                                        {/*<hr className="my-4"/>*/}
                                                        {/*// <!--&lt;!&ndash;                    <c:if test="${sessionScope.user.userName == null && sessionScope.cart.itemsList == null}">&ndash;&gt;-->*/}
                                                        {/*// <!--                      <h3 style="text-align: center">Giỏ hàng trống</h3>-->*/}
                                                        {/*// <!--&lt;!&ndash;                    </c:if>&ndash;&gt;-->*/}
                                                        {/*// <!--&lt;!&ndash;                    <c:if test="${sessionScope.user.userName == null && sessionScope.cart.itemsList != null}">&ndash;&gt;-->*/}
                                                        {/*// <!--                      <a role="button" class="btn btn-outline-dark" href="/login">Đặt hàng</a>-->*/}
                                                        {/*// <!--&lt;!&ndash;                    </c:if>&ndash;&gt;-->*/}
                                                        {/*// <!--&lt;!&ndash;                    <c:if test="${sessionScope.user.userName != null}">&ndash;&gt;-->*/}
                                                        {/*// <!--                      <input type="hidden" value="${sessionScope.user.userId}" name="idCustomer">-->*/}
                                                        {/*// <!--&lt;!&ndash;                      <c:if test="${sessionScope.cart.itemsList == null}">&ndash;&gt;-->*/}
                                                        {/*// <!--                        <h3 style="text-align: center">Giỏ hàng trống</h3>-->*/}
                                                        {/*// <!--&lt;!&ndash;                      </c:if>&ndash;&gt;-->*/}
                                                        {/*// <!--&lt;!&ndash;                      <c:if test="${sessionScope.cart.itemsList != null}">&ndash;&gt;-->*/}
                                                        {/*// <!--                        <a role="button" type="submit" class="btn btn-outline-dark" href="/order?action=create&id=${sessionScope.user.userId}"-->*/}
                                                        {/*// <!--                           data-mdb-ripple-color="dark" style="text-align: center">Đặt hàng-->*/}
                                                        {/*// <!--                        </a>-->*/}
                                                        {/*// <!--                      </c:if>-->*/}
                                                        {/*// <!--                    </c:if>-->*/}
                                                        {/*<div className="pt-5">*/}
                                                        {/*    <h6 className="mb-0">*/}
                                                        {/*        <a href="home.html" className="text-body">*/}
                                                        {/*            <i className="fas fa-long-arrow-alt-left me-2"></i>Quay*/}
                                                        {/*            lại trang chủ*/}
                                                        {/*        </a>*/}
                                                        {/*    </h6>*/}
                                                        {/*</div>*/}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </form>
                {/*// <!-- Modal -->*/}
                <div className="modal fade" id="modelId" tabIndex="-1" role="dialog" aria-labelledby="modelTitleId"
                     aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title" id="modelTitleId" style={{color: "red"}}>WARNING</h4>
                                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <h3>Bạn có chắc chắn xóa sản phẩm:
                                    <h4 style={{color: "red"}} id="nameDelete"></h4>
                                </h3>
                            </div>
                            <div className="modal-footer">
                                <form action="/cart?action=delete" method="post">
                                    <input type="hidden" name="idDelete" id="idDelete"/>
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Hủy
                                    </button>
                                    <button type="submit" className="btn btn-primary">Xóa</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
{/*<div>*/}
{/*    */}
{/*</div>*/}
                <div className={"row"}>
                    <div className={"col-2"}></div>
                    <div className={"col-8"}><form onSubmit={handleSubmit} style={formStyles}>
                        <h5 >Thông tin người đặt</h5>
                        <div className={"row"}>
                            <div className={"col-6"} style={formGroupStyles}>
                                {/*<label style={labelStyles} htmlFor="fullName">*/}
                                {/*    Họ và tên:*/}
                                {/*</label>*/}
                                <input
                                    style={inputStyles}
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    placeholder={"Nhập họ và tên"}
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className={"col-6"} style={formGroupStyles}>
                                {/*<label style={labelStyles} htmlFor="phoneNumber">*/}
                                {/*    Số điện thoại:*/}
                                {/*</label>*/}
                                <input
                                    style={inputStyles}
                                    type="text"
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    placeholder={"Nhập số điện thoại"}
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div  className={"row"}>
                            <div className={"col-6"} style={formGroupStyles}>
                                {/*<label style={labelStyles} htmlFor="address">*/}
                                {/*    Địa chỉ:*/}
                                {/*</label>*/}
                                <input
                                    style={inputStyles}
                                    type="text"
                                    id="address"
                                    name="address"
                                    placeholder={"Nhập địa chỉ"}
                                    value={formData.address}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className={"col-6"} style={formGroupStyles}>
                                {/*<label style={labelStyles} htmlFor="email">*/}
                                {/*    Email:*/}
                                {/*</label>*/}
                                <input
                                    style={inputStyles}
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder={"Nhập email"}
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div style={{textAlign:"center"}}>
                            <button style={buttonStyles} type="submit">Xác nhận</button>
                        </div>

                    </form></div>
                    <div className={"col-2"}></div>
                </div>

                {/*    <h3>Thông tin người đặt </h3>*/}
                {/*    <div className={"row"} style={{marginBottom: "1rem;"}}>*/}
                {/*        <div className={"col-6"}>*/}
                {/*            /!*<label htmlFor="fullName">Họ và tên:</label>*!/*/}
                {/*            <input*/}
                {/*                type="text"*/}
                {/*                id="fullName"*/}
                {/*                name="fullName"*/}
                {/*                value={formData.fullName}*/}
                {/*                onChange={handleChange}*/}
                {/*                required*/}
                {/*            />*/}
                {/*        </div>*/}
                {/*        <div  className={"col-6"}>*/}
                {/*            /!*<label htmlFor="phoneNumber">Số điện thoại:</label>*!/*/}
                {/*            <input*/}
                {/*                type="text"*/}
                {/*                id="phoneNumber"*/}
                {/*                name="phoneNumber"*/}
                {/*                value={formData.phoneNumber}*/}
                {/*                onChange={handleChange}*/}
                {/*                required*/}
                {/*            />*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className={"row"}>*/}
                {/*        <div className={"col-6"}>*/}
                {/*            /!*<label htmlFor="address">Địa chỉ:</label>*!/*/}
                {/*            <input*/}
                {/*                type="text"*/}
                {/*                id="address"*/}
                {/*                name="address"*/}
                {/*                value={formData.address}*/}
                {/*                onChange={handleChange}*/}
                {/*                required*/}
                {/*            />*/}
                {/*        </div>*/}
                {/*        <div className={"col-6"}>*/}
                {/*            /!*<label htmlFor="email">Email:</label>*!/*/}
                {/*            <input*/}
                {/*                type="email"*/}
                {/*                id="email"*/}
                {/*                name="email"*/}
                {/*                value={formData.email}*/}
                {/*                onChange={handleChange}*/}
                {/*                required*/}
                {/*            />*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <button type="submit">Xác nhận</button>*/}
                {/*</form>*/}
                <div className="sticky bottom-0 z-[12] md:mt-4">
                    <div className="rounded-t-2xl bg-white md:rounded-t-none"
                         style={{filter: "drop-shadow(rgba(2, 11, 39, 0.08) 0px -4px 16px);"}}>

                            <div className="mx-auto w-full px-4 md:max-w-[806px] md:px-0">
                                    <div className="mx-[-16px]">
                                        <div className={"row"}>
                                            <div className={"col-2"}></div>
                                        <div className="col-8 flex items-start justify-between py-2 px-4 ">
                                            <div className="flex flex-col items-center gap-2 md:flex-row">
                                                <div
                                                    className="ant-space css-10ed4xt ant-space-horizontal ant-space-align-center css-0"
                                                    style={{gap: "8px;"}}>
                                                    {/*<div className="ant-space-item"><span size="24"*/}
                                                    {/*                                      className="estore-icon cursor-pointer max-h-6 w-6 css-becbib"*/}
                                                    {/*                                      fill="#F79009"><svg*/}
                                                    {/*    width="24" height="24" viewBox="0 0 24 24" fill="none"*/}
                                                    {/*    xmlns="http://www.w3.org/2000/svg"><g*/}
                                                    {/*    clip-path="url(#clip0_3813_12522)"><path fill-rule="evenodd"*/}
                                                    {/*                                             clip-rule="evenodd"*/}
                                                    {/*                                             d="M6.14062 21.1895C3.94062 21.1895 2.14062 19.3895 2.14062 17.1895V16.1895C2.14062 15.5895 2.64062 15.1895 3.14062 14.9895C4.34063 14.5895 5.14062 13.4895 5.14062 12.1895C5.14062 10.8895 4.34063 9.78945 3.14062 9.38945C2.64062 9.18945 2.14062 8.78945 2.14062 8.18945V7.18945C2.14062 4.98945 3.94062 3.18945 6.14062 3.18945H18.1406C20.3406 3.18945 22.1406 4.98945 22.1406 7.18945V8.18945C22.1406 8.78945 21.6406 9.18945 21.1406 9.38945C19.9406 9.78945 19.1406 10.8895 19.1406 12.1895C19.1406 13.4895 19.9406 14.5895 21.1406 14.9895C21.6406 15.1895 22.1406 15.5895 22.1406 16.1895V17.1895C22.1406 19.3895 20.3406 21.1895 18.1406 21.1895H6.14062ZM9.14062 10.1895C9.74062 10.1895 10.1406 9.78945 10.1406 9.18945C10.1406 8.58945 9.74062 8.18945 9.14062 8.18945C8.54063 8.18945 8.14062 8.58945 8.14062 9.18945C8.14062 9.78945 8.54063 10.1895 9.14062 10.1895ZM16.1406 15.1895C16.1406 15.7895 15.7406 16.1895 15.1406 16.1895C14.5406 16.1895 14.1406 15.7895 14.1406 15.1895C14.1406 14.5895 14.5406 14.1895 15.1406 14.1895C15.7406 14.1895 16.1406 14.5895 16.1406 15.1895ZM15.6406 9.68945C15.9406 9.38945 15.9406 8.88945 15.6406 8.58945C15.3406 8.28945 14.8406 8.28945 14.5406 8.58945L8.54062 14.5895C8.24062 14.8895 8.24062 15.3895 8.54062 15.6895C8.84062 15.9895 9.34062 15.9895 9.64062 15.6895L15.6406 9.68945Z"*/}
                                                    {/*                                             fill="#F79009"></path></g><defs><clipPath*/}
                                                    {/*    id="clip0_3813_12522"><rect width="24" height="24"*/}
                                                    {/*                                fill="white"></rect></clipPath></defs></svg></span>*/}
                                                    {/*</div>*/}
                                                    <div className="ant-space-item"><a
                                                        className="cursor-pointer text-sm font-medium text-[#1250DC] md:text-base">Sử
                                                        dụng voucher hoặc đổi điểm</a></div>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div className={"col-2"}>
                                        </div>
                                    </div>

                                    {/*<div className="bg-gray-2 h-[1px] w-full"></div>*/}
                                    <div className="bg-gray-1 py-3">
                                        <div className="mx-auto w-full px-4 md:max-w-[806px] md:px-0">
                                            <div className="row flex flex-col md:flex-row md:gap-6 ">
                                                <div className={"col-2"}>
                                                </div>
                                                <div className="col-4 hidden flex-1 flex-col justify-between md:flex">
                                                    <div className="flex justify-between"><p
                                                        className="css-1oqd6bl text-text-secondary">Tổng tiền: 5.990.000đ</p>
                                                        {/*<p*/}
                                                        {/*className="css-1xs2qu0 text-text-primary"></p>*/}
                                                    </div>
                                                    <div className="flex justify-between "><p
                                                        className="css-1oqd6bl text-text-secondary">Giảm giá khuyến
                                                        mãi -2.100.000đ</p>
                                                        {/*<p*/}
                                                        {/*className="css-1xs2qu0 text-gray-6"></p>*/}
                                                    </div>
                                                    <div className="flex justify-between"><p
                                                        className="css-1oqd6bl text-text-secondary">Giảm giá voucher 0đ</p>
                                                        {/*<p*/}
                                                        {/*    className="css-1xs2qu0 text-gray-6"></p>*/}
                                                    </div>
                                                </div>
                                                <div className="col-4 flex flex-1 justify-between  md:flex-col">
                                                    <div className="flex flex-1 flex-col justify-between md:flex-row">
                                                        <span style={{display:"inline"}}><p
                                                        className="css-1jmqkfq text-text-secondary">Cần thanh toán (1
                                                        sản phẩm) 3.890.000đ</p>
                                                        {/*    <p*/}
                                                        {/*className="css-8uyn92 text-red-5 flex items-center"></p>*/}
                                                        </span>
                                                    </div>
                                                    <button type="button"
                                                            className="btn ant-btn css-10ed4xt ant-btn-primary max-w-[147px] !rounded-full md:mt-1 md:w-full md:max-w-none estore-btn estore-btn-bg  css-1krd2ey">
                                                        <span>Hoàn tất đặt hàng</span></button>
                                                </div>
                                                <div className={"col-2"}>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                            </div>

                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}