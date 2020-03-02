import React from 'react';
import './TopBlock.css';
import Button from "../Button/Button";

function TopBlock({ scrollTo }) {
  return (
    <div className="top-block" id="topBlock">
      <div className="container">
        <div className="top-block__content">
          <h1 className="top-block__title">
            Test assignment
            for Frontend Developer position
                    </h1>
          <p className="top-block__text">
            We kindly remind you that your test assignment should be submitted as a link to
            github/bitbucket repository. Please be patient, we consider and respond to every
            application that meets minimum requirements. We look forward to your submission. Good luck!
            The photo has to scale in the banner area on the different screens
                    </p>
          <Button func={() => scrollTo('signUp')} />
        </div>
      </div>
    </div>
  );
}

export default TopBlock;
