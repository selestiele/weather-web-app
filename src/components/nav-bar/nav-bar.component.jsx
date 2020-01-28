import React from 'react';

import SearchBox from '../search/search.component.jsx';


import logoWeather from '../../assets/svg/logo-weather.svg';
import './nav-bar.styles.scss';

const NavBar = () => {
    return (
        <div className="main-nav-bar">
            <img className="logo-image" src={logoWeather} alt="logo for weather app" />
            <SearchBox />
        </div>
    );
}

export default NavBar;