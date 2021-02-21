import React from 'react';
import './header.css';
import logo from './../../images/acorn.svg';
import SocialMedia from '../social-media/social-media';

function Header() {
  return (
    <header className="horizontal-header">
      <div className="title-container">
        <div className="header-logo-container">
          <img className="header-logo" src={logo} alt="Acorn And Oak Logo" />
        </div>
        <h1>Acorn & Oak Photography</h1>
      </div>
      <div className="header-logo-container">
        <SocialMedia />
      </div>
    </header>
  );
}

export default Header;
