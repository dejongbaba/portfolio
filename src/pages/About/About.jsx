import * as React from 'react';
import './About.scss';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

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
        <span className="gradientFade delay1s">Create.</span>{' '}
        <span className="gradientFade delay2s">Solve.</span>
      </h4>
      <a
        href="#contact"
        className="about__button fixed__button button__green"
      >
        Contact Me
      </a>
    </div>
  );
}

export default About;
