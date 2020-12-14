import { Schema } from '../schema';
import { Error } from './error';
import { TerminalCheckout } from './terminalCheckout';
export interface SearchTerminalCheckoutsResponse {
    /** Information on errors encountered during the request. */
    errors?: Error[];
    /** The requested search result of `TerminalCheckout`s. */
    checkouts?: TerminalCheckout[];
    /**
     * The pagination cursor to be used in a subsequent request. If empty,
     * this is the final response.
     * See [Pagination](https://developer.squareup.com/docs/basics/api101/pagination) for more information.
     */
    cursor?: string;
}
export declare const searchTerminalCheckoutsResponseSchema: Schema<SearchTerminalCheckoutsResponse>;
