import * as React from 'react';
import './ErrorLabel.scss';
import PropTypes from 'prop-types';

function ErrorLabel(props) {
  return (
    <div className={'errorLabel ' + props.className}>
      {props.error}
    </div>
  );
}

ErrorLabel.PropType = {
  error: PropTypes.string,
  className: PropTypes.string,
};

export default ErrorLabel;
