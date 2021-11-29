import React from "react";
import { Link } from "react-router-dom";

const SubmissionSuccess = ({ submissionData }) => {
  const { time, service, details } = submissionData;
  const dogName = details["dog-name"].slice(0, 1).toUpperCase() + details["dog-name"].slice(1).toLowerCase();
  const address = `${details.flat} ${details.street}, ${details.postcode}, ${details.city}`;

  const bookedTimes = time.map((bookedTime) => {
    return (
      <div key={Math.random()} className="booked-date">
        <div className="booked-time">
          <i className="far fa-calendar-check fa-lg" /> <span>{bookedTime.day}</span>
        </div>
        <div className="booked-time">
          <i className="far fa-clock fa-lg" />
          <span>
            {bookedTime.time.start}-{bookedTime.time.end}
          </span>
        </div>
      </div>
    );
  });

  return (
    <div className="container">
      <div className="title">
        <h1>
          <i className="fas fa-check-square fa-3x"></i>
        </h1>
      </div>
      <div className="success-msg">
        <i className="fas fa-paw fa-sm" />
        <p>Your booking has been successfully submitted</p>
        <i className="fas fa-paw fa-sm" />
      </div>
      <br />
      <div className="title">
        <h1>{dogName}'s booking details:</h1>
      </div>
      <div className="booking-details">
        <div className="booking-detail selected-service">
          <div>
            <h2>Selected service:</h2>
          </div>
          <div>
            <span>{service.toUpperCase()}</span>
          </div>
        </div>
        <div className="booking-detail">
          <h2>Date and time: </h2> <span>{bookedTimes}</span>
        </div>
        <div className="booking-detail">
          <h2>Contact details:</h2>
          <div className="submitted-detail">
            <p>Owner:</p> <span>{details["first-name"]}</span>
          </div>
          <div className="submitted-detail">
            <p>Mobile:</p> <span>{details.mobile}</span>
          </div>
          <div className="submitted-detail">
            <p>Email:</p> <span>{details.email}</span>
          </div>
          <div className="submitted-detail">
            <p>Address:</p>
            <div>
              <span>{address}</span>
            </div>
          </div>
        </div>
        <div className="booking-detail">
          <h2>More about {dogName}:</h2>
          <div className="submitted-detail">
            <p>Breed:</p> <span>{details["dog-breed"]}</span>
          </div>
          <div className="submitted-detail">
            <p>Age:</p> <span>{details["dog-age"]} years</span>
          </div>
          <div className="submitted-detail">
            <p>Weight:</p> <span>{details["dog-weight"]} kg</span>
          </div>
          <div className="submitted-detail">
            <p>Animals:</p> <span>{details["get-along"]}</span>
          </div>
          <div className="submitted-detail">
            <p>Important:</p> <span>{details.important}</span>
          </div>
        </div>
      </div>
      <div className="return-home">
        <p>
          Return to <Link to="/">Home Page</Link>
        </p>
      </div>
    </div>
  );
};

export default SubmissionSuccess;
