import { BaseApi } from './baseApi';
import { ApiResponse } from '../apiResponse';
import { CreateGiftCardRequest } from "../models/createGiftCardRequest";
import { RequestOptions } from "../http/requestBuilder";
import { CreateGiftCardResponse } from "../models/createGiftCardResponse";
import { RetrieveGiftCardResponse } from "../models/retrieveGiftCardResponse";
import { RetrieveGiftCardFromGanResponse } from "../models/retrieveGiftCardFromGanResponse";
import { RetrieveGiftCardFromGanRequest } from "../models/retrieveGiftCardFromGanRequest";
import { RetrieveGiftCardFromNonceRequest } from "../models/retrieveGiftCardFromNonceRequest";
import { RetrieveGiftCardFromNonceResponse } from "../models/retrieveGiftCardFromNonceResponse";
import { ListGiftCardActivityResponse } from "../models/listGiftCardActivityResponse";
import { ListGiftCardActivityRequest } from "../models/listGiftCardActivityRequest";
import { GiftCardActivityRequest } from "../models/giftCardActivityRequest";
import { GiftCardActivityResponse } from "../models/giftCardActivityResponse";
export declare class GiftCardsApi extends BaseApi {
    createGiftCard(body: CreateGiftCardRequest, requestOptions?: RequestOptions): Promise<ApiResponse<CreateGiftCardResponse>>;
    activateGiftCard(body: GiftCardActivityRequest, requestOptions?: RequestOptions): Promise<ApiResponse<GiftCardActivityResponse>>;
    deactivateGiftCard(body: GiftCardActivityRequest, requestOptions?: RequestOptions): Promise<ApiResponse<GiftCardActivityResponse>>;
    clearGiftCardBalance(body: GiftCardActivityRequest, requestOptions?: RequestOptions): Promise<ApiResponse<GiftCardActivityResponse>>;
    adjustGiftCardBalance(body: GiftCardActivityRequest, requestOptions?: RequestOptions): Promise<ApiResponse<GiftCardActivityResponse>>;
    retrieveGiftCard(id: string, requestOptions?: RequestOptions): Promise<ApiResponse<RetrieveGiftCardResponse>>;
    retrieveGiftCardFromGan(body: RetrieveGiftCardFromGanRequest, requestOptions?: RequestOptions): Promise<ApiResponse<RetrieveGiftCardFromGanResponse>>;
    retrieveGiftCardFromNonce(body: RetrieveGiftCardFromNonceRequest, requestOptions?: RequestOptions): Promise<ApiResponse<RetrieveGiftCardFromNonceResponse>>;
    listGiftCardActivities(body: ListGiftCardActivityRequest, requestOptions?: RequestOptions): Promise<ApiResponse<ListGiftCardActivityResponse>>;
    private giftCardActivityRequest;
}
