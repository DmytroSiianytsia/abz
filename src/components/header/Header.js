import React from 'react';
import './Header.css';

function Header() {
    return (
        <div className="header">
            <div className="container">
                <div className="header__content">
                    <div className="logo">
                        <img src="./img/logo.svg" alt="logo" className="logo__img"/>
                    </div>
                    <div className="nav">
                        <a href="#" className="nav__item">About me </a>
                        <a href="#" className="nav__item">Relationships</a>
                        <a href="#" className="nav__item">Requirements</a>
                        <a href="#" className="nav__item">Users</a>
                        <a href="#" className="nav__item">Sign Up</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
