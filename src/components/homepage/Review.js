import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Review = ({ review }) => {
  return (
    <article
      className="w-full h-auto md:w-auto bg-gray-700/40 rounded-md"
      key={review.name}
    >
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
        <div className="flex items-center justify-center align-middle">
          <p className="text-2xl text-yellow-500 mr-6">{review.score}</p>
        </div>
      </div>
      <p>{review.text}</p>
    </article>
  );
};

export default Review;
