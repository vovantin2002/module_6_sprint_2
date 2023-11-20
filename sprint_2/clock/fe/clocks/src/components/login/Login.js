
import {useEffect, useState} from "react";
import axios from "axios";

export default function Login() {
    const [carts, setCarts] = useState([]);
    const getCarts = async () => {
        const result = await axios.get("http://localhost:8080/api/cart");
        setCarts(result.data);
    };
    useEffect(() => {
        getCarts();
    }, [])
    // useEffect(() => {
    //     console.log(carts);
    // }, []);

    return(
        <>
            {carts.map((a,index) => {
                return(<div key={index} className="row" style={{marginBottom: "10px"}}>
                    <div className="col-3 ">
                        <img
                            src={a?.products?.imageUrl}
                            className="img-fluid rounded-3"
                            style={{width: "100px", height: "100px"}}
                            alt="Product Image"
                        />
                    </div>
                    <div className="col-6 " style={{textAlign: "center"}}>
                        <h6 className="text-muted">{a?.products?.productId}</h6>
                        <div style={{
                            fontSize: " 18px",
                            fontWeight: "700",
                            color: "#cb1c22",
                            lineHeight: "normal"
                        }}>
                            <h6 className="price">{a?.products?.price} đ</h6>
                        </div>
                    </div>
                </div>);
            })}</>
    )
}
