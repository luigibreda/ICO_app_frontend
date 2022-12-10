const { ethers } = require("hardhat");

async function main() {
  //STKN
  console.log("Deploying STKN Contract...");
  const STKNFactory = await ethers.getContractFactory("WVWToken");
  const stkn = await STKNFactory.deploy();

  console.log("Deployed STKN:", stkn.address);

  //STKNICO
  console.log("Deploying StknICO Contract...");
  const StknICOFactory = await ethers.getContractFactory("WVWICO");
  const StknICO = await StknICOFactory.deploy(
    "0x180eaDb617233c44985729fc916eC7b7F12Bc056",
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
