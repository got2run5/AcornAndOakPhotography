import React from 'react';
import './header.css';
import logo from './../../acorn.svg';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  return (
    <header className="horizontal-header">
      <div className="title-container">
        <div className="logo-container">
          <img className="logo" src={logo} alt="Acorn And Oak Logo" />
        </div>
        <h1>Acorn & Oak Photography</h1>
      </div>
      <div className="logo-container">
        <FontAwesomeIcon icon={faFacebookF} size="lg"/>
        <FontAwesomeIcon icon={faTwitter} size="lg"/>
        <FontAwesomeIcon icon={faInstagram} size="lg"/>
      </div>
    </header>
  );
}

export default Header;
