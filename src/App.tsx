import Tools from 'components/Tools/Tools';
import React from 'react';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import CustomCursor from './components/CustomCursor/CustomCursor';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Testimonials from './components/Testimonials/Testimonials';
import { ThemeProvider } from './theme/ThemeProvider';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground antialiased">
        <CustomCursor />
        <Header />
        <main>
          <Hero />
          <Projects />
          <About />
          <Tools />
          <Testimonials />
          <Blog />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
