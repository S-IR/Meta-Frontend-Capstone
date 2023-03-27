import React from "react";

const Review = ({ review }) => {
  return (
    <article style={{ display: "flex", flexDirection: "column" }}>
      <h4>{review.name}</h4>
      <div style={{ display: "flex" }}>
        <img
          src={review.photo}
          alt={`Little Lemon restaurant review by ${review.name}`}
        />
        <p>{review.score}</p>
      </div>
      <p>{review.text}</p>
    </article>
  );
};

export default Review;
