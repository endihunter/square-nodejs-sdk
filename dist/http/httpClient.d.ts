import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { HttpRequest } from './httpRequest';
import { HttpResponse } from './httpResponse';
export declare const DEFAULT_AXIOS_CONFIG_OVERRIDES: AxiosRequestConfig;
export declare const DEFAULT_TIMEOUT: number;
/**
 * HTTP client implementation.
 *
 * This implementation is a wrapper over the Axios client.
 */
export declare class HttpClient {
    private _axiosInstance;
    private _timeout;
    constructor({ clientConfigOverrides, timeout, }?: {
        clientConfigOverrides?: AxiosRequestConfig;
        timeout?: number;
    });
    /** Converts an HttpRequest object to an Axios request. */
    convertHttpRequest(req: HttpRequest): AxiosRequestConfig;
    /** Converts an Axios response to an HttpResponse object. */
    convertHttpResponse(resp: AxiosResponse): HttpResponse;
    /**
     * Executes the HttpRequest with the given options and returns the HttpResponse
     * or throws an error.
     */
    executeRequest(request: HttpRequest, requestOptions?: {
        abortSignal?: AbortSignal;
    }): Promise<HttpResponse>;
    private abortError;
}
