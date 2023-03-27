import React, { useReducer } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import BookingsPage from "../BookingsPage";
import HomePage from "../HomePage";
import About from "../About";
import Menu from "../Menu";
import Order from "../Order";
import Login from "../Login";
import { availableTime } from "../../constants/booking/availableTimes";
import Confirmedbooking from "../booking/ConfirmedBooking";
import ConfirmedBooking from "../booking/ConfirmedBooking";

const seededRandom = function (seed) {
  var m = 2 ** 35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};

export const fetchAPI = function (date) {
  let result = [];
  let random = seededRandom(date.getDate());

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ":00");
    }
    if (random() < 0.5) {
      result.push(i + ":30");
    }
  }
  return result;
};
const submitAPI = function (formData) {
  return true;
};

export function initializeTimes() {
  const date = new Date();
  return fetchAPI(date);
}
export function updateTimes(state, action) {
  switch (action.type) {
    case "change":
      return fetchAPI(action.payload);
    default:
      throw new Error();
  }
}
const Main = () => {
  let navigate = useNavigate();

  const submitForm = (data) => {
    const issubmited = submitAPI(data);
    if (!issubmited) return;
    navigate("/booking-confirmed");
  };
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  return (
    <main>
      <Routes>
         <Route path="/" element={<HomePage />}></Route>
        <Route
          path="/booking"
          element={
            <BookingsPage
              availableTimes={availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        ></Route>
        <Route path="/booking-confirmed" element={<ConfirmedBooking />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/order" element={<Order />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </main>
  );
};

export default Main;
