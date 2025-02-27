import { useState } from 'react';
import { COLORS } from '../constants';

const ListItem = ({ titleText, paraText }) => {
  const [isOpened, setIsOpened] = useState(false);
  const [isHovered, setIshovered] = useState(false);

  const titleStyle = {
    color: isHovered ? COLORS.red : '',
  };

  return (
    <li className="faq-section__list-item">
      <div
        className="list-item__flex-container"
        onClick={() => setIsOpened(!isOpened)}
        onMouseEnter={() => setIshovered(true)}
        onMouseLeave={() => setIshovered(false)}
      >
        <h4 className="list-item__title" style={{ ...titleStyle }}>
          {titleText}
        </h4>
        <div
          className={`list-item__icon ${
            isOpened ? 'list-item__icon-opened' : ''
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
            <path fill="none" strokeWidth="3" d="M1 1l8 8 8-8" />
          </svg>
        </div>
      </div>
      <p
        className={`list-item__para ${
          isOpened ? 'list-item__para-opened' : ''
        }`}
      >
        <br />
        {paraText}
      </p>
    </li>
  );
};

export default ListItem;
