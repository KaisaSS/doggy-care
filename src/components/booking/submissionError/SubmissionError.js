import React from "react";
import { Link } from "react-router-dom";

const SubmissionError = ({ bookingEmail }) => {
  return (
    <div className="container error-container">
      <div className="title">
        <h1>Error</h1>
      </div>
      <div>
        <i className="fas fa-exclamation-triangle fa-10x"></i>
      </div>
      <p>There was an error with your request.</p>
      <p>Please try again or contact: {bookingEmail}</p>
      <br />
      <div className="return-home">
        <p>
          Return to <Link to="/">Home Page</Link>
        </p>
      </div>
    </div>
  );
};

export default SubmissionError;
