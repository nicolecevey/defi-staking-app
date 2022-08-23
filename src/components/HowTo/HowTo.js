import React, { Component } from "react";
import "./HowTo.scss";

class HowTo extends Component {
  render() {
    return (
      <section className="how-to">
        <h2 className=" how-to__title">WHAT THIS APP DOES:</h2>
        <p className="how-to__text">
          It allows you to stake mock Tether tokens. When you reach a staking
          balance of over 50USDT, the airdrop timer counts down from 20 seconds
          until it hits zero and you receive a reward token.
        </p>
      </section>
    );
  }
}

export default HowTo;
