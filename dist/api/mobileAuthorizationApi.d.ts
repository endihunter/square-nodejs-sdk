import { ApiResponse } from '../apiResponse';
import { RequestOptions } from '../http/requestBuilder';
import { CreateMobileAuthorizationCodeRequest } from '../models/createMobileAuthorizationCodeRequest';
import { CreateMobileAuthorizationCodeResponse } from '../models/createMobileAuthorizationCodeResponse';
import { BaseApi } from './baseApi';
export declare class MobileAuthorizationApi extends BaseApi {
    /**
     * Generates code to authorize a mobile application to connect to a Square card reader
     *
     * Authorization codes are one-time-use and expire __60 minutes__ after being issued.
     *
     * __Important:__ The `Authorization` header you provide to this endpoint must have the following
     * format:
     *
     * ```
     * Authorization: Bearer ACCESS_TOKEN
     * ```
     *
     * Replace `ACCESS_TOKEN` with a
     * [valid production authorization credential](https://developer.squareup.com/docs/build-basics/access-
     * tokens).
     *
     * @param body An object containing the fields to POST for the
     *                                                            request.  See the corresponding object definition for
     *                                                            field details.
     * @return Response from the API call
     */
    createMobileAuthorizationCode(body: CreateMobileAuthorizationCodeRequest, requestOptions?: RequestOptions): Promise<ApiResponse<CreateMobileAuthorizationCodeResponse>>;
}
