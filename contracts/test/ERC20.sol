pragma solidity =0.5.16;

import '../SkeleERC20.sol';

contract ERC20 is SkeleERC20 {
    constructor(uint _totalSupply) public {
        _mint(msg.sender, _totalSupply);
    }
}
