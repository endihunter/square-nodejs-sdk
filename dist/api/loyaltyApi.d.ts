import { ApiResponse } from '../apiResponse';
import { RequestOptions } from '../http/requestBuilder';
import { AccumulateLoyaltyPointsRequest } from '../models/accumulateLoyaltyPointsRequest';
import { AccumulateLoyaltyPointsResponse } from '../models/accumulateLoyaltyPointsResponse';
import { AdjustLoyaltyPointsRequest } from '../models/adjustLoyaltyPointsRequest';
import { AdjustLoyaltyPointsResponse } from '../models/adjustLoyaltyPointsResponse';
import { CalculateLoyaltyPointsRequest } from '../models/calculateLoyaltyPointsRequest';
import { CalculateLoyaltyPointsResponse } from '../models/calculateLoyaltyPointsResponse';
import { CreateLoyaltyAccountRequest } from '../models/createLoyaltyAccountRequest';
import { CreateLoyaltyAccountResponse } from '../models/createLoyaltyAccountResponse';
import { CreateLoyaltyRewardRequest } from '../models/createLoyaltyRewardRequest';
import { CreateLoyaltyRewardResponse } from '../models/createLoyaltyRewardResponse';
import { DeleteLoyaltyRewardResponse } from '../models/deleteLoyaltyRewardResponse';
import { ListLoyaltyProgramsResponse } from '../models/listLoyaltyProgramsResponse';
import { RedeemLoyaltyRewardRequest } from '../models/redeemLoyaltyRewardRequest';
import { RedeemLoyaltyRewardResponse } from '../models/redeemLoyaltyRewardResponse';
import { RetrieveLoyaltyAccountResponse } from '../models/retrieveLoyaltyAccountResponse';
import { RetrieveLoyaltyRewardResponse } from '../models/retrieveLoyaltyRewardResponse';
import { SearchLoyaltyAccountsRequest } from '../models/searchLoyaltyAccountsRequest';
import { SearchLoyaltyAccountsResponse } from '../models/searchLoyaltyAccountsResponse';
import { SearchLoyaltyEventsRequest } from '../models/searchLoyaltyEventsRequest';
import { SearchLoyaltyEventsResponse } from '../models/searchLoyaltyEventsResponse';
import { SearchLoyaltyRewardsRequest } from '../models/searchLoyaltyRewardsRequest';
import { SearchLoyaltyRewardsResponse } from '../models/searchLoyaltyRewardsResponse';
import { BaseApi } from './baseApi';
export declare class LoyaltyApi extends BaseApi {
    /**
     * Creates a loyalty account.
     *
     * @param body An object containing the fields to POST for the request.  See
     *                                                   the corresponding object definition for field details.
     * @return Response from the API call
     */
    createLoyaltyAccount(body: CreateLoyaltyAccountRequest, requestOptions?: RequestOptions): Promise<ApiResponse<CreateLoyaltyAccountResponse>>;
    /**
     * Searches for loyalty accounts in a loyalty program.
     *
     * You can search for a loyalty account using the phone number or customer ID associated with the
     * account. To return all loyalty accounts, specify an empty `query` object or omit it entirely.
     *
     * Search results are sorted by `created_at` in ascending order.
     *
     * @param body An object containing the fields to POST for the request.  See
     *                                                    the corresponding object definition for field details.
     * @return Response from the API call
     */
    searchLoyaltyAccounts(body: SearchLoyaltyAccountsRequest, requestOptions?: RequestOptions): Promise<ApiResponse<SearchLoyaltyAccountsResponse>>;
    /**
     * Retrieves a loyalty account.
     *
     * @param accountId  The ID of the [loyalty account](#type-LoyaltyAccount) to retrieve.
     * @return Response from the API call
     */
    retrieveLoyaltyAccount(accountId: string, requestOptions?: RequestOptions): Promise<ApiResponse<RetrieveLoyaltyAccountResponse>>;
    /**
     * Adds points to a loyalty account.
     *
     * - If you are using the Orders API to manage orders, you only provide the `order_id`.
     * The endpoint reads the order to compute points to add to the buyer's account.
     * - If you are not using the Orders API to manage orders,
     * you first perform a client-side computation to compute the points.
     * For spend-based and visit-based programs, you can call
     * [CalculateLoyaltyPoints](#endpoint-Loyalty-CalculateLoyaltyPoints) to compute the points. For more
     * information,
     * see [Loyalty Program Overview](https://developer.squareup.com/docs/loyalty/overview).
     * You then provide the points in a request to this endpoint.
     *
     * @param accountId  The [loyalty account](#type-LoyaltyAccount) ID to
     *                                                            which to add the points.
     * @param body       An object containing the fields to POST for the
     *                                                            request.  See the corresponding object definition for
     *                                                            field details.
     * @return Response from the API call
     */
    accumulateLoyaltyPoints(accountId: string, body: AccumulateLoyaltyPointsRequest, requestOptions?: RequestOptions): Promise<ApiResponse<AccumulateLoyaltyPointsResponse>>;
    /**
     * Adds points to or subtracts points from a buyer's account.
     *
     * Use this endpoint only when you need to manually adjust points. Otherwise, in your application flow,
     * you call
     * [AccumulateLoyaltyPoints](#endpoint-Loyalty-AccumulateLoyaltyPoints)
     * to add points when a buyer pays for the purchase.
     *
     * @param accountId  The ID of the [loyalty account](#type-LoyaltyAccount) in
     *                                                        which to adjust the points.
     * @param body       An object containing the fields to POST for the request.
     *                                                        See the corresponding object definition for field details.
     * @return Response from the API call
     */
    adjustLoyaltyPoints(accountId: string, body: AdjustLoyaltyPointsRequest, requestOptions?: RequestOptions): Promise<ApiResponse<AdjustLoyaltyPointsResponse>>;
    /**
     * Searches for loyalty events.
     *
     * A Square loyalty program maintains a ledger of events that occur during the lifetime of a
     * buyer's loyalty account. Each change in the point balance
     * (for example, points earned, points redeemed, and points expired) is
     * recorded in the ledger. Using this endpoint, you can search the ledger for events.
     *
     * @param body An object containing the fields to POST for the request.  See
     *                                                  the corresponding object definition for field details.
     * @return Response from the API call
     */
    searchLoyaltyEvents(body: SearchLoyaltyEventsRequest, requestOptions?: RequestOptions): Promise<ApiResponse<SearchLoyaltyEventsResponse>>;
    /**
     * Returns a list of loyalty programs in the seller's account.
     * Currently, a seller can only have one loyalty program.
     *
     * @return Response from the API call
     */
    listLoyaltyPrograms(requestOptions?: RequestOptions): Promise<ApiResponse<ListLoyaltyProgramsResponse>>;
    /**
     * Calculates the points a purchase earns.
     *
     * - If you are using the Orders API to manage orders, you provide `order_id` in the request. The
     * endpoint calculates the points by reading the order.
     * - If you are not using the Orders API to manage orders, you provide the purchase amount in
     * the request for the endpoint to calculate the points.
     *
     * An application might call this endpoint to show the points that a buyer can earn with the
     * specific purchase.
     *
     * @param programId  The [loyalty program](#type-LoyaltyProgram) ID, which
     *                                                           defines the rules for accruing points.
     * @param body       An object containing the fields to POST for the request.
     *                                                           See the corresponding object definition for field
     *                                                           details.
     * @return Response from the API call
     */
    calculateLoyaltyPoints(programId: string, body: CalculateLoyaltyPointsRequest, requestOptions?: RequestOptions): Promise<ApiResponse<CalculateLoyaltyPointsResponse>>;
    /**
     * Creates a loyalty reward. In the process, the endpoint does following:
     *
     * - Uses the `reward_tier_id` in the request to determine the number of points
     * to lock for this reward.
     * - If the request includes `order_id`, it adds the reward and related discount to the order.
     *
     * After a reward is created, the points are locked and
     * not available for the buyer to redeem another reward.
     *
     * @param body An object containing the fields to POST for the request.  See
     *                                                  the corresponding object definition for field details.
     * @return Response from the API call
     */
    createLoyaltyReward(body: CreateLoyaltyRewardRequest, requestOptions?: RequestOptions): Promise<ApiResponse<CreateLoyaltyRewardResponse>>;
    /**
     * Searches for loyalty rewards in a loyalty account.
     *
     * In the current implementation, the endpoint supports search by the reward `status`.
     *
     * If you know a reward ID, use the
     * [RetrieveLoyaltyReward](#endpoint-Loyalty-RetrieveLoyaltyReward) endpoint.
     *
     * @param body An object containing the fields to POST for the request.  See
     *                                                   the corresponding object definition for field details.
     * @return Response from the API call
     */
    searchLoyaltyRewards(body: SearchLoyaltyRewardsRequest, requestOptions?: RequestOptions): Promise<ApiResponse<SearchLoyaltyRewardsResponse>>;
    /**
     * Deletes a loyalty reward by doing the following:
     *
     * - Returns the loyalty points back to the loyalty account.
     * - If an order ID was specified when the reward was created
     * (see [CreateLoyaltyReward](#endpoint-Loyalty-CreateLoyaltyReward)),
     * it updates the order by removing the reward and related
     * discounts.
     *
     * You cannot delete a reward that has reached the terminal state (REDEEMED).
     *
     * @param rewardId  The ID of the [loyalty reward](#type-LoyaltyReward) to delete.
     * @return Response from the API call
     */
    deleteLoyaltyReward(rewardId: string, requestOptions?: RequestOptions): Promise<ApiResponse<DeleteLoyaltyRewardResponse>>;
    /**
     * Retrieves a loyalty reward.
     *
     * @param rewardId  The ID of the [loyalty reward](#type-LoyaltyReward) to retrieve.
     * @return Response from the API call
     */
    retrieveLoyaltyReward(rewardId: string, requestOptions?: RequestOptions): Promise<ApiResponse<RetrieveLoyaltyRewardResponse>>;
    /**
     * Redeems a loyalty reward.
     *
     * The endpoint sets the reward to the `REDEEMED` terminal state.
     *
     * If you are using your own order processing system (not using the
     * Orders API), you call this endpoint after the buyer paid for the
     * purchase.
     *
     * After the reward reaches the terminal state, it cannot be deleted.
     * In other words, points used for the reward cannot be returned
     * to the account.
     *
     * @param rewardId  The ID of the [loyalty reward](#type-LoyaltyReward) to
     *                                                       redeem.
     * @param body      An object containing the fields to POST for the request.
     *                                                       See the corresponding object definition for field details.
     * @return Response from the API call
     */
    redeemLoyaltyReward(rewardId: string, body: RedeemLoyaltyRewardRequest, requestOptions?: RequestOptions): Promise<ApiResponse<RedeemLoyaltyRewardResponse>>;
}
