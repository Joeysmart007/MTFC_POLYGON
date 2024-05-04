// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

import "./ERC721A.sol";

contract JTokenNFT is ERC721A {
    uint8 public maxSupply = 5;

    constructor() ERC721A("JToken", "JT") {}

    function safeMint(uint8 _quantity) external payable {
        _safeMint(msg.sender, _quantity);
    }

    function _baseURI() internal pure override returns (string memory) {
        return " /ipfs/QmVDaka9w3vk15bmF6JLCw2Z7F9FBELzMDqbHiXxeKbJDt";
    }

    function promptDescription() external pure returns (string memory) {
        return "JT Haven: NFT Collection For JT Brothers.co";
    }

    function balanceOf(address owner) public view override returns (uint256) {
        return super.balanceOf(owner);
    }
}
