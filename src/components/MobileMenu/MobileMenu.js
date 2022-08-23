import React, { Component } from "react";
import githubIcon from "../../images/github-icon.png";
import "./MobileMenu.scss";

class MobileMenu extends Component {
  render() {
    return (
      <nav className="mobile-menu">
        <ul className="mobile-menu__list">
          <li className="mobile-menu__list-item">How To</li>
          <li className="mobile-menu__list-item">Demo</li>
          <li>
            <a
              href="https://github.com/nicolecevey/defi-staking-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={githubIcon}
                className="mobile-menu__github-icon"
                alt="Github Icon"
              ></img>
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default MobileMenu;
