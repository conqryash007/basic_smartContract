import assert from "assert";
import ganache from "ganache-cli";
import Web3 from "web3";//Web3 is a js class

//set up a provider
//provider is a interface between some etherium network and web3

const web3 = new Web3(ganache.provider());// 1. instance of Web3 class
// 2. constructor function called with a provider




