// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9; // state the version of solidity

// contract == class in js

contract Inbox {
    string public message;

    constructor(string memory init) {
        message = init;
    }

    function setMessage(string memory newMessage) public {
        message = newMessage;
    }

    // function getMessage() public view returns (string memory) {
    //     return message;
    // }
    /*this getMessage() function is already provided when
    a memory location is created*/
}
