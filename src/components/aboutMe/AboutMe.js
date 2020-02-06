import React from 'react';
import Button from "../button/Button";
import './AboutMe.css';

function AboutMe() {
    return (
        <div className="about-me">
            <div className="container">
                <div className="about-me__content">
                    <h2 className="about-me__title">
                        Let's get acquainted
                    </h2>
                    <div className="about-me__wrap">
                        <div className="about-me__left">
                            <img src="./img/man-laptop-v1.svg" alt="Man with laptop" className="about-me__img"/>
                        </div>
                        <div className="about-me__right">
                            <h3 className="about-me__subtitle">
                                I am cool frontend developer
                            </h3>
                            <p className="about-me__text">
                                We will evaluate how clean your approach to writing CSS and Javascript code is.
                                You can use any CSS and Javascript 3rd party libraries without any restriction.
                            </p>
                            <p className="about-me__text">
                                If 3rd party css/javascript libraries are added to the project via bower/npm/yarn you
                                will get bonus points. If you use any task runner (gulp/webpack) you will get bonus
                                points as well. Slice service directory page PSD mockup​ into HTML5/CSS3.
                            </p>
                            <Button value="Sign up now" mod="btn_white"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
