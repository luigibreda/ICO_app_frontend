# ICO_app_frontend
[![smartcontract](https://iili.io/HCiC9t4.png)](https://iili.io/HCiC9t4.png)


### Stack Usado
- Solidity
- Hardhat
- Ethers.js
- BSC Testenet
- Tailwind css
- React

### DEMO no Vercel 
- [Vercel](https://ico-app-frontend.vercel.app/)

### Smart Contract BSC
- [Testnet BSC](#)


### Intruções de instalação Smart Contract

``` bash
# Inicia o repositório 
$ npm init --yes

# instala o hardhat no repositório
$ npm install --save-dev hardhat

# Instala algumas dependencias necessárias
$ npm install --save-dev "@nomiclabs/hardhat-ethers@^2.0.0" "ethereum-waffle@^3.2.0" "ethers@^5.0.0"

# inicia o hardhat
$ npx hardhat

# caso tenha clonado o repositório os passos anteriores talves sejam desnecessários
# lembre-se de conferir seu config.hardhat

# da um clean no ambiente 
$ npx hardhat clean

# compila o contrato
$ npx hardhat compile

# faz o deploy do contrato na rede escolhida
$ npx hardhat run scripts/deploy.js --network bsctestnet
```

### Instalando o Front-End
```
# Clona o repositório
$ git clone https://github.com/luigibreda/ICO_app_frontend.git

# Instala as dependencias com npm
$ npm install

# Inicia o servidor local
$ npm start

```

## Próximos passos
 - Modificar interface de acordo com o as funcionalidades
 - Criar uma home estilo Landing Page
 - Adequar as sub páginas 
 - Criar a identidade visual da aplicação 

