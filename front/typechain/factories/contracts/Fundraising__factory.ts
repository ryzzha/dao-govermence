/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../common";
import type {
  Fundraising,
  FundraisingInterface,
  FundraisingParamsStruct,
} from "../../contracts/Fundraising";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "unityFlowAddress",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "company",
            type: "address",
          },
          {
            internalType: "string",
            name: "title",
            type: "string",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
          {
            internalType: "string",
            name: "image",
            type: "string",
          },
          {
            internalType: "string",
            name: "category",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "goalUSD",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256",
          },
          {
            internalType: "contract TokenUF",
            name: "token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "platformFeePercent",
            type: "uint256",
          },
        ],
        internalType: "struct FundraisingParams",
        name: "params",
        type: "tuple",
      },
      {
        internalType: "address",
        name: "_ethPriceFeed",
        type: "address",
      },
      {
        internalType: "address",
        name: "_tokenPriceFeed",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "donator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "currency",
        type: "string",
      },
    ],
    name: "DonationReceived",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "fundraiser",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "company",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "collectedETH",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "collectedUF",
        type: "uint256",
      },
    ],
    name: "FundraisingFailed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "fundraiser",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "company",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "collectedETH",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "collectedUF",
        type: "uint256",
      },
    ],
    name: "FundraisingSuccessful",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "donator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "currency",
        type: "string",
      },
    ],
    name: "RefundProcessed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[2]",
        name: "amounts",
        type: "uint256[2]",
      },
      {
        indexed: false,
        internalType: "string[2]",
        name: "currencies",
        type: "string[2]",
      },
    ],
    name: "Withdrawn",
    type: "event",
  },
  {
    inputs: [],
    name: "checkGoalReached",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "company",
    outputs: [
      {
        internalType: "contract Company",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "donateETH",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "donateUF",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "ethDonators",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "finalizeFundraising",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getDetails",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "donator",
        type: "address",
      },
    ],
    name: "getDonationETH",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "donator",
        type: "address",
      },
    ],
    name: "getDonationUF",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "tokenSymbol",
        type: "string",
      },
    ],
    name: "getDonationsForToken",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getDonators",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getLatestETHPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getLatestTokenPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getStatus",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isActive",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "platformFeePercent",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "refundETH",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "refundUF",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "contract TokenUF",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "ufDonators",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "unityFlow",
    outputs: [
      {
        internalType: "contract UnityFlow",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawFunds",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040526010805461ff0019166101001790553480156200002057600080fd5b5060405162002ca038038062002ca0833981016040819052620000439162000387565b60208301516001600160a01b0381166200007757604051631e4fbdf760e01b81526000600482015260240160405180910390fd5b62000082816200020a565b50600180546001600160a01b038087166001600160a01b03199283161790925584516007556020850151600580549190931691161790556040830151600890620000cd908262000591565b506060830151600990620000e2908262000591565b506080830151600a90620000f7908262000591565b5060a0830151600b906200010c908262000591565b5060c0830151600c5560e0830151600d55610100830151600280546001600160a01b03199081166001600160a01b03938416179091556101208501516014556000600e819055600f8190556010805460ff191690556003805483168685161790556004805490921684841617825560055460408051636bb886b160e11b81529051919094169363d7710d62938181019392918290030181865afa158015620001b8573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052620001e291908101906200066e565b5093955060069450620001fe9350859250849150620005919050565b5050505050506200076a565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b03811681146200027057600080fd5b50565b805162000280816200025a565b919050565b634e487b7160e01b600052604160045260246000fd5b60405161014081016001600160401b0381118282101715620002c157620002c162000285565b60405290565b604051601f8201601f191681016001600160401b0381118282101715620002f257620002f262000285565b604052919050565b600082601f8301126200030c57600080fd5b81516001600160401b0381111562000328576200032862000285565b60206200033e601f8301601f19168201620002c7565b82815285828487010111156200035357600080fd5b60005b838110156200037357858101830151828201840152820162000356565b506000928101909101919091529392505050565b600080600080608085870312156200039e57600080fd5b8451620003ab816200025a565b60208601519094506001600160401b0380821115620003c957600080fd5b908601906101408289031215620003df57600080fd5b620003e96200029b565b82518152620003fb6020840162000273565b60208201526040830151828111156200041357600080fd5b620004218a828601620002fa565b6040830152506060830151828111156200043a57600080fd5b620004488a828601620002fa565b6060830152506080830151828111156200046157600080fd5b6200046f8a828601620002fa565b60808301525060a0830151828111156200048857600080fd5b620004968a828601620002fa565b60a08301525060c083015160c082015260e083015160e08201526101009150620004c282840162000273565b8282015261012091508183015182820152809550505050620004e76040860162000273565b9150620004f76060860162000273565b905092959194509250565b600181811c908216806200051757607f821691505b6020821081036200053857634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200058c57600081815260208120601f850160051c81016020861015620005675750805b601f850160051c820191505b81811015620005885782815560010162000573565b5050505b505050565b81516001600160401b03811115620005ad57620005ad62000285565b620005c581620005be845462000502565b846200053e565b602080601f831160018114620005fd5760008415620005e45750858301515b600019600386901b1c1916600185901b17855562000588565b600085815260208120601f198616915b828110156200062e578886015182559484019460019091019084016200060d565b50858210156200064d5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b805180151581146200028057600080fd5b600080600080600080600080610100898b0312156200068c57600080fd5b885197506200069e60208a0162000273565b60408a01519097506001600160401b0380821115620006bc57600080fd5b620006ca8c838d01620002fa565b975060608b0151915080821115620006e157600080fd5b620006ef8c838d01620002fa565b965060808b01519150808211156200070657600080fd5b620007148c838d01620002fa565b955060a08b01519150808211156200072b57600080fd5b506200073a8b828c01620002fa565b9350506200074b60c08a0162000273565b91506200075b60e08a016200065d565b90509295985092959890939650565b612526806200077a6000396000f3fe6080604052600436106101615760003560e01c80638b4c40b0116100c1578063bf1482fa1161007a578063bf1482fa146103f1578063c4e5990f14610415578063d01e95a914610428578063eabcc3281461043d578063f2fde38b14610452578063fbbf93a014610472578063fc0c546a1461049e57600080fd5b80638b4c40b0146103255780638c639a851461032d5780638da5cb5b14610343578063955f2c3a146103615780639c39124b1461038e578063b332ba6e146103c457600080fd5b80634e69d5601161011e5780634e69d5601461024d5780635a9b0b891461026f5780636904c94d146102995780636cdf5557146102c65780636fca545b146102e6578063715018a6146102fb578063777e0d861461031057600080fd5b806301cb3b201461016657806312210e8a1461019057806322f3e2d4146101a757806324600fc3146101c6578063273b7190146101db5780632ef640ae14610209575b600080fd5b34801561017257600080fd5b5061017b6104be565b60405190151581526020015b60405180910390f35b34801561019c57600080fd5b506101a561052e565b005b3480156101b357600080fd5b5060105461017b90610100900460ff1681565b3480156101d257600080fd5b506101a56105f1565b3480156101e757600080fd5b506101fb6101f6366004611e2c565b610ad2565b604051610187929190611f51565b34801561021557600080fd5b5061023f610224366004611f7f565b6001600160a01b031660009081526013602052604090205490565b604051908152602001610187565b34801561025957600080fd5b50610262610e0a565b6040516101879190611fff565b34801561027b57600080fd5b50610284610e87565b60405161018799989796959493929190612012565b3480156102a557600080fd5b506005546102b9906001600160a01b031681565b60405161018791906120aa565b3480156102d257600080fd5b506001546102b9906001600160a01b031681565b3480156102f257600080fd5b506101a56110fc565b34801561030757600080fd5b506101a56111fe565b34801561031c57600080fd5b5061023f611212565b6101a56112a9565b34801561033957600080fd5b5061023f60145481565b34801561034f57600080fd5b506000546001600160a01b03166102b9565b34801561036d57600080fd5b5061023f61037c366004611f7f565b60136020526000908152604090205481565b34801561039a57600080fd5b5061023f6103a9366004611f7f565b6001600160a01b031660009081526012602052604090205490565b3480156103d057600080fd5b5061023f6103df366004611f7f565b60126020526000908152604090205481565b3480156103fd57600080fd5b50610406611471565b604051610187939291906120be565b6101a5610423366004612101565b611695565b34801561043457600080fd5b5061023f611998565b34801561044957600080fd5b506101a56119e1565b34801561045e57600080fd5b506101a561046d366004611f7f565b611a75565b34801561047e57600080fd5b50610487611ab3565b6040516101879b9a99989796959493929190612150565b3480156104aa57600080fd5b506002546102b9906001600160a01b031681565b600080670de0b6b3a76400006104d2611212565b600e546104df9190612201565b6104e9919061221e565b90506000670de0b6b3a76400006104fe611998565b600f5461050b9190612201565b610515919061221e565b600c549091506105258284612240565b10159250505090565b600d5442116105585760405162461bcd60e51b815260040161054f90612253565b60405180910390fd5b6105606119e1565b6105686104be565b156105855760405162461bcd60e51b815260040161054f9061228a565b33600090815260126020526040902054806105b25760405162461bcd60e51b815260040161054f906122b1565b336000818152601260205260408082208290555183156108fc0291849190818181858888f193505050501580156105ed573d6000803e3d6000fd5b5050565b6105f9611d54565b600d54421161061a5760405162461bcd60e51b815260040161054f90612253565b60105460ff16156106665760405162461bcd60e51b8152602060048201526016602482015275233ab732399030b63932b0b23c9031b630b4b6b2b21760511b604482015260640161054f565b61066e6104be565b6106c55760405162461bcd60e51b815260206004820152602260248201527f476f616c206e6f7420726561636865642e2043616e6e6f7420776974686472616044820152613b9760f11b606482015260840161054f565b60006064601454600e546106d99190612201565b6106e3919061221e565b905060006064601454600f546106f99190612201565b610703919061221e565b9050600082600e5461071591906122e2565b9050600082600f5461072791906122e2565b6010805461ffff19166001179055905083156107a757600160009054906101000a90046001600160a01b03166001600160a01b03166320302d55856040518263ffffffff1660e01b81526004016000604051808303818588803b15801561078d57600080fd5b505af11580156107a1573d6000803e3d6000fd5b50505050505b82156108865760025460015460405163095ea7b360e01b81526001600160a01b039283169263095ea7b3926107e39291169087906004016122f5565b6020604051808303816000875af1158015610802573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610826919061230e565b50600154604051632fba575d60e01b8152600481018590526001600160a01b0390911690632fba575d90602401600060405180830381600087803b15801561086d57600080fd5b505af1158015610881573d6000803e3d6000fd5b505050505b81156108f657600560009054906101000a90046001600160a01b03166001600160a01b0316633ecfd51e836040518263ffffffff1660e01b81526004016000604051808303818588803b1580156108dc57600080fd5b505af11580156108f0573d6000803e3d6000fd5b50505050505b80156109d55760025460055460405163095ea7b360e01b81526001600160a01b039283169263095ea7b3926109329291169085906004016122f5565b6020604051808303816000875af1158015610951573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610975919061230e565b5060055460405163d887103f60e01b8152600481018390526001600160a01b039091169063d887103f90602401600060405180830381600087803b1580156109bc57600080fd5b505af11580156109d0573d6000803e3d6000fd5b505050505b600554600e54600f54604051637cac182d60e01b8152600481019290925260248201526001600160a01b0390911690637cac182d90604401600060405180830381600087803b158015610a2757600080fd5b505af1158015610a3b573d6000803e3d6000fd5b50505050610a47611dd1565b610a4f611def565b8382526020808301849052604080518082018252600381526208aa8960eb1b8184015283528051808201825260028152612aa360f11b8184015291830191909152517f8932c848b22fea04242f493f89d3405567885298f572d135ca028ebd57e8b71390610ac290339085908590612346565b60405180910390a1505050505050565b606080604051602001610aee906208aa8960eb1b815260030190565b6040516020818303038152906040528051906020012083604051602001610b1591906123cd565b604051602081830303815290604052805190602001201480610b825750604051612aa360f11b60208201526022016040516020818303038152906040528051906020012083604051602001610b6a91906123cd565b60405160208183030381529060405280519060200120145b610bdf5760405162461bcd60e51b815260206004820152602860248201527f496e76616c696420746f6b656e2073796d626f6c2e205573652027455448272060448201526737b91013aaa3139760c11b606482015260840161054f565b60115460008167ffffffffffffffff811115610bfd57610bfd611e16565b604051908082528060200260200182016040528015610c26578160200160208202803683370190505b50905060008267ffffffffffffffff811115610c4457610c44611e16565b604051908082528060200260200182016040528015610c6d578160200160208202803683370190505b50905060005b83811015610dfe5760118181548110610c8e57610c8e612330565b9060005260206000200160009054906101000a90046001600160a01b0316838281518110610cbe57610cbe612330565b6001600160a01b03909216602092830291909101820152604051610cec91016208aa8960eb1b815260030190565b6040516020818303038152906040528051906020012087604051602001610d1391906123cd565b6040516020818303038152906040528051906020012003610d8f576012600060118381548110610d4557610d45612330565b60009182526020808320909101546001600160a01b031683528201929092526040019020548251839083908110610d7e57610d7e612330565b602002602001018181525050610dec565b6013600060118381548110610da657610da6612330565b60009182526020808320909101546001600160a01b031683528201929092526040019020548251839083908110610ddf57610ddf612330565b6020026020010181815250505b80610df6816123e9565b915050610c73565b50909590945092505050565b6060600d54421015610e37575060408051808201909152600681526561637469766560d01b602082015290565b610e3f6104be565b15610e6657506040805180820190915260078152667375636365737360c81b602082015290565b5060408051808201909152600681526519985a5b195960d21b602082015290565b60008060608060608060008060606007543060066008600a600b600c54600d54610eaf610e0a565b868054610ebb90612402565b80601f0160208091040260200160405190810160405280929190818152602001828054610ee790612402565b8015610f345780601f10610f0957610100808354040283529160200191610f34565b820191906000526020600020905b815481529060010190602001808311610f1757829003601f168201915b50505050509650858054610f4790612402565b80601f0160208091040260200160405190810160405280929190818152602001828054610f7390612402565b8015610fc05780601f10610f9557610100808354040283529160200191610fc0565b820191906000526020600020905b815481529060010190602001808311610fa357829003601f168201915b50505050509550848054610fd390612402565b80601f0160208091040260200160405190810160405280929190818152602001828054610fff90612402565b801561104c5780601f106110215761010080835404028352916020019161104c565b820191906000526020600020905b81548152906001019060200180831161102f57829003601f168201915b5050505050945083805461105f90612402565b80601f016020809104026020016040519081016040528092919081815260200182805461108b90612402565b80156110d85780601f106110ad576101008083540402835291602001916110d8565b820191906000526020600020905b8154815290600101906020018083116110bb57829003601f168201915b50505050509350985098509850985098509850985098509850909192939495969798565b600d54421161111d5760405162461bcd60e51b815260040161054f90612253565b6111256119e1565b61112d6104be565b1561114a5760405162461bcd60e51b815260040161054f9061228a565b33600090815260136020526040902054806111775760405162461bcd60e51b815260040161054f906122b1565b3360008181526013602052604080822091909155600254905163a9059cbb60e01b81526001600160a01b039091169163a9059cbb916111bb919085906004016122f5565b6020604051808303816000875af11580156111da573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105ed919061230e565b611206611d54565b6112106000611d81565b565b600080600360009054906101000a90046001600160a01b03166001600160a01b031663feaf968c6040518163ffffffff1660e01b815260040160a060405180830381865afa158015611268573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061128c919061245b565b505050915050806402540be4006112a39190612201565b91505090565b600d5442106112ca5760405162461bcd60e51b815260040161054f906124ab565b601054610100900460ff1661131b5760405162461bcd60e51b815260206004820152601760248201527621b0b6b830b4b3b71034b9903737ba1030b1ba34bb329760491b604482015260640161054f565b6000341161136b5760405162461bcd60e51b815260206004820181905260248201527f446f6e6174696f6e206d7573742062652067726561746572207468616e20302e604482015260640161054f565b33600090815260126020526040902054158015611395575033600090815260136020526040902054155b156113dd57601180546001810182556000919091527f31ecc21a745e3968a04e9570e4425bc18fa8019c68028196b546d1669c200c680180546001600160a01b031916331790555b34600e60008282546113ef9190612240565b90915550503360009081526012602052604081208054349290611413908490612240565b909155505060405133907ffa5658cbb5d60363acba0d281bddcf21cc9e7ea6053267531b4cdc36d5df7a8a90611467903481526040602082018190526003908201526208aa8960eb1b606082015260800190565b60405180910390a2565b6011546060908190819060008167ffffffffffffffff81111561149657611496611e16565b6040519080825280602002602001820160405280156114bf578160200160208202803683370190505b50905060008267ffffffffffffffff8111156114dd576114dd611e16565b604051908082528060200260200182016040528015611506578160200160208202803683370190505b50905060008367ffffffffffffffff81111561152457611524611e16565b60405190808252806020026020018201604052801561154d578160200160208202803683370190505b50905060005b84811015611687576011818154811061156e5761156e612330565b9060005260206000200160009054906101000a90046001600160a01b031684828151811061159e5761159e612330565b60200260200101906001600160a01b031690816001600160a01b03168152505060126000601183815481106115d5576115d5612330565b60009182526020808320909101546001600160a01b03168352820192909252604001902054835184908390811061160e5761160e612330565b602002602001018181525050601360006011838154811061163157611631612330565b60009182526020808320909101546001600160a01b03168352820192909252604001902054825183908390811061166a5761166a612330565b60209081029190910101528061167f816123e9565b915050611553565b509196909550909350915050565b600d5442106116b65760405162461bcd60e51b815260040161054f906124ab565b6002546040516370a0823160e01b815286916001600160a01b0316906370a08231906116e69033906004016120aa565b602060405180830381865afa158015611703573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061172791906124d7565b1161178a5760405162461bcd60e51b815260206004820152602d60248201527f446f6e6174696f6e206d7573742062652067726561746572207468616e20736560448201526c373232b9103130b630b731b29760991b606482015260840161054f565b336000908152601260205260409020541580156117b4575033600090815260136020526040902054155b156117fc57601180546001810182556000919091527f31ecc21a745e3968a04e9570e4425bc18fa8019c68028196b546d1669c200c680180546001600160a01b031916331790555b60025460405163d505accf60e01b8152336004820152306024820152604481018790526064810186905260ff8516608482015260a4810184905260c481018390526001600160a01b039091169063d505accf9060e401600060405180830381600087803b15801561186c57600080fd5b505af1158015611880573d6000803e3d6000fd5b50506002546040516323b872dd60e01b8152336004820152306024820152604481018990526001600160a01b0390911692506323b872dd91506064016020604051808303816000875af11580156118db573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118ff919061230e565b5084600f60008282546119129190612240565b90915550503360009081526013602052604081208054879290611936908490612240565b909155505060405133907ffa5658cbb5d60363acba0d281bddcf21cc9e7ea6053267531b4cdc36d5df7a8a9061198990888152604060208201819052600290820152612aa360f11b606082015260800190565b60405180910390a25050505050565b6004805460408051633fabe5a360e21b8152905160009384936001600160a01b03169263feaf968c928183019260a0928290030181865afa158015611268573d6000803e3d6000fd5b600d54421180156119f95750601054610100900460ff165b15611210576010805461ff0019169055600554600e54600f54604051630b489b9160e01b8152600481019290925260248201526001600160a01b0390911690630b489b9190604401600060405180830381600087803b158015611a5b57600080fd5b505af1158015611a6f573d6000803e3d6000fd5b50505050565b611a7d611d54565b6001600160a01b038116611aa7576000604051631e4fbdf760e01b815260040161054f91906120aa565b611ab081611d81565b50565b6000806060806060806000806000806000600754600560009054906101000a90046001600160a01b031660086009600a600b600c54600d54600e54600f54601060009054906101000a900460ff16888054611b0d90612402565b80601f0160208091040260200160405190810160405280929190818152602001828054611b3990612402565b8015611b865780601f10611b5b57610100808354040283529160200191611b86565b820191906000526020600020905b815481529060010190602001808311611b6957829003601f168201915b50505050509850878054611b9990612402565b80601f0160208091040260200160405190810160405280929190818152602001828054611bc590612402565b8015611c125780601f10611be757610100808354040283529160200191611c12565b820191906000526020600020905b815481529060010190602001808311611bf557829003601f168201915b50505050509750868054611c2590612402565b80601f0160208091040260200160405190810160405280929190818152602001828054611c5190612402565b8015611c9e5780601f10611c7357610100808354040283529160200191611c9e565b820191906000526020600020905b815481529060010190602001808311611c8157829003601f168201915b50505050509650858054611cb190612402565b80601f0160208091040260200160405190810160405280929190818152602001828054611cdd90612402565b8015611d2a5780601f10611cff57610100808354040283529160200191611d2a565b820191906000526020600020905b815481529060010190602001808311611d0d57829003601f168201915b505050505095509a509a509a509a509a509a509a509a509a509a509a50909192939495969798999a565b6000546001600160a01b03163314611210573360405163118cdaa760e01b815260040161054f91906120aa565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60405180604001604052806002906020820280368337509192915050565b60405180604001604052806002905b6060815260200190600190039081611dfe5790505090565b634e487b7160e01b600052604160045260246000fd5b600060208284031215611e3e57600080fd5b813567ffffffffffffffff80821115611e5657600080fd5b818401915084601f830112611e6a57600080fd5b813581811115611e7c57611e7c611e16565b604051601f8201601f19908116603f01168101908382118183101715611ea457611ea4611e16565b81604052828152876020848701011115611ebd57600080fd5b826020860160208301376000928101602001929092525095945050505050565b600081518084526020808501945080840160005b83811015611f165781516001600160a01b031687529582019590820190600101611ef1565b509495945050505050565b600081518084526020808501945080840160005b83811015611f1657815187529582019590820190600101611f35565b604081526000611f646040830185611edd565b8281036020840152611f768185611f21565b95945050505050565b600060208284031215611f9157600080fd5b81356001600160a01b0381168114611fa857600080fd5b9392505050565b60005b83811015611fca578181015183820152602001611fb2565b50506000910152565b60008151808452611feb816020860160208601611faf565b601f01601f19169290920160200192915050565b602081526000611fa86020830184611fd3565b8981526001600160a01b03891660208201526101206040820181905260009061203d8382018b611fd3565b90508281036060840152612051818a611fd3565b905082810360808401526120658189611fd3565b905082810360a08401526120798188611fd3565b90508560c08401528460e084015282810361010084015261209a8185611fd3565b9c9b505050505050505050505050565b6001600160a01b0391909116815260200190565b6060815260006120d16060830186611edd565b82810360208401526120e38186611f21565b905082810360408401526120f78185611f21565b9695505050505050565b600080600080600060a0868803121561211957600080fd5b8535945060208601359350604086013560ff8116811461213857600080fd5b94979396509394606081013594506080013592915050565b8b81526001600160a01b038b1660208201526101606040820181905260009061217b8382018d611fd3565b9050828103606084015261218f818c611fd3565b905082810360808401526121a3818b611fd3565b905082810360a08401526121b7818a611fd3565b60c0840198909852505060e08101949094526101008401929092526101208301521515610140909101529695505050505050565b634e487b7160e01b600052601160045260246000fd5b8082028115828204841417612218576122186121eb565b92915050565b60008261223b57634e487b7160e01b600052601260045260246000fd5b500490565b80820180821115612218576122186121eb565b6020808252601c908201527f46756e6472616973696e67206973207374696c6c206163746976652e00000000604082015260600190565b6020808252600d908201526c23b7b0b6103932b0b1b432b21760991b604082015260600190565b6020808252601790820152762737903237b730ba34b7b739903a37903932b33ab7321760491b604082015260600190565b81810381811115612218576122186121eb565b6001600160a01b03929092168252602082015260400190565b60006020828403121561232057600080fd5b81518015158114611fa857600080fd5b634e487b7160e01b600052603260045260246000fd5b6001600160a01b0384168152600060808201602080840186845b600281101561237d57815183529183019190830190600101612360565b5050608060608601525060c08401918560005b60028110156123bf57607f198786030183526123ad858351611fd3565b94509183019190830190600101612390565b509298975050505050505050565b600082516123df818460208701611faf565b9190910192915050565b6000600182016123fb576123fb6121eb565b5060010190565b600181811c9082168061241657607f821691505b60208210810361243657634e487b7160e01b600052602260045260246000fd5b50919050565b805169ffffffffffffffffffff8116811461245657600080fd5b919050565b600080600080600060a0868803121561247357600080fd5b61247c8661243c565b945060208601519350604086015192506060860151915061249f6080870161243c565b90509295509295909350565b602080825260129082015271233ab7323930b4b9b4b7339032b73232b21760711b604082015260600190565b6000602082840312156124e957600080fd5b505191905056fea2646970667358221220ea2822510950842d92cffa4b051fc4e9c0ac32e7b1f561351b9da393b4de87aa64736f6c63430008140033";

type FundraisingConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FundraisingConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Fundraising__factory extends ContractFactory {
  constructor(...args: FundraisingConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    unityFlowAddress: AddressLike,
    params: FundraisingParamsStruct,
    _ethPriceFeed: AddressLike,
    _tokenPriceFeed: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      unityFlowAddress,
      params,
      _ethPriceFeed,
      _tokenPriceFeed,
      overrides || {}
    );
  }
  override deploy(
    unityFlowAddress: AddressLike,
    params: FundraisingParamsStruct,
    _ethPriceFeed: AddressLike,
    _tokenPriceFeed: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(
      unityFlowAddress,
      params,
      _ethPriceFeed,
      _tokenPriceFeed,
      overrides || {}
    ) as Promise<
      Fundraising & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Fundraising__factory {
    return super.connect(runner) as Fundraising__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FundraisingInterface {
    return new Interface(_abi) as FundraisingInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Fundraising {
    return new Contract(address, _abi, runner) as unknown as Fundraising;
  }
}
