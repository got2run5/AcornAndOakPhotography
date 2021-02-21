import React, { useState } from 'react';
import './left-nav.css';
import { Link, NavLink } from "react-router-dom";
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
          <FontAwesomeIcon icon={faBars} size="3x" />
        </button>
      </div>
      <NavLink to="/" activeClassName="active-route-link" exact={true}>
        <div className={`${navItemClass} ${ 1 == (2/4) ? "testClass": ""}`} onClick={() => setExpanded(false)}>
          <FontAwesomeIcon icon={faHome} size="lg" />
          <span>Home</span>
        </div>
      </NavLink>
      <NavLink to="/my-work" activeClassName="active-route-link" exact={true}>
        <div className={navItemClass} onClick={() => setExpanded(false)}>
          <FontAwesomeIcon icon={faCamera} size="lg" />
          <span>My Work</span>
        </div>
      </NavLink>
      <NavLink to="/about-me" activeClassName="active-route-link" exact={true}>
        <div className={navItemClass} onClick={() => setExpanded(false)}>
          <FontAwesomeIcon icon={faAddressCard} size="lg" />
          <span>About Me</span>
        </div>
      </NavLink>
      <NavLink to="/pricing" activeClassName="active-route-link" exact={true}>
        <div className={navItemClass} onClick={() => setExpanded(false)}>
          <FontAwesomeIcon icon={faFileInvoiceDollar} size="lg" />
          <span>Pricing</span>
        </div>
      </NavLink>
      <NavLink to="/client-galleries" activeClassName="active-route-link" exact={true}>
        <div className={navItemClass} onClick={() => setExpanded(false)}>
          <FontAwesomeIcon icon={faImages} size="lg" />
          <span>Client Galleries</span>
        </div>
      </NavLink>
    </aside>
  );
}

export default LeftNav;
