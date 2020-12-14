/// <reference types="node" />
import { HttpContext } from '../http/httpContext';
import { HttpRequest } from '../http/httpRequest';
import { ApiResponse } from '../apiResponse';
import { Error as SquareError } from '../models/error';
/**
 * Thrown when the HTTP status code is not okay.
 *
 * The ApiError extends the ApiResponse interface, so all ApiResponse
 * properties are available.
 */
export declare class ApiError<T = {}> extends Error implements ApiResponse<T | undefined> {
    request: HttpRequest;
    statusCode: number;
    headers: Record<string, string>;
    result: T | undefined;
    body: string | Blob | NodeJS.ReadableStream;
    errors?: SquareError[];
    constructor(context: HttpContext, message: string);
}
