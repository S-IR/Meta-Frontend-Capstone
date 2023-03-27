import React from "react";
import { Route, Routes } from "react-router-dom";
import BookingsPage from "../BookingsPage";
import HomePage from "../HomePage";
import About from "../About";
import Menu from "../Menu";
import Order from "../Order";
import Login from "../Login";

const Main = () => {
  return (
    <Routes>
       <Route path="/" element={<HomePage />}></Route>
      <Route path="/booking" element={<BookingsPage />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/menu" element={<Menu />}></Route>
      <Route path="/menu" element={<Menu />}></Route>
      <Route path="/order" element={<Order />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
};

export default Main;
