import React, { Component } from 'react';

import Header from './components/header/header.component';
import CurrentWeather from './components/current-weather/current-weather.component';
import {secretKey} from './apiKeys';

import './App.css';

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      weather: {},
    };
  }

  

  componentDidMount() {
    const api = 'https://api.darksky.net/forecast/';
    const placeLat = 33.9887165;
    const placeLong = -83.8979573;
    const queryParam = '?exclude=minutely,hourly,flags';


    fetch(api + secretKey + placeLat + placeLong + queryParam, {
      method: 'GET',
      mode: 'no-cors'
    })
    .then(response => console.log(response.json()))
    //.then(weather => this.setState( {weather} ))
    // .catch(function(error) {
    //   console.log('Looks like there was a problem: \n', error);
    // })
  };

  //console.log(this.state.weather);

  
  render() {
    return (
      <div className="App">
        <Header  />
        <CurrentWeather />
      </div>
    );
  }

}

export default App;
