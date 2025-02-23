import { useState } from 'react';
import './Button.scss';

const Button = ({ children, textColor, backgroundColor }) => {
  const [isActive, setIsActive] = useState(false);

  const styleDefault = {
    color: textColor,
    background: backgroundColor,
  };

  const styleHovered = {
    color: backgroundColor,
    backgroundColor: textColor,
    outline: `2px solid ${backgroundColor}`,
    cursor: 'pointer',
  };

  return (
    <button
      className="button"
      style={!isActive ? styleDefault : styleHovered}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      {children}
    </button>
  );
};

export default Button;
