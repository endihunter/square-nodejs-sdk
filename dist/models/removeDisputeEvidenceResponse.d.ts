import { Schema } from '../schema';
import { Error } from './error';
/** Defines fields in a RemoveDisputeEvidence response. */
export interface RemoveDisputeEvidenceResponse {
    /** Information on errors encountered during the request. */
    errors?: Error[];
}
export declare const removeDisputeEvidenceResponseSchema: Schema<RemoveDisputeEvidenceResponse>;
