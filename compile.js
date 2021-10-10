const path = require("path");
const fs = require("fs");
const solc = require("solc");

const inboxPath = path.resolve(__dirname,"contract","Inbox.sol");
const source = fs.readFileSync(inboxPath,"utf8");
let input = {
    language: 'Solidity',
    sources: {
        'Inbox.sol' : {
            content: source
        }
    },
    settings: {
        outputSelection: {
            '*': {
                '*': [ '*' ]
            }
        }
    }
};
let output = JSON.parse(solc.compile(JSON.stringify(input)));

console.log(output.contracts['Inbox.sol']["Inbox"].abi);

exports.abi = output.contracts['Inbox.sol']["Inbox"].abi;
exports.bytecode = output.contracts['Inbox.sol']['Inbox'].evm.bytecode.object;