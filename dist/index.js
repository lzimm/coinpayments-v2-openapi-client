"use strict";
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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Api = exports.HttpClient = exports.ContentType = exports.WalletType = exports.WalletTransactionType = exports.WalletTransactionStatus = exports.WalletTransactionFlags = exports.UserNotificationType = exports.TwoFactorTokenProviderDto = exports.TransactionState = exports.TransactionDirection = exports.SwitcherStatus = exports.RequestFreeCurrencyResult = exports.PayoutCurrencyFrequency = exports.PaymentState = exports.PaymentPayoutModelState = exports.MerchantFields = exports.MerchantClientWebhookNotification = exports.MerchantClientPublicState = exports.MerchantClientACL = exports.LineItemType = exports.LineItemQuantityTypeDto = exports.InvoiceStatus = exports.InvoiceState = exports.InvoicePaymentSettlementModeErrorModel = exports.InvoiceFlags = exports.CurrencyType = exports.CurrencyStatus = exports.CurrencyCapability = exports.ActivityTypes = exports.ActivityItemType = exports.ActivityHistoryEventType = exports.ActivityHistoryDataType = void 0;
/** @format  */
var ActivityHistoryDataType;
(function (ActivityHistoryDataType) {
    ActivityHistoryDataType["Confirmations"] = "confirmations";
    ActivityHistoryDataType["RequiredConfirmations"] = "requiredConfirmations";
    ActivityHistoryDataType["SentTxHash"] = "sentTxHash";
    ActivityHistoryDataType["ConvertedTxHash"] = "convertedTxHash";
    ActivityHistoryDataType["CurrencyId"] = "currencyId";
})(ActivityHistoryDataType || (exports.ActivityHistoryDataType = ActivityHistoryDataType = {}));
/** @format  */
var ActivityHistoryEventType;
(function (ActivityHistoryEventType) {
    ActivityHistoryEventType["Created"] = "created";
    ActivityHistoryEventType["Pending"] = "pending";
    ActivityHistoryEventType["FundsConverted"] = "fundsConverted";
    ActivityHistoryEventType["FundsTransferred"] = "fundsTransferred";
    ActivityHistoryEventType["TimedOut"] = "timedOut";
    ActivityHistoryEventType["Cancelled"] = "cancelled";
    ActivityHistoryEventType["Scheduled"] = "scheduled";
    ActivityHistoryEventType["Completed"] = "completed";
    ActivityHistoryEventType["Confirmations"] = "confirmations";
})(ActivityHistoryEventType || (exports.ActivityHistoryEventType = ActivityHistoryEventType = {}));
/** @format  */
var ActivityItemType;
(function (ActivityItemType) {
    ActivityItemType["Transaction"] = "transaction";
    ActivityItemType["Invoice"] = "invoice";
})(ActivityItemType || (exports.ActivityItemType = ActivityItemType = {}));
/** @format  */
var ActivityTypes;
(function (ActivityTypes) {
    ActivityTypes["All"] = "all";
    ActivityTypes["Received"] = "received";
    ActivityTypes["Sent"] = "sent";
    ActivityTypes["Invoices"] = "invoices";
    ActivityTypes["Payments"] = "payments";
})(ActivityTypes || (exports.ActivityTypes = ActivityTypes = {}));
/** @format  */
var CurrencyCapability;
(function (CurrencyCapability) {
    CurrencyCapability["Payments"] = "payments";
    CurrencyCapability["SingleSigAccounts"] = "singleSigAccounts";
    CurrencyCapability["PooledAccounts"] = "pooledAccounts";
    CurrencyCapability["Utxo"] = "utxo";
})(CurrencyCapability || (exports.CurrencyCapability = CurrencyCapability = {}));
/** @format  */
var CurrencyStatus;
(function (CurrencyStatus) {
    CurrencyStatus["Active"] = "active";
    CurrencyStatus["UnderMaintenance"] = "underMaintenance";
    CurrencyStatus["Deleted"] = "deleted";
})(CurrencyStatus || (exports.CurrencyStatus = CurrencyStatus = {}));
/** @format  */
var CurrencyType;
(function (CurrencyType) {
    CurrencyType["Crypto"] = "crypto";
    CurrencyType["Token"] = "token";
    CurrencyType["Fiat"] = "fiat";
})(CurrencyType || (exports.CurrencyType = CurrencyType = {}));
/** @format  */
var InvoiceFlags;
(function (InvoiceFlags) {
    InvoiceFlags["None"] = "none";
    InvoiceFlags["RequireBuyerNameAndEmail"] = "requireBuyerNameAndEmail";
    InvoiceFlags["SendPaymentCompleteEmailNotification"] = "sendPaymentCompleteEmailNotification";
    InvoiceFlags["IsPos"] = "isPos";
})(InvoiceFlags || (exports.InvoiceFlags = InvoiceFlags = {}));
/** @format  */
var InvoicePaymentSettlementModeErrorModel;
(function (InvoicePaymentSettlementModeErrorModel) {
    InvoicePaymentSettlementModeErrorModel["Unknown"] = "unknown";
    InvoicePaymentSettlementModeErrorModel["NegativeRate"] = "negativeRate";
    InvoicePaymentSettlementModeErrorModel["PayoutAddressIsNull"] = "payoutAddressIsNull";
    InvoicePaymentSettlementModeErrorModel["PaymentSubTotalIsLessThanMerchantTotalFee"] = "paymentSubTotalIsLessThanMerchantTotalFee";
    InvoicePaymentSettlementModeErrorModel["TotalBuyerWillPayIsNegativeOrZero"] = "totalBuyerWillPayIsNegativeOrZero";
    InvoicePaymentSettlementModeErrorModel["TotalBuyerWillPayIsLessThanBuyerNetworkFee"] = "totalBuyerWillPayIsLessThanBuyerNetworkFee";
    InvoicePaymentSettlementModeErrorModel["TotalMerchantFeeRatioIsMoreThanMaximumRatioSetting"] = "totalMerchantFeeRatioIsMoreThanMaximumRatioSetting";
    InvoicePaymentSettlementModeErrorModel["PayoutAmountIsLessThanDust"] = "payoutAmountIsLessThanDust";
    InvoicePaymentSettlementModeErrorModel["CurrencyIsNotActive"] = "currencyIsNotActive";
    InvoicePaymentSettlementModeErrorModel["AmountIsBelowOfConversionLimit"] = "amountIsBelowOfConversionLimit";
    InvoicePaymentSettlementModeErrorModel["AmountIsAboveOfConversionLimit"] = "amountIsAboveOfConversionLimit";
    InvoicePaymentSettlementModeErrorModel["UserLimitIsReached"] = "userLimitIsReached";
    InvoicePaymentSettlementModeErrorModel["NotEnoughToActivateRippleAddress"] = "notEnoughToActivateRippleAddress";
    InvoicePaymentSettlementModeErrorModel["ConversionPairDoesNotExist"] = "conversionPairDoesNotExist";
    InvoicePaymentSettlementModeErrorModel["AddressIsNotValid"] = "addressIsNotValid";
    InvoicePaymentSettlementModeErrorModel["DoesNotHaveCompletedKyc"] = "doesNotHaveCompletedKyc";
    InvoicePaymentSettlementModeErrorModel["UnstoppableDomainNotFound"] = "unstoppableDomainNotFound";
    InvoicePaymentSettlementModeErrorModel["UnstoppableDomainNotFoundForCurrency"] = "unstoppableDomainNotFoundForCurrency";
    InvoicePaymentSettlementModeErrorModel["UserWalletIsLocked"] = "userWalletIsLocked";
    InvoicePaymentSettlementModeErrorModel["UserWalletIsDeleted"] = "userWalletIsDeleted";
    InvoicePaymentSettlementModeErrorModel["LargeWithdrawalRejected"] = "largeWithdrawalRejected";
})(InvoicePaymentSettlementModeErrorModel || (exports.InvoicePaymentSettlementModeErrorModel = InvoicePaymentSettlementModeErrorModel = {}));
/** @format  */
var InvoiceState;
(function (InvoiceState) {
    InvoiceState["Unpaid"] = "unpaid";
    InvoiceState["Pending"] = "pending";
    InvoiceState["Paid"] = "paid";
    InvoiceState["ScheduledForPayout"] = "scheduledForPayout";
    InvoiceState["Completed"] = "completed";
    InvoiceState["Cancelling"] = "cancelling";
    InvoiceState["Cancelled"] = "cancelled";
    InvoiceState["TimedOut"] = "timedOut";
    InvoiceState["Deleted"] = "deleted";
    InvoiceState["Draft"] = "draft";
    InvoiceState["Scheduled"] = "scheduled";
})(InvoiceState || (exports.InvoiceState = InvoiceState = {}));
/** @format  */
var InvoiceStatus;
(function (InvoiceStatus) {
    InvoiceStatus["Draft"] = "draft";
    InvoiceStatus["Scheduled"] = "scheduled";
    InvoiceStatus["Unpaid"] = "unpaid";
    InvoiceStatus["Pending"] = "pending";
    InvoiceStatus["Paid"] = "paid";
    InvoiceStatus["Completed"] = "completed";
    InvoiceStatus["Cancelled"] = "cancelled";
    InvoiceStatus["TimedOut"] = "timedOut";
    InvoiceStatus["Deleted"] = "deleted";
})(InvoiceStatus || (exports.InvoiceStatus = InvoiceStatus = {}));
/** @format  */
var LineItemQuantityTypeDto;
(function (LineItemQuantityTypeDto) {
    LineItemQuantityTypeDto["Hours"] = "hours";
    LineItemQuantityTypeDto["Quantity"] = "quantity";
})(LineItemQuantityTypeDto || (exports.LineItemQuantityTypeDto = LineItemQuantityTypeDto = {}));
/** @format  */
var LineItemType;
(function (LineItemType) {
    LineItemType["Hours"] = "hours";
    LineItemType["Quantity"] = "quantity";
})(LineItemType || (exports.LineItemType = LineItemType = {}));
/** @format  */
var MerchantClientACL;
(function (MerchantClientACL) {
    MerchantClientACL["None"] = "none";
    MerchantClientACL["CreateInvoice"] = "createInvoice";
    MerchantClientACL["ListInvoices"] = "listInvoices";
    MerchantClientACL["FindInvoice"] = "findInvoice";
    MerchantClientACL["InvoicePayouts"] = "invoicePayouts";
    MerchantClientACL["ListInvoiceHistory"] = "listInvoiceHistory";
    MerchantClientACL["CreateWallet"] = "createWallet";
    MerchantClientACL["GetWallets"] = "getWallets";
    MerchantClientACL["GetWalletById"] = "getWalletById";
    MerchantClientACL["CreateAddress"] = "createAddress";
    MerchantClientACL["GetWalletAddresse"] = "getWalletAddresse";
    MerchantClientACL["GetWalletAddresses"] = "getWalletAddresses";
    MerchantClientACL["GetWalletTransactions"] = "getWalletTransactions";
    MerchantClientACL["GetWalletTransaction"] = "getWalletTransaction";
    MerchantClientACL["SpendRequest"] = "spendRequest";
    MerchantClientACL["ConfirmSpendingFunds"] = "confirmSpendingFunds";
    MerchantClientACL["CreateClientWebHook"] = "createClientWebHook";
    MerchantClientACL["GetWebhooks"] = "getWebhooks";
    MerchantClientACL["UpdateWebhook"] = "updateWebhook";
    MerchantClientACL["DeleteWebhook"] = "deleteWebhook";
    MerchantClientACL["All"] = "all";
})(MerchantClientACL || (exports.MerchantClientACL = MerchantClientACL = {}));
/**
 * Specifies the states that are exposed publicly through the API
 * @format
 */
