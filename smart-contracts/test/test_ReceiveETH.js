// Path: test/WVWToken.test.js
// SPDX-License-Identifier: MIT
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Teste Funções Básicas do contrato TokenSale", function () {
  it("Teste de transferencia da wallet Owner para a Adress1", async function () {
    const WVWToken = await ethers.getContractFactory("TokenSale");
    const wvwToken = await WVWToken.deploy('0x68B1D87F95878fE05B998F19b66F4baba5De1aed');
    await wvwToken.deployed();

    const [owner, addr1, addr2] = await ethers.getSigners();
    const ownerAddress = await owner.getAddress();
    const ownerBalance = await wvwToken.getBalance(ownerAddress);
    // owner balece show with console.log
    console.log('Saldo Inicial: ', ownerBalance.toString());

    // addr1 balece show with console.log
    const addr1Address = await addr1.getAddress();
    const addr1Balance = await wvwToken.getBalance(addr1Address);
    console.log('Saldo Inicial: ', addr1Balance.toString());

    // addr2 balece show with console.log
    const addr2Address = await addr2.getAddress();
    const addr2Balance = await wvwToken.getBalance(addr2Address);
    console.log('Saldo Inicial: ', addr2Balance.toString());

    // Transferencia de tokens da wallet Owner para a Adress1
    const teste = await wvwToken.purchaseTokenOption1();
    console.log('teste: ', teste);
    // Transferencia de tokens da wallet Owner para a Adress2
    //await wvwToken.purchaseTokenOption1(purchaseTokenOption2);

    // owner balece show with console.log
    const valorfinaltoken = await wvwToken.getBalance(ownerAddress);
    console.log('Saldo Final: ', valorfinaltoken.toString());

    // addr1 balece show with console.log
    const valorfinaladdr1 = await wvwToken.getBalance(addr1Address);
    console.log('Saldo Final: ', valorfinaladdr1.toString());

    // addr2 balece show with console.log
    const valorfinaladdr2 = await wvwToken.getBalance(addr2Address);
    console.log('Saldo Final: ', valorfinaladdr2.toString());

  });

});