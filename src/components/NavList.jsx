import './NavList.scss';

const NavList = () => {
  return (
    <ul className="nav__list">
      <li className="nav__list-item">
        <a className="nav__link" href="">
          FEATURES
        </a>
      </li>
      <li className="nav__list-item">
        <a href="" className="nav__link">
          PRICING
        </a>
      </li>
      <li className="nav__list-item">
        <a href="" className="nav__link">
          CONTACTS
        </a>
      </li>
    </ul>
  );
};

export default NavList;
