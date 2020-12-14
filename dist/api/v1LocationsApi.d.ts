import { ApiResponse } from '../apiResponse';
import { RequestOptions } from '../http/requestBuilder';
import { V1Merchant } from '../models/v1Merchant';
import { BaseApi } from './baseApi';
export declare class V1LocationsApi extends BaseApi {
    /**
     * Get the general information for a business.
     *
     * @return Response from the API call
     * @deprecated
     */
    retrieveBusiness(requestOptions?: RequestOptions): Promise<ApiResponse<V1Merchant>>;
    /**
     * Provides details for all business locations associated with a Square
     * account, including the Square-assigned object ID for the location.
     *
     * @return Response from the API call
     * @deprecated
     */
    listLocations(requestOptions?: RequestOptions): Promise<ApiResponse<V1Merchant[]>>;
}
