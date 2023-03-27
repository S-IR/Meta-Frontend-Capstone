import React from "react";
import marioAndAdrian1 from "../homepage/mario-and-adrian1.jpg";
import marioAndAdrian2 from "../homepage/mario-and-adrian2.jpg";

const Chicago = () => {
  return (
    <section className="chicagoBg">
      <div className="chicagoText">
        <h1 className="title">Little Lemon</h1>
        <h1 className="subText" style={{ maxWidth: "30vw" }}>
          Little Chicago
        </h1>
        <h3 style={{ maxWidth: "30vw" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exerc
        </h3>
      </div>
      <div style={{ position: "relative", marginTop: "15vh" }}>
        <img
          style={{ objectFit: "scale-down" }}
          src={marioAndAdrian1}
          width={400}
          height={400}
          alt={"another banner for Little Lemon"}
        />
        <img
          style={{
            objectFit: "scale-down",
            position: "absolute",
            top: -135,
            right: -135,
          }}
          src={marioAndAdrian2}
          width={400}
          height={400}
          alt={"another banner for Little Lemon"}
        />
      </div>
    </section>
  );
};

export default Chicago;
