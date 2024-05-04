const hre = require("hardhat");

async function main() {
  const JT_Token = await hre.ethers.getContractFactory("JTokenNFT");

  const jtTokenNFT = await JT_Token.deploy();

  console.log("JT NFT deployed to: ", jtTokenNFT.target);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
