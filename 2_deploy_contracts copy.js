const Factory = artifacts.require("SkeleFactory.sol");
const Token1 = artifacts.require("Token1.sol");
const Token2 = artifacts.require("Token2.sol");

module.exports = async function (deployer, addresses) {
  await deployer.deploy(Factory, addresses[0]);
  const factory = await Factory.deployed();

  let token1Address, token2Address;
    //Uncomment for Mainnet
  //token1Address = '';
  //token2Address = '';

    //Comment out Below For Mainnet
  await deployer.deploy(Token1);
  await deployer.deploy(Token2);
  const token1 = await Token1.deployed();
  const token2 = await Token2.deployed();
  token1Address = token1.address;
  token2Address = token2.address;
    //Up to Here
  await factory.createPair(token1Address, token2Address);
};
