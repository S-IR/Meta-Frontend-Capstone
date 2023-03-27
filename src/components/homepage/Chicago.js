import React from "react";
import chicagoImg from "../homepage/chicagoImg.png";

const Chicago = () => {
  return (
    <section className="chicagoBg">
      <div className="chicagoText">
        <h1 className="title">Little Lemon</h1>
        <h1 className="subText">Little Chicago</h1>
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exerc
        </h3>
      </div>
      <div>
        <img src={chicagoImg} width={400} height={400} />
      </div>
    </section>
  );
};

export default Chicago;
