import bookmark from '../../assets/logo-bookmark.svg';
import hamburger from '../../assets/icon-hamburger.svg';

import NavList from '../NavList';

const Header = () => {
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

        <div className="visible-small">
          <img src={hamburger} alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;
