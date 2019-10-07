import React from 'react';
import Info from '../components/Info';
import Form from '../components/Form';
import WeatherList from '../components/WeatherList';

const API_KEY = "e453eb4919df7740d9c7db2b33735120";
const FAHRENHEIT = 'imperial';
const CELSIUS = 'metric';

export default class MainLayout extends React.Component {
    
  state = {
    error: undefined
  }

  async gettingWeatherBody(city, degree) {
    if (city) {
      try {
        const api_url = await fetch(`http://api.openweathermap.org/data/2.5/forecast/?q=${city}&APPID=${API_KEY}&units=${degree}&cnt=5`);
        const data = await api_url.json();

        this.setState({
          error: undefined
        });

        this.props.setWeatherData(data);

      } catch(err) {
      //   console.log(err); 
        this.setState({
            error: 'City not found'
        });
        this.props.setWeatherData([]);
      }
    } else {
      this.props.setWeatherData([]);
    }
  }

  gettingWeather = (e) => {
    e.preventDefault()
    
    const city = e.target.elements.city.value;
    const degree = this.props.check ? FAHRENHEIT : CELSIUS;
    
    this.gettingWeatherBody(city, degree)
  }

  gettingWeather2 = () => {
      const city = this.props.weatherData.city !== undefined ? this.props.weatherData.city.name : '';
      const degree = !this.props.check ? FAHRENHEIT : CELSIUS;
      
      this.gettingWeatherBody(city, degree)
  }

  render() {
    const {error} = this.state;
    const {weatherData} = this.props;

    const weatherDataList = weatherData.list !== undefined ? weatherData.list : [];
    const weatherCity = weatherData.city !== undefined ? weatherData.city.name : '';

    this.props.getApi(this.gettingWeather2);

    return (
      <>
        <Info 
          city= {weatherCity}
        />  
        
        <Form weatherMethod={this.gettingWeather} />

        <WeatherList
            list={weatherDataList}
            city= {weatherCity}
            error={error}
            {...this.props}
        />
      </>
    );
  }
}