import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top">
      <Link to="/" id="logo">
        <img src="/images/logo-v2.svg" width="100px" alt="logo" />
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse navbar-right" id="navbarNavDropdown">
        <ul className="navbar-nav mx-auto text-md-center text-left" id="navbar">
          <li className="nav-item px-2">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item px-2">
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
          </li>
          <li className="nav-item px-2">
            <NavLink className="nav-link" to="/services">
              Services
            </NavLink>
          </li>
          <li className="nav-item px-2">
            <NavLink className="nav-link" to="/contact">
              Contact Us
            </NavLink>
          </li>
        </ul>
        <ul className="nav navbar-nav flex-row justify-content-md-center justify-content-start flex-nowrap">
          <li className="nav-item">
            <a className="nav-link nav-socialicon-spacing" href="https://www.facebook.com/PRJ-Event-Management-106491587688356/" target="_blank" rel="noreferrer">
              <i className="fab fa-facebook-f fa-lg nav-icon"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link nav-socialicon-spacing" href="https://www.instagram.com/prjevents_official/" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram fa-lg nav-icon"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link nav-socialicon-spacing" href="https://twitter.com/prjevents" target="_blank" rel="noreferrer">
              <i className="fab fa-twitter fa-lg nav-icon"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
