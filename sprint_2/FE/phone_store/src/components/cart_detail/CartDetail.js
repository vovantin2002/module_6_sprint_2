import Header from "../home/Header";
import Footer from "../home/Footer";

export default function CartDetail() {
    return (
        <>
            <Header></Header>
            <form action="/order?action=create">
                <section className="h-100 h-custom" style={{backgroundColor: "#d2c9ff;"}}>
                    <div className="container-fluid py-5 h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12">
                                <div className="card card-registration card-registration-2"
                                     style={{borderRadius: "15px;"}}>
                                    <div className="card-body p-0">
                                        <div className="row g-0">
                                            <div className="col-lg-12">
                                                <div className="p-5">
                                                    <div
                                                        className="d-flex justify-content-between align-items-center mb-5">
                                                        <h1 className="fw-bold mb-0 text-black">Giỏ hàng</h1>
                                                        <h6 className="mb-0 text-muted"></h6>
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
                                                    <hr className="my-4"/>
                                                    {/*// <!--                    </c:forEach>-->*/}
                                                    <div>
                                                        <h5 style={{marginLeft: "700px"}}
                                                            className="text-uppercase">Tổng tiền:
                                                            36.490.000₫ </h5>
                                                        {/*// <!--                      <h5 style="margin-left: 700px" class="text-uppercase">Total price: ${sessionScope.cart.total} </h5>-->*/}
                                                    </div>
                                                    <hr className="my-4"/>
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
                                                    <div className="pt-5">
                                                        <h6 className="mb-0">
                                                            <a href="home.html" className="text-body">
                                                                <i className="fas fa-long-arrow-alt-left me-2"></i>Quay
                                                                lại trang chủ
                                                            </a>
                                                        </h6>
                                                    </div>
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
            <div className="sticky bottom-0 z-[12] md:mt-4">
                <div className="rounded-t-2xl bg-white md:rounded-t-none"
                     style={{filter: "drop-shadow(rgba(2, 11, 39, 0.08) 0px -4px 16px);"}}>
                    <div className="mx-auto w-full px-4 md:max-w-[806px] md:px-0">
                        <div className="mx-[-16px]">
                            <div>
                                <div className="flex items-start justify-between py-2 px-4 ">
                                    <div className="flex flex-col items-center gap-2 md:flex-row">
                                        <div
                                            className="ant-space css-10ed4xt ant-space-horizontal ant-space-align-center css-0"
                                            style={{gap: "8px;"}}>
                                            <div className="ant-space-item" ><span size="24"
                                                                                           className="estore-icon cursor-pointer max-h-6 w-6 css-becbib"
                                                                                           fill="#F79009"><svg
                                                width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                xmlns="http://www.w3.org/2000/svg"><g
                                                clip-path="url(#clip0_3813_12522)"><path fill-rule="evenodd"
                                                                                         clip-rule="evenodd"
                                                                                         d="M6.14062 21.1895C3.94062 21.1895 2.14062 19.3895 2.14062 17.1895V16.1895C2.14062 15.5895 2.64062 15.1895 3.14062 14.9895C4.34063 14.5895 5.14062 13.4895 5.14062 12.1895C5.14062 10.8895 4.34063 9.78945 3.14062 9.38945C2.64062 9.18945 2.14062 8.78945 2.14062 8.18945V7.18945C2.14062 4.98945 3.94062 3.18945 6.14062 3.18945H18.1406C20.3406 3.18945 22.1406 4.98945 22.1406 7.18945V8.18945C22.1406 8.78945 21.6406 9.18945 21.1406 9.38945C19.9406 9.78945 19.1406 10.8895 19.1406 12.1895C19.1406 13.4895 19.9406 14.5895 21.1406 14.9895C21.6406 15.1895 22.1406 15.5895 22.1406 16.1895V17.1895C22.1406 19.3895 20.3406 21.1895 18.1406 21.1895H6.14062ZM9.14062 10.1895C9.74062 10.1895 10.1406 9.78945 10.1406 9.18945C10.1406 8.58945 9.74062 8.18945 9.14062 8.18945C8.54063 8.18945 8.14062 8.58945 8.14062 9.18945C8.14062 9.78945 8.54063 10.1895 9.14062 10.1895ZM16.1406 15.1895C16.1406 15.7895 15.7406 16.1895 15.1406 16.1895C14.5406 16.1895 14.1406 15.7895 14.1406 15.1895C14.1406 14.5895 14.5406 14.1895 15.1406 14.1895C15.7406 14.1895 16.1406 14.5895 16.1406 15.1895ZM15.6406 9.68945C15.9406 9.38945 15.9406 8.88945 15.6406 8.58945C15.3406 8.28945 14.8406 8.28945 14.5406 8.58945L8.54062 14.5895C8.24062 14.8895 8.24062 15.3895 8.54062 15.6895C8.84062 15.9895 9.34062 15.9895 9.64062 15.6895L15.6406 9.68945Z"
                                                                                         fill="#F79009"></path></g><defs><clipPath
                                                id="clip0_3813_12522"><rect width="24" height="24" fill="white"></rect></clipPath></defs></svg></span>
                                            </div>
                                            <div className="ant-space-item"><p
                                                className="cursor-pointer text-sm font-medium text-[#1250DC] md:text-base">Sử
                                                dụng voucher hoặc đổi điểm</p></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-2 h-[1px] w-full"></div>
                    {/*<div className="mx-auto w-full px-4 md:max-w-[806px] md:px-0">*/}
                    {/*    <div className="mx-[-16px]">*/}
                    {/*        <div className="py-3 px-4"><p className="css-o7xkz9 cart-term_rules__dqUZ4"><label*/}
                    {/*            className="ant-checkbox-wrapper ant-checkbox-wrapper-checked css-7znqkc css-10ed4xt"><span*/}
                    {/*            className="ant-checkbox css-10ed4xt ant-checkbox-checked"><input type="checkbox"*/}
                    {/*                                                                             className="ant-checkbox-input"*/}
                    {/*                                                                             value=""*/}
                    {/*                                                                             checked=""/><span*/}
                    {/*            className="ant-checkbox-inner"></span></span></label>Tôi đồng ý với <a href="/tos"*/}
                    {/*                                                                                   target="_blank"*/}
                    {/*                                                                                   rel="noreferrer"*/}
                    {/*                                                                                   className="cart-term_link__DfQWL">Điều*/}
                    {/*            khoản dịch vụ</a>, <a href="/ho-tro/chinh-sach-thu-thap-va-xu-ly-du-lieu-ca-nhan"*/}
                    {/*                                  target="_blank" rel="noreferrer"*/}
                    {/*                                  className="cart-term_link__DfQWL">Chính sách thu thập và xử lý dữ*/}
                    {/*            liệu cá nhân</a> của FPT Shop.</p></div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <div className="bg-gray-1 py-3">
                        <div className="mx-auto w-full px-4 md:max-w-[806px] md:px-0">
                            <div className="flex flex-col md:flex-row md:gap-6 ">
                                <div className="hidden flex-1 flex-col justify-between md:flex">
                                    <div className="flex justify-between"><p
                                        className="css-1oqd6bl text-text-secondary">Tổng tiền:</p><p
                                        className="css-1xs2qu0 text-text-primary">5.990.000đ</p></div>
                                    <div className="flex justify-between "><p
                                        className="css-1oqd6bl text-text-secondary">Giảm giá khuyến mãi</p><p
                                        className="css-1xs2qu0 text-gray-6">-2.100.000đ</p></div>
                                    <div className="flex justify-between"><p
                                        className="css-1oqd6bl text-text-secondary">Giảm giá voucher</p><p
                                        className="css-1xs2qu0 text-gray-6">0đ</p></div>
                                </div>
                                <div className="flex flex-1 justify-between  md:flex-col">
                                    <div className="flex flex-1 flex-col justify-between md:flex-row"><p
                                        className="css-1jmqkfq text-text-secondary">Cần thanh toán (1 sản phẩm)</p><p
                                        className="css-8uyn92 text-red-5 flex items-center">3.890.000đ</p></div>
                                    <button type="button"
                                            className="ant-btn css-10ed4xt ant-btn-primary max-w-[147px] !rounded-full md:mt-1 md:w-full md:max-w-none estore-btn estore-btn-bg  css-1krd2ey">
                                        <span>Hoàn tất đặt hàng</span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*// <div className="sidebar_lc-sidebar__kB27U  ">*/}
                {/*//     <div className="sidebar_inner__Y_ytf">*/}
                {/*//         <div className="sidebar_heading-title__AI5lC">*/}
                {/*//             <div className="align-items-center flex justify-between">*/}
                {/*//                 <div className="sidebar_heading-title--text__KFEdp align-items-center flex"><span*/}
                {/*//                     className="w-semiBold">Sử dụng voucher</span></div>*/}
                {/*//                 <span className=" sidebar_icon__dEYZC"><i className="fa-close"> </i></span></div>*/}
                {/*//         </div>*/}
                {/*//         <div className="min-h-[440px]">*/}
                {/*//             <div className="max-h-40 min-h-[110px] border-t border-gray-200 bg-white px-4 py-3 ">*/}
                {/*//                 <div*/}
                {/*//                     className="cart-vouchers_text-field__ypLmQ cart-vouchers_field-voucher__jAr_v  text-field field-voucher">*/}
                {/*//                     <input type="text" placeholder="Nhập mã voucher(Được áp dụng nhiều mã)"*/}
                {/*//                            className="!text-sm" value=""/>*/}
                {/*//                         <button disabled=""*/}
                {/*//                                 className="cart-vouchers_ui-btn__VsPba ui-btn ui-btn-primary ui-btn-sm ">Áp*/}
                {/*//                             dụng (Enter)*/}
                {/*//                         </button></div>*/}
                {/*//                 <p className="css-osuj7x text-gray-6 mt-3 text-left md:text-center">Nhập mã voucher được*/}
                {/*//                     nhận từ FPTShop hoặc từ các đối tác (Gotit, Urbox, Taptap, Vani, Utop)</p></div>*/}
                {/*//             <div*/}
                {/*//                 className="h-full max-h-[440px] flex-1 overflow-y-auto px-4 py-3 pb-28 md:max-h-[330px] md:pb-3">*/}
                {/*//                 <div className="cart-vouchers_item__PM3V1">*/}
                {/*//                     <div className="cart-vouchers_radio__8OHpE"><label htmlFor="km1">*/}
                {/*//                         <div className="cart-vouchers_picture__KLWNS">*/}
                {/*//                             <picture><img src="/static/images/loyalty.svg" alt="FPTShop Voucher"/>*/}
                {/*//                             </picture>*/}
                {/*//                         </div>*/}
                {/*//                         <span className="cart-vouchers_line-vertical__mEH9Z"></span>*/}
                {/*//                         <div className="flex-1">*/}
                {/*//                             <div className="flex items-center justify-between">*/}
                {/*//                                 <div className="cart-vouchers_info__42kCd"><p*/}
                {/*//                                     className="cart-vouchers_name__drCQ3">Đặc quyền đổi điểm thưởng</p>*/}
                {/*//                                 </div>*/}
                {/*//                             </div>*/}
                {/*//                             <div className="mt-3 flex cursor-pointer items-end justify-between">*/}
                {/*//                                 <div className="cart-vouchers_info__42kCd"><p*/}
                {/*//                                     className="text-blue-5 text-sm">Đăng nhập để sử dụng điểm thưởng</p>*/}
                {/*//                                 </div>*/}
                {/*//                             </div>*/}
                {/*//                             <div></div>*/}
                {/*//                         </div>*/}
                {/*//                     </label></div>*/}
                {/*//                 </div>*/}
                {/*//             </div>*/}
                {/*        </div>*/}
                {/*        <div className="sidebar_bottom__a4TEN cart-vouchers_bottom-voucher__yV4i8">*/}
                {/*            <div className="cart-vouchers_wrapper-voucher-bottom__F0Us6">*/}
                {/*                <div className="w-full pb-2 pr-2 md:w-1/2 md:pb-0"><p*/}
                {/*                    className="css-osuj7x flex-between text-gray-7 mb-1.5">Tổng giá trị voucher:<span*/}
                {/*                    className="text-gray-10 text-sm font-medium md:text-base">0đ</span></p><p*/}
                {/*                    className="css-osuj7x flex-between text-gray-7">Cần thanh toán:<span*/}
                {/*                    className="text-red-5 text-lg font-semibold md:text-xl">3.890.000đ</span></p></div>*/}
                {/*                <div className="w-full md:w-1/2">*/}
                {/*                    <button className="ui-btn ui-btn-primary ui-btn-md"><span>Xác nhận</span></button>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
            <Footer></Footer>
        </>
)
}