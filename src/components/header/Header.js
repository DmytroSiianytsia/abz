import React from 'react';
import './Header.css';

function Header({ scrollTo }) { 
    return (
        <div className="header">
            <div className="container">
                <div className="header__content">
                    <img src="./img/logo.svg" alt="test task" className="logo__img" />
                    <img src="./img/menu-icon.svg" alt="menu" className="header__menu-burger" />                    
                    <nav className="nav-header">
                        <ul className="nav">
                            <li className="nav__item" tabIndex="0" onClick={() => scrollTo(0)}>Main</li>
                            <li className="nav__item" tabIndex="1" onClick={() => scrollTo(650)}>About me </li>                            
                            <li className="nav__item" tabIndex="2">Requirements</li>
                            <li className="nav__item" tabIndex="3" onClick={() => scrollTo(1400)}>Users</li>
                            <li className="nav__item" tabIndex="4" onClick={() => scrollTo(2555)}>Sign Up</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Header;
