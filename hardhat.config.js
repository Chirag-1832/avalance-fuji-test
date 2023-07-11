require("@nomicfoundation/hardhat-toolbox");

const FORK_FUJI = false;
const FORK_MAINNET = false;
let forkingData = undefined;
const PRIVATE_KEY =
    process.env.PRIVATE_KEY ||
    "0x256374abec0ab35b81c2cbc2afa4178eb43ea2956df9b2af19ff7ee048aad226"

if (FORK_MAINNET) {
  forkingData = {
    url: "https://api.avax.network/ext/bc/C/rpcc",
  };
}
if (FORK_FUJI) {
  forkingData = {
    url: "https://api.avax-test.network/ext/bc/C/rpc",
  };
}

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    hardhat: {
      gasPrice: 225000000000,
      chainId: 43112
    },
    fuji: {
      url: 'https://api.avax-test.network/ext/bc/C/rpc',
      gasPrice: 225000000000,
      chainId: 43113,
      accounts: [PRIVATE_KEY]
      
    },
    mainnet: {
      url: 'https://api.avax.network/ext/bc/C/rpc',
      gasPrice: 225000000000,
      chainId: 43114,
      accounts: 
        [PRIVATE_KEY]
      
    }
  }
}
module.exports = {
  // ...rest of the config...
  etherscan: {
    apiKey: "EI2PSDBF3MMXXG3CHAVAIUXDZSMM9UZQ2F",
  },
};