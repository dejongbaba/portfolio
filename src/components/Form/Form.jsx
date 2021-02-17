import React from 'react';
import PropTypes from 'prop-types';
import './Form.scss';
import Spinner from '../Spinner/Spinner';

const Input = React.forwardRef(
  ({ name, type, className, value, icon, placeHolder }, ref) => {
    return (
      <div className="contacts__field">
        <div className="field__wrap">
          <input
            ref={ref}
            className={`field__input ${className}`}
            type={type}
            name={name}
            value={value}
            placeholder={placeHolder}
          />
          <div className="field__icon">{icon}</div>
        </div>
      </div>
    );
  },
);

const Option = ({ title, value }) => {
  return <option value={value}>{title}</option>;
};

const Select = ({ name, children }) => {
  return (
    <div className="contacts__field field">
      <div className="field__wrap">
        <select className="field__select" name={name}>
          {React.cloneElement(children)}

          <option>What are you working on? 2</option>
        </select>
        <div className="field__icon">
          <svg className="icon icon-arrows">
            {/*<use xlink:href="img/sprite.svg#icon-arrows" />*/}
          </svg>
        </div>
      </div>
    </div>
  );
};

const Form = ({ children, onSubmit }) => {
  return (
    <div data-aos="fade-in" data-aos-delay="1500">
      <form onSubmit={onSubmit} className="contacts__form">
        {children}
      </form>
    </div>
  );
};

const Button = ({ text, type, className, loading }) => {
  return (
    <div className={`${className}`}>
      {(loading && <Spinner />) || (
        <button className="about__button button__green" type={type}>
          <span className="btn__text">{text}</span>
        </button>
      )}
    </div>
  );
};

const TextArea = React.forwardRef(({ name, value }, ref) => {
  return (
    <div className="contacts__field field field_textarea">
      <div className="field__wrap">
        <textarea
          value={value}
          ref={ref}
          className="field__textarea"
          name={name}
          placeholder="Message"
        />
      </div>
    </div>
  );
});

Form.Option = Option;
Form.Select = Select;
Form.Input = Input;
Form.TextArea = TextArea;
Form.Button = Button;

Form.propTypes = {
  text: PropTypes.string,
};

export default Form;
