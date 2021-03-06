import { Schema } from '../schema';
export interface V1ListTimecardsRequest {
    /** The order (e.g., chronological or alphabetical) in which results from a request are returned. */
    order?: string;
    /** If provided, the endpoint returns only timecards for the employee with the specified ID. */
    employeeId?: string;
    /** If filtering results by their clockin_time field, the beginning of the requested reporting period, in ISO 8601 format. */
    beginClockinTime?: string;
    /** If filtering results by their clockin_time field, the end of the requested reporting period, in ISO 8601 format. */
    endClockinTime?: string;
    /** If filtering results by their clockout_time field, the beginning of the requested reporting period, in ISO 8601 format. */
    beginClockoutTime?: string;
    /** If filtering results by their clockout_time field, the end of the requested reporting period, in ISO 8601 format. */
    endClockoutTime?: string;
    /** If filtering results by their updated_at field, the beginning of the requested reporting period, in ISO 8601 format. */
    beginUpdatedAt?: string;
    /** If filtering results by their updated_at field, the end of the requested reporting period, in ISO 8601 format. */
    endUpdatedAt?: string;
    /** If true, only deleted timecards are returned. If false, only valid timecards are returned.If you don't provide this parameter, both valid and deleted timecards are returned. */
    deleted?: boolean;
    /** The maximum integer number of employee entities to return in a single response. Default 100, maximum 200. */
    limit?: number;
    /**
     * A pagination cursor to retrieve the next set of results for your
     * original query to the endpoint.
     */
    batchToken?: string;
}
export declare const v1ListTimecardsRequestSchema: Schema<V1ListTimecardsRequest>;
