import React from "react";
import ctgImg from "./ctaImg.png";

const CallToAction = () => {
  return (
    <section className="ctaBg">
      <div className="ctgTextDiv">
        <h1 className="title">Little Lemon</h1>
        <h2 className="subTitle">Chicago</h2>
        <p style={{ fontSize: 18 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exerc
        </p>
      </div>
      <img src={ctgImg} alt={"Pizza banner"} width={512} height={512} />
    </section>
  );
};

export default CallToAction;
