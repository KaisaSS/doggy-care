import React from "react";

const Contact = () => {
  const infoEmail = "info@doggycare.com";

  return (
    <div className="container">
      <div className="title">
        <h1>Contact</h1>
      </div>
      <div className="calendar-container">
        <p>Want more information?</p>
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
            {infoEmail}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
