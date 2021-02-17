import * as React from 'react';
import './Publication.scss';

function Publication() {
  return (
    <div className="publication">
      <div>
        <h1 data-aos="animation-translate-y" data-aos-delay="300">
          Articles
        </h1>
        <p
          className="mb-3"
          data-aos="animation-translate-y"
          data-aos-delay="500"
        >
          Everything I've ever written. These topics always involves
          tools I use in my everyday development — whether at work,
          for a client, open-source, or my own personal projects.
        </p>
      </div>
      <div className="articles">
        <div
          className="articleCard"
          data-aos-delay="500"
          data-aos="transform"
        >
          <h2 className="site">
            <span className="siteTitle">Dev.to</span>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://dev.to/lucciddev"
              className="sitelink"
            >
              More on Devto
            </a>
          </h2>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://dev.to/lucciddev/getting-started-with-react-context-mc7"
            className="title"
          >
            Getting started with React Context.
          </a>
        </div>
        <div
          className="articleCard"
          data-aos-delay="600"
          data-aos="transform"
        >
          <h2 className="site">
            <span className="siteTitle">Medium</span>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://medium.com/@agunbiade.adedeji94"
              className="sitelink"
            >
              More on Medium
            </a>
          </h2>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://dev.to/lucciddev/getting-started-with-react-context-mc7"
            className="title"
          >
            Still Working on this Articles
          </a>
        </div>

        <div
          className="articleCard"
          data-aos-delay="800"
          data-aos="transform"
        >
          <h2 className="site">
            <span className="siteTitle">HashNode</span>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://hashnode.com/@lucciddev"
              className="sitelink"
            >
              More on Hashnode
            </a>
          </h2>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://dev.to/lucciddev/getting-started-with-react-context-mc7"
            className="title"
          >
            Still Working on this Articles
          </a>
        </div>
      </div>
    </div>
  );
}

export default Publication;
