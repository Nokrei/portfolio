import React from 'react';
import personalJp from '../images/personal.jp2';
import personalPn from '../images/personal.png';
import personalWe from '../images/personal.webp';

const AboutPage = () => {
  return (
    <div className="aboutPage" id="aboutPage">
     
      <div className="aboutPage__container">
        
        <h1>ABOUT ME</h1>

        <br />
        <br />

        <div className="aboutPage__content">
          <p>
            I am a web developer focusing mainly on the front-end, however I
            have the ability to deliver full stack applications as well. <br />
            <br />
            A large part of my professional career revolved around IT, but it is
            in web development where I found my true passion and calling. <br />
            <br />
            Have a project you would like to discuss? Feel free to contact me on
            &nbsp;
            <a
              className="animateUnderline"
              href="https://www.linkedin.com/in/piotr-mrozowski-26ab03198/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            ,{' '}
            <a
              className="animateUnderline"
              href="mailto:pmrozowski87@gmail.com"
            >
              email me
            </a>{' '}
            or use the{' '}
            <a className="animateUnderline" href="#contact">
              Contact form
            </a>{' '}
            below.
          </p>
          
          <picture className="personalPic__container">
            <source srcSet={personalWe} type="image/webp" />
            <source srcSet={personalJp} type="image/jp2" />
            <source srcSet={personalPn} type="image/png" />
            <img className="personalPic" src={personalPn} alt="Piotr Mrozowski" />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
