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
  FundraisingManager,
  FundraisingManagerInterface,
} from "../../contracts/FundraisingManager";

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
        name: "unityFlowAddress",
        type: "address",
      },
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
      {
        internalType: "uint256",
        name: "platformFeePercent",
        type: "uint256",
      },
    ],
    name: "createFundraising",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
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
        internalType: "string",
        name: "currency",
        type: "string",
      },
    ],
    name: "decreaseInvestments",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "donationsByCurrency",
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
        name: "currency",
        type: "string",
      },
    ],
    name: "getTotalDonations",
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
        name: "currency",
        type: "string",
      },
    ],
    name: "getTotalInvestments",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "currency",
        type: "string",
      },
    ],
    name: "increaseInvestments",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "investmentsByCurrency",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "currency",
        type: "string",
      },
    ],
    name: "updateDonations",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516126c73803806126c783398101604081905261002f91610054565b600080546001600160a01b0319166001600160a01b0392909216919091179055610084565b60006020828403121561006657600080fd5b81516001600160a01b038116811461007d57600080fd5b9392505050565b612634806100936000396000f3fe60806040523480156200001157600080fd5b50600436106200009f5760003560e01c80634e0c1e37116200006e5780634e0c1e37146200015a5780636e97b07e14620001715780639c099d04146200018a578063ee48260614620001a1578063fc0c546a14620001b857600080fd5b806305ea8f5e14620000a45780631093bd6914620000ce57806312c0b10414620000fc578063139a7188146200012c575b600080fd5b620000bb620000b536600462000546565b620001cc565b6040519081526020015b60405180910390f35b620000bb620000df36600462000546565b805160208183018101805160028252928201919093012091525481565b620001136200010d366004620005a4565b620001f6565b6040516001600160a01b039091168152602001620000c5565b620000bb6200013d36600462000546565b805160208183018101805160018252928201919093012091525481565b620000bb6200016b36600462000546565b62000373565b6200018862000182366004620006ac565b62000387565b005b620001886200019b366004620006ac565b62000444565b62000188620001b2366004620006ac565b62000478565b60005462000113906001600160a01b031681565b6000600282604051620001e0919062000753565b9081526020016040518091039020549050919050565b60004284118015620002155750620002124262278d0062000787565b84105b6200025a5760405162461bcd60e51b815260206004820152601060248201526f496e76616c696420646561646c696e6560801b60448201526064015b60405180910390fd5b600a85101580156200026f5750620f42408511155b620002b15760405162461bcd60e51b8152602060048201526011602482015270476f616c206f7574206f662072616e676560781b604482015260640162000251565b60006040518061014001604052808c81526020018b6001600160a01b031681526020018a815260200189815260200185815260200188815260200187815260200186815260200160008054906101000a90046001600160a01b03166001600160a01b0316815260200184815250905060008c8260008060405162000335906200048d565b620003449493929190620007d1565b604051809103906000f08015801562000361573d6000803e3d6000fd5b509d9c50505050505050505050505050565b6000600182604051620001e0919062000753565b82600283836040516200039c929190620008e9565b9081526020016040518091039020541015620004065760405162461bcd60e51b815260206004820152602260248201527f4e6f7420656e6f75676820696e766573746d656e747320696e2063757272656e604482015261637960f01b606482015260840162000251565b82600283836040516200041b929190620008e9565b908152602001604051809103902060008282546200043a9190620008f9565b9091555050505050565b826001838360405162000459929190620008e9565b908152602001604051809103902060008282546200043a919062000787565b826002838360405162000459929190620008e9565b611cef806200091083390190565b634e487b7160e01b600052604160045260246000fd5b600082601f830112620004c357600080fd5b813567ffffffffffffffff80821115620004e157620004e16200049b565b604051601f8301601f19908116603f011681019082821181831017156200050c576200050c6200049b565b816040528381528660208588010111156200052657600080fd5b836020870160208301376000602085830101528094505050505092915050565b6000602082840312156200055957600080fd5b813567ffffffffffffffff8111156200057157600080fd5b6200057f84828501620004b1565b949350505050565b80356001600160a01b03811681146200059f57600080fd5b919050565b6000806000806000806000806000806101408b8d031215620005c557600080fd5b620005d08b62000587565b995060208b01359850620005e760408c0162000587565b975060608b013567ffffffffffffffff808211156200060557600080fd5b620006138e838f01620004b1565b985060808d01359150808211156200062a57600080fd5b620006388e838f01620004b1565b975060a08d01359150808211156200064f57600080fd5b6200065d8e838f01620004b1565b965060c08d0135955060e08d013594506101008d01359150808211156200068357600080fd5b50620006928d828e01620004b1565b9250506101208b013590509295989b9194979a5092959850565b600080600060408486031215620006c257600080fd5b83359250602084013567ffffffffffffffff80821115620006e257600080fd5b818601915086601f830112620006f757600080fd5b8135818111156200070757600080fd5b8760208285010111156200071a57600080fd5b6020830194508093505050509250925092565b60005b838110156200074a57818101518382015260200162000730565b50506000910152565b60008251620007678184602087016200072d565b9190910192915050565b634e487b7160e01b600052601160045260246000fd5b808201808211156200079d576200079d62000771565b92915050565b60008151808452620007bd8160208601602086016200072d565b601f01601f19169290920160200192915050565b60018060a01b03851681526080602082015283516080820152600060208501516200080760a08401826001600160a01b03169052565b5060408501516101408060c0850152620008266101c0850183620007a3565b91506060870151607f19808685030160e0870152620008468483620007a3565b935060808901519150610100818786030181880152620008678584620007a3565b945060a08a01519250610120828887030181890152620008888685620007a3565b955060c08b01518589015260e08b0151610160890152818b01519450620008bb6101808901866001600160a01b03169052565b909901516101a08701525050506001600160a01b039485166040840152929093166060909101529392505050565b8183823760009101908152919050565b818103818111156200079d576200079d6200077156fe60806040523480156200001157600080fd5b5060405162001cef38038062001cef8339810160408190526200003491620002f1565b60208301516001600160a01b0381166200006857604051631e4fbdf760e01b81526000600482015260240160405180910390fd5b620000738162000174565b50600180546001600160a01b038087166001600160a01b03199283161790925584516006556020850151600580549190931691161790556040830151600790620000be9082620004fb565b506060830151600890620000d39082620004fb565b506080830151600990620000e89082620004fb565b5060a0830151600a90620000fd9082620004fb565b5060c0830151600b5560e0830151600c55610100830151600280546001600160a01b03199081166001600160a01b0393841617909155610120909401516012556000600d819055600e55600f805460ff191690556003805485169382169390931790925560048054909316911617905550620005c7565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b0381168114620001da57600080fd5b50565b8051620001ea81620001c4565b919050565b634e487b7160e01b600052604160045260246000fd5b60405161014081016001600160401b03811182821017156200022b576200022b620001ef565b60405290565b604051601f8201601f191681016001600160401b03811182821017156200025c576200025c620001ef565b604052919050565b600082601f8301126200027657600080fd5b81516001600160401b03811115620002925762000292620001ef565b6020620002a8601f8301601f1916820162000231565b8281528582848701011115620002bd57600080fd5b60005b83811015620002dd578581018301518282018401528201620002c0565b506000928101909101919091529392505050565b600080600080608085870312156200030857600080fd5b84516200031581620001c4565b60208601519094506001600160401b03808211156200033357600080fd5b9086019061014082890312156200034957600080fd5b6200035362000205565b825181526200036560208401620001dd565b60208201526040830151828111156200037d57600080fd5b6200038b8a82860162000264565b604083015250606083015182811115620003a457600080fd5b620003b28a82860162000264565b606083015250608083015182811115620003cb57600080fd5b620003d98a82860162000264565b60808301525060a083015182811115620003f257600080fd5b620004008a82860162000264565b60a08301525060c083015160c082015260e083015160e082015261010091506200042c828401620001dd565b82820152610120915081830151828201528095505050506200045160408601620001dd565b91506200046160608601620001dd565b905092959194509250565b600181811c908216806200048157607f821691505b602082108103620004a257634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620004f657600081815260208120601f850160051c81016020861015620004d15750805b601f850160051c820191505b81811015620004f257828155600101620004dd565b5050505b505050565b81516001600160401b03811115620005175762000517620001ef565b6200052f816200052884546200046c565b84620004a8565b602080601f8311600181146200056757600084156200054e5750858301515b600019600386901b1c1916600185901b178555620004f2565b600085815260208120601f198616915b82811015620005985788860151825594840194600190910190840162000577565b5085821015620005b75787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b61171880620005d76000396000f3fe60806040526004361061011f5760003560e01c80638c639a85116100a0578063c4e5990f11610064578063c4e5990f14610321578063d01e95a914610334578063f2fde38b14610349578063fbbf93a014610369578063fc0c546a1461039557600080fd5b80638c639a851461025d5780638da5cb5b14610273578063955f2c3a146102915780639c39124b146102be578063b332ba6e146102f457600080fd5b80636cdf5557116100e75780636cdf5557146101f65780636fca545b14610216578063715018a61461022b578063777e0d86146102405780638b4c40b01461025557600080fd5b806301cb3b201461012457806312210e8a1461014e57806324600fc3146101655780632ef640ae1461017a5780636904c94d146101be575b600080fd5b34801561013057600080fd5b506101396103b5565b60405190151581526020015b60405180910390f35b34801561015a57600080fd5b50610163610425565b005b34801561017157600080fd5b5061016361052a565b34801561018657600080fd5b506101b0610195366004611365565b6001600160a01b031660009081526011602052604090205490565b604051908152602001610145565b3480156101ca57600080fd5b506005546101de906001600160a01b031681565b6040516001600160a01b039091168152602001610145565b34801561020257600080fd5b506001546101de906001600160a01b031681565b34801561022257600080fd5b506101636109b6565b34801561023757600080fd5b50610163610afb565b34801561024c57600080fd5b506101b0610b0f565b610163610ba6565b34801561026957600080fd5b506101b060125481565b34801561027f57600080fd5b506000546001600160a01b03166101de565b34801561029d57600080fd5b506101b06102ac366004611365565b60116020526000908152604090205481565b3480156102ca57600080fd5b506101b06102d9366004611365565b6001600160a01b031660009081526010602052604090205490565b34801561030057600080fd5b506101b061030f366004611365565b60106020526000908152604090205481565b61016361032f366004611395565b610ccd565b34801561034057600080fd5b506101b0610f7b565b34801561035557600080fd5b50610163610364366004611365565b610fc4565b34801561037557600080fd5b5061037e611002565b6040516101459b9a9998979695949392919061142a565b3480156103a157600080fd5b506002546101de906001600160a01b031681565b600080670de0b6b3a76400006103c9610b0f565b600d546103d691906114db565b6103e091906114f8565b90506000670de0b6b3a76400006103f5610f7b565b600e5461040291906114db565b61040c91906114f8565b600b5490915061041c828461151a565b10159250505090565b600c54421161044f5760405162461bcd60e51b81526004016104469061152d565b60405180910390fd5b6104576103b5565b156104945760405162461bcd60e51b815260206004820152600d60248201526c23b7b0b6103932b0b1b432b21760991b6044820152606401610446565b33600090815260106020526040902054806104eb5760405162461bcd60e51b81526020600482015260176024820152762737903237b730ba34b7b739903a37903932b33ab7321760491b6044820152606401610446565b336000818152601060205260408082208290555183156108fc0291849190818181858888f19350505050158015610526573d6000803e3d6000fd5b5050565b6105326112a3565b600c5442116105535760405162461bcd60e51b81526004016104469061152d565b600f5460ff161561059f5760405162461bcd60e51b8152602060048201526016602482015275233ab732399030b63932b0b23c9031b630b4b6b2b21760511b6044820152606401610446565b60006064601254600d546105b391906114db565b6105bd91906114f8565b905060006064601254600e546105d391906114db565b6105dd91906114f8565b9050600082600d546105ef9190611564565b9050600082600e546106019190611564565b600f805460ff191660011790559050831561068057600160009054906101000a90046001600160a01b03166001600160a01b03166320302d55856040518263ffffffff1660e01b81526004016000604051808303818588803b15801561066657600080fd5b505af115801561067a573d6000803e3d6000fd5b50505050505b821561075f5760025460015460405163095ea7b360e01b81526001600160a01b0391821660048201526024810186905291169063095ea7b3906044016020604051808303816000875af11580156106db573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106ff9190611577565b50600154604051632fba575d60e01b8152600481018590526001600160a01b0390911690632fba575d90602401600060405180830381600087803b15801561074657600080fd5b505af115801561075a573d6000803e3d6000fd5b505050505b81156107cf57600560009054906101000a90046001600160a01b03166001600160a01b0316633ecfd51e836040518263ffffffff1660e01b81526004016000604051808303818588803b1580156107b557600080fd5b505af11580156107c9573d6000803e3d6000fd5b50505050505b80156108ae5760025460055460405163095ea7b360e01b81526001600160a01b0391821660048201526024810184905291169063095ea7b3906044016020604051808303816000875af115801561082a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061084e9190611577565b5060055460405163d887103f60e01b8152600481018390526001600160a01b039091169063d887103f90602401600060405180830381600087803b15801561089557600080fd5b505af11580156108a9573d6000803e3d6000fd5b505050505b600554600d54600e546040516350a024a160e01b8152600481019290925260248201526001600160a01b03909116906350a024a190604401600060405180830381600087803b15801561090057600080fd5b505af1158015610914573d6000803e3d6000fd5b50506000600d819055600e555061092b9050611320565b61093361133e565b8382526020808301849052604080518082018252600381526208aa8960eb1b8184015283528051808201825260028152612aa360f11b8184015291830191909152517f8932c848b22fea04242f493f89d3405567885298f572d135ca028ebd57e8b713906109a690339085908590611599565b60405180910390a1505050505050565b600c5442116109d75760405162461bcd60e51b81526004016104469061152d565b6109df6103b5565b15610a1c5760405162461bcd60e51b815260206004820152600d60248201526c23b7b0b6103932b0b1b432b21760991b6044820152606401610446565b3360009081526011602052604090205480610a735760405162461bcd60e51b81526020600482015260176024820152762737903237b730ba34b7b739903a37903932b33ab7321760491b6044820152606401610446565b3360008181526011602052604080822091909155600254905163a9059cbb60e01b81526004810192909252602482018390526001600160a01b03169063a9059cbb906044016020604051808303816000875af1158015610ad7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105269190611577565b610b036112a3565b610b0d60006112d0565b565b600080600360009054906101000a90046001600160a01b03166001600160a01b031663feaf968c6040518163ffffffff1660e01b815260040160a060405180830381865afa158015610b65573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b89919061163f565b505050915050806402540be400610ba091906114db565b91505090565b600c544210610be95760405162461bcd60e51b815260206004820152600f60248201526e21b0b6b830b4b3b71032b73232b21760891b6044820152606401610446565b60003411610c395760405162461bcd60e51b815260206004820181905260248201527f446f6e6174696f6e206d7573742062652067726561746572207468616e20302e6044820152606401610446565b34600d6000828254610c4b919061151a565b90915550503360009081526010602052604081208054349290610c6f90849061151a565b909155505060405133907ffa5658cbb5d60363acba0d281bddcf21cc9e7ea6053267531b4cdc36d5df7a8a90610cc3903481526040602082018190526003908201526208aa8960eb1b606082015260800190565b60405180910390a2565b600c544210610d105760405162461bcd60e51b815260206004820152600f60248201526e21b0b6b830b4b3b71032b73232b21760891b6044820152606401610446565b6002546040516370a0823160e01b815233600482015286916001600160a01b0316906370a0823190602401602060405180830381865afa158015610d58573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d7c919061168f565b11610ddf5760405162461bcd60e51b815260206004820152602d60248201527f446f6e6174696f6e206d7573742062652067726561746572207468616e20736560448201526c373232b9103130b630b731b29760991b6064820152608401610446565b60025460405163d505accf60e01b8152336004820152306024820152604481018790526064810186905260ff8516608482015260a4810184905260c481018390526001600160a01b039091169063d505accf9060e401600060405180830381600087803b158015610e4f57600080fd5b505af1158015610e63573d6000803e3d6000fd5b50506002546040516323b872dd60e01b8152336004820152306024820152604481018990526001600160a01b0390911692506323b872dd91506064016020604051808303816000875af1158015610ebe573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ee29190611577565b5084600e6000828254610ef5919061151a565b90915550503360009081526011602052604081208054879290610f1990849061151a565b909155505060405133907ffa5658cbb5d60363acba0d281bddcf21cc9e7ea6053267531b4cdc36d5df7a8a90610f6c90888152604060208201819052600290820152612aa360f11b606082015260800190565b60405180910390a25050505050565b6004805460408051633fabe5a360e21b8152905160009384936001600160a01b03169263feaf968c928183019260a0928290030181865afa158015610b65573d6000803e3d6000fd5b610fcc6112a3565b6001600160a01b038116610ff657604051631e4fbdf760e01b815260006004820152602401610446565b610fff816112d0565b50565b6000806060806060806000806000806000600654600560009054906101000a90046001600160a01b0316600760086009600a600b54600c54600d54600e54600f60009054906101000a900460ff1688805461105c906116a8565b80601f0160208091040260200160405190810160405280929190818152602001828054611088906116a8565b80156110d55780601f106110aa576101008083540402835291602001916110d5565b820191906000526020600020905b8154815290600101906020018083116110b857829003601f168201915b505050505098508780546110e8906116a8565b80601f0160208091040260200160405190810160405280929190818152602001828054611114906116a8565b80156111615780601f1061113657610100808354040283529160200191611161565b820191906000526020600020905b81548152906001019060200180831161114457829003601f168201915b50505050509750868054611174906116a8565b80601f01602080910402602001604051908101604052809291908181526020018280546111a0906116a8565b80156111ed5780601f106111c2576101008083540402835291602001916111ed565b820191906000526020600020905b8154815290600101906020018083116111d057829003601f168201915b50505050509650858054611200906116a8565b80601f016020809104026020016040519081016040528092919081815260200182805461122c906116a8565b80156112795780601f1061124e57610100808354040283529160200191611279565b820191906000526020600020905b81548152906001019060200180831161125c57829003601f168201915b505050505095509a509a509a509a509a509a509a509a509a509a509a50909192939495969798999a565b6000546001600160a01b03163314610b0d5760405163118cdaa760e01b8152336004820152602401610446565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60405180604001604052806002906020820280368337509192915050565b60405180604001604052806002905b606081526020019060019003908161134d5790505090565b60006020828403121561137757600080fd5b81356001600160a01b038116811461138e57600080fd5b9392505050565b600080600080600060a086880312156113ad57600080fd5b8535945060208601359350604086013560ff811681146113cc57600080fd5b94979396509394606081013594506080013592915050565b6000815180845260005b8181101561140a576020818501810151868301820152016113ee565b506000602082860101526020601f19601f83011685010191505092915050565b8b81526001600160a01b038b166020820152610160604082018190526000906114558382018d6113e4565b90508281036060840152611469818c6113e4565b9050828103608084015261147d818b6113e4565b905082810360a0840152611491818a6113e4565b60c0840198909852505060e08101949094526101008401929092526101208301521515610140909101529695505050505050565b634e487b7160e01b600052601160045260246000fd5b80820281158282048414176114f2576114f26114c5565b92915050565b60008261151557634e487b7160e01b600052601260045260246000fd5b500490565b808201808211156114f2576114f26114c5565b60208082526019908201527f43616d706169676e206973207374696c6c206163746976652e00000000000000604082015260600190565b818103818111156114f2576114f26114c5565b60006020828403121561158957600080fd5b8151801515811461138e57600080fd5b6001600160a01b0384168152600060808201602080840186845b60028110156115d0578151835291830191908301906001016115b3565b5050608060608601525060c08401918560005b600281101561161257607f198786030183526116008583516113e4565b945091830191908301906001016115e3565b509298975050505050505050565b805169ffffffffffffffffffff8116811461163a57600080fd5b919050565b600080600080600060a0868803121561165757600080fd5b61166086611620565b945060208601519350604086015192506060860151915061168360808701611620565b90509295509295909350565b6000602082840312156116a157600080fd5b5051919050565b600181811c908216806116bc57607f821691505b6020821081036116dc57634e487b7160e01b600052602260045260246000fd5b5091905056fea2646970667358221220a98b2f501b150d1217a62f5f9a240805eb8a03c3ef2d99af01109781be729bba64736f6c63430008140033a26469706673582212207bb64998e1f637dc32ecce1cafa9a95e86dfeeab3023d4617abb146a0853ccc864736f6c63430008140033";

type FundraisingManagerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FundraisingManagerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FundraisingManager__factory extends ContractFactory {
  constructor(...args: FundraisingManagerConstructorParams) {
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
      FundraisingManager & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): FundraisingManager__factory {
    return super.connect(runner) as FundraisingManager__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FundraisingManagerInterface {
    return new Interface(_abi) as FundraisingManagerInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): FundraisingManager {
    return new Contract(address, _abi, runner) as unknown as FundraisingManager;
  }
}
