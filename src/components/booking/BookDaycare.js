import React from "react";

const BookDaycare = ({ bookingEmail }) => {
  return (
    <div className="calendar-container">
      <p>To book daycare/boarding please contact:</p>
      <div className="daycare contact-phone">
        <span>
          <div className="contact-logo">
            <i className="fa fa-mobile-alt fa-lg"></i>
          </div>{" "}
          #004
        </span>
      </div>
      <div className="daycare contact-email">
        <span>
          <div className="contact-logo">
            <i className="fa fa-envelope fa-lg"></i>
          </div>
          {bookingEmail}
        </span>
      </div>
    </div>
  );
};

export default BookDaycare;
