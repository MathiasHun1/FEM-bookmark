import './Header.scss';
import bookmark from '../../assets/logo-bookmark.svg';
import { COLORS } from '../../constants';

import Button from '../Button';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logowrapper">
        <img src={bookmark} alt="" className="header__logo" />
      </div>

      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__list-item">
            <a className="header__link" href="">
              features
            </a>
          </li>
          <li className="header__list-item">
            <a href="" className="header__link">
              pricing
            </a>
          </li>
          <li className="header__list-item">
            <a href="" className="header__link">
              contacts
            </a>
          </li>
        </ul>
        <Button textColor="white" backgroundColor={COLORS.red}>
          LOGIN
        </Button>
      </nav>
    </header>
  );
};

export default Header;
