/**
 * Validates the protocol and removes duplicate forward slashes
 *
 * @param url URL to clean
 * @returns Sanitized URL
 */
export declare function sanitizeUrl(url: string): string;
/**
 * Check whether value is an instance of Blob
 *
 * @remark
 * Reference: https://github.com/sindresorhus/is-blob/blob/master/index.js
 *
 * @param value Value to check
 * @returns True if the value is a Blob instance
 */
export declare function isBlob(value: unknown): value is Blob;
/**
 * Create warning for deprecated method usage.
 *
 * This is called once per deprecated method. If this method is called again
 * with the same arguments, no warning is generated.
 *
 * @param methodName Method name for deprecated method
 * @param notice Optional message for deprecation
 */
export declare function deprecated(methodName: string, notice?: string): void;
