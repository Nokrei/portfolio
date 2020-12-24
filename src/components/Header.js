import React, { useState } from 'react';
import useDocumentScrollThrottled from './useDocumentScrollThrottled';

const Header = () => {
  const [shouldHideHeader, setShouldHideHeader] = useState(false);
  const [shouldShowShadow, setShouldShowShadow] = useState(false);

  const MINIMUM_SCROLL = 80;
  const TIMEOUT_DELAY = 400;

  useDocumentScrollThrottled((callbackData) => {
    const { previousScrollTop, currentScrollTop } = callbackData;
    const isScrolledDown = previousScrollTop < currentScrollTop;
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

    setShouldShowShadow(currentScrollTop > 2);

    setTimeout(() => {
      setShouldHideHeader(isScrolledDown && isMinimumScrolled);
    }, TIMEOUT_DELAY);
  });

  const shadowStyle = shouldShowShadow ? 'shadow' : '';
  const hiddenStyle = shouldHideHeader ? 'hidden' : '';

  return (
    <div className={`navigation ${hiddenStyle} ${shadowStyle}`}>
      <div className="titleBar">
        <div className="titleBar--name">
          <h1>Piotr Mrozowski</h1>
          <p>Web Developer</p>
        </div>
        <nav className="titleBar--nav">
          <p><a href='#aboutPage'>About</a></p>
          <p className="titleBar--nav-bordered"><a href='#portfolio'>Portfolio</a></p>
          <p><a href='#contact'>Contact</a></p>
        </nav>
      </div>
      <div className="line"></div>
    </div>
  );
};

export default Header;
