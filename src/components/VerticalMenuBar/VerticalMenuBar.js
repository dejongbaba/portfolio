import React from 'react';
import PropTypes from 'prop-types';
import './VerticalMenuBar.scss';

VerticalMenuBar.propTypes = {
    items: PropTypes.array.isRequired
};

function VerticalMenuBar({items}) {
    return (
        <div className="l_vertical-menu-bar">
            {items.length && items.map(item =>
                <a className={'l_vertical-menu-link'} target='_blank' href={item.url}>
                    <i className={item.icon}/>
                </a>)}
        </div>
    );
}

export default VerticalMenuBar;