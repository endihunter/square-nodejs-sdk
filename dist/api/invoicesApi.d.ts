import { ApiResponse } from '../apiResponse';
import { RequestOptions } from '../http/requestBuilder';
import { CancelInvoiceRequest } from '../models/cancelInvoiceRequest';
import { CancelInvoiceResponse } from '../models/cancelInvoiceResponse';
import { CreateInvoiceRequest } from '../models/createInvoiceRequest';
import { CreateInvoiceResponse } from '../models/createInvoiceResponse';
import { DeleteInvoiceResponse } from '../models/deleteInvoiceResponse';
import { GetInvoiceResponse } from '../models/getInvoiceResponse';
import { ListInvoicesResponse } from '../models/listInvoicesResponse';
import { PublishInvoiceRequest } from '../models/publishInvoiceRequest';
import { PublishInvoiceResponse } from '../models/publishInvoiceResponse';
import { SearchInvoicesRequest } from '../models/searchInvoicesRequest';
import { SearchInvoicesResponse } from '../models/searchInvoicesResponse';
import { UpdateInvoiceRequest } from '../models/updateInvoiceRequest';
import { UpdateInvoiceResponse } from '../models/updateInvoiceResponse';
import { BaseApi } from './baseApi';
export declare class InvoicesApi extends BaseApi {
    /**
     * Returns a list of invoices for a given location. The response
     * is paginated. If truncated, the response includes a `cursor` that you
     * use in a subsequent request to fetch the next set of invoices.
     *
     * @param locationId  The ID of the location for which to list invoices.
     * @param cursor      A pagination cursor returned by a previous call to this endpoint.  Provide this
     *                              cursor to retrieve the next set of results for your original query.  For more
     *                              information, see [Pagination](https://developer.squareup.com/docs/working-with-
     *                              apis/pagination).
     * @param limit       The maximum number of invoices to return (200 is the maximum `limit`).  If not
     *                              provided, the server  uses a default limit of 100 invoices.
     * @return Response from the API call
     */
    listInvoices(locationId: string, cursor?: string, limit?: number, requestOptions?: RequestOptions): Promise<ApiResponse<ListInvoicesResponse>>;
    /**
     * Creates a draft [invoice](#type-invoice)
     * for an order created using the Orders API.
     *
     * A draft invoice remains in your account and no action is taken.
     * You must publish the invoice before Square can process it (send it to the customer's email address
     * or charge the customer’s card on file).
     *
     * @param body An object containing the fields to POST for the request.  See the
     *                                            corresponding object definition for field details.
     * @return Response from the API call
     */
    createInvoice(body: CreateInvoiceRequest, requestOptions?: RequestOptions): Promise<ApiResponse<CreateInvoiceResponse>>;
    /**
     * Searches for invoices from a location specified in
     * the filter. You can optionally specify customers in the filter for whom to
     * retrieve invoices. In the current implementation, you can only specify one location and
     * optionally one customer.
     *
     * The response is paginated. If truncated, the response includes a `cursor`
     * that you use in a subsequent request to fetch the next set of invoices.
     *
     * @param body An object containing the fields to POST for the request.  See the
     *                                             corresponding object definition for field details.
     * @return Response from the API call
     */
    searchInvoices(body: SearchInvoicesRequest, requestOptions?: RequestOptions): Promise<ApiResponse<SearchInvoicesResponse>>;
    /**
     * Deletes the specified invoice. When an invoice is deleted, the
     * associated Order status changes to CANCELED. You can only delete a draft
     * invoice (you cannot delete an invoice scheduled for publication, or a
     * published invoice).
     *
     * @param invoiceId  The ID of the invoice to delete.
     * @param version    The version of the [invoice](#type-invoice) to delete. If you do not know the version,
     *                             you can call [GetInvoice](#endpoint-Invoices-GetInvoice) or  [ListInvoices](#endpoint-
     *                             Invoices-ListInvoices).
     * @return Response from the API call
     */
    deleteInvoice(invoiceId: string, version?: number, requestOptions?: RequestOptions): Promise<ApiResponse<DeleteInvoiceResponse>>;
    /**
     * Retrieves an invoice by invoice ID.
     *
     * @param invoiceId  The id of the invoice to retrieve.
     * @return Response from the API call
     */
    getInvoice(invoiceId: string, requestOptions?: RequestOptions): Promise<ApiResponse<GetInvoiceResponse>>;
    /**
     * Updates an invoice by modifying field values, clearing field values, or both
     * as specified in the request.
     * There are no restrictions to updating an invoice in a draft state.
     * However, there are guidelines for updating a published invoice.
     *
     * @param invoiceId  The id of the invoice to update.
     * @param body       An object containing the fields to POST for the request.  See
     *                                                  the corresponding object definition for field details.
     * @return Response from the API call
     */
    updateInvoice(invoiceId: string, body: UpdateInvoiceRequest, requestOptions?: RequestOptions): Promise<ApiResponse<UpdateInvoiceResponse>>;
    /**
     * Cancels an invoice. The seller cannot collect payments for
     * the canceled invoice.
     *
     * You cannot cancel an invoice in a terminal state: `PAID`, `REFUNDED`, `CANCELED`, or `FAILED`.
     *
     * @param invoiceId  The ID of the [invoice](#type-invoice) to cancel.
     * @param body       An object containing the fields to POST for the request.  See
     *                                                  the corresponding object definition for field details.
     * @return Response from the API call
     */
    cancelInvoice(invoiceId: string, body: CancelInvoiceRequest, requestOptions?: RequestOptions): Promise<ApiResponse<CancelInvoiceResponse>>;
    /**
     * Publishes the specified draft invoice.
     *
     * After an invoice is published, Square
     * follows up based on the invoice configuration. For example, Square
     * sends the invoice to the customer's email address, charges the customer's card on file, or does
     * nothing. Square also makes the invoice available on a Square-hosted invoice page.
     *
     * The invoice `status` also changes from `DRAFT` to a status
     * based on the invoice configuration. For example, the status changes to `UNPAID` if
     * Square emails the invoice or `PARTIALLY_PAID` if Square charge a card on file for a portion of the
     * invoice amount).
     *
     * @param invoiceId  The id of the invoice to publish.
     * @param body       An object containing the fields to POST for the request.  See
     *                                                   the corresponding object definition for field details.
     * @return Response from the API call
     */
    publishInvoice(invoiceId: string, body: PublishInvoiceRequest, requestOptions?: RequestOptions): Promise<ApiResponse<PublishInvoiceResponse>>;
}
