import { Schema } from '../schema';
/** Provides metadata when the event `type` is `ACCUMULATE_POINTS`. */
export interface LoyaltyEventAccumulatePoints {
    /** The ID of the [loyalty program](#type-LoyaltyProgram). */
    loyaltyProgramId?: string;
    /** The number of points accumulated by the event. */
    points?: number;
    /**
     * The ID of the [order](#type-Order) for which the buyer accumulated the points.
     * This field is returned only if the Orders API is used to process orders.
     */
    orderId?: string;
}
export declare const loyaltyEventAccumulatePointsSchema: Schema<LoyaltyEventAccumulatePoints>;
