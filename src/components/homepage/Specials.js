import React from "react";
import { specialsOptions } from "../../constants/general/homepage/specials";
import SpecialArticle from "./SpecialArticle";

const Specials = () => {
  return (
    <section className="specialBg">
      <div style={{ display: "flex", marginBottom: 25 }}>
        <h2 className={"text-8xl "}>Specials</h2>
        <button className="specials-button">Online Menu</button>
      </div>
      <div className="specialsGrid">
        {specialsOptions.map((option) => (
          <SpecialArticle option={option} />
        ))}
      </div>
    </section>
  );
};

export default Specials;
