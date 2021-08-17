import React, { Component } from "react";
import intl from "react-intl-universal";

const Navbar = ({ onEnglish, onChinese }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        {intl.getHTML("DEMO.TITLE")}
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              {intl.get("CHOOSE_LANG")}
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a onClick={onChinese} className="dropdown-item" href="#">
                简体中文
              </a>
              <a onClick={onEnglish} className="dropdown-item" href="#">
                English
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
