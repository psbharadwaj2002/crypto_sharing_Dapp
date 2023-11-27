require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/OYUNNgQTazsl6DwTcKLm3rKbwunMCpox',
      accounts: ['c6400e8019bc45697472d674f6d7fceecc07c4098bdb4462f7994d12a006ba2a'],
    },
  },
};