import React, { Component } from "react";
import "./styles/global.scss";
import Navbar from "./components/Navbar/Navbar";
import Web3 from "web3";
import Tether from "./truffle_abis/Tether.json";
import RWD from "./truffle_abis/RWD.json";
import DecentralBank from "./truffle_abis/DecentralBank.json";
import HomePage from "./pages/HomePage";
import MobileMenu from "./components/MobileMenu/MobileMenu";
import Instructions from "./components/Instructions/Instructions";
import HowTo from "./components/HowTo/HowTo";

class App extends Component {
  state = {
    account: "Connect to MetaMask",
    tether: {},
    rwd: {},
    decentralBank: [],
    tetherBalance: "0",
    rwdBalance: "0",
    stakingBalance: "0",
    loading: false,
    menuOpen: false,
    connected: false,
  };

  async UNSAFE_componentWillMount() {
    await this.loadWeb3();
    await this.loadBlockchainData();
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert("No ethereum browser detected! You can check out MetaMask!");
    }
  }

  async loadBlockchainData() {
    const web3 = window.web3;
    const account = await web3.eth.getAccounts();
    this.setState({
      account: account[0],
    });
    const networkId = await web3.eth.net.getId();

    // Load Tether contract
    const tetherData = Tether.networks[networkId];
    if (tetherData) {
      const tether = new web3.eth.Contract(Tether.abi, tetherData.address);
      this.setState({
        tether: tether,
      });
      let tetherBalance = await tether.methods
        .balanceOf(this.state.account)
        .call(); // methods requires call()
      this.setState({ tetherBalance: tetherBalance.toString() });
    } else {
      window.alert(
        "Error! Tether network contract not deployed - no detected network!"
      );
    }

    // Load RWD contract
    const rwdData = RWD.networks[networkId];
    if (rwdData) {
      const rwd = new web3.eth.Contract(RWD.abi, rwdData.address);
      this.setState({
        rwd: rwd,
      });
      let rwdBalance = await rwd.methods.balanceOf(this.state.account).call(); // methods requires call()
      this.setState({ rwdBalance: rwdBalance.toString() });
    } else {
      window.alert("Error! Reward Token not deployed to the network!");
    }

    // Load Decentral Bank contract
    const decentralBankData = DecentralBank.networks[networkId];
    if (decentralBankData) {
      const decentralBank = new web3.eth.Contract(
        DecentralBank.abi,
        decentralBankData.address
      );
      this.setState({
        decentralBank: decentralBank,
      });
      let stakingBalance = await decentralBank.methods
        .stakingBalance(this.state.account)
        .call(); // methods requires call()
      this.setState({ stakingBalance: stakingBalance.toString() });
    } else {
      window.alert("Error! Decentral Bank not deployed to the network!");
    }
    this.setState({ connected: true });
  }

  // Two functions: One that stakes and one that unstakes
  // Leverage our decentralBank contract - deposit tokens and unstaking

  // Staking function :
  // Set loading state to true until function finishes
  // use depositTokens transferFrom function
  // Approve transaction hash to deposit tokens (takes address and amount)
  stakeTokens = (amount) => {
    this.setState({ loading: true });
    this.state.tether.methods
      .approve(this.state.decentralBank._address, amount)
      .send({ from: this.state.account })
      .on("transactionHash", (hash) => {
        this.state.decentralBank.methods
          .depositTokens(amount)
          .send({ from: this.state.account })
          .on("transactionHash", (hash) => {
            this.setState({ loading: false });
          });
      });
  };

  // Unstaking function
  unstakeTokens = () => {
    this.setState({ loading: true });
    this.state.decentralBank.methods
      .unstakeTokens()
      .send({ from: this.state.account })
      .on("transactionHash", (hash) => {
        this.setState({ loading: false });
      });
  };

  // Issuing reward tokens function
  issueReward = () => {
    this.setState({ loading: true });
    this.state.decentralBank.methods
      .issueTokens()
      .send({ from: this.state.account })
      .on("transactionHash", (hash) => {
        this.setState({ loading: false });
      });
  };

  render() {
    return (
      <>
        <Navbar
          menuOpen={this.state.menuOpen}
          onClick={() => this.setState({ menuOpen: !this.state.menuOpen })}
        />
        {this.state.menuOpen && <MobileMenu menuOpen={this.state.menuOpen} />}
        <div className="main">
          {this.state.loading && this.state.connected && (
            <p style={{ textAlign: "center", marginTop: "2rem" }}>Loading...</p>
          )}
          {!this.state.connected && (
            <>
              <p style={{ textAlign: "center", marginTop: "2rem" }}>
                Please connect to MetaMask
              </p>
              <Instructions />
            </>
          )}
          {this.state.connected && <HowTo />}
          <HomePage
            account={this.state.account}
            stakingBalance={this.state.stakingBalance}
            rwdBalance={this.state.rwdBalance}
            tetherBalance={this.state.tetherBalance}
            stakeTokens={this.stakeTokens}
            unstakeTokens={this.unstakeTokens}
            issueReward={this.issueReward}
            menuOpen={this.state.menuOpen}
          />
        </div>
      </>
    );
  }
}

export default App;
