const { ethers } = require("hardhat");

async function main() {
  //STKN
  console.log("Deploying IERC20Bing Contract...");
  const STKNFactory = await ethers.getContractFactory("TokenSale");
  const stkn = await STKNFactory.deploy('0x68B1D87F95878fE05B998F19b66F4baba5De1aed');

  console.log("Deployed STKN:", stkn.address);

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
