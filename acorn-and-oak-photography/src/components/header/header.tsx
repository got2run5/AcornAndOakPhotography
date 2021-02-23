import React from 'react';
import './header.css';
import logo from './../../images/acorn.svg';
import SocialMedia from '../social-media/social-media';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Header({ onMenuExpandToggled }: { onMenuExpandToggled: () => void }) {
  return (
    <header className="horizontal-header">
      <div className="header-element-container">
        <div className="hamburger-container">
          <button className="hamburger-menu" onClick={() => onMenuExpandToggled()}>
            <FontAwesomeIcon icon={faBars} size="2x" />
          </button>
        </div>
        <div className="header-logo-container">
          <img className="header-logo" src={logo} alt="Acorn And Oak Logo" />
        </div>
        <div className="title-container">
          <h1>Acorn & Oak Photography</h1>
        </div>
      </div>
      <div className="header-logo-container">
        <SocialMedia />
      </div>
    </header>
  );
}

export default Header;
