import StakingCard from "../components/StakingCard/StakingCard";
import "./HomePage.scss";
import React, { Component } from "react";
import Web3 from "web3";

class HomePage extends Component {
  render() {
    return (
      <>
        <div className="account-number">
          <p>Account: {this.props.account}</p>
        </div>
        <StakingCard
          stakingBalance={this.props.stakingBalance}
          rwdBalance={this.props.rwdBalance}
          tetherBalance={this.props.tetherBalance}
        />
      </>
    );
  }
}

export default HomePage;
