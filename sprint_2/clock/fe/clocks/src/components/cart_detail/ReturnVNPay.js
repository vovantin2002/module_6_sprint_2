import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import Swal from "sweetalert2";
import ClipLoader from "react-spinners/ClipLoader";
import Header from "../home/Header";
import Footer from "../home/Footer";
import axios from "axios";

export default function ReturnVNPay() {
    const [responseCode, setResponseCode] = useState(null);
    const [dataList, setDataList] = useState({});
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#119cd4");
    const navigate = useNavigate();

    const getURL = () => {
        const urlParams = new URLSearchParams(window.location.search);
        const responseCode = urlParams.get("vnp_ResponseCode");
        setResponseCode(responseCode);
    };

    const paymentSuccess = async () => {
        if (responseCode == "00") {
            const temp = localStorage.getItem("tempOrder");
            const deletedCartIDs = localStorage.getItem("deletedCartIDs");
            const tempOrder = JSON.parse(temp);
            const deletedCartIDs1 = JSON.parse(deletedCartIDs);
            setDataList(tempOrder);
            await axios.post(
                "http://localhost:8080/api/cart/delete",
                deletedCartIDs1
            );
            localStorage.removeItem("tempOrder");
            localStorage.removeItem("deletedCartIDs");

            try {
                await createOrder(tempOrder);
                setLoading(false);
                Swal.fire({
                    title: "Thông báo",
                    text: "Thanh toán thành công. Cảm ơn bạn đã sử dụng dịch vụ của VVT Shop!",
                    timer: 5000,
                    icon: "success",
                    showConfirmButton: false,
                })
                navigate("/home")
            } catch (err) {
                Swal.fire({
                    title: "Thanh toán không thành công!",
                    timer: 1500,
                    icon: "error",
                    showConfirmButton: false,
                }).then(async () => {
                    localStorage.removeItem("tempOrder");
                });
            }
        } else {
            Swal.fire({
                title: "Xin lỗi chúng tôi không thể thực hiện thanh toán này!",
                timer: 1500,
                icon: "error",
                showConfirmButton: false,
            }).then(async () => {
                localStorage.removeItem("tempOrder");
            });
        }
    };

    useEffect(() => {
        getURL();
    }, []);

    useEffect(() => {
        if (responseCode != null) {
            paymentSuccess();
        }
    }, [responseCode]);

    async function createOrder(temp) {
        try {
            const res = await axios.post(
                `http://localhost:8080/api/order-detail`, temp);
            return res;
        } catch (error) {
            console.error(`error in createOrder: ${error}`);
        }
    }

    if (loading) {
        return (
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                }}
            >
                <ClipLoader color={color} loading={loading} size={150}/>
            </div>
        );
    }

    return (
        <>
            <Header/>
            <h1 style={{marginBottom: "500px"}}>Thanh toán thành công.
                Cảm ơn bạn đã sử dụng dịch vụ của VVT Shop!</h1>
            <Footer/>
        </>
    );
}
