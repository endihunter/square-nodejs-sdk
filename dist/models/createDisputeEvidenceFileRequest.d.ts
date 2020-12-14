import { Schema } from '../schema';
/** Defines parameters for a CreateDisputeEvidenceFile request. */
export interface CreateDisputeEvidenceFileRequest {
    /**
     * Unique ID. For more information,
     * see [Idempotency](https://developer.squareup.com/docs/working-with-apis/idempotency).
     */
    idempotencyKey: string;
    /** Type of the dispute evidence. */
    evidenceType?: string;
    /**
     * The MIME type of the uploaded file.
     * One of image/heic, image/heif, image/jpeg, application/pdf,  image/png, image/tiff.
     */
    contentType?: string;
}
export declare const createDisputeEvidenceFileRequestSchema: Schema<CreateDisputeEvidenceFileRequest>;
