import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { AbcDynamicListResponse1 } from '../models/AbcDynamicListResponse1';
import { AbcDynamicListResponse2 } from '../models/AbcDynamicListResponse2';
import { AbcDynamicPaginatedResponse1 } from '../models/AbcDynamicPaginatedResponse1';
import { AbcDynamicPaginatedResponse2 } from '../models/AbcDynamicPaginatedResponse2';
import { BearerResponse } from '../models/BearerResponse';
import { BodyResetForgotPasswordUsersAuthForgotPasswordPost } from '../models/BodyResetForgotPasswordUsersAuthForgotPasswordPost';
import { BodyResetResetPasswordUsersAuthResetPasswordPost } from '../models/BodyResetResetPasswordUsersAuthResetPasswordPost';
import { BodyVerifyRequestTokenUsersAuthRequestVerifyTokenPost } from '../models/BodyVerifyRequestTokenUsersAuthRequestVerifyTokenPost';
import { BodyVerifyVerifyUsersAuthVerifyPost } from '../models/BodyVerifyVerifyUsersAuthVerifyPost';
import { Detail } from '../models/Detail';
import { ErrorModel } from '../models/ErrorModel';
import { HTTPValidationError } from '../models/HTTPValidationError';
import { ItemCreateSchema } from '../models/ItemCreateSchema';
import { ItemSchema } from '../models/ItemSchema';
import { PageItemSchema } from '../models/PageItemSchema';
import { ResponseEndpointItemsGet } from '../models/ResponseEndpointItemsGet';
import { ResponseEndpointSubitemsGet } from '../models/ResponseEndpointSubitemsGet';
import { SubitemCreateSchema } from '../models/SubitemCreateSchema';
import { SubitemSchema } from '../models/SubitemSchema';
import { UserCreate } from '../models/UserCreate';
import { UserRead } from '../models/UserRead';
import { UserUpdate } from '../models/UserUpdate';
import { ValidationError } from '../models/ValidationError';
import { ValidationErrorLocInner } from '../models/ValidationErrorLocInner';
import { ObservableAuthApi } from './ObservableAPI';

