const hre = require("hardhat");
require("dotenv").config();

async function main() {
  const JT_Token = await hre.ethers.getContractFactory("JTokenNFT");

  const jtToken = await JT_Token.attach(process.env.CONTRACT_ADDRESS);
  const balance = (
    await jtToken.balanceOf(process.env.WALLET_ADDRESS)
  ).toString();

  console.log("Balance: ", balance);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
