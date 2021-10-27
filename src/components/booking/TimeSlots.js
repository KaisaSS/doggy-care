import React from "react";
import useTimeSlots from "../hooks/useTimeSlots";

const TimeSlots = () => {
  const { timeSlots } = useTimeSlots();

  const clickTimeSlot = (time) => {
    console.log(time);
  };

  return (
    <div className="time-slots">
      <p>Available times:</p>
      <div className="available-times">
        {timeSlots.map((slot) => (
          <div key={slot} className="time-slot" onClick={() => clickTimeSlot(slot)}>
            {slot}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeSlots;
