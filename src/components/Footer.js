import React from 'react';
import gitJp from '../images/github.jp2';
import gitPn from '../images/github.png';
import gitWe from '../images/github.webp';
import linkedJp from '../images/in.jp2';
import linkedPn from '../images/in.png';
import linkedWe from '../images/in.webp';

const Footer = () => {
  return (
    <footer>
      <p>Copyright Piotr Mrozowski {new Date().getFullYear()}</p>
      <div className="footer__icons">
        <a href="https://github.com/Nokrei" target="_blank" rel="noreferrer">
          <picture>
            <source srcSet={gitWe} type="image/webp" />
            <source srcSet={gitJp} type="image/jp2" />
            <source srcSet={gitPn} type="image/png" />
            <img className="footer__icons--icon" src={gitPn} alt="github" />
          </picture>
        </a>

        <a
          href="https://www.linkedin.com/in/piotr-mrozowski-26ab03198/"
          target="_blank"
          rel="noreferrer"
        >
          <picture>
            <source srcSet={linkedWe} type="image/webp" />
            <source srcSet={linkedJp} type="image/jp2" />
            <source srcSet={linkedPn} type="image/png" />
            <img className="footer__icons--icon" src={linkedPn} alt="linkedin" />
          </picture>
          
        </a>
      </div>
    </footer>
  );
};

export default Footer;
