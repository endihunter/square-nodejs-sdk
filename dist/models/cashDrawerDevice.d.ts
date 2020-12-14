import { Schema } from '../schema';
export interface CashDrawerDevice {
    /** The device Square-issued ID */
    id?: string;
    /** The device merchant-specified name. */
    name?: string;
}
export declare const cashDrawerDeviceSchema: Schema<CashDrawerDevice>;
