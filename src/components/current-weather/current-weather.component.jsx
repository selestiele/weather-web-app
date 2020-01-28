import React from 'react';

import CurrentSummary from '../current-summary/current-summary.component';
import Details from '../current-details/current-details.component';

import './current-weather.styles.scss';

const CurrentWeather = () => {
    return (
        <div className="current-weather-container">
            <CurrentSummary />
            <Details />
        </div>
    ); 
};

export default CurrentWeather;