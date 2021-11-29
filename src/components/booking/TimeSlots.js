import React, { useState, useEffect } from "react";
import { getTimeSlots } from "../../services/getTimeSlots";

const TimeSlots = ({ timeClickHandler, timeClickHandlerUnselect, selectedDate, time, setTime, radio }) => {
  const [availableTimes, setAvailableTimes] = useState([]);

  useEffect(() => {
    setAvailableTimes(getTimeSlots(selectedDate));
  }, [selectedDate]);

  useEffect(() => {
    time.forEach((t) => (t.available = true));
    setTime([]);
  }, [radio]);

  function handleClick(timeslot) {
    if (timeslot.available === "selected") {
      timeClickHandlerUnselect(timeslot);
      availableTimes.forEach((time) => {
        if (timeslot === time) {
          time.available = true;
        }
      });
      return;
    }
    availableTimes.forEach((time) => {
      if (timeslot === time) {
        time.available = "selected";
      }
    });

    timeClickHandler(timeslot);
  }

  return (
    <div className="time-slots">
      <p>Available times:</p>
      {availableTimes.length ? (
        <div className="available-times">
          {availableTimes.map((timeslot) => {
            return timeslot.available ? (
              <div
                key={timeslot.time.start}
                className={`time-slot ${timeslot.available === "selected" ? "time-selected" : ""}`}
                id="time-slot"
                onClick={() => handleClick(timeslot)}
              >
                {timeslot.time.start} - {timeslot.time.end}
              </div>
            ) : (
              <></>
            );
          })}
          <br />
        </div>
      ) : (
        <div className="no-available">Sorry, all time slots have been booked for today</div>
      )}
    </div>
  );
};

export default TimeSlots;
