import logo from './logo.svg';
import './App.css';
import Home from "./components/home/Home";
import { Routes, Route } from "react-router-dom";
import Customer from "./components/customer/Customer";
import Product from "./components/product/Product";
import DetailProduct from "./components/product/DetailProduct";
import CartDetail from "./components/cart_detail/CartDetail";
function App() {
  return (
      <>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/customer" element={<Customer />}></Route>
          <Route path="/product" element={<Product />}></Route>
          <Route path="/product/:id" element={<DetailProduct />}></Route>
          <Route path="/cart" element={<CartDetail />}></Route>
        </Routes>
      </>
  );
}

export default App;
