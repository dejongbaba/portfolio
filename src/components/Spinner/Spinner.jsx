import * as React from 'react';
import './Spinner.scss';

function Spinner({ className }) {
  return <div className={`spinner ${className ? className : ''}`} />;
}

export default Spinner;
