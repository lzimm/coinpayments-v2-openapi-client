/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/** Represents a merchant's accepted currencies */
export interface AcceptedCurrenciesDto {
  items?: AcceptedCurrencyDto[] | null;
  paging?: PagingDto;
}

/** Represents info about a merchant's accepted currency */
export interface AcceptedCurrencyDto {
  currency?: CurrencyDto;
  /**
   * the discount to give buyers when paying in this currency, maybe as a promotional tool
   * @format float
   */
  discountPercent?: number;
  /**
   * the markup to charge buyers when paying in this currency, maybe to cover local crypto/fiat conversion costs
   * @format float
   */
  markupPercent?: number;
  /**
   * the ranking of this payment currency relative to other payment currencies of the merchant
   * @format int32
   */
  order?: number;
  /** the configurations defining how the merchant would like to receive funds from the current payment currency */
  payoutConfigurations?: PayoutConfigDto[] | null;
  payoutFrequency?: PayoutCurrencyFrequency;
  switcherStatus?: SwitcherStatus;
}

export interface ActivitiesListDto {
  items?: ActivityItemDto[] | null;
  paging?: PagingDto;
}

export interface ActivityHistory {
  history?: ActivityHistoryItem[] | null;
}

/** @format  */
export enum ActivityHistoryDataType {
  Confirmations = "confirmations",
  RequiredConfirmations = "requiredConfirmations",
  SentTxHash = "sentTxHash",
  ConvertedTxHash = "convertedTxHash",
  CurrencyId = "currencyId",
}

/** @format  */
export enum ActivityHistoryEventType {
  Created = "created",
  Pending = "pending",
  FundsConverted = "fundsConverted",
  FundsTransferred = "fundsTransferred",
  TimedOut = "timedOut",
  Cancelled = "cancelled",
  Scheduled = "scheduled",
  Completed = "completed",
  Confirmations = "confirmations",
}

export interface ActivityHistoryItem {
  params?: ActivityHistoryParam[] | null;
  /** @format date-time */
  timestamp?: string;
  type?: ActivityHistoryEventType;
}

export interface ActivityHistoryParam {
  type?: ActivityHistoryDataType;
  value?: string | null;
}

/**
 * Representing ActivityHistory item
 * "Item" property contains one of CoinPayments.Api.Models.TransactionDtoCoinPayments.Api.Models.Merchant.Dashboard.MerchantInvoices.MerchantInvoiceSummaryDto>
 */
export interface ActivityItemDto {
  /** One of TransactionDto, MerchantInvoiceSummaryDto */
  item?: any;
  itemType?: ActivityItemType;
  /** @format date-time */
  sortOrder?: string;
}

/** @format  */
export enum ActivityItemType {
  Transaction = "transaction",
  Invoice = "invoice",
}

/** @format  */
export enum ActivityTypes {
  All = "all",
  Received = "received",
  Sent = "sent",
  Invoices = "invoices",
  Payments = "payments",
}

/** Add info needed to configure an accepted Currency */
export interface AddAcceptedCurrencyConfigDto {
  /**
   * the discount to give buyers when paying in this currency, maybe as a promotional tool
   * @format float
   * @min 0
   * @max 99.99
   */
  discountPercent?: number | null;
  frequency?: PayoutCurrencyFrequency;
  /**
   * the markup to charge buyers when paying in this currency, maybe to cover local crypto/fiat conversion costs
   * @format float
   * @min 0
   * @max 999999999
   */
  markupPercent?: number | null;
  /** the configurations defining how the merchant would like to receive funds from the current payment currency */
  payouts?: PayoutConfigDto[] | null;
  switcherStatus?: SwitcherStatus;
}

/** Information about a single address consolidation within merchant wallet consolidation (sending funds to the main wallet) */
export interface AddressConsolidationDto {
  activationFee?: string | null;
  address?: string | null;
  /** @format uuid */
  addressId?: string;
  available?: string | null;
  newReceivedExternal?: string | null;
  newReceivedInternal?: string | null;
  totalFee?: string | null;
  transferFee?: string | null;
  /** @format uuid */
  walletId?: string;
}

export interface AddressDto {
  /**
   * @minLength 0
   * @maxLength 300
   */
  address1?: string | null;
  /**
   * @minLength 0
   * @maxLength 300
   */
  address2?: string | null;
  /**
   * @minLength 0
   * @maxLength 300
   */
  address3?: string | null;
  /**
   * @minLength 0
   * @maxLength 120
   */
  city?: string | null;
  /**
   * @minLength 2
   * @maxLength 2
   * @pattern ^([A-Z]{2})$
   */
  countryCode?: string | null;
  /**
   * @minLength 0
   * @maxLength 60
   */
  postalCode?: string | null;
  /**
   * @minLength 0
   * @maxLength 300
   */
  provinceOrState?: string | null;
  /**
   * @minLength 0
   * @maxLength 100
   */
  suburbOrDistrict?: string | null;
}

export interface AddressModel {
  address1?: string | null;
  address2?: string | null;
  address3?: string | null;
  city?: string | null;
  countryCode?: string | null;
  hasData?: boolean;
  postalCode?: string | null;
  provinceOrState?: string | null;
  suburbOrDistrict?: string | null;
}

export interface ApyDto {
  apy?: string | null;
  contractAddress?: string | null;
  /** @format int32 */
  currencyId?: number;
}

export interface AutoSweepRequestDto {
  /** Address of the wallet to which the auto-sweep feature should transfer the swept funds */
  destinationAddress?: string | null;
  /** Identifies the contract address origin */
  fromContractAddress?: string | null;
  /** Identifies if a given auto-sweep configuration is active or not */
  isActive?: boolean;
  /**
   * OTP code
   * @example "104608"
   */
  otp?: string | null;
  /**
   * Threshold for the auto-sweep feature to transfer funds above such defined threshold daily
   * @format double
   */
  sweepingThreshold?: number;
  /** Identifies the destination contract address */
  toContractAddress?: string | null;
  /**
   * Identifies the destination currency id
   * @format int32
   */
  toCurrencyId?: number;
  /**
   * Token value to authenticate the scheduling of the vault unlock
   * @example "CfDJ8IF2WCdtP7RCsWkczKOm4C-q0I6WPNXcry1ngMKxHhSUv9m5W3kwurW_SbYhBEHQcCll1qUZo9AJVklpNNjeQHkKdxO6MAom96rTtXWA3aKdVS0estKUC3KJ5-1JV_JDVe8IzI0r81Z4xQS04WdvFLO5UMPlMHuYAo_pN_lv--M51sGP0JPEJfMbhFyho6ZNz3hDPXTUtBrREQAUPIY-As8"
   */
  token?: string | null;
  /** Id of the wallet to schedule the unlocking of the vault */
  walletId?: string | null;
}

/** Request to retrieve the 2FA token to perform an Auto-sweep modification */
export interface AutoSweepTwoFaRequestDto {
  /** Defines if the Auto-Sweep is meant to be enabled or disabled */
  isActive?: boolean;
}

export interface BalanceDto {
  confirmedBalance?: string | null;
  confirmedNativeBalance?: string | null;
  unconfirmedBalance?: string | null;
  unconfirmedNativeBalance?: string | null;
}

export interface BlockchainLatestBlockNumberDto {
  currencyId?: string | null;
  /** @format int64 */
  latestBlockNumber?: number;
}

export interface BuyerDto {
  address?: AddressDto;
  companyName?: string | null;
  /** @format email */
  emailAddress?: string | null;
  hasData?: boolean;
  name?: FullNameDto;
  /** @pattern ^[.()\+\-0-9 ]*$ */
  phoneNumber?: string | null;
}

export interface BuyerModel {
  address?: AddressModel;
  companyName?: string | null;
  email?: string | null;
  firstName?: string | null;
  hasData?: boolean;
  lastName?: string | null;
  phoneNumber?: string | null;
}

export interface ChangeAcceptedCurrencyOrderDto {
  /**
   * The order (preferred rank) of a payment currency. The smaller the number, the more the currency is preferred for payment.
   * To unassign the rank of a payment currency (ie, currency is still accepted but no longer preferred), pass in a 0 for the Order.
   * @format int32
   */
  order: number;
}

/** Request to change the label of an address */
export interface ChangeAddressLabelRequestDto {
  /** The new label for the address */
  label?: string | null;
}

/** Request to change the name of a given eSIM */
export interface ChangeEsimNameRequestDto {
  /** Imsi of the eSIM */
  imsi?: string | null;
  /** The new name for the eSIM */
  newName?: string | null;
}

export interface ChangeMigratedCpsPhpUserEmailRequestDto {
  email?: string | null;
  password?: string | null;
  /** @format int32 */
  userId?: number;
}

export interface ChangeMigratedCpsPhpUserPasswordRequestDto {
  password?: string | null;
  /** @format int32 */
  userId?: number;
}

export interface ChangeUserPreferencesRequestDto {
  /** value indicating whether to automatically accept assets sent to wrong wallets to the correct personal wallet of the user */
  autoAcceptWrongAssets?: boolean | null;
  /**
   * optional language code for the user (e.g. 'EN' or 'EN-US')
   * @minLength 2
   * @maxLength 5
   */
  language?: string | null;
  /**
   * the users native currency id, api calls will return monetary amounts in this currency along with the
   * original currencies.  If not specified then the current preference will not be updated.
   * @example "1235"
   */
  nativeCurrencyId?: string | null;
  /**
   * optional value indicating whether to send the user a notification when funds are received into one of,
   * their accounts.  If not specified then the current preference will not be updated.
   */
  notifyOnFundsReceived?: boolean | null;
  /**
   * optional value indicating whether to send the user a notification when funds are sent from one of their
   * accounts.  If not specified then the current preference will not be updated.
   */
  notifyOnFundsSent?: boolean | null;
}

export interface CoinChangeTransactionDto {
  asset_id?: string | null;
  client_id?: string | null;
  created_at?: string | null;
  destination_address?: string | null;
  external_tx_id?: string | null;
  /** @format double */
  fee_amount?: number;
  /** @format double */
  gross_amount?: number;
  id?: string | null;
  modified_at?: string | null;
  /** @format double */
  net_amount?: number;
  note?: string | null;
  status?: string | null;
  transaction_type?: string | null;
  txhash?: string | null;
  txhash_url?: string | null;
}

export interface CreateInvoicePaymentWithCurrencyRequestDto {
  /** Create payment address for currency. */
  paymentCurrency?: string | null;
  /**
   * the email address to which to send refund instructions to in case there is a problem with the invoice payment
   * @format email
   */
  refundEmail?: string | null;
}

/**
 * Used for creating an invoice on the dashboard.
 * Request to create an invoice, which is a list of goods or services with a statement of the sum due provided
 * by the merchant, that a buyer intends to purchase
 */
export interface CreateInvoicePaymentWithCurrencyRequestDtoCreateMerchantInvoiceRequestDto {
  amount?: InvoiceAmountDto;
  buyer?: BuyerDto;
  /**
   * the message to display when collecting buyer user data
   * @minLength 0
   * @maxLength 300
   */
  buyerDataCollectionMessage?: string | null;
  /** the id of the client creating this invoice (optional) */
  clientId?: string | null;
  /** any custom data the caller wishes to attach to the invoice which will be sent back in notifications */
  customData?: Record<string, string>;
  /**
   * the purchase description, can be provided instead of a list of `items`
   * @minLength 0
   * @maxLength 200
   */
  description?: string | null;
  /** flag indicating whether this is a draft invoice */
  draft?: boolean | null;
  /**
   * optional due date to be shown on the invoice
   * @format date-time
   */
  dueDate?: string | null;
  /** Email delivery options of a merchant invoice */
  emailDelivery?: MerchantInvoiceEmailDeliveryOptionsDto;
  /** Flag for hiding icon on the checkout app */
  hideShoppingCart?: boolean;
  /**
   * optional custom invoice date if not the created date of the invoice, invoices with a future date will
   * be scheduled
   * @format date-time
   */
  invoiceDate?: string | null;
  /**
   * the optional API caller provided external invoice number.  Appears in screens shown to the Buyer and emails sent.
   * @minLength 0
   * @maxLength 127
   */
  invoiceId?: string | null;
  /** indicates if invoice will be email delivered */
  isEmailDelivery?: boolean;
  /** the optional array of items that a buyer intends to purchase from the merchant */
  items?: MerchantInvoiceLineItemDto[] | null;
  merchantOptions?: InvoiceMerchantOptionsDto;
  metadata?: InvoiceMetadataDto;
  /**
   * notes for the merchant only, these are not visible to the buyers
   * @minLength 0
   * @maxLength 500
   */
  notes?: string | null;
  /**
   * any additional information to share with the buyer about the transaction
   * @minLength 0
   * @maxLength 2000
   */
  notesToRecipient?: string | null;
  payment?: CreateInvoicePaymentWithCurrencyRequestDto;
  /** Represents optional info specifying payout configuration for invoice */
  payoutConfig?: InvoicePayoutConfigDto;
  /** @maxLength 16 */
  poNumber?: string | null;
  /**
   * flag indicating whether a buyer name and email are required, they will be requested at checkout
   * if not provider by the caller.  The CoinPayments.Api.Models.Merchant.CreateMerchantInvoiceRequestDto`1.BuyerDataCollectionMessage will be displayed
   * to the buyer when prompted.
   */
  requireBuyerNameAndEmail?: boolean | null;
  shipping?: InvoiceShippingDetailDto;
  /**
   * any terms and conditions, e.g. a cancellation policy
   * @minLength 0
   * @maxLength 2000
   */
  termsAndConditions?: string | null;
  useCoinReservation?: boolean;
  webhooks?: InvoiceWebhookDto[] | null;
}

export interface CreateInvoicePaymentWithCurrencyRequestDtoCreateMerchantInvoiceRequestV2Dto {
  amount?: InvoiceAmountV2Dto;
  buyer?: BuyerDto;
  /**
   * the message to display when collecting buyer user data
   * @minLength 0
   * @maxLength 300
   */
  buyerDataCollectionMessage?: string | null;
  /** the id of the client creating this invoice (optional) */
  clientId?: string | null;
  /** Invoice currencyId. Format "id" or "id:smartContract" */
  currencyId: string;
  /** any custom data the caller wishes to attach to the invoice which will be sent back in notifications */
  customData?: Record<string, string>;
  /**
   * the purchase description, can be provided instead of a list of `items`
   * @minLength 0
   * @maxLength 200
   */
  description?: string | null;
  /** flag indicating whether this is a draft invoice */
  draft?: boolean | null;
  /**
   * optional due date to be shown on the invoice
   * @format date-time
   */
  dueDate?: string | null;
  /** Email delivery options of a merchant invoice */
  emailDelivery?: MerchantInvoiceEmailDeliveryOptionsDto;
  /** Flag for hiding icon on the checkout app */
  hideShoppingCart?: boolean;
  /**
   * optional custom invoice date if not the created date of the invoice, invoices with a future date will
   * be scheduled
   * @format date-time
   */
  invoiceDate?: string | null;
  /**
   * the optional API caller provided external invoice number.  Appears in screens shown to the Buyer and emails sent.
   * @minLength 0
   * @maxLength 127
   */
  invoiceId?: string | null;
  /** indicates if invoice will be email delivered */
  isEmailDelivery?: boolean;
  /** the optional array of items that a buyer intends to purchase from the merchant */
  items?: MerchantInvoiceLineItemV2Dto[] | null;
  merchantOptions?: InvoiceMerchantOptionsDto;
  metadata?: InvoiceMetadataDto;
  /**
   * notes for the merchant only, these are not visible to the buyers
   * @minLength 0
   * @maxLength 500
   */
  notes?: string | null;
  /**
   * any additional information to share with the buyer about the transaction
   * @minLength 0
   * @maxLength 2000
   */
  notesToRecipient?: string | null;
  payment?: CreateInvoicePaymentWithCurrencyRequestDto;
  /** Represents optional info specifying payout configuration for invoice */
  payoutConfig?: InvoicePayoutConfigDto;
  /** @maxLength 16 */
  poNumber?: string | null;
  /**
   * flag indicating whether a buyer name and email are required, they will be requested at checkout
   * if not provider by the caller.  The CoinPayments.Api.Models.Merchant.Dashboard.MerchantInvoicesV2.CreateMerchantInvoiceRequestV2Dto`1.BuyerDataCollectionMessage will be displayed
   * to the buyer when prompted.
   */
  requireBuyerNameAndEmail?: boolean | null;
  shipping?: InvoiceShippingDetailDto;
  /**
   * any terms and conditions, e.g. a cancellation policy
   * @minLength 0
   * @maxLength 2000
   */
  termsAndConditions?: string | null;
  useCoinReservation?: boolean;
  webhooks?: InvoiceWebhookDto[] | null;
}

/** Represents the name of the merchant's client */
export interface CreateMerchantClientDto {
  /**
   * the name of the integration for which this client was created (e.g. 'Magento', or 'Shopify')
   * @minLength 1
   * @maxLength 100
   */
  integration?: string | null;
  /**
   * the name of the client that the merchant should provide
   * @minLength 1
   * @maxLength 200
   */
  name?: string | null;
  /**
   * the store url of the client
   * @format uri
   */
  storeUrl?: string | null;
}

export interface CreateMerchantClientWebhookRequestDto {
  /** the types of notifications to send to this endpoint */
  notifications: MerchantClientWebhookNotification[];
  /**
   * the url to which to POST webhook notifications to
   * @format uri
   */
  notificationsUrl: string;
}

/** Request to create the HTML for a "Buy Now" Button */
export interface CreateMerchantInvoiceBuyNowButtonHtmlRequestDto {
  amount?: InvoiceAmountDto;
  /** the style of the button */
  buttonStyle?: string | null;
  /**
   * the desired width of the "Buy Now" button
   * @format int32
   */
  buttonWidth?: number | null;
  /** the url to redirect to if payment of an invoice fails (e.g. expired) or is cancelled by the user */
  cancelUrl?: string | null;
  /** flag indicating whether to send an email notification once payment completes successfully */
  emailNotifications?: boolean;
  /** Flag for hiding icon on the checkout app */
  hideShoppingCart?: boolean;
  /**
   * the url to send a payment complete message to once the invoice has been paid
   * @format uri
   */
  ipnUrl?: string | null;
  /** the optional array of items that a buyer intends to purchase from the merchant */
  items?: MerchantInvoiceLineItemDto[] | null;
  notifications?: MerchantClientWebhookNotification[] | null;
  /** the url to redirect to once an invoice is successfully paid */
  successUrl?: string | null;
  useCoinReservation?: boolean;
}

export interface CreateMerchantInvoiceBuyNowButtonHtmlRequestV2Dto {
  amount?: InvoiceAmountV2Dto;
  /** the style of the button */
  buttonStyle?: string | null;
  /**
   * the desired width of the "Buy Now" button
   * @format int32
   */
  buttonWidth?: number | null;
  /** the url to redirect to if payment of an invoice fails (e.g. expired) or is cancelled by the user */
  cancelUrl?: string | null;
  /** Invoice currencyId. Format "id" or "id:smartContract" */
  currencyId: string;
  /** flag indicating whether to send an email notification once payment completes successfully */
  emailNotifications?: boolean;
  /** Flag for hiding icon on the checkout app */
  hideShoppingCart?: boolean;
  /**
   * the url to send a payment complete message to once the invoice has been paid
   * @format uri
   */
  ipnUrl?: string | null;
  /** the optional array of items that a buyer intends to purchase from the merchant */
  items?: MerchantInvoiceLineItemV2Dto[] | null;
  notifications?: MerchantClientWebhookNotification[] | null;
  /** the url to redirect to once an invoice is successfully paid */
  successUrl?: string | null;
  useCoinReservation?: boolean;
}

