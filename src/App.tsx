import React, {useState} from 'react';
import axios from 'axios'

function App() {

  
  const [data, setData] = useState({
    name: '',
    main: {
      temp: 0,
      feels_like: 0,
      humidity: 0,
    },
    weather: [
      {
        main: '',
      },
    ],
    wind: {
      speed: 0,
    },
  });
  

  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=6847fff1ba1440395c9624c98a44f3f0`;

  const searchLocation = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key == 'Enter') {
      axios.get(url).then((response) => {
        // Daten von der API abrufen
        const apiData = response.data;

        // Temperatur in Celsius umrechnen
        const tempCelsius = Math.round(apiData.main.temp - 273.15);
        const feelsLikeCelsius = Math.round(apiData.main.feels_like - 273.15);
        const speedInMs = Math.round(apiData.wind.speed  * 1.60934);

        setData({
          name: apiData.name,
          main: {
            temp: tempCelsius,
            feels_like: feelsLikeCelsius,
            humidity: apiData.main.humidity,
          },
          weather: apiData.weather,
          wind: {
            speed: speedInMs,
          },
        });
      });
      setLocation('')
    }
  
  }

  return (
    <div className="app">
      <div className="search">
        <input 
        value={location}
        onChange={event => setLocation(event.target.value)}
        placeholder='Enter Location'
        onKeyPress={searchLocation}
        type='text'/>
      </div>
      <div className='container'>
        <div className='top'>
          <div className='location'>
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp} °C</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>
        <div className='bottom'>
          <div className="feels">
            {data.main ? <p className='bold'>{data.main.feels_like} °C</p> : null}
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            {data.main ? <p className='bold'>{data.main.humidity} % </p> : null}
            <p>humidity</p>
          </div>
          <div className="wind">
            {data.wind ? <p className='bold'>{data.wind.speed} km/h</p>  : null}
            <p>Wind speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
