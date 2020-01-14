import React from 'react';
import './navigation.scss';
import PropTypes from 'prop-types';

Navigation.propTypes = {
    links: PropTypes.array.isRequired,
    brandImage: PropTypes.string
};

function Navigation({brandImage, links}) {
    return (
        <div className={'l_nav l_nav-fixed'}>
            <a className={'l_nav_brand'} href="#">{brandImage ? <img src={brandImage} alt=""/> : 'A.A'}</a>
            <div className="l_nav_menu">
                {links.length && links.map(link => <a className={'l_nav_menu-link'} href={link.url}>{link.name}</a>)}
            </div>
        </div>
    );
}


export default Navigation;