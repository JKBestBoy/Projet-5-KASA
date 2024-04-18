import React from 'react';
import './Footer.css';
import logoFooter from '../assets/logoFooter.png'


const Footer = () => {
  return (
    <footer className="footer">
      <img src={logoFooter} alt="logo Kasa"/>
        <p className="footer__text">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
