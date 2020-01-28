import React from 'react';

import NavBar from '../nav-bar/nav-bar.component.jsx';

import './header.styles.scss';


const Header = () => {

    
    return (
        <div className="header-container">
            <NavBar />
            <h1 className="site-title">My Weather App</h1>
        </div>
    );
};



export default Header;