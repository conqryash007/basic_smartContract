const hdWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("Web3");
const { abi, bytecode } = require("./compile");

const provider = new hdWalletProvider(
  "receive chunk sugar century school coin lyrics fluid vessel december stone forget",
  "https://rinkeby.infura.io/v3/d74a4e3b04cc4061a37770132b6fd0b6"
);
//provider is a interface between some etherium network and web3
//provider with help of truffle
//Mnemonic from account on metamask
//deployed on the rinkbey test network

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log("My account : ", accounts[0]);
  const result = await new web3.eth.Contract(abi)
    .deploy({
      data: bytecode,
      arguments: ["Hello"],
    })
    .send({ from: accounts[0], gas: "1000000" });

  console.log("contract deployed on :", result.options.address);
};
deploy();
