import React from 'react';
import PropTypes from 'prop-types';
import './Footer.scss';

const Footer = ({text}) => {
    return (
        <div className={'footer'}>
            {text} &copy; copyright 2020. All rights reserved.
        </div>
    );
};

Footer.propTypes = {
    text: PropTypes.string
};

export default Footer;