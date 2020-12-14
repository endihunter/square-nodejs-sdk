import { Schema } from '../schema';
export interface V1DeletePageCellRequest {
    /** The row of the cell to clear. Always an integer between 0 and 4, inclusive. Row 0 is the top row. */
    row?: string;
    /** The column of the cell to clear. Always an integer between 0 and 4, inclusive. Column 0 is the leftmost column. */
    column?: string;
}
export declare const v1DeletePageCellRequestSchema: Schema<V1DeletePageCellRequest>;
