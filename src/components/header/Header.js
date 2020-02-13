import React, { useState } from 'react';
import './Header.css';

function Header({ scrollTo }) {
    const [isVisible, toggleVisible] = useState(false);
    const visible = isVisible ? 'visible' : '';
    return (
        <div className="header">
            <div className="container">
                <div className="header__content">
                    <img src="./img/logo.svg" alt="test task" className="logo__img" />
                    <img
                        src="./img/menu-icon.svg"
                        alt="menu"
                        className="header__menu-burger"
                        onClick={() => toggleVisible(!isVisible)}
                    />
                    <nav className="nav-header">
                        <ul className="nav">
                            <li className="nav__item" tabIndex="0" onClick={() => scrollTo(0)}>Main</li>
                            <li className="nav__item" tabIndex="1" onClick={() => scrollTo(650)}>About me </li>
                            <li className="nav__item" tabIndex="2">Requirements</li>
                            <li className="nav__item" tabIndex="3" onClick={() => scrollTo(1400)}>Users</li>
                            <li className="nav__item" tabIndex="4" onClick={() => scrollTo(2555)}>Sign Up</li>
                        </ul>
                    </nav>
                    <nav className={`nav-aside ${visible}`}>
                        {
                            visible
                                ?
                                <div className={`bg ${visible}`} onClick={() => toggleVisible(!isVisible)}></div>
                                :
                                <div className="bg"></div>
                        }
                        <div className="nav-aside__logo">
                            <img src="./img/logo.svg" alt="test task" className="logo__img" />
                        </div>
                        <hr className="hor-line" />
                        <ul className="nav1">
                            <li className="nav__item" tabIndex="0" onClick={() => scrollTo(0)}>Main</li>
                            <li className="nav__item" tabIndex="1" onClick={() => scrollTo(650)}>About me </li>
                            <li className="nav__item" tabIndex="2">Requirements</li>
                            <li className="nav__item" tabIndex="3" onClick={() => scrollTo(1400)}>Users</li>
                            <li className="nav__item" tabIndex="4" onClick={() => scrollTo(2555)}>Sign Up</li>
                        </ul>
                        <hr />
                        <ul className="nav1">
                            <li className="nav__item" tabIndex="5">How it works</li>
                            <li className="nav__item" tabIndex="6">Partnership</li>
                            <li className="nav__item" tabIndex="7">Help</li>
                            <li className="nav__item" tabIndex="8">Leave testimonial</li>
                            <li className="nav__item" tabIndex="9">Contact us</li>
                        </ul>
                        <hr />
                        <ul className="nav1">
                            <li className="nav__item" tabIndex="10">Articles</li>
                            <li className="nav__item" tabIndex="11">Our news</li>
                            <li className="nav__item" tabIndex="12">Testimonials</li>
                            <li className="nav__item" tabIndex="13">Licenses</li>
                            <li className="nav__item" tabIndex="14">Privacy Policy</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Header;
