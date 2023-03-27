import React from "react";
import { useNavigate } from "react-router-dom";
import ctgImg from "./ctaImg.jpg";

const CallToAction = () => {
  const navigate = useNavigate();
  return (
    <section className="ctaBg">
      <div className="ctgTextDiv">
        <h1 className="title">Little Lemon</h1>
        <h2 className="subTitle">Chicago</h2>
        <p
          style={{ fontSize: 18 }}
          className={"text-white font-bold font-serif "}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exerc
        </p>
        <button onClick={() => navigate("booking")} className="ctaButton">
          Reserve a Table
        </button>
      </div>
      <img src={ctgImg} alt={"Pizza banner"} width={300} height={600} />
    </section>
  );
};

export default CallToAction;
