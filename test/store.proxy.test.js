
const { expect } = require('chai');


const { deployProxy,upgradeProxy } = require('@openzeppelin/truffle-upgrades');

const Store = artifacts.require('Store');
const StoreV2 = artifacts.require('StoreV2');

describe('upgrades', () => {
  it('works', async () => {

    const store = await deployProxy(Store, [42],{  initializer: 'initialize' ,kind:'uups' });

    const storeV2 = await upgradeProxy(store.address, StoreV2);

    expect((await storeV2.retrieve()).toString()).to.equal('42');

    await storeV2.increment();

    expect((await storeV2.retrieve()).toString()).to.equal('43');

    await storeV2.increment();

    expect((await storeV2.retrieve()).toString()).to.equal('44');

    const storeV3 = await upgradeProxy(storeV2.address, Store);

    expect((await storeV3.retrieve()).toString()).to.equal('44');


  });
});