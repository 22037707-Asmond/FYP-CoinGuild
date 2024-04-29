// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract PawGuild {
    string public name = "Pet Contract";
    uint public petCount = 0;

    struct Pet {
        uint id;
        string name;
        string breed;
        uint age;
        string image;
        address owner;
        Agent agent;
        int[] insurances;
    }

    struct Owner {
        address ownerAddress;
        string accID;
        string password;
        string name;
        string email;
        string phone;
    }

    struct Agent {
        address agentAddress;
        string accID;
        string password;
        string name;
        string email;
        string phone;
    }

    struct Insurance {
        uint id;
        string insuranceType;
        string insuranceDetails;
        string insuranceStatus;
        address owner;
        address agent;
    }

    struct Claims {
        uint id;
        string claimType;
        string claimDetails;
        string claimStatus;
        address owner;
        address agent;
    }
    
    mapping(uint => Pet) public pets; // Array/Dictionary to store pets with their ID as keyholders to the details
    mapping(address => Owner) public owners; // Array/Dictionary to store owners with their address as keyholders to the details
    mapping(address => Agent) public agents; // Array/Dictionary to store agents with their address as keyholders to the details
    Agent[] public agentList; // Array to store all agents
    Owner[] public ownerList; // Array to store all owners



    // Function to add a pet to the blockchain
    function addPet(string memory _name, string memory _breed, uint _age, string memory _image) public {
        petCount++;
        pets[petCount] = Pet(petCount, _name, _breed, _age, _image, msg.sender, agents[msg.sender], new int[](0));
    }

    // Function to add an owner to the blockchain
    function addOwner(string memory _accID, string memory _password, string memory _name, string memory _email, string memory _phone) public {
        owners[msg.sender] = Owner(msg.sender, _accID, _password, _name, _email, _phone);
        ownerList.push(Owner(msg.sender, _accID, _password, _name, _email, _phone));
    }

    // Function to add an agent to the blockchain
    function addAgent(string memory _accID, string memory _password, string memory _name, string memory _email, string memory _phone) public {
        agents[msg.sender] = Agent(msg.sender, _accID, _password, _name, _email, _phone);
        agentList.push(Agent(msg.sender, _accID, _password, _name, _email, _phone));
    }



}
