import React from 'react';
import './Button.css';

function Button({value = 'Sign up now', mod, func}) {
    return (
        <button className={`btn ${mod}`} onClick={func}>{value}</button>
    );
}

export default Button;
