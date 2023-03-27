import React from "react";
import { customerReviews } from "../../constants/general/homepage/customerReviews";
import Review from "./Review";
const CustomerSays = () => {
  return (
    <section className="customerSaysBg">
      <h2>Testimonials</h2>
      {customerReviews.map((review) => (
        <Review review={review} />
      ))}
    </section>
  );
};

export default CustomerSays;
