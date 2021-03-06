import { Schema } from '../schema';
import { Error } from './error';
import { LoyaltyAccount } from './loyaltyAccount';
/** A response that includes the loyalty account. */
export interface RetrieveLoyaltyAccountResponse {
    /** Any errors that occurred during the request. */
    errors?: Error[];
    /**
     * Describes a loyalty account. For more information, see
     * [Loyalty Overview](https://developer.squareup.com/docs/loyalty/overview).
     */
    loyaltyAccount?: LoyaltyAccount;
}
export declare const retrieveLoyaltyAccountResponseSchema: Schema<RetrieveLoyaltyAccountResponse>;
