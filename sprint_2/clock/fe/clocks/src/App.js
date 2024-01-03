// import logo from './logo.svg';
// import './App.css';
// import {Routes, Route, BrowserRouter} from "react-router-dom";
// import Customer from "./components/customer/Customer";
// import Product from "./components/product/Product";
// import DetailProduct from "./components/product/DetailProduct";
// import CartDetail from "./components/cart_detail/CartDetail";
// import Loginss from "./components/login/Loginss";
// import Home from "./components/home/Home";
// import Login from "./components/login/Login";
// import ReturnVNPay from "./components/cart_detail/ReturnVNPay";
// import History from "./components/history/History";
// import UserInformation from "./components/account/UserInformation";
//
//
// function App() {
//   return (
//       <>
//         <BrowserRouter>
//           <Routes>
//             <Route path="/history" element={<History/>}></Route>
//             <Route path="" element={<Loginss/>}></Route>
//             <Route path="/success" element={<ReturnVNPay/>}></Route>
//             <Route path="/home" element={<Home/>}></Route>
//             <Route path="/cart/:id" element={<CartDetail/>}></Route>
//             <Route path="/product/:id" element={<DetailProduct />} />
//             {/*<Route path="/customer" element={<Customer/>}></Route>*/}
//             <Route path="/product" element={<Product/>}></Route>
//             <Route path="/cart" element={<CartDetail/>}></Route>
//             <Route path="/info" element={<UserInformation/>}></Route>
//           </Routes>
//         </BrowserRouter>
//       </>
//   );
// }
//
// export default App;
// App.js

import React, { useState, useEffect } from 'react';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('/api/books')
        .then((response) => response.json())
        .then((data) => setBooks(data))
        .catch((error) => console.error(error));
  }, []);

  return (
      <div>
        <h1>Books</h1>
        <ul>
          {books.map((book) => (
              <li key={book.id}>
                {book.title} - {book.author}
              </li>
          ))}
        </ul>
      </div>
  );
}

export default App;