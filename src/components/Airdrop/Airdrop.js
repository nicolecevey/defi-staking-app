import React, { Component } from "react";

class Airdrop extends Component {
  // Airdrop to have a timer that counts down
  // Initialize the countdown after our customers have staked a certain amount

  constructor() {
    super();
    this.state = { time: {}, seconds: 20 };
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
  }

  startTimer = () => {
    if (this.timer === 0 && this.state.seconds > 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  };

  countDown() {
    // Countdown one second at a time
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });
    // Stop counting when we hit zero
    if (seconds === 0) {
      clearInterval(this.timer);
    }
  }

  secondsToTime(secs) {
    let hours = Math.floor(secs / (60 * 60));
    let devisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(devisor_for_minutes / 60);
    let devisor_for_seconds = devisor_for_minutes % 60;
    let seconds = Math.ceil(devisor_for_seconds);

    let obj = {
      h: hours,
      m: minutes,
      s: seconds,
    };

    return obj;
  }

  componentDidMount() {
    let timeLeft = this.secondsToTime(this.state.seconds);
    this.setState({ time: timeLeft });
  }

  airdropReleaseTokens() {
    let stakingB = this.props.stakingBalance;
    if (stakingB >= "5000000000000000000") {
      this.startTimer();
    }
    if (this.state.seconds === 0) {
      this.props.issueReward();
    }
  }

  render() {
    this.airdropReleaseTokens();
    return (
      <div>
        <h2>AIRDROP</h2>
        <p style={{ textAlign: "center" }}>
          {this.state.time.m}:{this.state.time.s}
        </p>
      </div>
    );
  }
}

export default Airdrop;
