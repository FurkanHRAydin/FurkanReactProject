import React, {useState} from 'react';
import axios from 'axios'
import Container from './Container';


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

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=6847fff1ba1440395c9624c98a44f3f0`;

  const searchLocation = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key == 'Enter') {
      axios.get(url).then((response) => {
        // Daten von der API abrufen
        setData(response.data);
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

      <Container data={data}/>

      
      
    </div>
  );
}

export default App;
