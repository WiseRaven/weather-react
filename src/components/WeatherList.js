import React from "react";
import Weather from '../components/Weather';

const WeatherList = (props) => {
  const {list, city, error} = props;
    
    return (
      <div className="weather">
         {
           city ? 
            list.map((item, i) => {
              let weather_info = item.weather.map(elem => {return elem.description});
              return (
                  <Weather 
                    key={i} 
                    time={item.dt_txt} 
                    temp={item.main.temp}
                    weather_info={weather_info}
                    {...props} 
                  />
              )
            })
          :
            <p className="error-msg bold">{error}</p>
         } 
      </div>
    );
}

export default WeatherList;