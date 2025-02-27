import { useState } from 'react';

const ContactSection = () => {
  const [inputValue, setInputValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const result = pattern.test(inputValue);

    if (!result) {
      setIsValid(false);

      setTimeout(() => {
        setIsValid(true);
      }, 2000);
    }
  };

  return (
    <section className="contact-section">
      <div className="container">
        <p className="contact-section__streched">35,000+ already joined</p>
        <h2 className="contact-section__title">
          Stay up-to-date with what we’re doing
        </h2>
        <form className="contact-section__form" onSubmit={handleSubmit}>
          <div className="input__wrapper">
            <input
              className={`form__input-field ${
                !isValid ? 'input-error-visible' : ''
              }`}
              type="text"
              value={inputValue}
              onChange={handleChange}
            />
            <p
              className={`input__error-message ${
                !isValid ? 'error-message-visible' : ''
              }`}
            >
              whoops, make sure it's an email
            </p>
          </div>
          <button className="contact-section__button">Contact Us</button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
