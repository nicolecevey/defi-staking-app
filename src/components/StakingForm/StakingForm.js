import React, { Component } from "react";
import "./StakingForm.scss";
import tetherIcon from "../../images/tether-usdt-logo.png";

class StakingForm extends Component {
  render() {
    return (
      <form
        className="form"
        onSubmit={(event) => {
          event.preventDefault();
          let amount = this.input.value.toString();
          amount = window.web3.utils.toWei(amount, "Ether");
          this.props.stakeTokens(amount);
        }}
      >
        <div className="form__tokens">
          <h2>Stake Tokens </h2>
          <p>Balance: {window.web3.utils.fromWei(this.props.tetherBalance)}</p>
        </div>
        <div className="form__input-row">
          <input
            className="form__input"
            placeholder="0"
            ref={(input) => {
              this.input = input;
            }}
            required
          ></input>
          <div className="form__tether">
            <img
              src={tetherIcon}
              className="form__tether-icon"
              alt="Tether Icon"
            ></img>
            <p className="form__text">USDT</p>
          </div>
        </div>
        <div className="form__buttons">
          <button className="form__button" type="submit">
            Deposit
          </button>
          <button
            className="form__button"
            onClick={() => {
              this.props.unstakeTokens();
            }}
          >
            Withdraw
          </button>
        </div>
      </form>
    );
  }
}

export default StakingForm;
