import * as React from 'react';
import './About.scss';
import Button from '../../components/Button/Button';

function About(props) {
  return (
    <div className="about">
      <p className="about__text">What I do</p>
      <p className="about__text_description">
        I enjoy creating delightful, human-centered digital
        experiences.
      </p>
      <h4 className="about__text_motto">Think. Make. Solve</h4>
      <Button />
      <div className="about__subsection">
        <div className="detail__item">
          <div className="detail__preview">{/*    Image here*/}</div>
          <p className="detail__category">User Interface</p>
          <p className="detail__text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Adipisci aperiam, aspernatur atque commodi cum deserunt
            dolorem eos ex fugit id impedit, iure maxime molestiae
            numquam officia placeat, tempora tenetur velit?
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
