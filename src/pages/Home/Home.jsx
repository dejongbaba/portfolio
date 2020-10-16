import React, { useRef } from 'react';
import './Home.scss';

function Home(props) {
  const menu = useRef();

  const showMenu = () => {
    menu.current.setAttribute(
      'style',
      'opacity:1;visibility:visible;',
    );
  };

  const hideMenu = () => {
    menu.current.setAttribute(
      'style',
      'opacity:0;visibility:hidden;',
    );
  };

  return (
    <div className="home">
      <div className="header">
        <div className="header__nav">
          <div className="header__logo">A.A</div>
          <div className="header__navbar">
            <div className="header__navItem">Dribble</div>
            <div className="header__navItem">Instagram</div>
          </div>
          <div
            className="header__hamburger_container"
            onClick={showMenu}
          >
            <div className="header__hamburger" />
          </div>
        </div>
      </div>
      <div className="header__welcome_text">
        <p
          className="header__title"
          data-aos-delay="500"
          data-aos="transform"
        >
          Agunbiade Adedeji
        </p>
        <div className="header__text_description">
          <span data-aos-delay="1000" data-aos="transform">
            Hi, My name is Adedeji
          </span>
          <span data-aos-delay="1500" data-aos="transform">
            I'm a frontend Engineer from{' '}
          </span>
          <span data-aos-delay="2000" data-aos="transform">
            Lagos,Nigeria
          </span>
        </div>
      </div>
      <div className="header__avatar_showcase">
        <img
          src={require('../../assets/images/myAvatar.svg')}
          alt="avatar image"
        />
      </div>
      <div className="menu" ref={menu}>
        <div className="menu__preview">
          <div className="menu__preview_logo">A.A</div>
        </div>
        <div className="menu__showcase">
          <div className="menu__close" onClick={hideMenu}></div>
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
              <li className="menu__item">About</li>
              <li className="menu__item">Project</li>
              <li className="menu__item">Blog</li>
              <li className="menu__item">Contact</li>
            </ul>
          </div>
          <ul className="menu__footer">
            <li className="menu__footer_item">
              <i className="fa fa-dribble" /> Dribble
            </li>
            <li className="menu__footer_item">
              <i className="fa fa-instagram" /> Instagram
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
