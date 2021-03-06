import { ApiResponse } from '../apiResponse';
import { RequestOptions } from '../http/requestBuilder';
import { CaptureTransactionResponse } from '../models/captureTransactionResponse';
import { ChargeRequest } from '../models/chargeRequest';
import { ChargeResponse } from '../models/chargeResponse';
import { CreateRefundRequest } from '../models/createRefundRequest';
import { CreateRefundResponse } from '../models/createRefundResponse';
import { ListRefundsResponse } from '../models/listRefundsResponse';
import { ListTransactionsResponse } from '../models/listTransactionsResponse';
import { RetrieveTransactionResponse } from '../models/retrieveTransactionResponse';
import { VoidTransactionResponse } from '../models/voidTransactionResponse';
import { BaseApi } from './baseApi';
export declare class TransactionsApi extends BaseApi {
    /**
     * Lists refunds for one of a business's locations.
     *
     * In addition to full or partial tender refunds processed through Square APIs,
     * refunds may result from itemized returns or exchanges through Square's
     * Point of Sale applications.
     *
     * Refunds with a `status` of `PENDING` are not currently included in this
     * endpoint's response.
     *
     * Max results per [page](#paginatingresults): 50
     *
     * @param locationId  The ID of the location to list refunds for.
     * @param beginTime   The beginning of the requested reporting period, in RFC 3339 format.  See [Date
     *                              ranges](#dateranges) for details on date inclusivity/exclusivity.  Default value: The
     *                              current time minus one year.
     * @param endTime     The end of the requested reporting period, in RFC 3339 format.  See [Date
     *                              ranges](#dateranges) for details on date inclusivity/exclusivity.  Default value: The
     *                              current time.
     * @param sortOrder   The order in which results are listed in the response (`ASC` for oldest first,
     *                              `DESC` for newest first).  Default value: `DESC`
     * @param cursor      A pagination cursor returned by a previous call to this endpoint. Provide this to
     *                              retrieve the next set of results for your original query.  See [Paginating
     *                              results](#paginatingresults) for more information.
     * @return Response from the API call
     * @deprecated
     */
    listRefunds(locationId: string, beginTime?: string, endTime?: string, sortOrder?: string, cursor?: string, requestOptions?: RequestOptions): Promise<ApiResponse<ListRefundsResponse>>;
    /**
     * Lists transactions for a particular location.
     *
     * Transactions include payment information from sales and exchanges and refund
     * information from returns and exchanges.
     *
     * Max results per [page](#paginatingresults): 50
     *
     * @param locationId  The ID of the location to list transactions for.
     * @param beginTime   The beginning of the requested reporting period, in RFC 3339 format.  See [Date
     *                              ranges](#dateranges) for details on date inclusivity/exclusivity.  Default value: The
     *                              current time minus one year.
     * @param endTime     The end of the requested reporting period, in RFC 3339 format.  See [Date
     *                              ranges](#dateranges) for details on date inclusivity/exclusivity.  Default value: The
     *                              current time.
     * @param sortOrder   The order in which results are listed in the response (`ASC` for oldest first,
     *                              `DESC` for newest first).  Default value: `DESC`
     * @param cursor      A pagination cursor returned by a previous call to this endpoint. Provide this to
     *                              retrieve the next set of results for your original query.  See [Paginating
     *                              results](#paginatingresults) for more information.
     * @return Response from the API call
     * @deprecated
     */
    listTransactions(locationId: string, beginTime?: string, endTime?: string, sortOrder?: string, cursor?: string, requestOptions?: RequestOptions): Promise<ApiResponse<ListTransactionsResponse>>;
    /**
     * Charges a card represented by a card nonce or a customer's card on file.
     *
     * Your request to this endpoint must include _either_:
     *
     * - A value for the `card_nonce` parameter (to charge a card nonce generated
     * with the `SqPaymentForm`)
     * - Values for the `customer_card_id` and `customer_id` parameters (to charge
     * a customer's card on file)
     *
     * In order for an eCommerce payment to potentially qualify for
     * [Square chargeback protection](https://squareup.com/help/article/5394), you
     * _must_ provide values for the following parameters in your request:
     *
     * - `buyer_email_address`
     * - At least one of `billing_address` or `shipping_address`
     *
     * When this response is returned, the amount of Square's processing fee might not yet be
     * calculated. To obtain the processing fee, wait about ten seconds and call
     * [RetrieveTransaction](#endpoint-retrievetransaction). See the `processing_fee_money`
     * field of each [Tender included](#type-tender) in the transaction.
     *
     * @param locationId  The ID of the location to associate the created transaction with.
     * @param body        An object containing the fields to POST for the request.  See the
     *                                            corresponding object definition for field details.
     * @return Response from the API call
     * @deprecated
     */
    charge(locationId: string, body: ChargeRequest, requestOptions?: RequestOptions): Promise<ApiResponse<ChargeResponse>>;
    /**
     * Retrieves details for a single transaction.
     *
     * @param locationId     The ID of the transaction's associated location.
     * @param transactionId  The ID of the transaction to retrieve.
     * @return Response from the API call
     * @deprecated
     */
    retrieveTransaction(locationId: string, transactionId: string, requestOptions?: RequestOptions): Promise<ApiResponse<RetrieveTransactionResponse>>;
    /**
     * Captures a transaction that was created with the [Charge](#endpoint-charge)
     * endpoint with a `delay_capture` value of `true`.
     *
     *
     * See [Delayed capture transactions](https://developer.squareup.
     * com/docs/payments/transactions/overview#delayed-capture)
     * for more information.
     *
     * @param locationId
     * @param transactionId
     * @return Response from the API call
     * @deprecated
     */
    captureTransaction(locationId: string, transactionId: string, requestOptions?: RequestOptions): Promise<ApiResponse<CaptureTransactionResponse>>;
    /**
     * Initiates a refund for a previously charged tender.
     *
     * You must issue a refund within 120 days of the associated payment. See
     * [this article](https://squareup.com/help/us/en/article/5060) for more information
     * on refund behavior.
     *
     * NOTE: Card-present transactions with Interac credit cards **cannot be
     * refunded using the Connect API**. Interac transactions must refunded
     * in-person (e.g., dipping the card using POS app).
     *
     * @param locationId     The ID of the original transaction's associated location.
     * @param transactionId  The ID of the original transaction that includes the tender
     *                                                     to refund.
     * @param body           An object containing the fields to POST for the request.  See
     *                                                     the corresponding object definition for field details.
     * @return Response from the API call
     * @deprecated
     */
    createRefund(locationId: string, transactionId: string, body: CreateRefundRequest, requestOptions?: RequestOptions): Promise<ApiResponse<CreateRefundResponse>>;
    /**
     * Cancels a transaction that was created with the [Charge](#endpoint-charge)
     * endpoint with a `delay_capture` value of `true`.
     *
     *
     * See [Delayed capture transactions](https://developer.squareup.
     * com/docs/payments/transactions/overview#delayed-capture)
     * for more information.
     *
     * @param locationId
     * @param transactionId
     * @return Response from the API call
     * @deprecated
     */
    voidTransaction(locationId: string, transactionId: string, requestOptions?: RequestOptions): Promise<ApiResponse<VoidTransactionResponse>>;
}
