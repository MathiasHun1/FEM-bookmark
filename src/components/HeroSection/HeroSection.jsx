import heroSVG from '../../assets/illustration-hero.svg';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-section__text-container">
        <h1 className="hero-section__title  title-big">
          A Simple Bookmark Manager
        </h1>
        <p className="hero-section__para">
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="hero-section__buttons">
          <button className="hero-section__chrome-button">
            Get it on Chrome
          </button>
          <button className="hero-section__firefox-button">
            Get it on Firefox
          </button>
        </div>
      </div>
      <div className="hero-section__image_container">
        <div className="hero-section__image-wrapper">
          <img src={heroSVG} alt="" className="image_1" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
