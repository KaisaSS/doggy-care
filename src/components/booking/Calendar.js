import React, { Fragment } from "react";
import useCalendar from "../hooks/useCalendar";
import TimeSlots from "./TimeSlots";

const Calendar = () => {
  const { daysShort, monthNames, todayFormatted, calendarRows, selectedDate, getPrevMonth, getNextMonth } =
    useCalendar();

  const dateClickHandler = (date) => {
    console.log(date);
  };

  return (
    <Fragment>
      <p className="month-year">{`${monthNames[selectedDate.getMonth()]} - ${selectedDate.getFullYear()}`}</p>
      <table className="table">
        <thead>
          <tr>
            {daysShort.map((day) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.values(calendarRows).map((cols) => {
            return (
              <tr key={cols[0].date}>
                {cols.map((col) =>
                  col.date === todayFormatted ? (
                    <td
                      key={col.date}
                      className={`${col.classes} today`}
                      onClick={() => dateClickHandler(col.date)}
                    >
                      {col.value}
                    </td>
                  ) : (
                    <td key={col.date} className={col.classes} onClick={() => dateClickHandler(col.date)}>
                      {col.value}
                    </td>
                  )
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="calendar-btn">
        <button className="button" onClick={getPrevMonth}>
          Prev
        </button>
        <button className="button" onClick={getNextMonth}>
          Next
        </button>
      </div>
      <TimeSlots />
    </Fragment>
  );
};

export default Calendar;
