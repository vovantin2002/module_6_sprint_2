import Header from "../home/Header";
import Footer from "../home/Footer";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {format} from 'date-fns';
import {vi} from 'date-fns/locale';
import jwt_decode from "jwt-decode";

export default function History() {
    const [orderDetails, setOrderDetails] = useState();
    const infoAppUserByJwtToken = () => {
        const jwtToken = localStorage.getItem("JWT");
        if (jwtToken) {
            const result = jwt_decode(jwtToken);
            return result;
        }
    };
    const getOrderDetails = async () => {
        const isLoggedIn = infoAppUserByJwtToken();
        const id = await axios.get(`http://localhost:8080/api/user/getId?userName=${isLoggedIn.sub}`);
        const result = await axios.get(
            `http://localhost:8080/api/order-detail/${id.data}`);
        setOrderDetails(result?.data?.content)
    }
    useEffect(() => {
        getOrderDetails();
    }, [])
    const currency = (money) => {
        return new Intl.NumberFormat("vi-VN").format(money);
    };

    // Chuyển đổi định dạng ngày
    function formatDate(dateString) {
        const date = new Date(dateString);
        return format(date, 'dd MMMM yyyy', {locale: vi});
    }

    return (
        <>
        <Header></Header>
        <div className="container-fluid"  style={{marginTop: "78px"}}>
            <div className="container-fluid p-1 position-relative h-auto">
                <div className={"row"}>
                    {/*<div className={"col-3"}>*/}
                    {/*    <Link to="/home" className="btn btn-outline-primary mb-5">*/}
                    {/*        ← Tiếp tục xem sản phẩm*/}
                    {/*    </Link>*/}
                    {/*</div>*/}
                    {/*<div className={"col-9"}>*/}
                    <h1
                        className="text-center mb-5 mx-auto "
                        style={{color: "#119cd4", marginLeft: "10px"}}
                    >
                        LỊCH SỬ MUA HÀNG
                    </h1>
                    {/*</div>*/}
                </div>
                {orderDetails?.length > 0 ? (
                    <div className="container-fluid w-100">
                        <div className="row">
                            <div className="row">
                                <div className={"col-1"}></div>
                                <div className="col-10 d-flex flex-column justify-content-center align-items-center">
                                    <table className="table table-hover" style={{textAlign: "center"}}>
                                        <thead className="text-secondary">
                                        <tr className="text-center fw-bold">
                                            <td>SẢN PHẨM</td>
                                            <td>Giá (VNĐ)</td>
                                            <td>Số lượng</td>
                                            <td>Tổng (VNĐ)</td>
                                            <td>Ngày</td>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {orderDetails?.length > 0 &&
                                            orderDetails?.map((el, index) => {
                                                return (
                                                    <tr key={`el_${index}`}>
                                                        <td className=" text-center align-middle">
                                                            <div
                                                                className="d-flex flex-column flex-md-row align-items-center justify-content-start ">
                                                                <img
                                                                    src={el?.products?.imageUrl}
                                                                    style={{
                                                                        width: "3.5rem",
                                                                        height: "4.0rem",
                                                                        cursor: "pointer",
                                                                    }}
                                                                />
                                                                <div
                                                                    style={{cursor: "pointer"}}
                                                                    className="text-center align-middle mx-2"
                                                                >
                                                                    <div>{el?.products?.name}</div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className=" text-center align-middle fw-bold">
                                                            {currency(el?.products?.price)} đ
                                                        </td>
                                                        {/*                            quantity*/}
                                                        <td className="align-middle">
                                                            <div
                                                                className=" d-flex flex-md-row flex-column justify-content-center align-items-center">
                                                                <div
                                                                    style={{
                                                                        width: "50px",
                                                                        height: "35px",
                                                                    }}
                                                                    className="text-center input-quantity"
                                                                >
                                                                    {el?.quantity}</div>
                                                            </div>
                                                        </td>
                                                        {/*                            total price*/}
                                                        <td className="align-middle text-center fw-bold">
                                                            {currency(
                                                                el?.quantity * el?.products?.price
                                                            )} đ
                                                        </td>
                                                        <td className="align-middle text-center">
                                                            {
                                                                formatDate(el?.orders?.orderDate)
                                                            }
                                                        </td>
                                                    </tr>
                                                );
                                            })}
            </tbody>
        </table>
        </div>
    <div className={"col-1"}></div>
</div>

</div>
</div>
) :
    (
        <h3 style={{color: "red", textAlign: "center"}}>Chưa có lịch sử mua hàng!</h3>
    )
}
</div>
</div>
    <div style={{
        position: "relative",
        bottom: "-178px"
    }}>
        <Footer></Footer>
    </div>
</>
)
}