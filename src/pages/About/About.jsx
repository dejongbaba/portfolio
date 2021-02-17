import * as React from 'react';
import './About.scss';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';

function About() {
  return (
    <div className="about" id="about">
      <p className="about__text">What I do</p>
      <p className="about__text_description">
        I enjoy creating delightful, human-centered digital
        experiences.
      </p>
      <h4 className="about__text_motto">
        <span className="gradientFade">Think.</span>
        <span className="gradientFade delay1s">Make.</span>{' '}
        <span className="gradientFade delay2s">Solve</span>
      </h4>
      <a href="#contact" className="about__button button__green">
        Contact Me
      </a>

      <OwlCarousel
        className="about__subsection"
        nav
        items={3}
        margin={10}
      >
        <div className="detail__item">
          <div className="detail__preview">
            <img
              src={require('../../assets/images/banner-five.jpg')}
              alt=""
            />
          </div>
          <p className="detail__category">User Interface</p>
          <p className="detail__text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Adipisci aperiam, aspernatur atque commodi cum deserunt
            dolorem eos ex fugit id impedit, iure maxime molestiae
            numquam officia placeat, tempora tenetur velit?
          </p>
          <button className="button button__deep_blue">
            Show Me
          </button>
        </div>
        <div className="detail__item">
          <div className="detail__preview">
            <img
              src={require('../../assets/images/banner-one.jpg')}
              alt=""
            />
          </div>
          <p className="detail__category">User Interface</p>
          <p className="detail__text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Adipisci aperiam, aspernatur atque commodi cum deserunt
            dolorem eos ex fugit id impedit, iure maxime molestiae
            numquam officia placeat, tempora tenetur velit?
          </p>
          <button className="button button__green">Show Me</button>
        </div>
        <div className="detail__item">
          <div className="detail__preview">
            <img
              src={require('../../assets/images/banner-one.jpg')}
              alt=""
            />
          </div>
          <p className="detail__category">User Interface</p>
          <p className="detail__text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Adipisci aperiam, aspernatur atque commodi cum deserunt
            dolorem eos ex fugit id impedit, iure maxime molestiae
            numquam officia placeat, tempora tenetur velit?
          </p>
          <button className="button button__deep_blue">
            Show Me
          </button>
        </div>
      </OwlCarousel>
    </div>
  );
}

export default About;
