const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3"); //Web3 is a js class
const { abi, bytecode } = require("./../compile");

//set up a provider
//provider is a interface between some etherium network and web3

const web3 = new Web3(ganache.provider()); // 1. instance of Web3 class
// 2. constructor function called with a provider

//////////////// Basics of Mocha //////////////////
/*
class Car {
  park() {return "stopped"}
  drive() {return "vroom";}
}
let car;
beforeEach(() => {
  car = new Car();
});

describe("car class test", () => {
  it("can park", () => {
    assert.strictEqual(car.park(), "stopped");
});
  it("can drive", () => {
    assert.strictEqual(car.drive(), "vroom");
  });
});
*/
let accounts;
let inbox;
beforeEach(async () => {
  accounts = await web3.eth.getAccounts();

  inbox = await new web3.eth.Contract(abi)
    .deploy({
      data: bytecode,
      arguments: ["hello"],
    })
    .send({ from: accounts[0], gas: 1000000 });
});

describe("Inbox", () => {
  it("", () => {
    console.log(inbox);
  });
});
