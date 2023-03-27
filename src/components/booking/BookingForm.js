import { useFormik } from "formik";
import React from "react";
import ReactDatePicker from "react-datepicker";
import { number, z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import "react-datepicker/dist/react-datepicker.css";

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
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

  return (
    <form
      className="w-[90vw] mx-auto rounded-md  h-auto bg-gradient-to-br from-yellow-300 to-yellow-400 flex flex-col items-center justify-center align-middle space-y-4 p-6  "
      id={"booking-form"}
      onSubmit={(e) => {
        e.preventDefault();
        isValid
          ? handleSubmit(e)
          : console.log("errors", errors, "values", values);
      }}
      style={{ display: `grid` }}
    >
      <label
        className="text-2xl font-['Merienda'] text-yellow-800"
        htmlFor="date"
      >
        Choose date
      </label>
      <ReactDatePicker
        required
        className="w-[20vw] rounded-md bg-yellow-800 active:bg-yellow-700 focus:bg-yellow-700  text-white transition-all duration-300 p-2 "
        id={"date"}
        selected={values.date}
        onChange={(date) => {
          dispatch({ type: "change", payload: date });
          return setFieldValue("date", date);
        }}
      />
      <div className={"text-lg text-red-700"} id="date-error">
        {errors.date ? errors.date : null}
      </div>
      <label
        className="text-2xl font-['Merienda'] text-yellow-800"
        htmlFor="time"
      >
        Choose time
      </label>
      <select
        className="w-[20vw] rounded-md bg-yellow-800 active:bg-yellow-700 focus:bg-yellow-700  text-white transition-all duration-300 p-2 "
        required
        onChange={handleChange}
        value={values.time}
        id="time"
      >
        {availableTimes.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>
      <div className={"text-lg text-red-700"} id={"time-error"}>
        {errors.time ? errors.time : null}
      </div>
      <label
        className="text-2xl font-['Merienda'] text-yellow-800"
        htmlFor="guests"
      >
        Number of guests
      </label>
      <input
        onChange={(e) => setFieldValue("guests", parseInt(e.target.value))}
        className="w-[20vw] rounded-md bg-yellow-800 active:bg-yellow-700 focus:bg-yellow-700  text-white transition-all duration-300 p-2 "
        value={values.guests}
        type={"number"}
        min="0"
        max="10"
        id="guests"
        required
      />
      <div className={"text-lg text-red-700"} id={"guests-error"}>
        {errors.guests ? errors.guests : null}
      </div>
      <label
        className="text-2xl font-['Merienda'] text-yellow-800"
        htmlFor="occasion"
      >
        Occasion
      </label>
      <select
        required
        className="w-[20vw] rounded-md bg-yellow-800 active:bg-yellow-700 focus:bg-yellow-700 text-white transition-all duration-300 p-2 "
        onChange={handleChange}
        value={values.occasion}
        id="occasion"
      >
        <div className={"text-lg text-red-700"} id={"occasion-error"}>
          {errors.guests ? errors.guests : null}
        </div>
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
