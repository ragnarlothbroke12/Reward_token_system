// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;


// Importing standard ERC20 implementation from OpenZeppelin
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

// Importing Ownable contract — provides ownership control (onlyOwner modifier)
import "@openzeppelin/contracts/access/Ownable.sol";

// Contract definition — inherits from ERC20 and Ownable
contract RewardToken is ERC20, Ownable {
    
    // ERC20 initializes the token name and symbol and Ownable sets the deployer as the owner
    constructor() ERC20("Phillip Reward Token", "PRT") Ownable(msg.sender) {
        // Mint (create) 1,000,000 tokens and assign them to the deployer's wallet (owner)
        // 10 ** decimals() ensures correct token precision 
        _mint(msg.sender, 1_000_000 * 10 ** decimals());
    }

    // transfer() function allows any wallet to send tokens to another wallet
    // It overrides the base ERC20 transfer() for clarity (same logic as parent)
    function transfer(address to, uint256 amount) public override returns (bool) {
        // Calls the parent ERC20 transfer implementation
        return super.transfer(to, amount);
    }

    // balanceOf() function returns the token balance of any address
    function balanceOf(address account) public view override returns (uint256) {
        // Returns the balance from the ERC20 parent contract
        return super.balanceOf(account);
    }

    // rewardUser() function allows the contract owner to mint new tokens as rewards
    // Only the owner (deployer) can call this function due to onlyOwner modifier
    function rewardUser(address user, uint256 amount) external onlyOwner {
        // Checks that the provided address is not the zero (invalid) address
        require(user != address(0), "UnAuthorised");
        
        // Mints (creates) new tokens and sends them to the specified user address
        // Multiplies by 10 ** decimals() to adjust for token precision
        _mint(user, amount * 10 ** decimals());
    }
}
