import React from 'react';

import './footer.styles.scss';

const Footer = () => {

    const year = 2020;

    return (
        <div className="footer-container">
            <p>&copy; {year} All Rights Reserved</p>
        </div>
    );
};

export default Footer;