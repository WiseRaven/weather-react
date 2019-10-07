import React from "react";

const Weather = (props) => {
  const {time, temp, weather_info, check} = props;
  let time_arr = time.split(" ");
  let date = time_arr[0];
  let hours = time_arr[1];
    return (
      <div className="weather-item">
        <div className="weather-info">
          <p className="bold temperature">{temp} {check === true ? "°F" : "°C"} </p>
          <p>{weather_info}</p>
        </div>
        <div className="date">
          <p className="bold">{hours}</p>
          <p>{date}</p>
        </div>
      </div>
    );
}

export default Weather;