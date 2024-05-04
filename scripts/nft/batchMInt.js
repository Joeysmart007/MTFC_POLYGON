const hre = require("hardhat");
require("dotenv").config();

async function main() {
  const JT_TokenNFTFactory = await hre.ethers.getContractFactory("JTokenNFT");
  const jtToken = await JT_TokenNFTFactory.attach(process.env.CONTRACT_ADDRESS);

  const mintTx = await jtToken.safeMint(5);
  await mintTx.wait();

  console.log(
    "Successfully minted: " +
      (await jtToken.balanceOf(process.env.WALLET_ADDRESS)) +
      " JT NFTs to " +
      process.env.WALLET_ADDRESS
  );
  console.log(await jtToken.promptDescription());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
