import './FAQSection.scss';
import arrowSVG from '../../assets/icon-arrow.svg';

import ListItem from '../ListItem';
import Button from '../Button';
import { COLORS } from '../../constants';

const FAQSection = () => {
  return (
    <section className="faq-section">
      <div className="faq-section__text-container">
        <h2 className="faq-section__title">Frequently Asked Questions</h2>
        <p className="faq-section__para">
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </p>
      </div>

      <ul className="faq-section__questions-list">
        <ListItem
          titleText="What is Bookmark?"
          paraText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum
            quis quam ornare mattis."
        />

        <ListItem
          titleText="How can I request a new browser?"
          paraText="Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,
            ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros
            aliquet convallis ultricies. Mauris augue massa, ultricies non
            ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis
            ultricies. Mauris augue massa, ultricies non ligula. Suspendisse
            imperdiet."
        />

        <ListItem
          titleText="Is there a mobile app?"
          paraText="Sed consectetur quam id neque fermentum accumsan. Praesent luctus
            vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula
            quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin
            ex et ultricies bibendum."
        />

        <ListItem
          titleText="What about other Chromium browsers?"
          paraText="Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at
    euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut
    velit. "
        />
      </ul>

      <Button textColor={COLORS.white} backgroundColor={COLORS.blue}>
        More Info
      </Button>
    </section>
  );
};

export default FAQSection;
