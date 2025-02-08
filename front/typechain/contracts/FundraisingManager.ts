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
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../common";

export interface FundraisingManagerInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "createFundraising"
      | "decreaseInvestments"
      | "donationsByCurrency"
      | "getTotalDonations"
      | "getTotalInvestments"
      | "increaseInvestments"
      | "investmentsByCurrency"
      | "platformFeePercent"
      | "token"
      | "updateDonations"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "createFundraising",
    values: [
      BigNumberish,
      AddressLike,
      string,
      string,
      string,
      BigNumberish,
      BigNumberish,
      string
    ]
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
    functionFragment: "platformFeePercent",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "updateDonations",
    values: [BigNumberish, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "createFundraising",
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
    functionFragment: "platformFeePercent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateDonations",
    data: BytesLike
  ): Result;
}

export interface FundraisingManager extends BaseContract {
  connect(runner?: ContractRunner | null): FundraisingManager;
  waitForDeployment(): Promise<this>;

  interface: FundraisingManagerInterface;

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

  createFundraising: TypedContractMethod<
    [
      id: BigNumberish,
      company: AddressLike,
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

  decreaseInvestments: TypedContractMethod<
    [amount: BigNumberish, currency: string],
    [void],
    "nonpayable"
  >;

  donationsByCurrency: TypedContractMethod<[arg0: string], [bigint], "view">;

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

  platformFeePercent: TypedContractMethod<[], [bigint], "view">;

  token: TypedContractMethod<[], [string], "view">;

  updateDonations: TypedContractMethod<
    [amount: BigNumberish, currency: string],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "createFundraising"
  ): TypedContractMethod<
    [
      id: BigNumberish,
      company: AddressLike,
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
    nameOrSignature: "platformFeePercent"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "token"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "updateDonations"
  ): TypedContractMethod<
    [amount: BigNumberish, currency: string],
    [void],
    "nonpayable"
  >;

  filters: {};
}
