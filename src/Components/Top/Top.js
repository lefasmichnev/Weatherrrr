import React from "react";
import "./index.css";

function Top({ details }) {
  if (details.weather === undefined) {
    return null;
  }

  function ToUpFirst(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
  }

  const cloudDescription = ToUpFirst(details.weather[0].description);
  const Temp = Math.round(details.temp) + "°";
  const TempIcon =
    "http://openweathermap.org/img/wn/" + details.weather[0].icon + "@2x.png";

  return (
    <div className="Top">
      <span className="Top_city">Димитровград</span>
      <div className="Top1">
        <img src={TempIcon}></img>
        <span className="Temp">{Temp}</span>
      </div>
      <span className="Top_description">{cloudDescription}</span>
    </div>
  );
}

export default Top;
