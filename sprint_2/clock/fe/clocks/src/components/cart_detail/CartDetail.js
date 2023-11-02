import Header from "../home/Header";
import Footer from "../home/Footer";
import "./CartDetail.css"
import React, {useEffect, useState} from "react";
import axios from "axios";
import Swal from "sweetalert2";
import {useParams} from "react-router-dom";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup"
import swal from "sweetalert2";

export default function CartDetail() {
    const [carts, setCarts] = useState([]);
    const [customer, setCustomer] = useState({});
    const [cart2, setCart2] = useState({});
    const {id} = useParams();
    const [totalPrice, setTotalPrice] = useState(0);
    const [selectedCart, setSelectedCart] = useState([]);


    const getCarts = async () => {
        try {
            const result = await axios.get(`http://localhost:8080/api/cart/${id}`);
            const result1 = await axios.get(`http://localhost:8080/api/customer/${result.data[0]?.accounts?.customers?.customerId}`);
            setCustomer(result1.data);
            setCarts(result.data);
        } catch (e) {
            console.log(e)
        }

    }
    useEffect(() => {
        document.title = "VVT Shop - Giỏ hàng";
    }, []);
    useEffect(() => {
        let newTotalPrice = selectedCart.reduce(
            (total, el) => total + el?.products?.price * el.quantity,
            0
        );
        console.log(newTotalPrice)
        setTotalPrice(newTotalPrice);
        console.log(selectedCart)
    }, [selectedCart]);
    useEffect(() => {
        getCarts();
    }, [])


    const formStyles = {
        display: "flex",
        flexDirection: "column",
        maxWidth: "806px",
        margin: "0 auto",
        border: "1px solid black",
        padding: "10px",
        borderRadius: "10px",
        marginLeft: "10px",
        marginRight: "10px",
        marginBottom: "10px",
        marginTop: "10px"
    };

    const formGroupStyles = {
        marginBottom: "1rem",
    };


    const inputStyles = {
        width: "100%",
        padding: "0.5rem",
        borderRadius: "8px",
        border: "1px solid #ccc",
    };
    const handleMultiSelect = (cart) => {
        console.log(cart?.products?.productId);
        if (
            selectedCart.find(
                (selected) => selected?.products?.productId === cart?.products?.productId
            )
        ) {
            setSelectedCart(
                selectedCart.filter(
                    (selected) => selected?.products?.productId !== cart?.products?.productId
                )
            );
        } else {
            setSelectedCart([...selectedCart, cart]);
        }
    };

    const handleVNPAY = async () => {
        // let finalPrice = totalPrice - discount;
        const {format} = require('date-fns');

        let currentDate = new Date();
        let formattedDate = format(currentDate, 'yyyy-MM-dd');
        const plusPoint = totalPrice / 100;
        let integerValue = Math.floor(totalPrice);
        // const loyaltyPoint = point + plusPoint - discount;
        let deletedCartIDs = [];
        selectedCart.forEach((med) => deletedCartIDs.push(med.cartId));
        console.log(selectedCart)
        const tempOrder = {
            orderDetails: selectedCart.map(cartItem => ({
                quantity: cartItem?.quantity,
                products: {
                    productId: cartItem?.products?.productId
                }
            })),
            orders: {
                orderDate: formattedDate,
                totalAmount: integerValue,
                accounts: {
                    accountId: selectedCart[0]?.accounts?.accountId
                }
            }
        };
        console.log(tempOrder)
        localStorage.setItem("tempOrder", JSON.stringify(tempOrder));
        localStorage.setItem("deletedCartIDs", JSON.stringify(deletedCartIDs));
        const res = await axios.get("http://localhost:8080/payment", {
            params: {
                price: integerValue,
            },
        });
        // const res = await createVNPayPayment(finalPrice);
        window.location.href = res.data;
    };

    const buttonStyles = {
        textAlign: "center",
        padding: "0.5rem 1rem",
        backgroundColor: "#007bff",
        width: "400px",
        background: "#007bff",
        backdropFilter: "blur(18.5px)",
        WebkitBackdropFilter: "blur(18.5px)",
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

    async function deleteMultiProduct(deleledCartIDs) {
        await axios.post(
            "http://localhost:8080/api/cart/delete",
            deleledCartIDs
        );
    }

    const handleDelete = async () => {
        if (selectedCart.length === 0) {
            swal.fire({
                title: "Vui lòng chọn sản phẩm cần xoá!",
                icon: "warning",
            });
        } else {
            let deletedCartIDs = [];
            selectedCart.forEach((med) => deletedCartIDs.push(med.cartId));
            console.log(deletedCartIDs);
            let names = selectedCart
                .map((cart) => cart.products.modleName)
                .join(", ");

            swal
                .fire({
                    title:
                        "Bạn có muốn xoá " +
                        selectedCart.length +
                        " sản phẩm này khỏi giỏ hàng?",
                    text: names,
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Đồng ý!",
                    cancelButtonText: "Huỷ",
                })
                .then(async (willDelete) => {
                    if (willDelete.isConfirmed) {
                        await deleteMultiProduct(deletedCartIDs);
                        // setIsUpdated((prev) => !prev);
                        // update the selectedMedicines
                        setSelectedCart(
                            selectedCart.filter(
                                (med) => !deletedCartIDs.includes(med.cartId)
                            )
                        );
                        getCarts();
                        // setDiscount(0);
                        swal.fire("Xoá sản phẩm thành công!", "", "success");
                    }
                });
        }
    };

    function formatPrice(price) {
        const formatter = new Intl.NumberFormat('vi-VN');
        return formatter.format(price);
    }

    async function deleteCart(cartId) {
        await axios.delete(
            `http://localhost:8080/api/cart/${cartId}`
        );
    }

    async function handleMinus(productId, cartName, cart) {
        let quantity = document.getElementById("input-quantity" + productId);
        try {
            if (quantity.value == 1) {
                swal
                    .fire({
                        title: "Bạn có muốn xoá sản phẩm này khỏi giỏ hàng?",
                        text: cartName,
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Đồng ý",
                        cancelButtonText: "Huỷ",
                    })
                    .then(async (willDelete) => {
                        if (willDelete.isConfirmed) {
                            await deleteCart(cart.cartId);
                            await getCarts()
                            // await deleteCart(cartId);
                            // setIsUpdated((prev) => !prev);
                            swal.fire("Xoá sản phẩm thành công!", "", "success");
                            // Update the selectedMedicines state
                            setSelectedCart(
                                selectedCart.filter(
                                    (medicine) => medicine.products.productId !== productId
                                )
                            );
                        }
                    });
            }
            if (quantity.value > 1) {
                quantity.value = parseInt(quantity.value) - 1;
            }
            setCart2(cart.quantity = quantity.value);
            await addToCart(cart)
            // await addToCart(appUserId, medicineId, quantity.value);
            // setIsUpdated((prev) => !prev);
            setSelectedCart(
                selectedCart.map((medicine) =>
                    medicine.products.productId === productId
                        ? {...medicine, quantity: quantity.value}
                        : medicine
                )
            );
        } catch {
        }
    }

    async function checkQuantity(productId, inputQuantity) {
        const res = await axios.get(
            `http://localhost:8080/api/cart/check-quantity?productId=${productId}&inputQuantity=${inputQuantity}`
        );
        return res.status;
    }

    async function handlePlus(cart, medicineId) {
        let quantity = document.getElementById("input-quantity" + medicineId);
        try {
            await checkQuantity(medicineId, parseInt(quantity.value) + 1);
            // if enuf - allow to buy maximum 99
            if (quantity.value < 99) {
                quantity.value = parseInt(quantity.value) + 1;
            } else {
                quantity.value = 99;
            }
            setCart2(cart.quantity = quantity.value);
            setCart2(cart)
            await addToCart(cart)
            setSelectedCart(
                selectedCart.map((ca) =>
                    ca?.products?.productId === medicineId
                        ? {...ca, quantity: quantity.value}
                        : ca
                )
            );
        } catch {
            swal.fire(
                "Sản phẩm vượt quá số lượng cho phép!",
                // "Số lượng còn lại ở kho: " + quantityInStock,
                "warning"
            );
        }
    }

    // Hàm xử lý sự kiện tăng/giảm số lượng sản phẩm
    const handleQuantityChange = (cart, action) => {
        // event.preventDefault();
        // const updatedCarts = [cart];
        if (action === "minus") {
            if (cart.quantity > 1) {
                cart.quantity--;
                setSelectedCart(
                    selectedCart.filter(
                        (ca) => ca?.products?.productId !== cart?.products?.productId
                    )
                );
            }
        } else if (action === "plus") {
            cart.quantity++;
            // setSelectedCart(
            //     selectedCart.map((ca) =>
            //         ca?.products?.productId === cart?.products?productId
            //             ? { ...ca, quantity: quantity.value }
            //             : ca
            //     )
            // );
        }
        // Cập nhật danh sách carts với số lượng sản phẩm đã thay đổi
        setCart2(cart);
        addToCart(cart)
    };
    useEffect(() => {
        addToCart(cart2)
    }, [cart2])
    useEffect(() => {
        getCustomer()
    }, [])
    const addCustomer = async (value) => {
        try {
            const result = {
                ...value
                , customerId: customer.customerId,
            };
            console.log(value)
            console.log(result)
            await axios.patch(
                `http://localhost:8080/api/customer`, result);
            Swal.fire("Cập nhật thông tin khách hàng thành công", "", "success");
        } catch (e) {
            console.log(e)
        }
    }
    const getCustomer = async () => {
        try {
            if (carts && carts[0]?.accounts?.customers?.customerId) {
                try {
                    const result = await axios.get(`http://localhost:8080/api/customer/${carts[0]?.accounts?.customers?.customerId}`);
                    console.log(result.data);
                    setCustomer(result.data);
                } catch (e) {
                    console.log(e);
                }
            }
        } catch (e) {
            console.log(e)
        }
    };
    const addToCart = async (cart) => {
        if (cart.quantity) {
            await axios.post(
                `http://localhost:8080/api/cart/addd`, cart);
            // Swal.fire({
            //     // title: 'Thêm mới thành công !',
            //     text: 'Cập nhật số lượng sản phẩm thành công',
            //     icon: 'success',
            //     timer: 3000, // Thời gian hiển thị thông báo (3 giây)
            //     showConfirmButton: false,
            // });
            getCarts();
            // Swal.fire("Cập nhật số lượng sản phẩm thành công", "", "success");
            // toast.success("Cập nhật số lượng sản phẩm thành công");
        }
    };
    return (
        <>
            <Header></Header>
            <div className="container-fluid" style={{ marginTop:"40px"}}>
                <div id={"cart"} style={{backgroundColor: "#edf0f3",}}>
                    <form action="/order?action=create">
                        <section className="h-100 h-custom" style={{backgroundColor: "#d2c9ff;"}}>
                            <div className="container-fluid py-5 h-100">
                                <div className="row d-flex justify-content-center align-items-center h-100">
                                    <div className="col-12" style={{maxWidth: "700px",}}>
                                        <div style={{display: "inline", textAlign: "center"}}
                                             className="">
                                            <a href="/home"><i style={{width: "50px", height: "20px"}}
                                                               className="fa-solid fa-arrow-left"></i></a>
                                            <h5
                                                className="fw-bold mb-0 text-black">Giỏ hàng của
                                                bạn</h5>
                                            {/*<h6 className="mb-0 text-muted"></h6>*/}
                                        </div>
                                        <hr className="my-4"/>
                                        <div className="card card-registration card-registration-2"
                                             style={{borderRadius: "15px;"}}>
                                            <div className="card-body p-0">
                                                <div className="row g-0">
                                                    <div className="col-lg-12">
                                                        <div className="p-5">
                                                            {
                                                                carts.length > 0 ? (
                                                                    <div
                                                                        className="row mb-4 d-flex justify-content-between align-items-center">
                                                                        <div className={"row"}>
                                                                            <div className={"col-11"}></div>
                                                                            <div className={"col-1"}>
                                                                                <a
                                                                                    role="button"
                                                                                    className=" mx-5 p-0 text-primary"
                                                                                    style={{
                                                                                        backgroundColor: "white",
                                                                                        color: "red",
                                                                                        cursor: "pointer",
                                                                                        // fontSize: "14px",
                                                                                    }}
                                                                                    onClick={handleDelete}
                                                                                >
                                                                                    <i style={{
                                                                                        backgroundColor: "white",
                                                                                        color: "red",
                                                                                        cursor: "pointer",
                                                                                        fontSize: "30px",
                                                                                    }} className="fa-solid fa-trash"></i>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                        {carts.map((cart, index) => (
                                                                            <div key={index} className="row"
                                                                                 style={{marginBottom: "10px"}}>
                                                                                <div className="col-3 ">
                                                                        <span>
                                                                          <input
                                                                              type="checkbox"
                                                                              name="multiSelect"
                                                                              style={{marginRight: "20px"}}
                                                                              onChange={() => handleMultiSelect(cart)}
                                                                          />
                                                                        </span>
                                                                                    <img
                                                                                        src={cart?.products?.imageUrl}
                                                                                        // src={cart?.products?.image_Url.split(',')[0]}
                                                                                        className="img-fluid rounded-3"
                                                                                        style={{
                                                                                            width: "100px",
                                                                                            height: "100px"
                                                                                        }}
                                                                                        alt="Product Image"
                                                                                    />
                                                                                </div>
                                                                                <div className="col-6 "
                                                                                     style={{textAlign: "center"}}>
                                                                                    <h6 className="text-muted">{cart?.products?.modelName}</h6>
                                                                                    <div style={{
                                                                                        fontSize: " 18px",
                                                                                        fontWeight: "700",
                                                                                        color: "#cb1c22",
                                                                                        lineHeight: "normal"
                                                                                    }}>
                                                                                        <h6 className="price">{formatPrice(cart?.products?.price)} đ</h6>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-3 d-flex">
                                                                                    <a style={{
                                                                                        backgroundColor: "#f3f3f3",
                                                                                        borderEadius: "5px",
                                                                                        textAlign: "center",
                                                                                        cursor: "pointer",
                                                                                        height: "30px",
                                                                                        width: "30px"
                                                                                    }}
                                                                                       role="button"
                                                                                       onClick={() =>
                                                                                           handleMinus(
                                                                                               cart.products.productId,
                                                                                               cart.products.modelName,
                                                                                               cart
                                                                                           )
                                                                                       }
                                                                                        // onClick={(e) => handleQuantityChange(cart, "minus")}
                                                                                    >
                                                                                        <i className="fas fa-minus"></i>
                                                                                    </a>
                                                                                    <input
                                                                                        style={{
                                                                                            textAlign: "right",
                                                                                            width: "49px",
                                                                                            height: "30px"
                                                                                        }}
                                                                                        id={`input-quantity${cart.products.productId}`}
                                                                                        name="quantity"
                                                                                        value={cart?.quantity}
                                                                                        type="number"
                                                                                        readOnly
                                                                                        className="form-control form-control-sm"
                                                                                    />
                                                                                    <a style={{
                                                                                        backgroundColor: "#f3f3f3",
                                                                                        borderEadius: "4px",
                                                                                        cursor: "pointer",
                                                                                        textAlign: "center",
                                                                                        height: "30px",
                                                                                        width: "30px"
                                                                                    }}
                                                                                       role="button"
                                                                                       onClick={() =>
                                                                                           handlePlus(
                                                                                               cart,
                                                                                               cart.products.productId
                                                                                           )
                                                                                       }
                                                                                        // onClick={(e) => handleQuantityChange(cart, "plus")}
                                                                                    >
                                                                                        <i className="fas fa-plus"></i>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        ))}
                                                                    </div>
                                                                ) : (
                                                                    <p style={{color: "red"}}>Không có sản phẩm nào
                                                                        trong giỏ hàng!</p>
                                                                    // swal.fire(
                                                                    //     "Không có sản phẩm nào trong giỏ hàng!",
                                                                    //     "",
                                                                    //     "warning"
                                                                    // )
                                                                )
                                                            }
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
                    <div className={"row"}>
                        <div className={"col-2"}></div>
                        <div className={"col-8"}>
                            <Formik
                                enableReinitialize={true}
                                initialValues={{
                                    ...customer,
                                    // customerId: customer?.customerId,
                                    // name: customer?.name,
                                    // phoneNumber: customer?.phoneNumber,
                                    // address: customer?.address,
                                    // email: customer?.email,
                                    // flagDeleted: customer?.flagDeleted
                                }}
                                validationSchema={Yup.object({
                                    name: Yup.string().required('Vui lòng nhập họ và tên'),
                                    phoneNumber: Yup.string().required('Vui lòng nhập số điện thoại'),
                                    address: Yup.string().required('Vui lòng nhập địa chỉ'),
                                    email: Yup.string().email('Email không hợp lệ').required('Vui lòng nhập email'),
                                })}
                                onSubmit={(values) => {
                                    // addAccounts(values, setErrors);
                                    addCustomer(values);
                                }}
                            >
                                <Form style={formStyles}>
                                    <h5>Thông tin người đặt</h5>
                                    <div className={"row"}>
                                        <Field
                                            style={inputStyles}
                                            type="text"
                                            id="fullName"
                                            name="customerId"
                                            hidden
                                            value={customer?.customerId}
                                        />
                                        <div className={"col-6"} style={formGroupStyles}>
                                            <Field
                                                style={inputStyles}
                                                type="text"
                                                id="fullName"
                                                name="name"
                                                placeholder={"Nhập họ và tên"}
                                                required
                                            />
                                            <ErrorMessage className="text-danger" name="name" component="small"/>
                                        </div>
                                        <div className={"col-6"} style={formGroupStyles}>
                                            <Field
                                                style={inputStyles}
                                                type="text"
                                                id="phoneNumber"
                                                name="phoneNumber"
                                                placeholder={"Nhập số điện thoại"}
                                                required
                                            />
                                            <ErrorMessage className="text-danger" name="phoneNumber" component="small"/>
                                        </div>
                                    </div>
                                    <div className={"row"}>
                                        <div className={"col-6"} style={formGroupStyles}>
                                            <Field
                                                style={inputStyles}
                                                type="text"
                                                id="address"
                                                name="address"
                                                placeholder={"Nhập địa chỉ"}
                                                required
                                            />
                                            <ErrorMessage className="text-danger" name="address" component="small"/>
                                        </div>
                                        <div className={"col-6"} style={formGroupStyles}>
                                            <Field
                                                style={inputStyles}
                                                type="email"
                                                id="email"
                                                name="email"
                                                placeholder={"Nhập email"}
                                                required
                                            />
                                            <ErrorMessage className="text-danger" name="email" component="small"/>
                                        </div>
                                    </div>
                                    <div style={{textAlign: "center"}}>
                                        <button style={buttonStyles} type="submit">Xác nhận</button>
                                    </div>

                                </Form>
                            </Formik>
                        </div>
                        <div className={"col-2"}></div>
                    </div>
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
                                                    className="css-1oqd6bl text-text-secondary">Tổng
                                                    tiền:
                                                    {/*{formatPrice(totalPrice)}đ*/}
                                                </p>
                                                    {/*<p*/}
                                                    {/*className="css-1xs2qu0 text-text-primary"></p>*/}
                                                </div>
                                                <div className="flex justify-between "><p
                                                    className="css-1oqd6bl text-text-secondary">Giảm giá khuyến
                                                    mãi 0đ</p>
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
                                                        <span style={{display: "inline"}}>
                                                            {/*<p*/}
                                                            {/*className=" css-1jmqkfq text-text-secondary">Cần thanh toán </p>*/}
                                                            <b
                                                            ><h4
                                                                style={{
                                                                    textAlign: "center",
                                                                    color: "#cb1c22", fontSizeize: "28px;",
                                                                    fontWeighteight: "500;",
                                                                    lineHeight: "36px;"
                                                                }}>{formatPrice(totalPrice)}₫</h4></b>
                                                            {/*    <p*/}
                                                            {/*className="css-8uyn92 text-red-5 flex items-center"></p>*/}
                                                        </span>
                                                </div>
                                                <div className=" w-100 d-flex justify-content-center">
                                                    <button
                                                        className="btn ant-btn css-10ed4xt ant-btn-primary max-w-[147px] !rounded-full md:mt-1 md:w-full md:max-w-none estore-btn estore-btn-bg  css-1krd2ey"
                                                        style={{
                                                            // marginBottom: "20px",
                                                            // color: "black",
                                                            // backgroundColor: "#119cd4",
                                                            // border: "1px #119cd4 solid ",
                                                            // display: checkout ? "block" : "none",
                                                        }}
                                                        onClick={handleVNPAY}
                                                    >
                                                        THANH TOÁN VỚI VNPAY
                                                    </button>
                                                </div>
                                                {/*<button type="button"*/}
                                                {/*        className="btn ant-btn css-10ed4xt ant-btn-primary max-w-[147px] !rounded-full md:mt-1 md:w-full md:max-w-none estore-btn estore-btn-bg  css-1krd2ey">*/}
                                                {/*    <span>Hoàn tất đặt hàng</span></button>*/}
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
            </div>
            <Footer></Footer>
        </>
    )
}