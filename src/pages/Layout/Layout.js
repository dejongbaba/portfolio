import React, {useEffect, useState} from 'react';
import SunSet from '../../assets/images/sun-set-192x192.png';
import SunRise from '../../assets/images/sun-rise-192x192.png';
import './layout.css';

function Layout() {
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        if (theme) {
            const appBg = document.getElementById('App');
            const texts = document.querySelectorAll(
                '.connect-header ,.contact-header, .about-header, .header-title,.portfolio-header,.footer',
            );
            if (appBg) {
                appBg.style.background =
                    theme === 'dark' ? '#070708' : 'white';
                texts.forEach(
                    (e) =>
                        (e.style.color = theme === 'dark' ? 'white' : '#070708'),
                );
            }
        }
    }, [theme]);
    return (
        <div className="layout">
            <header className="header">
                {theme === 'dark' ? (
                    <img
                        className="header-img"
                        onClick={() => setTheme('light')}
                        src={SunRise}
                        alt="sun rise"
                    />
                ) : (
                    <img
                        className="header-img"
                        onClick={() => setTheme('dark')}
                        src={SunSet}
                        alt="sun set"
                    />
                )}
                <div className="header-write-up">
                    {/* name  */}
                    <h1 className="header-title">Agunbiade Adedeji</h1>
                    <p className="header-subtext">Software Engineer</p>
                    <p className="header-subtext">Lagos, Nigeria</p>
                </div>
            </header>
            <section className="about">
                <h2 className="about-header">About</h2>
                <p className="about-subtext">
                    I am a product-oriented software engineer with 5 years of
                    experience in designing and building scalable
                    mission-critical software systems. I enjoy creating
                    delightful, human-centered digital experiences. I have a
                    proven track record of delivering successful projects across
                    various industries including telecommunication, gaming,
                    education, telemedicine, fintech, and e-commerce.
                </p>
                <p className="about-subtext">
                    I’m a very strong believer of developing talents, so you can
                    find me training young developing engineers in the
                    technology space from time to time.
                </p>
            </section>
            <section className="portfolio">
                <h2 className="portfolio-header">Works</h2>
                <p className="portfolio-subtext">
                    I take much joy in building this piece of art:{' '}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.mybackupcash.com"
                    >
                        Mybackupcash
                    </a>{' '}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://patek.netlify.app/"
                    >
                        Patek
                    </a>{' '}
                    ,
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://www.edusponsor.com"
                    >
                        Edusponsor
                    </a>{' '}
                    ,
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.safe.kobo360.com"
                    >
                        Kobo Safe
                    </a>{' '}
                    ,
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://business.sendbox.co"
                    >
                        Sendbox Business
                    </a>{' '}
                    ,
                    <a
                        href="https://marketplace.sendbox.co/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Sendbox Marektplace
                    </a>
                </p>
            </section>
            {' '}
            <section className="portfolio">
                <h2 className="portfolio-header">Teachings </h2>
                <p className="portfolio-subtext">
                    I find joy in sharing knowledge with newbie and upcoming
                    tech talents at{' '}
                    <a href="https://www.techfront.netlify.io">Techfront io</a>
                </p>
            </section>
            {' '}
            <section className="portfolio">
                <h2 className="portfolio-header">Blogs and Publications</h2>
                <p className="portfolio-subtext">
                    I've Written a couple of articles on blogs like{' '}
                    <a href="https://dev.to/lucciddev/getting-started-with-react-context-mc7">
                        Getting started with React Context.
                    </a>
                </p>
                <div className="portfolio-list">
                    <a
                        href="https://www.hashnode.com/luccithedev"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Read more
                    </a>
                </div>
            </section>
            {' '}
            <section className="portfolio">
                <h2 className="portfolio-header">Volunteering</h2>
                <p className="portfolio-subtext">
                    In my spare time, I contribute to open source and volunteer{' '}
                    <a target="_blank"
                       rel="noopener noreferrer"

                       href="https://www.writethedocs.org/">Write the Docs</a>,{' '}
                    <a target="_blank"
                       rel="noopener noreferrer"

                       href="https://www.agenta.ai">Agenta AI</a>,{' '}
                    <a target="_blank"
                       rel="noopener noreferrer"

                       href="https://docusaurus.io/">Docusaurus</a>,{' '}
                    <a target="_blank"
                       rel="noopener noreferrer"
                       href="https://www.codecademy.com/resources/docs">Codecademy Docs</a>,
                </p>
            </section>
            {' '}
            <section className="contact">
                <h2 className="contact-header">Consult me</h2>
                <p className="contact-subtext">
                    <a href="https://calendly.com/agunbiade-adedeji94/15min">
                        {' '}
                        15 min one on one session
                    </a>{' '}
                </p>
            </section>
            <section className="connect">
                <h2 className="connect-header">Connect</h2>
                <div className="icons">
                    <a
                        href="http://www.instagram.com/lucciddev"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa fa-2x fa-instagram"/>
                    </a>
                    <a
                        href="https://web.facebook.com/lucciddev"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa fa-2x fa-facebook"/>
                    </a>
                    <a
                        href="https://twitter.com/lucciddev"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <i className="fa fa-2x fa-twitter"/>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/adedeji-agunbiade-b27606165/"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <i className="fa fa-2x fa-linkedin"/>
                    </a>
                    <a
                        href="https://github.com/dejongbaba"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <i className="fa fa-2x fa-github"/>
                    </a>
                </div>
            </section>
            <footer className="footer">
                made with <span>&#10084;</span> by Adedeji
            </footer>
        </div>
    );
}

export default Layout;
