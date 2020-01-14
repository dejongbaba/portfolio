import React, {useState} from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import VerticalMenuBar from "./components/VerticalMenuBar/VerticalMenuBar";
import Slider from "./components/Slider/Slider";
import bannerOne from './assets/images/backupcash.png';
import bannerTwo from './assets/images/buildco.png';
import bannerThree from './assets/images/paymybils.png';
import bannerFour from './assets/images/patek.png';
import bannerFive from './assets/images/edusponsor.png';
import portfolioImage from './assets/images/banner-four.jpg';
import Footer from "./components/Footer/Footer";


function App() {

  const [appState, setAppState] = useState({
    navLinks: [
      {name: 'home', url: '/'},
      {name: 'about', url: '#about'},
      {name: 'portfolio', url: '#portfolio'},
      {name: 'testimonial', url: '#testimonial'},
      {name: 'contact', url: '#contact'}
    ],
    verticalLinks: [
      {name: 'github', url: 'http://www.github.com/dejongbaba', icon: 'fa fa-2x fa-github'},
      {name: 'facebook', url: 'http://www.facebook.com/dejonkotee', icon: 'fa fa-2x fa-facebook-square'},
      {name: 'twitter', url: 'http://www.twitter.com/lucciideas', icon: 'fa  fa-2x fa-twitter'},
      {name: 'instagram', url: 'http://www.instagram.com/lucciideas', icon: 'fa fa-2x fa-instagram'},
    ],
    portfolioImages: [
      {image: bannerOne, title: 'Backup Cash', url: 'http://mybackupcash.ng'},
      {image: bannerTwo, title: 'Build Co', url: 'http://buildo.herokuapp.com'},
      {image: bannerThree, title: 'PayMyBills Ng', url: 'http://paymybills.ng'},
      {image: bannerFour, title: 'Patek', url: 'http://patek.netlify.com'},
      {image: bannerFive, title: 'Edu Sponsor', url: 'http://afriedu.herokuapp.com'},
    ],
    portfolio: {
      title: 'our feature works',
      subHeading: 'feel the world',
      items: [1, 3, 4, 5, 6, 7]
    },
    footerText: ' Designed by Agunbiade Adedeji '
  });
  const [swiper, updateSwiper] = useState(null);

  const goNext = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };

  const {navLinks, verticalLinks, sliderItems, portfolioImages, footerText} = appState;
  return (
      <div className="App">
        <Header>
          <Slider next={goNext} updateSwiper={updateSwiper} items={sliderItems} navLinks={navLinks}>
            <div className='slider_item'>
              <p className={'slider_item-title'}>{'Software Engineer based in lagos nigeria'}</p>
              <h6 className={'slider_item-subject'}>{'i\'m Adedeji Agunbiade'}</h6>
              <a onClick={goNext} className={'slider_button pink'}>Know me better</a>
            </div>
            <div className='slider_item'>
              <div className="about_section">
                <div className="about-image">
                  <img src={portfolioImage} alt="portfolio image"/>
                </div>
                <div className="about-description">
                  <h6><b>I'm a javscript specialist</b></h6>
                  <p>I'm passion passionate about technology, design, music, entertainment and pop culture.
                  When i'm not coding i'm either learning new updates on my tech stack or listening to cool vibes. </p>
                  <a onClick={goNext} className={'slider_button pink'}>View My Portfolio</a>
                </div>
              </div>
            </div>
            <div className='slider_item'>
              <div className="portfolio_section">
                {portfolioImages && portfolioImages.length ?
                    portfolioImages.map((i) =>
                        <div className="portfolio_card"
                             style={{backgroundImage: `url(${i.image})`, backgroundSize: 'cover'}}>
                          <div className="portfolio_description">
                            <h1>{i.title}</h1>
                            <a target='_blank' href={i.url}>View {i.title}</a>
                          </div>
                        </div>)
                    : null}
                <div className="portfolio_card last_item">
                  <a onClick={goNext} className={'slider_button pink'}>Contact Me</a>
                </div>
              </div>
            </div>
            <div className='slider_item'>
              <p className={'slider_item-title'}>I'm available for new project ideas</p>
              <h6 className={'slider_item-subject'}>Send me an Email</h6>
              <a href="mailto:agunbiade.adedeji94@gmail.com?Subject=Hello%20Lucciideas" target="_top"
                 className={'slider_button pink'}>Send Mail</a>
            </div>
          </Slider>
          <VerticalMenuBar items={verticalLinks}/>
          <Footer text={footerText}/>
        </Header>

      </div>
  );
}

export default App;
