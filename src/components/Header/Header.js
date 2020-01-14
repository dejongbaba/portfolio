import React from 'react';
import './Header.scss';

Header.propTypes = {};

function Header({children}) {
    return (
        <>
            <div className="header">
                {children}
            </div>
        </>
    );
}

export default Header;