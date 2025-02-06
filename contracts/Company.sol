// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./UnityFlow.sol";
import "./TokenUF.sol";

contract Company is Ownable {
    UnityFlow public unityFlow;
    TokenUF public token;

    uint id;
    string public name;

    address public founder;
    address[] public cofounders;

    uint256 public totalFundsETH;
    uint256 public totalFundsUF;
    address[] public fundraisers;

    uint256 public totalInvestmentsETH;
    uint256 public totalInvestmentsUF;

    mapping(address => uint256) public investorETHBalances;
    mapping(address => uint256) public investorUFBalances;

    uint public fundraisingCount;

    event CofounderAdded(address cofounder);

    event InvestmentReceived(address investor, uint256 amount, string asset);
    event InvestmentWithdrawn(address investor, uint256 amount, string asset);

    event FundraiserCreated(address fundraiserContract);
    event FundraiserCompleted(address fundraiserContract, uint totalCollectedETH, uint totalCollectedUF);

    event FundsReceived(uint256 amount, address sender, string asset);
    event FundsWithdrawn(uint256 amount, address receiver, string asset);

    modifier onlyFounderOrCofounder() {
        require(msg.sender == founder || _isCofounder(msg.sender), "Not authorized");
        _;
    }

    constructor(uint _id, string memory _name, address _founder, address _unityFlow, address _token) Ownable(_founder) {
        require(_founder != address(0), "Invalid founder address");
        require(_unityFlow != address(0), "Invalid UnityFlow address");
        require(_token != address(0), "Invalid TokenUF address");
        
        id = _id;
        name = _name;
        founder = _founder;
        unityFlow = UnityFlow(_unityFlow);
        token = TokenUF(_token);
    }

    receive() external payable {
        receiveETH();
    }

    function receiveETH() public payable {
        require(msg.value > 0, "Must send some funds");
        totalFundsETH += msg.value;
        unityFlow.updateDonations(msg.value, "ETH");
        emit FundsReceived(msg.value, msg.sender, "ETH");
    }

    function receiveUF(uint256 amount) external {
        require(amount > 0, "Must send some funds");
        require(token.balanceOf(msg.sender) >= amount, "Insufficient token balance");

        token.transferFrom(msg.sender, address(this), amount);
        totalFundsUF += amount;

        unityFlow.updateDonations(amount, "UF");
        
        emit FundsReceived(amount, msg.sender, "UF");
    }

    function widthdrawETH(address to, uint amount) public onlyOwner {
        require(amount > 0 && amount <= totalFundsETH, "Invalid withdraw amount");
        totalFundsETH -= amount;
        (bool sent, ) = to.call{value: amount}("");
        require(sent, "Failed to send funds.");
        emit FundsWithdrawn(amount, msg.sender, "ETH");
    }

    function widthdrawUF(address to, uint amount) public onlyOwner {
        require(amount > 0 && amount <= totalFundsUF, "Invalid withdraw amount");
        require(token.balanceOf(address(this)) >= amount, "not enougth tokens");
        totalFundsUF -= amount;
        token.transfer(to, amount);
        emit FundsWithdrawn(amount, msg.sender, "UF");
    }

    function fullWithdraw(address to) external onlyOwner {
        if (address(this).balance > 0) {
            widthdrawETH(to, address(this).balance - 1);
        }
        if (token.balanceOf(address(this)) > 0) {
            widthdrawUF(to, token.balanceOf(address(this)));
        }
    }

    function createFundraising(
        string memory title,
        string memory description,
        string memory category,
        uint goalUSD,
        uint deadline,
        string memory image
    ) external onlyFounderOrCofounder {
        fundraisingCount++;
        address newFundraiser = unityFlow.createFundraising(
            fundraisingCount, title, description, category, goalUSD, deadline, image
        );
        fundraisers.push(newFundraiser);
        emit FundraiserCreated(newFundraiser);
    }

    function getCompanyFundraisers() external view returns (address[] memory) {
        return fundraisers;
    }

    function onFundraiserCompleted(uint totalCollectedETH, uint totalCollectedUF) external {
        require(_isFundraiser(msg.sender), "Caller is not a fundraiser");
        totalFundsETH += totalCollectedETH;
        totalFundsUF += totalCollectedUF;
        fundraisingCount--;
        emit FundraiserCompleted(msg.sender, totalCollectedETH, totalCollectedUF);
    }

    function investETH() external payable {
        require(msg.value > 0, "Investment must be greater than 0");
        
        investorETHBalances[msg.sender] += msg.value;
        totalInvestmentsETH += msg.value;
        totalFundsETH += msg.value;

        unityFlow.increaseInvestments(msg.value, "ETH");
        emit InvestmentReceived(msg.sender, msg.value, "ETH");
    }

    function investUF(uint256 amount) external {
        require(amount > 0, "Investment must be greater than 0");
        require(token.balanceOf(msg.sender) >= amount, "Insufficient token balance");

        token.transferFrom(msg.sender, address(this), amount);
        require(token.balanceOf(address(this)) >= totalFundsUF + amount, "Transfer failed");

        investorUFBalances[msg.sender] += amount;
        totalInvestmentsUF += amount;
        totalFundsUF += amount;

        unityFlow.increaseInvestments(amount, "UF");
        emit InvestmentReceived(msg.sender, amount, "UF");
    }

    function withdrawInvestmentETH(uint256 amount) external {
        require(amount > 0, "Withdrawal amount must be greater than 0");
        require(investorETHBalances[msg.sender] >= amount, "Insufficient investment balance");

        investorETHBalances[msg.sender] -= amount;
        totalInvestmentsETH -= amount;
        totalFundsETH -= amount;

        (bool sent, ) = payable(msg.sender).call{value: amount}("");
        require(sent, "Failed to send ETH");

        unityFlow.decreaseInvestments(amount, "ETH");
        emit InvestmentWithdrawn(msg.sender, amount, "ETH");
    }

    function withdrawInvestmentUF(uint256 amount) external {
        require(amount > 0, "Withdrawal amount must be greater than 0");
        require(investorUFBalances[msg.sender] >= amount, "Insufficient investment balance");

        investorUFBalances[msg.sender] -= amount;
        totalInvestmentsUF -= amount;
        totalFundsUF -= amount;

        token.transfer(msg.sender, amount);
        unityFlow.decreaseInvestments(amount, "UF");

        emit InvestmentWithdrawn(msg.sender, amount, "UF");
    }

    function addCofounder(address cofounder) external onlyOwner {
        require(cofounder != address(0), "Invalid cofounder address");
        cofounders.push(cofounder);
        emit CofounderAdded(cofounder);
    }

    function _isCofounder(address user) private view returns (bool) {
        for (uint i = 0; i < cofounders.length; i++) {
            if (cofounders[i] == user) {
                return true;
            }
        }
        return false;
    }

    function _isFundraiser(address fundraiser) private view returns (bool) {
        for (uint i = 0; i < fundraisers.length; i++) {
            if (fundraisers[i] == fundraiser) {
                return true;
            }
        }
        return false;
    }
}