/** Response to an invoice creation request */
export interface CreateMerchantInvoiceResponseDto {
  /** the id of the created invoice */
  invoices?: InvoicesCreatedDto[] | null;
}

/** Represents info needed when creating a Merchant */
export interface CreateMerchantProfileDto {
  /**
   * the merchant's business address
   * @minLength 0
   * @maxLength 1000
   */
  address?: string | null;
  /** the merchant's business country of registration */
  country?: string | null;
  /** the description of the merchant */
  description?: string | null;
  /** the merchant's business email */
  email?: string | null;
  /** the business name of the merchant */
  name?: string | null;
  /** the phone number of the business */
  phone?: string | null;
  /** the business registration number */
  registrationNumber?: string | null;
  /** full name of the Ultimate Beneficiary Owner (UBO) of the business */
  uboName?: string | null;
  /**
   * the url to the merchants website
   * @format uri
   */
  websiteUrl?: string | null;
}

/** Request to create a new address for an existing wallet */
export interface CreateWalletAddressRequestDto {
  /** the optional label for the new address */
  label?: string | null;
  /** an optional URL for receiving webhook notifications */
  notificationUrl?: string | null;
}

/** Response to an address creation request */
export interface CreateWalletAddressResponseDto {
  /** the id of the address that was created. */
  addressId?: string | null;
  /** the network address that was created. */
  networkAddress?: string | null;
  /**
   * Indicates a date, when this address is going to be returned to the pool
   * (only relevant for AccountBased coins, that are using address pools)
   * @format date-time
   */
  rentedTill?: string | null;
}

export interface Currency {
  /**
   * Fixed amount accepted as underpayment
   * @format double
   */
  amount?: number;
  /** The currency ID of underpayment settings */
  currencyId?: string | null;
}

/** @format  */
export enum CurrencyCapability {
  Payments = "payments",
  SingleSigAccounts = "singleSigAccounts",
  PooledAccounts = "pooledAccounts",
  Utxo = "utxo",
}

export interface CurrencyConversion {
  from?: string | null;
  to?: string | null;
}

export interface CurrencyDto {
  capabilities?: CurrencyCapability[] | null;
  /** @format int32 */
  decimalPlaces?: number;
  id?: string | null;
  isEnabledForPayment?: boolean;
  logo?: CurrencyLogoDto;
  name?: string | null;
  /** @format int32 */
  rank?: number;
  /** @format int64 */
  requiredConfirmations?: number;
  status?: CurrencyStatus;
  symbol?: string | null;
  type?: CurrencyType;
  urls?: CurrencyUrlsDto;
}

export interface CurrencyLogoDto {
  imageUrl?: string | null;
  vectorUrl?: string | null;
}

export interface CurrencyModel {
  contractAddress?: string | null;
  /** @format int32 */
  decimals?: number;
  /** @format int32 */
  id?: number;
  isSmartContract?: boolean;
  isValidCurrency?: boolean;
  name?: string | null;
  symbol?: string | null;
  symbolNormalized?: string | null;
  usesPooledAddresses?: boolean;
}

/** @format  */
export enum CurrencyStatus {
  Active = "active",
  UnderMaintenance = "underMaintenance",
  Deleted = "deleted",
}

/** @format  */
export enum CurrencyType {
  Crypto = "crypto",
  Token = "token",
  Fiat = "fiat",
}

export interface CurrencyUrlsDto {
  explorers?: string[] | null;
  websites?: string[] | null;
}

export interface CurrencyWithBalanceDto {
  balance?: BalanceDto;
  currency?: CurrencyDto;
}

export interface DepositToCoinchangeRequestDto {
  /** the amount of money (in the currencies smallest unit, e.g. Satoshis for BTC) to send to the recipient address */
  amount: string;
  /** Specifies that fees would be subtracted from the amount being sent instead of being added to it */
  feeSubtractedFromAmount?: boolean;
  /** Indicates that this transaction is funding for user's CoinChange account for "Yield" feature https://api-doc.coinchange.io/#tag/Sub-Account/paths/~1earn_clients~1deposit~1notify~1/post */
  isCoinChangeYieldDeposit?: boolean;
  /**
   * Custom memo to attach to this transaction, this will only be visible within CoinPayments®
   * @minLength 0
   * @maxLength 200
   */
  memo?: string | null;
}

export interface EmailDeliveryModel {
  bcc?: string | null;
  cc?: string | null;
  hasNonNullData?: boolean;
  to?: string | null;
}

export interface EsimDto {
  /** @format double */
  balance?: number;
  /** @format date-time */
  dateAssigned?: string | null;
  iccid?: string | null;
  imsi?: string | null;
  name?: string | null;
  qrCode?: string | null;
  /** @format uuid */
  spendRequestId?: string;
}

export interface EsimForSaleDto {
  id?: string | null;
  /** @format double */
  priceUsd?: number;
}

export interface EsimRequestDto {
  /** the amount of money (in the currencies smallest unit, e.g. Satoshis for BTC) to send to the recipient address */
  amount: string;
  /**
   * @minLength 0
   * @maxLength 200
   */
  id?: string | null;
  imsi?: string | null;
  /**
   * Custom memo to attach to this transaction, this will only be visible within CoinPayments®
   * @minLength 0
   * @maxLength 200
   */
  memo?: string | null;
}

export interface EstimatingPaymentErrorModel {
  code?: InvoicePaymentSettlementModeErrorModel;
  message?: string | null;
}

export interface FeeDto {
  amount?: MoneyDto;
  nativeAmount?: MoneyDto;
}

export interface FullNameDto {
  /**
   * @minLength 0
   * @maxLength 140
   */
  firstName?: string | null;
  /**
   * @minLength 0
   * @maxLength 140
   */
  lastName?: string | null;
}

export interface GetAccessTokenForMigratedCpsPhpUserRequestDto {
  password?: string | null;
  /** @format int32 */
  userId?: number;
}

export interface GetAccessTokenRequestDto {
  email?: string | null;
  password?: string | null;
}

export interface GetMerchantClientAccessControlDto {
  flags?: MerchantClientACL;
}

export interface ImsiInfoDto {
  /** @format double */
  balance?: number;
  iccid?: string | null;
}

export interface InvoiceAmountBreakdownDto {
  discount?: InvoiceMoneyDto;
  handling?: InvoiceMoneyDto;
  shipping?: InvoiceMoneyDto;
  subtotal?: InvoiceMoneyDto;
  taxTotal?: InvoiceMoneyDto;
}

export interface InvoiceAmountDto {
  breakdown?: InvoiceAmountBreakdownDto;
  currencyId: string;
  displayValue?: string | null;
  value: string;
  /** @format double */
  valueAsDecimal?: number;
}

export interface InvoiceAmountV2Dto {
  /** @format double */
  handling?: number;
  /** @format double */
  shipping?: number;
  /** @format double */
  total?: number;
}

export interface InvoiceCurrencyDto {
  /** @format int32 */
  decimalPlaces?: number | null;
  id?: string | null;
  logo?: InvoiceCurrencyLogoDto;
  name?: string | null;
  symbol?: string | null;
  token?: InvoiceCurrencyTokenDto;
}

export interface InvoiceCurrencyLogoDto {
  imageUrl?: string | null;
  vectorUrl?: string | null;
}

export interface InvoiceCurrencyPaymentFeesModel {
  /** @format double */
  coinPaymentsServiceFee?: number;
  /** @format double */
  conversionFee?: number;
  /** @format double */
  markupOrDiscount?: number;
  /** @format double */
  networkFee?: number;
  /** @format double */
  total?: number;
}

export interface InvoiceCurrencyTokenDto {
  contractAddress?: string | null;
  /** @format int32 */
  decimalPlaces?: number;
  name?: string | null;
  symbol?: string | null;
}

/** @format  */
export enum InvoiceFlags {
  None = "none",
  RequireBuyerNameAndEmail = "requireBuyerNameAndEmail",
  SendPaymentCompleteEmailNotification = "sendPaymentCompleteEmailNotification",
  IsPos = "isPos",
}

export interface InvoiceHistoryEventDto {
  /** the type of event that was observed */
  eventType?: string | null;
  /**
   * the timestamp of when the this event was observed
   * @format date-time
   */
  timestamp?: string;
}

export interface InvoiceHistoryEventDtoPagedItemsDto {
  items?: InvoiceHistoryEventDto[] | null;
  paging?: PagingDto;
}

export interface InvoiceMerchantOptionsDto {
  additionalInfo?: string | null;
  showAddress?: boolean;
  showEmail?: boolean;
  showPhone?: boolean;
  showRegistrationNumber?: boolean;
}

export interface InvoiceMetadataDto {
  hostname?: string | null;
  integration?: string | null;
}

export interface InvoiceModel {
  buyer?: BuyerModel;
  buyerDataCollectionMessage?: string | null;
  /** @format date-time */
  cancelled?: string | null;
  /** @format date-time */
  completed?: string | null;
  /** @format date-time */
  confirmed?: string | null;
  /** @format date-time */
  created?: string;
  currency?: CurrencyModel;
  customData?: string | null;
  description?: string | null;
  /** @format double */
  discountTotal?: number | null;
  /** @format date-time */
  dueDate?: string | null;
  emailDeliveryOptions?: EmailDeliveryModel;
  /** @format date-time */
  expires?: string | null;
  flags?: InvoiceFlags;
  /** @format double */
  handlingTotal?: number | null;
  hideShoppingCart?: boolean;
  /** @format uuid */
  id?: string;
  /** @format date-time */
  invoiceDate?: string | null;
  invoiceId?: string | null;
  invoiceIdSuffix?: string | null;
  isLifeTimeFinished?: boolean;
  items?: LineItemModel[] | null;
  /** @format uuid */
  merchantClientId?: string | null;
  /** @format uuid */
  merchantId?: string;
  merchantOptions?: MerchantOptionsModel;
  metaSourceHostname?: string | null;
  metaSourceIntegration?: string | null;
  notes?: string | null;
  notesToRecipient?: string | null;
  partialAcceptAvailable?: boolean;
  payments?: InvoicePaymentModel[] | null;
  payoutConfig?: PayoutInfo;
  poNumber?: string | null;
  shipping?: ShippingModel;
  /** @format double */
  shippingTotal?: number | null;
  state?: InvoiceState;
  /** @format double */
  subtotal?: number | null;
  /** @format double */
  taxTotal?: number | null;
  termsAndConditions?: string | null;
  /** @format double */
  total?: number;
  userEmail?: string | null;
  /** @format uuid */
  userId?: string;
  userName?: string | null;
}

export interface InvoiceMoneyDto {
  currencyId: string;
  displayValue?: string | null;
  value: string;
  /** @format double */
  valueAsDecimal?: number;
}

export interface InvoicePaymentCurrencyAmountDueBreakdownItemDto {
  currencyId?: string | null;
  displayValue?: string | null;
  /** the name of the additional charge or fee applied when paying in another currency */
  name?: string | null;
  value?: string | null;
  /** @format double */
  valueAsDecimal?: number;
}

export interface InvoicePaymentCurrencyAmountDueDto {
  /** the breakdown of any additional charges related to paying in this currency */
  breakdown?: InvoicePaymentCurrencyAmountDueBreakdownItemDto[] | null;
  currencyId?: string | null;
  displayValue?: string | null;
  /**
   * the rate of conversion between the base currency of the invoice and the payment methods currency
   * @format double
   */
  rate?: number;
  value?: string | null;
  /** @format double */
  valueAsDecimal?: number;
}

/** Supported currency in which an invoice can be paid */
export interface InvoicePaymentCurrencyDto {
  amount?: InvoicePaymentCurrencyAmountDueDto;
  approximateNetworkAmount?: MoneyDto;
  approximateNetworkInNativeCurrencyAmount?: MoneyDto;
  currency?: CurrencyDto;
  /** flag indicating whether this currency is currently unavailable (e.g. node or services down) */
  isDisabled?: boolean;
  nativePreferredAmount?: InvoicePaymentCurrencyAmountDueDto;
  remainingAmount?: MoneyDto;
}

/** Encapsulates the addresses where payments to an invoice can be sent */
export interface InvoicePaymentCurrencyPaymentAddressesDto {
  /** the BIP21 payment code, if available */
  biP21?: string | null;
  /** the raw payment address */
  address?: string | null;
}

/** Encapsulates the details for sending payments to the invoice */
export interface InvoicePaymentCurrencyPaymentDetailsDto {
  /** Encapsulates the addresses where payments to an invoice can be sent */
  addresses?: InvoicePaymentCurrencyPaymentAddressesDto;
  amount?: InvoicePaymentCurrencyAmountDueDto;
  currency?: CurrencyDto;
  /**
   * the timestamp when the payment expires and new payments will no longer be accepted
   * @format date-time
   */
  expires?: string;
  remainingAmount?: MoneyDto;
}

export interface InvoicePaymentDto {
  /**
   * the timestamp when the payment expires and new payments will no longer be accepted
   * @format date-time
   */
  expires?: string;
  paymentCurrencies?: InvoicePaymentCurrencyDto[] | null;
  /** the id of the payment */
  paymentId?: string | null;
  refundEmail?: string | null;
}

export interface InvoicePaymentHotWalletAssignmentModel {
  /** @format date-time */
  assignedFrom?: string;
  /** @format date-time */
  assignedUntil?: string;
  /** @format date-time */
  completedDate?: string | null;
}

export interface InvoicePaymentHotWalletModel {
  assignment?: InvoicePaymentHotWalletAssignmentModel;
  buyerFees?: InvoiceCurrencyPaymentFeesModel;
  /** @format int32 */
  confirmations?: number;
  /** @format double */
  confirmedAmount?: number;
  /** @format date-time */
  createdAt?: string;
  currency?: CurrencyModel;
  /** @format double */
  currencyRateFromInvoiceCurrency?: number;
  error?: EstimatingPaymentErrorModel;
  /** @format date-time */
  expiresAt?: string;
  /** @format uuid */
  id?: string;
  /** @format uuid */
  invoicePaymentId?: string;
  isConversion?: boolean;
  merchantFees?: InvoiceCurrencyPaymentFeesModel;
  /** @format double */
  merchantMarkupOrDiscount?: number;
  merchantPayoutAddress?: string | null;
  merchantPayoutCurrency?: CurrencyModel;
  /** @format uuid */
  merchantPayoutWalletId?: string | null;
  paymentReceiveAddress?: string | null;
  /** @format double */
  paymentSubTotal?: number;
  /** @format int32 */
  payoutFrequency?: number;
  /** @format uuid */
  pooledWalletId?: string | null;
  /** @format int32 */
  requiredConfirmations?: number;
  /** @format double */
  totalBuyerWillPay?: number;
  /** @format double */
  totalCoinPaymentsServiceFees?: number;
  /** @format double */
  totalMerchantWillReceive?: number;
  /** @format double */
  totalNetworkFees?: number;
  /** @format double */
  unconfirmedAmount?: number;
}

export interface InvoicePaymentModel {
  /** @format date-time */
  cancelled?: string | null;
  /** @format date-time */
  completed?: string | null;
  /** @format date-time */
  confirmed?: string | null;
  /** @format date-time */
  created?: string;
  /** @format date-time */
  detected?: string | null;
  /** @format date-time */
  expires?: string;
  hotWallet?: InvoicePaymentHotWalletModel;
  /** @format uuid */
  id?: string;
  /** @format uuid */
  invoiceId?: string;
  isActive?: boolean;
  isGuest?: boolean;
  payout?: InvoicePaymentPayoutModel;
  /** @format date-time */
  pending?: string | null;
  refund?: InvoicePaymentRefundModel;
  refundEmail?: string | null;
  /** @format date-time */
  refunded?: string | null;
  /** @format date-time */
  scheduledForPayout?: string | null;
  state?: PaymentState;
}

export interface InvoicePaymentPayoutModel {
  /** @format uuid */
  batchId?: string | null;
  blockchainTxId?: string | null;
  /** @format date-time */
  confirmed?: string | null;
  /** @format date-time */
  created?: string;
  /** @format double */
  destinationAmount?: number | null;
  /** @format date-time */
  failed?: string | null;
  /** @format uuid */
  id?: string;
  invoicePaymentHotWallet?: InvoicePaymentHotWalletModel;
  /** @format uuid */
  invoicePaymentHotWalletId?: string;
  /** @format uuid */
  invoicePaymentId?: string;
  merchantPayoutAddress?: string | null;
  merchantPayoutWalletCurrency?: CurrencyModel;
  /** @format uuid */
  merchantPayoutWalletId?: string | null;
  /** @format double */
  payoutAmountToCoinPaymentsDueToOverpayment?: number;
  /** @format double */
  payoutAmountToCoinPaymentsForBuyerServiceFees?: number;
  /** @format double */
  payoutAmountToMerchant?: number;
  receivedBlockchainTxId?: string | null;
  /** @format date-time */
  sent?: string | null;
  state?: PaymentPayoutModelState;
  /** @format uuid */
  transactionId?: string | null;
}

export interface InvoicePaymentRefundModel {
  /** @format date-time */
  claimed?: string | null;
  claimerIpAddress?: string | null;
  /** @format date-time */
  created?: string;
  /** @format double */
  estimatedNetworkFees?: number;
  /** @format date-time */
  expires?: string;
  /** @format uuid */
  id?: string;
  /** @format uuid */
  invoicePaymentId?: string;
  /** @format date-time */
  lastEmailNotificationSent?: string | null;
  /** @format date-time */
  nextEmailNotification?: string;
  payoutAddress?: string | null;
  /** @format double */
  payoutAmount?: number;
  /** @format double */
  payoutNetworkFees?: number;
  /** @format double */
  refundAvailable?: number;
  refundEmail?: string | null;
  /** @format int32 */
  refundEmailsSent?: number;
  /** @format uuid */
  spendRequestId?: string | null;
}

/** @format  */
export enum InvoicePaymentSettlementModeErrorModel {
  Unknown = "unknown",
  NegativeRate = "negativeRate",
  PayoutAddressIsNull = "payoutAddressIsNull",
  PaymentSubTotalIsLessThanMerchantTotalFee = "paymentSubTotalIsLessThanMerchantTotalFee",
  TotalBuyerWillPayIsNegativeOrZero = "totalBuyerWillPayIsNegativeOrZero",
  TotalBuyerWillPayIsLessThanBuyerNetworkFee = "totalBuyerWillPayIsLessThanBuyerNetworkFee",
  TotalMerchantFeeRatioIsMoreThanMaximumRatioSetting = "totalMerchantFeeRatioIsMoreThanMaximumRatioSetting",
  PayoutAmountIsLessThanDust = "payoutAmountIsLessThanDust",
  CurrencyIsNotActive = "currencyIsNotActive",
  AmountIsBelowOfConversionLimit = "amountIsBelowOfConversionLimit",
  AmountIsAboveOfConversionLimit = "amountIsAboveOfConversionLimit",
  UserLimitIsReached = "userLimitIsReached",
  NotEnoughToActivateRippleAddress = "notEnoughToActivateRippleAddress",
  ConversionPairDoesNotExist = "conversionPairDoesNotExist",
  AddressIsNotValid = "addressIsNotValid",
  DoesNotHaveCompletedKyc = "doesNotHaveCompletedKyc",
  UnstoppableDomainNotFound = "unstoppableDomainNotFound",
  UnstoppableDomainNotFoundForCurrency = "unstoppableDomainNotFoundForCurrency",
  UserWalletIsLocked = "userWalletIsLocked",
  UserWalletIsDeleted = "userWalletIsDeleted",
  LargeWithdrawalRejected = "largeWithdrawalRejected",
}

