import React from 'react';

import SearchBox from '../search/search.component.jsx';

import './header.styles.scss';

const Header = () => {
    return (
        <div className="header-container">
            <img className="logo-image" src="" alt="logo for weather app" />
            <h1>My Weather App</h1>
            <SearchBox />
        </div>
    )
};



export default Header;