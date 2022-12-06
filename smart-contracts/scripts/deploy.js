const { ethers } = require("hardhat");

async function main() {
  //STKN
  console.log("Deploying STKN Contract...");
  const STKNFactory = await ethers.getContractFactory("STKN");
  const stkn = await STKNFactory.deploy();

  console.log("Deployed STKN:", stkn.address);

  //STKNICO
  console.log("Deploying StknICO Contract...");
  const StknICOFactory = await ethers.getContractFactory("StknICO");
  const stknICO = await StknICOFactory.deploy(
    "0x31Af915910AB95698ed8b2C5E0847DEdfc5A956f",
    stkn.address
  );

  console.log("Deployed StknICO:", StknICO.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
