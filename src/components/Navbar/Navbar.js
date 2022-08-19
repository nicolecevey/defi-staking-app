import React, { Component } from "react";
import "./Navbar.scss";
// import bank from "../../bank.png";
import logo from "../../images/logo.png";

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
        </ul>
        {/* <ul className="navbar__list">
          <li className="navbar__list-item">
            ACCOUNT NUMBER: {this.props.account}
          </li>
        </ul> */}
      </nav>
    );
  }
}

export default Navbar;
