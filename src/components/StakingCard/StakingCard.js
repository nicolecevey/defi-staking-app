import React, { Component } from "react";
import "./StakingCard.scss";
import StakingForm from "../StakingForm/StakingForm";
import Airdrop from "../Airdrop/Airdrop";

class StakingCard extends Component {
  render() {
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
              {Math.ceil(
                window.web3.utils.fromWei(this.props.rwdBalance, "Ether")
              )}{" "}
              RWD
            </p>
          </div>
        </div>
        <StakingForm
          tetherBalance={this.props.tetherBalance}
          stakeTokens={this.props.stakeTokens}
          unstakeTokens={this.props.unstakeTokens}
        />
        <Airdrop
          stakingBalance={this.props.stakingBalance}
          issueReward={this.props.issueReward}
        />
      </main>
    );
  }
}

export default StakingCard;
