import React from "react";

const Review = ({ review }) => {
  return (
    <article className="reviewArticle" key={review.name}>
      <h4>{review.name}</h4>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          src={review.photo}
          alt={`Little Lemon restaurant review by ${review.name}`}
          width={200}
          height={200}
        />
        <p>{review.score}</p>
      </div>
      <p>{review.text}</p>
    </article>
  );
};

export default Review;
