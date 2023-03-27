import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SpecialArticle = ({ option }) => {
  return (
    <article id={option.title}>
      <img src={option.src} width={256} height={256} alt={option.description} />
      <div style={{ display: "flex", marginLeft: 20 }}>
        <h1>{option.title}</h1>
        <p>{option.price}</p>
      </div>
      <p style={{ marginLeft: 20 }}>{option.description}</p>
      <div style={{ display: "flex", marginLeft: 20 }}>
        <p>Order a Delivery</p>
        <FontAwesomeIcon icon="fa-solid fa-pizza" width={16} height={16} />
      </div>
    </article>
  );
};

export default SpecialArticle;
