// Path: test/WVWToken.test.js
// SPDX-License-Identifier: MIT
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("WVWToken", function () {
  it("Teste do Token WVW", async function () {
    const WVWToken = await ethers.getContractFactory("WVWToken");
    const wvwToken = await WVWToken.deploy();
    await wvwToken.deployed();
    const [owner] = await ethers.getSigners();
    const ownerAddress = await owner.getAddress();
    const ownerBalance = await wvwToken.balanceOf(ownerAddress);
    console.log('saldo inicial', ownerBalance.toString());
    expect(await wvwToken.name()).to.equal("WVW Token");
    expect(await wvwToken.symbol()).to.equal("WVWToken");
  });


 // function to send tokens wvw to addr1 and check balance.
  it("Teste de transações do Token WVW", async function () {
    const WVWToken = await ethers.getContractFactory("WVWToken");
    const wvwToken = await WVWToken.deploy();
    await wvwToken.deployed();
    const [owner, addr1, addr2] = await ethers.getSigners();

    const ownerAddress = await owner.getAddress();
    const ownerBalance = await wvwToken.balanceOf(ownerAddress);

    const addr1Address = await addr1.getAddress();
    const addr1Balance = await wvwToken.balanceOf(addr1Address);

    const addr2Address = await addr2.getAddress();
    const addr2Balance = await wvwToken.balanceOf(addr2Address);

    console.log('Saldo Inicial');
    console.log('Saldo WVW Token', ownerBalance.toString());
    console.log('Saldo Addr1', addr1Balance.toString());
    console.log('Saldo Addr2', addr2Balance.toString());

    await wvwToken.transfer(addr1.address, 10000);
    await wvwToken.transfer(addr2.address, 10000);

    const valorfinaltoken = await wvwToken.balanceOf(ownerAddress);
    const valorfinaladdr1 = await wvwToken.balanceOf(addr1Address);
    const valorfinaladdr2 = await wvwToken.balanceOf(addr2Address);
    console.log('Saldo Final');
    console.log('Saldo WVW Token', valorfinaltoken.toString());
    console.log('Saldo Addr1', valorfinaladdr1.toString());
    console.log('Saldo Addr2', valorfinaladdr2.toString());
    expect(await wvwToken.name()).to.equal("WVW Token");
    expect(await wvwToken.symbol()).to.equal("WVWToken");
  });

  describe("WVWToken ICO", function () {
    it("Teste do Token WVW", async function () {
        const WVWToken = await ethers.getContractFactory("WVWToken");
        const wvwToken = await WVWToken.deploy();
        await wvwToken.deployed();

        console.log(wvwToken.address);
        const WVWTokenICOFacotory = await ethers.getContractFactory("WVWICO");
        const WVWTokenICO = await WVWTokenICOFacotory.deploy('0x180eaDb617233c44985729fc916eC7b7F12Bc056', wvwToken.address);
        await WVWTokenICO.deployed();
        console.log(WVWTokenICO.address);
        
        
        const [owner, addr1] = await ethers.getSigners();
        const ownerAddress = await owner.getAddress();
        const ownerBalance = await wvwToken.balanceOf(ownerAddress);

        const statusICO = await WVWTokenICO.getICOState();
        console.log('Status ICO:', statusICO);
        const startICO = await WVWTokenICO.startICO();
        const statusICO2 = await WVWTokenICO.getICOState();
        console.log('Status ICO:', statusICO2);

        const tokenDisp = await WVWTokenICO.investorBalanceOf(ownerAddress);
        console.log('Tokens Disponiveis:', tokenDisp.toString());

        const investTest = await WVWTokenICO.TransferFromWithApprove( addr1.address, 100);
        console.log(investTest);    
        // buy tokens function test
    });
    
    

  });

});