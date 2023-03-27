import React from "react";
import BookingForm from "./booking/BookingForm";

const BookingPage = ({ availableTimes, dispatch, submitForm }) => {
  return (
    <>
      <h1 className="text-8xl mx-auto w-[50vw]">Book Now</h1>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </>
  );
};

export default BookingPage;
