import React, { Component } from "react";
import "./Navbar.scss";
import logo from "../../images/logo.png";
import githubIcon from "../../images/github-icon.png";

class Navbar extends Component {
  render() {
    const menuOpen = this.props.menuOpen;
    return (
      <nav className={"navbar " + (menuOpen && "active")}>
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
              rel="noopener noreferrer"
            >
              <img
                src={githubIcon}
                className="navbar__github-icon"
                alt="Github Icon"
              ></img>
            </a>
          </li>
        </ul>
        <div
          className="hamburger"
          onClick={() => this.setState({ menuOpen: !menuOpen })}
        >
          <span className="hamburger--line1"></span>
          <span className="hamburger--line2"></span>
          <span className="hamburger--line3"></span>
        </div>
      </nav>
    );
  }
}

export default Navbar;
