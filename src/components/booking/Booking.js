import React, { useState } from "react";
import AboutDog from "./AboutDog";
import AboutYou from "./AboutYou";
import BookDaycare from "./BookDaycare";
import "./booking.css";
import BookWalk from "./BookWalk";

const Booking = () => {
  const [input, setInput] = useState({});
  const [radio, setRadio] = useState(false);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.id]: e.target.value });
  };

  const handleRadio = (e) => {
    setRadio({ [e.target.id]: true });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(radio, input);
  };

  const calendar = radio.walks ? <BookWalk /> : radio.daycare ? <BookDaycare /> : null;

  return (
    <div className="container">
      <div className="title">
        <h1>Booking</h1>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <h2>Which service are you looking to book?</h2>
        <div className="service-option">
          <div className="radio-button">
            <input type="radio" id="walks" name="service" value="walks" onChange={handleRadio} required />
            <label htmlFor="walks"> Walk</label>
          </div>
          <div className="radio-button">
            <input type="radio" id="daycare" name="service" value="daycare" onChange={handleRadio} required />
            <label htmlFor="daycare"> Daycare</label>
          </div>
        </div>
        {calendar}
        <AboutYou handleChange={handleChange} />
        <AboutDog handleChange={handleChange} />
        <div className="btn">
          <button>Next</button>
        </div>
      </form>
    </div>
  );
};

export default Booking;
