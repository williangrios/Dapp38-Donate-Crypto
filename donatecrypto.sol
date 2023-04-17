// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.17;

struct Campaign {
    address author;
    string title;
    string description;
    string videoUrl;
    string imageUrl;
    uint256 balance;
    bool active;
}

contract DonateCripto {

    uint public fee = 100;
    uint public nextId = 0;
    mapping (uint256 => Campaign) public campaigns;
    
    function addCampaign(string calldata title, string calldata description, string calldata videoUrl, string calldata imageUrl) public {
        Campaign memory newCampaign;
        newCampaign.title = title;
        newCampaign.description = description;
        newCampaign.videoUrl = videoUrl;
        newCampaign.imageUrl = imageUrl;
        newCampaign.active = true;
        newCampaign.author = msg.sender;
        nextId ++; 
        campaigns[nextId] = newCampaign;
    }

    function donate(uint id) public payable{
        require(msg.value > 0);
        require(campaigns[id].active == true);
        campaigns[id].balance += msg.value;
    }

    function withdraw(uint id) public {
        Campaign memory campaign = campaigns[id];
        require(campaign.author == msg.sender);
        require(campaign.active == true);
        address payable recipient = payable(campaign.author);
        recipient.call{value: campaign.balance - fee}("");
        campaigns[id].active = false;
    }
}