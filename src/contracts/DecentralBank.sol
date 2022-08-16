pragma solidity ^0.5.0;

import "./RWD.sol";
import "./Tether.sol";

contract DecentralBank {
    string public name = "Decentral Bank";
    address public owner;
    Tether public tether;
    RWD public rwd;

    constructor(RWD _rwd, Tether _tether) public {
        rwd = _rwd;
        tether = _tether;
        owner = msg.sender;
    }

    address[] public stakers;

    mapping(address => uint256) public stakingBalance;
    mapping(address => bool) public hasStaked;
    mapping(address => bool) public isStaking;

    // Staking function that deposits Tether tokens to the Decentral Bank contract for staking
    // Need the transferFrom function
    function depositTokens(uint256 _amount) public {
        // Require the staking amount to be greater than 0
        require(_amount > 0, "amount cannot be 0");

        // Transfer tether tokens to this contract address for staking
        tether.transferFrom(msg.sender, address(this), _amount);

        // Update staking balancce
        stakingBalance[msg.sender] = stakingBalance[msg.sender] + _amount;

        if (!hasStaked[msg.sender]) {
            stakers.push(msg.sender);
        }

        // Update staking balancce
        isStaking[msg.sender] = true;
        hasStaked[msg.sender] = true;
    }

    // Issue rewards
    function issueTokens() public {
        // Require the owner to issue the tokens only
        require(msg.sender == owner, "caller must be the owner");

        // Iterate through array of stakers and reward the stakers that are staking
        for (uint256 i = 0; i < stakers.length; i++) {
            address recipient = stakers[i];
            uint256 balance = stakingBalance[recipient] / 9; // Divide by 9 to create incentive for stakers
            if (balance > 0) {
                rwd.transfer(recipient, balance);
            }
        }
    }
}
