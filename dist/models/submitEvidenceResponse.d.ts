import { Schema } from '../schema';
import { Dispute } from './dispute';
import { Error } from './error';
/** Defines fields in a SubmitEvidence response. */
export interface SubmitEvidenceResponse {
    /** Information on errors encountered during the request. */
    errors?: Error[];
    /** Represents a dispute a cardholder initiated with their bank. */
    dispute?: Dispute;
}
export declare const submitEvidenceResponseSchema: Schema<SubmitEvidenceResponse>;
