import React, { Component } from "react";
import "./Navbar.scss";
import logo from "../../images/logo.png";
import githubIcon from "../../images/github-icon.png";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <a className="navbar__link" style={{ color: "white" }} href="/">
          <img
            src={logo}
            width="50"
            height="30"
            className="navbar__logo"
            alt="Bank"
          ></img>
          &nbsp; &nbsp; DAPP YIELD FARM
        </a>
        <ul className="navbar__list">
          <li className="navbar__list-item">How To</li>
          <li className="navbar__list-item">Demo</li>
          <li>
            <a
              href="https://github.com/nicolecevey/defi-staking-app"
              target="_blank"
            >
              <img src={githubIcon} className="navbar__github-icon"></img>
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
