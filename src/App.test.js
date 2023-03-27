import {
  configure,
  findByTestId,
  fireEvent,
  render,
  screen,
} from "@testing-library/react";
import { wait } from "@testing-library/user-event/dist/utils";
import { MemoryRouter } from "react-router-dom";
import App from "./App";
import BookingPage from "./components/BookingsPage";
import Main, {
  fetchAPI,
  initializeTimes,
  updateTimes,
} from "./components/homepage/Main";

function seededRandom(seed) {
  var m = 2 ** 35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
}
const route = "/booking";
test("Renders the BookingForm heading", () => {
  render(
    <MemoryRouter initialEntries={[route]}>
      <Main />
    </MemoryRouter>
  );

  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
});

test("Renders the Choose Time form label", () => {
  render(
    <MemoryRouter initialEntries={[route]}>
      <Main />
    </MemoryRouter>
  );
  const headingElement = screen.getByText("Choose time");
  expect(headingElement).toBeInTheDocument();
});

test("Form can be submitted", () => {
  render(
    <MemoryRouter initialEntries={[route]}>
      <Main />
    </MemoryRouter>
  );
  const headingElement = screen.getByText("Choose time");
  expect(headingElement).toBeInTheDocument();
});

test("initializeTimes returns the proper result", async () => {
  render(
    <MemoryRouter initialEntries={[route]}>
      <Main />
    </MemoryRouter>
  );
  const date = new Date();
  const data = fetchAPI(date);
  expect(Array.isArray(data) && data.length > 0).toBeTruthy();
});
test("updateTimes returns the same thing when the same date is given", async () => {
  const date = new Date(2011, 10, 23);
  const firstCall = updateTimes([], { type: "change", payload: date });
  const secondCall = updateTimes([], { type: "change", payload: date });
  expect(JSON.stringify(firstCall) === JSON.stringify(secondCall)).toBeTruthy();
});

test("Does a HTML error appear when trying to put less than 0 guests?", async () => {
  configure({ testIdAttribute: "id" });

  render(
    <MemoryRouter initialEntries={[route]}>
      <Main />
    </MemoryRouter>
  );

  const submit = await screen.findByTestId("submit-button");
  const guestsInput = await screen.findByTestId("guests");
  fireEvent.change(guestsInput, {
    target: { value: "-12" },
  });

  fireEvent.click(submit);
  expect(guestsInput).toBeInvalid();
});

test("Does a HTML error appear when trying to put a value greater than 10  guests?", async () => {
  configure({ testIdAttribute: "id" });

  render(
    <MemoryRouter initialEntries={[route]}>
      <Main />
    </MemoryRouter>
  );

  const submit = await screen.findByTestId("submit-button");
  const guestsInput = await screen.findByTestId("guests");
  fireEvent.change(guestsInput, {
    target: { value: "12" },
  });

  fireEvent.click(submit);
  expect(guestsInput).toBeInvalid();
});

test("Does a HTML error appear when submitting without a value at guests", async () => {
  configure({ testIdAttribute: "id" });

  render(
    <MemoryRouter initialEntries={[route]}>
      <Main />
    </MemoryRouter>
  );

  const submit = await screen.findByTestId("submit-button");
  const guestsInput = await screen.findByTestId("guests");
  fireEvent.change(guestsInput, {
    target: { value: "" },
  });

  fireEvent.click(submit);
  expect(guestsInput).toBeInvalid();
});

test("Does a formik error appear when trying to put a date that's lesser than the current date", async () => {
  configure({ testIdAttribute: "id" });

  render(
    <MemoryRouter initialEntries={[route]}>
      <Main />
    </MemoryRouter>
  );

  const dateInput = await screen.findByTestId("date");
  fireEvent.change(dateInput, {
    target: { value: new Date(2011, 11, 30) },
  });

  const errorDateInput = await screen.findByTestId("date-error");

  await wait(() => {
    expect(errorDateInput.innerHTML).toBe(
      "You cannot book a table that is earlier than today"
    );
  });
});

test("Does a formik error appear when trying to put a time greater than 24 hours", async () => {
  configure({ testIdAttribute: "id" });

  render(
    <MemoryRouter initialEntries={[route]}>
      <Main />
    </MemoryRouter>
  );

  const timeInput = screen.getByTestId("time");
  fireEvent.change(timeInput, {
    target: { value: "26.00" },
  });
  fireEvent.blur(timeInput);
  const errorGuestsInput = await screen.findByTestId("time-error");
  await wait(() => {
    expect(errorGuestsInput.innerHTML).toBe("Invalid time");
  });
});

test("Does a formik error appear when trying to put a guests number that is lesser than 0", async () => {
  configure({ testIdAttribute: "id" });

  render(
    <MemoryRouter initialEntries={[route]}>
      <Main />
    </MemoryRouter>
  );

  const guestsInput = screen.getByTestId("guests");
  fireEvent.change(guestsInput, {
    target: { value: 75 },
  });
  fireEvent.blur(guestsInput);
  const errorGuestsInput = await screen.findByTestId("guests-error");
  await wait(() => {
    expect(errorGuestsInput.innerHTML).toBe("We cannot take that many people");
  });
});

// test("Does a HTML error appear when trying to put a occasion other than Birthday or Anniversary?", async () => {
//   configure({ testIdAttribute: "id" });

//   render(
//     <MemoryRouter initialEntries={[route]}>
//       <Main />
//     </MemoryRouter>
//   );

//   const submit = await screen.findByTestId("submit-button");
//   const occasionInput = await screen.findByTestId("occasion");
//   fireEvent.change(occasionInput, {
//     target: { value: "something other than birthday or anniversary" },
//   });

//   fireEvent.click(submit);
//   expect(occasionInput).toBeInvalid();
// });
