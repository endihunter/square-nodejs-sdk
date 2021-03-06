import { Schema } from '../schema';
import { V1Money } from './v1Money';
import { V1SettlementEntry } from './v1SettlementEntry';
/** V1Settlement */
export interface V1Settlement {
    /** The settlement's unique identifier. */
    id?: string;
    status?: string;
    totalMoney?: V1Money;
    /** The time when the settlement was submitted for deposit or withdrawal, in ISO 8601 format. */
    initiatedAt?: string;
    /** The Square-issued unique identifier for the bank account associated with the settlement. */
    bankAccountId?: string;
    /** The entries included in this settlement. */
    entries?: V1SettlementEntry[];
}
export declare const v1SettlementSchema: Schema<V1Settlement>;
