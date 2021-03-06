import { Schema } from '../schema';
/** Represents a set of SearchSubscriptionsQuery filters used to limit the set of Subscriptions returned by SearchSubscriptions. */
export interface SearchSubscriptionsFilter {
    /** A filter to select subscriptions based on the customer. */
    customerIds?: string[];
    /** A filter to select subscriptions based the location. */
    locationIds?: string[];
}
export declare const searchSubscriptionsFilterSchema: Schema<SearchSubscriptionsFilter>;
