import React from 'react';
import LazyLoad from 'react-lazyload';
import MainPage from './components/MainPage';
import ToTop from './components/ToTop';
import StatPage from './components/StatPage';
import AboutPage from './components/AboutPage';
import DescPage from './components/DescPage';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CookieConsent from 'react-cookie-consent';
const App = () => {
  return (
    <div>
      <ToTop />
      <MainPage />
      <AboutPage />
      <DescPage />
      <LazyLoad height={1000} once offset={100}>
        <StatPage />
      </LazyLoad>
      <Portfolio />
      <Contact />
      <CookieConsent>
        This website uses cookies to enhance the user experience.
      </CookieConsent>
      <Footer />
    </div>
  );
};

export default App;
