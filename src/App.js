import AOS from 'aos';
import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Layout from './pages/Layout/Layout';

function App() {
  AOS.init({ easing: 'ease-in-sine', once: true });

  return (
    <div className="App" id="App">
      <Router>
        <Route path="/" exact>
          <Layout />
        </Route>

        {/* <Route path="/publication">
          <Home>
            <Publication />
          </Home>
          <About />
          <Project />
          <Contact />
        </Route> */}
      </Router>
    </div>
  );
}

export default App;
