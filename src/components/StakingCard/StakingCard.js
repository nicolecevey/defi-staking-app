import React, { Component } from "react";
import "./StakingCard.scss";

class StakingCard extends Component {
  render() {
    return (
      <main className="card">
        <div className="card__balances">
          <div className="card__staking">
            <h2 className="card__text">STAKING BALANCE</h2>
            <p className="card__amount">{this.props.stakingBalance} USDT</p>
          </div>
          <div className="card__rwd">
            <h2 className="card__text">REWARD BALANCE</h2>
            <p className="card__amount">{this.props.rwdBalance} RWD</p>
          </div>
        </div>
      </main>
    );
  }
}

export default StakingCard;
