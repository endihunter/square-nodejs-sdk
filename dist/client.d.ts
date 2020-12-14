import { ApplePayApi } from './api/applePayApi';
import { BankAccountsApi } from './api/bankAccountsApi';
import { BookingsApi } from './api/bookingsApi';
import { CashDrawersApi } from './api/cashDrawersApi';
import { CatalogApi } from './api/catalogApi';
import { CheckoutApi } from './api/checkoutApi';
import { CustomerGroupsApi } from './api/customerGroupsApi';
import { CustomersApi } from './api/customersApi';
import { CustomerSegmentsApi } from './api/customerSegmentsApi';
import { DevicesApi } from './api/devicesApi';
import { DisputesApi } from './api/disputesApi';
import { EmployeesApi } from './api/employeesApi';
import { InventoryApi } from './api/inventoryApi';
import { InvoicesApi } from './api/invoicesApi';
import { LaborApi } from './api/laborApi';
import { LocationsApi } from './api/locationsApi';
import { LoyaltyApi } from './api/loyaltyApi';
import { GiftCardsApi } from './api/giftCardsApi';
import { MerchantsApi } from './api/merchantsApi';
import { MobileAuthorizationApi } from './api/mobileAuthorizationApi';
import { OAuthApi } from './api/oAuthApi';
import { OrdersApi } from './api/ordersApi';
import { PaymentsApi } from './api/paymentsApi';
import { RefundsApi } from './api/refundsApi';
import { SubscriptionsApi } from './api/subscriptionsApi';
import { TeamApi } from './api/teamApi';
import { TerminalApi } from './api/terminalApi';
import { TransactionsApi } from './api/transactionsApi';
import { V1EmployeesApi } from './api/v1EmployeesApi';
import { V1ItemsApi } from './api/v1ItemsApi';
import { V1LocationsApi } from './api/v1LocationsApi';
import { V1TransactionsApi } from './api/v1TransactionsApi';
import { ClientInterface, SdkRequestBuilderFactory } from './clientInterface';
import { Configuration } from './configuration';
/** Current SDK version */
export declare const SDK_VERSION = "7.0.0";
export declare class Client implements ClientInterface {
    private _config;
    private _requestBuilderFactory;
    readonly applePayApi: ApplePayApi;
    readonly bankAccountsApi: BankAccountsApi;
    readonly bookingsApi: BookingsApi;
    readonly cashDrawersApi: CashDrawersApi;
    readonly catalogApi: CatalogApi;
    readonly checkoutApi: CheckoutApi;
    readonly customerGroupsApi: CustomerGroupsApi;
    readonly customersApi: CustomersApi;
    readonly customerSegmentsApi: CustomerSegmentsApi;
    readonly devicesApi: DevicesApi;
    readonly disputesApi: DisputesApi;
    readonly employeesApi: EmployeesApi;
    readonly inventoryApi: InventoryApi;
    readonly invoicesApi: InvoicesApi;
    readonly laborApi: LaborApi;
    readonly locationsApi: LocationsApi;
    readonly loyaltyApi: LoyaltyApi;
    readonly giftcardsApi: GiftCardsApi;
    readonly merchantsApi: MerchantsApi;
    readonly mobileAuthorizationApi: MobileAuthorizationApi;
    readonly oAuthApi: OAuthApi;
    readonly ordersApi: OrdersApi;
    readonly paymentsApi: PaymentsApi;
    readonly refundsApi: RefundsApi;
    readonly subscriptionsApi: SubscriptionsApi;
    readonly teamApi: TeamApi;
    readonly terminalApi: TerminalApi;
    readonly transactionsApi: TransactionsApi;
    readonly v1EmployeesApi: V1EmployeesApi;
    readonly v1ItemsApi: V1ItemsApi;
    readonly v1LocationsApi: V1LocationsApi;
    readonly v1TransactionsApi: V1TransactionsApi;
    constructor(config?: Partial<Configuration>);
    getRequestBuilderFactory(): SdkRequestBuilderFactory;
    /**
     * Clone this client and override given configuration options
     */
    withConfiguration(config: Partial<Configuration>): Client;
}
