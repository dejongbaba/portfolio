import React from 'react';
import PropTypes from 'prop-types';
import './text.scss';

Text.propTypes = {
    text: PropTypes.string,
    type: PropTypes.string.isRequired
};

function Text({text, type, className}) {
    if (type === 'subHeading') {
        return (
            <p className={`header__subheading text__uppercase ${className ? className : null}`}>{text}</p>
        )
    }
    return (
        <h1 className="header__text">
            {text}
        </h1>
    );
}

export default Text;