/** The status of a payment to the invoice */
export interface InvoicePaymentStatusDto {
  /** @format int32 */
  confirmations?: number;
  confirmedAmount?: MoneyDto;
  /**
   * the id of the currency this payment is in
   * @format int32
   */
  currencyId?: number;
  expectedAmount?: InvoicePaymentCurrencyAmountDueDto;
  remainingAmount?: MoneyDto;
  /** @format int32 */
  requiredConfirmations?: number;
  unconfirmedAmount?: MoneyDto;
}

export interface InvoicePaymentTransaction {
  amount?: MoneyDto;
  /** @format int64 */
  conversionId?: number | null;
  hash?: string | null;
}

/** Represents optional info specifying payout configuration for invoice */
export interface InvoicePayoutConfigDto {
  /** the external address into which to pay out */
  address?: string | null;
  /** Optional address of the smart contract if the currency supports it and it should be used */
  contractAddress?: string | null;
  /**
   * the currency id of the wallet or address into which to payout to
   * @format int32
   */
  currencyId?: number;
  frequency?: PayoutCurrencyFrequency;
}

export interface InvoicePayoutDestinationAmountDto {
  amount?: MoneyDto;
  nativeAmount?: MoneyDto;
}

export interface InvoicePayoutDetailsDto {
  /** @format date-time */
  confirmed?: string | null;
  /** @format date-time */
  created?: string;
  currency?: CurrencyDto;
  /** @format date-time */
  expected?: string | null;
  merchantFees?: PayoutMerchantFeesDto;
  merchantPayoutAddress?: string | null;
  payoutAmount?: InvoiceMoneyDto;
  payoutAmountInInvoiceCurrency?: InvoiceMoneyDto;
  /** @format date-time */
  sent?: string | null;
  state?: PaymentPayoutModelState;
}

export interface InvoicePayoutsDetailsDto {
  completedTxId?: string | null;
  /** @format double */
  conversionProgress?: number | null;
  destinationAmount?: InvoicePayoutDestinationAmountDto;
  destinationCurrencyId?: string | null;
  destinationWalletId?: string | null;
  expectedDisplayValue?: string | null;
  externalAddress?: string | null;
  isConversion?: boolean;
  items?: InvoicePayoutDetailsDto[] | null;
  paging?: PagingDto;
  /** @format date-time */
  paidDate?: string | null;
  paidTransactions?: InvoicePaymentTransaction[] | null;
  receivedBlockchainTxId?: string | null;
  /** @format int32 */
  settlementModeErrorCode?: number | null;
  sourceCurrencyId?: string | null;
}

export interface InvoiceShippingDetailDto {
  address?: AddressDto;
  companyName?: string | null;
  /** @format email */
  emailAddress?: string | null;
  hasData?: boolean;
  /**
   * @minLength 0
   * @maxLength 127
   */
  method?: string | null;
  name?: FullNameDto;
  /** @pattern ^[.()\+\-0-9 ]*$ */
  phoneNumber?: string | null;
}

/** @format  */
export enum InvoiceState {
  Unpaid = "unpaid",
  Pending = "pending",
  Paid = "paid",
  ScheduledForPayout = "scheduledForPayout",
  Completed = "completed",
  Cancelling = "cancelling",
  Cancelled = "cancelled",
  TimedOut = "timedOut",
  Deleted = "deleted",
  Draft = "draft",
  Scheduled = "scheduled",
}

/** @format  */
export enum InvoiceStatus {
  Draft = "draft",
  Scheduled = "scheduled",
  Unpaid = "unpaid",
  Pending = "pending",
  Paid = "paid",
  Completed = "completed",
  Cancelled = "cancelled",
  TimedOut = "timedOut",
  Deleted = "deleted",
}

/** The status of an invoice */
export interface InvoiceStatusDto {
  /**
   * the timestamp when the invoice was created
   * @format date-time
   */
  created?: string;
  /**
   * the timestamp when the invoice will expire
   * @format date-time
   */
  expires?: string | null;
  partialAcceptAvailable?: boolean;
  /** The status of a payment to the invoice */
  payment?: InvoicePaymentStatusDto;
  status?: InvoiceStatus;
}

export interface InvoiceWebhookDto {
  /** the types of notifications to send to this endpoint */
  notifications?: MerchantClientWebhookNotification[] | null;
  /**
   * the url to which to POST webhook notifications to
   * @format uri
   */
  notificationsUrl?: string | null;
}

export interface InvoicesCreatedDto {
  /** Encapsulates the details for sending payments to the invoice */
  hotWallet?: InvoicePaymentCurrencyPaymentDetailsDto;
  /** The id of the created invoice */
  id?: string | null;
  /** The link to the created invoice */
  link?: string | null;
  payment?: InvoicePaymentDto;
}

export interface LimitsResponse {
  /** @format double */
  max?: number;
  /** @format double */
  min?: number;
}

export interface LineItemModel {
  /** @format double */
  amount?: number;
  customId?: string | null;
  description?: string | null;
  /** @format uuid */
  id?: string;
  /** @format uuid */
  invoiceId?: string;
  name?: string | null;
  /** @format double */
  originalAmount?: number | null;
  /** @format int32 */
  quantity?: number;
  sku?: string | null;
  /** @format double */
  tax?: number | null;
  type?: LineItemType;
}

export interface LineItemQuantityDto {
  type?: LineItemQuantityTypeDto;
  /**
   * @format int32
   * @min 1
   * @max 999999999
   */
  value?: number;
}

/** @format  */
export enum LineItemQuantityTypeDto {
  Hours = "hours",
  Quantity = "quantity",
}

/** @format  */
export enum LineItemType {
  Hours = "hours",
  Quantity = "quantity",
}

export interface LockVaultRequestDto {
  /** Reason for the lock vault request. */
  reason?: string | null;
  /** Source of the lock vault request. */
  source?: string | null;
  /**
   * Time period that the wallet vault should remain locked, after the unlock process was initiated.
   * @format date-span
   */
  unlockingVaultPeriod?: string | null;
  /** Id of the wallet to schedule the locking of the vault. */
  walletId?: string | null;
}

/** @format  */
export enum MerchantClientACL {
  None = "none",
  CreateInvoice = "createInvoice",
  ListInvoices = "listInvoices",
  FindInvoice = "findInvoice",
  InvoicePayouts = "invoicePayouts",
  ListInvoiceHistory = "listInvoiceHistory",
  CreateWallet = "createWallet",
  GetWallets = "getWallets",
  GetWalletById = "getWalletById",
  CreateAddress = "createAddress",
  GetWalletAddresse = "getWalletAddresse",
  GetWalletAddresses = "getWalletAddresses",
  GetWalletTransactions = "getWalletTransactions",
  GetWalletTransaction = "getWalletTransaction",
  SpendRequest = "spendRequest",
  ConfirmSpendingFunds = "confirmSpendingFunds",
  CreateClientWebHook = "createClientWebHook",
  GetWebhooks = "getWebhooks",
  UpdateWebhook = "updateWebhook",
  DeleteWebhook = "deleteWebhook",
  All = "all",
}

export interface MerchantClientAllowedIPsDto {
  ipAddresses?: string[] | null;
}

export interface MerchantClientDto {
  /** IPs allowed for this merchant client */
  allowedIps?: string | null;
  /** the unique id for the client app that the merchant will use to communicate with CoinPayments REST API */
  clientId?: string | null;
  /** the name of the integration for which this client was created */
  integration?: string | null;
  /** the name of the client app */
  name?: string | null;
  /** Specifies the states that are exposed publicly through the API */
  state?: MerchantClientPublicState;
  /** the store url of the client */
  storeUrl?: string | null;
}

/**
 * Specifies the states that are exposed publicly through the API
 * @format
 */
export enum MerchantClientPublicState {
  Active = "active",
  Disabled = "disabled",
  Deleted = "deleted",
}

/** Represents an endpoint at which the merchant wishes to receive webhook notifications for the client app */
export interface MerchantClientWebhookEndpointDto {
  createdFromUI?: boolean;
  /** the id of the notifications endpoint */
  id?: string | null;
  /** the types of notifications to send to this endpoint */
  notifications?: MerchantClientWebhookNotification[] | null;
  /** the url to which to POST webhook notifications to */
  notificationsUrl?: string | null;
}

/** Represents an endpoint at which the merchant wishes to receive webhook notifications for the client app */
export interface MerchantClientWebhookEndpointsDto {
  items?: MerchantClientWebhookEndpointDto[] | null;
  paging?: PagingDto;
}

/**
 * The notification types for a webhook
 * @format
 */
export enum MerchantClientWebhookNotification {
  InvoiceCreated = "invoiceCreated",
  InvoicePending = "invoicePending",
  InvoicePaid = "invoicePaid",
  InvoiceCompleted = "invoiceCompleted",
  InvoiceCancelled = "invoiceCancelled",
  InvoiceTimedOut = "invoiceTimedOut",
}

export interface MerchantClientsDto {
  items?: MerchantClientDto[] | null;
  paging?: PagingDto;
}

/** @format  */
export enum MerchantFields {
  ShowNone = "showNone",
  ShowAddress = "showAddress",
  ShowEmail = "showEmail",
  ShowPhone = "showPhone",
  ShowRegistrationNumber = "showRegistrationNumber",
}

/** Email delivery options of a merchant invoice */
export interface MerchantInvoiceEmailDeliveryOptionsDto {
  /**
   * the email `bcc` field, multiple addresses separated by semicolons
   * @minLength 0
   * @maxLength 500
   */
  bcc?: string | null;
  /**
   * the email `cc` field, multiple addresses separated by semicolons
   * @minLength 0
   * @maxLength 500
   */
  cc?: string | null;
  /**
   * the email `to` field, multiple addresses separated by semicolons
   * @minLength 0
   * @maxLength 500
   */
  to?: string | null;
}

/** Represents an item of a merchant invoice that a buyer intends to purchase from a merchant */
export interface MerchantInvoiceLineItemDto {
  amount: InvoiceMoneyDto;
  /**
   * the API caller provided external ID for the item.  Appears on the Merchant dashboard and reports only.
   * @minLength 0
   * @maxLength 127
   */
  customId?: string | null;
  /**
   * the detailed description of the item
   * @minLength 0
   * @maxLength 1000
   */
  description?: string | null;
  /**
   * the name or title of the item
   * @minLength 0
   * @maxLength 127
   */
  name?: string | null;
  originalAmount?: InvoiceMoneyDto;
  quantity: LineItemQuantityDto;
  /**
   * the stock keeping unit (SKU) of the item
   * @minLength 0
   * @maxLength 127
   */
  sku?: string | null;
  tax?: InvoiceMoneyDto;
}

export interface MerchantInvoiceLineItemV2Dto {
  /**
   * Price of item
   * @format double
   */
  amount?: number;
  /**
   * the API caller provided external ID for the item.  Appears on the Merchant dashboard and reports only.
   * @minLength 0
   * @maxLength 127
   */
  customId?: string | null;
  /**
   * the detailed description of the item
   * @minLength 0
   * @maxLength 1000
   */
  description?: string | null;
  /**
   * Discount for all items (Amount * Quantity.Value)
   * @format double
   */
  discount?: number;
  /**
   * the name or title of the item
   * @minLength 0
   * @maxLength 127
   */
  name?: string | null;
  quantity: LineItemQuantityDto;
  /**
   * the stock keeping unit (SKU) of the item
   * @minLength 0
   * @maxLength 127
   */
  sku?: string | null;
  /**
   * Taxes for all items (Amount * Quantity.Value)
   * @format double
   */
  taxes?: number;
  /** @format double */
  totalAmount?: number;
}

export interface MerchantInvoiceNextIdDto {
  /**
   * Merchant invoice id, if not unique will be appended with auto-incrementing numbers, otherwise
   * if unique will be used directly
   */
  invoiceId?: string | null;
}

export interface MerchantInvoiceSummariesDto {
  items?: MerchantInvoiceSummaryDto[] | null;
  paging?: PagingDto;
}

/** Summary for a merchant invoice */
export interface MerchantInvoiceSummaryDto {
  amount?: MerchantInvoiceSummaryMoneyDto;
  buyer?: BuyerDto;
  /**
   * the timestamp when the invoice was manually cancelled. Applicable for payment invoices only
   * @format date-time
   */
  cancelled?: string | null;
  /**
   * the timestamp when the invoice was completed (paid out to the merchant and CoinPayments fees)
   * @format date-time
   */
  completed?: string | null;
  /**
   * the timestamp when the invoice was confirmed (paid)
   * @format date-time
   */
  confirmed?: string | null;
  /**
   * the timestamp when the invoice entity was created
   * @format date-time
   */
  created?: string;
  currency?: InvoiceCurrencyDto;
  /** the purchase description */
  description?: string | null;
  /**
   * optional due date of the invoice
   * @format date-time
   */
  dueDate?: string | null;
  emailDelivery?: EmailDeliveryModel;
  /** @format date-time */
  expires?: string | null;
  /** the CoinPayments id for the invoice */
  id?: string | null;
  /**
   * the date of the invoice, either the system created date or custom date specified by the merchant
   * @format date-time
   */
  invoiceDate?: string;
  /** the optional API caller provided external invoice number.  Appears in screens shown to the Buyer and emails sent. */
  invoiceId?: string | null;
  /** the optional numeric suffix for the CoinPayments.Api.Models.Merchant.Dashboard.MerchantInvoices.MerchantInvoiceSummaryDto.InvoiceId. Used when the invoice is emailed to multiple customers */
  invoiceIdSuffix?: string | null;
  /** indicates if invoice was delivered or to be delivered by email */
  isEmailDelivery?: boolean;
  isLifeTimeFinished?: boolean;
  metadata?: MerchantInvoiceSummaryMetadataDto;
  notes?: string | null;
  notesToRecipient?: string | null;
  partialAcceptAvailable?: boolean;
  payments?: MerchantPaymentSummaryDto[] | null;
  /** The buyer's shipping address */
  shipping?: MerchantInvoiceSummaryShippingDto;
  status?: InvoiceStatus;
}

export interface MerchantInvoiceSummaryMetadataDto {
  /** the integration from which the invoice was created */
  integration?: string | null;
}

export interface MerchantInvoiceSummaryMoneyDto {
  currencyId: string;
  currencySymbol?: string | null;
  displayValue?: string | null;
  value: string;
  /** @format double */
  valueAsDecimal?: number;
}

/** The buyer's shipping address */
export interface MerchantInvoiceSummaryShippingDto {
  address?: AddressDto;
}

/** Represents merchant's logo */
export interface MerchantLogoDto {
  /** The url to the merchant's logo */
  logoUrl?: string | null;
}

export interface MerchantOptionsModel {
  additionalInfo?: string | null;
  showFieldsFlag?: MerchantFields;
}

export interface MerchantPaymentSummaryDto {
  actualAmount?: MerchantInvoiceSummaryMoneyDto;
  /** @format date-time */
  completedAt?: string | null;
  /** @format int32 */
  confirmations?: number;
  /** @format date-time */
  confirmedAt?: string | null;
  errorCode?: InvoicePaymentSettlementModeErrorModel;
  expectedAmount?: MerchantInvoiceSummaryMoneyDto;
  fees?: PaymentFeesSummaryDto;
  isActive?: boolean;
  nativeActualAmount?: MerchantInvoiceSummaryMoneyDto;
  nativeExpectedAmount?: MerchantInvoiceSummaryMoneyDto;
  nativeFees?: PaymentFeesSummaryDto;
  nativePayout?: MerchantInvoiceSummaryMoneyDto;
  paymentAddress?: string | null;
  payout?: MerchantPayoutSummaryDto;
  /** @format date-time */
  pendingAt?: string | null;
  refundEmail?: string | null;
  /** @format int32 */
  requiredConfirmations?: number;
  state?: PaymentState;
}

export interface MerchantPayoutSummaryDto {
  address?: string | null;
  blockchainTx?: string | null;
  /** @format date-time */
  completedAt?: string | null;
  currencyId: string;
  currencySymbol?: string | null;
  displayValue?: string | null;
  /** @format date-time */
  expectedExecutionDate?: string | null;
  receivedBlockchainTx?: string | null;
  /** @format date-time */
  scheduledAt?: string | null;
  /** @format date-time */
  sentAt?: string | null;
  /** @format uuid */
  spendRequestId?: string | null;
  value: string;
  /** @format double */
  valueAsDecimal?: number;
  /** @format uuid */
  walletId?: string | null;
}

/** Represents a merchant's profile info */
export interface MerchantProfileDto {
  /** the merchant's business address */
  address?: string | null;
  businessCategory?: string | null;
  /** the merchant's business country of registration */
  country?: string | null;
  /** the description of the merchant */
  description?: string | null;
  /** the merchant's business email */
  email?: string | null;
  /** the url to the merchant's logo */
  logoUrl?: string | null;
  /** the business name of the merchant */
  name?: string | null;
  /** the phone number of the business */
  phone?: string | null;
  /** the business registration number */
  registrationNumber?: string | null;
  /** full name of the Ultimate Beneficiary Owner (UBO) of the business */
  uboName?: string | null;
  /** the url to the merchants website */
  websiteUrl?: string | null;
}

export interface MigrateCpsPhpUserRequestDto {
  country?: string | null;
  email?: string | null;
  /** @format date-time */
  originalJoinDate?: string;
  password?: string | null;
  /** @format int32 */
  provinceId?: number | null;
  /** @format int32 */
  userId?: number;
}

export interface MoneyDto {
  currencyId?: string | null;
  displayValue?: string | null;
  value?: string | null;
  /** @format double */
  valueAsDecimal?: number;
}

/** Request to create a new merchant wallet */
export interface NewWalletRequestDto {
  /** an optional address of the smart contract representing a token */
  contractAddress?: string | null;
  /** The currency Id of the wallet to be created */
  currencyId: string;
  /** @format int32 */
  currencyIdNumber?: number;
  /**
   * Wallet label
   * @minLength 0
   * @maxLength 100
   */
  label?: string | null;
  /** If set to true addresses of account-based wallets will not expiry due to inactivity, see docs for more info */
  usePermanentAddresses?: boolean;
  /** Client provided URL which will receive notifications about deposits to this wallet */
  webhookUrl?: string | null;
}

/** Wallet creation response */
export interface NewWalletResponseDto {
  /** Address of the newly created wallet */
  address?: string | null;
  /** Id of the newly created wallet */
  walletId?: string | null;
}

export interface PagedWalletAddressesDto {
  items?: WalletAddressDto[] | null;
  paging?: PagingDto;
}

export interface PagedWalletsDto {
  items?: WalletDto[] | null;
  paging?: PagingDto;
}

export interface PagingCursorsDto {
  after?: string | null;
  before?: string | null;
}

export interface PagingDto {
  cursors?: PagingCursorsDto;
  /** @format uri */
  first?: string | null;
  /** @format uri */
  last?: string | null;
  /** @format int32 */
  limit?: number;
  /** @format uri */
  next?: string | null;
  /** @format uri */
  previous?: string | null;
}

export interface PaymentFeesSummaryDto {
  buyerFee?: PersonFeeSummaryDto;
  /** @format double */
  gross?: number;
  merchantFee?: PersonFeeSummaryDto;
  merchantMarkupOrDiscount?: MerchantInvoiceSummaryMoneyDto;
  paymentSubTotal?: MerchantInvoiceSummaryMoneyDto;
}

/** @format  */
export enum PaymentPayoutModelState {
  Scheduled = "scheduled",
  Sending = "sending",
  Sent = "sent",
  Confirmed = "confirmed",
  WaitingConversion = "waitingConversion",
  Failed = "failed",
  WaitingInternalReceive = "waitingInternalReceive",
  WaitingExternalConfirm = "waitingExternalConfirm",
}

