const { ethers } = require("hardhat");

describe("This is our main Faucet testing scope", function () {
  let faucet, signerAddress, signer;
  
  before("deploy the contract instance first", async function () {
    const Faucet = await ethers.getContractFactory("STKN");
    faucet = await Faucet.deploy();
    await faucet.deployed();

    // get default signer, in Signer abstraction form
    signer = ethers.provider.getSigner(0);
    const teste = ethers.Faucet.startICO();
    console.log('teste');
    console.log(teste);

    // get default signer, but just the address!
    [signerAddress] = await ethers.provider.listAccounts();
  }); 

});
