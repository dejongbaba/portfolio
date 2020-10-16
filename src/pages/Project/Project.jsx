import * as React from 'react';
import './Project.scss';

function Project(props) {
  return (
    <div className="portfolio">
      <div className="portfolio__title">Portfolio</div>
      <div className="portfolio__Heading">Look at my Products</div>

      <div className="portfolio__items">
        <div className="portfolio__item">
          img here
          <h4>Collab Landing Page</h4>
          <p> Ui/Kit Coded Template</p>
        </div>
      </div>
    </div>
  );
}

export default Project;
