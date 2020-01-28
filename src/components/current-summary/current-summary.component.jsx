import React from 'react';

// Styles and images
import './current-summary.styles.scss';
import sun from '../../assets/svg/clear-day.svg';


const CurrentSummary = () => {
        
    const currentTemp = 74;
    const location = "Dacula, GA";
    

    return (
        <div className="current-summary-container">
            <div className="current-temp-summary">
                <div className="location">{location}</div>
                <div className="current-temp">{currentTemp}&#176; F</div>
                <div className="forecast-icon"><img src={sun} alt="sunny"/></div>
            </div>
        
        </div>
    );

};

export default CurrentSummary;