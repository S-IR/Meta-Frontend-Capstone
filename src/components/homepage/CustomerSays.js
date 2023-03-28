import React from "react";
import { customerReviews } from "../../constants/general/homepage/customerReviews";
import Review from "./Review";
const CustomerSays = () => {
  return (
    <section className="customerSaysBg py-10  ">
      <h2 className="text-4xl md:text-8xl">Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {customerReviews.map((review) => (
          <Review review={review} />
        ))}
      </div>
    </section>
  );
};

export default CustomerSays;
