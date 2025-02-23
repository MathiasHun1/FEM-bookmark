import './Illustration.scss';

import React from 'react';

const Illustration = ({ image, direction, imageStyle }) => {
  if (!['left', 'right'].includes(direction)) {
    throw new Error('missing or invalid direction in illustration component!');
  }

  const style = {};

  if (direction === 'left') {
    style.right = '30%';
  } else if (direction === 'right') {
    style.left = '30%';
  }

  return (
    <div className="illustration-container">
      <div className="illustration__image" style={imageStyle}>
        <img src={image} alt="illustration image" />
      </div>
      <div className="illustration__decor" style={style}></div>
    </div>
  );
};

export default Illustration;
