import { Schema } from '../schema';
import { LoyaltyAccount } from './loyaltyAccount';
/** A request to create a new loyalty account. */
export interface CreateLoyaltyAccountRequest {
    /**
     * Describes a loyalty account. For more information, see
     * [Loyalty Overview](https://developer.squareup.com/docs/loyalty/overview).
     */
    loyaltyAccount: LoyaltyAccount;
    /**
     * A unique string that identifies this `CreateLoyaltyAccount` request.
     * Keys can be any valid string, but must be unique for every request.
     */
    idempotencyKey: string;
}
export declare const createLoyaltyAccountRequestSchema: Schema<CreateLoyaltyAccountRequest>;
