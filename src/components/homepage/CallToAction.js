import React from "react";
import { useNavigate } from "react-router-dom";
import ctgImg from "./ctaImg.jpg";

const CallToAction = () => {
  const navigate = useNavigate();
  return (
    <section className="ctaBg mt-36 md-mt-0 ">
      <div className="ctgTextDiv">
        <h1 className="title">Little Lemon</h1>
        <h2 className="subTitle">Chicago</h2>
        <p
          className={"text-white font-bold font-serif font-sm lg:font-medium "}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exerc
        </p>
        <button onClick={() => navigate("booking")} className="ctaButton">
          Reserve a Table
        </button>
      </div>
      <img
        className="hidden md:inline-block"
        src={ctgImg}
        alt={"Pizza banner"}
        width={300}
        height={600}
      />
    </section>
  );
};

export default CallToAction;
