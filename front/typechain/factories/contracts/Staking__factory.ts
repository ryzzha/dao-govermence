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
import type { Staking, StakingInterface } from "../../contracts/Staking";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenAddress",
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
        name: "user",
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
        internalType: "uint256",
        name: "duration",
        type: "uint256",
      },
    ],
    name: "Staked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
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
        internalType: "uint256",
        name: "reward",
        type: "uint256",
      },
    ],
    name: "Unstaked",
    type: "event",
  },
  {
    inputs: [],
    name: "REWARD_RATE",
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
        name: "user",
        type: "address",
      },
    ],
    name: "calculateRewards",
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
        name: "user",
        type: "address",
      },
    ],
    name: "getStakingInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "startTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "duration",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "reward",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "active",
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
    name: "renounceOwnership",
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
      {
        internalType: "uint256",
        name: "duration",
        type: "uint256",
      },
    ],
    name: "stake",
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
    name: "stakes",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "startTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "duration",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "active",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "contract IERC20",
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
    inputs: [],
    name: "unstake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516116d63803806116d683398181016040528101906100329190610292565b33600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036100a55760006040517f1e4fbdf700000000000000000000000000000000000000000000000000000000815260040161009c91906102ce565b60405180910390fd5b6100b48161016b60201b60201c565b50600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610124576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161011b90610346565b60405180910390fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050610366565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061025f82610234565b9050919050565b61026f81610254565b811461027a57600080fd5b50565b60008151905061028c81610266565b92915050565b6000602082840312156102a8576102a761022f565b5b60006102b68482850161027d565b91505092915050565b6102c881610254565b82525050565b60006020820190506102e360008301846102bf565b92915050565b600082825260208201905092915050565b7f496e76616c696420746f6b656e20616464726573730000000000000000000000600082015250565b60006103306015836102e9565b915061033b826102fa565b602082019050919050565b6000602082019050818103600083015261035f81610323565b9050919050565b611361806103756000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c80637b0472f0116100665780637b0472f0146101385780638da5cb5b14610154578063aa4704f314610172578063f2fde38b146101a6578063fc0c546a146101c25761009e565b806316934fc4146100a35780632def6620146100d65780635997bb37146100e057806364ab8675146100fe578063715018a61461012e575b600080fd5b6100bd60048036038101906100b89190610c99565b6101e0565b6040516100cd9493929190610cfa565b60405180910390f35b6100de61021d565b005b6100e8610547565b6040516100f59190610d3f565b60405180910390f35b61011860048036038101906101139190610c99565b61054c565b6040516101259190610d3f565b60405180910390f35b610136610681565b005b610152600480360381019061014d9190610d86565b610695565b005b61015c61094f565b6040516101699190610dd5565b60405180910390f35b61018c60048036038101906101879190610c99565b610978565b60405161019d959493929190610df0565b60405180910390f35b6101c060048036038101906101bb9190610c99565b610a37565b005b6101ca610abd565b6040516101d79190610ea2565b60405180910390f35b60026020528060005260406000206000915090508060000154908060010154908060020154908060030160009054906101000a900460ff16905084565b60011515600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030160009054906101000a900460ff161515146102b3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102aa90610f1a565b60405180910390fd5b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020154600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101546103439190610f69565b421015610385576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161037c90610fe9565b60405180910390fd5b6000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000154905060006103d73361054c565b9050600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600080820160009055600182016000905560028201600090556003820160006101000a81549060ff02191690555050600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb3383856104929190610f69565b6040518363ffffffff1660e01b81526004016104af929190611009565b6020604051808303816000875af11580156104ce573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104f2919061105e565b503373ffffffffffffffffffffffffffffffffffffffff167f7fc4727e062e336010f2c282598ef5f14facb3de68cf8195c2f23e1454b2b74e838360405161053b92919061108b565b60405180910390a25050565b600a81565b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030160009054906101000a900460ff166105ab576000905061067c565b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010154426105fb91906110b4565b905060006064600a600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000015461065091906110e8565b61065a9190611159565b90506301e13380828261066d91906110e8565b6106779190611159565b925050505b919050565b610689610ae3565b6106936000610b6a565b565b600082116106d8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106cf906111d6565b60405180910390fd5b60001515600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030160009054906101000a900460ff1615151461076e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161076590611242565b60405180910390fd5b62278d008110156107b4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107ab906112d4565b60405180910390fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330856040518463ffffffff1660e01b8152600401610813939291906112f4565b6020604051808303816000875af1158015610832573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610856919061105e565b50604051806080016040528083815260200142815260200182815260200160011515815250600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008201518160000155602082015181600101556040820151816002015560608201518160030160006101000a81548160ff0219169083151502179055509050503373ffffffffffffffffffffffffffffffffffffffff167f1449c6dd7851abc30abf37f57715f492010519147cc2652fbc38202c18a6ee90838360405161094392919061108b565b60405180910390a25050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600080600080600080600260008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060800160405290816000820154815260200160018201548152602001600282015481526020016003820160009054906101000a900460ff1615151515815250509050806000015181602001518260400151610a1e8a61054c565b8460600151955095509550955095505091939590929450565b610a3f610ae3565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610ab15760006040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600401610aa89190610dd5565b60405180910390fd5b610aba81610b6a565b50565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b610aeb610c2e565b73ffffffffffffffffffffffffffffffffffffffff16610b0961094f565b73ffffffffffffffffffffffffffffffffffffffff1614610b6857610b2c610c2e565b6040517f118cdaa7000000000000000000000000000000000000000000000000000000008152600401610b5f9190610dd5565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600033905090565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610c6682610c3b565b9050919050565b610c7681610c5b565b8114610c8157600080fd5b50565b600081359050610c9381610c6d565b92915050565b600060208284031215610caf57610cae610c36565b5b6000610cbd84828501610c84565b91505092915050565b6000819050919050565b610cd981610cc6565b82525050565b60008115159050919050565b610cf481610cdf565b82525050565b6000608082019050610d0f6000830187610cd0565b610d1c6020830186610cd0565b610d296040830185610cd0565b610d366060830184610ceb565b95945050505050565b6000602082019050610d546000830184610cd0565b92915050565b610d6381610cc6565b8114610d6e57600080fd5b50565b600081359050610d8081610d5a565b92915050565b60008060408385031215610d9d57610d9c610c36565b5b6000610dab85828601610d71565b9250506020610dbc85828601610d71565b9150509250929050565b610dcf81610c5b565b82525050565b6000602082019050610dea6000830184610dc6565b92915050565b600060a082019050610e056000830188610cd0565b610e126020830187610cd0565b610e1f6040830186610cd0565b610e2c6060830185610cd0565b610e396080830184610ceb565b9695505050505050565b6000819050919050565b6000610e68610e63610e5e84610c3b565b610e43565b610c3b565b9050919050565b6000610e7a82610e4d565b9050919050565b6000610e8c82610e6f565b9050919050565b610e9c81610e81565b82525050565b6000602082019050610eb76000830184610e93565b92915050565b600082825260208201905092915050565b7f4e6f20616374697665207374616b650000000000000000000000000000000000600082015250565b6000610f04600f83610ebd565b9150610f0f82610ece565b602082019050919050565b60006020820190508181036000830152610f3381610ef7565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610f7482610cc6565b9150610f7f83610cc6565b9250828201905080821115610f9757610f96610f3a565b5b92915050565b7f5374616b696e6720706572696f64206e6f74206f766572000000000000000000600082015250565b6000610fd3601783610ebd565b9150610fde82610f9d565b602082019050919050565b6000602082019050818103600083015261100281610fc6565b9050919050565b600060408201905061101e6000830185610dc6565b61102b6020830184610cd0565b9392505050565b61103b81610cdf565b811461104657600080fd5b50565b60008151905061105881611032565b92915050565b60006020828403121561107457611073610c36565b5b600061108284828501611049565b91505092915050565b60006040820190506110a06000830185610cd0565b6110ad6020830184610cd0565b9392505050565b60006110bf82610cc6565b91506110ca83610cc6565b92508282039050818111156110e2576110e1610f3a565b5b92915050565b60006110f382610cc6565b91506110fe83610cc6565b925082820261110c81610cc6565b9150828204841483151761112357611122610f3a565b5b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061116482610cc6565b915061116f83610cc6565b92508261117f5761117e61112a565b5b828204905092915050565b7f416d6f756e74206d7573742062652067726561746572207468616e207a65726f600082015250565b60006111c0602083610ebd565b91506111cb8261118a565b602082019050919050565b600060208201905081810360008301526111ef816111b3565b9050919050565b7f416c7265616479207374616b696e670000000000000000000000000000000000600082015250565b600061122c600f83610ebd565b9150611237826111f6565b602082019050919050565b6000602082019050818103600083015261125b8161121f565b9050919050565b7f4d696e696d756d207374616b696e67206475726174696f6e206973203330206460008201527f6179730000000000000000000000000000000000000000000000000000000000602082015250565b60006112be602383610ebd565b91506112c982611262565b604082019050919050565b600060208201905081810360008301526112ed816112b1565b9050919050565b60006060820190506113096000830186610dc6565b6113166020830185610dc6565b6113236040830184610cd0565b94935050505056fea2646970667358221220a21fb2fa6d1134b3c1dbcb211e516881be0ba030f726fb928cbfe65d0c12e43f64736f6c634300081c0033";

type StakingConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StakingConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Staking__factory extends ContractFactory {
  constructor(...args: StakingConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    tokenAddress: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(tokenAddress, overrides || {});
  }
  override deploy(
    tokenAddress: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(tokenAddress, overrides || {}) as Promise<
      Staking & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Staking__factory {
    return super.connect(runner) as Staking__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StakingInterface {
    return new Interface(_abi) as StakingInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Staking {
    return new Contract(address, _abi, runner) as unknown as Staking;
  }
}