/** @format  */
export enum PaymentState {
  Created = "created",
  Detected = "detected",
  Pending = "pending",
  Confirmed = "confirmed",
  ScheduledForPayout = "scheduledForPayout",
  Completed = "completed",
  CancelledWaitingRefund = "cancelledWaitingRefund",
  TimedOutWaitingRefund = "timedOutWaitingRefund",
  TimedOutRefundProcessed = "timedOutRefundProcessed",
  CancelledRefundProcessed = "cancelledRefundProcessed",
  Refunded = "refunded",
}

/** Represents info needed to specify payout configuration for payments */
export interface PayoutConfigDto {
  /** the external address into which to pay out */
  address?: string | null;
  /** the currency id of the wallet or address into which to payout to */
  currencyId?: string | null;
  /** the id of the wallet into which to pay out */
  walletId?: string | null;
}

/** @format  */
export enum PayoutCurrencyFrequency {
  Normal = "normal",
  AsSoonAsPossible = "asSoonAsPossible",
  Hourly = "hourly",
  Nightly = "nightly",
  Weekly = "weekly",
}

export interface PayoutInfo {
  address?: string | null;
  isActiveAddress?: boolean;
  isToBalance?: boolean;
  payoutFrequency?: PayoutCurrencyFrequency;
  toCurrency?: CurrencyModel;
  /** @format uuid */
  walletId?: string | null;
}

export interface PayoutMerchantFeesDto {
  conversionFee?: InvoiceMoneyDto;
  networkFee?: InvoiceMoneyDto;
  transactionFee?: InvoiceMoneyDto;
}

export interface PersonFeeSummaryDto {
  coinPaymentsFee?: MerchantInvoiceSummaryMoneyDto;
  conversionFee?: MerchantInvoiceSummaryMoneyDto;
  networkFee?: MerchantInvoiceSummaryMoneyDto;
  /** @format double */
  total?: number;
}

export interface ProblemDetails {
  detail?: string | null;
  instance?: string | null;
  /** @format int32 */
  status?: number | null;
  title?: string | null;
  type?: string | null;
  [key: string]: any;
}

/** Conversion rate between two currencies */
export interface RateDto {
  /**
   * the currency code of the source/base currency
   * @format int32
   * @example 123
   */
  baseCurrencyId?: number;
  /** the contract address of the source/base token on the base currency platform */
  baseToken?: string | null;
  /**
   * the currency code of the target/quoted currency
   * @format int32
   * @example 456
   */
  quoteCurrencyId?: number;
  /** the contract address of the target/quoted token on the quoted currency platform */
  quoteToken?: string | null;
  /**
   * the conversion rate to convert from `BaseCurrencyId` into `QuoteCurrencyId`
   * @example "0.011488196994190"
   */
  rate?: string | null;
}

export interface RatesDto {
  items?: RateDto[] | null;
}

export interface RegenerateSecretResponseDto {
  clientSecret?: string | null;
}

export interface RequestFreeCurrencyResponse {
  /** @format date-span */
  remainingWaitTime?: string | null;
  result?: RequestFreeCurrencyResult;
}

/** @format  */
export enum RequestFreeCurrencyResult {
  Unknown = "unknown",
  NotEnoughBalance = "notEnoughBalance",
  WaitTimePeriod = "waitTimePeriod",
  Succeeded = "succeeded",
  UnexpectedError = "unexpectedError",
}

export interface RequiredConfirmationDto {
  /** @format int64 */
  confirmationsCount?: number;
  /** @format int32 */
  currencyId?: number;
}

export interface ScheduleUnlockVaultRequestDto {
  /**
   * OTP code
   * @example "104608"
   */
  otp?: string | null;
  /**
   * Token value to authenticate the scheduling of the vault unlock
   * @example "CfDJ8IF2WCdtP7RCsWkczKOm4C-q0I6WPNXcry1ngMKxHhSUv9m5W3kwurW_SbYhBEHQcCll1qUZo9AJVklpNNjeQHkKdxO6MAom96rTtXWA3aKdVS0estKUC3KJ5-1JV_JDVe8IzI0r81Z4xQS04WdvFLO5UMPlMHuYAo_pN_lv--M51sGP0JPEJfMbhFyho6ZNz3hDPXTUtBrREQAUPIY-As8"
   */
  token?: string | null;
  /** Id of the wallet to schedule the unlocking of the vault */
  walletId?: string | null;
}

export interface SetTotp2FaForMigratedCpsPhpUserRequestDto {
  totpSeed?: string | null;
  /** @format int32 */
  userId?: number;
}

export interface SetTwoFactorAuthenticationRequestDto {
  twoFactorTokenProvider?: TwoFactorTokenProviderDto;
  /** @format int32 */
  userId?: number;
}

export interface ShippingModel {
  address?: AddressModel;
  companyName?: string | null;
  email?: string | null;
  firstName?: string | null;
  hasData?: boolean;
  lastName?: string | null;
  method?: string | null;
  phoneNumber?: string | null;
}

/** Request to create a transaction and spend funds from a wallet */
export interface SpendRequestDto {
  /** the amount of money (in the currencies smallest unit, e.g. Satoshis for BTC) to send to the recipient address */
  amountInSmallestUnits?: string | null;
  /**
   * (Optional) Used for overriding the system suggested blockchain fee (within 10% range) to manage the transaction processing speed
   * @format double
   */
  blockchainFeeOverrideInSmallestUnits?: number | null;
  /** (Optional) Address of the contract e.g. "0xdac17f958d2ee523a2206206994597c13d831ec7" for ERC20 TetherUSD */
  fromContractAddress?: string | null;
  /** Optional user-defined note for the spend */
  memo?: string | null;
  /**
   * Specifies that the receiver of the transfer will pay the fees meaning that the AmountInSmallestUnits will be deducted from the sender balance and receiver will get the AmountInSmallestUnits minus fees.
   * Otherwise fees will be added to the AmountInSmallestUnits and the total sum will be deducted from the sender balance while the receiver will get exactly AmountInSmallestUnits
   */
  receiverPaysFee?: boolean;
  /** Address which client wants to send funds to */
  toAddress: string;
  /** (Optional) Address of the contract of the CoinPayments.Api.Models.Merchant.Wallet.SpendRequestDto.ToCurrencyId e.g. "0xdac17f958d2ee523a2206206994597c13d831ec7" for ERC20 TetherUSD */
  toContractAddress?: string | null;
  /**
   * ID of the currency of the spend destination, for anything except conversion it is equal to FromCurrencyId
   * @format int32
   */
  toCurrencyId: number;
  /**
   * If set this wallet will be used to pay fees instead of the main spending wallet
   * @format uuid
   */
  walletToPayFeeFrom?: string | null;
}

/** Encapsulates the response to a wallet spend validation request */
export interface SpendRequestValidateResponseDto {
  /** the list of errors, if any */
  errors?: SpendRequestValidateResponseErrorDto[] | null;
  /** value indicating whether the provided request is valid */
  isValid?: boolean;
}

/** Encapsulates an error from the wallet spend request validator */
export interface SpendRequestValidateResponseErrorDto {
  /** the code for the error */
  code?: string | null;
  /** the description for the error */
  description?: string | null;
}

export interface SubClientBalance {
  earn_1d?: string | null;
  earn_30d?: string | null;
  earn_7d?: string | null;
  earn_90d?: string | null;
  asset_id?: string | null;
  available_for_withdrawal?: string | null;
  earn_total?: string | null;
  last_payout_amount?: string | null;
  last_payout_date?: string | null;
  total?: string | null;
}

/** @format  */
export enum SwitcherStatus {
  Enabled = "enabled",
  Disabled = "disabled",
}

export interface Token {
  contractAddress?: string | null;
  contractName?: string | null;
  contractSymbol?: string | null;
  /** @format int32 */
  currencyId?: number;
  /** @format int32 */
  decimals?: number;
  isVerified?: boolean;
}

/** Monetary value (an amount with a currency and contract address). */
export interface TokenDto {
  /** Blockchain address of the contract representing the token */
  contractAddress?: string | null;
  currencyId?: string | null;
  displayValue?: string | null;
  /** @format int32 */
  nativeCurrencyId?: number;
  /** Token amount equivalent in native currency */
  nativeValue?: string | null;
  /** @format double */
  nativeValueAsDecimal?: number;
  value?: string | null;
  /** @format double */
  valueAsDecimal?: number;
}

/** Represents a user's transacted volume */
export interface TransactedVolumeDto {
  limit?: MoneyDto;
  volume?: MoneyDto;
}

/** @format  */
export enum TransactionDirection {
  All = "all",
  Spent = "spent",
  Received = "received",
}

/** Transactions represent an event on one or more accounts (e.g. debit, withdrawal, transfer or conversion) */
export interface TransactionDto {
  /**
   * Block number the transaction appeared at
   * @format int64
   */
  blockNumberTxAppearedAt?: number | null;
  blockchainFee?: FeeDto;
  coinPaymentsFee?: FeeDto;
  /**
   * timestamp when the transaction was completed/confirmed
   * @format date-time
   * @example "2018-04-23T18:25:43.511Z"
   */
  completed?: string | null;
  /**
   * Current number of confirmations that this transaction has
   * @format int32
   */
  confirmations?: number;
  /** Source contract address for token transfers of account-based currencies like ERC20 for ETH */
  contractAddress?: string | null;
  /**
   * Id of the conversion corresponding to this transaction in the coinflip service
   * @format int64
   */
  conversionId?: number | null;
  /**
   * timestamp when the transaction was created
   * @format date-time
   * @example "2018-04-23T18:25:43.511Z"
   */
  created?: string | null;
  /** @format int32 */
  flags?: number;
  /** Details of the input/output (origin/receiver) of a transaction */
  from?: TransactionInputOutputDto;
  /** the unique id of the transaction on the CoinPayments® platform */
  id?: string | null;
  /** the user's custom memo for this transaction */
  memo?: string | null;
  /**
   * Required number of confirmations to consider this transaction confirmed
   * @format int32
   */
  requiredConfirmations?: number;
  /** @format uuid */
  spendRequestId?: string | null;
  state?: TransactionState;
  supportTransactionId?: string | null;
  /** Details of the input/output (origin/receiver) of a transaction */
  to?: TransactionInputOutputDto;
  /** Destination contract address for token transfers of account-based currencies like ERC20 for ETH */
  toContractAddress?: string | null;
  /**
   * Type of the transaction
   * @format int32
   */
  transactionType?: number;
}

export interface TransactionDtoPagedItemsDto {
  items?: TransactionDto[] | null;
  paging?: PagingDto;
}

export interface TransactionExportRequestDto {
  direction?: TransactionDirection;
  /** @format date-time */
  endDate?: string | null;
  /** @format date-time */
  startDate?: string | null;
}

export interface TransactionHistoryEventDto {
  /** optional custom data for the event */
  data?: any;
  /** the type of event that was observed */
  eventType?: string | null;
  /**
   * the timestamp of when the this event was observed
   * @format date-time
   */
  timestamp?: string;
}

export interface TransactionHistoryEventsDto {
  items?: TransactionHistoryEventDto[] | null;
}

/** Details of the input/output (origin/receiver) of a transaction */
export interface TransactionInputOutputDto {
  address?: string | null;
  amount?: MoneyDto;
  nativeAmount?: MoneyDto;
  type?: string | null;
}

/** @format  */
export enum TransactionState {
  Created = "created",
  Pending = "pending",
  Completed = "completed",
  FailedOnBlockchain = "failedOnBlockchain",
  WaitingForConversion = "waitingForConversion",
  Cancelled = "cancelled",
  Rejected = "rejected",
}

export interface TwoFaUnlockVaultResponseDto {
  token?: string | null;
  walletId?: string | null;
}

export interface TwoFaWalletSweepResponseDto {
  token?: string | null;
  walletId?: string | null;
}

/** @format  */
export enum TwoFactorTokenProviderDto {
  None = "none",
  GoogleAuth = "googleAuth",
  Email = "email",
}

/** Update for info needed to configure an accepted Currency */
export interface UpdateAcceptedCurrencyConfigDto {
  /**
   * the discount to give buyers when paying in this currency, maybe as a promotional tool
   * @format float
   * @min 0
   * @max 99.99
   */
  discountPercent?: number | null;
  frequency?: PayoutCurrencyFrequency;
  /**
   * the markup to charge buyers when paying in this currency, maybe to cover local crypto/fiat conversion costs
   * @format float
   * @min 0
   * @max 999999999
   */
  markupPercent?: number | null;
  /** the configurations defining how the merchant would like to receive funds from the current payment currency */
  payouts?: PayoutConfigDto[] | null;
  switcherStatus?: SwitcherStatus;
}

/**
 * The allowed underpayment can be defined either as a fixed fiat amount, such as $10,
 * or as a percentage of the total invoice amount, such as 5%.
 */
export interface UpdateAllowedUnderPaymentPercentDto {
  amountValue?: Currency;
  /**
   * The accepted percentage of the total invoice amount.
   * @format double
   */
  percent?: number;
}

/** Request to update an invoice */
export interface UpdateInvoiceBuyerInfoRequestDto {
  buyer?: BuyerDto;
  shipping?: InvoiceShippingDetailDto;
}

export interface UpdateMerchantClientAccessControlDto {
  flags?: MerchantClientACL;
}

export interface UpdateMerchantClientDto {
  /** The name of the client provided by the merchant */
  name?: string | null;
  /** Specifies the states that are exposed publicly through the API */
  state?: MerchantClientPublicState;
  /** the store url of the client */
  storeUrl?: string | null;
}

export interface UpdateMerchantClientWebhookDto {
  /** the types of notifications to send to this endpoint */
  notifications?: MerchantClientWebhookNotification[] | null;
  /**
   * the url to which to POST webhook notifications to
   * @format uri
   */
  notificationsUrl?: string | null;
}

/**
 * Used for creating an invoice on the dashboard.
 * Request to create an invoice, which is a list of goods or services with a statement of the sum due provided
 * by the merchant, that a buyer intends to purchase
 */
export interface UpdateMerchantInvoiceRequestDto {
  amount?: InvoiceAmountDto;
  buyer?: BuyerDto;
  /**
   * the message to display when collecting buyer user data
   * @minLength 0
   * @maxLength 300
   */
  buyerDataCollectionMessage?: string | null;
  /** any custom data the caller wishes to attach to the invoice which will be sent back in notifications */
  customData?: Record<string, string>;
  /**
   * the purchase description, can be provided instead of a list of `items`
   * @minLength 0
   * @maxLength 200
   */
  description?: string | null;
  /** flag indicating whether this is a draft invoice */
  draft?: boolean | null;
  /**
   * optional due date to be shown on the invoice
   * @format date-time
   */
  dueDate?: string | null;
  /** Email delivery options of a merchant invoice */
  emailDelivery?: MerchantInvoiceEmailDeliveryOptionsDto;
  /**
   * optional custom invoice date if not the created date of the invoice, invoices with a future date will
   * be scheduled
   * @format date-time
   */
  invoiceDate?: string | null;
  /**
   * the optional API caller provided external invoice number.  Appears in screens shown to the Buyer and emails sent.
   * @minLength 0
   * @maxLength 127
   */
  invoiceId?: string | null;
  /** indicates if invoice will be email delivered */
  isEmailDelivery?: boolean;
  /** the optional array of items that a buyer intends to purchase from the merchant */
  items?: MerchantInvoiceLineItemDto[] | null;
  merchantOptions?: InvoiceMerchantOptionsDto;
  /**
   * notes for the merchant only, these are not visible to the buyers
   * @minLength 0
   * @maxLength 500
   */
  notes?: string | null;
  /**
   * any additional information to share with the buyer about the transaction
   * @minLength 0
   * @maxLength 500
   */
  notesToRecipient?: string | null;
  /**
   * flag indicating whether a buyer name and email are required, they will be requested at checkout
   * if not provider by the caller.  The CoinPayments.Api.Models.Merchant.UpdateMerchantInvoiceRequestDto.BuyerDataCollectionMessage will be displayed
   * to the buyer when prompted.
   */
  requireBuyerNameAndEmail?: boolean | null;
  shipping?: InvoiceShippingDetailDto;
  /**
   * any terms and conditions, e.g. a cancellation policy
   * @minLength 0
   * @maxLength 500
   */
  termsAndConditions?: string | null;
}

/** Represents info to update for a Merchant */
export interface UpdateMerchantProfileDto {
  /**
   * the merchant's business address
   * @minLength 0
   * @maxLength 1000
   */
  address?: string | null;
  businessCategory?: string | null;
  /** the merchant's business country of registration */
  country?: string | null;
  /** the description of the merchant */
  description?: string | null;
  /** the merchant's business email */
  email?: string | null;
  /** the business name of the merchant */
  name?: string | null;
  /** the phone number of the business */
  phone?: string | null;
  /** the business registration number */
  registrationNumber?: string | null;
  /** full name of the Ultimate Beneficiary Owner (UBO) of the business */
  uboName?: string | null;
  /** the url to the merchants website */
  websiteUrl?: string | null;
}

export interface UpdateWalletWebhookRequestDto {
  notificationUrl?: string | null;
}

/**
 * Represents specific features that are available or not available to certain users
 * (for example, a feature will not be available to a user depending on which country they KYC'ed from)
 */
export interface UserFeaturesDto {
  /** Indicates whether top up feature is available to user */
  topUp?: boolean;
}

export interface UserKycDto {
  /** Indicates whether kyc has finished successfully */
  hasCompletedKyc?: boolean;
}

/** Active notification on a user's dashboard */
export interface UserNotificationDto {
  /** the name to give the action (e.g. such as a button to go to the CoinPayments.Api.Models.UserNotificationDto.ActionUrl) */
  actionName?: string | null;
  /** link to go view more information about the notification or to take some action */
  actionUrl?: string | null;
  /** the body of the notification */
  body?: string | null;
  /** the heading of the notification */
  heading?: string | null;
  /** the id of the notification */
  id?: string | null;
  /** indicates whether notification has been read by the user */
  isRead?: boolean;
  /**
   * The date the notification started showing (was published)
   * @format date-time
   */
  publishedDate?: string;
  type?: UserNotificationType;
}

/** @format  */
export enum UserNotificationType {
  Warning = "warning",
  News = "news",
  Promotion = "promotion",
}

export interface UserNotificationsDto {
  items?: UserNotificationDto[] | null;
  paging?: PagingDto;
}

export interface UserPreferencesDto {
  /** value indicating whether to automatically accept assets sent to wrong wallets to the correct personal wallet of the user */
  autoAcceptWrongAssets?: boolean;
  /** the language code for the user (e.g. 'EN' or 'EN-US') */
  language?: string | null;
  /**
   * the users native currency id, api calls will return monetary amounts in this currency along with the
   * original currencies
   * @example "1235"
   */
  nativeCurrencyId?: string | null;
  /** value indicating whether to send the user a notification when funds are received into one of their wallets */
  notifyOnFundsReceived?: boolean;
  /** value indicating whether to send the user a notification when funds are sent from one of their wallets */
  notifyOnFundsSent?: boolean;
}

export interface UserSettingsDto {
  /** @maxLength 95 */
  key: string;
  value: string;
}

export type UserSettingsDtoIAsyncEnumerable = object;

export interface VolumeInUSD {
  /** @format int64 */
  commercial?: number;
  /** @format int64 */
  personal?: number;
}

/** Represents a deposit address of a wallet on the CoinPayments® platform. */
export interface WalletAddressDto {
  /** the network address */
  address?: string | null;
  /** the unique id of the address */
  addressId?: string | null;
  /** user supplied or system generated label for this address */
  label?: string | null;
  /** when there is transaction involved with this address, we can send notification to this url */
  notificationUrl?: string | null;
  /**
   * Indicates a date, when this address is going to be returned to the pool
   * (only relevant for AccountBased coins, that are using address pools)
   * @format date-time
   */
  rentedTill?: string | null;
}

