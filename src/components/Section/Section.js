import React from 'react';
import PropTypes from 'prop-types';
import './Section.scss';

Section.propTypes = {

};

function Section({children}) {
    return (
        <div className={'section'}>
            {children}
        </div>
    );
}

export default Section;