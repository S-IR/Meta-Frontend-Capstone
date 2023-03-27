import { Form, Formik, useFormik } from "formik";
import React, { useEffect, useState } from "react";
import ReactDatePicker from "react-datepicker";
import { number, z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import "react-datepicker/dist/react-datepicker.css";

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(null);
  const [guests, setGuests] = useState(null);
  const [occasion, setOccasion] = useState(null);

  const formSchema = z.object({
    date: z
      .date()
      .min(new Date(), "You cannot book a table that is earlier than today"),
    time: z
      .string()
      .refine((v) => parseFloat(v) < 24.0 && parseFloat(v) > 0, "Invalid time"),
    guests: z
      .number("Must be a number between 0 and 10")
      .gt(0, "Cannot have less than 1 guest")
      .lt(10, "We cannot take that many people"),
    occasion: z.enum(["Birthday", "Anniversary"], "This option does not exist"),
  });

  const {
    errors,
    touched,
    handleSubmit,
    values,
    handleChange,
    setFieldValue,
    isValid,
  } = useFormik({
    initialValues: {
      date: new Date(),
      time: availableTimes[0],
      guests: 0,
      occasion: "Birthday",
    },
    validationSchema: toFormikValidationSchema(formSchema),
    onSubmit: (values) => {
      console.log("values", values);
      return submitForm(values);
    },
  });
  useEffect(() => {
    console.log("guests", guests);
  }, [values.guests]);
  return (
    <form
      id={"booking-form"}
      onSubmit={(e) => {
        console.log("values", values);
        e.preventDefault();
        isValid
          ? handleSubmit(e)
          : console.log("errors", errors, "values", values);
      }}
      style={{ display: `grid`, maxWidth: 200, gap: 20 }}
    >
      <label htmlFor="date">Choose date</label>
      <ReactDatePicker
        required
        id={"date"}
        selected={values.date}
        onChange={(date) => {
          dispatch({ type: "change", payload: date });
          return setFieldValue("date", date);
        }}
      />
      <div id="date-error">{errors.date ? errors.date : null}</div>
      <label htmlFor="time">Choose time</label>
      <select required onChange={handleChange} value={values.time} id="time">
        {availableTimes.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>
      <div id={"time-error"}>{errors.time ? errors.time : null}</div>
      <label htmlFor="guests">Number of guests</label>
      <input
        onChange={(e) => {
          console.log(e.target.value, `e`);
          setFieldValue("guests", parseInt(e.target.value));
        }}
        value={values.guests}
        type={"number"}
        min="0"
        max="10"
        id="guests"
        required
      />
      <div id={"guests-error"}>{errors.guests ? errors.guests : null}</div>
      <label htmlFor="occasion">Occasion</label>
      <select
        required
        onChange={handleChange}
        value={values.occasion}
        id="occasion"
      >
        <div id={"occasion-error"}>{errors.guests ? errors.guests : null}</div>
        <option value={"Birthday"}>Birthday</option>
        <option value={"Anniversary"}>Anniversary</option>
      </select>
      <button required id={"submit-button"} type="submit">
        Submit
      </button>
    </form>
  );
};

export default BookingForm;
