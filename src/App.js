import React from 'react';
import './App.scss';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Project from './pages/Project/Project';
import AOS from 'aos';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { init } from 'emailjs-com';
import { ToastProvider } from 'react-toast-notifications';
import Publication from './pages/Publication/Publication';

function App() {
  AOS.init({ easing: 'ease-in-sine', once: true });
  init(process.env.REACT_APP_EMAIL_ID);
  return (
    <ToastProvider>
      <div className="App">
        <Router>
          <Route path="/" exact>
            <Home>
              <div className="header__welcome_text">
                <p
                  className="header__title"
                  data-aos-delay="500"
                  data-aos="transform"
                >
                  Hi there,
                </p>
                <div className="header__text_description">
                  <span data-aos-delay="600" data-aos="transform">
                    I'm Adedeji
                  </span>
                  <span data-aos-delay="700" data-aos="transform">
                    A frontend Engineer
                  </span>
                  <span data-aos-delay="800" data-aos="transform">
                    In Lagos, Nigeria
                  </span>
                </div>
              </div>
              <div
                className="header__avatar_showcase"
                data-aos="animation-translate-y"
                data-aos-delay="1000"
              >
                <img
                  src={require('./assets/images/pp.jpeg')}
                  alt="avatar"
                />
              </div>
            </Home>
            <About />
            <Project />
            <Contact />
          </Route>

          <Route path="/publication">
            <Home>
              <Publication />
            </Home>
            <About />
            <Project />
            <Contact />
          </Route>
        </Router>
      </div>
    </ToastProvider>
  );
}

export default App;
