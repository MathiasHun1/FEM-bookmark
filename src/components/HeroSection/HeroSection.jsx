import './HeroSection.scss';
import { COLORS } from '../../constants';
import heroSVG from '../../assets/illustration-hero.svg';

import Button from '../Button';
import Illustration from '../Illustration';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-section__text-container">
        <h1 className="hero-section__title">A Simple Bookmark Manager</h1>
        <p className="hero-section__para">
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="hero-section__buttons">
          <Button textColor={COLORS.white} backgroundColor={COLORS.blue}>
            Get it on Chrome
          </Button>
          <Button
            textColor={COLORS.darkGrey_0_75}
            backgroundColor={COLORS.lightGrey}
          >
            Get it on Firefox
          </Button>
        </div>
      </div>
      <Illustration image={heroSVG} direction="right" />
    </section>
  );
};

export default HeroSection;
