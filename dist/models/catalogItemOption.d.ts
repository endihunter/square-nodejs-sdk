import { Schema } from '../schema';
import { CatalogObject } from './catalogObject';
/** A group of variations for a `CatalogItem`. */
export interface CatalogItemOption {
    /**
     * The item option's display name for the seller. Must be unique across
     * all item options. This is a searchable attribute for use in applicable query filters.
     */
    name?: string;
    /** The item option's display name for the customer. This is a searchable attribute for use in applicable query filters. */
    displayName?: string;
    /**
     * The item option's human-readable description. Displayed in the Square
     * Point of Sale app for the seller and in the Online Store or on receipts for
     * the buyer. This is a searchable attribute for use in applicable query filters.
     */
    description?: string;
    /** If true, display colors for entries in `values` when present. */
    showColors?: boolean;
    /**
     * A list of CatalogObjects containing the
     * `CatalogItemOptionValue`s for this item.
     */
    values?: CatalogObject[];
}
export declare const catalogItemOptionSchema: Schema<CatalogItemOption>;
