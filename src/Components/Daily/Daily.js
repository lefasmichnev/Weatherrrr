import React from "react";
import Day from "../Day/Day";
import "./index.css";

function Daily({ daily }) {
  if (!Daily.length) {
    return null;
  }

  return (
    <div className="Daily_title">
      <span className="Daily_title">8-ми дневный прогноз погоды:</span>
      <div className="DayList">
        {daily.map((day) => {
          return (
            <Day
              key={day.dt}
              tempDay={day.temp.day}
              tempNight={day.temp.night}
              dt={day.dt}
              icon={day.weather[0].icon}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Daily;