import React, { Component } from "react";
import "./StakingForm.scss";
import tetherIcon from "../../images/tether.png";

class StakingForm extends Component {
  render() {
    return (
      <form className="form">
        <div className="form__tokens">
          <h2>Stake Tokens</h2>
        </div>
        <div className="form__input-row">
          <input className="form__input" placeholder="0"></input>
          <div className="form__tether">
            <img src={tetherIcon} className="form__tether-icon"></img>
            <p className="form__text">USDT</p>
          </div>
        </div>
        <div className="form__buttons">
          <button className="form__button">Deposit</button>
          <button className="form__button">Withdraw</button>
        </div>
      </form>
    );
  }
}

export default StakingForm;
