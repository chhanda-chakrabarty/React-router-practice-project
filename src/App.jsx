import React from "react";
import { BrowserRouter, Routes, Route, Router } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import Contact from "./components/Contact";
import Product from "./components/Product";
import About from "./components/About";
import CommonLayout from "./components/CommonLayout";
import Error from "./components/Error";
import Review from "./components/Review";
import UserInfo from "./components/UserInfo";

// const chhandaTaka = () => {
//   return (
//     <h1 className="bg-red-600 text-center text-white p-3 text-2xl font-bold">
//       You are not welcome
//     </h1>
//   );
// };
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CommonLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="/navbar" element={<Navbar />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/product" element={<Product />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/review" element={<Review />}></Route>
          <Route path="/users/:name" element={<UserInfo />}></Route>
          <Route path="/footer" element={<Footer />}></Route>
        </Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
