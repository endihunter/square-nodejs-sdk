import { Schema } from '../schema';
import { Address } from './address';
/**
 * Defines the body parameters that can be provided in a request to the
 * UpdateCustomer endpoint.
 */
export interface UpdateCustomerRequest {
    /** The given (i.e., first) name associated with the customer profile. */
    givenName?: string;
    /** The family (i.e., last) name associated with the customer profile. */
    familyName?: string;
    /** A business name associated with the customer profile. */
    companyName?: string;
    /** A nickname for the customer profile. */
    nickname?: string;
    /** The email address associated with the customer profile. */
    emailAddress?: string;
    /** Represents a physical address. */
    address?: Address;
    /** The 11-digit phone number associated with the customer profile. */
    phoneNumber?: string;
    /**
     * An optional, second ID used to associate the customer profile with an
     * entity in another system.
     */
    referenceId?: string;
    /** A custom note associated with the customer profile. */
    note?: string;
    /**
     * The birthday associated with the customer profile, in RFC 3339 format.
     * Year is optional, timezone and times are not allowed.
     * For example: `0000-09-01T00:00:00-00:00` indicates a birthday on September 1st.
     * `1998-09-01T00:00:00-00:00` indications a birthday on September 1st __1998__.
     */
    birthday?: string;
}
export declare const updateCustomerRequestSchema: Schema<UpdateCustomerRequest>;
