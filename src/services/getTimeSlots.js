import timeSlotArr from "../mockData/timeSlotArr.json";

export const getTimeSlots = (day) => {
  let selectedDate = `${day.getDate()}-${day.getMonth() + 1}-${day.getFullYear()}`;

  const filteredByDay = timeSlotArr.filter((timeSlot) => timeSlot.day === selectedDate);

  return filteredByDay;
};
