import React from 'react';
import './Calendar.css'; 
import calendarImage from '../calendar.png'; 

function Calendar() {
  return (
    <div className="calendar-container">
      <img src={calendarImage} alt="Calendar" className="calendar-image" />
    </div>
  );
}

export default Calendar;
