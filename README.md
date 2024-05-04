JTokenNFT Contract
=====================
License
This contract is UNLICENSED.
Description
JTokenNFT is an ERC721A-compliant NFT contract that represents a digital collectible. It has a maximum supply of 5 NFTs.
Functions
safeMint
Solidity
function safeMint(uint8 _quantity) external payable
Mints a specified quantity of NFTs to the caller's address.
_baseURI
Solidity
function _baseURI() internal pure override returns (string memory)
Returns the base URI for the NFT's metadata, which is stored on IPFS.
promptDescription
Solidity
function promptDescription() external pure returns (string memory)
Returns a description of the NFT collection.
balanceOf
Solidity
function balanceOf(address owner) public view override returns (uint256)
Returns the number of NFTs owned by a specified address.
Notes
This contract uses the ERC721A contract, which is an optimized version of the ERC721 standard for NFTs.
The contract has a fixed maximum supply of 5 NFTs.
The _baseURI function returns a fixed IPFS URI for the NFT's metadata.
The promptDescription function returns a fixed description of the NFT collection.
