import './Extensions.scss';
import chromeSVG from '../../assets/logo-chrome.svg';
import firefoxSVG from '../../assets/logo-firefox.svg';
import operaSVG from '../../assets/logo-opera.svg';
import dottedLine from '../../assets/bg-dots.svg';

import Button from '../Button';
import { COLORS } from '../../constants';

const cards = [
  {
    image: chromeSVG,
    name: 'Chrome',
    version: '62',
  },
  {
    image: firefoxSVG,
    name: 'Firefox',
    version: '55',
  },
  {
    image: operaSVG,
    name: 'Opera',
    version: '46',
  },
];

const Extensions = () => {
  return (
    <section className="extensions">
      <div className="extensions__text-section">
        <h2 className="extensions__title">Download the extension</h2>
        <p className="extension__para">
          We’ve got more browsers in the pipeline. Please do let us know if
          you’ve got a favourite you’d like us to prioritize.
        </p>
      </div>

      <div className="extensions__card-section">
        {cards.map((card) => (
          <Card key={card.name} {...card} />
        ))}
      </div>
    </section>
  );
};

const Card = ({ image, name, version }) => {
  return (
    <div className="card">
      <div className="card-image__wrapper">
        <img src={image} alt="" />
      </div>

      <div className="card__text-container">
        <h3 className="card__title">Add to {name}</h3>
        <p className="card__para">Minimum version {version}</p>
      </div>

      <div className="dotted-line">
        <img src={dottedLine} alt="" />
      </div>

      <Button
        textColor={COLORS.white}
        backgroundColor={COLORS.blue}
        uniqueStyle={{ paddingInline: 0, width: '100%' }}
      >
        Add & Install Extension
      </Button>
    </div>
  );
};

export default Extensions;