/** Information about merchant wallet consolidation (sending funds to the main wallet) */
export interface WalletConsolidationDto {
  activationFee?: string | null;
  addresses?: AddressConsolidationDto[] | null;
  available?: string | null;
  newReceivedExternal?: string | null;
  newReceivedInternal?: string | null;
  totalFee?: string | null;
  transferFee?: string | null;
}

export interface WalletConsolidationRequestDto {
  addresses?: string[] | null;
  /** @format uuid */
  walletId?: string;
}

/** Request to create a transaction and convert funds from a wallet */
export interface WalletConvertRequestDto {
  /**
   * Optional contract address for spending tokens instead of native coins for currencies that support smart contracts.
   * @minLength 0
   * @maxLength 200
   */
  contractAddress?: string | null;
  /**
   * Address of the contract of the token to convert to.
   * If at least one of the following
   * a. CoinPayments.Api.Models.WalletConvertRequestDto.ConvertToCurrency is specified and not equal to currency of the wallet initiating the transfer
   * b. CoinPayments.Api.Models.WalletConvertRequestDto.ContractAddress is not equal to CoinPayments.Api.Models.WalletConvertRequestDto.ConvertToContractAddress
   * is true the transfer is considered a conversion, otherwise it is considered a regular transfer
   */
  convertToContractAddress?: string | null;
  /**
   * Currency into which funds should be converted.
   * If at least one of the following
   * a. CoinPayments.Api.Models.WalletConvertRequestDto.ConvertToCurrency is specified and not equal to currency of the wallet initiating the transfer
   * b. CoinPayments.Api.Models.WalletConvertRequestDto.ContractAddress is not equal to CoinPayments.Api.Models.WalletConvertRequestDto.ConvertToContractAddress
   * is true the transfer is considered a conversion, otherwise it is considered a regular transfer
   * @format int32
   */
  convertToCurrency?: number;
  /** Specifies that fees would be subtracted from the amount being sent instead of being added to it */
  feeSubtractedFromAmount?: boolean;
  /**
   * Custom memo to attach to this transaction, this will only be visible within CoinPayments®
   * @minLength 0
   * @maxLength 200
   */
  memo?: string | null;
  /** the list of recipients to send funds to */
  recipients?: WalletSpendRequestRecipientDto[] | null;
}

/** Represents a wallet account on the CoinPayments® platform. */
export interface WalletDto {
  /** flag that determines ability to create multiple addresses for same wallet */
  canCreateAddresses?: boolean;
  /** @format uuid */
  clientId?: string | null;
  confirmedBalance?: MoneyDto;
  confirmedNativeBalance?: MoneyDto;
  /** the amount of tokens (like ERC20) available for this wallet */
  confirmedTokens?: TokenDto[] | null;
  /** An optional address of the smart contract representing a token */
  contractAddress?: string | null;
  /**
   * the id of the currency this wallet holds
   * @format int32
   * @example 1235
   */
  currencyId?: number;
  /** the current (last) deposit address for the wallet (for crypto currency wallets) */
  depositAddress?: string | null;
  hasActiveAddress?: boolean;
  hasPermanentAddresses?: boolean;
  /** Indicates whether this wallet is active (not deleted or deactivated) */
  isActive?: boolean;
  /** Indicates whether this wallet is locked due to legal reasons */
  isLocked?: boolean;
  /** flag that determines if the wallet vault is locked or not */
  isVaultLocked?: boolean;
  /**
   * the user or system defined name of the wallet
   * @example "My BitCoin Wallet 😀"
   */
  label?: string | null;
  unconfirmedBalance?: MoneyDto;
  unconfirmedNativeBalance?: MoneyDto;
  /** the amount of tokens (like ERC20) pending for this wallet */
  unconfirmedTokens?: TokenDto[] | null;
  /**
   * DateTime that specifies the planned date the vault will be unlocked
   * @format date-time
   */
  vaultLockoutEndDateTime?: string | null;
  /**
   * the unique id of the wallet
   * @example "283b271a2db744c0b10c"
   */
  walletId?: string | null;
  walletType?: WalletType;
}

/** The response to a request to spend funds from a wallet */
export interface WalletSpend2FAChallengeResponseDto {
  /** the id of the created request to spend funds */
  spendRequestId?: string | null;
  /** additional validation token that must be sent up with the signed request */
  spendRequestToken?: string | null;
}

/** Request to confirm spending funds from a wallet */
export interface WalletSpendConfirmationRequestDto {
  /**
   * Id of the spend request
   * @format uuid
   */
  spendRequestId?: string;
}

/** Request to create a transaction and spend funds from a wallet */
export interface WalletSpendRequest2FADto {
  /** the list of addresses to send funds to */
  addresses?: string[] | null;
  /** @format uuid */
  walletId?: string;
}

/** Client signed spend request */
export interface WalletSpendRequestBroadcastDto {
  /** 2fa token */
  otp?: string | null;
  /** the validation token from the original request */
  spendRequestToken?: string | null;
}

/** Request to create a transaction and spend funds from a wallet */
export interface WalletSpendRequestDto {
  /**
   * Optional contract address for spending tokens instead of native coins for currencies that support smart contracts.
   * @minLength 0
   * @maxLength 200
   */
  contractAddress?: string | null;
  /** Specifies that fees would be subtracted from the amount being sent instead of being added to it */
  feeSubtractedFromAmount?: boolean;
  /**
   * Custom memo to attach to this transaction, this will only be visible within CoinPayments®
   * @minLength 0
   * @maxLength 200
   */
  memo?: string | null;
  /** the list of recipients to send funds to */
  recipients?: WalletSpendRequestRecipientDto[] | null;
  /**
   * Address of the contract of the token to convert to.
   * If at least one of the following
   * a. CoinPayments.Api.Models.WalletSpendRequestDto.ToCurrency is specified and not equal to currency of the wallet initiating the transfer
   * b. CoinPayments.Api.Models.WalletSpendRequestDto.ContractAddress is not equal to CoinPayments.Api.Models.WalletSpendRequestDto.ToContractAddress
   * is true the transfer is considered a conversion, otherwise it is considered a regular transfer
   */
  toContractAddress?: string | null;
  /**
   * Currency into which funds should be converted.
   * If at least one of the following
   * a. CoinPayments.Api.Models.WalletSpendRequestDto.ToCurrency is specified and not equal to currency of the wallet initiating the transfer
   * b. CoinPayments.Api.Models.WalletSpendRequestDto.ContractAddress is not equal to CoinPayments.Api.Models.WalletSpendRequestDto.ToContractAddress
   * is true the transfer is considered a conversion, otherwise it is considered a regular transfer
   * @format int32
   */
  toCurrency?: number | null;
  /**
   * If set this wallet will be used to pay fees instead of the main spending wallet
   * @format uuid
   */
  walletToPayFeeFrom?: string | null;
}

/** Recipient of a transaction */
export interface WalletSpendRequestRecipientDto {
  /** the address of the recipients account/wallet */
  address: string;
  /** the amount of money (in the currencies smallest unit, e.g. Satoshis for BTC) to send to the recipient address */
  amount: string;
  /**
   * CoinPayments.Api.Models.WalletSpendRequestRecipientDto.Amount as a System.Decimal
   * @format double
   */
  amountAsDecimal?: number;
  /** the amount of money (in the currencies smallest unit, e.g. Satoshis for BTC) to pay as a blockchain network fee */
  blockChainFee?: string | null;
  /**
   * CoinPayments.Api.Models.WalletSpendRequestRecipientDto.BlockChainFee as a System.Decimal
   * @format double
   */
  blockChainFeeAsDecimal?: number | null;
}

export interface WalletSpendRequestResponseDto {
  blockchainFee?: string | null;
  blockchainFeeCurrency?: string | null;
  coinPaymentsFee?: string | null;
  coinPaymentsFeeCurrency?: string | null;
  fromCurrency?: string | null;
  id?: string | null;
  toAddress?: string | null;
  toAmount?: string | null;
  toCurrency?: string | null;
  /** @format uuid */
  walletId?: string;
  walletLabel?: string | null;
  /** @format uuid */
  walletToPayFeeFrom?: string | null;
}

/** Request to create a transaction and spend funds from a wallet */
export interface WalletSpendResponseDto {
  /**
   * Amount of funds needed to perform an actual blockchain transfer
   * @format double
   */
  blockchainFee?: number;
  /**
   * Amount of funds withheld by CoinPayments for service
   * @format double
   */
  coinpaymentsFee?: number;
  /**
   * Amount of funds being spent
   * @format double
   */
  fromAmount?: number;
  /** Address of the contract (for token transfers) */
  fromContractAddress?: string | null;
  /**
   * ID of the currency which user wants to spend, equal to wallet currency
   * @format int32
   */
  fromCurrencyId?: number;
  /**
   * ID of the wallet user wants to spend from
   * @format uuid
   */
  fromWalletId?: string;
  /** Optional user-defined note for the spend */
  memo?: string | null;
  /**
   * Id of this spend request
   * @format uuid
   */
  spendRequestId?: string;
  /** Address which user wants to send funds to */
  toAddress?: string | null;
  /**
   * Amount of funds being received at the destination
   * @format double
   */
  toAmount?: number;
  /** Address of the contract to which convert funds to (for token conversions) */
  toContractAddress?: string | null;
  /**
   * ID of the currency of the spend destination, for anything except conversion it is equal to FromCurrencyId
   * @format int32
   */
  toCurrencyId?: number;
  /**
   * If set this wallet will be used to pay fees instead of the main spending wallet
   * @format uuid
   */
  walletToPayFeeFrom?: string | null;
}

export interface WalletSweepDto {
  destinationAddress?: string | null;
  fromContractAddress?: string | null;
  /** @format int32 */
  fromCurrencyId?: number;
  isActive?: boolean;
  /** @format uuid */
  ownerId?: string;
  /** @format double */
  sweepingThreshold?: number;
  toContractAddress?: string | null;
  /** @format int32 */
  toCurrencyId?: number;
  /** @format uuid */
  walletId?: string;
}

/** Wallet creation response */
export interface WalletTransactionDto {
  /**
   * Block number the transaction appeared at
   * @format int64
   */
  blockNumberTxAppearedAt?: number | null;
  /** Amount of funds spent as a blockchain fee for this transaction in smallest units (e.g. Satoshis for Bitcoin) */
  blockchainFee?: string | null;
  /** Currency in which Blockchain fee was deducted. The format is {CurrencyId}:{ContractAddress?} where ContractAddress is optional e.g.null "1", "4:0xdac17f958d2ee523a2206206994597c13d831ec7" */
  blockchainFeeCurrency?: string | null;
  blockchainFeeNative?: string | null;
  /** Currency in which CoinPayments fee was deducted. The format is {CurrencyId}:{ContractAddress?} where ContractAddress is optional e.g.null "1", "4:0xdac17f958d2ee523a2206206994597c13d831ec7" */
  coinPaymentsFeeCurrency?: string | null;
  /** Amount of funds withheld as system fee for this transaction in smallest units (e.g. Satoshis for Bitcoin) */
  coinpaymentsFee?: string | null;
  coinpaymentsFeeNative?: string | null;
  /**
   * Current number of confirmations that this transaction has
   * @format int32
   */
  confirmations?: number;
  convertedTxHash?: string | null;
  /**
   * Date when transaction was received or sent to the chain
   * @format date-time
   */
  dateCompleted?: string | null;
  /**
   * Date when transaction was created
   * @format date-time
   */
  dateCreated?: string;
  /** Address of the wallet which was used when this transaction was created */
  fromAddress?: string | null;
  /** Amount of funds that was sent in this transaction in smallest units (e.g. Satoshis for Bitcoin) */
  fromAmount?: string | null;
  fromAmountNative?: string | null;
  /** Address of the contract for tokens being sent if this transaction is an ERC20 or similar token transfer */
  fromContractAddress?: string | null;
  /**
   * Id of the currency that was used to send this transaction
   * @format int32
   */
  fromCurrencyId?: number | null;
  /**
   * Id of the owner of the wallet who sent the transaction
   * @format uuid
   */
  fromOwnerId?: string | null;
  /**
   * Id of the wallet which the transaction was sent from
   * @format uuid
   */
  fromWalletId?: string | null;
  /**
   * Id of the transaction in the system
   * @format uuid
   */
  id?: string;
  isInvoicePaymentSend?: boolean;
  /** User-defined custom note for this transaction */
  memo?: string | null;
  /**
   * Index of the output in which this transaction received funds (only for UTXO receives)
   * @format int32
   */
  outputIndex?: number | null;
  paymentType?: string | null;
  /**
   * Required number of confirmations to consider this transaction confirmed
   * @format int32
   */
  requiredConfirmations?: number;
  /**
   * Id of the spend request which was used to create this transaction
   * @format uuid
   */
  spendRequestId?: string | null;
  supportTransactionId?: string | null;
  /** Address which this transaction is sending funds to */
  toAddress?: string | null;
  /** Amount of funds that was received in this transaction in smallest units (e.g. Satoshis for Bitcoin) */
  toAmount?: string | null;
  toAmountNative?: string | null;
  /** Address of the contract for tokens being received if this transaction is an ERC20 or similar token transfer */
  toContractAddress?: string | null;
  /**
   * Id of the currency which this transaction is sending funds to
   * @format int32
   */
  toCurrencyId?: number;
  /**
   * Id of the wallet which the transaction was sent to
   * @format uuid
   */
  toWalletId?: string | null;
  transactionStatus?: WalletTransactionStatus;
  transactionType?: WalletTransactionType;
  /** Blockchain transaction hash (only for external transfers) */
  txHash?: string | null;
}

/** @format  */
export enum WalletTransactionFlags {
  Empty = "empty",
  InvoicePayoutToInternal = "invoicePayoutToInternal",
  InvoicePayoutToExternal = "invoicePayoutToExternal",
  TestFund = "testFund",
  IsLargeWithdrawal = "isLargeWithdrawal",
  InvoicePaymentSend = "invoicePaymentSend",
  PaymentTypeCoins = "paymentTypeCoins",
  PaymentTypeCc = "paymentTypeCc",
  PaymentTypePaypal = "paymentTypePaypal",
  PaymentTypeEscrow = "paymentTypeEscrow",
  SmartContractFactoryDeployment = "smartContractFactoryDeployment",
  InvoiceRefund = "invoiceRefund",
  ConsolidatingFromMerchantWallet = "consolidatingFromMerchantWallet",
  ConsolidatingToPersonalWallet = "consolidatingToPersonalWallet",
  CoinChangeYieldDeposit = "coinChangeYieldDeposit",
  EsimPurchase = "esimPurchase",
  EsimTopup = "esimTopup",
  ClaimedFromPool = "claimedFromPool",
  PaidFeeForOtherWallet = "paidFeeForOtherWallet",
  FeePaidByOtherWallet = "feePaidByOtherWallet",
  WrongAsset = "wrongAsset",
  ClaimedUnassigned = "claimedUnassigned",
}

/** @format  */
export enum WalletTransactionStatus {
  Unknown = "unknown",
  Created = "created",
  Pending = "pending",
  Processing = "processing",
  Completed = "completed",
  Expired = "expired",
  Failed = "failed",
  ConfirmedOnBlockchain = "confirmedOnBlockchain",
  PendingReceive = "pendingReceive",
  FailedOnBlockchain = "failedOnBlockchain",
  Cancelled = "cancelled",
  Rejected = "rejected",
}

/** @format  */
export enum WalletTransactionType {
  Unknown = "unknown",
  InternalReceive = "internalReceive",
  UtxoExternalReceive = "utxoExternalReceive",
  AccountBasedExternalReceive = "accountBasedExternalReceive",
  ExternalSpend = "externalSpend",
  InternalSpend = "internalSpend",
  SameUserSpend = "sameUserSpend",
  SameUserReceive = "sameUserReceive",
  AccountBasedExternalTokenReceive = "accountBasedExternalTokenReceive",
  AccountBasedTokenSpend = "accountBasedTokenSpend",
  Conversion = "conversion",
  Compensation = "compensation",
  Sweeping = "sweeping",
  SweepingFunding = "sweepingFunding",
  MigratedAddressUtxoExternalReceive = "migratedAddressUtxoExternalReceive",
  MigratedAddressAccountBasedExternalReceive = "migratedAddressAccountBasedExternalReceive",
  MigratedAddressAccountBasedExternalTokenReceive = "migratedAddressAccountBasedExternalTokenReceive",
  AutoSweeping = "autoSweeping",
  ReceiveTestFundsFromPool = "receiveTestFundsFromPool",
  ReturnTestFundsToPool = "returnTestFundsToPool",
}

/** @format  */
export enum WalletType {
  SingleSigCryptoWallet = "singleSigCryptoWallet",
}

/** Information about merchant wallet consolidation (sending funds to the main wallet) */
export interface WalletsConsolidationRequestDto {
  wallets?: WalletConsolidationRequestDto[] | null;
}

/** The response to a request to spend funds from a wallet */
export interface WithdrawalFromCoinChange2FaRequestDto {
  /** 2fa token */
  otp?: string | null;
  /** additional validation token that must be sent up with the signed request */
  spendRequestToken?: string | null;
}

export interface WithdrawalFromCoinChangeRequestDto {
  amount?: string | null;
}

/** The response to a request to spend funds from a wallet */
export interface WithdrawalFromCoinChangeResponseDto {
  /** additional validation token that must be sent up with the signed request */
  spendRequestToken?: string | null;
}

export namespace Api {
  /**
   * No description
   * @tags Currencies
   * @name GetV1CurrenciesLimitsByFromCurrencyIdToCurrencyId
   * @summary Supports Auth methods: Anonymous
   * @request GET:/api/v1/currencies/limits/{fromCurrencyId}/{toCurrencyId}
   */
  export namespace GetV1CurrenciesLimitsByFromCurrencyIdToCurrencyId {
    export type RequestParams = {
      fromCurrencyId: string;
      toCurrencyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = LimitsResponse;
  }

  /**
   * @description Returns a page of the supported currencies on the CoinPayments.net platform, by default ordered by their rank on CoinPayments.net.
   * @tags Currencies
   * @name GetV1Currencies
   * @summary lists platform supported currencies and their capabilities. - Supports Auth methods: Anonymous
   * @request GET:/api/v1/currencies
   */
  export namespace GetV1Currencies {
    export type RequestParams = {};
    export type RequestQuery = {
      /** comma separated list of capabilities, currencies without the specified capabilities won't be returned */
      capabilities?: CurrencyCapability[];
      /** optional search query to find currencies with names and/or codes similar to the specified search string */
      q?: string;
      /** comma separated list of the types of currencies to return (e.g. 'coin', 'token', 'fiat', etc.).  By default currencies of all types are returned */
      types?: CurrencyType[];
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CurrencyDto[];
  }

  /**
   * No description
   * @tags Currencies
   * @name GetV1CurrenciesById
   * @summary finds a currency by its id - Supports Auth methods: Anonymous
   * @request GET:/api/v1/currencies/{id}
   */
  export namespace GetV1CurrenciesById {
    export type RequestParams = {
      /** the id of the currency to retrieve */
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CurrencyDto;
  }

  /**
   * No description
   * @tags Currencies
   * @name GetV1CurrenciesBlockchainNodesLatestBlockNumberById
   * @summary Gets the latest blockchain block number by currency - Supports Auth methods: Anonymous
   * @request GET:/api/v1/currencies/blockchain-nodes/{id}/latest-block-number
   */
  export namespace GetV1CurrenciesBlockchainNodesLatestBlockNumberById {
    export type RequestParams = {
      /** ID of the currency. */
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = BlockchainLatestBlockNumberDto;
  }

