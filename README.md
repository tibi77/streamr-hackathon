# Proof of Chain of Custody

This is a proof of concept application for tracking the chain of custody of physical goods using blockchain technology.

## Overview

The Proof of Chain of Custody application was developed as part of the Streamr Hackathon. It uses the Ethereum blockchain to track the movement of goods from one party to another, creating an immutable record of the chain of custody.

The application allows users to create and track assets, as well as add and verify their movements. Each asset is represented by a unique token on the blockchain, which is transferred from one owner to another as the asset changes hands.

The application includes a web interface for users to interact with the blockchain, as well as a set of smart contracts that manage the token transfers and storage of the asset data.

## Installation

To run the Proof of Chain of Custody application, you will need to have Node.js and Truffle installed on your system.

1. Clone the repository: `git clone https://github.com/tibi77/streamr-hackathon.git`
2. Navigate to the project directory: `cd streamr-hackathon`
3. Install dependencies: `npm install`
4. Compile the smart contracts: `truffle compile`
5. Migrate the contracts to the blockchain: `truffle migrate`
6. Start the application: `npm start`

## Usage

Once the application is running, you can access it by navigating to `http://localhost:3000` in your web browser.

To create a new asset, click the "New Asset" button on the homepage and fill out the form with the asset details. Once the asset is created, it will be assigned a unique token on the blockchain.

To transfer an asset to another user, click the "Transfer" button next to the asset you wish to transfer and enter the recipient's Ethereum address.

To view the movement history of an asset, click the "View History" button next to the asset. This will display a list of all the previous owners of the asset, as well as the dates and times of the transfers.

## Contributing

We welcome contributions to the Proof of Chain of Custody application! If you would like to contribute, please open a pull request with your changes.

## License

This application is licensed under the MIT License. See the LICENSE file for more information.
