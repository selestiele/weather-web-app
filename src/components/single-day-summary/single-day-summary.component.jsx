import React from 'react';

// svgs for icons
import clearDay from '../../assets/svg/clear-day.svg';
import clearNight from '../../assets/svg/clear-night.svg';
import defaultImage from '../../assets/svg/default-image.svg';
import rain from '../../assets/svg/rain.svg';
import snow from '../../assets/svg/snow.svg';
import sleet from '../../assets/svg/sleet.svg';
import wind from '../../assets/svg/wind.svg';
import fog from '../../assets/svg/fog.svg';
import cloudy from '../../assets/svg/cloudy.svg';
import partlyCloudyDay from '../../assets/svg/partly-cloudy-day.svg';
import partlyCloudyNight from '../../assets/svg/partly-cloudy-night.svg';

// stylesheet
import './single-day-summary.styles.scss';

const SingleDaySummary = ({day, icon, highTemp, lowTemp}) => {

    // determine which icon to use
    let iconImg = null;

    switch(icon) {
        case 'clear-day': 
            iconImg = clearDay;
            break;
        case 'clear-night': 
            iconImg = clearNight;
            break;
        case 'rain':
             iconImg = rain;
            break;
        case 'snow':
            iconImg = snow;
            break;
        case 'sleet':
            iconImg = sleet;
            break;
        case 'wind':
            iconImg = wind;
            break;
        case 'fog':
            iconImg = fog;
            break;
        case 'cloudy':
            iconImg = cloudy;
            break;
        case 'partly-cloudy-day':
            iconImg = partlyCloudyDay;
            break;
        case 'partly-cloudy-night':
            iconImg = partlyCloudyNight;
            break;
        default: 
            iconImg = defaultImage;
    };

    
    return (
        <div className="single-day-summary-container">
            <h3 className="day-name">{day}</h3>
            <img className="daily-forecast-icon" src={iconImg} alt={icon} />
            <span className="high-lo">{highTemp}&deg; / </span>
            <span className="high-lo">{lowTemp}&deg;</span>
        </div>
    );
};

export default SingleDaySummary;