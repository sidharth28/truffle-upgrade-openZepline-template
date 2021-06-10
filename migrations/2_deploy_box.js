
const { deployProxy } = require('@openzeppelin/truffle-upgrades');

const Store = artifacts.require('Store');

module.exports = async function (deployer) {
  let store1 = await deployProxy(Store, [22], { deployer, initializer: 'initialize' ,kind:'uups' });
  console.log(store1.address);

};

