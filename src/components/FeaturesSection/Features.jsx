import './Features.scss';
import { useEffect, useState } from 'react';

import Illustration from '../Illustration';
import bookmarkSVG from '../../assets/illustration-features-tab-1.svg';
import searchSVG from '../../assets/illustration-features-tab-2.svg';
import shareSVG from '../../assets/illustration-features-tab-3.svg';

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
        <h2 className="features-section__header__title">Features</h2>
        <p className="features-section__header__para">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>

      <div className="features-section__stepper">
        <button
          id="bookmark"
          className={`stepper__option-text ${
            document.getElementById('bookmark') === activeButton ? 'active' : ''
          }`}
          data-position="-100"
          onClick={handleStepperClick}
        >
          Simple Bookmarking
        </button>
        <button
          id="search"
          className={`stepper__option-text ${
            document.getElementById('search') === activeButton ? 'active' : ''
          }`}
          data-position="0"
          onClick={handleStepperClick}
        >
          Speedy Searching
        </button>
        <button
          id="share"
          className={`stepper__option-text ${
            document.getElementById('share') === activeButton ? 'active' : ''
          }`}
          onClick={handleStepperClick}
          data-position="100"
        >
          Easy Sharing
        </button>

        <div className="stepper__marker" style={stepperStyle}></div>
      </div>

      {activeFeature === 'bookmark' && (
        <div className="features-section__grid">
          <Illustration
            image={bookmarkSVG}
            direction="left"
            imageStyle={{ marginTop: '3vw', marginBottom: '8vw' }}
          />
          <div className="grid__text">
            <h2 className="feature__title">Bookmark in one click</h2>
            <p className="feature__para">
              Organize your bookmarks however you like. Our simple drag-and-drop
              interface gives you complete control over how you manage your
              favourite sites.
            </p>
          </div>
        </div>
      )}

      {activeFeature === 'search' && (
        <div className="features-section__grid ">
          <Illustration
            image={searchSVG}
            direction="left"
            imageStyle={{ marginTop: '3vw', marginBottom: '5vw' }}
          />
          <div className="grid__text">
            <h2 className="feature__title">Intelligent search</h2>
            <p className="feature__para">
              Our powerful search feature will help you find saved sites in no
              time at all. No need to trawl through all of your bookmarks.
            </p>
          </div>
        </div>
      )}

      {activeFeature === 'share' && (
        <div className="features-section__grid">
          <Illustration
            image={shareSVG}
            direction="left"
            imageStyle={{ marginTop: '3vw', marginBottom: '5vw' }}
          />
          <div className="grid__text">
            <h2 className="feature__title">Share your bookmarks</h2>
            <p className="feature__para">
              Easily share your bookmarks and collections with others. Create a
              shareable link that you can send at the click of a button
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Features;
