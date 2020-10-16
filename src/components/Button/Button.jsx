import * as React from 'react';
import './Button.scss';

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

export default Button;
