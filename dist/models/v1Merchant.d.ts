import { Schema } from '../schema';
import { Address } from './address';
import { V1MerchantLocationDetails } from './v1MerchantLocationDetails';
import { V1PhoneNumber } from './v1PhoneNumber';
/**
 * Defines the fields that are included in the response body of
 * a request to the **RetrieveBusiness** endpoint.
 */
export interface V1Merchant {
    /** The merchant account's unique identifier. */
    id?: string;
    /** The name associated with the merchant account. */
    name?: string;
    /** The email address associated with the merchant account. */
    email?: string;
    accountType?: string;
    /** Capabilities that are enabled for the merchant's Square account. Capabilities that are not listed in this array are not enabled for the account. */
    accountCapabilities?: string[];
    /** The country associated with the merchant account, in ISO 3166-1-alpha-2 format. */
    countryCode?: string;
    /** The language associated with the merchant account, in BCP 47 format. */
    languageCode?: string;
    /** The currency associated with the merchant account, in ISO 4217 format. For example, the currency code for US dollars is USD. */
    currencyCode?: string;
    /** The name of the merchant's business. */
    businessName?: string;
    /** Represents a physical address. */
    businessAddress?: Address;
    /** Represents a phone number. */
    businessPhone?: V1PhoneNumber;
    businessType?: string;
    /** Represents a physical address. */
    shippingAddress?: Address;
    /** Additional information for a single-location account specified by its associated business account, if it has one. */
    locationDetails?: V1MerchantLocationDetails;
    /** The URL of the merchant's online store. */
    marketUrl?: string;
}
export declare const v1MerchantSchema: Schema<V1Merchant>;
