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
  BigNumberish,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../common";
import type { Company, CompanyInterface } from "../../contracts/Company";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "address",
        name: "_founder",
        type: "address",
      },
      {
        internalType: "address",
        name: "_unityFlow",
        type: "address",
      },
      {
        internalType: "address",
        name: "_token",
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
        indexed: false,
        internalType: "address",
        name: "cofounder",
        type: "address",
      },
    ],
    name: "CofounderAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "fundraiserContract",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "totalCollectedETH",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "totalCollectedUF",
        type: "uint256",
      },
    ],
    name: "FundraiserCompleted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "fundraiserContract",
        type: "address",
      },
    ],
    name: "FundraiserCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "asset",
        type: "string",
      },
    ],
    name: "FundsReceived",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "asset",
        type: "string",
      },
    ],
    name: "FundsWithdrawn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "investor",
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
        name: "asset",
        type: "string",
      },
    ],
    name: "InvestmentReceived",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "investor",
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
        name: "asset",
        type: "string",
      },
    ],
    name: "InvestmentWithdrawn",
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
    inputs: [
      {
        internalType: "address",
        name: "cofounder",
        type: "address",
      },
    ],
    name: "addCofounder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "cofounders",
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
    inputs: [
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
        internalType: "string",
        name: "image",
        type: "string",
      },
    ],
    name: "createFundraising",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "founder",
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
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "fullWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "fundraisers",
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
    name: "fundraisingCount",
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
    name: "getCompanyFundraisers",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "investETH",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "investUF",
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
    name: "investorETHBalances",
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
        name: "",
        type: "address",
      },
    ],
    name: "investorUFBalances",
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
    name: "name",
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
    inputs: [
      {
        internalType: "uint256",
        name: "totalCollectedETH",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalCollectedUF",
        type: "uint256",
      },
    ],
    name: "onFundraiserCompleted",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "receiveETH",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "receiveUF",
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
    inputs: [],
    name: "totalFundsETH",
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
    name: "totalFundsUF",
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
    name: "totalInvestmentsETH",
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
    name: "totalInvestmentsUF",
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
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdrawETH",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdrawInvestmentETH",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdrawInvestmentUF",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdrawUF",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200272e3803806200272e833981016040819052620000349162000256565b826001600160a01b0381166200006557604051631e4fbdf760e01b8152600060048201526024015b60405180910390fd5b6200007081620001d3565b506001600160a01b038316620000c95760405162461bcd60e51b815260206004820152601760248201527f496e76616c696420666f756e646572206164647265737300000000000000000060448201526064016200005c565b6001600160a01b038216620001215760405162461bcd60e51b815260206004820152601960248201527f496e76616c696420556e697479466c6f7720616464726573730000000000000060448201526064016200005c565b6001600160a01b038116620001795760405162461bcd60e51b815260206004820152601760248201527f496e76616c696420546f6b656e5546206164647265737300000000000000000060448201526064016200005c565b600385905560046200018c8582620003fd565b50600580546001600160a01b039485166001600160a01b03199182161790915560018054938516938216939093179092556002805491909316911617905550620004c99050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b634e487b7160e01b600052604160045260246000fd5b80516001600160a01b03811681146200025157600080fd5b919050565b600080600080600060a086880312156200026f57600080fd5b8551602080880151919650906001600160401b03808211156200029157600080fd5b818901915089601f830112620002a657600080fd5b815181811115620002bb57620002bb62000223565b604051601f8201601f19908116603f01168101908382118183101715620002e657620002e662000223565b816040528281528c86848701011115620002ff57600080fd5b600093505b8284101562000323578484018601518185018701529285019262000304565b6000868483010152809950505050505050620003426040870162000239565b9250620003526060870162000239565b9150620003626080870162000239565b90509295509295909350565b600181811c908216806200038357607f821691505b602082108103620003a457634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620003f857600081815260208120601f850160051c81016020861015620003d35750805b601f850160051c820191505b81811015620003f457828155600101620003df565b5050505b505050565b81516001600160401b0381111562000419576200041962000223565b62000431816200042a84546200036e565b84620003aa565b602080601f831160018114620004695760008415620004505750858301515b600019600386901b1c1916600185901b178555620003f4565b600085815260208120601f198616915b828110156200049a5788860151825594840194600190910190840162000479565b5085821015620004b95787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b61225580620004d96000396000f3fe6080604052600436106101c65760003560e01c806362353a53116100f7578063b46df6b111610095578063f19f9f8411610064578063f19f9f84146104d8578063f2fde38b146104f8578063f38f72fb14610518578063fc0c546a1461053857600080fd5b8063b46df6b11461044b578063d887103f1461046b578063eca2b9391461048b578063ee9c517d146104ab57600080fd5b806377210afe116100d157806377210afe146103f95780638da5cb5b1461040f5780639722383c1461042d578063a39cfae61461044357600080fd5b806362353a53146103a25780636cdf5557146103c4578063715018a6146103e457600080fd5b8063492e6fb91161016457806350a024a11161013e57806350a024a11461031f57806350a43eed1461033f578063524145301461036c5780635f9664351461038257600080fd5b8063492e6fb9146102c95780634c1798db146102e95780634d853ee5146102ff57600080fd5b80632d59ea5b116101a05780632d59ea5b1461026157806330fa3cdc146102815780633ecfd51e146102a15780634782f779146102a957600080fd5b806306fdde03146101da5780630f76ee26146102055780632add5a501461022957600080fd5b366101d5576101d3610558565b005b600080fd5b3480156101e657600080fd5b506101ef610658565b6040516101fc9190611c78565b60405180910390f35b34801561021157600080fd5b5061021b600e5481565b6040519081526020016101fc565b34801561023557600080fd5b50610249610244366004611c92565b6106e6565b6040516001600160a01b0390911681526020016101fc565b34801561026d57600080fd5b506101d361027c366004611cc0565b610710565b34801561028d57600080fd5b506101d361029c366004611c92565b61083f565b6101d3610558565b3480156102b557600080fd5b506101d36102c4366004611cdd565b610a1d565b3480156102d557600080fd5b506101d36102e4366004611c92565b610b6b565b3480156102f557600080fd5b5061021b600a5481565b34801561030b57600080fd5b50600554610249906001600160a01b031681565b34801561032b57600080fd5b506101d361033a366004611d09565b610d6c565b34801561034b57600080fd5b5061021b61035a366004611cc0565b600d6020526000908152604090205481565b34801561037857600080fd5b5061021b600b5481565b34801561038e57600080fd5b506101d361039d366004611cc0565b610e44565b3480156103ae57600080fd5b506103b7611005565b6040516101fc9190611d2b565b3480156103d057600080fd5b50600154610249906001600160a01b031681565b3480156103f057600080fd5b506101d3611067565b34801561040557600080fd5b5061021b60075481565b34801561041b57600080fd5b506000546001600160a01b0316610249565b34801561043957600080fd5b5061021b60085481565b6101d361107b565b34801561045757600080fd5b506101d3610466366004611c92565b611184565b34801561047757600080fd5b506101d3610486366004611c92565b61147d565b34801561049757600080fd5b506101d36104a6366004611e1b565b6116a4565b3480156104b757600080fd5b5061021b6104c6366004611cc0565b600c6020526000908152604090205481565b3480156104e457600080fd5b506101d36104f3366004611cdd565b6118d2565b34801561050457600080fd5b506101d3610513366004611cc0565b611aa1565b34801561052457600080fd5b50610249610533366004611c92565b611adc565b34801561054457600080fd5b50600254610249906001600160a01b031681565b600034116105a45760405162461bcd60e51b81526020600482015260146024820152734d7573742073656e6420736f6d652066756e647360601b60448201526064015b60405180910390fd5b34600760008282546105b69190611ef0565b9091555050600154604051632702674160e21b81526001600160a01b0390911690639c099d04906105eb903490600401611f09565b600060405180830381600087803b15801561060557600080fd5b505af1158015610619573d6000803e3d6000fd5b505050507fc6ade401fcb618887f544faaabac54886c13222ece1f51de11ddafe2e6d5eebd343360405161064e929190611f32565b60405180910390a1565b6004805461066590611f6e565b80601f016020809104026020016040519081016040528092919081815260200182805461069190611f6e565b80156106de5780601f106106b3576101008083540402835291602001916106de565b820191906000526020600020905b8154815290600101906020018083116106c157829003601f168201915b505050505081565b600681815481106106f657600080fd5b6000918252602090912001546001600160a01b0316905081565b610718611aec565b6001600160a01b03811661076e5760405162461bcd60e51b815260206004820152601960248201527f496e76616c696420636f666f756e646572206164647265737300000000000000604482015260640161059b565b61077781611b19565b156107ba5760405162461bcd60e51b815260206004820152601360248201527220b63932b0b23c90309031b7b337bab73232b960691b604482015260640161059b565b600680546001810182556000919091527ff652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d3f0180546001600160a01b0319166001600160a01b0383169081179091556040519081527f99165bcdf615238e09ce306f8629981043243db87b289ab834b781dbb37d1b77906020015b60405180910390a150565b6000811161085f5760405162461bcd60e51b815260040161059b90611fa8565b336000908152600d60205260409020548111156108be5760405162461bcd60e51b815260206004820152601f60248201527f496e73756666696369656e7420696e766573746d656e742062616c616e636500604482015260640161059b565b336000908152600d6020526040812080548392906108dd908490611ff0565b9250508190555080600b60008282546108f69190611ff0565b92505081905550806008600082825461090f9190611ff0565b909155505060025460405163a9059cbb60e01b8152336004820152602481018390526001600160a01b039091169063a9059cbb906044016020604051808303816000875af1158015610965573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109899190612003565b5060015460405163374bd83f60e11b81526001600160a01b0390911690636e97b07e906109ba908490600401612025565b600060405180830381600087803b1580156109d457600080fd5b505af11580156109e8573d6000803e3d6000fd5b505050507fc2c65a8987d388025391b993490730e0e63a6007f953487a6d8e75ebd92b7f77338260405161083492919061204d565b610a25611aec565b600081118015610a3757506007548111155b610a7d5760405162461bcd60e51b8152602060048201526017602482015276125b9d985b1a59081dda5d1a191c985dc8185b5bdd5b9d604a1b604482015260640161059b565b8060076000828254610a8f9190611ff0565b90915550506040516000906001600160a01b0384169083908381818185875af1925050503d8060008114610adf576040519150601f19603f3d011682016040523d82523d6000602084013e610ae4565b606091505b5050905080610b2d5760405162461bcd60e51b81526020600482015260156024820152742330b4b632b2103a379039b2b73210333ab732399760591b604482015260640161059b565b7f10f66b4e5a1a946d8fc44c2ed4f0f305352e27aef5ebb9c77fa0ccfd06a014cf8233604051610b5e929190611f32565b60405180910390a1505050565b60008111610b8b5760405162461bcd60e51b815260040161059b90611fa8565b336000908152600c6020526040902054811115610bea5760405162461bcd60e51b815260206004820152601f60248201527f496e73756666696369656e7420696e766573746d656e742062616c616e636500604482015260640161059b565b336000908152600c602052604081208054839290610c09908490611ff0565b9250508190555080600a6000828254610c229190611ff0565b925050819055508060076000828254610c3b9190611ff0565b9091555050604051600090339083908381818185875af1925050503d8060008114610c82576040519150601f19603f3d011682016040523d82523d6000602084013e610c87565b606091505b5050905080610ccd5760405162461bcd60e51b815260206004820152601260248201527108cc2d2d8cac840e8de40e6cadcc8408aa8960731b604482015260640161059b565b60015460405163374bd83f60e11b81526001600160a01b0390911690636e97b07e90610cfd908590600401611f09565b600060405180830381600087803b158015610d1757600080fd5b505af1158015610d2b573d6000803e3d6000fd5b505050507fc2c65a8987d388025391b993490730e0e63a6007f953487a6d8e75ebd92b7f773383604051610d60929190612085565b60405180910390a15050565b610d7533611b82565b610dc15760405162461bcd60e51b815260206004820152601a60248201527f43616c6c6572206973206e6f7420612066756e64726169736572000000000000604482015260640161059b565b8160076000828254610dd39190611ef0565b925050819055508060086000828254610dec9190611ef0565b9091555050600e8054906000610e01836120be565b909155505060408051338152602081018490529081018290527f4f82e9b5ca71146e1fa2a745b21e900fbff76fc868eba10abc20be1e4e09f7c290606001610d60565b610e4c611aec565b6000471180610ec557506002546040516370a0823160e01b81523060048201526000916001600160a01b0316906370a0823190602401602060405180830381865afa158015610e9f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ec391906120d5565b115b610f085760405162461bcd60e51b81526020600482015260146024820152734e6f2066756e647320746f20776974686472617760601b604482015260640161059b565b4715610f1d57610f1d816102c4600147611ff0565b6002546040516370a0823160e01b81523060048201526000916001600160a01b0316906370a0823190602401602060405180830381865afa158015610f66573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f8a91906120d5565b1115611002576002546040516370a0823160e01b81523060048201526110029183916001600160a01b03909116906370a0823190602401602060405180830381865afa158015610fde573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104f391906120d5565b50565b6060600980548060200260200160405190810160405280929190818152602001828054801561105d57602002820191906000526020600020905b81546001600160a01b0316815260019091019060200180831161103f575b5050505050905090565b61106f611aec565b6110796000611be2565b565b6000341161109b5760405162461bcd60e51b815260040161059b906120ee565b336000908152600c6020526040812080543492906110ba908490611ef0565b9250508190555034600a60008282546110d39190611ef0565b9250508190555034600760008282546110ec9190611ef0565b9091555050600154604051637724130360e11b81526001600160a01b039091169063ee48260690611121903490600401611f09565b600060405180830381600087803b15801561113b57600080fd5b505af115801561114f573d6000803e3d6000fd5b505050507ffcd1d3a14c454df061b7e9bbfd63a09694ae79449fb266949c28fb5b1433571e333460405161064e929190612085565b600081116111a45760405162461bcd60e51b815260040161059b906120ee565b6002546040516370a0823160e01b815233600482015282916001600160a01b0316906370a0823190602401602060405180830381865afa1580156111ec573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061121091906120d5565b101561125e5760405162461bcd60e51b815260206004820152601a60248201527f496e73756666696369656e7420746f6b656e2062616c616e6365000000000000604482015260640161059b565b6002546040516323b872dd60e01b8152336004820152306024820152604481018390526001600160a01b03909116906323b872dd906064016020604051808303816000875af11580156112b5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112d99190612003565b50806008546112e89190611ef0565b6002546040516370a0823160e01b81523060048201526001600160a01b03909116906370a0823190602401602060405180830381865afa158015611330573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061135491906120d5565b10156113945760405162461bcd60e51b815260206004820152600f60248201526e151c985b9cd9995c8819985a5b1959608a1b604482015260640161059b565b336000908152600d6020526040812080548392906113b3908490611ef0565b9250508190555080600b60008282546113cc9190611ef0565b9250508190555080600860008282546113e59190611ef0565b9091555050600154604051637724130360e11b81526001600160a01b039091169063ee4826069061141a908490600401612025565b600060405180830381600087803b15801561143457600080fd5b505af1158015611448573d6000803e3d6000fd5b505050507ffcd1d3a14c454df061b7e9bbfd63a09694ae79449fb266949c28fb5b1433571e338260405161083492919061204d565b600081116114c45760405162461bcd60e51b81526020600482015260146024820152734d7573742073656e6420736f6d652066756e647360601b604482015260640161059b565b6002546040516370a0823160e01b815233600482015282916001600160a01b0316906370a0823190602401602060405180830381865afa15801561150c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061153091906120d5565b101561157e5760405162461bcd60e51b815260206004820152601a60248201527f496e73756666696369656e7420746f6b656e2062616c616e6365000000000000604482015260640161059b565b6002546040516323b872dd60e01b8152336004820152306024820152604481018390526001600160a01b03909116906323b872dd906064016020604051808303816000875af11580156115d5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115f99190612003565b50806008600082825461160c9190611ef0565b9091555050600154604051632702674160e21b81526001600160a01b0390911690639c099d0490611641908490600401612025565b600060405180830381600087803b15801561165b57600080fd5b505af115801561166f573d6000803e3d6000fd5b505050507fc6ade401fcb618887f544faaabac54886c13222ece1f51de11ddafe2e6d5eebd813360405161083492919061212f565b6005546001600160a01b03163314806116c157506116c133611b19565b6116fe5760405162461bcd60e51b815260206004820152600e60248201526d139bdd08185d5d1a1bdc9a5e995960921b604482015260640161059b565b600154604051635b076ddf60e11b81523060048201526001600160a01b039091169063b60edbbe90602401602060405180830381865afa158015611746573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061176a9190612003565b6117ae5760405162461bcd60e51b8152602060048201526015602482015274436f6d70616e79206973206e6f742061637469766560581b604482015260640161059b565b600e80549060006117be83612166565b9091555050600154600e5460405163483d288160e11b81526000926001600160a01b03169163907a51029161180291908b908b908b908b908b908b9060040161217f565b6020604051808303816000875af1158015611821573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061184591906121ec565b600980546001810182556000919091527f6e1540171b6c0c960b71a7020d9f60077f6af931a8bbf590da0223dacf75c7af0180546001600160a01b0319166001600160a01b0383169081179091556040519081529091507f2557643b2d3fb1068494cb23ac8d1b3b2a857564fe606f86020e33e2351e42dc9060200160405180910390a150505050505050565b6118da611aec565b6000811180156118ec57506008548111155b6119325760405162461bcd60e51b8152602060048201526017602482015276125b9d985b1a59081dda5d1a191c985dc8185b5bdd5b9d604a1b604482015260640161059b565b6002546040516370a0823160e01b815230600482015282916001600160a01b0316906370a0823190602401602060405180830381865afa15801561197a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061199e91906120d5565b10156119e15760405162461bcd60e51b81526020600482015260126024820152716e6f7420656e6f7567746820746f6b656e7360701b604482015260640161059b565b80600860008282546119f39190611ff0565b909155505060025460405163a9059cbb60e01b81526001600160a01b038481166004830152602482018490529091169063a9059cbb906044016020604051808303816000875af1158015611a4b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a6f9190612003565b507f10f66b4e5a1a946d8fc44c2ed4f0f305352e27aef5ebb9c77fa0ccfd06a014cf8133604051610d6092919061212f565b611aa9611aec565b6001600160a01b038116611ad357604051631e4fbdf760e01b81526000600482015260240161059b565b61100281611be2565b600981815481106106f657600080fd5b6000546001600160a01b031633146110795760405163118cdaa760e01b815233600482015260240161059b565b6000805b600654811015611b7957826001600160a01b031660068281548110611b4457611b44612209565b6000918252602090912001546001600160a01b031603611b675750600192915050565b80611b7181612166565b915050611b1d565b50600092915050565b6000805b600954811015611b7957826001600160a01b031660098281548110611bad57611bad612209565b6000918252602090912001546001600160a01b031603611bd05750600192915050565b80611bda81612166565b915050611b86565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000815180845260005b81811015611c5857602081850181015186830182015201611c3c565b506000602082860101526020601f19601f83011685010191505092915050565b602081526000611c8b6020830184611c32565b9392505050565b600060208284031215611ca457600080fd5b5035919050565b6001600160a01b038116811461100257600080fd5b600060208284031215611cd257600080fd5b8135611c8b81611cab565b60008060408385031215611cf057600080fd5b8235611cfb81611cab565b946020939093013593505050565b60008060408385031215611d1c57600080fd5b50508035926020909101359150565b6020808252825182820181905260009190848201906040850190845b81811015611d6c5783516001600160a01b031683529284019291840191600101611d47565b50909695505050505050565b634e487b7160e01b600052604160045260246000fd5b600082601f830112611d9f57600080fd5b813567ffffffffffffffff80821115611dba57611dba611d78565b604051601f8301601f19908116603f01168101908282118183101715611de257611de2611d78565b81604052838152866020858801011115611dfb57600080fd5b836020870160208301376000602085830101528094505050505092915050565b60008060008060008060c08789031215611e3457600080fd5b863567ffffffffffffffff80821115611e4c57600080fd5b611e588a838b01611d8e565b97506020890135915080821115611e6e57600080fd5b611e7a8a838b01611d8e565b96506040890135915080821115611e9057600080fd5b611e9c8a838b01611d8e565b9550606089013594506080890135935060a0890135915080821115611ec057600080fd5b50611ecd89828a01611d8e565b9150509295509295509295565b634e487b7160e01b600052601160045260246000fd5b80820180821115611f0357611f03611eda565b92915050565b818152604060208201526000611c8b60408301600381526208aa8960eb1b602082015260400190565b8281526001600160a01b03821660208201526060604082018190526003908201526208aa8960eb1b6080820152600060a082015b949350505050565b600181811c90821680611f8257607f821691505b602082108103611fa257634e487b7160e01b600052602260045260246000fd5b50919050565b60208082526028908201527f5769746864726177616c20616d6f756e74206d75737420626520677265617465604082015267072207468616e20360c41b606082015260800190565b81810381811115611f0357611f03611eda565b60006020828403121561201557600080fd5b81518015158114611c8b57600080fd5b818152604060208201526000611c8b6040830160028152612aa360f11b602082015260400190565b6001600160a01b038316815260208101829052606060408201819052600290820152612aa360f11b6080820152600060a08201611f66565b6001600160a01b0383168152602081018290526060604082018190526003908201526208aa8960eb1b6080820152600060a08201611f66565b6000816120cd576120cd611eda565b506000190190565b6000602082840312156120e757600080fd5b5051919050565b60208082526021908201527f496e766573746d656e74206d7573742062652067726561746572207468616e206040820152600360fc1b606082015260800190565b8281526001600160a01b0382166020820152606060408201819052600290820152612aa360f11b6080820152600060a08201611f66565b60006001820161217857612178611eda565b5060010190565b87815260e06020820152600061219860e0830189611c32565b82810360408401526121aa8189611c32565b905082810360608401526121be8188611c32565b90508560808401528460a084015282810360c08401526121de8185611c32565b9a9950505050505050505050565b6000602082840312156121fe57600080fd5b8151611c8b81611cab565b634e487b7160e01b600052603260045260246000fdfea264697066735822122013f4046394ef165c4be463421c035f315f69b80a7179668d26b528b34f098bc564736f6c63430008140033";

type CompanyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CompanyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Company__factory extends ContractFactory {
  constructor(...args: CompanyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _id: BigNumberish,
    _name: string,
    _founder: AddressLike,
    _unityFlow: AddressLike,
    _token: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      _id,
      _name,
      _founder,
      _unityFlow,
      _token,
      overrides || {}
    );
  }
  override deploy(
    _id: BigNumberish,
    _name: string,
    _founder: AddressLike,
    _unityFlow: AddressLike,
    _token: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(
      _id,
      _name,
      _founder,
      _unityFlow,
      _token,
      overrides || {}
    ) as Promise<
      Company & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Company__factory {
    return super.connect(runner) as Company__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CompanyInterface {
    return new Interface(_abi) as CompanyInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Company {
    return new Contract(address, _abi, runner) as unknown as Company;
  }
}
