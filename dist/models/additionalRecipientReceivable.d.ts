import { Schema } from '../schema';
import { AdditionalRecipientReceivableRefund } from './additionalRecipientReceivableRefund';
import { Money } from './money';
/** Represents a monetary distribution of part of a [Transaction](#type-transaction)'s amount for Transactions which included additional recipients. The location of this receivable is that same as the one specified in the [AdditionalRecipient](#type-additionalrecipient). */
export interface AdditionalRecipientReceivable {
    /** The additional recipient receivable's unique ID, issued by Square payments servers. */
    id: string;
    /** The ID of the transaction that the additional recipient receivable was applied to. */
    transactionId: string;
    /** The ID of the location that created the receivable. This is the location ID on the associated transaction. */
    transactionLocationId: string;
    /**
     * Represents an amount of money. `Money` fields can be signed or unsigned.
     * Fields that do not explicitly define whether they are signed or unsigned are
     * considered unsigned and can only hold positive amounts. For signed fields, the
     * sign of the value indicates the purpose of the money transfer. See
     * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
     * for more information.
     */
    amountMoney: Money;
    /** The time when the additional recipient receivable was created, in RFC 3339 format. */
    createdAt?: string;
    /** Any refunds of the receivable that have been applied. */
    refunds?: AdditionalRecipientReceivableRefund[];
}
export declare const additionalRecipientReceivableSchema: Schema<AdditionalRecipientReceivable>;
