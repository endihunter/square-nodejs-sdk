import { Schema } from '../schema';
import { AdditionalRecipientReceivableRefund } from './additionalRecipientReceivableRefund';
import { Error } from './error';
/**
 * Defines the fields that are included in the response body of
 * a request to the [ListAdditionalRecipientReceivableRefunds](#endpoint-listadditionalrecipientreceivablerefunds) endpoint.
 * One of `errors` or `additional_recipient_receivable_refunds` is present in a given response (never both).
 */
export interface ListAdditionalRecipientReceivableRefundsResponse {
    /** Any errors that occurred during the request. */
    errors?: Error[];
    /** An array of AdditionalRecipientReceivableRefunds that match your query. */
    receivableRefunds?: AdditionalRecipientReceivableRefund[];
    /**
     * A pagination cursor for retrieving the next set of results,
     * if any remain. Provide this value as the `cursor` parameter in a subsequent
     * request to this endpoint.
     * See [Paginating results](#paginatingresults) for more information.
     */
    cursor?: string;
}
export declare const listAdditionalRecipientReceivableRefundsResponseSchema: Schema<ListAdditionalRecipientReceivableRefundsResponse>;
