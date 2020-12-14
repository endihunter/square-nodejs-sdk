import { Schema } from '../schema';
import { LoyaltyProgramRewardDefinition } from './loyaltyProgramRewardDefinition';
/** Describes a loyalty program reward tier. */
export interface LoyaltyProgramRewardTier {
    /** The Square-assigned ID of the reward tier. */
    id: string;
    /** The points exchanged for the reward tier. */
    points: number;
    /** The name of the reward tier. */
    name: string;
    /** Provides details about the loyalty program reward tier definition. */
    definition: LoyaltyProgramRewardDefinition;
    /** The timestamp when the reward tier was created, in RFC 3339 format. */
    createdAt: string;
}
export declare const loyaltyProgramRewardTierSchema: Schema<LoyaltyProgramRewardTier>;
