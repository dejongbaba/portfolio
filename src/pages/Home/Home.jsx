import React, { useRef } from 'react';
import './Home.scss';
import { Link } from 'react-router-dom';

function Home({ children }) {
  const menu = useRef();
  const hamBurger = useRef();

  const showMenu = () => {
    menu.current.classList.toggle('show');
    hamBurger.current.classList.toggle('active');
  };

  return (
    <div className="home">
      <div className="header">
        <div className="header__nav">
          <div className="header__logo">
            <Link to="/">A.A</Link>
          </div>
          <div className="header__navbar">
            <a href="#about" className="header__navItem">
              About
            </a>
            <a href="#portfolio" className="header__navItem">
              Portfolio
            </a>
            <a href="#contact" className="header__navItem">
              Contact
            </a>
            <Link to="/publication" className="header__navItem">
              Publications
            </Link>
          </div>
          <div
            className="header__hamburger_container"
            onClick={showMenu}
          >
            <button className="header__hamburger" ref={hamBurger} />
          </div>
        </div>
      </div>
      {children}

      <div className="menu" ref={menu}>
        <div className="menu__preview">
          <div className="menu__preview_logo">A.A</div>
        </div>
        <div className="menu__showcase">
          {/*<div className="menu__close" onClick={hideMenu}></div>*/}
          <div className="menu__wrapper">
            <ul className="menu__contact">
              <li className="menu__contact_list">
                <i className="fa fa-address-book" />
                agunbiade.adedeji94@gmail.com
              </li>
              <li className="menu__contact_list">
                <i className="fa  fa-home" />
                80 bola street, Ebute Metta, Lagos
              </li>
              <li className="menu__contact_list">
                <i className="fa fa-phone" />
                +234 816 830 0320
              </li>
            </ul>
            <ul className="menu__items">
              <li className="menu__item">
                <a href="#about" onClick={showMenu}>
                  About
                </a>
              </li>
              <li className="menu__item">
                <a href="#portfolio" onClick={showMenu}>
                  Portfolio
                </a>
              </li>
              <li className="menu__item">
                <a href="#contact" onClick={showMenu}>
                  Contact
                </a>
              </li>
              <li className="menu__item">
                <Link to="/publication">Publication</Link>
              </li>
            </ul>
          </div>
          <ul className="menu__footer">
            <li className="menu__footer_item">
              <a
                href="https://github.com/dejongbaba"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-github" aria-hidden="true" />
                Github
              </a>
            </li>
            <li className="menu__footer_item">
              <a
                href="https://medium.com/techmadeeasy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-medium" /> Medium
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
