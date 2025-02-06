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
      | "activeCompanies"
      | "closeCompany"
      | "closedCompanies"
      | "companies"
      | "companyCount"
      | "createFundraising"
      | "createProposal"
      | "decreaseInvestments"
      | "donationsByCurrency"
      | "executeProposal"
      | "getAllCampaigns"
      | "getAllCompanies"
      | "getPlatformStats"
      | "increaseInvestments"
      | "investmentsByCurrency"
      | "isCompanyActive"
      | "minTokenBalance"
      | "platformFeePercent"
      | "proposalCount"
      | "proposals"
      | "registerCompany"
      | "token"
      | "totalDonations"
      | "totalInvestments"
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
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "activeCompanies",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "closeCompany",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "closedCompanies",
    values?: undefined
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
    values: [string]
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
    functionFragment: "executeProposal",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getAllCampaigns",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getAllCompanies",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getPlatformStats",
    values?: undefined
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
    functionFragment: "minTokenBalance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "platformFeePercent",
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
    functionFragment: "totalDonations",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalInvestments",
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
    functionFragment: "activeCompanies",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "closeCompany",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "closedCompanies",
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
    functionFragment: "executeProposal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllCampaigns",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllCompanies",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPlatformStats",
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
    functionFragment: "minTokenBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "platformFeePercent",
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
    functionFragment: "totalDonations",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalInvestments",
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
  export type InputTuple = [id: BigNumberish, description: string];
  export type OutputTuple = [id: bigint, description: string];
  export interface OutputObject {
    id: bigint;
    description: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ProposalExecutedEvent {
  export type InputTuple = [id: BigNumberish, success: boolean];
  export type OutputTuple = [id: bigint, success: boolean];
  export interface OutputObject {
    id: bigint;
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

  activeCompanies: TypedContractMethod<[], [bigint], "view">;

  closeCompany: TypedContractMethod<
    [companyId: BigNumberish],
    [void],
    "nonpayable"
  >;

  closedCompanies: TypedContractMethod<[], [bigint], "view">;

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
    [_description: string],
    [void],
    "nonpayable"
  >;

  decreaseInvestments: TypedContractMethod<
    [amount: BigNumberish, currency: string],
    [void],
    "nonpayable"
  >;

  donationsByCurrency: TypedContractMethod<[arg0: string], [bigint], "view">;

  executeProposal: TypedContractMethod<
    [proposalId: BigNumberish],
    [void],
    "nonpayable"
  >;

  getAllCampaigns: TypedContractMethod<[], [string[]], "view">;

  getAllCompanies: TypedContractMethod<[], [string[]], "view">;

  getPlatformStats: TypedContractMethod<
    [],
    [[bigint, bigint, bigint, bigint, bigint]],
    "view"
  >;

  increaseInvestments: TypedContractMethod<
    [amount: BigNumberish, currency: string],
    [void],
    "nonpayable"
  >;

  investmentsByCurrency: TypedContractMethod<[arg0: string], [bigint], "view">;

  isCompanyActive: TypedContractMethod<[arg0: AddressLike], [boolean], "view">;

  minTokenBalance: TypedContractMethod<[], [bigint], "view">;

  platformFeePercent: TypedContractMethod<[], [bigint], "view">;

  proposalCount: TypedContractMethod<[], [bigint], "view">;

  proposals: TypedContractMethod<
    [arg0: BigNumberish],
    [
      [string, bigint, bigint, boolean] & {
        description: string;
        votesFor: bigint;
        votesAgainst: bigint;
        executed: boolean;
      }
    ],
    "view"
  >;

  registerCompany: TypedContractMethod<[name: string], [void], "nonpayable">;

  token: TypedContractMethod<[], [string], "view">;

  totalDonations: TypedContractMethod<[], [bigint], "view">;

  totalInvestments: TypedContractMethod<[], [bigint], "view">;

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
    nameOrSignature: "activeCompanies"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "closeCompany"
  ): TypedContractMethod<[companyId: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "closedCompanies"
  ): TypedContractMethod<[], [bigint], "view">;
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
  ): TypedContractMethod<[_description: string], [void], "nonpayable">;
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
    nameOrSignature: "executeProposal"
  ): TypedContractMethod<[proposalId: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "getAllCampaigns"
  ): TypedContractMethod<[], [string[]], "view">;
  getFunction(
    nameOrSignature: "getAllCompanies"
  ): TypedContractMethod<[], [string[]], "view">;
  getFunction(
    nameOrSignature: "getPlatformStats"
  ): TypedContractMethod<
    [],
    [[bigint, bigint, bigint, bigint, bigint]],
    "view"
  >;
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
    nameOrSignature: "minTokenBalance"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "platformFeePercent"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "proposalCount"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "proposals"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [
      [string, bigint, bigint, boolean] & {
        description: string;
        votesFor: bigint;
        votesAgainst: bigint;
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
    nameOrSignature: "totalDonations"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "totalInvestments"
  ): TypedContractMethod<[], [bigint], "view">;
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

    "ProposalCreated(uint256,string)": TypedContractEvent<
      ProposalCreatedEvent.InputTuple,
      ProposalCreatedEvent.OutputTuple,
      ProposalCreatedEvent.OutputObject
    >;
    ProposalCreated: TypedContractEvent<
      ProposalCreatedEvent.InputTuple,
      ProposalCreatedEvent.OutputTuple,
      ProposalCreatedEvent.OutputObject
    >;

    "ProposalExecuted(uint256,bool)": TypedContractEvent<
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
  };
}
