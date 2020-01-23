import React from 'react';

import Header from './components/header/header.component';
import CurrentWeather from './components/current-weather/current-weather.component';

import './App.css';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: {
        latitude: "",
        longitude: "",
        currently: {
          summary: "",
          icon: "",
          precipProbability: 0,
          precipType: "",
          temperature: 0,
          humidity: 0,
          pressure: 0,
        },
        daily: {
          summary: "",
          icon: "",
          sunriseTime: 0,
          sunsetTime: 0,
          moonPhase: 0,
          precipProbability: 0,
          precipType: "",
          temperatureHigh: 0,
          temperatureLow: 0,
          humidity: 0,
        },
        alerts: []
      }
    };
  }
}


function App() {
  const secretKey = '563e6c45583f29fa15501a4d8669fab9';
  return (
    <div className="App">
      <Header  />
      <CurrentWeather />
    </div>
  );
}

export default App;
