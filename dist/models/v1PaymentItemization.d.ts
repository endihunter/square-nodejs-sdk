import { Schema } from '../schema';
import { V1Money } from './v1Money';
import { V1PaymentDiscount } from './v1PaymentDiscount';
import { V1PaymentItemDetail } from './v1PaymentItemDetail';
import { V1PaymentModifier } from './v1PaymentModifier';
import { V1PaymentTax } from './v1PaymentTax';
/**
 * Payment include an` itemizations` field that lists the items purchased,
 * along with associated fees, modifiers, and discounts. Each itemization has an
 * `itemization_type` field that indicates which of the following the itemization
 * represents:
 * <ul>
 * <li>An item variation from the merchant's item library</li>
 * <li>A custom monetary amount</li>
 * <li>
 * An action performed on a Square gift card, such as activating or
 * reloading it.
 * </li>
 * </ul>
 * *Note**: itemization information included in a `Payment` object reflects
 * details collected **at the time of the payment**. Details such as the name or
 * price of items might have changed since the payment was processed.
 */
export interface V1PaymentItemization {
    /** The item's name. */
    name?: string;
    /** The quantity of the item purchased. This can be a decimal value. */
    quantity?: number;
    itemizationType?: string;
    /** V1PaymentItemDetail */
    itemDetail?: V1PaymentItemDetail;
    /** Notes entered by the merchant about the item at the time of payment, if any. */
    notes?: string;
    /** The name of the item variation purchased, if any. */
    itemVariationName?: string;
    totalMoney?: V1Money;
    singleQuantityMoney?: V1Money;
    grossSalesMoney?: V1Money;
    discountMoney?: V1Money;
    netSalesMoney?: V1Money;
    /** All taxes applied to this itemization. */
    taxes?: V1PaymentTax[];
    /** All discounts applied to this itemization. */
    discounts?: V1PaymentDiscount[];
    /** All modifier options applied to this itemization. */
    modifiers?: V1PaymentModifier[];
}
export declare const v1PaymentItemizationSchema: Schema<V1PaymentItemization>;
