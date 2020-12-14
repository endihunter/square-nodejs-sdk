import { ApiResponse } from '../apiResponse';
import { RequestOptions } from '../http/requestBuilder';
import { ListAdditionalRecipientReceivableRefundsResponse } from '../models/listAdditionalRecipientReceivableRefundsResponse';
import { ListAdditionalRecipientReceivablesResponse } from '../models/listAdditionalRecipientReceivablesResponse';
import { BaseApi } from './baseApi';
export declare class ReportingApi extends BaseApi {
    /**
     * Returns a list of refunded transactions (across all possible originating locations) relating to
     * monies
     * credited to the provided location ID by another Square account using the `additional_recipients`
     * field in a transaction.
     *
     * Max results per [page](#paginatingresults): 50
     *
     * @param locationId  The ID of the location to list AdditionalRecipientReceivableRefunds for.
     * @param beginTime   The beginning of the requested reporting period, in RFC 3339 format.  See [Date
     *                              ranges](#dateranges) for details on date inclusivity/exclusivity.  Default value: The
     *                              current time minus one year.
     * @param endTime     The end of the requested reporting period, in RFC 3339 format.  See [Date
     *                              ranges](#dateranges) for details on date inclusivity/exclusivity.  Default value: The
     *                              current time.
     * @param sortOrder   The order in which results are listed in the response (`ASC` for oldest first,
     *                              `DESC` for newest first).  Default value: `DESC`
     * @param cursor      A pagination cursor returned by a previous call to this endpoint. Provide this to
     *                              retrieve the next set of results for your original query.  See [Paginating
     *                              results](#paginatingresults) for more information.
     * @return Response from the API call
     * @deprecated
     */
    listAdditionalRecipientReceivableRefunds(locationId: string, beginTime?: string, endTime?: string, sortOrder?: string, cursor?: string, requestOptions?: RequestOptions): Promise<ApiResponse<ListAdditionalRecipientReceivableRefundsResponse>>;
    /**
     * Returns a list of receivables (across all possible sending locations) representing monies credited
     * to the provided location ID by another Square account using the `additional_recipients` field in a
     * transaction.
     *
     * Max results per [page](#paginatingresults): 50
     *
     * @param locationId  The ID of the location to list AdditionalRecipientReceivables for.
     * @param beginTime   The beginning of the requested reporting period, in RFC 3339 format.  See [Date
     *                              ranges](#dateranges) for details on date inclusivity/exclusivity.  Default value: The
     *                              current time minus one year.
     * @param endTime     The end of the requested reporting period, in RFC 3339 format.  See [Date
     *                              ranges](#dateranges) for details on date inclusivity/exclusivity.  Default value: The
     *                              current time.
     * @param sortOrder   The order in which results are listed in the response (`ASC` for oldest first,
     *                              `DESC` for newest first).  Default value: `DESC`
     * @param cursor      A pagination cursor returned by a previous call to this endpoint. Provide this to
     *                              retrieve the next set of results for your original query.  See [Paginating
     *                              results](#paginatingresults) for more information.
     * @return Response from the API call
     * @deprecated
     */
    listAdditionalRecipientReceivables(locationId: string, beginTime?: string, endTime?: string, sortOrder?: string, cursor?: string, requestOptions?: RequestOptions): Promise<ApiResponse<ListAdditionalRecipientReceivablesResponse>>;
}
