import { Schema } from '../schema';
import { V1Money } from './v1Money';
import { V1PaymentTax } from './v1PaymentTax';
/** V1PaymentSurcharge */
export interface V1PaymentSurcharge {
    /** The name of the surcharge. */
    name?: string;
    appliedMoney?: V1Money;
    /** The amount of the surcharge as a percentage. The percentage is provided as a string representing the decimal equivalent of the percentage. For example, "0.7" corresponds to a 7% surcharge. Exactly one of rate or amount_money should be set. */
    rate?: string;
    amountMoney?: V1Money;
    type?: string;
    /** Indicates whether the surcharge is taxable. */
    taxable?: boolean;
    /** The list of taxes that should be applied to the surcharge. */
    taxes?: V1PaymentTax[];
    /** A Square-issued unique identifier associated with the surcharge. */
    surchargeId?: string;
}
export declare const v1PaymentSurchargeSchema: Schema<V1PaymentSurcharge>;
