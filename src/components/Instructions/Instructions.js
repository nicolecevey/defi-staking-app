import React, { Component } from "react";
import "./Instructions.scss";

class Instructions extends Component {
  render() {
    return (
      <section className="instructions">
        <h1 className="instructions__title">HOW TO USE THIS APP:</h1>
        <ol className="instructions__list">
          <li className="instructions__list-item">
            You will need to connect to a MetaMask wallet
          </li>
          <li className="instructions__list-item">
            Connect to the Ganache test network, or test network of choice
          </li>
          <li className="instructions__list-item">
            Keep Ganache running in the background
          </li>
          <li className="instructions__list-item">
            Import your test account using the private key
          </li>
          <li className="instructions__list-item">
            Allow the site to connect to your account
          </li>
        </ol>
      </section>
    );
  }
}

export default Instructions;
