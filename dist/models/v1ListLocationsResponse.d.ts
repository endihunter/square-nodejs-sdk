import { Schema } from '../schema';
import { V1Merchant } from './v1Merchant';
export interface V1ListLocationsResponse {
    items?: V1Merchant[];
}
export declare const v1ListLocationsResponseSchema: Schema<V1ListLocationsResponse>;