import { AuthApiRequestFactory, AuthApiResponseProcessor} from "../apis/AuthApi";
export class PromiseAuthApi {
    private api: ObservableAuthApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AuthApiRequestFactory,
        responseProcessor?: AuthApiResponseProcessor
    ) {
        this.api = new ObservableAuthApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Auth:Jwt.Login
     * @param username
     * @param password
     * @param [grantType]
     * @param [scope]
     * @param [clientId]
     * @param [clientSecret]
     */
    public authJwtLoginUsersJwtLoginPostWithHttpInfo(username: string, password: string, grantType?: string, scope?: string, clientId?: string, clientSecret?: string, _options?: Configuration): Promise<HttpInfo<BearerResponse>> {
        const result = this.api.authJwtLoginUsersJwtLoginPostWithHttpInfo(username, password, grantType, scope, clientId, clientSecret, _options);
        return result.toPromise();
    }

    /**
     * Auth:Jwt.Login
     * @param username
     * @param password
     * @param [grantType]
     * @param [scope]
     * @param [clientId]
     * @param [clientSecret]
     */
    public authJwtLoginUsersJwtLoginPost(username: string, password: string, grantType?: string, scope?: string, clientId?: string, clientSecret?: string, _options?: Configuration): Promise<BearerResponse> {
        const result = this.api.authJwtLoginUsersJwtLoginPost(username, password, grantType, scope, clientId, clientSecret, _options);
        return result.toPromise();
    }

    /**
     * Auth:Jwt.Logout
     */
    public authJwtLogoutUsersJwtLogoutPostWithHttpInfo(_options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.authJwtLogoutUsersJwtLogoutPostWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Auth:Jwt.Logout
     */
    public authJwtLogoutUsersJwtLogoutPost(_options?: Configuration): Promise<any> {
        const result = this.api.authJwtLogoutUsersJwtLogoutPost(_options);
        return result.toPromise();
    }

    /**
     * Refresh Jwt
     */
    public refreshJwtUsersJwtRefreshPostWithHttpInfo(_options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.refreshJwtUsersJwtRefreshPostWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Refresh Jwt
     */
    public refreshJwtUsersJwtRefreshPost(_options?: Configuration): Promise<any> {
        const result = this.api.refreshJwtUsersJwtRefreshPost(_options);
        return result.toPromise();
    }

    /**
     * Register:Register
     * @param userCreate
     */
    public registerRegisterUsersAuthRegisterPostWithHttpInfo(userCreate: UserCreate, _options?: Configuration): Promise<HttpInfo<UserRead>> {
        const result = this.api.registerRegisterUsersAuthRegisterPostWithHttpInfo(userCreate, _options);
        return result.toPromise();
    }

    /**
     * Register:Register
     * @param userCreate
     */
    public registerRegisterUsersAuthRegisterPost(userCreate: UserCreate, _options?: Configuration): Promise<UserRead> {
        const result = this.api.registerRegisterUsersAuthRegisterPost(userCreate, _options);
        return result.toPromise();
    }

    /**
     * Reset:Forgot Password
     * @param bodyResetForgotPasswordUsersAuthForgotPasswordPost
     */
    public resetForgotPasswordUsersAuthForgotPasswordPostWithHttpInfo(bodyResetForgotPasswordUsersAuthForgotPasswordPost: BodyResetForgotPasswordUsersAuthForgotPasswordPost, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.resetForgotPasswordUsersAuthForgotPasswordPostWithHttpInfo(bodyResetForgotPasswordUsersAuthForgotPasswordPost, _options);
        return result.toPromise();
    }

    /**
     * Reset:Forgot Password
     * @param bodyResetForgotPasswordUsersAuthForgotPasswordPost
     */
    public resetForgotPasswordUsersAuthForgotPasswordPost(bodyResetForgotPasswordUsersAuthForgotPasswordPost: BodyResetForgotPasswordUsersAuthForgotPasswordPost, _options?: Configuration): Promise<any> {
        const result = this.api.resetForgotPasswordUsersAuthForgotPasswordPost(bodyResetForgotPasswordUsersAuthForgotPasswordPost, _options);
        return result.toPromise();
    }

    /**
     * Reset:Reset Password
     * @param bodyResetResetPasswordUsersAuthResetPasswordPost
     */
    public resetResetPasswordUsersAuthResetPasswordPostWithHttpInfo(bodyResetResetPasswordUsersAuthResetPasswordPost: BodyResetResetPasswordUsersAuthResetPasswordPost, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.resetResetPasswordUsersAuthResetPasswordPostWithHttpInfo(bodyResetResetPasswordUsersAuthResetPasswordPost, _options);
        return result.toPromise();
    }

    /**
     * Reset:Reset Password
     * @param bodyResetResetPasswordUsersAuthResetPasswordPost
     */
    public resetResetPasswordUsersAuthResetPasswordPost(bodyResetResetPasswordUsersAuthResetPasswordPost: BodyResetResetPasswordUsersAuthResetPasswordPost, _options?: Configuration): Promise<any> {
        const result = this.api.resetResetPasswordUsersAuthResetPasswordPost(bodyResetResetPasswordUsersAuthResetPasswordPost, _options);
        return result.toPromise();
    }

    /**
     * Verify:Request-Token
     * @param bodyVerifyRequestTokenUsersAuthRequestVerifyTokenPost
     */
    public verifyRequestTokenUsersAuthRequestVerifyTokenPostWithHttpInfo(bodyVerifyRequestTokenUsersAuthRequestVerifyTokenPost: BodyVerifyRequestTokenUsersAuthRequestVerifyTokenPost, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.verifyRequestTokenUsersAuthRequestVerifyTokenPostWithHttpInfo(bodyVerifyRequestTokenUsersAuthRequestVerifyTokenPost, _options);
        return result.toPromise();
    }

    /**
     * Verify:Request-Token
     * @param bodyVerifyRequestTokenUsersAuthRequestVerifyTokenPost
     */
    public verifyRequestTokenUsersAuthRequestVerifyTokenPost(bodyVerifyRequestTokenUsersAuthRequestVerifyTokenPost: BodyVerifyRequestTokenUsersAuthRequestVerifyTokenPost, _options?: Configuration): Promise<any> {
        const result = this.api.verifyRequestTokenUsersAuthRequestVerifyTokenPost(bodyVerifyRequestTokenUsersAuthRequestVerifyTokenPost, _options);
        return result.toPromise();
    }

    /**
     * Verify:Verify
     * @param bodyVerifyVerifyUsersAuthVerifyPost
     */
    public verifyVerifyUsersAuthVerifyPostWithHttpInfo(bodyVerifyVerifyUsersAuthVerifyPost: BodyVerifyVerifyUsersAuthVerifyPost, _options?: Configuration): Promise<HttpInfo<UserRead>> {
        const result = this.api.verifyVerifyUsersAuthVerifyPostWithHttpInfo(bodyVerifyVerifyUsersAuthVerifyPost, _options);
        return result.toPromise();
    }

    /**
     * Verify:Verify
     * @param bodyVerifyVerifyUsersAuthVerifyPost
     */
    public verifyVerifyUsersAuthVerifyPost(bodyVerifyVerifyUsersAuthVerifyPost: BodyVerifyVerifyUsersAuthVerifyPost, _options?: Configuration): Promise<UserRead> {
        const result = this.api.verifyVerifyUsersAuthVerifyPost(bodyVerifyVerifyUsersAuthVerifyPost, _options);
        return result.toPromise();
    }


}



import { ObservableItemsApi } from './ObservableAPI';

import { ItemsApiRequestFactory, ItemsApiResponseProcessor} from "../apis/ItemsApi";
export class PromiseItemsApi {
    private api: ObservableItemsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ItemsApiRequestFactory,
        responseProcessor?: ItemsApiResponseProcessor
    ) {
        this.api = new ObservableItemsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Read multiple Item rows from the database.  - Use page & itemsPerPage for paginated results - Use offset & limit for specific ranges - Returns paginated response when using page/itemsPerPage - Returns simple list response when using offset/limit
     * Endpoint
     * @param [offset] Offset for unpaginated queries
     * @param [limit] Limit for unpaginated queries
     * @param [page] Page number
     * @param [itemsPerPage] Number of items per page
     * @param [ownerId]
     */
    public endpointItemsGetWithHttpInfo(offset?: number, limit?: number, page?: number, itemsPerPage?: number, ownerId?: any, _options?: Configuration): Promise<HttpInfo<ResponseEndpointItemsGet>> {
        const result = this.api.endpointItemsGetWithHttpInfo(offset, limit, page, itemsPerPage, ownerId, _options);
        return result.toPromise();
    }

    /**
     * Read multiple Item rows from the database.  - Use page & itemsPerPage for paginated results - Use offset & limit for specific ranges - Returns paginated response when using page/itemsPerPage - Returns simple list response when using offset/limit
     * Endpoint
     * @param [offset] Offset for unpaginated queries
     * @param [limit] Limit for unpaginated queries
     * @param [page] Page number
     * @param [itemsPerPage] Number of items per page
     * @param [ownerId]
     */
    public endpointItemsGet(offset?: number, limit?: number, page?: number, itemsPerPage?: number, ownerId?: any, _options?: Configuration): Promise<ResponseEndpointItemsGet> {
        const result = this.api.endpointItemsGet(offset, limit, page, itemsPerPage, ownerId, _options);
        return result.toPromise();
    }

    /**
     * Delete a Item row from the database by its primary keys: [\'id\'].
     * Endpoint
     * @param id
     */
    public endpointItemsIdDeleteWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.endpointItemsIdDeleteWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * Delete a Item row from the database by its primary keys: [\'id\'].
     * Endpoint
     * @param id
     */
    public endpointItemsIdDelete(id: number, _options?: Configuration): Promise<any> {
        const result = this.api.endpointItemsIdDelete(id, _options);
        return result.toPromise();
    }

    /**
     * Read a single Item row from the database by its primary keys: [\'id\'].
     * Endpoint
     * @param id
     */
    public endpointItemsIdGetWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<ItemSchema>> {
        const result = this.api.endpointItemsIdGetWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * Read a single Item row from the database by its primary keys: [\'id\'].
     * Endpoint
     * @param id
     */
    public endpointItemsIdGet(id: number, _options?: Configuration): Promise<ItemSchema> {
        const result = this.api.endpointItemsIdGet(id, _options);
        return result.toPromise();
    }

    /**
     * Update an existing Item row in the database by its primary keys: [\'id\'].
     * Endpoint
     * @param id
     * @param itemCreateSchema
     */
    public endpointItemsIdPatchWithHttpInfo(id: number, itemCreateSchema: ItemCreateSchema, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.endpointItemsIdPatchWithHttpInfo(id, itemCreateSchema, _options);
        return result.toPromise();
    }

    /**
     * Update an existing Item row in the database by its primary keys: [\'id\'].
     * Endpoint
     * @param id
     * @param itemCreateSchema
     */
    public endpointItemsIdPatch(id: number, itemCreateSchema: ItemCreateSchema, _options?: Configuration): Promise<any> {
        const result = this.api.endpointItemsIdPatch(id, itemCreateSchema, _options);
        return result.toPromise();
    }

    /**
     * Create a new Item row in the database.
     * Endpoint
     * @param itemCreateSchema
     */
    public endpointItemsPostWithHttpInfo(itemCreateSchema: ItemCreateSchema, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.endpointItemsPostWithHttpInfo(itemCreateSchema, _options);
        return result.toPromise();
    }

    /**
     * Create a new Item row in the database.
     * Endpoint
     * @param itemCreateSchema
     */
    public endpointItemsPost(itemCreateSchema: ItemCreateSchema, _options?: Configuration): Promise<any> {
        const result = this.api.endpointItemsPost(itemCreateSchema, _options);
        return result.toPromise();
    }

    /**
     * Search
     * @param [name]
     * @param [page] Page number
     * @param [size] Page size
     */
    public searchSearchItemsGetWithHttpInfo(name?: string, page?: number, size?: number, _options?: Configuration): Promise<HttpInfo<PageItemSchema>> {
        const result = this.api.searchSearchItemsGetWithHttpInfo(name, page, size, _options);
        return result.toPromise();
    }

    /**
     * Search
     * @param [name]
     * @param [page] Page number
     * @param [size] Page size
     */
    public searchSearchItemsGet(name?: string, page?: number, size?: number, _options?: Configuration): Promise<PageItemSchema> {
        const result = this.api.searchSearchItemsGet(name, page, size, _options);
        return result.toPromise();
    }


}



import { ObservableSubitemsApi } from './ObservableAPI';

import { SubitemsApiRequestFactory, SubitemsApiResponseProcessor} from "../apis/SubitemsApi";
export class PromiseSubitemsApi {
    private api: ObservableSubitemsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SubitemsApiRequestFactory,
        responseProcessor?: SubitemsApiResponseProcessor
    ) {
        this.api = new ObservableSubitemsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Read multiple Subitem rows from the database.  - Use page & itemsPerPage for paginated results - Use offset & limit for specific ranges - Returns paginated response when using page/itemsPerPage - Returns simple list response when using offset/limit
     * Endpoint
     * @param [offset] Offset for unpaginated queries
     * @param [limit] Limit for unpaginated queries
     * @param [page] Page number
     * @param [itemsPerPage] Number of items per page
     * @param [ownerId]
     * @param [itemId]
     */
    public endpointSubitemsGetWithHttpInfo(offset?: number, limit?: number, page?: number, itemsPerPage?: number, ownerId?: any, itemId?: any, _options?: Configuration): Promise<HttpInfo<ResponseEndpointSubitemsGet>> {
        const result = this.api.endpointSubitemsGetWithHttpInfo(offset, limit, page, itemsPerPage, ownerId, itemId, _options);
        return result.toPromise();
    }

    /**
     * Read multiple Subitem rows from the database.  - Use page & itemsPerPage for paginated results - Use offset & limit for specific ranges - Returns paginated response when using page/itemsPerPage - Returns simple list response when using offset/limit
     * Endpoint
     * @param [offset] Offset for unpaginated queries
     * @param [limit] Limit for unpaginated queries
     * @param [page] Page number
     * @param [itemsPerPage] Number of items per page
     * @param [ownerId]
     * @param [itemId]
     */
    public endpointSubitemsGet(offset?: number, limit?: number, page?: number, itemsPerPage?: number, ownerId?: any, itemId?: any, _options?: Configuration): Promise<ResponseEndpointSubitemsGet> {
        const result = this.api.endpointSubitemsGet(offset, limit, page, itemsPerPage, ownerId, itemId, _options);
        return result.toPromise();
    }

    /**
     * Delete a Subitem row from the database by its primary keys: [\'id\'].
     * Endpoint
     * @param id
     */
    public endpointSubitemsIdDeleteWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.endpointSubitemsIdDeleteWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * Delete a Subitem row from the database by its primary keys: [\'id\'].
     * Endpoint
     * @param id
     */
    public endpointSubitemsIdDelete(id: number, _options?: Configuration): Promise<any> {
        const result = this.api.endpointSubitemsIdDelete(id, _options);
        return result.toPromise();
    }

    /**
     * Read a single Subitem row from the database by its primary keys: [\'id\'].
     * Endpoint
     * @param id
     */
    public endpointSubitemsIdGetWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<SubitemSchema>> {
        const result = this.api.endpointSubitemsIdGetWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * Read a single Subitem row from the database by its primary keys: [\'id\'].
     * Endpoint
     * @param id
     */
    public endpointSubitemsIdGet(id: number, _options?: Configuration): Promise<SubitemSchema> {
        const result = this.api.endpointSubitemsIdGet(id, _options);
        return result.toPromise();
    }

    /**
     * Update an existing Subitem row in the database by its primary keys: [\'id\'].
     * Endpoint
     * @param id
     * @param subitemCreateSchema
     */
    public endpointSubitemsIdPatchWithHttpInfo(id: number, subitemCreateSchema: SubitemCreateSchema, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.endpointSubitemsIdPatchWithHttpInfo(id, subitemCreateSchema, _options);
        return result.toPromise();
    }

    /**
     * Update an existing Subitem row in the database by its primary keys: [\'id\'].
     * Endpoint
     * @param id
     * @param subitemCreateSchema
     */
    public endpointSubitemsIdPatch(id: number, subitemCreateSchema: SubitemCreateSchema, _options?: Configuration): Promise<any> {
        const result = this.api.endpointSubitemsIdPatch(id, subitemCreateSchema, _options);
        return result.toPromise();
    }

    /**
     * Create a new Subitem row in the database.
     * Endpoint
     * @param subitemCreateSchema
     */
    public endpointSubitemsPostWithHttpInfo(subitemCreateSchema: SubitemCreateSchema, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.endpointSubitemsPostWithHttpInfo(subitemCreateSchema, _options);
        return result.toPromise();
    }

    /**
     * Create a new Subitem row in the database.
     * Endpoint
     * @param subitemCreateSchema
     */
    public endpointSubitemsPost(subitemCreateSchema: SubitemCreateSchema, _options?: Configuration): Promise<any> {
        const result = this.api.endpointSubitemsPost(subitemCreateSchema, _options);
        return result.toPromise();
    }


}



import { ObservableUsersApi } from './ObservableAPI';

import { UsersApiRequestFactory, UsersApiResponseProcessor} from "../apis/UsersApi";
export class PromiseUsersApi {
    private api: ObservableUsersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: UsersApiRequestFactory,
        responseProcessor?: UsersApiResponseProcessor
    ) {
        this.api = new ObservableUsersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Users:Current User
     */
    public usersCurrentUserUsersAuthMeGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<UserRead>> {
        const result = this.api.usersCurrentUserUsersAuthMeGetWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Users:Current User
     */
    public usersCurrentUserUsersAuthMeGet(_options?: Configuration): Promise<UserRead> {
        const result = this.api.usersCurrentUserUsersAuthMeGet(_options);
        return result.toPromise();
    }

    /**
     * Users:Delete User
     * @param id
     */
    public usersDeleteUserUsersAuthIdDeleteWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.usersDeleteUserUsersAuthIdDeleteWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * Users:Delete User
     * @param id
     */
    public usersDeleteUserUsersAuthIdDelete(id: string, _options?: Configuration): Promise<void> {
        const result = this.api.usersDeleteUserUsersAuthIdDelete(id, _options);
        return result.toPromise();
    }

    /**
     * Users:Patch Current User
     * @param userUpdate
     */
    public usersPatchCurrentUserUsersAuthMePatchWithHttpInfo(userUpdate: UserUpdate, _options?: Configuration): Promise<HttpInfo<UserRead>> {
        const result = this.api.usersPatchCurrentUserUsersAuthMePatchWithHttpInfo(userUpdate, _options);
        return result.toPromise();
    }

    /**
     * Users:Patch Current User
     * @param userUpdate
     */
    public usersPatchCurrentUserUsersAuthMePatch(userUpdate: UserUpdate, _options?: Configuration): Promise<UserRead> {
        const result = this.api.usersPatchCurrentUserUsersAuthMePatch(userUpdate, _options);
        return result.toPromise();
    }

    /**
     * Users:Patch User
     * @param id
     * @param userUpdate
     */
    public usersPatchUserUsersAuthIdPatchWithHttpInfo(id: string, userUpdate: UserUpdate, _options?: Configuration): Promise<HttpInfo<UserRead>> {
        const result = this.api.usersPatchUserUsersAuthIdPatchWithHttpInfo(id, userUpdate, _options);
        return result.toPromise();
    }

    /**
     * Users:Patch User
     * @param id
     * @param userUpdate
     */
    public usersPatchUserUsersAuthIdPatch(id: string, userUpdate: UserUpdate, _options?: Configuration): Promise<UserRead> {
        const result = this.api.usersPatchUserUsersAuthIdPatch(id, userUpdate, _options);
        return result.toPromise();
    }

    /**
     * Users:User
     * @param id
     */
    public usersUserUsersAuthIdGetWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<UserRead>> {
        const result = this.api.usersUserUsersAuthIdGetWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * Users:User
     * @param id
     */
    public usersUserUsersAuthIdGet(id: string, _options?: Configuration): Promise<UserRead> {
        const result = this.api.usersUserUsersAuthIdGet(id, _options);
        return result.toPromise();
    }


}



