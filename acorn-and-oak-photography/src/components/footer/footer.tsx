import React from 'react';
import SocialMedia from '../social-media/social-media';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo-container">
        <SocialMedia />
      </div>
    </footer>
  );
}

export default Footer;
