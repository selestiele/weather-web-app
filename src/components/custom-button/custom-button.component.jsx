import React from 'react';

import './custom-button.styles.scss';

const Button = (props) => {
    return (
        <div>
            <input className="custom-button" type="submit" text={props.text} />
        </div>
    )
}

export default Button;