import React from 'react';

import Button from '../custom-button/custom-button.component.jsx';

import './search.styles.scss';

const SearchBox = () => {
    return (
        <div className="search-box">
            <input type="search" placeholder="Find your city" />
            <Button text="Find" />
        </div>
    )
};

export default SearchBox;
