import { Schema } from '../schema';
import { SourceApplication } from './sourceApplication';
/**
 * Represents the quantity of an item variation that is physically present
 * at a specific location, verified by a seller or a seller's employee. For example,
 * a physical count might come from an employee counting the item variations on
 * hand or from syncing with an external system.
 */
export interface InventoryPhysicalCount {
    /**
     * A unique ID generated by Square for the
     * [InventoryPhysicalCount](#type-inventoryphysicalcount).
     */
    id?: string;
    /**
     * An optional ID provided by the application to tie the
     * [InventoryPhysicalCount](#type-inventoryphysicalcount) to an external
     * system.
     */
    referenceId?: string;
    /**
     * The Square generated ID of the
     * `CatalogObject` being tracked.
     */
    catalogObjectId?: string;
    /**
     * The `CatalogObjectType` of the
     * `CatalogObject` being tracked. Tracking is only
     * supported for the `ITEM_VARIATION` type.
     */
    catalogObjectType?: string;
    /** Indicates the state of a tracked item quantity in the lifecycle of goods. */
    state?: string;
    /**
     * The Square ID of the [Location](#type-location) where the related
     * quantity of items are being tracked.
     */
    locationId?: string;
    /**
     * The number of items affected by the physical count as a decimal string.
     * Can support up to 5 digits after the decimal point.
     */
    quantity?: string;
    /** Provides information about the application used to generate a change. */
    source?: SourceApplication;
    /**
     * The Square ID of the [Employee](#type-employee) responsible for the
     * physical count.
     */
    employeeId?: string;
    /**
     * A client-generated timestamp in RFC 3339 format that indicates when
     * the physical count took place. For write actions, the `occurred_at`
     * timestamp cannot be older than 24 hours or in the future relative to the
     * time of the request.
     */
    occurredAt?: string;
    /**
     * A read-only timestamp in RFC 3339 format that indicates when Square
     * received the physical count.
     */
    createdAt?: string;
}
export declare const inventoryPhysicalCountSchema: Schema<InventoryPhysicalCount>;
