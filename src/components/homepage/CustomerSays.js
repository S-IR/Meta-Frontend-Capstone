import React from "react";
import { customerReviews } from "../../constants/general/homepage/customerReviews";
import Review from "./Review";
const CustomerSays = () => {
  return (
    <section className="customerSaysBg">
      <h2>Testimonials</h2>
      <div className="reviewWrapper">
        {customerReviews.map((review) => (
          <Review review={review} />
        ))}
      </div>
    </section>
  );
};

export default CustomerSays;
