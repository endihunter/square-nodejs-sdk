import { Schema } from '../schema';
import { Order } from './order';
/**
 * Defines the fields that are included in requests to the
 * [UpdateOrder](#endpoint-orders-updateorder) endpoint.
 */
export interface UpdateOrderRequest {
    /**
     * Contains all information related to a single order to process with Square,
     * including line items that specify the products to purchase. Order objects also
     * include information on any associated tenders, refunds, and returns.
     * All Connect V2 Transactions have all been converted to Orders including all associated
     * itemization data.
     */
    order?: Order;
    /**
     * The [dot notation paths](https://developer.squareup.com/docs/orders-api/manage-orders#on-dot-notation)
     * fields to clear. For example, `line_items[uid].note`
     * [Read more about Deleting fields](https://developer.squareup.com/docs/orders-api/manage-orders#delete-fields).
     */
    fieldsToClear?: string[];
    /**
     * A value you specify that uniquely identifies this update request
     * If you're unsure whether a particular update was applied to an order successfully,
     * you can reattempt it with the same idempotency key without
     * worrying about creating duplicate updates to the order.
     * The latest order version will be returned.
     * See [Idempotency](https://developer.squareup.com/docs/basics/api101/idempotency) for more information.
     */
    idempotencyKey?: string;
}
export declare const updateOrderRequestSchema: Schema<UpdateOrderRequest>;
