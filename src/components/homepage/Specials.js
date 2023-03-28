import React from "react";
import { specialsOptions } from "../../constants/general/homepage/specials";
import SpecialArticle from "./SpecialArticle";

const Specials = () => {
  return (
    <section className="specialBg h-auto pb-4 md:h-screen">
      <div style={{ display: "flex", marginBottom: 25 }}>
        <h2 className={" text-4xl md:text-8xl "}>Specials</h2>
        <button className="specials-button">Online Menu</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-32 ">
        {specialsOptions.map((option) => (
          <SpecialArticle option={option} />
        ))}
      </div>
    </section>
  );
};

export default Specials;
