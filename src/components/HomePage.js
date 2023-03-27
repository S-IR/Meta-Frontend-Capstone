import React from "react";

import "../styles/Homepage/general.css";
import {
  Chicago,
  Specials,
  CustomerSays,
  CallToAction,
} from "./homepage/index";

const HomePage = () => {
  return (
    <>
      <CallToAction />
      <Specials />
      <CustomerSays />
      <Chicago />
    </>
  );
};

export default HomePage;
