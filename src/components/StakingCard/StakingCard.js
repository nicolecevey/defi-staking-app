import React, { Component } from "react";
import "./StakingCard.scss";
import StakingForm from "../StakingForm/StakingForm";

class StakingCard extends Component {
  render() {
    return (
      <main className="card">
        <div className="card__balances">
          <div className="card__staking">
            <h1 className="card__text">STAKING BALANCE</h1>
            <p className="card__amount">{this.props.stakingBalance} USDT</p>
          </div>
          <div className="card__rwd">
            <h1 className="card__text">REWARD BALANCE</h1>
            <p className="card__amount">{this.props.rwdBalance} RWD</p>
          </div>
        </div>
        <StakingForm />
        <h2>AIRDROP</h2>
        <p></p>
      </main>
    );
  }
}

export default StakingCard;
