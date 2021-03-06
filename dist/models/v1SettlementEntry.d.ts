import { Schema } from '../schema';
import { V1Money } from './v1Money';
/** V1SettlementEntry */
export interface V1SettlementEntry {
    /** The settlement's unique identifier. */
    paymentId?: string;
    type?: string;
    amountMoney?: V1Money;
    feeMoney?: V1Money;
}
export declare const v1SettlementEntrySchema: Schema<V1SettlementEntry>;
