import { useState } from 'react';

import bookmarkSVG from '../../assets/illustration-features-tab-1.svg';
import searchSVG from '../../assets/illustration-features-tab-2.svg';
import shareSVG from '../../assets/illustration-features-tab-3.svg';

const data = {
  bookmark: {
    image: bookmarkSVG,
    title: 'Bookmark in one click',
    text: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
  },
  search: {
    image: searchSVG,
    title: 'Intelligent search',
    text: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
  },
  share: {
    image: shareSVG,
    title: 'Share your bookmarks',
    text: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button',
  },
};

const Features = () => {
  const [activeButton, setActiveButton] = useState('search');
  const [activeFeature, setActiveFeature] = useState('search');
  const [stepperStyle, setStepperStyle] = useState({
    transform: ' translateX(0%)',
  });

  const handleStepPosition = (e) => {
    const position = e.target.dataset.position;
    setStepperStyle({ transform: `translateX(${position}%)` });
  };

  const handleStepperClick = (e) => {
    handleStepPosition(e);

    const clickedButton = e.target;
    const featureName = e.target.id;

    setActiveButton(clickedButton);
    setActiveFeature(featureName);
  };

  return (
    <section className="features-section">
      <div className="features-section__header">
        <h2 className="features-section__header-title title-small">Features</h2>
        <p className="features-section__header-para">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>

      <div className="features-section__stepper">
        <button
          id="bookmark"
          className={`stepper__option-button ${
            document.getElementById('bookmark') === activeButton ? 'active' : ''
          }`}
          data-position="-100"
          onClick={handleStepperClick}
        >
          Simple Bookmarking
        </button>
        <button
          id="search"
          className={`stepper__option-button ${
            document.getElementById('search') === activeButton ? 'active' : ''
          }`}
          data-position="0"
          onClick={handleStepperClick}
        >
          Speedy Searching
        </button>
        <button
          id="share"
          className={`stepper__option-button ${
            document.getElementById('share') === activeButton ? 'active' : ''
          }`}
          onClick={handleStepperClick}
          data-position="100"
        >
          Easy Sharing
        </button>

        <div className="stepper__marker" style={stepperStyle}></div>
      </div>

      <div className="features-section__grid">
        <div className="grid__image">
          <img src={data[activeFeature].image} alt="" />
        </div>

        <div className="grid__text">
          <h2 className="feature__title title-small">
            {data[activeFeature].title}
          </h2>
          <p className="feature__para">{data[activeFeature].text}</p>
          <button className="feature__button">More Info</button>
        </div>
      </div>
    </section>
  );
};

export default Features;
