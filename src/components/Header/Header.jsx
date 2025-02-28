import bookmark from '../../assets/logo-bookmark.svg';
import hamburger from '../../assets/icon-hamburger.svg';
import { createPortal } from 'react-dom';

import NavList from '../NavList';
import NavMobile from '../NavMobile';
import { useState } from 'react';

const Header = () => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <header className="header">
      <div className="header__inner-wrapper wrapper">
        <div className="logo-bookmark">
          <img src={bookmark} alt="" className="header__logo" />
        </div>

        <nav className="header__nav visible-large">
          <NavList />
          <button className="header__button">LOGIN</button>
        </nav>

        <button
          className="hamburger-button visible-small"
          onClick={() => setIsOpened(true)}
        >
          <img src={hamburger} alt="" />
        </button>
        {createPortal(
          <NavMobile isOpened={isOpened} setIsOpened={setIsOpened} />,
          document.body
        )}
      </div>
    </header>
  );
};

export default Header;
