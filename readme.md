# Degen Token

Degen Token is an ERC20 token built on the Ethereum blockchain. It provides functionality for minting new tokens, transferring tokens, burning tokens, and redeeming tokens for in-game items.

## Getting Started
You have to use npm init command to start this is in your own local pc

### Prerequisites

To interact with the Degen Token smart contract, you'll need the following:

- A metamask wallet with some avax in it

### Deployment

1. Deploy the Degen Token smart on avalance fuji testnet using hardhat.
2. Once deployed, the smart contract will create an instance of the Degen Token with the symbol "DGN".

## Functions

The Degen Token smart contract provides the following functions:

- `mint(address to, uint256 amount)`: Mint new Degen tokens and assign them to the specified address. Only the contract owner can call this function.
- `balance()`: Get the token balance of the caller's address.
- `tranfer(address to, uint256 value)`: Transfer Degen tokens from the caller's address to the specified address. The caller must have a sufficient balance and approve the transfer.
- `storeinfo()`: Get information about the available in-game items and their token prices.
- `redeemTokens(uint256 value)`: Redeem Degen tokens for in-game items based on the specified value.

## Configuration

The Degen Token smart contract uses the Hardhat development environment and provides the following network configurations:

- `hardhat`: Hardhat development network configuration.
- `fuji`: Avalanche Fuji Testnet configuration.
- `mainnet`: Avalanche Mainnet configuration.

Please ensure that you have set up the appropriate network and account configurations in the `hardhat.config.js` file.

## License

This project is licensed under the MIT License.

## Author

Chirag Arora