  /**
   * No description
   * @tags Currencies
   * @name GetV1CurrenciesRequiredConfirmations
   * @summary Gets the required confirmations for each currency - Supports Auth methods: Anonymous
   * @request GET:/api/v1/currencies/required-confirmations
   */
  export namespace GetV1CurrenciesRequiredConfirmations {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = RequiredConfirmationDto[];
  }

  /**
   * No description
   * @tags Currencies
   * @name GetV1CurrenciesLogoById
   * @summary Retrieves the currency icon - Supports Auth methods: Anonymous
   * @request GET:/api/v1/currencies/{id}/logo
   */
  export namespace GetV1CurrenciesLogoById {
    export type RequestParams = {
      /** Id of a currency in format {CurrencyId} or {CurrencyId}_{SmartContractAddress} */
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
   * No description
   * @tags Currencies
   * @name GetV1CurrenciesLogosvgById
   * @summary Retrieves the currency icon as svg - Supports Auth methods: Anonymous
   * @request GET:/api/v1/currencies/{id}/logosvg
   */
  export namespace GetV1CurrenciesLogosvgById {
    export type RequestParams = {
      /** Id of a currency in format {CurrencyId} or {CurrencyId}_{SmartContractAddress} */
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
   * No description
   * @tags Currencies
   * @name GetV1CurrenciesConversions
   * @summary gets a list of all possible currency conversions - Supports Auth methods: Anonymous
   * @request GET:/api/v1/currencies/conversions
   */
  export namespace GetV1CurrenciesConversions {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CurrencyConversion[];
  }

  /**
   * No description
   * @tags Fee
   * @name GetV1FeesBlockchainByCurrency
   * @summary Supports Auth methods: Anonymous
   * @request GET:/api/v1/fees/blockchain/{currency}
   */
  export namespace GetV1FeesBlockchainByCurrency {
    export type RequestParams = {
      currency: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
   * No description
   * @tags Invoices
   * @name PutV1InvoicesById
   * @summary Updates the buyer information on an invoice, if it was requested by the merchant - Supports Auth methods: Anonymous
   * @request PUT:/api/v1/invoices/{id}
   */
  export namespace PutV1InvoicesById {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = UpdateInvoiceBuyerInfoRequestDto;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
   * No description
   * @tags Invoices
   * @name GetV1InvoicesPaymentCurrenciesStatusByIdCurrencyId
   * @summary Supports Auth methods: Anonymous
   * @request GET:/api/v1/invoices/{id}/payment-currencies/{currencyId}/status
   */
  export namespace GetV1InvoicesPaymentCurrenciesStatusByIdCurrencyId {
    export type RequestParams = {
      currencyId: string;
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = InvoiceStatusDto;
  }

  /**
   * No description
   * @tags Invoices
   * @name GetV1InvoicesPaymentCurrenciesByIdCurrencyId
   * @summary Supports Auth methods: Anonymous
   * @request GET:/api/v1/invoices/{id}/payment-currencies/{currencyId}
   */
  export namespace GetV1InvoicesPaymentCurrenciesByIdCurrencyId {
    export type RequestParams = {
      currencyId: string;
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = InvoicePaymentCurrencyPaymentDetailsDto;
  }

  /**
   * No description
   * @tags MerchantClients
   * @name GetV1MerchantClientsIp
   * @summary Returns IP of the current user - Supports Auth methods: Anonymous
   * @request GET:/api/v1/merchant/clients/ip
   */
  export namespace GetV1MerchantClientsIp {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = string;
  }

  /**
   * No description
   * @tags MerchantClients
   * @name GetV1MerchantClientsWebhooksByClientId
   * @summary List all of the webhooks for a particular client - Supports Auth methods: [ OAuth, clientId/secret ]
   * @request GET:/api/v1/merchant/clients/{clientId}/webhooks
   */
  export namespace GetV1MerchantClientsWebhooksByClientId {
    export type RequestParams = {
      clientId: string;
    };
    export type RequestQuery = {
      /** The notification types for a webhook */
      type?: MerchantClientWebhookNotification;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MerchantClientWebhookEndpointsDto;
  }

  /**
   * No description
   * @tags MerchantClients
   * @name PostV1MerchantClientsWebhooksByClientId
   * @summary Create a new webhook for a client - Supports Auth methods: [ OAuth, clientId/secret ]
   * @request POST:/api/v1/merchant/clients/{clientId}/webhooks
   */
  export namespace PostV1MerchantClientsWebhooksByClientId {
    export type RequestParams = {
      /** The public ID of a client */
      clientId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = CreateMerchantClientWebhookRequestDto;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
   * No description
   * @tags MerchantClients
   * @name PutV1MerchantClientsWebhooksByClientIdWebhookId
   * @summary Update an existing webhook for a client - Supports Auth methods: [ OAuth, clientId/secret ]
   * @request PUT:/api/v1/merchant/clients/{clientId}/webhooks/{webhookId}
   */
  export namespace PutV1MerchantClientsWebhooksByClientIdWebhookId {
    export type RequestParams = {
      /** The public ID of a client */
      clientId: string;
      webhookId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = UpdateMerchantClientWebhookDto;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
   * No description
   * @tags MerchantClients
   * @name DeleteV1MerchantClientsWebhooksByClientIdWebhookId
   * @summary Delete a webhook for a client - Supports Auth methods: [ OAuth, clientId/secret ]
   * @request DELETE:/api/v1/merchant/clients/{clientId}/webhooks/{webhookId}
   */
  export namespace DeleteV1MerchantClientsWebhooksByClientIdWebhookId {
    export type RequestParams = {
      /** the public ID of a client */
      clientId: string;
      webhookId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
   * No description
   * @tags MerchantInvoices
   * @name PostV1MerchantInvoicesBuyNowButton
   * @summary Creates payment button code for the specified invoice - Supports Auth methods: [ OAuth, clientId/secret ]
   * @request POST:/api/v1/merchant/invoices/buy-now-button
   */
  export namespace PostV1MerchantInvoicesBuyNowButton {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateMerchantInvoiceBuyNowButtonHtmlRequestDto;
    export type RequestHeaders = {};
    export type ResponseBody = string;
  }

  /**
   * No description
   * @tags MerchantInvoices
   * @name GetV1MerchantInvoices
   * @summary Get a list of the current merchant's invoices - Supports Auth methods: [ OAuth, clientId/secret ]
   * @request GET:/api/v1/merchant/invoices
   */
  export namespace GetV1MerchantInvoices {
    export type RequestParams = {};
    export type RequestQuery = {
      after?: string;
      /**
       * optional query to fetch from and including the time specified up to the current time
       * @format date-time
       */
      from?: string;
      /** optional integration by which the invoice was created */
      integration?: string;
      /** @format int32 */
      limit?: number;
      /** optional query to filter the invoices by the wallet they were paid out to (for 'paid' and 'completed' invoices) */
      payoutWalletId?: string;
      /** optional search string to find invoices with these words */
      q?: string;
      /** optional query to fetch invoices that were created with the specific client */
      status?: InvoiceStatus;
      /**
       * optional query to fetch all invoices up to and including the specified time
       * @format date-time
       */
      to?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MerchantInvoiceSummariesDto;
  }

  /**
   * No description
   * @tags MerchantInvoices
   * @name PostV1MerchantInvoices
   * @summary Creates a new invoice - Supports Auth methods: [ OAuth, clientId/secret ]
   * @request POST:/api/v1/merchant/invoices
   */
  export namespace PostV1MerchantInvoices {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateInvoicePaymentWithCurrencyRequestDtoCreateMerchantInvoiceRequestDto;
    export type RequestHeaders = {};
    export type ResponseBody = CreateMerchantInvoiceResponseDto;
  }

  /**
   * No description
   * @tags MerchantInvoices
   * @name GetV1MerchantInvoicesById
   * @summary Find invoice belonging to merchant by the invoice ID - Supports Auth methods: [ OAuth, clientId/secret ]
   * @request GET:/api/v1/merchant/invoices/{id}
   */
  export namespace GetV1MerchantInvoicesById {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {
      /** @default false */
      include_full_details?: boolean;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = InvoiceModel;
  }

  /**
   * No description
   * @tags MerchantInvoices
   * @name GetV1MerchantInvoicesHistoryById
   * @summary Lists the history events of an invoice by the invoice ID - Supports Auth methods: [ OAuth, clientId/secret ]
   * @request GET:/api/v1/merchant/invoices/{id}/history
   */
  export namespace GetV1MerchantInvoicesHistoryById {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = InvoiceHistoryEventDtoPagedItemsDto;
  }

  /**
   * No description
   * @tags MerchantInvoices
   * @name PutV1MerchantInvoicesPayoutConfigById
   * @summary Supports Auth methods: [ OAuth, clientId/secret ]
   * @request PUT:/api/v1/merchant/invoices/{id}/payout-config
   */
  export namespace PutV1MerchantInvoicesPayoutConfigById {
    export type RequestParams = {
      /** @format uuid */
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = InvoicePayoutConfigDto;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
 * No description
 * @tags MerchantInvoices
 * @name GetV1MerchantInvoicesPayoutsById
 * @summary Get payout details for an invoice, including if invoice has been fully paid out, the exact amount they will receive
and in what currency, which address payout will be deposited, and who (Buyer) performed the payment. - Supports Auth methods: [ OAuth, clientId/secret ]
 * @request GET:/api/v1/merchant/invoices/{id}/payouts
*/
  export namespace GetV1MerchantInvoicesPayoutsById {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = InvoicePayoutsDetailsDto;
  }

  /**
   * No description
   * @tags MerchantInvoicesV2
   * @name PostV2MerchantInvoices
   * @summary Supports Auth methods: [ OAuth, clientId/secret ]
   * @request POST:/api/v2/merchant/invoices
   */
  export namespace PostV2MerchantInvoices {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateInvoicePaymentWithCurrencyRequestDtoCreateMerchantInvoiceRequestV2Dto;
    export type RequestHeaders = {};
    export type ResponseBody = CreateMerchantInvoiceResponseDto;
  }

  /**
   * No description
   * @tags MerchantInvoicesV2
   * @name PostV2MerchantInvoicesBuyNowButton
   * @summary Creates payment button code for the specified invoice - Supports Auth methods: [ OAuth, clientId/secret ]
   * @request POST:/api/v2/merchant/invoices/buy-now-button
   */
  export namespace PostV2MerchantInvoicesBuyNowButton {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateMerchantInvoiceBuyNowButtonHtmlRequestV2Dto;
    export type RequestHeaders = {};
    export type ResponseBody = string;
  }

  /**
   * @description If WebhookUrl field of the body is specified than the following requests will be sent to the provided URL (Maximum 5 attempts with 5 seconds timeout for a single request and 1 second delay between retries) All keys and values of the webhook payloads are strings. Sample of data being sent when funds are received: { "walletId" : "58f78b24-1de0-42b3-9a48-94f3e9c57752", "address" : "3HX4jDA4ESQahmE9w448TKUQiF786paVBT", "transactionId" : "f8ea1354-b3c9-470f-af09-c2ba96f2e391", "transactionType" : "UtxoExternalReceive", "amount" : "1.5", "symbol" : "BTC", }
   * @tags MerchantWallets
   * @name PostV1MerchantWallets
   * @summary Creates a new merchant wallet - Supports Auth methods: [ OAuth, clientId/secret ]
   * @request POST:/api/v1/merchant/wallets
   */
  export namespace PostV1MerchantWallets {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = NewWalletRequestDto;
    export type RequestHeaders = {};
    export type ResponseBody = NewWalletResponseDto;
  }

  /**
   * No description
   * @tags MerchantWallets
   * @name GetV1MerchantWallets
   * @summary Lists all merchant client wallets - Supports Auth methods: [ OAuth, clientId/secret ]
   * @request GET:/api/v1/merchant/wallets
   */
  export namespace GetV1MerchantWallets {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = WalletDto[];
  }

  /**
   * No description
   * @tags MerchantWallets
   * @name GetV1MerchantWalletsByWalletIdStr
   * @summary Finds a merchant client wallet by id - Supports Auth methods: [ OAuth, clientId/secret ]
   * @request GET:/api/v1/merchant/wallets/{walletIdStr}
   */
  export namespace GetV1MerchantWalletsByWalletIdStr {
    export type RequestParams = {
      /** the id of the wallet */
      walletIdStr: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = WalletDto;
  }

  /**
   * No description
   * @tags MerchantWallets
   * @name GetV1MerchantWalletsTransactionsByWalletIdStr
   * @summary Lists transactions of the wallet - Supports Auth methods: [ OAuth, clientId/secret ]
   * @request GET:/api/v1/merchant/wallets/{walletIdStr}/transactions
   */
  export namespace GetV1MerchantWalletsTransactionsByWalletIdStr {
    export type RequestParams = {
      /** the id of the wallet */
      walletIdStr: string;
    };
    export type RequestQuery = {
      /**
       * How may transaction to skip (used for paging)
       * @format int32
       */
      skip?: number;
      /**
       * How may transaction to take (used for paging)
       * @format int32
       */
      take?: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = WalletTransactionDto[];
  }

  /**
   * No description
   * @tags MerchantWallets
   * @name GetV1MerchantWalletsTransactionByWalletIdStr
   * @summary Get a specific transaction of the wallet, if transactionId is specified for search then the spendRequestId is ignored otherwise a first spending transaction with matching spendRequestId is returned - Supports Auth methods: [ OAuth, clientId/secret ]
   * @request GET:/api/v1/merchant/wallets/{walletIdStr}/transaction
   */
  export namespace GetV1MerchantWalletsTransactionByWalletIdStr {
    export type RequestParams = {
      /** the id of the wallet */
      walletIdStr: string;
    };
    export type RequestQuery = {
      /** SpendRequestId of the transaction to look for */
      spendRequestId?: string;
      /** Id of the transaction to look for */
      transactionId?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = WalletTransactionDto;
  }

  /**
   * No description
   * @tags MerchantWallets
   * @name GetV1MerchantWalletsAddressesByWalletIdStr
   * @summary Lists all merchant addresses of a specific wallet by the wallet Id - Supports Auth methods: [ OAuth, clientId/secret ]
   * @request GET:/api/v1/merchant/wallets/{walletIdStr}/addresses
   */
  export namespace GetV1MerchantWalletsAddressesByWalletIdStr {
    export type RequestParams = {
      walletIdStr: string;
    };
    export type RequestQuery = {
      /** @format int32 */
      skip?: number;
      /** @format int32 */
      take?: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = WalletAddressDto[];
  }

  /**
   * No description
   * @tags MerchantWallets
   * @name PostV1MerchantWalletsAddressesByWalletIdStr
   * @summary Creates an address under a wallet by the wallet ID - Supports Auth methods: [ OAuth, clientId/secret ]
   * @request POST:/api/v1/merchant/wallets/{walletIdStr}/addresses
   */
  export namespace PostV1MerchantWalletsAddressesByWalletIdStr {
    export type RequestParams = {
      walletIdStr: string;
    };
    export type RequestQuery = {};
    export type RequestBody = CreateWalletAddressRequestDto;
    export type RequestHeaders = {};
    export type ResponseBody = CreateWalletAddressResponseDto;
  }

  /**
   * No description
   * @tags MerchantWallets
   * @name GetV1MerchantWalletsAddressesByWalletIdStrAddressIdStr
   * @summary Get a specific address by its Id and the Id of the wallet it belongs to - Supports Auth methods: [ OAuth, clientId/secret ]
   * @request GET:/api/v1/merchant/wallets/{walletIdStr}/addresses/{addressIdStr}
   */
  export namespace GetV1MerchantWalletsAddressesByWalletIdStrAddressIdStr {
    export type RequestParams = {
      addressIdStr: string;
      walletIdStr: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = WalletAddressDto;
  }

  /**
   * No description
   * @tags MerchantWallets
   * @name PutV1MerchantWalletsWebhookByWalletIdStr
   * @summary Supports Auth methods: [ OAuth, clientId/secret ]
   * @request PUT:/api/v1/merchant/wallets/{walletIdStr}/webhook
   */
  export namespace PutV1MerchantWalletsWebhookByWalletIdStr {
    export type RequestParams = {
      walletIdStr: string;
    };
    export type RequestQuery = {};
    export type RequestBody = UpdateWalletWebhookRequestDto;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
   * No description
   * @tags MerchantWallets
   * @name PutV1MerchantWalletsAddressesWebhookByWalletIdStrAddressIdStr
   * @summary Supports Auth methods: [ OAuth, clientId/secret ]
   * @request PUT:/api/v1/merchant/wallets/{walletIdStr}/addresses/{addressIdStr}/webhook
   */
  export namespace PutV1MerchantWalletsAddressesWebhookByWalletIdStrAddressIdStr {
    export type RequestParams = {
      addressIdStr: string;
      walletIdStr: string;
    };
    export type RequestQuery = {};
    export type RequestBody = UpdateWalletWebhookRequestDto;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
   * @description The Spend Request API allows users to initiate a withdrawal or a conversion transaction, supports conversions between specific tokens by providing the contract addresses of the source and target tokens. Users also have the option to override the default blockchain fee within a certain range. The receiver can either pay the blockchain fee or have it deducted from the received amount, depending on the configuration.
   * @tags MerchantWallets
   * @name PostV1MerchantWalletsSpendRequestByWalletIdStr
   * @summary Sends a request to spend funds from the merchant client wallet. Also used to convert funds between supported cryptocurrencies - Supports Auth methods: [ OAuth, clientId/secret ]
   * @request POST:/api/v1/merchant/wallets/{walletIdStr}/spend/request
   */
  export namespace PostV1MerchantWalletsSpendRequestByWalletIdStr {
    export type RequestParams = {
      /** the id of the wallet from which to spend funds from */
      walletIdStr: string;
    };
    export type RequestQuery = {};
    export type RequestBody = SpendRequestDto;
    export type RequestHeaders = {};
    export type ResponseBody = WalletSpendResponseDto;
  }

  /**
   * No description
   * @tags MerchantWallets
   * @name PostV1MerchantWalletsSpendConfirmationByWalletIdStr
   * @summary Sends a request to confirm spending funds from the merchant client wallet, Or to confirm converting funds. - Supports Auth methods: [ OAuth, clientId/secret ]
   * @request POST:/api/v1/merchant/wallets/{walletIdStr}/spend/confirmation
   */
  export namespace PostV1MerchantWalletsSpendConfirmationByWalletIdStr {
    export type RequestParams = {
      /** the id of the wallet which to spend funds from */
      walletIdStr: string;
    };
    export type RequestQuery = {};
    export type RequestBody = WalletSpendConfirmationRequestDto;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
   * No description
   * @tags MerchantWallets
   * @name GetV1MerchantWalletsConsolidationByWalletIdStr
   * @summary Returns info about merchant wallet consolidation (sending funds to the main wallet) - Supports Auth methods: [ OAuth, clientId/secret ]
   * @request GET:/api/v1/merchant/wallets/{walletIdStr}/consolidation
   */
  export namespace GetV1MerchantWalletsConsolidationByWalletIdStr {
    export type RequestParams = {
      /** the id of the wallet which will be sending funds to the main wallet */
      walletIdStr: string;
    };
    export type RequestQuery = {
      /** Comma-separated IDs of addresses for consolidation */
      addressIds?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = WalletConsolidationDto;
  }

  /**
   * No description
   * @tags MerchantWallets
   * @name PostV1MerchantWalletsConsolidationByWalletIdStrToWalletIdStr
   * @summary Returns info about merchant wallet consolidation (sending funds to the main wallet) - Supports Auth methods: [ OAuth, clientId/secret ]
   * @request POST:/api/v1/merchant/wallets/{walletIdStr}/consolidation/{toWalletIdStr}
   */
  export namespace PostV1MerchantWalletsConsolidationByWalletIdStrToWalletIdStr {
    export type RequestParams = {
      /** the id of the wallet which will be receiving funds */
      toWalletIdStr: string;
      /** the id of the wallet which will be sending funds */
      walletIdStr: string;
    };
    export type RequestQuery = {
      /** Comma-separated IDs of addresses for consolidation */
      addressIds?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = WalletConsolidationDto;
  }

  /**
   * No description
   * @tags MerchantWallets
   * @name PostV1MerchantWalletsConsolidationPreview
   * @summary Preview merchant wallets consolidation (sending funds to the main wallet) - Supports Auth methods: [ OAuth, clientId/secret ]
   * @request POST:/api/v1/merchant/wallets/consolidation-preview
   */
  export namespace PostV1MerchantWalletsConsolidationPreview {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = WalletsConsolidationRequestDto;
    export type RequestHeaders = {};
    export type ResponseBody = WalletConsolidationDto;
  }

  /**
   * No description
   * @tags MerchantWallets
   * @name PostV1MerchantWalletsConsolidationByToWalletIdStr
   * @summary Execute merchant wallets consolidation (sending funds to the main wallet) - Supports Auth methods: [ OAuth, clientId/secret ]
   * @request POST:/api/v1/merchant/wallets/consolidation/{toWalletIdStr}
   */
  export namespace PostV1MerchantWalletsConsolidationByToWalletIdStr {
    export type RequestParams = {
      toWalletIdStr: string;
    };
    export type RequestQuery = {};
    export type RequestBody = WalletsConsolidationRequestDto;
    export type RequestHeaders = {};
    export type ResponseBody = WalletConsolidationDto;
  }

  /**
   * @description Returns the currency conversion rates for the specified `from` currencies converted to the specified `to` currencies
   * @tags Rates
   * @name GetV1Rates
   * @summary lists the current conversion rates between currencies - Supports Auth methods: Anonymous
   * @request GET:/api/v1/rates
   */
  export namespace GetV1Rates {
    export type RequestParams = {};
    export type RequestQuery = {
      /** comma separated list of currencies to use as the source for rate calculations. The allowed input format is {currencyId}:{contractAddress} */
      from?: string;
      /** comma separated list of currencies for which to retrieve conversion rates for (from the `from` currencies). The allowed input format is {currencyId}:{contractAddress} */
      to?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = RatesDto;
  }

  /**
   * No description
   * @tags SharedInvoices
   * @name GetV1SharedInvoicesBySharedInvoiceId
   * @summary Finds an invoice shared by a merchant - Supports Auth methods: Anonymous
   * @request GET:/api/v1/shared-invoices/{sharedInvoiceId}
   */
  export namespace GetV1SharedInvoicesBySharedInvoiceId {
    export type RequestParams = {
      sharedInvoiceId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
   * No description
   * @tags User
   * @name PostV1UserAccesstoken
   * @summary Retrieves an access token for a given user - Supports Auth methods: Anonymous
   * @request POST:/api/v1/user/accesstoken
   */
  export namespace PostV1UserAccesstoken {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetAccessTokenRequestDto;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
   * No description
   * @tags UserMigrations
   * @name PostV1UserMigrationsMigration
   * @summary Supports Auth methods: [ OAuth, clientId/secret ]
   * @request POST:/api/v1/user-migrations/migration
   */
  export namespace PostV1UserMigrationsMigration {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = MigrateCpsPhpUserRequestDto;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
   * No description
   * @tags UserMigrations
   * @name GetV1UserMigrationsMigrationByUserId
   * @summary Supports Auth methods: [ OAuth, clientId/secret ]
   * @request GET:/api/v1/user-migrations/{userId}/migration
   */
  export namespace GetV1UserMigrationsMigrationByUserId {
    export type RequestParams = {
      /** @format int32 */
      userId: number;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
   * No description
   * @tags UserMigrations
   * @name PostV1UserMigrationsMigrationPassword
   * @summary Supports Auth methods: [ OAuth, clientId/secret ]
   * @request POST:/api/v1/user-migrations/migration-password
   */
  export namespace PostV1UserMigrationsMigrationPassword {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ChangeMigratedCpsPhpUserPasswordRequestDto;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
   * No description
   * @tags UserMigrations
   * @name PostV1UserMigrationsMigrationEmail
   * @summary Supports Auth methods: [ OAuth, clientId/secret ]
   * @request POST:/api/v1/user-migrations/migration-email
   */
  export namespace PostV1UserMigrationsMigrationEmail {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ChangeMigratedCpsPhpUserEmailRequestDto;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
   * No description
   * @tags UserMigrations
   * @name GetV1UserMigrationsMigrationEmailByUserId
   * @summary Supports Auth methods: [ OAuth, clientId/secret ]
   * @request GET:/api/v1/user-migrations/{userId}/migration-email
   */
  export namespace GetV1UserMigrationsMigrationEmailByUserId {
    export type RequestParams = {
      /** @format int32 */
      userId: number;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
   * No description
   * @tags UserMigrations
   * @name PostV1UserMigrationsMigrationTotp
   * @summary Supports Auth methods: [ OAuth, clientId/secret ]
   * @request POST:/api/v1/user-migrations/migration-totp
   */
  export namespace PostV1UserMigrationsMigrationTotp {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = SetTotp2FaForMigratedCpsPhpUserRequestDto;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
   * No description
   * @tags UserMigrations
   * @name GetV1UserMigrationsMigrationTotpByUserId
   * @summary Supports Auth methods: [ OAuth, clientId/secret ]
   * @request GET:/api/v1/user-migrations/{userId}/migration-totp
   */
  export namespace GetV1UserMigrationsMigrationTotpByUserId {
    export type RequestParams = {
      /** @format int32 */
      userId: number;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
   * No description
   * @tags UserMigrations
   * @name PostV1UserMigrationsMigrationTwoFactorAuth
   * @summary Supports Auth methods: [ OAuth, clientId/secret ]
   * @request POST:/api/v1/user-migrations/migration-two-factor-auth
   */
  export namespace PostV1UserMigrationsMigrationTwoFactorAuth {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = SetTwoFactorAuthenticationRequestDto;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
   * No description
   * @tags UserMigrations
   * @name GetV1UserMigrationsMigrationTwoFactorAuthByUserId
   * @summary Supports Auth methods: [ OAuth, clientId/secret ]
   * @request GET:/api/v1/user-migrations/{userId}/migration-two-factor-auth
   */
  export namespace GetV1UserMigrationsMigrationTwoFactorAuthByUserId {
    export type RequestParams = {
      /** @format int32 */
      userId: number;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
   * No description
   * @tags UserMigrations
   * @name PostV1UserMigrationsMigrationAccesstoken
   * @summary Supports Auth methods: [ OAuth, clientId/secret ]
   * @request POST:/api/v1/user-migrations/migration-accesstoken
   */
  export namespace PostV1UserMigrationsMigrationAccesstoken {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetAccessTokenForMigratedCpsPhpUserRequestDto;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
}

import * as crypto from "crypto";

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  customFetch?: typeof fetch;
  clientId?: string;
  clientSecret?: string;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient {
  public baseUrl: string = "";
  private clientId?: string;
  private clientSecret?: string;
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig = {}) {
    Object.assign(this, apiConfig);
  }

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.Text]: (input: any) => (input !== null && typeof input !== "string" ? JSON.stringify(input) : input),
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
              ? JSON.stringify(property)
              : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const formattedPayload = typeof body === "undefined" || body === null ? null : payloadFormatter(body);
    const url = `${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`;

    const extraHeaders = {};
    if (this.clientId && this.clientSecret) {
      const date = new Date().toISOString().split(".")[0];
      const sign =
        params.method === "GET"
          ? `\ufeff${params.method}${url}${this.clientId}${date}`
          : `\ufeff${params.method}${url}${this.clientId}${date}${formattedPayload}`;
      const signature = crypto.createHmac("sha256", this.clientSecret).update(sign).digest("base64");
      extraHeaders["X-CoinPayments-Client"] = this.clientId;
      extraHeaders["X-CoinPayments-Timestamp"] = date;
      extraHeaders["X-CoinPayments-Signature"] = signature;
    }

    return this.customFetch(url, {
      ...params,
      headers: {
        ...(params.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...extraHeaders,
      },
      signal: (cancelToken ? this.createAbortSignal(cancelToken) : params.signal) || null,
      body: formattedPayload,
    }).then(async (response) => {
      const r = response.clone() as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !format
        ? r
        : await response[format || ContentType.Json]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title CoinPayments API
 * @version v1
 *
 * CoinPayments Backend API.
 */
export class Api {
  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  api = {
    /**
     * No description
     *
     * @tags Currencies
     * @name GetV1CurrenciesLimitsByFromCurrencyIdToCurrencyId
     * @summary Supports Auth methods: Anonymous
     * @request GET:/api/v1/currencies/limits/{fromCurrencyId}/{toCurrencyId}
     */
    getV1CurrenciesLimitsByFromCurrencyIdToCurrencyId: (
      fromCurrencyId: string,
      toCurrencyId: string,
      params: RequestParams = {},
    ) =>
      this.http.request<LimitsResponse, any>({
        path: `/api/v1/currencies/limits/${fromCurrencyId}/${toCurrencyId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a page of the supported currencies on the CoinPayments.net platform, by default ordered by their rank on CoinPayments.net.
     *
     * @tags Currencies
     * @name GetV1Currencies
     * @summary lists platform supported currencies and their capabilities. - Supports Auth methods: Anonymous
     * @request GET:/api/v1/currencies
     */
    getV1Currencies: (
      query?: {
        /** comma separated list of capabilities, currencies without the specified capabilities won't be returned */
        capabilities?: CurrencyCapability[];
        /** optional search query to find currencies with names and/or codes similar to the specified search string */
        q?: string;
        /** comma separated list of the types of currencies to return (e.g. 'coin', 'token', 'fiat', etc.).  By default currencies of all types are returned */
        types?: CurrencyType[];
      },
      params: RequestParams = {},
    ) =>
      this.http.request<CurrencyDto[], any>({
        path: `/api/v1/currencies`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Currencies
     * @name GetV1CurrenciesById
     * @summary finds a currency by its id - Supports Auth methods: Anonymous
     * @request GET:/api/v1/currencies/{id}
     */
    getV1CurrenciesById: (id: string, params: RequestParams = {}) =>
      this.http.request<CurrencyDto, any>({
        path: `/api/v1/currencies/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Currencies
     * @name GetV1CurrenciesBlockchainNodesLatestBlockNumberById
     * @summary Gets the latest blockchain block number by currency - Supports Auth methods: Anonymous
     * @request GET:/api/v1/currencies/blockchain-nodes/{id}/latest-block-number
     */
    getV1CurrenciesBlockchainNodesLatestBlockNumberById: (id: string, params: RequestParams = {}) =>
      this.http.request<BlockchainLatestBlockNumberDto, any>({
        path: `/api/v1/currencies/blockchain-nodes/${id}/latest-block-number`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Currencies
     * @name GetV1CurrenciesRequiredConfirmations
     * @summary Gets the required confirmations for each currency - Supports Auth methods: Anonymous
     * @request GET:/api/v1/currencies/required-confirmations
     */
    getV1CurrenciesRequiredConfirmations: (params: RequestParams = {}) =>
      this.http.request<RequiredConfirmationDto[], any>({
        path: `/api/v1/currencies/required-confirmations`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Currencies
     * @name GetV1CurrenciesLogoById
     * @summary Retrieves the currency icon - Supports Auth methods: Anonymous
     * @request GET:/api/v1/currencies/{id}/logo
     */
    getV1CurrenciesLogoById: (id: string, params: RequestParams = {}) =>
      this.http.request<void, any>({
        path: `/api/v1/currencies/${id}/logo`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Currencies
     * @name GetV1CurrenciesLogosvgById
     * @summary Retrieves the currency icon as svg - Supports Auth methods: Anonymous
     * @request GET:/api/v1/currencies/{id}/logosvg
     */
    getV1CurrenciesLogosvgById: (id: string, params: RequestParams = {}) =>
      this.http.request<void, any>({
        path: `/api/v1/currencies/${id}/logosvg`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Currencies
     * @name GetV1CurrenciesConversions
     * @summary gets a list of all possible currency conversions - Supports Auth methods: Anonymous
     * @request GET:/api/v1/currencies/conversions
     */
    getV1CurrenciesConversions: (params: RequestParams = {}) =>
      this.http.request<CurrencyConversion[], any>({
        path: `/api/v1/currencies/conversions`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Fee
     * @name GetV1FeesBlockchainByCurrency
     * @summary Supports Auth methods: Anonymous
     * @request GET:/api/v1/fees/blockchain/{currency}
     */
    getV1FeesBlockchainByCurrency: (currency: string, params: RequestParams = {}) =>
      this.http.request<void, void>({
        path: `/api/v1/fees/blockchain/${currency}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Invoices
     * @name PutV1InvoicesById
     * @summary Updates the buyer information on an invoice, if it was requested by the merchant - Supports Auth methods: Anonymous
     * @request PUT:/api/v1/invoices/{id}
     */
    putV1InvoicesById: (id: string, data: UpdateInvoiceBuyerInfoRequestDto, params: RequestParams = {}) =>
      this.http.request<void, void>({
        path: `/api/v1/invoices/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Invoices
     * @name GetV1InvoicesPaymentCurrenciesStatusByIdCurrencyId
     * @summary Supports Auth methods: Anonymous
     * @request GET:/api/v1/invoices/{id}/payment-currencies/{currencyId}/status
     */
    getV1InvoicesPaymentCurrenciesStatusByIdCurrencyId: (id: string, currencyId: string, params: RequestParams = {}) =>
      this.http.request<InvoiceStatusDto, void>({
        path: `/api/v1/invoices/${id}/payment-currencies/${currencyId}/status`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Invoices
     * @name GetV1InvoicesPaymentCurrenciesByIdCurrencyId
     * @summary Supports Auth methods: Anonymous
     * @request GET:/api/v1/invoices/{id}/payment-currencies/{currencyId}
     */
    getV1InvoicesPaymentCurrenciesByIdCurrencyId: (id: string, currencyId: string, params: RequestParams = {}) =>
      this.http.request<InvoicePaymentCurrencyPaymentDetailsDto, void>({
        path: `/api/v1/invoices/${id}/payment-currencies/${currencyId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MerchantClients
     * @name GetV1MerchantClientsIp
     * @summary Returns IP of the current user - Supports Auth methods: Anonymous
     * @request GET:/api/v1/merchant/clients/ip
     */
    getV1MerchantClientsIp: (params: RequestParams = {}) =>
      this.http.request<string, any>({
        path: `/api/v1/merchant/clients/ip`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MerchantClients
     * @name GetV1MerchantClientsWebhooksByClientId
     * @summary List all of the webhooks for a particular client - Supports Auth methods: [ OAuth, clientId/secret ]
     * @request GET:/api/v1/merchant/clients/{clientId}/webhooks
     */
    getV1MerchantClientsWebhooksByClientId: (
      clientId: string,
      query?: {
        /** The notification types for a webhook */
        type?: MerchantClientWebhookNotification;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<MerchantClientWebhookEndpointsDto, void>({
        path: `/api/v1/merchant/clients/${clientId}/webhooks`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MerchantClients
     * @name PostV1MerchantClientsWebhooksByClientId
     * @summary Create a new webhook for a client - Supports Auth methods: [ OAuth, clientId/secret ]
     * @request POST:/api/v1/merchant/clients/{clientId}/webhooks
     */
    postV1MerchantClientsWebhooksByClientId: (
      clientId: string,
      data: CreateMerchantClientWebhookRequestDto,
      params: RequestParams = {},
    ) =>
      this.http.request<void, void>({
        path: `/api/v1/merchant/clients/${clientId}/webhooks`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags MerchantClients
     * @name PutV1MerchantClientsWebhooksByClientIdWebhookId
     * @summary Update an existing webhook for a client - Supports Auth methods: [ OAuth, clientId/secret ]
     * @request PUT:/api/v1/merchant/clients/{clientId}/webhooks/{webhookId}
     */
    putV1MerchantClientsWebhooksByClientIdWebhookId: (
      clientId: string,
      webhookId: string,
      data: UpdateMerchantClientWebhookDto,
      params: RequestParams = {},
    ) =>
      this.http.request<void, void>({
        path: `/api/v1/merchant/clients/${clientId}/webhooks/${webhookId}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags MerchantClients
     * @name DeleteV1MerchantClientsWebhooksByClientIdWebhookId
     * @summary Delete a webhook for a client - Supports Auth methods: [ OAuth, clientId/secret ]
     * @request DELETE:/api/v1/merchant/clients/{clientId}/webhooks/{webhookId}
     */
    deleteV1MerchantClientsWebhooksByClientIdWebhookId: (
      clientId: string,
      webhookId: string,
      params: RequestParams = {},
    ) =>
      this.http.request<void, void>({
        path: `/api/v1/merchant/clients/${clientId}/webhooks/${webhookId}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MerchantInvoices
     * @name PostV1MerchantInvoicesBuyNowButton
     * @summary Creates payment button code for the specified invoice - Supports Auth methods: [ OAuth, clientId/secret ]
     * @request POST:/api/v1/merchant/invoices/buy-now-button
     */
    postV1MerchantInvoicesBuyNowButton: (
      data: CreateMerchantInvoiceBuyNowButtonHtmlRequestDto,
      params: RequestParams = {},
    ) =>
      this.http.request<string, void>({
        path: `/api/v1/merchant/invoices/buy-now-button`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MerchantInvoices
     * @name GetV1MerchantInvoices
     * @summary Get a list of the current merchant's invoices - Supports Auth methods: [ OAuth, clientId/secret ]
     * @request GET:/api/v1/merchant/invoices
     */
    getV1MerchantInvoices: (
      query?: {
        after?: string;
        /**
         * optional query to fetch from and including the time specified up to the current time
         * @format date-time
         */
        from?: string;
        /** optional integration by which the invoice was created */
        integration?: string;
        /** @format int32 */
        limit?: number;
        /** optional query to filter the invoices by the wallet they were paid out to (for 'paid' and 'completed' invoices) */
        payoutWalletId?: string;
        /** optional search string to find invoices with these words */
        q?: string;
        /** optional query to fetch invoices that were created with the specific client */
        status?: InvoiceStatus;
        /**
         * optional query to fetch all invoices up to and including the specified time
         * @format date-time
         */
        to?: string;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<MerchantInvoiceSummariesDto, void>({
        path: `/api/v1/merchant/invoices`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MerchantInvoices
     * @name PostV1MerchantInvoices
     * @summary Creates a new invoice - Supports Auth methods: [ OAuth, clientId/secret ]
     * @request POST:/api/v1/merchant/invoices
     */
    postV1MerchantInvoices: (
      data: CreateInvoicePaymentWithCurrencyRequestDtoCreateMerchantInvoiceRequestDto,
      params: RequestParams = {},
    ) =>
      this.http.request<CreateMerchantInvoiceResponseDto, void>({
        path: `/api/v1/merchant/invoices`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MerchantInvoices
     * @name GetV1MerchantInvoicesById
     * @summary Find invoice belonging to merchant by the invoice ID - Supports Auth methods: [ OAuth, clientId/secret ]
     * @request GET:/api/v1/merchant/invoices/{id}
     */
    getV1MerchantInvoicesById: (
      id: string,
      query?: {
        /** @default false */
        include_full_details?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<InvoiceModel, void>({
        path: `/api/v1/merchant/invoices/${id}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MerchantInvoices
     * @name GetV1MerchantInvoicesHistoryById
     * @summary Lists the history events of an invoice by the invoice ID - Supports Auth methods: [ OAuth, clientId/secret ]
     * @request GET:/api/v1/merchant/invoices/{id}/history
     */
    getV1MerchantInvoicesHistoryById: (id: string, params: RequestParams = {}) =>
      this.http.request<InvoiceHistoryEventDtoPagedItemsDto, void>({
        path: `/api/v1/merchant/invoices/${id}/history`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MerchantInvoices
     * @name PutV1MerchantInvoicesPayoutConfigById
     * @summary Supports Auth methods: [ OAuth, clientId/secret ]
     * @request PUT:/api/v1/merchant/invoices/{id}/payout-config
     */
    putV1MerchantInvoicesPayoutConfigById: (id: string, data: InvoicePayoutConfigDto, params: RequestParams = {}) =>
      this.http.request<void, void | ProblemDetails>({
        path: `/api/v1/merchant/invoices/${id}/payout-config`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
 * No description
 *
 * @tags MerchantInvoices
 * @name GetV1MerchantInvoicesPayoutsById
 * @summary Get payout details for an invoice, including if invoice has been fully paid out, the exact amount they will receive
and in what currency, which address payout will be deposited, and who (Buyer) performed the payment. - Supports Auth methods: [ OAuth, clientId/secret ]
 * @request GET:/api/v1/merchant/invoices/{id}/payouts
 */
    getV1MerchantInvoicesPayoutsById: (id: string, params: RequestParams = {}) =>
      this.http.request<InvoicePayoutsDetailsDto, void>({
        path: `/api/v1/merchant/invoices/${id}/payouts`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MerchantInvoicesV2
     * @name PostV2MerchantInvoices
     * @summary Supports Auth methods: [ OAuth, clientId/secret ]
     * @request POST:/api/v2/merchant/invoices
     */
    postV2MerchantInvoices: (
      data: CreateInvoicePaymentWithCurrencyRequestDtoCreateMerchantInvoiceRequestV2Dto,
      params: RequestParams = {},
    ) =>
      this.http.request<CreateMerchantInvoiceResponseDto, void>({
        path: `/api/v2/merchant/invoices`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MerchantInvoicesV2
     * @name PostV2MerchantInvoicesBuyNowButton
     * @summary Creates payment button code for the specified invoice - Supports Auth methods: [ OAuth, clientId/secret ]
     * @request POST:/api/v2/merchant/invoices/buy-now-button
     */
    postV2MerchantInvoicesBuyNowButton: (
      data: CreateMerchantInvoiceBuyNowButtonHtmlRequestV2Dto,
      params: RequestParams = {},
    ) =>
      this.http.request<string, void>({
        path: `/api/v2/merchant/invoices/buy-now-button`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description If WebhookUrl field of the body is specified than the following requests will be sent to the provided URL (Maximum 5 attempts with 5 seconds timeout for a single request and 1 second delay between retries) All keys and values of the webhook payloads are strings. Sample of data being sent when funds are received: { "walletId" : "58f78b24-1de0-42b3-9a48-94f3e9c57752", "address" : "3HX4jDA4ESQahmE9w448TKUQiF786paVBT", "transactionId" : "f8ea1354-b3c9-470f-af09-c2ba96f2e391", "transactionType" : "UtxoExternalReceive", "amount" : "1.5", "symbol" : "BTC", }
     *
     * @tags MerchantWallets
     * @name PostV1MerchantWallets
     * @summary Creates a new merchant wallet - Supports Auth methods: [ OAuth, clientId/secret ]
     * @request POST:/api/v1/merchant/wallets
     */
    postV1MerchantWallets: (data: NewWalletRequestDto, params: RequestParams = {}) =>
      this.http.request<NewWalletResponseDto, void>({
        path: `/api/v1/merchant/wallets`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MerchantWallets
     * @name GetV1MerchantWallets
     * @summary Lists all merchant client wallets - Supports Auth methods: [ OAuth, clientId/secret ]
     * @request GET:/api/v1/merchant/wallets
     */
    getV1MerchantWallets: (params: RequestParams = {}) =>
      this.http.request<WalletDto[], void>({
        path: `/api/v1/merchant/wallets`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MerchantWallets
     * @name GetV1MerchantWalletsByWalletIdStr
     * @summary Finds a merchant client wallet by id - Supports Auth methods: [ OAuth, clientId/secret ]
     * @request GET:/api/v1/merchant/wallets/{walletIdStr}
     */
    getV1MerchantWalletsByWalletIdStr: (walletIdStr: string, params: RequestParams = {}) =>
      this.http.request<WalletDto, void>({
        path: `/api/v1/merchant/wallets/${walletIdStr}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MerchantWallets
     * @name GetV1MerchantWalletsTransactionsByWalletIdStr
     * @summary Lists transactions of the wallet - Supports Auth methods: [ OAuth, clientId/secret ]
     * @request GET:/api/v1/merchant/wallets/{walletIdStr}/transactions
     */
    getV1MerchantWalletsTransactionsByWalletIdStr: (
      walletIdStr: string,
      query?: {
        /**
         * How may transaction to skip (used for paging)
         * @format int32
         */
        skip?: number;
        /**
         * How may transaction to take (used for paging)
         * @format int32
         */
        take?: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<WalletTransactionDto[], void>({
        path: `/api/v1/merchant/wallets/${walletIdStr}/transactions`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MerchantWallets
     * @name GetV1MerchantWalletsTransactionByWalletIdStr
     * @summary Get a specific transaction of the wallet, if transactionId is specified for search then the spendRequestId is ignored otherwise a first spending transaction with matching spendRequestId is returned - Supports Auth methods: [ OAuth, clientId/secret ]
     * @request GET:/api/v1/merchant/wallets/{walletIdStr}/transaction
     */
    getV1MerchantWalletsTransactionByWalletIdStr: (
      walletIdStr: string,
      query?: {
        /** SpendRequestId of the transaction to look for */
        spendRequestId?: string;
        /** Id of the transaction to look for */
        transactionId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<WalletTransactionDto, void>({
        path: `/api/v1/merchant/wallets/${walletIdStr}/transaction`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MerchantWallets
     * @name GetV1MerchantWalletsAddressesByWalletIdStr
     * @summary Lists all merchant addresses of a specific wallet by the wallet Id - Supports Auth methods: [ OAuth, clientId/secret ]
     * @request GET:/api/v1/merchant/wallets/{walletIdStr}/addresses
     */
    getV1MerchantWalletsAddressesByWalletIdStr: (
      walletIdStr: string,
      query?: {
        /** @format int32 */
        skip?: number;
        /** @format int32 */
        take?: number;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<WalletAddressDto[], void>({
        path: `/api/v1/merchant/wallets/${walletIdStr}/addresses`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MerchantWallets
     * @name PostV1MerchantWalletsAddressesByWalletIdStr
     * @summary Creates an address under a wallet by the wallet ID - Supports Auth methods: [ OAuth, clientId/secret ]
     * @request POST:/api/v1/merchant/wallets/{walletIdStr}/addresses
     */
    postV1MerchantWalletsAddressesByWalletIdStr: (
      walletIdStr: string,
      data: CreateWalletAddressRequestDto,
      params: RequestParams = {},
    ) =>
      this.http.request<CreateWalletAddressResponseDto, void>({
        path: `/api/v1/merchant/wallets/${walletIdStr}/addresses`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MerchantWallets
     * @name GetV1MerchantWalletsAddressesByWalletIdStrAddressIdStr
     * @summary Get a specific address by its Id and the Id of the wallet it belongs to - Supports Auth methods: [ OAuth, clientId/secret ]
     * @request GET:/api/v1/merchant/wallets/{walletIdStr}/addresses/{addressIdStr}
     */
    getV1MerchantWalletsAddressesByWalletIdStrAddressIdStr: (
      walletIdStr: string,
      addressIdStr: string,
      params: RequestParams = {},
    ) =>
      this.http.request<WalletAddressDto, void>({
        path: `/api/v1/merchant/wallets/${walletIdStr}/addresses/${addressIdStr}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MerchantWallets
     * @name PutV1MerchantWalletsWebhookByWalletIdStr
     * @summary Supports Auth methods: [ OAuth, clientId/secret ]
     * @request PUT:/api/v1/merchant/wallets/{walletIdStr}/webhook
     */
    putV1MerchantWalletsWebhookByWalletIdStr: (
      walletIdStr: string,
      data: UpdateWalletWebhookRequestDto,
      params: RequestParams = {},
    ) =>
      this.http.request<void, void>({
        path: `/api/v1/merchant/wallets/${walletIdStr}/webhook`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags MerchantWallets
     * @name PutV1MerchantWalletsAddressesWebhookByWalletIdStrAddressIdStr
     * @summary Supports Auth methods: [ OAuth, clientId/secret ]
     * @request PUT:/api/v1/merchant/wallets/{walletIdStr}/addresses/{addressIdStr}/webhook
     */
    putV1MerchantWalletsAddressesWebhookByWalletIdStrAddressIdStr: (
      walletIdStr: string,
      addressIdStr: string,
      data: UpdateWalletWebhookRequestDto,
      params: RequestParams = {},
    ) =>
      this.http.request<void, void>({
        path: `/api/v1/merchant/wallets/${walletIdStr}/addresses/${addressIdStr}/webhook`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description The Spend Request API allows users to initiate a withdrawal or a conversion transaction, supports conversions between specific tokens by providing the contract addresses of the source and target tokens. Users also have the option to override the default blockchain fee within a certain range. The receiver can either pay the blockchain fee or have it deducted from the received amount, depending on the configuration.
     *
     * @tags MerchantWallets
     * @name PostV1MerchantWalletsSpendRequestByWalletIdStr
     * @summary Sends a request to spend funds from the merchant client wallet. Also used to convert funds between supported cryptocurrencies - Supports Auth methods: [ OAuth, clientId/secret ]
     * @request POST:/api/v1/merchant/wallets/{walletIdStr}/spend/request
     */
    postV1MerchantWalletsSpendRequestByWalletIdStr: (
      walletIdStr: string,
      data: SpendRequestDto,
      params: RequestParams = {},
    ) =>
      this.http.request<WalletSpendResponseDto, void>({
        path: `/api/v1/merchant/wallets/${walletIdStr}/spend/request`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MerchantWallets
     * @name PostV1MerchantWalletsSpendConfirmationByWalletIdStr
     * @summary Sends a request to confirm spending funds from the merchant client wallet, Or to confirm converting funds. - Supports Auth methods: [ OAuth, clientId/secret ]
     * @request POST:/api/v1/merchant/wallets/{walletIdStr}/spend/confirmation
     */
    postV1MerchantWalletsSpendConfirmationByWalletIdStr: (
      walletIdStr: string,
      data: WalletSpendConfirmationRequestDto,
      params: RequestParams = {},
    ) =>
      this.http.request<void, void>({
        path: `/api/v1/merchant/wallets/${walletIdStr}/spend/confirmation`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags MerchantWallets
     * @name GetV1MerchantWalletsConsolidationByWalletIdStr
     * @summary Returns info about merchant wallet consolidation (sending funds to the main wallet) - Supports Auth methods: [ OAuth, clientId/secret ]
     * @request GET:/api/v1/merchant/wallets/{walletIdStr}/consolidation
     */
    getV1MerchantWalletsConsolidationByWalletIdStr: (
      walletIdStr: string,
      query?: {
        /** Comma-separated IDs of addresses for consolidation */
        addressIds?: string;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<WalletConsolidationDto, void>({
        path: `/api/v1/merchant/wallets/${walletIdStr}/consolidation`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MerchantWallets
     * @name PostV1MerchantWalletsConsolidationByWalletIdStrToWalletIdStr
     * @summary Returns info about merchant wallet consolidation (sending funds to the main wallet) - Supports Auth methods: [ OAuth, clientId/secret ]
     * @request POST:/api/v1/merchant/wallets/{walletIdStr}/consolidation/{toWalletIdStr}
     */
    postV1MerchantWalletsConsolidationByWalletIdStrToWalletIdStr: (
      walletIdStr: string,
      toWalletIdStr: string,
      query?: {
        /** Comma-separated IDs of addresses for consolidation */
        addressIds?: string;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<WalletConsolidationDto, void>({
        path: `/api/v1/merchant/wallets/${walletIdStr}/consolidation/${toWalletIdStr}`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MerchantWallets
     * @name PostV1MerchantWalletsConsolidationPreview
     * @summary Preview merchant wallets consolidation (sending funds to the main wallet) - Supports Auth methods: [ OAuth, clientId/secret ]
     * @request POST:/api/v1/merchant/wallets/consolidation-preview
     */
    postV1MerchantWalletsConsolidationPreview: (data: WalletsConsolidationRequestDto, params: RequestParams = {}) =>
      this.http.request<WalletConsolidationDto, void>({
        path: `/api/v1/merchant/wallets/consolidation-preview`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MerchantWallets
     * @name PostV1MerchantWalletsConsolidationByToWalletIdStr
     * @summary Execute merchant wallets consolidation (sending funds to the main wallet) - Supports Auth methods: [ OAuth, clientId/secret ]
     * @request POST:/api/v1/merchant/wallets/consolidation/{toWalletIdStr}
     */
    postV1MerchantWalletsConsolidationByToWalletIdStr: (
      toWalletIdStr: string,
      data: WalletsConsolidationRequestDto,
      params: RequestParams = {},
    ) =>
      this.http.request<WalletConsolidationDto, void>({
        path: `/api/v1/merchant/wallets/consolidation/${toWalletIdStr}`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns the currency conversion rates for the specified `from` currencies converted to the specified `to` currencies
     *
     * @tags Rates
     * @name GetV1Rates
     * @summary lists the current conversion rates between currencies - Supports Auth methods: Anonymous
     * @request GET:/api/v1/rates
     */
    getV1Rates: (
      query?: {
        /** comma separated list of currencies to use as the source for rate calculations. The allowed input format is {currencyId}:{contractAddress} */
        from?: string;
        /** comma separated list of currencies for which to retrieve conversion rates for (from the `from` currencies). The allowed input format is {currencyId}:{contractAddress} */
        to?: string;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<RatesDto, any>({
        path: `/api/v1/rates`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SharedInvoices
     * @name GetV1SharedInvoicesBySharedInvoiceId
     * @summary Finds an invoice shared by a merchant - Supports Auth methods: Anonymous
     * @request GET:/api/v1/shared-invoices/{sharedInvoiceId}
     */
    getV1SharedInvoicesBySharedInvoiceId: (sharedInvoiceId: string, params: RequestParams = {}) =>
      this.http.request<void, void>({
        path: `/api/v1/shared-invoices/${sharedInvoiceId}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name PostV1UserAccesstoken
     * @summary Retrieves an access token for a given user - Supports Auth methods: Anonymous
     * @request POST:/api/v1/user/accesstoken
     */
    postV1UserAccesstoken: (data: GetAccessTokenRequestDto, params: RequestParams = {}) =>
      this.http.request<void, any>({
        path: `/api/v1/user/accesstoken`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserMigrations
     * @name PostV1UserMigrationsMigration
     * @summary Supports Auth methods: [ OAuth, clientId/secret ]
     * @request POST:/api/v1/user-migrations/migration
     */
    postV1UserMigrationsMigration: (data: MigrateCpsPhpUserRequestDto, params: RequestParams = {}) =>
      this.http.request<void, void>({
        path: `/api/v1/user-migrations/migration`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserMigrations
     * @name GetV1UserMigrationsMigrationByUserId
     * @summary Supports Auth methods: [ OAuth, clientId/secret ]
     * @request GET:/api/v1/user-migrations/{userId}/migration
     */
    getV1UserMigrationsMigrationByUserId: (userId: number, params: RequestParams = {}) =>
      this.http.request<void, void>({
        path: `/api/v1/user-migrations/${userId}/migration`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserMigrations
     * @name PostV1UserMigrationsMigrationPassword
     * @summary Supports Auth methods: [ OAuth, clientId/secret ]
     * @request POST:/api/v1/user-migrations/migration-password
     */
    postV1UserMigrationsMigrationPassword: (
      data: ChangeMigratedCpsPhpUserPasswordRequestDto,
      params: RequestParams = {},
    ) =>
      this.http.request<void, void>({
        path: `/api/v1/user-migrations/migration-password`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserMigrations
     * @name PostV1UserMigrationsMigrationEmail
     * @summary Supports Auth methods: [ OAuth, clientId/secret ]
     * @request POST:/api/v1/user-migrations/migration-email
     */
    postV1UserMigrationsMigrationEmail: (data: ChangeMigratedCpsPhpUserEmailRequestDto, params: RequestParams = {}) =>
      this.http.request<void, void>({
        path: `/api/v1/user-migrations/migration-email`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserMigrations
     * @name GetV1UserMigrationsMigrationEmailByUserId
     * @summary Supports Auth methods: [ OAuth, clientId/secret ]
     * @request GET:/api/v1/user-migrations/{userId}/migration-email
     */
    getV1UserMigrationsMigrationEmailByUserId: (userId: number, params: RequestParams = {}) =>
      this.http.request<void, void>({
        path: `/api/v1/user-migrations/${userId}/migration-email`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserMigrations
     * @name PostV1UserMigrationsMigrationTotp
     * @summary Supports Auth methods: [ OAuth, clientId/secret ]
     * @request POST:/api/v1/user-migrations/migration-totp
     */
    postV1UserMigrationsMigrationTotp: (data: SetTotp2FaForMigratedCpsPhpUserRequestDto, params: RequestParams = {}) =>
      this.http.request<void, void>({
        path: `/api/v1/user-migrations/migration-totp`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserMigrations
     * @name GetV1UserMigrationsMigrationTotpByUserId
     * @summary Supports Auth methods: [ OAuth, clientId/secret ]
     * @request GET:/api/v1/user-migrations/{userId}/migration-totp
     */
    getV1UserMigrationsMigrationTotpByUserId: (userId: number, params: RequestParams = {}) =>
      this.http.request<void, void>({
        path: `/api/v1/user-migrations/${userId}/migration-totp`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserMigrations
     * @name PostV1UserMigrationsMigrationTwoFactorAuth
     * @summary Supports Auth methods: [ OAuth, clientId/secret ]
     * @request POST:/api/v1/user-migrations/migration-two-factor-auth
     */
    postV1UserMigrationsMigrationTwoFactorAuth: (
      data: SetTwoFactorAuthenticationRequestDto,
      params: RequestParams = {},
    ) =>
      this.http.request<void, void>({
        path: `/api/v1/user-migrations/migration-two-factor-auth`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserMigrations
     * @name GetV1UserMigrationsMigrationTwoFactorAuthByUserId
     * @summary Supports Auth methods: [ OAuth, clientId/secret ]
     * @request GET:/api/v1/user-migrations/{userId}/migration-two-factor-auth
     */
    getV1UserMigrationsMigrationTwoFactorAuthByUserId: (userId: number, params: RequestParams = {}) =>
      this.http.request<void, void>({
        path: `/api/v1/user-migrations/${userId}/migration-two-factor-auth`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserMigrations
     * @name PostV1UserMigrationsMigrationAccesstoken
     * @summary Supports Auth methods: [ OAuth, clientId/secret ]
     * @request POST:/api/v1/user-migrations/migration-accesstoken
     */
    postV1UserMigrationsMigrationAccesstoken: (
      data: GetAccessTokenForMigratedCpsPhpUserRequestDto,
      params: RequestParams = {},
    ) =>
      this.http.request<void, void>({
        path: `/api/v1/user-migrations/migration-accesstoken`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),
  };
}
