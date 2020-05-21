pragma solidity ^0.6.5;

import "@openzeppelin/contracts-ethereum-package/contracts/math/SafeMath.sol";
import "@openzeppelin/upgrades/contracts/Initializable.sol";


/**
 * @title Simple Storage
 * @dev A simple way to save a number.
 */
contract UpgradableStorage is Initializable {
    using SafeMath for uint256;

    uint256 storedData;

    /**
     * @dev Set the number to be saved.
     * @param x uint256 The number to be saved.
     */
    function setup(uint256 x) public initializer {
        storedData = x;
    }

    /**
     * @dev Set the number to be saved.
     * @param x uint256 The number to be saved.
     */
    function set(uint256 x) public {
        storedData = x;
    }

    /**
     * @dev Gets the saved number.
     * @return An uint256 representing the saved number.
     */
    function get() public view returns (uint256) {
        return storedData;
    }
}
