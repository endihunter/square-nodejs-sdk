import { Schema } from '../schema';
/** A file to be uploaded as dispute evidence. */
export interface DisputeEvidenceFile {
    /** The file name including the file extension. For example: "receipt.tiff". */
    filename?: string;
    /** Dispute evidence files must one of application/pdf, image/heic, image/heif, image/jpeg, image/png, image/tiff formats. */
    filetype?: string;
}
export declare const disputeEvidenceFileSchema: Schema<DisputeEvidenceFile>;
