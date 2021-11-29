import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import TimeSlots from "./TimeSlots";

const BookWalk = ({ timeClickHandler, timeClickHandlerUnselect, time, setTime, radio }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="calendar-container">
      <div className="calendar">
        <div>
          <h2>Walk calendar</h2>
        </div>
        {!selectedDate ? (
          <div> Loading dates...</div>
        ) : (
          <Calendar onChange={setSelectedDate} value={selectedDate} minDate={new Date()} />
        )}
      </div>
      <TimeSlots
        timeClickHandler={timeClickHandler}
        timeClickHandlerUnselect={timeClickHandlerUnselect}
        selectedDate={selectedDate}
        time={time}
        setTime={setTime}
        radio={radio}
      />
    </div>
  );
};

export default BookWalk;