var MerchantClientPublicState;
(function (MerchantClientPublicState) {
    MerchantClientPublicState["Active"] = "active";
    MerchantClientPublicState["Disabled"] = "disabled";
    MerchantClientPublicState["Deleted"] = "deleted";
})(MerchantClientPublicState || (exports.MerchantClientPublicState = MerchantClientPublicState = {}));
/**
 * The notification types for a webhook
 * @format
 */
var MerchantClientWebhookNotification;
(function (MerchantClientWebhookNotification) {
    MerchantClientWebhookNotification["InvoiceCreated"] = "invoiceCreated";
    MerchantClientWebhookNotification["InvoicePending"] = "invoicePending";
    MerchantClientWebhookNotification["InvoicePaid"] = "invoicePaid";
    MerchantClientWebhookNotification["InvoiceCompleted"] = "invoiceCompleted";
    MerchantClientWebhookNotification["InvoiceCancelled"] = "invoiceCancelled";
    MerchantClientWebhookNotification["InvoiceTimedOut"] = "invoiceTimedOut";
})(MerchantClientWebhookNotification || (exports.MerchantClientWebhookNotification = MerchantClientWebhookNotification = {}));
/** @format  */
var MerchantFields;
(function (MerchantFields) {
    MerchantFields["ShowNone"] = "showNone";
    MerchantFields["ShowAddress"] = "showAddress";
    MerchantFields["ShowEmail"] = "showEmail";
    MerchantFields["ShowPhone"] = "showPhone";
    MerchantFields["ShowRegistrationNumber"] = "showRegistrationNumber";
})(MerchantFields || (exports.MerchantFields = MerchantFields = {}));
/** @format  */
var PaymentPayoutModelState;
(function (PaymentPayoutModelState) {
    PaymentPayoutModelState["Scheduled"] = "scheduled";
    PaymentPayoutModelState["Sending"] = "sending";
    PaymentPayoutModelState["Sent"] = "sent";
    PaymentPayoutModelState["Confirmed"] = "confirmed";
    PaymentPayoutModelState["WaitingConversion"] = "waitingConversion";
    PaymentPayoutModelState["Failed"] = "failed";
    PaymentPayoutModelState["WaitingInternalReceive"] = "waitingInternalReceive";
    PaymentPayoutModelState["WaitingExternalConfirm"] = "waitingExternalConfirm";
})(PaymentPayoutModelState || (exports.PaymentPayoutModelState = PaymentPayoutModelState = {}));
/** @format  */
var PaymentState;
(function (PaymentState) {
    PaymentState["Created"] = "created";
    PaymentState["Detected"] = "detected";
    PaymentState["Pending"] = "pending";
    PaymentState["Confirmed"] = "confirmed";
    PaymentState["ScheduledForPayout"] = "scheduledForPayout";
    PaymentState["Completed"] = "completed";
    PaymentState["CancelledWaitingRefund"] = "cancelledWaitingRefund";
    PaymentState["TimedOutWaitingRefund"] = "timedOutWaitingRefund";
    PaymentState["TimedOutRefundProcessed"] = "timedOutRefundProcessed";
    PaymentState["CancelledRefundProcessed"] = "cancelledRefundProcessed";
    PaymentState["Refunded"] = "refunded";
})(PaymentState || (exports.PaymentState = PaymentState = {}));
/** @format  */
var PayoutCurrencyFrequency;
(function (PayoutCurrencyFrequency) {
    PayoutCurrencyFrequency["Normal"] = "normal";
    PayoutCurrencyFrequency["AsSoonAsPossible"] = "asSoonAsPossible";
    PayoutCurrencyFrequency["Hourly"] = "hourly";
    PayoutCurrencyFrequency["Nightly"] = "nightly";
    PayoutCurrencyFrequency["Weekly"] = "weekly";
})(PayoutCurrencyFrequency || (exports.PayoutCurrencyFrequency = PayoutCurrencyFrequency = {}));
/** @format  */
var RequestFreeCurrencyResult;
(function (RequestFreeCurrencyResult) {
    RequestFreeCurrencyResult["Unknown"] = "unknown";
    RequestFreeCurrencyResult["NotEnoughBalance"] = "notEnoughBalance";
    RequestFreeCurrencyResult["WaitTimePeriod"] = "waitTimePeriod";
    RequestFreeCurrencyResult["Succeeded"] = "succeeded";
    RequestFreeCurrencyResult["UnexpectedError"] = "unexpectedError";
})(RequestFreeCurrencyResult || (exports.RequestFreeCurrencyResult = RequestFreeCurrencyResult = {}));
/** @format  */
var SwitcherStatus;
(function (SwitcherStatus) {
    SwitcherStatus["Enabled"] = "enabled";
    SwitcherStatus["Disabled"] = "disabled";
})(SwitcherStatus || (exports.SwitcherStatus = SwitcherStatus = {}));
/** @format  */
var TransactionDirection;
(function (TransactionDirection) {
    TransactionDirection["All"] = "all";
    TransactionDirection["Spent"] = "spent";
    TransactionDirection["Received"] = "received";
})(TransactionDirection || (exports.TransactionDirection = TransactionDirection = {}));
/** @format  */
var TransactionState;
(function (TransactionState) {
    TransactionState["Created"] = "created";
    TransactionState["Pending"] = "pending";
    TransactionState["Completed"] = "completed";
    TransactionState["FailedOnBlockchain"] = "failedOnBlockchain";
    TransactionState["WaitingForConversion"] = "waitingForConversion";
    TransactionState["Cancelled"] = "cancelled";
    TransactionState["Rejected"] = "rejected";
})(TransactionState || (exports.TransactionState = TransactionState = {}));
/** @format  */
var TwoFactorTokenProviderDto;
(function (TwoFactorTokenProviderDto) {
    TwoFactorTokenProviderDto["None"] = "none";
    TwoFactorTokenProviderDto["GoogleAuth"] = "googleAuth";
    TwoFactorTokenProviderDto["Email"] = "email";
})(TwoFactorTokenProviderDto || (exports.TwoFactorTokenProviderDto = TwoFactorTokenProviderDto = {}));
/** @format  */
var UserNotificationType;
(function (UserNotificationType) {
    UserNotificationType["Warning"] = "warning";
    UserNotificationType["News"] = "news";
    UserNotificationType["Promotion"] = "promotion";
})(UserNotificationType || (exports.UserNotificationType = UserNotificationType = {}));
/** @format  */
var WalletTransactionFlags;
(function (WalletTransactionFlags) {
    WalletTransactionFlags["Empty"] = "empty";
    WalletTransactionFlags["InvoicePayoutToInternal"] = "invoicePayoutToInternal";
    WalletTransactionFlags["InvoicePayoutToExternal"] = "invoicePayoutToExternal";
    WalletTransactionFlags["TestFund"] = "testFund";
    WalletTransactionFlags["IsLargeWithdrawal"] = "isLargeWithdrawal";
    WalletTransactionFlags["InvoicePaymentSend"] = "invoicePaymentSend";
    WalletTransactionFlags["PaymentTypeCoins"] = "paymentTypeCoins";
    WalletTransactionFlags["PaymentTypeCc"] = "paymentTypeCc";
    WalletTransactionFlags["PaymentTypePaypal"] = "paymentTypePaypal";
    WalletTransactionFlags["PaymentTypeEscrow"] = "paymentTypeEscrow";
    WalletTransactionFlags["SmartContractFactoryDeployment"] = "smartContractFactoryDeployment";
    WalletTransactionFlags["InvoiceRefund"] = "invoiceRefund";
    WalletTransactionFlags["ConsolidatingFromMerchantWallet"] = "consolidatingFromMerchantWallet";
    WalletTransactionFlags["ConsolidatingToPersonalWallet"] = "consolidatingToPersonalWallet";
    WalletTransactionFlags["CoinChangeYieldDeposit"] = "coinChangeYieldDeposit";
    WalletTransactionFlags["EsimPurchase"] = "esimPurchase";
    WalletTransactionFlags["EsimTopup"] = "esimTopup";
    WalletTransactionFlags["ClaimedFromPool"] = "claimedFromPool";
    WalletTransactionFlags["PaidFeeForOtherWallet"] = "paidFeeForOtherWallet";
    WalletTransactionFlags["FeePaidByOtherWallet"] = "feePaidByOtherWallet";
    WalletTransactionFlags["WrongAsset"] = "wrongAsset";
    WalletTransactionFlags["ClaimedUnassigned"] = "claimedUnassigned";
})(WalletTransactionFlags || (exports.WalletTransactionFlags = WalletTransactionFlags = {}));
/** @format  */
var WalletTransactionStatus;
(function (WalletTransactionStatus) {
    WalletTransactionStatus["Unknown"] = "unknown";
    WalletTransactionStatus["Created"] = "created";
    WalletTransactionStatus["Pending"] = "pending";
    WalletTransactionStatus["Processing"] = "processing";
    WalletTransactionStatus["Completed"] = "completed";
    WalletTransactionStatus["Expired"] = "expired";
    WalletTransactionStatus["Failed"] = "failed";
    WalletTransactionStatus["ConfirmedOnBlockchain"] = "confirmedOnBlockchain";
    WalletTransactionStatus["PendingReceive"] = "pendingReceive";
    WalletTransactionStatus["FailedOnBlockchain"] = "failedOnBlockchain";
    WalletTransactionStatus["Cancelled"] = "cancelled";
    WalletTransactionStatus["Rejected"] = "rejected";
})(WalletTransactionStatus || (exports.WalletTransactionStatus = WalletTransactionStatus = {}));
/** @format  */
var WalletTransactionType;
(function (WalletTransactionType) {
    WalletTransactionType["Unknown"] = "unknown";
    WalletTransactionType["InternalReceive"] = "internalReceive";
    WalletTransactionType["UtxoExternalReceive"] = "utxoExternalReceive";
    WalletTransactionType["AccountBasedExternalReceive"] = "accountBasedExternalReceive";
    WalletTransactionType["ExternalSpend"] = "externalSpend";
    WalletTransactionType["InternalSpend"] = "internalSpend";
    WalletTransactionType["SameUserSpend"] = "sameUserSpend";
    WalletTransactionType["SameUserReceive"] = "sameUserReceive";
    WalletTransactionType["AccountBasedExternalTokenReceive"] = "accountBasedExternalTokenReceive";
    WalletTransactionType["AccountBasedTokenSpend"] = "accountBasedTokenSpend";
    WalletTransactionType["Conversion"] = "conversion";
    WalletTransactionType["Compensation"] = "compensation";
    WalletTransactionType["Sweeping"] = "sweeping";
    WalletTransactionType["SweepingFunding"] = "sweepingFunding";
    WalletTransactionType["MigratedAddressUtxoExternalReceive"] = "migratedAddressUtxoExternalReceive";
    WalletTransactionType["MigratedAddressAccountBasedExternalReceive"] = "migratedAddressAccountBasedExternalReceive";
    WalletTransactionType["MigratedAddressAccountBasedExternalTokenReceive"] = "migratedAddressAccountBasedExternalTokenReceive";
    WalletTransactionType["AutoSweeping"] = "autoSweeping";
    WalletTransactionType["ReceiveTestFundsFromPool"] = "receiveTestFundsFromPool";
    WalletTransactionType["ReturnTestFundsToPool"] = "returnTestFundsToPool";
})(WalletTransactionType || (exports.WalletTransactionType = WalletTransactionType = {}));
/** @format  */
var WalletType;
(function (WalletType) {
    WalletType["SingleSigCryptoWallet"] = "singleSigCryptoWallet";
})(WalletType || (exports.WalletType = WalletType = {}));
var crypto = __importStar(require("crypto"));
var ContentType;
(function (ContentType) {
    ContentType["Json"] = "application/json";
    ContentType["FormData"] = "multipart/form-data";
    ContentType["UrlEncoded"] = "application/x-www-form-urlencoded";
    ContentType["Text"] = "text/plain";
})(ContentType || (exports.ContentType = ContentType = {}));
var HttpClient = /** @class */ (function () {
    function HttpClient(apiConfig) {
        var _a;
        if (apiConfig === void 0) { apiConfig = {}; }
        var _this = this;
        this.baseUrl = "";
        this.abortControllers = new Map();
        this.customFetch = function () {
            var fetchParams = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                fetchParams[_i] = arguments[_i];
            }
            return fetch.apply(void 0, fetchParams);
        };
        this.baseApiParams = {
            credentials: "same-origin",
            headers: {},
            redirect: "follow",
            referrerPolicy: "no-referrer",
        };
        this.contentFormatters = (_a = {},
            _a[ContentType.Json] = function (input) {
                return input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input;
            },
            _a[ContentType.Text] = function (input) { return (input !== null && typeof input !== "string" ? JSON.stringify(input) : input); },
            _a[ContentType.FormData] = function (input) {
                return Object.keys(input || {}).reduce(function (formData, key) {
                    var property = input[key];
                    formData.append(key, property instanceof Blob
                        ? property
                        : typeof property === "object" && property !== null
                            ? JSON.stringify(property)
                            : "".concat(property));
                    return formData;
                }, new FormData());
            },
            _a[ContentType.UrlEncoded] = function (input) { return _this.toQueryString(input); },
            _a);
        this.createAbortSignal = function (cancelToken) {
            if (_this.abortControllers.has(cancelToken)) {
                var abortController_1 = _this.abortControllers.get(cancelToken);
                if (abortController_1) {
                    return abortController_1.signal;
                }
                return void 0;
            }
            var abortController = new AbortController();
            _this.abortControllers.set(cancelToken, abortController);
            return abortController.signal;
        };
        this.abortRequest = function (cancelToken) {
            var abortController = _this.abortControllers.get(cancelToken);
            if (abortController) {
                abortController.abort();
                _this.abortControllers.delete(cancelToken);
            }
        };
        this.request = function (_a) { return __awaiter(_this, void 0, void 0, function () {
            var queryString, payloadFormatter, formattedPayload, url, extraHeaders, date, sign, signature;
            var _this = this;
            var body = _a.body, path = _a.path, type = _a.type, query = _a.query, format = _a.format, baseUrl = _a.baseUrl, cancelToken = _a.cancelToken, params = __rest(_a, ["body", "path", "type", "query", "format", "baseUrl", "cancelToken"]);
            return __generator(this, function (_b) {
                queryString = query && this.toQueryString(query);
                payloadFormatter = this.contentFormatters[type || ContentType.Json];
                formattedPayload = typeof body === "undefined" || body === null ? null : payloadFormatter(body);
                url = "".concat(baseUrl || this.baseUrl || "").concat(path).concat(queryString ? "?".concat(queryString) : "");
                extraHeaders = {};
                if (this.clientId && this.clientSecret) {
                    date = new Date().toISOString().split(".")[0];
                    sign = params.method === "GET"
                        ? "\uFEFF".concat(params.method).concat(url).concat(this.clientId).concat(date)
                        : "\uFEFF".concat(params.method).concat(url).concat(this.clientId).concat(date).concat(formattedPayload);
                    signature = crypto.createHmac("sha256", this.clientSecret).update(sign).digest("base64");
                    extraHeaders["X-CoinPayments-Client"] = this.clientId;
                    extraHeaders["X-CoinPayments-Timestamp"] = date;
                    extraHeaders["X-CoinPayments-Signature"] = signature;
                }
                return [2 /*return*/, this.customFetch(url, __assign(__assign({}, params), { headers: __assign(__assign(__assign({}, (params.headers || {})), (type && type !== ContentType.FormData ? { "Content-Type": type } : {})), extraHeaders), signal: (cancelToken ? this.createAbortSignal(cancelToken) : params.signal) || null, body: formattedPayload })).then(function (response) { return __awaiter(_this, void 0, void 0, function () {
                        var r, data, _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    r = response.clone();
                                    r.data = null;
                                    r.error = null;
                                    if (!!format) return [3 /*break*/, 1];
                                    _a = r;
                                    return [3 /*break*/, 3];
                                case 1: return [4 /*yield*/, response[format || ContentType.Json]()
                                        .then(function (data) {
                                        if (r.ok) {
                                            r.data = data;
                                        }
                                        else {
                                            r.error = data;
                                        }
                                        return r;
                                    })
                                        .catch(function (e) {
                                        r.error = e;
                                        return r;
                                    })];
                                case 2:
                                    _a = _b.sent();
                                    _b.label = 3;
                                case 3:
                                    data = _a;
                                    if (cancelToken) {
                                        this.abortControllers.delete(cancelToken);
                                    }
                                    if (!response.ok)
                                        throw data;
                                    return [2 /*return*/, data];
                            }
                        });
                    }); })];
            });
        }); };
        Object.assign(this, apiConfig);
    }
    HttpClient.prototype.encodeQueryParam = function (key, value) {
        var encodedKey = encodeURIComponent(key);
        return "".concat(encodedKey, "=").concat(encodeURIComponent(typeof value === "number" ? value : "".concat(value)));
    };
    HttpClient.prototype.addQueryParam = function (query, key) {
        return this.encodeQueryParam(key, query[key]);
    };
    HttpClient.prototype.addArrayQueryParam = function (query, key) {
        var _this = this;
        var value = query[key];
        return value.map(function (v) { return _this.encodeQueryParam(key, v); }).join("&");
    };
    HttpClient.prototype.toQueryString = function (rawQuery) {
        var _this = this;
        var query = rawQuery || {};
        var keys = Object.keys(query).filter(function (key) { return "undefined" !== typeof query[key]; });
        return keys
            .map(function (key) { return (Array.isArray(query[key]) ? _this.addArrayQueryParam(query, key) : _this.addQueryParam(query, key)); })
            .join("&");
    };
    HttpClient.prototype.addQueryParams = function (rawQuery) {
        var queryString = this.toQueryString(rawQuery);
        return queryString ? "?".concat(queryString) : "";
    };
    return HttpClient;
}());
exports.HttpClient = HttpClient;
/**
 * @title CoinPayments API
 * @version v1
 *
 * CoinPayments Backend API.
 */
