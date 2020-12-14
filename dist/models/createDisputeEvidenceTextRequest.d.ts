import { Schema } from '../schema';
/** Defines parameters for a CreateDisputeEvidenceText request. */
export interface CreateDisputeEvidenceTextRequest {
    /**
     * Unique ID. For more information,
     * see [Idempotency](https://developer.squareup.com/docs/working-with-apis/idempotency).
     */
    idempotencyKey: string;
    /** Type of the dispute evidence. */
    evidenceType?: string;
    /** The evidence string. */
    evidenceText: string;
}
export declare const createDisputeEvidenceTextRequestSchema: Schema<CreateDisputeEvidenceTextRequest>;
