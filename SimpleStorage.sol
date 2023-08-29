// SPDX-License-Identifier: MIT

// defining solidity version
pragma solidity ^0.8.18;

// defining SimpleStorage contract
contract SimpleStorage {
    // defining FavouriteNumber
    uint256 public FavouriteNumber;

    // creating struct to hole a FavouriteNumber and name
    struct People {
        uint256 FavouriteNumber;
        string Name;
    }

    // creaing array to hold multiple instances of People
    People[] public people;

    // defining function to change value of FavouriteNumber
    function store(uint256 _favouriteNumber) public {
        FavouriteNumber = _favouriteNumber;
    }

    // defining function to retrieve FavouriteNumber
    function retrieve() public view returns(uint256){
        return FavouriteNumber;
    }

    // defining function to add people to People array
    function addPeople (string memory _name, uint256 _favouriteNumber) public {
        people.push(People(_favouriteNumber, _name));

    }
}