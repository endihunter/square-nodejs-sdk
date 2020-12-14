import { Schema } from '../schema';
import { Dispute } from './dispute';
import { Error } from './error';
/** Defines fields in a ListDisputes response. */
export interface ListDisputesResponse {
    /** Information on errors encountered during the request. */
    errors?: Error[];
    /** The list of Disputes. */
    disputes?: Dispute[];
    /**
     * The pagination cursor to be used in a subsequent request.
     * If unset, this is the final response.
     * For more information, see [Paginating](https://developer.squareup.com/docs/basics/api101/pagination).
     */
    cursor?: string;
}
export declare const listDisputesResponseSchema: Schema<ListDisputesResponse>;
