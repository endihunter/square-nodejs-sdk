import { Schema } from '../schema';
import { TerminalCheckoutQuery } from './terminalCheckoutQuery';
export interface SearchTerminalCheckoutsRequest {
    query?: TerminalCheckoutQuery;
    /**
     * A pagination cursor returned by a previous call to this endpoint.
     * Provide this to retrieve the next set of results for the original query.
     * See [Pagination](https://developer.squareup.com/docs/basics/api101/pagination) for more information.
     */
    cursor?: string;
    /** Limit the number of results returned for a single request. */
    limit?: number;
}
export declare const searchTerminalCheckoutsRequestSchema: Schema<SearchTerminalCheckoutsRequest>;
