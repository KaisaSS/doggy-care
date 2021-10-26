import React from "react";
import { Link } from "react-router-dom";

const BookNow = () => {
  return (
    <div className="container">
      <h2>Interested?</h2>
      <p>
        Click <Link to="/booking">here</Link> to book now!
      </p>
    </div>
  );
};

export default BookNow;
