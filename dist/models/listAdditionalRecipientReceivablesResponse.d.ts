import { Schema } from '../schema';
import { AdditionalRecipientReceivable } from './additionalRecipientReceivable';
import { Error } from './error';
/**
 * Defines the fields that are included in the response body of
 * a request to the [ListAdditionalRecipientReceivables](#endpoint-listadditionalrecipientreceivables) endpoint.
 * One of `errors` or `additional_recipient_receivables` is present in a given response (never both).
 */
export interface ListAdditionalRecipientReceivablesResponse {
    /** Any errors that occurred during the request. */
    errors?: Error[];
    /** An array of AdditionalRecipientReceivables that match your query. */
    receivables?: AdditionalRecipientReceivable[];
    /**
     * A pagination cursor for retrieving the next set of results,
     * if any remain. Provide this value as the `cursor` parameter in a subsequent
     * request to this endpoint.
     * See [Paginating results](#paginatingresults) for more information.
     */
    cursor?: string;
}
export declare const listAdditionalRecipientReceivablesResponseSchema: Schema<ListAdditionalRecipientReceivablesResponse>;
