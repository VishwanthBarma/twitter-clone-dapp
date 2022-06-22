require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.2",
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/fTKYqzmzzue9lVDuLzxca9brvi4Bw9EG',
      accounts: [
        'dc90cf356dc1b1180ff83af856d3764abfdd7babe5add10a830739c807487c2e'
      ],
    },
  },
};
