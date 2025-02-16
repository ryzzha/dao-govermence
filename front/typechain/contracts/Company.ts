/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../common";

export declare namespace Company {
  export type CompanyDetailsStruct = {
    companyId: BigNumberish;
    companyAddress: AddressLike;
    name: string;
    image: string;
    description: string;
    category: string;
    founder: AddressLike;
    cofounders: AddressLike[];
    totalFundsETH: BigNumberish;
    totalFundsUF: BigNumberish;
    totalInvestmentsETH: BigNumberish;
    totalInvestmentsUF: BigNumberish;
    fundraisers: AddressLike[];
    investors: AddressLike[];
    isActive: boolean;
  };

  export type CompanyDetailsStructOutput = [
    companyId: bigint,
    companyAddress: string,
    name: string,
    image: string,
    description: string,
    category: string,
    founder: string,
    cofounders: string[],
    totalFundsETH: bigint,
    totalFundsUF: bigint,
    totalInvestmentsETH: bigint,
    totalInvestmentsUF: bigint,
    fundraisers: string[],
    investors: string[],
    isActive: boolean
  ] & {
    companyId: bigint;
    companyAddress: string;
    name: string;
    image: string;
    description: string;
    category: string;
    founder: string;
    cofounders: string[];
    totalFundsETH: bigint;
    totalFundsUF: bigint;
    totalInvestmentsETH: bigint;
    totalInvestmentsUF: bigint;
    fundraisers: string[];
    investors: string[];
    isActive: boolean;
  };
}

export interface CompanyInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "addCofounder"
      | "category"
      | "closeCompany"
      | "cofounders"
      | "createFundraising"
      | "description"
      | "distributeDividends"
      | "founder"
      | "fullWithdraw"
      | "fundraisers"
      | "fundraisingCount"
      | "getCofounders"
      | "getCompanyDetails"
      | "getCompanyInfo"
      | "getInvestorBalance"
      | "getInvestorDividends"
      | "id"
      | "image"
      | "investETH"
      | "investUF"
      | "investorETHBalances"
      | "investorUFBalances"
      | "investors"
      | "lastDividendDistribution"
      | "name"
      | "onFundraiserSuccessfullyCompleted"
      | "onFundraiserUnsuccessfulEnded"
      | "owner"
      | "pendingDividendsETH"
      | "pendingDividendsUF"
      | "receiveETH"
      | "receiveUF"
      | "removeCofounder"
      | "renounceOwnership"
      | "token"
      | "totalFundsETH"
      | "totalFundsUF"
      | "totalInvestmentsETH"
      | "totalInvestmentsUF"
      | "transferOwnership"
      | "unityFlow"
      | "withdrawDividendsETH"
      | "withdrawDividendsUF"
      | "withdrawETH"
      | "withdrawFromFundraising"
      | "withdrawInvestmentETH"
      | "withdrawInvestmentUF"
      | "withdrawUF"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "CofounderAdded"
      | "CofounderRemoved"
      | "FundraiserCreated"
      | "FundraiserSuccessfullyCompleted"
      | "FundraiserUnsuccessfulEnded"
      | "FundsReceived"
      | "FundsWithdrawn"
      | "OwnershipTransferred"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "addCofounder",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "category", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "closeCompany",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "cofounders",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "createFundraising",
    values: [string, string, string, BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "description",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "distributeDividends",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "founder", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "fullWithdraw",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "fundraisers",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "fundraisingCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCofounders",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCompanyDetails",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCompanyInfo",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getInvestorBalance",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getInvestorDividends",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "id", values?: undefined): string;
  encodeFunctionData(functionFragment: "image", values?: undefined): string;
  encodeFunctionData(functionFragment: "investETH", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "investUF",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "investorETHBalances",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "investorUFBalances",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "investors",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "lastDividendDistribution",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "onFundraiserSuccessfullyCompleted",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "onFundraiserUnsuccessfulEnded",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pendingDividendsETH",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "pendingDividendsUF",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "receiveETH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "receiveUF",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "removeCofounder",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "totalFundsETH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalFundsUF",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalInvestmentsETH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalInvestmentsUF",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "unityFlow", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "withdrawDividendsETH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawDividendsUF",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawETH",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawFromFundraising",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawInvestmentETH",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawInvestmentUF",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawUF",
    values: [AddressLike, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "addCofounder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "category", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "closeCompany",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "cofounders", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createFundraising",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "description",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "distributeDividends",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "founder", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "fullWithdraw",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fundraisers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fundraisingCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCofounders",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCompanyDetails",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCompanyInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getInvestorBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getInvestorDividends",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "id", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "image", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "investETH", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "investUF", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "investorETHBalances",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "investorUFBalances",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "investors", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lastDividendDistribution",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "onFundraiserSuccessfullyCompleted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onFundraiserUnsuccessfulEnded",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pendingDividendsETH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pendingDividendsUF",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "receiveETH", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "receiveUF", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeCofounder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalFundsETH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalFundsUF",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalInvestmentsETH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalInvestmentsUF",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unityFlow", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawDividendsETH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawDividendsUF",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawETH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawFromFundraising",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawInvestmentETH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawInvestmentUF",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdrawUF", data: BytesLike): Result;
}

