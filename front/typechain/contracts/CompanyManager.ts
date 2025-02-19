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

export interface CompanyManagerInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "addCompanyToUser"
      | "closeCompany"
      | "companies"
      | "companyCount"
      | "getCompanyAddress"
      | "getUserCompanies"
      | "isActiveCompany"
      | "isCompanyActive"
      | "minTokenBalance"
      | "registerCompany"
      | "removeCompanyFromUser"
      | "token"
      | "userToCompanies"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "CompanyClosed" | "CompanyRegistered"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "addCompanyToUser",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "closeCompany",
    values: [BigNumberish, AddressLike]
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
    functionFragment: "getCompanyAddress",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getUserCompanies",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isActiveCompany",
    values: [AddressLike]
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
    functionFragment: "registerCompany",
    values: [
      AddressLike,
      string,
      string,
      string,
      string,
      AddressLike[],
      AddressLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "removeCompanyFromUser",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "userToCompanies",
    values: [AddressLike, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "addCompanyToUser",
    data: BytesLike
  ): Result;
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
    functionFragment: "getCompanyAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserCompanies",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isActiveCompany",
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
    functionFragment: "registerCompany",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeCompanyFromUser",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "userToCompanies",
    data: BytesLike
  ): Result;
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

export interface CompanyManager extends BaseContract {
  connect(runner?: ContractRunner | null): CompanyManager;
  waitForDeployment(): Promise<this>;

  interface: CompanyManagerInterface;

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

  addCompanyToUser: TypedContractMethod<
    [user: AddressLike, company: AddressLike],
    [void],
    "nonpayable"
  >;

  closeCompany: TypedContractMethod<
    [companyId: BigNumberish, sender: AddressLike],
    [void],
    "nonpayable"
  >;

  companies: TypedContractMethod<[arg0: BigNumberish], [string], "view">;

  companyCount: TypedContractMethod<[], [bigint], "view">;

  getCompanyAddress: TypedContractMethod<
    [companyId: BigNumberish],
    [string],
    "view"
  >;

  getUserCompanies: TypedContractMethod<
    [user: AddressLike],
    [string[]],
    "view"
  >;

  isActiveCompany: TypedContractMethod<
    [company: AddressLike],
    [boolean],
    "view"
  >;

  isCompanyActive: TypedContractMethod<[arg0: AddressLike], [boolean], "view">;

  minTokenBalance: TypedContractMethod<[], [bigint], "view">;

  registerCompany: TypedContractMethod<
    [
      unityFlowAddress: AddressLike,
      name: string,
      image: string,
      description: string,
      category: string,
      cofounders: AddressLike[],
      sender: AddressLike
    ],
    [void],
    "nonpayable"
  >;

  removeCompanyFromUser: TypedContractMethod<
    [user: AddressLike, company: AddressLike],
    [void],
    "nonpayable"
  >;

  token: TypedContractMethod<[], [string], "view">;

  userToCompanies: TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish],
    [string],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "addCompanyToUser"
  ): TypedContractMethod<
    [user: AddressLike, company: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "closeCompany"
  ): TypedContractMethod<
    [companyId: BigNumberish, sender: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "companies"
  ): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "companyCount"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getCompanyAddress"
  ): TypedContractMethod<[companyId: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "getUserCompanies"
  ): TypedContractMethod<[user: AddressLike], [string[]], "view">;
  getFunction(
    nameOrSignature: "isActiveCompany"
  ): TypedContractMethod<[company: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "isCompanyActive"
  ): TypedContractMethod<[arg0: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "minTokenBalance"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "registerCompany"
  ): TypedContractMethod<
    [
      unityFlowAddress: AddressLike,
      name: string,
      image: string,
      description: string,
      category: string,
      cofounders: AddressLike[],
      sender: AddressLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "removeCompanyFromUser"
  ): TypedContractMethod<
    [user: AddressLike, company: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "token"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "userToCompanies"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish],
    [string],
    "view"
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
  };
}
