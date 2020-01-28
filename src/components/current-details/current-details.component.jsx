import React from 'react';

// Styles
import './current-details.styles.scss';

const Details = () => {
    return (
        <div className="current-details-container">
            <div className="detail-row">
                <span className="detail-description">Feels Like</span>
                <span className="detail-result">Test</span>
            </div>
            <div className="detail-row">
                <span className="detail-description">Precipitation</span>
                <span className="detail-result">Test</span>
            </div>
            <div className="detail-row">
                <span className="detail-description">Humidity</span>
                <span className="detail-result">Test</span>
            </div>
            <div className="detail-row">
                <span className="detail-description">Sunrise</span>
                <span className="detail-result">Test</span>
            </div>
            <div className="detail-row">
                <span className="detail-description">Sunset</span>
                <span className="detail-result">Test</span>
            </div>
            <div className="detail-row">
                <span className="detail-description">Moon Phase</span>
                <span className="detail-result">Test</span>
            </div>

            <p className="attribution"><a href="https://darksky.net/poweredby/">Powered by Dark Sky</a></p>
        
        </div>
    );
}; 

export default Details;
