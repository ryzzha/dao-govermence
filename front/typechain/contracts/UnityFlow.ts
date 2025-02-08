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

export interface UnityFlowInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "closeCompany"
      | "companies"
      | "companyCount"
      | "createFundraising"
      | "createProposal"
      | "decreaseInvestments"
      | "donationsByCurrency"
      | "ethPriceFeed"
      | "executeProposal"
      | "getActiveCompanies"
      | "getAllCompanies(bool)"
      | "getAllCompanies()"
      | "getPlatformStats"
      | "getTotalDonations"
      | "getTotalInvestments"
      | "increaseInvestments"
      | "investmentsByCurrency"
      | "isCompanyActive"
      | "lastProposalTime"
      | "minTokenBalance"
      | "platformFeePercent"
      | "proposalCooldown"
      | "proposalCount"
      | "proposals"
      | "registerCompany"
      | "token"
      | "tokenPriceFeed"
      | "transferETH"
      | "transferUF"
      | "updateDonations"
      | "vote"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "CompanyClosed"
      | "CompanyRegistered"
      | "ProposalCreated"
      | "ProposalExecuted"
      | "TotalFundsUpdated"
      | "VoteCast"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "closeCompany",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "companies",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "companyCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "createFundraising",
    values: [
      BigNumberish,
      string,
      string,
      string,
      BigNumberish,
      BigNumberish,
      string
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "createProposal",
    values: [AddressLike, BytesLike, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "decreaseInvestments",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "donationsByCurrency",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "ethPriceFeed",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "executeProposal",
    values: [BigNumberish, AddressLike, string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getActiveCompanies",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getAllCompanies(bool)",
    values: [boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "getAllCompanies()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getPlatformStats",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalDonations",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalInvestments",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "increaseInvestments",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "investmentsByCurrency",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "isCompanyActive",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "lastProposalTime",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "minTokenBalance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "platformFeePercent",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "proposalCooldown",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "proposalCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "proposals",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "registerCompany",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "tokenPriceFeed",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferETH",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferUF",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateDonations",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "vote",
    values: [BigNumberish, boolean]
  ): string;

  decodeFunctionResult(
    functionFragment: "closeCompany",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "companies", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "companyCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createFundraising",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createProposal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "decreaseInvestments",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "donationsByCurrency",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ethPriceFeed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeProposal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getActiveCompanies",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllCompanies(bool)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllCompanies()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPlatformStats",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTotalDonations",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTotalInvestments",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "increaseInvestments",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "investmentsByCurrency",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isCompanyActive",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lastProposalTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "minTokenBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "platformFeePercent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proposalCooldown",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proposalCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "proposals", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "registerCompany",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "tokenPriceFeed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferETH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "transferUF", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateDonations",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "vote", data: BytesLike): Result;
}

export namespace CompanyClosedEvent {
  export type InputTuple = [
    id: BigNumberish,
    contractAddress: AddressLike,
    founder: AddressLike
  ];
  export type OutputTuple = [
    id: bigint,
    contractAddress: string,
    founder: string
  ];
  export interface OutputObject {
    id: bigint;
    contractAddress: string;
    founder: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace CompanyRegisteredEvent {
  export type InputTuple = [
    id: BigNumberish,
    contractAddress: AddressLike,
    founder: AddressLike
  ];
  export type OutputTuple = [
    id: bigint,
    contractAddress: string,
    founder: string
  ];
  export interface OutputObject {
    id: bigint;
    contractAddress: string;
    founder: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ProposalCreatedEvent {
  export type InputTuple = [
    id: BigNumberish,
    description: string,
    deadline: BigNumberish,
    actionHash: BytesLike
  ];
  export type OutputTuple = [
    id: bigint,
    description: string,
    deadline: bigint,
    actionHash: string
  ];
  export interface OutputObject {
    id: bigint;
    description: string;
    deadline: bigint;
    actionHash: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ProposalExecutedEvent {
  export type InputTuple = [
    id: BigNumberish,
    description: string,
    success: boolean
  ];
  export type OutputTuple = [id: bigint, description: string, success: boolean];
  export interface OutputObject {
    id: bigint;
    description: string;
    success: boolean;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TotalFundsUpdatedEvent {
  export type InputTuple = [
    newTotalFunds: BigNumberish,
    currency: string,
    kind: string
  ];
  export type OutputTuple = [
    newTotalFunds: bigint,
    currency: string,
    kind: string
  ];
  export interface OutputObject {
    newTotalFunds: bigint;
    currency: string;
    kind: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace VoteCastEvent {
  export type InputTuple = [
    proposalId: BigNumberish,
    voter: AddressLike,
    support: boolean,
    votingPower: BigNumberish
  ];
  export type OutputTuple = [
    proposalId: bigint,
    voter: string,
    support: boolean,
    votingPower: bigint
  ];
  export interface OutputObject {
    proposalId: bigint;
    voter: string;
    support: boolean;
    votingPower: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface UnityFlow extends BaseContract {
  connect(runner?: ContractRunner | null): UnityFlow;
  waitForDeployment(): Promise<this>;

  interface: UnityFlowInterface;

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

  closeCompany: TypedContractMethod<
    [companyId: BigNumberish],
    [void],
    "nonpayable"
  >;

  companies: TypedContractMethod<[arg0: BigNumberish], [string], "view">;

  companyCount: TypedContractMethod<[], [bigint], "view">;

  createFundraising: TypedContractMethod<
    [
      id: BigNumberish,
      title: string,
      description: string,
      category: string,
      goalUSD: BigNumberish,
      deadline: BigNumberish,
      image: string
    ],
    [string],
    "nonpayable"
  >;

  createProposal: TypedContractMethod<
    [
      target: AddressLike,
      data: BytesLike,
      description: string,
      deadline: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  decreaseInvestments: TypedContractMethod<
    [amount: BigNumberish, currency: string],
    [void],
    "nonpayable"
  >;

  donationsByCurrency: TypedContractMethod<[arg0: string], [bigint], "view">;

  ethPriceFeed: TypedContractMethod<[], [string], "view">;

  executeProposal: TypedContractMethod<
    [
      proposalId: BigNumberish,
      target: AddressLike,
      description: string,
      data: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  getActiveCompanies: TypedContractMethod<[], [bigint], "view">;

  "getAllCompanies(bool)": TypedContractMethod<
    [onlyActive: boolean],
    [string[]],
    "view"
  >;

  "getAllCompanies()": TypedContractMethod<[], [string[]], "view">;

  getPlatformStats: TypedContractMethod<
    [],
    [
      [
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint
      ] & {
        companyCount_: bigint;
        totalDonationsETH: bigint;
        totalDonationsUF: bigint;
        totalInvestmentsETH: bigint;
        totalInvestmentsUF: bigint;
        activeCompanies: bigint;
        closedCompanies: bigint;
        proposalCount_: bigint;
        totalVotes: bigint;
        platformBalanceETH: bigint;
        platformBalanceUF: bigint;
      }
    ],
    "view"
  >;

  getTotalDonations: TypedContractMethod<[currency: string], [bigint], "view">;

  getTotalInvestments: TypedContractMethod<
    [currency: string],
    [bigint],
    "view"
  >;

  increaseInvestments: TypedContractMethod<
    [amount: BigNumberish, currency: string],
    [void],
    "nonpayable"
  >;

  investmentsByCurrency: TypedContractMethod<[arg0: string], [bigint], "view">;

  isCompanyActive: TypedContractMethod<[arg0: AddressLike], [boolean], "view">;

  lastProposalTime: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  minTokenBalance: TypedContractMethod<[], [bigint], "view">;

  platformFeePercent: TypedContractMethod<[], [bigint], "view">;

  proposalCooldown: TypedContractMethod<[], [bigint], "view">;

  proposalCount: TypedContractMethod<[], [bigint], "view">;

  proposals: TypedContractMethod<
    [arg0: BigNumberish],
    [
      [string, string, bigint, bigint, bigint, boolean] & {
        actionHash: string;
        description: string;
        votesFor: bigint;
        votesAgainst: bigint;
        deadline: bigint;
        executed: boolean;
      }
    ],
    "view"
  >;

  registerCompany: TypedContractMethod<[name: string], [void], "nonpayable">;

  token: TypedContractMethod<[], [string], "view">;

  tokenPriceFeed: TypedContractMethod<[], [string], "view">;

  transferETH: TypedContractMethod<
    [to: AddressLike, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  transferUF: TypedContractMethod<
    [to: AddressLike, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  updateDonations: TypedContractMethod<
    [amount: BigNumberish, currency: string],
    [void],
    "nonpayable"
  >;

  vote: TypedContractMethod<
    [proposalId: BigNumberish, support: boolean],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "closeCompany"
  ): TypedContractMethod<[companyId: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "companies"
  ): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "companyCount"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "createFundraising"
  ): TypedContractMethod<
    [
      id: BigNumberish,
      title: string,
      description: string,
      category: string,
      goalUSD: BigNumberish,
      deadline: BigNumberish,
      image: string
    ],
    [string],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "createProposal"
  ): TypedContractMethod<
    [
      target: AddressLike,
      data: BytesLike,
      description: string,
      deadline: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "decreaseInvestments"
  ): TypedContractMethod<
    [amount: BigNumberish, currency: string],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "donationsByCurrency"
  ): TypedContractMethod<[arg0: string], [bigint], "view">;
  getFunction(
    nameOrSignature: "ethPriceFeed"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "executeProposal"
  ): TypedContractMethod<
    [
      proposalId: BigNumberish,
      target: AddressLike,
      description: string,
      data: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getActiveCompanies"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getAllCompanies(bool)"
  ): TypedContractMethod<[onlyActive: boolean], [string[]], "view">;
  getFunction(
    nameOrSignature: "getAllCompanies()"
  ): TypedContractMethod<[], [string[]], "view">;
  getFunction(
    nameOrSignature: "getPlatformStats"
  ): TypedContractMethod<
    [],
    [
      [
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint
      ] & {
        companyCount_: bigint;
        totalDonationsETH: bigint;
        totalDonationsUF: bigint;
        totalInvestmentsETH: bigint;
        totalInvestmentsUF: bigint;
        activeCompanies: bigint;
        closedCompanies: bigint;
        proposalCount_: bigint;
        totalVotes: bigint;
        platformBalanceETH: bigint;
        platformBalanceUF: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "getTotalDonations"
  ): TypedContractMethod<[currency: string], [bigint], "view">;
  getFunction(
    nameOrSignature: "getTotalInvestments"
  ): TypedContractMethod<[currency: string], [bigint], "view">;
  getFunction(
    nameOrSignature: "increaseInvestments"
  ): TypedContractMethod<
    [amount: BigNumberish, currency: string],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "investmentsByCurrency"
  ): TypedContractMethod<[arg0: string], [bigint], "view">;
  getFunction(
    nameOrSignature: "isCompanyActive"
  ): TypedContractMethod<[arg0: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "lastProposalTime"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "minTokenBalance"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "platformFeePercent"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "proposalCooldown"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "proposalCount"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "proposals"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [
      [string, string, bigint, bigint, bigint, boolean] & {
        actionHash: string;
        description: string;
        votesFor: bigint;
        votesAgainst: bigint;
        deadline: bigint;
        executed: boolean;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "registerCompany"
  ): TypedContractMethod<[name: string], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "token"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "tokenPriceFeed"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "transferETH"
  ): TypedContractMethod<
    [to: AddressLike, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "transferUF"
  ): TypedContractMethod<
    [to: AddressLike, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "updateDonations"
  ): TypedContractMethod<
    [amount: BigNumberish, currency: string],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "vote"
  ): TypedContractMethod<
    [proposalId: BigNumberish, support: boolean],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "CompanyClosed"
  ): TypedContractEvent<
    CompanyClosedEvent.InputTuple,
    CompanyClosedEvent.OutputTuple,
    CompanyClosedEvent.OutputObject
  >;
  getEvent(
    key: "CompanyRegistered"
  ): TypedContractEvent<
    CompanyRegisteredEvent.InputTuple,
    CompanyRegisteredEvent.OutputTuple,
    CompanyRegisteredEvent.OutputObject
  >;
  getEvent(
    key: "ProposalCreated"
  ): TypedContractEvent<
    ProposalCreatedEvent.InputTuple,
    ProposalCreatedEvent.OutputTuple,
    ProposalCreatedEvent.OutputObject
  >;
  getEvent(
    key: "ProposalExecuted"
  ): TypedContractEvent<
    ProposalExecutedEvent.InputTuple,
    ProposalExecutedEvent.OutputTuple,
    ProposalExecutedEvent.OutputObject
  >;
  getEvent(
    key: "TotalFundsUpdated"
  ): TypedContractEvent<
    TotalFundsUpdatedEvent.InputTuple,
    TotalFundsUpdatedEvent.OutputTuple,
    TotalFundsUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "VoteCast"
  ): TypedContractEvent<
    VoteCastEvent.InputTuple,
    VoteCastEvent.OutputTuple,
    VoteCastEvent.OutputObject
  >;

  filters: {
    "CompanyClosed(uint256,address,address)": TypedContractEvent<
      CompanyClosedEvent.InputTuple,
      CompanyClosedEvent.OutputTuple,
      CompanyClosedEvent.OutputObject
    >;
    CompanyClosed: TypedContractEvent<
      CompanyClosedEvent.InputTuple,
      CompanyClosedEvent.OutputTuple,
      CompanyClosedEvent.OutputObject
    >;

    "CompanyRegistered(uint256,address,address)": TypedContractEvent<
      CompanyRegisteredEvent.InputTuple,
      CompanyRegisteredEvent.OutputTuple,
      CompanyRegisteredEvent.OutputObject
    >;
    CompanyRegistered: TypedContractEvent<
      CompanyRegisteredEvent.InputTuple,
      CompanyRegisteredEvent.OutputTuple,
      CompanyRegisteredEvent.OutputObject
    >;

    "ProposalCreated(uint256,string,uint256,bytes32)": TypedContractEvent<
      ProposalCreatedEvent.InputTuple,
      ProposalCreatedEvent.OutputTuple,
      ProposalCreatedEvent.OutputObject
    >;
    ProposalCreated: TypedContractEvent<
      ProposalCreatedEvent.InputTuple,
      ProposalCreatedEvent.OutputTuple,
      ProposalCreatedEvent.OutputObject
    >;

    "ProposalExecuted(uint256,string,bool)": TypedContractEvent<
      ProposalExecutedEvent.InputTuple,
      ProposalExecutedEvent.OutputTuple,
      ProposalExecutedEvent.OutputObject
    >;
    ProposalExecuted: TypedContractEvent<
      ProposalExecutedEvent.InputTuple,
      ProposalExecutedEvent.OutputTuple,
      ProposalExecutedEvent.OutputObject
    >;

    "TotalFundsUpdated(uint256,string,string)": TypedContractEvent<
      TotalFundsUpdatedEvent.InputTuple,
      TotalFundsUpdatedEvent.OutputTuple,
      TotalFundsUpdatedEvent.OutputObject
    >;
    TotalFundsUpdated: TypedContractEvent<
      TotalFundsUpdatedEvent.InputTuple,
      TotalFundsUpdatedEvent.OutputTuple,
      TotalFundsUpdatedEvent.OutputObject
    >;

    "VoteCast(uint256,address,bool,uint256)": TypedContractEvent<
      VoteCastEvent.InputTuple,
      VoteCastEvent.OutputTuple,
      VoteCastEvent.OutputObject
    >;
    VoteCast: TypedContractEvent<
      VoteCastEvent.InputTuple,
      VoteCastEvent.OutputTuple,
      VoteCastEvent.OutputObject
    >;
  };
}
