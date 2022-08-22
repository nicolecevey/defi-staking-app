import React, { Component } from "react";
import "./StakingCard.scss";
import StakingForm from "../StakingForm/StakingForm";

class StakingCard extends Component {
  render() {
    console.log(this.props.stakingBalance);
    return (
      <main className="card">
        <div className="card__balances">
          <div className="card__staking">
            <h1 className="card__text">STAKING BALANCE</h1>
            <p className="card__amount">
              {window.web3.utils.fromWei(this.props.stakingBalance, "Ether")}{" "}
              USDT
            </p>
          </div>
          <div className="card__rwd">
            <h1 className="card__text">REWARD BALANCE</h1>
            <p className="card__amount">
              {window.web3.utils.fromWei(this.props.rwdBalance, "Ether")} RWD
            </p>
          </div>
        </div>
        <StakingForm tetherBalance={this.props.tetherBalance} />
        <h2>AIRDROP</h2>
        <p></p>
      </main>
    );
  }
}

export default StakingCard;
