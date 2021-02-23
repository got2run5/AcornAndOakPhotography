import './left-nav.css';
import { NavLink } from "react-router-dom";
import { faBars, faHome, faCamera, faAddressCard, faFileInvoiceDollar, faImages }
  from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function LeftNav({ isExpanded, onMenuItemClick }: { isExpanded: boolean, onMenuItemClick: () => void }) {

  return (
    <aside className={`${"left-nav"} ${ !isExpanded ? "nav-close": ""}`}>
      <NavLink to="/" activeClassName="active-route-link" exact={true}>
        <div onClick={() => onMenuItemClick()}>
          <FontAwesomeIcon icon={faHome} size="lg" />
          <span>Home</span>
        </div>
      </NavLink>
      <NavLink to="/my-work" activeClassName="active-route-link" exact={true}>
        <div onClick={() => onMenuItemClick()}>
          <FontAwesomeIcon icon={faCamera} size="lg" />
          <span>My Work</span>
        </div>
      </NavLink>
      <NavLink to="/about-me" activeClassName="active-route-link" exact={true}>
        <div onClick={() => onMenuItemClick()}>
          <FontAwesomeIcon icon={faAddressCard} size="lg" />
          <span>About Me</span>
        </div>
      </NavLink>
      <NavLink to="/pricing" activeClassName="active-route-link" exact={true}>
        <div onClick={() => onMenuItemClick()}>
          <FontAwesomeIcon icon={faFileInvoiceDollar} size="lg" />
          <span>Pricing</span>
        </div>
      </NavLink>
      <NavLink to="/client-galleries" activeClassName="active-route-link" exact={true}>
        <div onClick={() => onMenuItemClick()}>
          <FontAwesomeIcon icon={faImages} size="lg" />
          <span>Client Galleries</span>
        </div>
      </NavLink>
    </aside>
  );
}

export default LeftNav;
