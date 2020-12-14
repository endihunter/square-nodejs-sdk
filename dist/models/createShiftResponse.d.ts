import { Schema } from '../schema';
import { Error } from './error';
import { Shift } from './shift';
/**
 * The response to the request to create a `Shift`. Contains
 * the created `Shift` object. May contain a set of `Error` objects if
 * the request resulted in errors.
 */
export interface CreateShiftResponse {
    /**
     * A record of the hourly rate, start, and end times for a single work shift
     * for an employee. May include a record of the start and end times for breaks
     * taken during the shift.
     */
    shift?: Shift;
    /** Any errors that occurred during the request. */
    errors?: Error[];
}
export declare const createShiftResponseSchema: Schema<CreateShiftResponse>;