// contracts/Box.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
 
contract StoreV2 is UUPSUpgradeable  {
    uint256 private value;


    // Emitted when the stored value changes
    event ValueChanged(uint256 newValue);

    // function initialize(uint256 v) public initializer {
    //    value = v;
    // }

    // Stores a new value in the contract
    function store(uint256 newValue) public {
        value = newValue;
        emit ValueChanged(newValue);
    }

    // Reads the last stored value
    function retrieve() public view returns (uint256) {
        return value;
    }

      // Increments the stored value by 1 - new function added
    function increment() public {
        value = value + 1;
        emit ValueChanged(value);
    }

    function _authorizeUpgrade(address newImplementation) override internal virtual{}


}