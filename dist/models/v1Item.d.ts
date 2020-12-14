import { Schema } from '../schema';
import { V1Category } from './v1Category';
import { V1Fee } from './v1Fee';
import { V1ItemImage } from './v1ItemImage';
import { V1ModifierList } from './v1ModifierList';
import { V1Variation } from './v1Variation';
/** V1Item */
export interface V1Item {
    /** The item's ID. Must be unique among all entity IDs ever provided on behalf of the merchant. You can never reuse an ID. This value can include alphanumeric characters, dashes (-), and underscores (_). */
    id?: string;
    /** The item's name. */
    name?: string;
    /** The item's description. */
    description?: string;
    type?: string;
    color?: string;
    /** The text of the item's display label in Square Point of Sale. Only up to the first five characters of the string are used. */
    abbreviation?: string;
    visibility?: string;
    /** If true, the item can be added to shipping orders from the merchant's online store. */
    availableOnline?: boolean;
    /** V1ItemImage */
    masterImage?: V1ItemImage;
    /** V1Category */
    category?: V1Category;
    /** The item's variations. You must specify at least one variation. */
    variations?: V1Variation[];
    /** The modifier lists that apply to the item, if any. */
    modifierLists?: V1ModifierList[];
    /** The fees that apply to the item, if any. */
    fees?: V1Fee[];
    /** Deprecated. This field is not used. */
    taxable?: boolean;
    /** The ID of the item's category, if any. */
    categoryId?: string;
    /** If true, the item can be added to pickup orders from the merchant's online store. Default value: false */
    availableForPickup?: boolean;
    /** The ID of the CatalogObject in the Connect v2 API. Objects that are shared across multiple locations share the same v2 ID. */
    v2Id?: string;
}
export declare const v1ItemSchema: Schema<V1Item>;
