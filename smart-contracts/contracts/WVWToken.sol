
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract WVWToken is ERC20 {
    constructor() ERC20("WVW Token", "WVWToken") {
        _mint(msg.sender, 1000000 * (10**uint256(decimals())));
    }
}

// function to vesting tokens to marketing team and development team wallets    