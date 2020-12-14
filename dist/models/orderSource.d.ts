import { Schema } from '../schema';
/** Represents the origination details of an order. */
export interface OrderSource {
    /**
     * The name used to identify the place (physical or digital) that an order originates.
     * If unset, the name defaults to the name of the application that created the order.
     */
    name?: string;
}
export declare const orderSourceSchema: Schema<OrderSource>;
