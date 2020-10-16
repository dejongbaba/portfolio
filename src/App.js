import React from 'react';
import './App.scss';
// import bannerOne from './assets/images/backupcash.png';
// import bannerTwo from './assets/images/buildco.png';
// import bannerThree from './assets/images/paymybils.png';
// import bannerFour from './assets/images/patek.png';
// import bannerFive from './assets/images/edusponsor.png';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Project from './pages/Project/Project';
import Blog from './pages/Blog/Blog';
import AOS from 'aos';

// const useProfileLinks = () => {
//   const[navLinks] = useState([
//     {
//       name: "github",
//       url: "http://www.github.com/dejongbaba",
//       icon: "fa fa-1x fa-github ",
//     },
//     {
//       name: "facebook",
//       url: "http://www.facebook.com/dejonkotee",
//       icon: "fa fa-1x fa-facebook-square ",
//     },
//     {
//       name: "twitter",
//       url: "http://www.twitter.com/lucciideas",
//       icon: "fa fa-1x fa-twitter ",
//     },
//     {
//       name: "instagram",
//       url: "http://www.instagram.com/lucciideas",
//       icon: "fa fa-1x fa-instagram ",
//     },
//   ])
//
//   return [navLinks]
//
// }

function App() {
  // const [appState] = useState({
  //   navLinks: [
  //     { name: 'home', url: '/' },
  //     { name: 'about', url: '#about' },
  //     { name: 'portfolio', url: '#portfolio' },
  //     { name: 'testimonial', url: '#testimonial' },
  //     { name: 'blog', url: '#blog' },
  //     { name: 'contact', url: '#contact' },
  //   ],
  //   portfolioImages: [
  //     {
  //       image: bannerOne,
  //       title: 'Backup Cash',
  //       url: 'http://mybackupcash.ng',
  //     },
  //     {
  //       image: bannerTwo,
  //       title: 'Build Co',
  //       url: 'http://buildo.herokuapp.com',
  //     },
  //     {
  //       image: bannerThree,
  //       title: 'PayMyBills Ng',
  //       url: 'http://paymybills.ng',
  //     },
  //     {
  //       image: bannerFour,
  //       title: 'Patek',
  //       url: 'http://patek.netlify.com',
  //     },
  //     {
  //       image: bannerFive,
  //       title: 'Edu Sponsor',
  //       url: 'http://afriedu.herokuapp.com',
  //     },
  //   ],
  //   portfolio: {
  //     title: 'our feature works',
  //     subHeading: 'feel the world',
  //     items: [1, 3, 4, 5, 6, 7],
  //   },
  //   footerText: ' Designed by Agunbiade Adedeji ',
  // });
  AOS.init();

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/project" component={Project} />
          <Route path="/blog" component={Blog} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
      {/* TODO 
        
        * add icons to social media
        * style Icons - active/hover states gray/black
        * Build Hamburger
        * Build Slide menu 
        * add contact , email and address information and social icons
        * add menu list
        * Add logo side reveiw
        * Add dev name with predefined line  - blue
        * Add greetings to Dev - Hello, my name is Agunbiade Adedeji, I'm a Web Developer - black
        * Add Parallax Animation with Profile Image
        * build Services Section - carousel
        * add what i do title - with blue color
        * add brief description of what I do  - black
        * Add Big text words think, solve, build with cta button -blue 
        * add parallax background
        * add card with buttons to the services i render , user interface, user experience, Ui design kit
        * add call to action button
        * Add arrow button for carousel
        * Add who I work with Section - secondary color - pink with blue background
        * Add description of who I work with - Art Direction for Global Leading Brands.,I research and create breakthrough - delightful ideas, leading visual designers.
        * Add Images for companies i work with
        * Build portfolio Section
        * 
        

        */}
      {/* <HeaderContent
          header={"Hi, I'm Agunbiade Adedeji. I'm a software engineer"}
          subHeader={"A portffolio of "}
          paragraph={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. " +
            "Accusamus aperiam commodi corporis cumque cupiditate delectus, distinctio" +
            " eum ex excepturi facilis ipsam nam officiis quae quasi repellat tempora temporibus ullam velit."
          }
        /> */}
    </div>
  );
}

export default App;
