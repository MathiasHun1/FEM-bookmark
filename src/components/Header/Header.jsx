import './Header.scss';
import bookmark from '../../assets/logo-bookmark.svg';
import { COLORS } from '../../constants';

import Button from '../Button';
import NavList from '../NavList';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logowrapper">
        <img src={bookmark} alt="" className="header__logo" />
      </div>

      <nav className="header__nav">
        <NavList />
        <Button textColor="white" backgroundColor={COLORS.red}>
          LOGIN
        </Button>
      </nav>
    </header>
  );
};

export default Header;
