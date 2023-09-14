import "./index.css";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-white routing-nav-bg pl-5 pr-5">
      <Link class="navbar-brand" to={"/"}>
        <div className="routing-logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
            alt="wave"
            className="routing-wave-logo"
          />
          <p className="routing-logo-text">Wave</p>
        </div>
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ml-auto">
          <Link className="nav-link routing-nav-items-text" to={"/"}>
            Home
          </Link>
          <Link className="nav-link routing-nav-items-text" to={"/about"}>
            About
          </Link>
          <Link className="nav-link routing-nav-items-text" to={"/contact"}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