export namespace CofounderAddedEvent {
  export type InputTuple = [cofounder: AddressLike];
  export type OutputTuple = [cofounder: string];
  export interface OutputObject {
    cofounder: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace CofounderRemovedEvent {
  export type InputTuple = [cofounder: AddressLike];
  export type OutputTuple = [cofounder: string];
  export interface OutputObject {
    cofounder: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace FundraiserCreatedEvent {
  export type InputTuple = [
    company: AddressLike,
    fundraiser: AddressLike,
    title: string,
    goalUSD: BigNumberish,
    deadline: BigNumberish
  ];
  export type OutputTuple = [
    company: string,
    fundraiser: string,
    title: string,
    goalUSD: bigint,
    deadline: bigint
  ];
  export interface OutputObject {
    company: string;
    fundraiser: string;
    title: string;
    goalUSD: bigint;
    deadline: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace FundraiserSuccessfullyCompletedEvent {
  export type InputTuple = [
    company: AddressLike,
    fundraiser: AddressLike,
    collectedETH: BigNumberish,
    collectedUF: BigNumberish
  ];
  export type OutputTuple = [
    company: string,
    fundraiser: string,
    collectedETH: bigint,
    collectedUF: bigint
  ];
  export interface OutputObject {
    company: string;
    fundraiser: string;
    collectedETH: bigint;
    collectedUF: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace FundraiserUnsuccessfulEndedEvent {
  export type InputTuple = [
    company: AddressLike,
    fundraiser: AddressLike,
    collectedETH: BigNumberish,
    collectedUF: BigNumberish
  ];
  export type OutputTuple = [
    company: string,
    fundraiser: string,
    collectedETH: bigint,
    collectedUF: bigint
  ];
  export interface OutputObject {
    company: string;
    fundraiser: string;
    collectedETH: bigint;
    collectedUF: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace FundsReceivedEvent {
  export type InputTuple = [
    amount: BigNumberish,
    sender: AddressLike,
    asset: string,
    source: string
  ];
  export type OutputTuple = [
    amount: bigint,
    sender: string,
    asset: string,
    source: string
  ];
  export interface OutputObject {
    amount: bigint;
    sender: string;
    asset: string;
    source: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace FundsWithdrawnEvent {
  export type InputTuple = [
    amount: BigNumberish,
    receiver: AddressLike,
    asset: string,
    source: string
  ];
  export type OutputTuple = [
    amount: bigint,
    receiver: string,
    asset: string,
    source: string
  ];
  export interface OutputObject {
    amount: bigint;
    receiver: string;
    asset: string;
    source: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface Company extends BaseContract {
  connect(runner?: ContractRunner | null): Company;
  waitForDeployment(): Promise<this>;

  interface: CompanyInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  addCofounder: TypedContractMethod<
    [cofounder: AddressLike],
    [void],
    "nonpayable"
  >;

  category: TypedContractMethod<[], [string], "view">;

  closeCompany: TypedContractMethod<[], [void], "nonpayable">;

  cofounders: TypedContractMethod<[arg0: BigNumberish], [string], "view">;

  createFundraising: TypedContractMethod<
    [
      title: string,
      _description: string,
      _category: string,
      goalUSD: BigNumberish,
      deadline: BigNumberish,
      _image: string
    ],
    [void],
    "nonpayable"
  >;

  description: TypedContractMethod<[], [string], "view">;

  distributeDividends: TypedContractMethod<[], [void], "nonpayable">;

  founder: TypedContractMethod<[], [string], "view">;

  fullWithdraw: TypedContractMethod<[to: AddressLike], [void], "nonpayable">;

  fundraisers: TypedContractMethod<[arg0: BigNumberish], [string], "view">;

  fundraisingCount: TypedContractMethod<[], [bigint], "view">;

  getCofounders: TypedContractMethod<[], [string[]], "view">;

  getCompanyDetails: TypedContractMethod<
    [],
    [Company.CompanyDetailsStructOutput],
    "view"
  >;

  getCompanyInfo: TypedContractMethod<
    [],
    [
      [bigint, string, string, string, string, string, string, boolean] & {
        companyId: bigint;
        companyAddress: string;
        companyName: string;
        companyImage: string;
        companyDescription: string;
        companyCategory: string;
        companyFounder: string;
        isActive: boolean;
      }
    ],
    "view"
  >;

  getInvestorBalance: TypedContractMethod<
    [investor: AddressLike],
    [[bigint, bigint] & { ethBalance: bigint; ufBalance: bigint }],
    "view"
  >;

  getInvestorDividends: TypedContractMethod<
    [investor: AddressLike],
    [[bigint, bigint] & { ethDividends: bigint; ufDividends: bigint }],
    "view"
  >;

  id: TypedContractMethod<[], [bigint], "view">;

  image: TypedContractMethod<[], [string], "view">;

  investETH: TypedContractMethod<[], [void], "payable">;

  investUF: TypedContractMethod<[amount: BigNumberish], [void], "nonpayable">;

  investorETHBalances: TypedContractMethod<
    [arg0: AddressLike],
    [bigint],
    "view"
  >;

  investorUFBalances: TypedContractMethod<
    [arg0: AddressLike],
    [bigint],
    "view"
  >;

  investors: TypedContractMethod<[arg0: BigNumberish], [string], "view">;

  lastDividendDistribution: TypedContractMethod<[], [bigint], "view">;

  name: TypedContractMethod<[], [string], "view">;

  onFundraiserSuccessfullyCompleted: TypedContractMethod<
    [totalCollectedETH: BigNumberish, totalCollectedUF: BigNumberish],
    [void],
    "nonpayable"
  >;

  onFundraiserUnsuccessfulEnded: TypedContractMethod<
    [totalCollectedETH: BigNumberish, totalCollectedUF: BigNumberish],
    [void],
    "nonpayable"
  >;

  owner: TypedContractMethod<[], [string], "view">;

  pendingDividendsETH: TypedContractMethod<
    [arg0: AddressLike],
    [bigint],
    "view"
  >;

  pendingDividendsUF: TypedContractMethod<
    [arg0: AddressLike],
    [bigint],
    "view"
  >;

  receiveETH: TypedContractMethod<[], [void], "payable">;

  receiveUF: TypedContractMethod<[amount: BigNumberish], [void], "nonpayable">;

  removeCofounder: TypedContractMethod<
    [cofounder: AddressLike],
    [void],
    "nonpayable"
  >;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  token: TypedContractMethod<[], [string], "view">;

  totalFundsETH: TypedContractMethod<[], [bigint], "view">;

  totalFundsUF: TypedContractMethod<[], [bigint], "view">;

  totalInvestmentsETH: TypedContractMethod<[], [bigint], "view">;

  totalInvestmentsUF: TypedContractMethod<[], [bigint], "view">;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  unityFlow: TypedContractMethod<[], [string], "view">;

  withdrawDividendsETH: TypedContractMethod<[], [void], "nonpayable">;

  withdrawDividendsUF: TypedContractMethod<[], [void], "nonpayable">;

  withdrawETH: TypedContractMethod<
    [to: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  withdrawFromFundraising: TypedContractMethod<
    [fundraisingContract: AddressLike],
    [void],
    "nonpayable"
  >;

  withdrawInvestmentETH: TypedContractMethod<
    [amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  withdrawInvestmentUF: TypedContractMethod<
    [amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  withdrawUF: TypedContractMethod<
    [to: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "addCofounder"
  ): TypedContractMethod<[cofounder: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "category"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "closeCompany"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "cofounders"
  ): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "createFundraising"
  ): TypedContractMethod<
    [
      title: string,
      _description: string,
      _category: string,
      goalUSD: BigNumberish,
      deadline: BigNumberish,
      _image: string
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "description"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "distributeDividends"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "founder"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "fullWithdraw"
  ): TypedContractMethod<[to: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "fundraisers"
  ): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "fundraisingCount"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getCofounders"
  ): TypedContractMethod<[], [string[]], "view">;
  getFunction(
    nameOrSignature: "getCompanyDetails"
  ): TypedContractMethod<[], [Company.CompanyDetailsStructOutput], "view">;
  getFunction(
    nameOrSignature: "getCompanyInfo"
  ): TypedContractMethod<
    [],
    [
      [bigint, string, string, string, string, string, string, boolean] & {
        companyId: bigint;
        companyAddress: string;
        companyName: string;
        companyImage: string;
        companyDescription: string;
        companyCategory: string;
        companyFounder: string;
        isActive: boolean;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "getInvestorBalance"
  ): TypedContractMethod<
    [investor: AddressLike],
    [[bigint, bigint] & { ethBalance: bigint; ufBalance: bigint }],
    "view"
  >;
  getFunction(
    nameOrSignature: "getInvestorDividends"
  ): TypedContractMethod<
    [investor: AddressLike],
    [[bigint, bigint] & { ethDividends: bigint; ufDividends: bigint }],
    "view"
  >;
  getFunction(nameOrSignature: "id"): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "image"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "investETH"
  ): TypedContractMethod<[], [void], "payable">;
  getFunction(
    nameOrSignature: "investUF"
  ): TypedContractMethod<[amount: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "investorETHBalances"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "investorUFBalances"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "investors"
  ): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "lastDividendDistribution"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "name"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "onFundraiserSuccessfullyCompleted"
  ): TypedContractMethod<
    [totalCollectedETH: BigNumberish, totalCollectedUF: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "onFundraiserUnsuccessfulEnded"
  ): TypedContractMethod<
    [totalCollectedETH: BigNumberish, totalCollectedUF: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "pendingDividendsETH"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "pendingDividendsUF"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "receiveETH"
  ): TypedContractMethod<[], [void], "payable">;
  getFunction(
    nameOrSignature: "receiveUF"
  ): TypedContractMethod<[amount: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "removeCofounder"
  ): TypedContractMethod<[cofounder: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "token"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "totalFundsETH"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "totalFundsUF"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "totalInvestmentsETH"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "totalInvestmentsUF"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "unityFlow"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "withdrawDividendsETH"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "withdrawDividendsUF"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "withdrawETH"
  ): TypedContractMethod<
    [to: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "withdrawFromFundraising"
  ): TypedContractMethod<
    [fundraisingContract: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "withdrawInvestmentETH"
  ): TypedContractMethod<[amount: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "withdrawInvestmentUF"
  ): TypedContractMethod<[amount: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "withdrawUF"
  ): TypedContractMethod<
    [to: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "CofounderAdded"
  ): TypedContractEvent<
    CofounderAddedEvent.InputTuple,
    CofounderAddedEvent.OutputTuple,
    CofounderAddedEvent.OutputObject
  >;
  getEvent(
    key: "CofounderRemoved"
  ): TypedContractEvent<
    CofounderRemovedEvent.InputTuple,
    CofounderRemovedEvent.OutputTuple,
    CofounderRemovedEvent.OutputObject
  >;
  getEvent(
    key: "FundraiserCreated"
  ): TypedContractEvent<
    FundraiserCreatedEvent.InputTuple,
    FundraiserCreatedEvent.OutputTuple,
    FundraiserCreatedEvent.OutputObject
  >;
  getEvent(
    key: "FundraiserSuccessfullyCompleted"
  ): TypedContractEvent<
    FundraiserSuccessfullyCompletedEvent.InputTuple,
    FundraiserSuccessfullyCompletedEvent.OutputTuple,
    FundraiserSuccessfullyCompletedEvent.OutputObject
  >;
  getEvent(
    key: "FundraiserUnsuccessfulEnded"
  ): TypedContractEvent<
    FundraiserUnsuccessfulEndedEvent.InputTuple,
    FundraiserUnsuccessfulEndedEvent.OutputTuple,
    FundraiserUnsuccessfulEndedEvent.OutputObject
  >;
  getEvent(
    key: "FundsReceived"
  ): TypedContractEvent<
    FundsReceivedEvent.InputTuple,
    FundsReceivedEvent.OutputTuple,
    FundsReceivedEvent.OutputObject
  >;
  getEvent(
    key: "FundsWithdrawn"
  ): TypedContractEvent<
    FundsWithdrawnEvent.InputTuple,
    FundsWithdrawnEvent.OutputTuple,
    FundsWithdrawnEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;

  filters: {
    "CofounderAdded(address)": TypedContractEvent<
      CofounderAddedEvent.InputTuple,
      CofounderAddedEvent.OutputTuple,
      CofounderAddedEvent.OutputObject
    >;
    CofounderAdded: TypedContractEvent<
      CofounderAddedEvent.InputTuple,
      CofounderAddedEvent.OutputTuple,
      CofounderAddedEvent.OutputObject
    >;

    "CofounderRemoved(address)": TypedContractEvent<
      CofounderRemovedEvent.InputTuple,
      CofounderRemovedEvent.OutputTuple,
      CofounderRemovedEvent.OutputObject
    >;
    CofounderRemoved: TypedContractEvent<
      CofounderRemovedEvent.InputTuple,
      CofounderRemovedEvent.OutputTuple,
      CofounderRemovedEvent.OutputObject
    >;

    "FundraiserCreated(address,address,string,uint256,uint256)": TypedContractEvent<
      FundraiserCreatedEvent.InputTuple,
      FundraiserCreatedEvent.OutputTuple,
      FundraiserCreatedEvent.OutputObject
    >;
    FundraiserCreated: TypedContractEvent<
      FundraiserCreatedEvent.InputTuple,
      FundraiserCreatedEvent.OutputTuple,
      FundraiserCreatedEvent.OutputObject
    >;

    "FundraiserSuccessfullyCompleted(address,address,uint256,uint256)": TypedContractEvent<
      FundraiserSuccessfullyCompletedEvent.InputTuple,
      FundraiserSuccessfullyCompletedEvent.OutputTuple,
      FundraiserSuccessfullyCompletedEvent.OutputObject
    >;
    FundraiserSuccessfullyCompleted: TypedContractEvent<
      FundraiserSuccessfullyCompletedEvent.InputTuple,
      FundraiserSuccessfullyCompletedEvent.OutputTuple,
      FundraiserSuccessfullyCompletedEvent.OutputObject
    >;

    "FundraiserUnsuccessfulEnded(address,address,uint256,uint256)": TypedContractEvent<
      FundraiserUnsuccessfulEndedEvent.InputTuple,
      FundraiserUnsuccessfulEndedEvent.OutputTuple,
      FundraiserUnsuccessfulEndedEvent.OutputObject
    >;
    FundraiserUnsuccessfulEnded: TypedContractEvent<
      FundraiserUnsuccessfulEndedEvent.InputTuple,
      FundraiserUnsuccessfulEndedEvent.OutputTuple,
      FundraiserUnsuccessfulEndedEvent.OutputObject
    >;

    "FundsReceived(uint256,address,string,string)": TypedContractEvent<
      FundsReceivedEvent.InputTuple,
      FundsReceivedEvent.OutputTuple,
      FundsReceivedEvent.OutputObject
    >;
    FundsReceived: TypedContractEvent<
      FundsReceivedEvent.InputTuple,
      FundsReceivedEvent.OutputTuple,
      FundsReceivedEvent.OutputObject
    >;

    "FundsWithdrawn(uint256,address,string,string)": TypedContractEvent<
      FundsWithdrawnEvent.InputTuple,
      FundsWithdrawnEvent.OutputTuple,
      FundsWithdrawnEvent.OutputObject
    >;
    FundsWithdrawn: TypedContractEvent<
      FundsWithdrawnEvent.InputTuple,
      FundsWithdrawnEvent.OutputTuple,
      FundsWithdrawnEvent.OutputObject
    >;

    "OwnershipTransferred(address,address)": TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
  };
}
