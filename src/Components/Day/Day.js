import React from "react";
import "./index.css";

function Day({ tempDay, tempNight, dt, icon }) {
  let myDate = new Date(dt * 1000);
  let checkDate = new Date();
  let toDay = `${myDate.getDate()}.${
    myDate.getMonth() + 1
  }.${myDate.getFullYear()}`;
  let dayName = myDate.getDay();

  const correctIcon = `http://openweathermap.org/img/wn/${icon}@2x.png`; // нашел ток так как сделать чтобы нормально заполняло с сайта, хотя думал взять в src и выцепить картинки с сайта, но не разобрался(

  switch (dayName) {
    case 0:
      dayName = "Вс";
      break;
    case 1:
      dayName = "Пн";
      break;
    case 2:
      dayName = "Вт";
      break;
    case 3:
      dayName = "Ср";
      break;
    case 4:
      dayName = "Чт";
      break;
    case 5:
      dayName = "Пт";
      break;
    case 6:
      dayName = "Сб";
      break;
  }

  if (checkDate.getDate() == myDate.getDate()) {
    toDay = "Сегодня";
  }

  if (
    checkDate.getDate() + 1 == myDate.getDate() ||
    (checkDate.getDate() == 30 &&
      (checkDate.getMonth() + 1) % 2 == 0 &&
      myDate.getDate() == 1) ||
    (checkDate.getDate() == 31 && myDate.getDate() == 1)
  ) {
    toDay = "Завтра";
  }

  return (
    <div className="Day">
      <div className="Day_TopInfo">
        <span className="Day_title">{toDay}</span>
        <span className="Day_dayName">{dayName}</span>
      </div>
      <img src={correctIcon}></img>
      <div className="Day_temp">
        <span className="DayC_temp">{Math.round(tempDay)}°</span>
        <span className="Night_temp">{Math.round(tempNight)}°</span>
      </div>
    </div>
  );
}

export default Day;
