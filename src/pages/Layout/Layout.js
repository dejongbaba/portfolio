import React from 'react';
import ProfileImage from '../../assets/images/profile-image.jpg';
import './layout.css';

function Layout() {
  return (
    <div className="layout">
      <header className="header-intro">
        <div className="header-write-up">
          {/* name  */}
          <h1>Agunbiade Adedeji</h1>
          <p className="header-subtext">Software Engineer</p>
          <p className="header-subtext">Lagos,Nigeria</p>
        </div>
        <img
          className="header-img"
          src={ProfileImage}
          alt="adedeji"
        />
      </header>
      <section className="about">
        <h2>About</h2>
        <p className="about-subtext">
          {' '}
          I enjoy creating delightful, human-centered digital
          experiences.
        </p>
      </section>
      <section className="contact">
        <h2>Consult me</h2>
        <p className="contact-subtext"> Calendly </p>
      </section>
      <section className="connect">
        <h2 className="connect-header">Connect</h2>
        <div className="icons">
          <a
            href="http://www.instagram.com/lucciddev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-2x fa-instagram" />
          </a>
          <a
            href="https://web.facebook.com/lucciddev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-2x fa-facebook" />
          </a>
          <a
            href="https://twitter.com/lucciddev"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fa fa-2x fa-twitter" />
          </a>
          <a
            href="https://www.linkedin.com/in/adedeji-agunbiade-b27606165/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fa fa-2x fa-linkedin" />
          </a>
          <a
            href="https://github.com/dejongbaba"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fa fa-2x fa-github" />
          </a>
        </div>
      </section>
      <footer className="footer">
        made with <span>&#10084;</span> by Adedeji
      </footer>
    </div>
  );
}

export default Layout;
