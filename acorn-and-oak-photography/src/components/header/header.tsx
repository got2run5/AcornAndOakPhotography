import React from 'react';
import './header.css';
import logo from './../../acorn.svg';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  return (
    <header className="horizontal-header">
      <div>
        <div>
          <img className="logo" src={logo} alt="Acorn And Oak Logo" />
        </div>
        <h2>Acorn and Oak Photography</h2>
      </div>
      <div className="social-media-container">
        <FontAwesomeIcon icon={faFacebookF} size="lg"/>
        <FontAwesomeIcon icon={faTwitter} size="lg"/>
        <FontAwesomeIcon icon={faInstagram} size="lg"/>
      </div>
    </header>
  );
}

export default Header;
