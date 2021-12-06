import React, { useState } from "react";
import AboutDog from "./AboutDog";
import AboutYou from "./AboutYou";
import BookDaycare from "./BookDaycare";
import BookWalk from "./BookWalk";
import "./booking.css";
import HandleSubmission from "./handleSubmission/HandleSubmission";

const Booking = () => {
  const [input, setInput] = useState({});
  const [radio, setRadio] = useState(false);
  const [time, setTime] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionData, setSubmissionData] = useState(null);
  const bookingEmail = "booking@doggycare.com";

  const handleChange = (e) => {
    setInput({ ...input, [e.target.id]: e.target.value });
  };

  const handleRadio = (e) => {
    setRadio({ [e.target.id]: true });
  };

  const timeClickHandler = (newTime) => {
    if (time.length) {
      setTime([...time, newTime]);
    } else setTime([newTime]);
  };

  const timeClickHandlerUnselect = (unselectTime) => {
    const filteredTime = time.filter((timeSlot) => timeSlot !== unselectTime);
    setTime(filteredTime);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      details: { ...input },
      service: Object.keys(radio)[0],
      time: [...time],
    };

    setSubmissionData(data);
    setIsSubmitted(true);
  };

  const calendar = radio.walk ? (
    <BookWalk
      timeClickHandler={timeClickHandler}
      timeClickHandlerUnselect={timeClickHandlerUnselect}
      time={time}
      setTime={setTime}
      radio={radio}
    />
  ) : radio.daycare || radio.boarding ? (
    <BookDaycare bookingEmail={bookingEmail} />
  ) : null;

  return (
    <div className="container">
      {!isSubmitted ? (
        <div>
          <div className="title">
            <h1>Booking</h1>
          </div>
          <form className="form" onSubmit={handleSubmit}>
            <h2 className="form-head">Which service are you looking to book?</h2>
            <div className="service-option">
              <div className="radio-button">
                <input
                  type="radio"
                  id="walk"
                  name="service"
                  value="walk"
                  onChange={handleRadio}
                  required />
                <label htmlFor="walk"> Walk</label>
              </div>
              <div className="radio-button">
                <input
                  type="radio"
                  id="daycare"
                  name="service"
                  value="daycare"
                  onChange={handleRadio}
                  required />
                <label htmlFor="daycare"> Daycare</label>
              </div>
              <div className="radio-button">
                <input
                  type="radio"
                  id="boarding"
                  name="service"
                  value="boarding"
                  onChange={handleRadio}
                  required
                />
                <label htmlFor="boarding"> Boarding</label>
              </div>
            </div>
            {calendar}
            {radio.walk ? (
              <div>
                <AboutYou handleChange={handleChange} />
                <AboutDog handleChange={handleChange} />
                <div className="btn">
                  <button>Book</button>
                </div>
              </div>
            ) : (
              <></>
            )}
          </form>
        </div>
      ) : (
        <HandleSubmission submissionData={submissionData} bookingEmail={bookingEmail} />
      )}
    </div>
  );
};

export default Booking;
