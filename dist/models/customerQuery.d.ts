import { Schema } from '../schema';
import { CustomerFilter } from './customerFilter';
import { CustomerSort } from './customerSort';
/**
 * Represents a query (including filtering criteria, sorting criteria, or both) used to search
 * for customer profiles.
 */
export interface CustomerQuery {
    /**
     * Represents a set of `CustomerQuery` filters used to limit the set of
     * `Customers` returned by `SearchCustomers`.
     */
    filter?: CustomerFilter;
    /** Specifies how searched customers profiles are sorted, including the sort key and sort order. */
    sort?: CustomerSort;
}
export declare const customerQuerySchema: Schema<CustomerQuery>;
