import React, { useState, useEffect } from 'react';
import Particles from 'react-particles-js';
import Header from './Header';
import useWindowDimensions from './useWindowDimensions';
const MainPage = () => {
  const { width } = useWindowDimensions();
  return (
    <div className="mainPage" id='mainPage'>
      {width > 1025 && 
         <Particles
         style={{ position: 'absolute' }}
         params={{
           particles: {
             number: {
               value: 100,
               density: {
                 enable: true,
                 value_area: 1000,
               },
             },
           },
           interactivity: {
             detectsOn: 'window',
             events: {
               onhover: {
                 enable: true,
                 mode: 'grab',
               },
               onclick: {
                 enable: true,
                 mode: 'push',
               },
               resize: true,
             },
           },
           move: {
             enable: true,
             speed: 6,
             direction: 'none',
             random: false,
             straight: false,
             out_mode: 'out',
             bounce: false,
             attract: {
               enable: false,
               rotateX: 600,
               rotateY: 1200,
             },
           },
         }}
       />
      }
     

      <Header/>
       
      <div className="mainPage--content">
        <span>Web Development</span> <br />
        <span>With</span> <br /> <span>a Passion</span>
      </div>
      
    </div>
  );
};

export default MainPage;
