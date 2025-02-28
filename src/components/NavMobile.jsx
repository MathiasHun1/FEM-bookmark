import React from 'react';

import Logo from './Logo';
import closeSVG from '../assets/icon-close.svg';
import fbSVG from '../assets/icon-facebook.svg';
import twitterSVG from '../assets/icon-twitter.svg';

const NavMobile = ({ isOpened, setIsOpened }) => {
  return (
    <nav className={`nav-mobile wrapper ${!isOpened ? 'hidden' : ''}`}>
      <div className="nav-mobile-header">
        <Logo color="white" />
        <button className="close-button" onClick={() => setIsOpened(false)}>
          <img src={closeSVG} alt="" />
        </button>
      </div>
      <ul className="nav-list-mobile">
        <li className="nav-list-item-mobile">FEATURES</li>
        <li className="nav-list-item-mobile">PRICING</li>
        <li className="nav-list-item-mobile">CONTACT</li>
      </ul>
      <button className="nav-mobile-button">LOGIN</button>

      <div className="nav-mobile__social-icons-container">
        <div className="nav-mobile__social-icon">
          <img src={fbSVG} alt="" />
        </div>
        <div className="nav-mobile__social-icon">
          <img src={twitterSVG} alt="" />
        </div>
      </div>
    </nav>
  );
};

export default NavMobile;
