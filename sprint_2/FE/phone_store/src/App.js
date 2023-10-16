import logo from './logo.svg';
import './App.css';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Customer from "./components/customer/Customer";
import Product from "./components/product/Product";
import DetailProduct from "./components/product/DetailProduct";
import CartDetail from "./components/cart_detail/CartDetail";
import Loginss from "./components/login/Loginss";
import Home from "./components/home/Home";
import Login from "./components/login/Login";


function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="" element={<Loginss/>}></Route>
                    <Route path="/login" element={<Login/>}></Route>
                    <Route path="/home" element={<Home/>}></Route>
                    <Route path="/cart" element={<CartDetail/>}></Route>
                    <Route path="/product/:id" element={<DetailProduct />} />
                    <Route path="/customer" element={<Customer/>}></Route>
                    <Route path="/product" element={<Product/>}></Route>
                    <Route path="/cart" element={<CartDetail/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
