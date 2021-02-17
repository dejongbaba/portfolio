import * as React from 'react';
import './Button.scss';
import PropTypes from 'prop-types';

function Button(props) {
  return (
    <button
      type={props.type}
      className={props.className}
      onClick={(e) => props.onClick && props.onClick(e)}
    >
      {props.loading ? '...loading' : <p>{props.title}</p>}
      {props.icon && <img src={props.icon} alt="icon-button" />}
    </button>
  );
}

Button.PropType = {
  type: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
