import { Schema } from '../schema';
/** V1PageCell */
export interface V1PageCell {
    /** The unique identifier of the page the cell is included on. */
    pageId?: string;
    /** The row of the cell. Always an integer between 0 and 4, inclusive. */
    row?: number;
    /** The column of the cell. Always an integer between 0 and 4, inclusive. */
    column?: number;
    objectType?: string;
    /** The unique identifier of the entity represented in the cell. Not present for cells with an object_type of PLACEHOLDER. */
    objectId?: string;
    placeholderType?: string;
}
export declare const v1PageCellSchema: Schema<V1PageCell>;
