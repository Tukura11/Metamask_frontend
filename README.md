Metacrafters Frontend and Smart Contract Project
Overview
This project is a full-stack application that consists of a React-based frontend and a Solidity-based smart contract. The frontend interacts with the smart contract to send and retrieve messages.
Features
Send a message to the blockchain
Retrieve the sent message from the blockchain
Clear the retrieved message
Technical Details
Frontend:
Built with React and ethers.js
Uses the useState hook for state management
Interacts with a smart contract at the address 0x99eB607f86f9fA9bB9dFb7Bd9513dBac1A2347Bf
Uses the ethers library to interact with the Ethereum blockchain
Utilizes the BrowserProvider and getSigner functions from ethers to enable blockchain interactions
Smart Contract:
Written in Solidity ^0.8.9
Licensed under the MIT License
Deployed at the address 0x99eB607f86f9fA9bB9dFb7Bd9513dBac1A2347Bf
Has a constructor to set the initial message
Has a setMessage function to update the message
Has a getMessage function to retrieve the current message
Usage
Clone the repository and navigate to the project directory
Run npm install to install dependencies
Run npm start to start the application
Interact with the application by sending and retrieving messages
Note
This project assumes you have a basic understanding of blockchain and smart contract concepts.
Make sure you have a compatible Ethereum wallet installed in your browser (e.g. MetaMask) to interact with the blockchain.
License
This project is licensed under the MIT License. See the  file for details.

