import { Schema } from '../schema';
import { V1Money } from './v1Money';
import { V1PaymentSurcharge } from './v1PaymentSurcharge';
import { V1PaymentTax } from './v1PaymentTax';
/** V1Refund */
export interface V1Refund {
    type?: string;
    /** The merchant-specified reason for the refund. */
    reason?: string;
    refundedMoney?: V1Money;
    refundedProcessingFeeMoney?: V1Money;
    refundedTaxMoney?: V1Money;
    refundedAdditiveTaxMoney?: V1Money;
    /** All of the additive taxes associated with the refund. */
    refundedAdditiveTax?: V1PaymentTax[];
    refundedInclusiveTaxMoney?: V1Money;
    /** All of the inclusive taxes associated with the refund. */
    refundedInclusiveTax?: V1PaymentTax[];
    refundedTipMoney?: V1Money;
    refundedDiscountMoney?: V1Money;
    refundedSurchargeMoney?: V1Money;
    /** A list of all surcharges associated with the refund. */
    refundedSurcharges?: V1PaymentSurcharge[];
    /** The time when the merchant initiated the refund for Square to process, in ISO 8601 format. */
    createdAt?: string;
    /** The time when Square processed the refund on behalf of the merchant, in ISO 8601 format. */
    processedAt?: string;
    /** A Square-issued ID associated with the refund. For single-tender refunds, payment_id is the ID of the original payment ID. For split-tender refunds, payment_id is the ID of the original tender. For exchange-based refunds (is_exchange == true), payment_id is the ID of the original payment ID even if the payment includes other tenders. */
    paymentId?: string;
    merchantId?: string;
    /** Indicates whether or not the refund is associated with an exchange. If is_exchange is true, the refund reflects the value of goods returned in the exchange not the total money refunded. */
    isExchange?: boolean;
}
export declare const v1RefundSchema: Schema<V1Refund>;
