import './App.css';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Product from "./components/product/Product";
import DetailProduct from "./components/product/DetailProduct";
import CartDetail from "./components/cart_detail/CartDetail";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import ReturnVNPay from "./components/cart_detail/ReturnVNPay";
import History from "./components/history/History";
import UserInformation from "./components/account/UserInformation";


function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/history" element={<History/>}></Route>
                    <Route path="" element={<Login/>}></Route>
                    <Route path="/success" element={<ReturnVNPay/>}></Route>
                    <Route path="/home" element={<Home/>}></Route>
                    <Route path="/cart/:id" element={<CartDetail/>}></Route>
                    <Route path="/product/:id" element={<DetailProduct/>}/>
                    <Route path="/product" element={<Product/>}></Route>
                    <Route path="/cart" element={<CartDetail/>}></Route>
                    <Route path="/info" element={<UserInformation/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;

