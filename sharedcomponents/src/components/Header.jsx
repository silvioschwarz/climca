import React from "react";
import logo from "./images/logos/logo_small.png";

export default function Header({ activeSite, setActiveSite, onNavigate }) {
  const linkStyle = (site) => ({
    textDecoration: "none",
    fontSize: "2rem",
    padding: "10px",
    cursor: "pointer",
    fontWeight:"bold", //activeSite === site ? "bold" : "normal",
    color: "#712119"//activeSite === site ? "#712119" : "black",
  });

  return (
    <header className="site-header">
      <nav className="navbar">
        <div className="icon-container">
          <div
            style={linkStyle("main")}
            onClick={() => onNavigate("main", null)}
            className="navbar-brand navbar-brand-logo"
          >
            <img src={logo} alt="" className="icon" />
          </div>
        </div>
        <button
          className="menu-toggle"
          id="menuToggle"
          aria-label="Toggle Navigation"
        >
          ☰
        </button>
        <ul className="nav-links" id="navLinks">
          <li>
            <div
              style={linkStyle("main")}
              onClick={() => onNavigate("main","about")}
            >
              <span className="menu-text">About</span>
            </div>
          </li>

          <li>
            <div
              style={linkStyle("main")}
              onClick={() => onNavigate("main","research")}
            >
              <span className="menu-text">Research</span>
            </div>
          </li>

          <li>
            <div
              style={linkStyle("main")}
              onClick={() => onNavigate("main","projects")}
            >
              <span className="menu-text">Projects</span>
            </div>
          </li>

          <li>
            <div
              style={linkStyle("main")}
              onClick={() => onNavigate("main","people")}
            >
              <span className="menu-text">People</span>
            </div>
          </li>

          <li className="dropdown">
            <button className="drop-btn dropdown-toggle">
              <span className="menu-text">Publications</span>
              <span className="arrow"> ▾ </span>
            </button>
            <ul className="dropdown-menu">
              <li>
                <div
                  style={linkStyle("main")}
                  onClick={() => onNavigate("papers",null)}
                >
                  Papers
                </div>
              </li>
              <li>
                <div
                  style={linkStyle("main")}
                  onClick={() => onNavigate("software",null)}
                >
                  Software
                </div>
              </li>
            </ul>
          </li>

          <li className="dropdown">
            <button href="." className="drop-btn dropdown-toggle">
              Contact Us<span className="arrow"> ▾ </span>
            </button>
            <ul className="dropdown-menu">
              <li>
                <div
                style={linkStyle("main")}
                  onClick={() => onNavigate("software",null)}
                  >Contact</div>
              </li>
              <li>
                <div
                  style={linkStyle("positions")}
                  onClick={() => setActiveSite("positions")}
                >
                  Open Positions
                </div>
              </li>
            </ul>
          </li>
          <li>
            <a href="https://github.com/LIM-Climate-Causality/lim-climate-causality.github.io">
              <i className="fa fa-github fa-2xl"></i>
              <span className="menu-text"></span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
