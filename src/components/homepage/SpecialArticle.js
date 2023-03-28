import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SpecialArticle = ({ option }) => {
  return (
    <article id={option.title} className={"bg-gray-700/40 rounded-md "}>
      <img
        src={option.src}
        className={"w-full h-[256px] object-cover rounded-md "}
        alt={option.description}
      />
      <div style={{ display: "flex", marginLeft: 20, marginTop: 20 }}>
        <h1>{option.title}</h1>
        <p className="ml-auto mr-10 text-red-600 text-lg ">
          {option.price}.00 $
        </p>
      </div>
      <p style={{ marginLeft: 20, marginTop: 20 }}>{option.description}</p>
      <div style={{ display: "flex", marginLeft: 20 }}>
        <p>Order a Delivery</p>
        <FontAwesomeIcon icon="fa-solid fa-pizza" width={16} height={16} />
      </div>
    </article>
  );
};

export default SpecialArticle;
