import { Schema } from '../schema';
import { Customer } from './customer';
import { Error } from './error';
/**
 * Defines the fields that are included in the response body of
 * a request to the CreateCustomer endpoint.
 * One of `errors` or `customer` is present in a given response (never both).
 */
export interface CreateCustomerResponse {
    /** Any errors that occurred during the request. */
    errors?: Error[];
    /**
     * Represents a Square customer profile, which can have one or more
     * cards on file associated with it.
     */
    customer?: Customer;
}
export declare const createCustomerResponseSchema: Schema<CreateCustomerResponse>;
