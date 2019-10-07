export const WEATHER_DATA = 'WEATHER_DATA'

export function setWeatherData(weatherData) { 
    return {
        type: WEATHER_DATA,
        payload: weatherData
    }
}
