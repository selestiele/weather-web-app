import React from 'react';

import './current-weather.styles.scss';

const CurrentWeather = (props) => {
    // const weatherNow = {
    //     ...weather,

    // }
    
    const currentTemp = 74;
    const dailyHigh = 80;
    const dailyLow = 67;

    return (
        <div className="current-weather-container">
            <h2>Current Weather</h2>
            <p className="attribution"><a href="https://darksky.net/poweredby/">Powered by Dark Sky</a></p>
            <div className="current-temp-summary">
                <div className="current-temp">{currentTemp}&#176; F</div>
                <div className="high-low">{dailyHigh}&#176; / {dailyLow}&#176;</div>
            </div>
        
        </div>
    )

}

export default CurrentWeather;