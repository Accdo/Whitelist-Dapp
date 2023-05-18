// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract Whitelist{

    // 최대 허용 가능한 화이트리스트 수
    uint8 public maxWhitelistAddresses;

    // 화이트리스트에 등록된 지갑 주소(화리 등록시 값이 True)
    mapping(address => bool) public whitelistAddresses;

    // 실제 화리에 등록한 지갑 수
    uint public numAddressesWhitelisted;

    // Whitelist컨트랙트가 실행될 때 함께 실행되는 생성자함수
    constructor(uint8 _maxWhitelistAddresses){
        maxWhitelistAddresses = _maxWhitelistAddresses;
    }

    // 지갑 주소를 화이트리스트에 등록시켜주는 함수
    function addAddressToWhitelist() public {
        // 특정 지갑이 화리에 이미 등록이 되어있는지 확인하기
        require(!whitelistAddresses[msg.sender], "You are already on the whitelist");

        // 허용 가능한 최대 인원수보다 더 많은 사람들이 화리에 등록하려 할때 에러 처리
        require(numAddressesWhitelisted < maxWhitelistAddresses, "More addresses cant be added, limit reached");

        // 화리에 등록시킬 주소를 맵에 추가, 키는 지갑주소, 값은 TRUE
        whitelistAddresses[msg.sender] = true;

        // 실제 화리에 등록된 지갑 '수' 증가시키기
        numAddressesWhitelisted += 1;
    }
}