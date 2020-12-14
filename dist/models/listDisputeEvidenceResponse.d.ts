import { Schema } from '../schema';
import { DisputeEvidence } from './disputeEvidence';
import { Error } from './error';
/** Defines fields in a ListDisputeEvidence response. */
export interface ListDisputeEvidenceResponse {
    /** The list of evidence previously uploaded to the specified dispute. */
    evidence?: DisputeEvidence[];
    /** Information on errors encountered during the request. */
    errors?: Error[];
}
export declare const listDisputeEvidenceResponseSchema: Schema<ListDisputeEvidenceResponse>;
