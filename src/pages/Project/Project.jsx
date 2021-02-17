import * as React from 'react';
import './Project.scss';

function Project() {
  return (
    <div className="portfolio" id="portfolio">
      <div className="portfolio__title">Portfolio</div>
      <div className="portfolio__Heading">Look at my Projects</div>

      <div className="portfolio__items">
        <div
          data-aos-delay="100"
          data-aos="fade-up"
          className="portfolio__item"
        >
          <a
            href="https://mybackupcash.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require('../../assets/images/backupcash.png')}
              alt="build co"
            />
            <div className="portfolio__item_body">
              <h4>My Backup Cash App</h4>
              <p> An application for savings and investment</p>
            </div>
          </a>
        </div>
        <div
          data-aos-delay="100"
          data-aos="fade-up"
          className="portfolio__item"
        >
          <a
            href="https://stage-insurance.kobosafe.kobo360.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require('../../assets/images/kobosafe.png')}
              alt="build co"
            />
            <div className="portfolio__item_body">
              <h4>KoboSafe Insurance App</h4>
              <p>
                An Application for managing insurances and requirement
              </p>
            </div>
          </a>
        </div>

        <div
          data-aos-delay="200"
          data-aos="fade-up"
          className="portfolio__item"
        >
          <a
            href="https://myedusponsor.com/"
            target="-_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require('../../assets/images/edusponsor.png')}
              alt="edusponsor "
            />
            <div className="portfolio__item_body">
              <h4>Edu Sponsor Educational App</h4>
              <p>
                An application that gives students eligibility to
                sponsorships
              </p>
            </div>
          </a>
        </div>

        <div
          data-aos-delay="300"
          data-aos="fade-up"
          className="portfolio__item"
        >
          <a
            href="https://paymybills.ng/"
            target="-_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require('../../assets/images/paymybils.png')}
              alt="paymybills"
            />
            <div className="portfolio__item_body">
              <h4>Paymybills Fintech App</h4>
              <p>
                {' '}
                Application that allows user to pay bills at ease
              </p>
            </div>
          </a>
        </div>

        <div
          data-aos-delay="400"
          data-aos="fade-up"
          className="portfolio__item"
        >
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://patek.netlify.com/"
          >
            <img
              src={require('../../assets/images/patek.png')}
              alt="patek"
            />

            <div className="portfolio__item_body">
              <h4>Patek Agricultural App</h4>
              <p> A website for an Agricultural investment firm</p>
            </div>
          </a>
        </div>

        <div
          data-aos-delay="400"
          data-aos="fade-up"
          className="portfolio__item"
        >
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://yellostar-staging.humbergames.com/"
          >
            <img
              src={require('../../assets/images/yellostargames.png')}
              alt="yello star games"
            />

            <div className="portfolio__item_body">
              <h4>MTN Yello Star Games</h4>
              <p>
                {' '}
                A Web Game platform in which subscribed users can play
                trivia, predictions and more{' '}
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
