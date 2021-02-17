import React, { useState, useEffect } from 'react';
import './left-nav.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { faBars, faHome, faCamera, faAddressCard, faFileInvoiceDollar, faImages } 
from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function LeftNav() {
  const [isExpanded, setExpanded] = useState(false);
  let navItemClass = "nav-close";
  navItemClass = isExpanded ? "nav-open" : "nav-close";

  return (
    <aside className="left-nav">
      <div className="hamburger-container">
        <button className="hamburger-menu" onClick={() => setExpanded(!isExpanded)}>
          <FontAwesomeIcon icon={faBars} size="3x"/>
        </button>
      </div>
      <Router>
        <Link to="/">
          <div className={navItemClass} onClick={() => setExpanded(false)}>
            <FontAwesomeIcon icon={faHome} size="lg"/>
            <span>Home</span>
          </div>
        </Link>
        <Link to="/my-work">
          <div className={navItemClass} onClick={() => setExpanded(false)}>
            <FontAwesomeIcon icon={faCamera} size="lg"/>
            <span>My Work</span>
          </div>
        </Link>
        <Link to="/about-me">
          <div className={navItemClass} onClick={() => setExpanded(false)}>
            <FontAwesomeIcon icon={faAddressCard} size="lg"/>
            <span>About Me</span>
          </div>
        </Link>
        <Link to="/pricing">
          <div className={navItemClass} onClick={() => setExpanded(false)}>
            <FontAwesomeIcon icon={faFileInvoiceDollar} size="lg"/>
            <span>Pricing</span>
          </div>
        </Link>
        <Link to="/client-galleries">
          <div className={navItemClass} onClick={() => setExpanded(false)}>
            <FontAwesomeIcon icon={faImages} size="lg"/>
            <span>Client Galleries</span>
          </div>
        </Link>
      </Router>
    </aside>
  );
}

export default LeftNav;
