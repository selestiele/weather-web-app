// React-related dependencies
import React, { Component } from 'react';


import {secretKey} from './apiKeys';


// Components
import Header from './components/header/header.component';
import CurrentWeather from './components/current-weather/current-weather.component';
import FiveDayContainer from './components/five-day/five-day.component';
import Footer from './components/footer/footer.component';


// Styles
import './App.css';



class App extends Component {
  constructor() {
    super();
    
    this.state = {
      weather: [],
    };
  }

  

  // componentDidMount() {
  //   const api = 'https://api.darksky.net/forecast/';
  //   const placeLat = 33.9887165;
  //   const placeLong = -83.8979573;
  //   const queryParam = '?exclude=minutely,hourly,flags';


  //   fetch(api + secretKey + placeLat + placeLong + queryParam, {
  //     method: 'GET',
  //     mode: 'no-cors',
      
  //   })
  //   .then(response => console.log(response.json()))
  //   //.then(weather => this.setState( {weather} ))
  //   // .catch(function(error) {
  //   //   console.log('Looks like there was a problem: \n', error);
  //   // })
  // };

  // //console.log(this.state.weather);

  
  render() {
    return (
      <div className="App">
        <Header  />
        <div className="main">
          <CurrentWeather />
          <FiveDayContainer />
        </div>
        <Footer />
      </div>
    );
  };

}

export default App;