var Api = /** @class */ (function () {
    function Api(http) {
        var _this = this;
        this.api = {
            /**
             * No description
             *
             * @tags Currencies
             * @name GetV1CurrenciesLimitsByFromCurrencyIdToCurrencyId
             * @summary Supports Auth methods: Anonymous
             * @request GET:/api/v1/currencies/limits/{fromCurrencyId}/{toCurrencyId}
             */
            getV1CurrenciesLimitsByFromCurrencyIdToCurrencyId: function (fromCurrencyId, toCurrencyId, params) {
                if (params === void 0) { params = {}; }
                return _this.http.request(__assign({ path: "/api/v1/currencies/limits/".concat(fromCurrencyId, "/").concat(toCurrencyId), method: "GET", format: "json" }, params));
            },
            /**
             * @description Returns a page of the supported currencies on the CoinPayments.net platform, by default ordered by their rank on CoinPayments.net.
             *
             * @tags Currencies
             * @name GetV1Currencies
             * @summary lists platform supported currencies and their capabilities. - Supports Auth methods: Anonymous
             * @request GET:/api/v1/currencies
             */
            getV1Currencies: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.http.request(__assign({ path: "/api/v1/currencies", method: "GET", query: query, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags Currencies
             * @name GetV1CurrenciesById
             * @summary finds a currency by its id - Supports Auth methods: Anonymous
             * @request GET:/api/v1/currencies/{id}
             */
            getV1CurrenciesById: function (id, params) {
                if (params === void 0) { params = {}; }
                return _this.http.request(__assign({ path: "/api/v1/currencies/".concat(id), method: "GET", format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags Currencies
             * @name GetV1CurrenciesBlockchainNodesLatestBlockNumberById
             * @summary Gets the latest blockchain block number by currency - Supports Auth methods: Anonymous
             * @request GET:/api/v1/currencies/blockchain-nodes/{id}/latest-block-number
             */
            getV1CurrenciesBlockchainNodesLatestBlockNumberById: function (id, params) {
                if (params === void 0) { params = {}; }
                return _this.http.request(__assign({ path: "/api/v1/currencies/blockchain-nodes/".concat(id, "/latest-block-number"), method: "GET", format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags Currencies
             * @name GetV1CurrenciesRequiredConfirmations
             * @summary Gets the required confirmations for each currency - Supports Auth methods: Anonymous
             * @request GET:/api/v1/currencies/required-confirmations
             */
            getV1CurrenciesRequiredConfirmations: function (params) {
                if (params === void 0) { params = {}; }
                return _this.http.request(__assign({ path: "/api/v1/currencies/required-confirmations", method: "GET", format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags Currencies
             * @name GetV1CurrenciesLogoById
             * @summary Retrieves the currency icon - Supports Auth methods: Anonymous
             * @request GET:/api/v1/currencies/{id}/logo
             */
            getV1CurrenciesLogoById: function (id, params) {
                if (params === void 0) { params = {}; }
                return _this.http.request(__assign({ path: "/api/v1/currencies/".concat(id, "/logo"), method: "GET" }, params));
            },
            /**
             * No description
             *
             * @tags Currencies
             * @name GetV1CurrenciesLogosvgById
             * @summary Retrieves the currency icon as svg - Supports Auth methods: Anonymous
             * @request GET:/api/v1/currencies/{id}/logosvg
             */
            getV1CurrenciesLogosvgById: function (id, params) {
                if (params === void 0) { params = {}; }
                return _this.http.request(__assign({ path: "/api/v1/currencies/".concat(id, "/logosvg"), method: "GET" }, params));
            },
            /**
             * No description
             *
             * @tags Currencies
             * @name GetV1CurrenciesConversions
             * @summary gets a list of all possible currency conversions - Supports Auth methods: Anonymous
             * @request GET:/api/v1/currencies/conversions
             */
            getV1CurrenciesConversions: function (params) {
                if (params === void 0) { params = {}; }
                return _this.http.request(__assign({ path: "/api/v1/currencies/conversions", method: "GET", format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags Fee
             * @name GetV1FeesBlockchainByCurrency
             * @summary Supports Auth methods: Anonymous
             * @request GET:/api/v1/fees/blockchain/{currency}
             */
            getV1FeesBlockchainByCurrency: function (currency, params) {
                if (params === void 0) { params = {}; }
                return _this.http.request(__assign({ path: "/api/v1/fees/blockchain/".concat(currency), method: "GET" }, params));
            },
            /**
             * No description
             *
             * @tags Invoices
             * @name PutV1InvoicesById
             * @summary Updates the buyer information on an invoice, if it was requested by the merchant - Supports Auth methods: Anonymous
             * @request PUT:/api/v1/invoices/{id}
             */
            putV1InvoicesById: function (id, data, params) {
                if (params === void 0) { params = {}; }
                return _this.http.request(__assign({ path: "/api/v1/invoices/".concat(id), method: "PUT", body: data, type: ContentType.Json }, params));
            },
            /**
             * No description
             *
             * @tags Invoices
             * @name GetV1InvoicesPaymentCurrenciesStatusByIdCurrencyId
             * @summary Supports Auth methods: Anonymous
             * @request GET:/api/v1/invoices/{id}/payment-currencies/{currencyId}/status
             */
            getV1InvoicesPaymentCurrenciesStatusByIdCurrencyId: function (id, currencyId, params) {
                if (params === void 0) { params = {}; }
                return _this.http.request(__assign({ path: "/api/v1/invoices/".concat(id, "/payment-currencies/").concat(currencyId, "/status"), method: "GET", format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags Invoices
             * @name GetV1InvoicesPaymentCurrenciesByIdCurrencyId
             * @summary Supports Auth methods: Anonymous
             * @request GET:/api/v1/invoices/{id}/payment-currencies/{currencyId}
             */
            getV1InvoicesPaymentCurrenciesByIdCurrencyId: function (id, currencyId, params) {
                if (params === void 0) { params = {}; }
                return _this.http.request(__assign({ path: "/api/v1/invoices/".concat(id, "/payment-currencies/").concat(currencyId), method: "GET", format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags MerchantClients
             * @name GetV1MerchantClientsIp
             * @summary Returns IP of the current user - Supports Auth methods: Anonymous
             * @request GET:/api/v1/merchant/clients/ip
             */
            getV1MerchantClientsIp: function (params) {
                if (params === void 0) { params = {}; }
                return _this.http.request(__assign({ path: "/api/v1/merchant/clients/ip", method: "GET", format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags MerchantClients
             * @name GetV1MerchantClientsWebhooksByClientId
             * @summary List all of the webhooks for a particular client - Supports Auth methods: [ OAuth, clientId/secret ]
             * @request GET:/api/v1/merchant/clients/{clientId}/webhooks
             */
            getV1MerchantClientsWebhooksByClientId: function (clientId, query, params) {
                if (params === void 0) { params = {}; }
                return _this.http.request(__assign({ path: "/api/v1/merchant/clients/".concat(clientId, "/webhooks"), method: "GET", query: query, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags MerchantClients
             * @name PostV1MerchantClientsWebhooksByClientId
             * @summary Create a new webhook for a client - Supports Auth methods: [ OAuth, clientId/secret ]
             * @request POST:/api/v1/merchant/clients/{clientId}/webhooks
             */
            postV1MerchantClientsWebhooksByClientId: function (clientId, data, params) {
                if (params === void 0) { params = {}; }
                return _this.http.request(__assign({ path: "/api/v1/merchant/clients/".concat(clientId, "/webhooks"), method: "POST", body: data, type: ContentType.Json }, params));
            },
            /**
             * No description
             *
             * @tags MerchantClients
             * @name PutV1MerchantClientsWebhooksByClientIdWebhookId
             * @summary Update an existing webhook for a client - Supports Auth methods: [ OAuth, clientId/secret ]
             * @request PUT:/api/v1/merchant/clients/{clientId}/webhooks/{webhookId}
             */
            putV1MerchantClientsWebhooksByClientIdWebhookId: function (clientId, webhookId, data, params) {
                if (params === void 0) { params = {}; }
                return _this.http.request(__assign({ path: "/api/v1/merchant/clients/".concat(clientId, "/webhooks/").concat(webhookId), method: "PUT", body: data, type: ContentType.Json }, params));
            },
            /**
             * No description
             *
             * @tags MerchantClients
             * @name DeleteV1MerchantClientsWebhooksByClientIdWebhookId
             * @summary Delete a webhook for a client - Supports Auth methods: [ OAuth, clientId/secret ]
             * @request DELETE:/api/v1/merchant/clients/{clientId}/webhooks/{webhookId}
             */
            deleteV1MerchantClientsWebhooksByClientIdWebhookId: function (clientId, webhookId, params) {
                if (params === void 0) { params = {}; }
                return _this.http.request(__assign({ path: "/api/v1/merchant/clients/".concat(clientId, "/webhooks/").concat(webhookId), method: "DELETE" }, params));
            },
            /**
             * No description
             *
             * @tags MerchantInvoices
             * @name PostV1MerchantInvoicesBuyNowButton
             * @summary Creates payment button code for the specified invoice - Supports Auth methods: [ OAuth, clientId/secret ]
             * @request POST:/api/v1/merchant/invoices/buy-now-button
             */
            postV1MerchantInvoicesBuyNowButton: function (data, params) {
                if (params === void 0) { params = {}; }
                return _this.http.request(__assign({ path: "/api/v1/merchant/invoices/buy-now-button", method: "POST", body: data, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags MerchantInvoices
             * @name GetV1MerchantInvoices
             * @summary Get a list of the current merchant's invoices - Supports Auth methods: [ OAuth, clientId/secret ]
             * @request GET:/api/v1/merchant/invoices
             */
            getV1MerchantInvoices: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.http.request(__assign({ path: "/api/v1/merchant/invoices", method: "GET", query: query, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags MerchantInvoices
             * @name PostV1MerchantInvoices
             * @summary Creates a new invoice - Supports Auth methods: [ OAuth, clientId/secret ]
             * @request POST:/api/v1/merchant/invoices
             */
            postV1MerchantInvoices: function (data, params) {
                if (params === void 0) { params = {}; }
                return _this.http.request(__assign({ path: "/api/v1/merchant/invoices", method: "POST", body: data, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags MerchantInvoices
             * @name GetV1MerchantInvoicesById
             * @summary Find invoice belonging to merchant by the invoice ID - Supports Auth methods: [ OAuth, clientId/secret ]
             * @request GET:/api/v1/merchant/invoices/{id}
             */
            getV1MerchantInvoicesById: function (id, query, params) {
                if (params === void 0) { params = {}; }
                return _this.http.request(__assign({ path: "/api/v1/merchant/invoices/".concat(id), method: "GET", query: query, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags MerchantInvoices
             * @name GetV1MerchantInvoicesHistoryById
             * @summary Lists the history events of an invoice by the invoice ID - Supports Auth methods: [ OAuth, clientId/secret ]
             * @request GET:/api/v1/merchant/invoices/{id}/history
             */
            getV1MerchantInvoicesHistoryById: function (id, params) {
                if (params === void 0) { params = {}; }
                return _this.http.request(__assign({ path: "/api/v1/merchant/invoices/".concat(id, "/history"), method: "GET", format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags MerchantInvoices
             * @name PutV1MerchantInvoicesPayoutConfigById
             * @summary Supports Auth methods: [ OAuth, clientId/secret ]
             * @request PUT:/api/v1/merchant/invoices/{id}/payout-config
             */
            putV1MerchantInvoicesPayoutConfigById: function (id, data, params) {
                if (params === void 0) { params = {}; }
                return _this.http.request(__assign({ path: "/api/v1/merchant/invoices/".concat(id, "/payout-config"), method: "PUT", body: data, type: ContentType.Json }, params));
            },
            /**
         * No description
         *
         * @tags MerchantInvoices
         * @name GetV1MerchantInvoicesPayoutsById
         * @summary Get payout details for an invoice, including if invoice has been fully paid out, the exact amount they will receive
        and in what currency, which address payout will be deposited, and who (Buyer) performed the payment. - Supports Auth methods: [ OAuth, clientId/secret ]
         * @request GET:/api/v1/merchant/invoices/{id}/payouts
         */
            getV1MerchantInvoicesPayoutsById: function (id, params) {
                if (params === void 0) { params = {}; }
                return _this.http.request(__assign({ path: "/api/v1/merchant/invoices/".concat(id, "/payouts"), method: "GET", format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags MerchantInvoicesV2
             * @name PostV2MerchantInvoices
             * @summary Supports Auth methods: [ OAuth, clientId/secret ]
             * @request POST:/api/v2/merchant/invoices
             */
            postV2MerchantInvoices: function (data, params) {
                if (params === void 0) { params = {}; }
                return _this.http.request(__assign({ path: "/api/v2/merchant/invoices", method: "POST", body: data, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags MerchantInvoicesV2
             * @name PostV2MerchantInvoicesBuyNowButton
             * @summary Creates payment button code for the specified invoice - Supports Auth methods: [ OAuth, clientId/secret ]
             * @request POST:/api/v2/merchant/invoices/buy-now-button
             */
            postV2MerchantInvoicesBuyNowButton: function (data, params) {
                if (params === void 0) { params = {}; }
                return _this.http.request(__assign({ path: "/api/v2/merchant/invoices/buy-now-button", method: "POST", body: data, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * @description If WebhookUrl field of the body is specified than the following requests will be sent to the provided URL (Maximum 5 attempts with 5 seconds timeout for a single request and 1 second delay between retries) All keys and values of the webhook payloads are strings. Sample of data being sent when funds are received: { "walletId" : "58f78b24-1de0-42b3-9a48-94f3e9c57752", "address" : "3HX4jDA4ESQahmE9w448TKUQiF786paVBT", "transactionId" : "f8ea1354-b3c9-470f-af09-c2ba96f2e391", "transactionType" : "UtxoExternalReceive", "amount" : "1.5", "symbol" : "BTC", }
             *
             * @tags MerchantWallets
             * @name PostV1MerchantWallets
             * @summary Creates a new merchant wallet - Supports Auth methods: [ OAuth, clientId/secret ]
             * @request POST:/api/v1/merchant/wallets
             */
            postV1MerchantWallets: function (data, params) {
                if (params === void 0) { params = {}; }
                return _this.http.request(__assign({ path: "/api/v1/merchant/wallets", method: "POST", body: data, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags MerchantWallets
             * @name GetV1MerchantWallets
             * @summary Lists all merchant client wallets - Supports Auth methods: [ OAuth, clientId/secret ]
             * @request GET:/api/v1/merchant/wallets
             */
            getV1MerchantWallets: function (params) {
                if (params === void 0) { params = {}; }
                return _this.http.request(__assign({ path: "/api/v1/merchant/wallets", method: "GET", format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags MerchantWallets
             * @name GetV1MerchantWalletsByWalletIdStr
             * @summary Finds a merchant client wallet by id - Supports Auth methods: [ OAuth, clientId/secret ]
             * @request GET:/api/v1/merchant/wallets/{walletIdStr}
             */
            getV1MerchantWalletsByWalletIdStr: function (walletIdStr, params) {
                if (params === void 0) { params = {}; }
                return _this.http.request(__assign({ path: "/api/v1/merchant/wallets/".concat(walletIdStr), method: "GET", format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags MerchantWallets
             * @name GetV1MerchantWalletsTransactionsByWalletIdStr
             * @summary Lists transactions of the wallet - Supports Auth methods: [ OAuth, clientId/secret ]
             * @request GET:/api/v1/merchant/wallets/{walletIdStr}/transactions
             */
            getV1MerchantWalletsTransactionsByWalletIdStr: function (walletIdStr, query, params) {
                if (params === void 0) { params = {}; }
                return _this.http.request(__assign({ path: "/api/v1/merchant/wallets/".concat(walletIdStr, "/transactions"), method: "GET", query: query, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags MerchantWallets
             * @name GetV1MerchantWalletsTransactionByWalletIdStr
             * @summary Get a specific transaction of the wallet, if transactionId is specified for search then the spendRequestId is ignored otherwise a first spending transaction with matching spendRequestId is returned - Supports Auth methods: [ OAuth, clientId/secret ]
             * @request GET:/api/v1/merchant/wallets/{walletIdStr}/transaction
             */
            getV1MerchantWalletsTransactionByWalletIdStr: function (walletIdStr, query, params) {
                if (params === void 0) { params = {}; }
                return _this.http.request(__assign({ path: "/api/v1/merchant/wallets/".concat(walletIdStr, "/transaction"), method: "GET", query: query, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags MerchantWallets
             * @name GetV1MerchantWalletsAddressesByWalletIdStr
             * @summary Lists all merchant addresses of a specific wallet by the wallet Id - Supports Auth methods: [ OAuth, clientId/secret ]
             * @request GET:/api/v1/merchant/wallets/{walletIdStr}/addresses
             */
            getV1MerchantWalletsAddressesByWalletIdStr: function (walletIdStr, query, params) {
                if (params === void 0) { params = {}; }
                return _this.http.request(__assign({ path: "/api/v1/merchant/wallets/".concat(walletIdStr, "/addresses"), method: "GET", query: query, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags MerchantWallets
             * @name PostV1MerchantWalletsAddressesByWalletIdStr
             * @summary Creates an address under a wallet by the wallet ID - Supports Auth methods: [ OAuth, clientId/secret ]
             * @request POST:/api/v1/merchant/wallets/{walletIdStr}/addresses
             */
            postV1MerchantWalletsAddressesByWalletIdStr: function (walletIdStr, data, params) {
                if (params === void 0) { params = {}; }
                return _this.http.request(__assign({ path: "/api/v1/merchant/wallets/".concat(walletIdStr, "/addresses"), method: "POST", body: data, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags MerchantWallets
             * @name GetV1MerchantWalletsAddressesByWalletIdStrAddressIdStr
             * @summary Get a specific address by its Id and the Id of the wallet it belongs to - Supports Auth methods: [ OAuth, clientId/secret ]
             * @request GET:/api/v1/merchant/wallets/{walletIdStr}/addresses/{addressIdStr}
             */
            getV1MerchantWalletsAddressesByWalletIdStrAddressIdStr: function (walletIdStr, addressIdStr, params) {
                if (params === void 0) { params = {}; }
                return _this.http.request(__assign({ path: "/api/v1/merchant/wallets/".concat(walletIdStr, "/addresses/").concat(addressIdStr), method: "GET", format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags MerchantWallets
             * @name PutV1MerchantWalletsWebhookByWalletIdStr
             * @summary Supports Auth methods: [ OAuth, clientId/secret ]
             * @request PUT:/api/v1/merchant/wallets/{walletIdStr}/webhook
             */
            putV1MerchantWalletsWebhookByWalletIdStr: function (walletIdStr, data, params) {
                if (params === void 0) { params = {}; }
                return _this.http.request(__assign({ path: "/api/v1/merchant/wallets/".concat(walletIdStr, "/webhook"), method: "PUT", body: data, type: ContentType.Json }, params));
            },
            /**
             * No description
             *
             * @tags MerchantWallets
             * @name PutV1MerchantWalletsAddressesWebhookByWalletIdStrAddressIdStr
             * @summary Supports Auth methods: [ OAuth, clientId/secret ]
             * @request PUT:/api/v1/merchant/wallets/{walletIdStr}/addresses/{addressIdStr}/webhook
             */
            putV1MerchantWalletsAddressesWebhookByWalletIdStrAddressIdStr: function (walletIdStr, addressIdStr, data, params) {
                if (params === void 0) { params = {}; }
                return _this.http.request(__assign({ path: "/api/v1/merchant/wallets/".concat(walletIdStr, "/addresses/").concat(addressIdStr, "/webhook"), method: "PUT", body: data, type: ContentType.Json }, params));
            },
            /**
             * @description The Spend Request API allows users to initiate a withdrawal or a conversion transaction, supports conversions between specific tokens by providing the contract addresses of the source and target tokens. Users also have the option to override the default blockchain fee within a certain range. The receiver can either pay the blockchain fee or have it deducted from the received amount, depending on the configuration.
             *
             * @tags MerchantWallets
             * @name PostV1MerchantWalletsSpendRequestByWalletIdStr
             * @summary Sends a request to spend funds from the merchant client wallet. Also used to convert funds between supported cryptocurrencies - Supports Auth methods: [ OAuth, clientId/secret ]
             * @request POST:/api/v1/merchant/wallets/{walletIdStr}/spend/request
             */
            postV1MerchantWalletsSpendRequestByWalletIdStr: function (walletIdStr, data, params) {
                if (params === void 0) { params = {}; }
                return _this.http.request(__assign({ path: "/api/v1/merchant/wallets/".concat(walletIdStr, "/spend/request"), method: "POST", body: data, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags MerchantWallets
             * @name PostV1MerchantWalletsSpendConfirmationByWalletIdStr
             * @summary Sends a request to confirm spending funds from the merchant client wallet, Or to confirm converting funds. - Supports Auth methods: [ OAuth, clientId/secret ]
             * @request POST:/api/v1/merchant/wallets/{walletIdStr}/spend/confirmation
             */
            postV1MerchantWalletsSpendConfirmationByWalletIdStr: function (walletIdStr, data, params) {
                if (params === void 0) { params = {}; }
                return _this.http.request(__assign({ path: "/api/v1/merchant/wallets/".concat(walletIdStr, "/spend/confirmation"), method: "POST", body: data, type: ContentType.Json }, params));
            },
            /**
             * No description
             *
             * @tags MerchantWallets
             * @name GetV1MerchantWalletsConsolidationByWalletIdStr
             * @summary Returns info about merchant wallet consolidation (sending funds to the main wallet) - Supports Auth methods: [ OAuth, clientId/secret ]
             * @request GET:/api/v1/merchant/wallets/{walletIdStr}/consolidation
             */
            getV1MerchantWalletsConsolidationByWalletIdStr: function (walletIdStr, query, params) {
                if (params === void 0) { params = {}; }
                return _this.http.request(__assign({ path: "/api/v1/merchant/wallets/".concat(walletIdStr, "/consolidation"), method: "GET", query: query, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags MerchantWallets
             * @name PostV1MerchantWalletsConsolidationByWalletIdStrToWalletIdStr
             * @summary Returns info about merchant wallet consolidation (sending funds to the main wallet) - Supports Auth methods: [ OAuth, clientId/secret ]
             * @request POST:/api/v1/merchant/wallets/{walletIdStr}/consolidation/{toWalletIdStr}
             */
            postV1MerchantWalletsConsolidationByWalletIdStrToWalletIdStr: function (walletIdStr, toWalletIdStr, query, params) {
                if (params === void 0) { params = {}; }
                return _this.http.request(__assign({ path: "/api/v1/merchant/wallets/".concat(walletIdStr, "/consolidation/").concat(toWalletIdStr), method: "POST", query: query, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags MerchantWallets
             * @name PostV1MerchantWalletsConsolidationPreview
             * @summary Preview merchant wallets consolidation (sending funds to the main wallet) - Supports Auth methods: [ OAuth, clientId/secret ]
             * @request POST:/api/v1/merchant/wallets/consolidation-preview
             */
            postV1MerchantWalletsConsolidationPreview: function (data, params) {
                if (params === void 0) { params = {}; }
                return _this.http.request(__assign({ path: "/api/v1/merchant/wallets/consolidation-preview", method: "POST", body: data, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags MerchantWallets
             * @name PostV1MerchantWalletsConsolidationByToWalletIdStr
             * @summary Execute merchant wallets consolidation (sending funds to the main wallet) - Supports Auth methods: [ OAuth, clientId/secret ]
             * @request POST:/api/v1/merchant/wallets/consolidation/{toWalletIdStr}
             */
            postV1MerchantWalletsConsolidationByToWalletIdStr: function (toWalletIdStr, data, params) {
                if (params === void 0) { params = {}; }
                return _this.http.request(__assign({ path: "/api/v1/merchant/wallets/consolidation/".concat(toWalletIdStr), method: "POST", body: data, type: ContentType.Json, format: "json" }, params));
            },
            /**
             * @description Returns the currency conversion rates for the specified `from` currencies converted to the specified `to` currencies
             *
             * @tags Rates
             * @name GetV1Rates
             * @summary lists the current conversion rates between currencies - Supports Auth methods: Anonymous
             * @request GET:/api/v1/rates
             */
            getV1Rates: function (query, params) {
                if (params === void 0) { params = {}; }
                return _this.http.request(__assign({ path: "/api/v1/rates", method: "GET", query: query, format: "json" }, params));
            },
            /**
             * No description
             *
             * @tags SharedInvoices
             * @name GetV1SharedInvoicesBySharedInvoiceId
             * @summary Finds an invoice shared by a merchant - Supports Auth methods: Anonymous
             * @request GET:/api/v1/shared-invoices/{sharedInvoiceId}
             */
            getV1SharedInvoicesBySharedInvoiceId: function (sharedInvoiceId, params) {
                if (params === void 0) { params = {}; }
                return _this.http.request(__assign({ path: "/api/v1/shared-invoices/".concat(sharedInvoiceId), method: "GET" }, params));
            },
            /**
             * No description
             *
             * @tags User
             * @name PostV1UserAccesstoken
             * @summary Retrieves an access token for a given user - Supports Auth methods: Anonymous
             * @request POST:/api/v1/user/accesstoken
             */
            postV1UserAccesstoken: function (data, params) {
                if (params === void 0) { params = {}; }
                return _this.http.request(__assign({ path: "/api/v1/user/accesstoken", method: "POST", body: data, type: ContentType.Json }, params));
            },
            /**
             * No description
             *
             * @tags UserMigrations
             * @name PostV1UserMigrationsMigration
             * @summary Supports Auth methods: [ OAuth, clientId/secret ]
             * @request POST:/api/v1/user-migrations/migration
             */
            postV1UserMigrationsMigration: function (data, params) {
                if (params === void 0) { params = {}; }
                return _this.http.request(__assign({ path: "/api/v1/user-migrations/migration", method: "POST", body: data, type: ContentType.Json }, params));
            },
            /**
             * No description
             *
             * @tags UserMigrations
             * @name GetV1UserMigrationsMigrationByUserId
             * @summary Supports Auth methods: [ OAuth, clientId/secret ]
             * @request GET:/api/v1/user-migrations/{userId}/migration
             */
            getV1UserMigrationsMigrationByUserId: function (userId, params) {
                if (params === void 0) { params = {}; }
                return _this.http.request(__assign({ path: "/api/v1/user-migrations/".concat(userId, "/migration"), method: "GET" }, params));
            },
            /**
             * No description
             *
             * @tags UserMigrations
             * @name PostV1UserMigrationsMigrationPassword
             * @summary Supports Auth methods: [ OAuth, clientId/secret ]
             * @request POST:/api/v1/user-migrations/migration-password
             */
            postV1UserMigrationsMigrationPassword: function (data, params) {
                if (params === void 0) { params = {}; }
                return _this.http.request(__assign({ path: "/api/v1/user-migrations/migration-password", method: "POST", body: data, type: ContentType.Json }, params));
            },
            /**
             * No description
             *
             * @tags UserMigrations
             * @name PostV1UserMigrationsMigrationEmail
             * @summary Supports Auth methods: [ OAuth, clientId/secret ]
             * @request POST:/api/v1/user-migrations/migration-email
             */
            postV1UserMigrationsMigrationEmail: function (data, params) {
                if (params === void 0) { params = {}; }
                return _this.http.request(__assign({ path: "/api/v1/user-migrations/migration-email", method: "POST", body: data, type: ContentType.Json }, params));
            },
            /**
             * No description
             *
             * @tags UserMigrations
             * @name GetV1UserMigrationsMigrationEmailByUserId
             * @summary Supports Auth methods: [ OAuth, clientId/secret ]
             * @request GET:/api/v1/user-migrations/{userId}/migration-email
             */
            getV1UserMigrationsMigrationEmailByUserId: function (userId, params) {
                if (params === void 0) { params = {}; }
                return _this.http.request(__assign({ path: "/api/v1/user-migrations/".concat(userId, "/migration-email"), method: "GET" }, params));
            },
            /**
             * No description
             *
             * @tags UserMigrations
             * @name PostV1UserMigrationsMigrationTotp
             * @summary Supports Auth methods: [ OAuth, clientId/secret ]
             * @request POST:/api/v1/user-migrations/migration-totp
             */
            postV1UserMigrationsMigrationTotp: function (data, params) {
                if (params === void 0) { params = {}; }
                return _this.http.request(__assign({ path: "/api/v1/user-migrations/migration-totp", method: "POST", body: data, type: ContentType.Json }, params));
            },
            /**
             * No description
             *
             * @tags UserMigrations
             * @name GetV1UserMigrationsMigrationTotpByUserId
             * @summary Supports Auth methods: [ OAuth, clientId/secret ]
             * @request GET:/api/v1/user-migrations/{userId}/migration-totp
             */
            getV1UserMigrationsMigrationTotpByUserId: function (userId, params) {
                if (params === void 0) { params = {}; }
                return _this.http.request(__assign({ path: "/api/v1/user-migrations/".concat(userId, "/migration-totp"), method: "GET" }, params));
            },
            /**
             * No description
             *
             * @tags UserMigrations
             * @name PostV1UserMigrationsMigrationTwoFactorAuth
             * @summary Supports Auth methods: [ OAuth, clientId/secret ]
             * @request POST:/api/v1/user-migrations/migration-two-factor-auth
             */
            postV1UserMigrationsMigrationTwoFactorAuth: function (data, params) {
                if (params === void 0) { params = {}; }
                return _this.http.request(__assign({ path: "/api/v1/user-migrations/migration-two-factor-auth", method: "POST", body: data, type: ContentType.Json }, params));
            },
            /**
             * No description
             *
             * @tags UserMigrations
             * @name GetV1UserMigrationsMigrationTwoFactorAuthByUserId
             * @summary Supports Auth methods: [ OAuth, clientId/secret ]
             * @request GET:/api/v1/user-migrations/{userId}/migration-two-factor-auth
             */
            getV1UserMigrationsMigrationTwoFactorAuthByUserId: function (userId, params) {
                if (params === void 0) { params = {}; }
                return _this.http.request(__assign({ path: "/api/v1/user-migrations/".concat(userId, "/migration-two-factor-auth"), method: "GET" }, params));
            },
            /**
             * No description
             *
             * @tags UserMigrations
             * @name PostV1UserMigrationsMigrationAccesstoken
             * @summary Supports Auth methods: [ OAuth, clientId/secret ]
             * @request POST:/api/v1/user-migrations/migration-accesstoken
             */
            postV1UserMigrationsMigrationAccesstoken: function (data, params) {
                if (params === void 0) { params = {}; }
                return _this.http.request(__assign({ path: "/api/v1/user-migrations/migration-accesstoken", method: "POST", body: data, type: ContentType.Json }, params));
            },
        };
        this.http = http;
    }
    return Api;
}());
exports.Api = Api;
