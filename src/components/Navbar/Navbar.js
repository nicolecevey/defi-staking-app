import React, { Component } from "react";
import "./Navbar.scss";
import bank from "../../bank.png";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark fix-top shadow p-0">
        <a
          className="navbar__link navbar-brand col-sm-3 col-md-2 mr-0"
          style={{ color: "white" }}
          href="/"
        >
          <img
            src={bank}
            width="50"
            height="30"
            className="d-inline-block align-top"
            alt="Bank"
          ></img>
          &nbsp; &nbsp; DAPP Yield Staking (Decentralized Banking)
        </a>
        <ul className="navbar-nav px-3">
          <li className="text-nowrap d-none nav-item d-sm-none d-sm-block">
            <small className="navbar__list-item">
              ACCOUNT NUMBER: {this.props.account}
            </small>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
