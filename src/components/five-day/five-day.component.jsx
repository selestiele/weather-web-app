import React from 'react';


import SingleDaySummary from '../single-day-summary/single-day-summary.component';

import './five-day.styles.scss';


const FiveDayContainer = () => {
    
    return (
        <div className="five-day-container">
            <h2>Five-Day Forecast</h2>
            <div className="summary-container">
                <SingleDaySummary day="Tues" icon="clear-day" highTemp="80" lowTemp="67" />
                <SingleDaySummary day="Wed" icon="partly-cloudy-day" highTemp="83" lowTemp="64" />
                <SingleDaySummary day="thur" icon="wind" highTemp="78" lowTemp="60" />
                <SingleDaySummary day="Fri" icon="cloudy" highTemp="79" lowTemp="63" />
                <SingleDaySummary day="sat" icon="rain" highTemp="72" lowTemp="57" />
            </div>
        </div>
    );
};

export default FiveDayContainer;