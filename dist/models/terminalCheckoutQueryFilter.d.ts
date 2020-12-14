import { Schema } from '../schema';
import { TimeRange } from './timeRange';
export interface TerminalCheckoutQueryFilter {
    /**
     * `TerminalCheckout`s associated with a specific device. If no device is specified then all
     * `TerminalCheckout`s for the merchant will be displayed.
     */
    deviceId?: string;
    /**
     * Represents a generic time range. The start and end values are
     * represented in RFC 3339 format. Time ranges are customized to be
     * inclusive or exclusive based on the needs of a particular endpoint.
     * Refer to the relevant endpoint-specific documentation to determine
     * how time ranges are handled.
     */
    createdAt?: TimeRange;
    /**
     * Filtered results with the desired status of the `TerminalCheckout`
     * Options: PENDING, IN_PROGRESS, CANCELED, COMPLETED
     */
    status?: string;
}
export declare const terminalCheckoutQueryFilterSchema: Schema<TerminalCheckoutQueryFilter>;
