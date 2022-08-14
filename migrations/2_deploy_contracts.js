const Tether = artifacts.require("Tether");
const RWD = artifacts.require("RWD");
const DecentralBank = artifacts.require("DecentralBank");

module.exports = async function(deployer) {
  // Deploy Mock Tether Contract
  await deployer.deploy(Tether);

  // Deploy Mock Tether Contract
  await deployer.deploy(RWD);

  // Deploy Mock Tether Contract
  await deployer.deploy(DecentralBank);
};
