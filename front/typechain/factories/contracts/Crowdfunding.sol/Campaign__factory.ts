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
import type { NonPayableOverrides } from "../../../common";
import type {
  Campaign,
  CampaignInterface,
} from "../../../contracts/Crowdfunding.sol/Campaign";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_organizer",
        type: "address",
      },
      {
        internalType: "string",
        name: "_title",
        type: "string",
      },
      {
        internalType: "string",
        name: "_description",
        type: "string",
      },
      {
        internalType: "string",
        name: "_image",
        type: "string",
      },
      {
        internalType: "string",
        name: "_category",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_goal",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_deadline",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
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
    ],
    name: "DonationReceived",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "time",
        type: "uint256",
      },
    ],
    name: "Withdrawed",
    type: "event",
  },
  {
    inputs: [],
    name: "donate",
    outputs: [],
    stateMutability: "payable",
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
    name: "getDonation",
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
    name: "parent",
    outputs: [
      {
        internalType: "contract Crowdfunding",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161113738038061113783398181016040528101906100329190610341565b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508760018190555086600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555085600390816100c9919061067e565b5084600490816100d9919061067e565b5083600590816100e9919061067e565b5082600690816100f9919061067e565b50816007819055508060088190555060006009819055506000600a60006101000a81548160ff0219169083151502179055505050505050505050610750565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b61015f8161014c565b811461016a57600080fd5b50565b60008151905061017c81610156565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006101ad82610182565b9050919050565b6101bd816101a2565b81146101c857600080fd5b50565b6000815190506101da816101b4565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610233826101ea565b810181811067ffffffffffffffff82111715610252576102516101fb565b5b80604052505050565b6000610265610138565b9050610271828261022a565b919050565b600067ffffffffffffffff821115610291576102906101fb565b5b61029a826101ea565b9050602081019050919050565b60005b838110156102c55780820151818401526020810190506102aa565b60008484015250505050565b60006102e46102df84610276565b61025b565b905082815260208101848484011115610300576102ff6101e5565b5b61030b8482856102a7565b509392505050565b600082601f830112610328576103276101e0565b5b81516103388482602086016102d1565b91505092915050565b600080600080600080600080610100898b03121561036257610361610142565b5b60006103708b828c0161016d565b98505060206103818b828c016101cb565b975050604089015167ffffffffffffffff8111156103a2576103a1610147565b5b6103ae8b828c01610313565b965050606089015167ffffffffffffffff8111156103cf576103ce610147565b5b6103db8b828c01610313565b955050608089015167ffffffffffffffff8111156103fc576103fb610147565b5b6104088b828c01610313565b94505060a089015167ffffffffffffffff81111561042957610428610147565b5b6104358b828c01610313565b93505060c06104468b828c0161016d565b92505060e06104578b828c0161016d565b9150509295985092959890939650565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806104b957607f821691505b6020821081036104cc576104cb610472565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026105347fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826104f7565b61053e86836104f7565b95508019841693508086168417925050509392505050565b6000819050919050565b600061057b6105766105718461014c565b610556565b61014c565b9050919050565b6000819050919050565b61059583610560565b6105a96105a182610582565b848454610504565b825550505050565b600090565b6105be6105b1565b6105c981848461058c565b505050565b5b818110156105ed576105e26000826105b6565b6001810190506105cf565b5050565b601f82111561063257610603816104d2565b61060c846104e7565b8101602085101561061b578190505b61062f610627856104e7565b8301826105ce565b50505b505050565b600082821c905092915050565b600061065560001984600802610637565b1980831691505092915050565b600061066e8383610644565b9150826002028217905092915050565b61068782610467565b67ffffffffffffffff8111156106a05761069f6101fb565b5b6106aa82546104a1565b6106b58282856105f1565b600060209050601f8311600181146106e857600084156106d6578287015190505b6106e08582610662565b865550610748565b601f1984166106f6866104d2565b60005b8281101561071e578489015182556001820191506020850194506020810190506106f9565b8683101561073b5784890151610737601f891682610644565b8355505b6001600288020188555050505b505050505050565b6109d88061075f6000396000f3fe60806040526004361061003f5760003560e01c8063410a1d321461004457806360f96a8f14610081578063ed88c68e146100ac578063fbbf93a0146100b6575b600080fd5b34801561005057600080fd5b5061006b60048036038101906100669190610591565b6100ea565b60405161007891906105d7565b60405180910390f35b34801561008d57600080fd5b50610096610133565b6040516100a39190610651565b60405180910390f35b6100b4610157565b005b3480156100c257600080fd5b506100cb610288565b6040516100e19a99989796959493929190610726565b60405180910390f35b6000600b60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600854421061019b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101929061082a565b60405180910390fd5b600034116101de576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101d590610896565b60405180910390fd5b34600960008282546101f091906108e5565b9250508190555034600b60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461024691906108e5565b925050819055507f264f630d9efa0d07053a31163641d9fcc0adafc9d9e76f1c37c2ce3a558d2c52333460405161027e929190610919565b60405180910390a1565b600080606080606080600080600080600154600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166003600460056006600754600854600954600a60009054906101000a900460ff168780546102ea90610971565b80601f016020809104026020016040519081016040528092919081815260200182805461031690610971565b80156103635780601f1061033857610100808354040283529160200191610363565b820191906000526020600020905b81548152906001019060200180831161034657829003601f168201915b5050505050975086805461037690610971565b80601f01602080910402602001604051908101604052809291908181526020018280546103a290610971565b80156103ef5780601f106103c4576101008083540402835291602001916103ef565b820191906000526020600020905b8154815290600101906020018083116103d257829003601f168201915b5050505050965085805461040290610971565b80601f016020809104026020016040519081016040528092919081815260200182805461042e90610971565b801561047b5780601f106104505761010080835404028352916020019161047b565b820191906000526020600020905b81548152906001019060200180831161045e57829003601f168201915b5050505050955084805461048e90610971565b80601f01602080910402602001604051908101604052809291908181526020018280546104ba90610971565b80156105075780601f106104dc57610100808354040283529160200191610507565b820191906000526020600020905b8154815290600101906020018083116104ea57829003601f168201915b50505050509450995099509950995099509950995099509950995090919293949596979899565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061055e82610533565b9050919050565b61056e81610553565b811461057957600080fd5b50565b60008135905061058b81610565565b92915050565b6000602082840312156105a7576105a661052e565b5b60006105b58482850161057c565b91505092915050565b6000819050919050565b6105d1816105be565b82525050565b60006020820190506105ec60008301846105c8565b92915050565b6000819050919050565b600061061761061261060d84610533565b6105f2565b610533565b9050919050565b6000610629826105fc565b9050919050565b600061063b8261061e565b9050919050565b61064b81610630565b82525050565b60006020820190506106666000830184610642565b92915050565b61067581610553565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b838110156106b557808201518184015260208101905061069a565b60008484015250505050565b6000601f19601f8301169050919050565b60006106dd8261067b565b6106e78185610686565b93506106f7818560208601610697565b610700816106c1565b840191505092915050565b60008115159050919050565b6107208161070b565b82525050565b60006101408201905061073c600083018d6105c8565b610749602083018c61066c565b818103604083015261075b818b6106d2565b9050818103606083015261076f818a6106d2565b9050818103608083015261078381896106d2565b905081810360a083015261079781886106d2565b90506107a660c08301876105c8565b6107b360e08301866105c8565b6107c16101008301856105c8565b6107cf610120830184610717565b9b9a5050505050505050505050565b7f43616d706169676e20656e6465642e0000000000000000000000000000000000600082015250565b6000610814600f83610686565b915061081f826107de565b602082019050919050565b6000602082019050818103600083015261084381610807565b9050919050565b7f446f6e6174696f6e206d7573742062652067726561746572207468616e20302e600082015250565b6000610880602083610686565b915061088b8261084a565b602082019050919050565b600060208201905081810360008301526108af81610873565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006108f0826105be565b91506108fb836105be565b9250828201905080821115610913576109126108b6565b5b92915050565b600060408201905061092e600083018561066c565b61093b60208301846105c8565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061098957607f821691505b60208210810361099c5761099b610942565b5b5091905056fea2646970667358221220da7762aa2a678a712baef2346ec2a3733b4816bd4a766aff54ecb0b406a5971d64736f6c634300081c0033";

type CampaignConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CampaignConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Campaign__factory extends ContractFactory {
  constructor(...args: CampaignConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _id: BigNumberish,
    _organizer: AddressLike,
    _title: string,
    _description: string,
    _image: string,
    _category: string,
    _goal: BigNumberish,
    _deadline: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      _id,
      _organizer,
      _title,
      _description,
      _image,
      _category,
      _goal,
      _deadline,
      overrides || {}
    );
  }
  override deploy(
    _id: BigNumberish,
    _organizer: AddressLike,
    _title: string,
    _description: string,
    _image: string,
    _category: string,
    _goal: BigNumberish,
    _deadline: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(
      _id,
      _organizer,
      _title,
      _description,
      _image,
      _category,
      _goal,
      _deadline,
      overrides || {}
    ) as Promise<
      Campaign & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Campaign__factory {
    return super.connect(runner) as Campaign__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CampaignInterface {
    return new Interface(_abi) as CampaignInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Campaign {
    return new Contract(address, _abi, runner) as unknown as Campaign;
  }
}
