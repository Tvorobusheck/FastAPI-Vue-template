import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { BearerResponse } from '../models/BearerResponse';
import { BodyResetForgotPasswordUsersAuthForgotPasswordPost } from '../models/BodyResetForgotPasswordUsersAuthForgotPasswordPost';
import { BodyResetResetPasswordUsersAuthResetPasswordPost } from '../models/BodyResetResetPasswordUsersAuthResetPasswordPost';
import { BodyVerifyRequestTokenUsersAuthRequestVerifyTokenPost } from '../models/BodyVerifyRequestTokenUsersAuthRequestVerifyTokenPost';
import { BodyVerifyVerifyUsersAuthVerifyPost } from '../models/BodyVerifyVerifyUsersAuthVerifyPost';
import { Detail } from '../models/Detail';
import { ErrorModel } from '../models/ErrorModel';
import { HTTPValidationError } from '../models/HTTPValidationError';
import { ItemCreateSchema } from '../models/ItemCreateSchema';
import { ItemUpdateSchema } from '../models/ItemUpdateSchema';
import { UserCreate } from '../models/UserCreate';
import { UserRead } from '../models/UserRead';
import { UserUpdate } from '../models/UserUpdate';
import { ValidationError } from '../models/ValidationError';
import { ValidationErrorLocInner } from '../models/ValidationErrorLocInner';

import { ObservableAuthApi } from "./ObservableAPI";
import { AuthApiRequestFactory, AuthApiResponseProcessor} from "../apis/AuthApi";

export interface AuthApiAuthJwtLoginUsersJwtLoginPostRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AuthApiauthJwtLoginUsersJwtLoginPost
     */
    username: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AuthApiauthJwtLoginUsersJwtLoginPost
     */
    password: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AuthApiauthJwtLoginUsersJwtLoginPost
     */
    grantType?: string
    /**
     * 
     * Defaults to: &#39;&#39;
     * @type string
     * @memberof AuthApiauthJwtLoginUsersJwtLoginPost
     */
    scope?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AuthApiauthJwtLoginUsersJwtLoginPost
     */
    clientId?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AuthApiauthJwtLoginUsersJwtLoginPost
     */
    clientSecret?: string
}

export interface AuthApiAuthJwtLogoutUsersJwtLogoutPostRequest {
}

export interface AuthApiRegisterRegisterUsersAuthRegisterPostRequest {
    /**
     * 
     * @type UserCreate
     * @memberof AuthApiregisterRegisterUsersAuthRegisterPost
     */
    userCreate: UserCreate
}

export interface AuthApiResetForgotPasswordUsersAuthForgotPasswordPostRequest {
    /**
     * 
     * @type BodyResetForgotPasswordUsersAuthForgotPasswordPost
     * @memberof AuthApiresetForgotPasswordUsersAuthForgotPasswordPost
     */
    bodyResetForgotPasswordUsersAuthForgotPasswordPost: BodyResetForgotPasswordUsersAuthForgotPasswordPost
}

export interface AuthApiResetResetPasswordUsersAuthResetPasswordPostRequest {
    /**
     * 
     * @type BodyResetResetPasswordUsersAuthResetPasswordPost
     * @memberof AuthApiresetResetPasswordUsersAuthResetPasswordPost
     */
    bodyResetResetPasswordUsersAuthResetPasswordPost: BodyResetResetPasswordUsersAuthResetPasswordPost
}

export interface AuthApiVerifyRequestTokenUsersAuthRequestVerifyTokenPostRequest {
    /**
     * 
     * @type BodyVerifyRequestTokenUsersAuthRequestVerifyTokenPost
     * @memberof AuthApiverifyRequestTokenUsersAuthRequestVerifyTokenPost
     */
    bodyVerifyRequestTokenUsersAuthRequestVerifyTokenPost: BodyVerifyRequestTokenUsersAuthRequestVerifyTokenPost
}

export interface AuthApiVerifyVerifyUsersAuthVerifyPostRequest {
    /**
     * 
     * @type BodyVerifyVerifyUsersAuthVerifyPost
     * @memberof AuthApiverifyVerifyUsersAuthVerifyPost
     */
    bodyVerifyVerifyUsersAuthVerifyPost: BodyVerifyVerifyUsersAuthVerifyPost
}

export class ObjectAuthApi {
    private api: ObservableAuthApi

    public constructor(configuration: Configuration, requestFactory?: AuthApiRequestFactory, responseProcessor?: AuthApiResponseProcessor) {
        this.api = new ObservableAuthApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Auth:Jwt.Login
     * @param param the request object
     */
    public authJwtLoginUsersJwtLoginPostWithHttpInfo(param: AuthApiAuthJwtLoginUsersJwtLoginPostRequest, options?: Configuration): Promise<HttpInfo<BearerResponse>> {
        return this.api.authJwtLoginUsersJwtLoginPostWithHttpInfo(param.username, param.password, param.grantType, param.scope, param.clientId, param.clientSecret,  options).toPromise();
    }

    /**
     * Auth:Jwt.Login
     * @param param the request object
     */
    public authJwtLoginUsersJwtLoginPost(param: AuthApiAuthJwtLoginUsersJwtLoginPostRequest, options?: Configuration): Promise<BearerResponse> {
        return this.api.authJwtLoginUsersJwtLoginPost(param.username, param.password, param.grantType, param.scope, param.clientId, param.clientSecret,  options).toPromise();
    }

    /**
     * Auth:Jwt.Logout
     * @param param the request object
     */
    public authJwtLogoutUsersJwtLogoutPostWithHttpInfo(param: AuthApiAuthJwtLogoutUsersJwtLogoutPostRequest = {}, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.authJwtLogoutUsersJwtLogoutPostWithHttpInfo( options).toPromise();
    }

    /**
     * Auth:Jwt.Logout
     * @param param the request object
     */
    public authJwtLogoutUsersJwtLogoutPost(param: AuthApiAuthJwtLogoutUsersJwtLogoutPostRequest = {}, options?: Configuration): Promise<any> {
        return this.api.authJwtLogoutUsersJwtLogoutPost( options).toPromise();
    }

    /**
     * Register:Register
     * @param param the request object
     */
    public registerRegisterUsersAuthRegisterPostWithHttpInfo(param: AuthApiRegisterRegisterUsersAuthRegisterPostRequest, options?: Configuration): Promise<HttpInfo<UserRead>> {
        return this.api.registerRegisterUsersAuthRegisterPostWithHttpInfo(param.userCreate,  options).toPromise();
    }

    /**
     * Register:Register
     * @param param the request object
     */
    public registerRegisterUsersAuthRegisterPost(param: AuthApiRegisterRegisterUsersAuthRegisterPostRequest, options?: Configuration): Promise<UserRead> {
        return this.api.registerRegisterUsersAuthRegisterPost(param.userCreate,  options).toPromise();
    }

    /**
     * Reset:Forgot Password
     * @param param the request object
     */
    public resetForgotPasswordUsersAuthForgotPasswordPostWithHttpInfo(param: AuthApiResetForgotPasswordUsersAuthForgotPasswordPostRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.resetForgotPasswordUsersAuthForgotPasswordPostWithHttpInfo(param.bodyResetForgotPasswordUsersAuthForgotPasswordPost,  options).toPromise();
    }

    /**
     * Reset:Forgot Password
     * @param param the request object
     */
    public resetForgotPasswordUsersAuthForgotPasswordPost(param: AuthApiResetForgotPasswordUsersAuthForgotPasswordPostRequest, options?: Configuration): Promise<any> {
        return this.api.resetForgotPasswordUsersAuthForgotPasswordPost(param.bodyResetForgotPasswordUsersAuthForgotPasswordPost,  options).toPromise();
    }

    /**
     * Reset:Reset Password
     * @param param the request object
     */
    public resetResetPasswordUsersAuthResetPasswordPostWithHttpInfo(param: AuthApiResetResetPasswordUsersAuthResetPasswordPostRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.resetResetPasswordUsersAuthResetPasswordPostWithHttpInfo(param.bodyResetResetPasswordUsersAuthResetPasswordPost,  options).toPromise();
    }

    /**
     * Reset:Reset Password
     * @param param the request object
     */
    public resetResetPasswordUsersAuthResetPasswordPost(param: AuthApiResetResetPasswordUsersAuthResetPasswordPostRequest, options?: Configuration): Promise<any> {
        return this.api.resetResetPasswordUsersAuthResetPasswordPost(param.bodyResetResetPasswordUsersAuthResetPasswordPost,  options).toPromise();
    }

    /**
     * Verify:Request-Token
     * @param param the request object
     */
    public verifyRequestTokenUsersAuthRequestVerifyTokenPostWithHttpInfo(param: AuthApiVerifyRequestTokenUsersAuthRequestVerifyTokenPostRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.verifyRequestTokenUsersAuthRequestVerifyTokenPostWithHttpInfo(param.bodyVerifyRequestTokenUsersAuthRequestVerifyTokenPost,  options).toPromise();
    }

    /**
     * Verify:Request-Token
     * @param param the request object
     */
    public verifyRequestTokenUsersAuthRequestVerifyTokenPost(param: AuthApiVerifyRequestTokenUsersAuthRequestVerifyTokenPostRequest, options?: Configuration): Promise<any> {
        return this.api.verifyRequestTokenUsersAuthRequestVerifyTokenPost(param.bodyVerifyRequestTokenUsersAuthRequestVerifyTokenPost,  options).toPromise();
    }

    /**
     * Verify:Verify
     * @param param the request object
     */
    public verifyVerifyUsersAuthVerifyPostWithHttpInfo(param: AuthApiVerifyVerifyUsersAuthVerifyPostRequest, options?: Configuration): Promise<HttpInfo<UserRead>> {
        return this.api.verifyVerifyUsersAuthVerifyPostWithHttpInfo(param.bodyVerifyVerifyUsersAuthVerifyPost,  options).toPromise();
    }

    /**
     * Verify:Verify
     * @param param the request object
     */
    public verifyVerifyUsersAuthVerifyPost(param: AuthApiVerifyVerifyUsersAuthVerifyPostRequest, options?: Configuration): Promise<UserRead> {
        return this.api.verifyVerifyUsersAuthVerifyPost(param.bodyVerifyVerifyUsersAuthVerifyPost,  options).toPromise();
    }

}

import { ObservableDefaultApi } from "./ObservableAPI";
import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";

export interface DefaultApiAuthenticatedRouteUsersAuthenticatedRouteGetRequest {
}

export class ObjectDefaultApi {
    private api: ObservableDefaultApi

    public constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Authenticated Route
     * @param param the request object
     */
    public authenticatedRouteUsersAuthenticatedRouteGetWithHttpInfo(param: DefaultApiAuthenticatedRouteUsersAuthenticatedRouteGetRequest = {}, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.authenticatedRouteUsersAuthenticatedRouteGetWithHttpInfo( options).toPromise();
    }

    /**
     * Authenticated Route
     * @param param the request object
     */
    public authenticatedRouteUsersAuthenticatedRouteGet(param: DefaultApiAuthenticatedRouteUsersAuthenticatedRouteGetRequest = {}, options?: Configuration): Promise<any> {
        return this.api.authenticatedRouteUsersAuthenticatedRouteGet( options).toPromise();
    }

}

import { ObservableItemsApi } from "./ObservableAPI";
import { ItemsApiRequestFactory, ItemsApiResponseProcessor} from "../apis/ItemsApi";

export interface ItemsApiEndpointItemsGetRequest {
    /**
     * Offset for unpaginated queries
     * Defaults to: undefined
     * @type number
     * @memberof ItemsApiendpointItemsGet
     */
    offset?: number
    /**
     * Limit for unpaginated queries
     * Defaults to: undefined
     * @type number
     * @memberof ItemsApiendpointItemsGet
     */
    limit?: number
    /**
     * Page number
     * Defaults to: undefined
     * @type number
     * @memberof ItemsApiendpointItemsGet
     */
    page?: number
    /**
     * Number of items per page
     * Defaults to: undefined
     * @type number
     * @memberof ItemsApiendpointItemsGet
     */
    itemsPerPage?: number
}

export interface ItemsApiEndpointItemsIdDeleteRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof ItemsApiendpointItemsIdDelete
     */
    id: number
}

export interface ItemsApiEndpointItemsIdGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof ItemsApiendpointItemsIdGet
     */
    id: number
}

export interface ItemsApiEndpointItemsIdPatchRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof ItemsApiendpointItemsIdPatch
     */
    id: number
    /**
     * 
     * @type ItemUpdateSchema
     * @memberof ItemsApiendpointItemsIdPatch
     */
    itemUpdateSchema: ItemUpdateSchema
}

export interface ItemsApiEndpointItemsPostRequest {
    /**
     * 
     * @type ItemCreateSchema
     * @memberof ItemsApiendpointItemsPost
     */
    itemCreateSchema: ItemCreateSchema
}

export class ObjectItemsApi {
    private api: ObservableItemsApi

    public constructor(configuration: Configuration, requestFactory?: ItemsApiRequestFactory, responseProcessor?: ItemsApiResponseProcessor) {
        this.api = new ObservableItemsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Read multiple Item rows from the database.  - Use page & itemsPerPage for paginated results - Use offset & limit for specific ranges - Returns paginated response when using page/itemsPerPage - Returns simple list response when using offset/limit
     * Endpoint
     * @param param the request object
     */
    public endpointItemsGetWithHttpInfo(param: ItemsApiEndpointItemsGetRequest = {}, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.endpointItemsGetWithHttpInfo(param.offset, param.limit, param.page, param.itemsPerPage,  options).toPromise();
    }

    /**
     * Read multiple Item rows from the database.  - Use page & itemsPerPage for paginated results - Use offset & limit for specific ranges - Returns paginated response when using page/itemsPerPage - Returns simple list response when using offset/limit
     * Endpoint
     * @param param the request object
     */
    public endpointItemsGet(param: ItemsApiEndpointItemsGetRequest = {}, options?: Configuration): Promise<any> {
        return this.api.endpointItemsGet(param.offset, param.limit, param.page, param.itemsPerPage,  options).toPromise();
    }

    /**
     * Delete a Item row from the database by its primary keys: [\'id\'].
     * Endpoint
     * @param param the request object
     */
    public endpointItemsIdDeleteWithHttpInfo(param: ItemsApiEndpointItemsIdDeleteRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.endpointItemsIdDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Delete a Item row from the database by its primary keys: [\'id\'].
     * Endpoint
     * @param param the request object
     */
    public endpointItemsIdDelete(param: ItemsApiEndpointItemsIdDeleteRequest, options?: Configuration): Promise<any> {
        return this.api.endpointItemsIdDelete(param.id,  options).toPromise();
    }

    /**
     * Read a single Item row from the database by its primary keys: [\'id\'].
     * Endpoint
     * @param param the request object
     */
    public endpointItemsIdGetWithHttpInfo(param: ItemsApiEndpointItemsIdGetRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.endpointItemsIdGetWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Read a single Item row from the database by its primary keys: [\'id\'].
     * Endpoint
     * @param param the request object
     */
    public endpointItemsIdGet(param: ItemsApiEndpointItemsIdGetRequest, options?: Configuration): Promise<any> {
        return this.api.endpointItemsIdGet(param.id,  options).toPromise();
    }

    /**
     * Update an existing Item row in the database by its primary keys: [\'id\'].
     * Endpoint
     * @param param the request object
     */
    public endpointItemsIdPatchWithHttpInfo(param: ItemsApiEndpointItemsIdPatchRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.endpointItemsIdPatchWithHttpInfo(param.id, param.itemUpdateSchema,  options).toPromise();
    }

    /**
     * Update an existing Item row in the database by its primary keys: [\'id\'].
     * Endpoint
     * @param param the request object
     */
    public endpointItemsIdPatch(param: ItemsApiEndpointItemsIdPatchRequest, options?: Configuration): Promise<any> {
        return this.api.endpointItemsIdPatch(param.id, param.itemUpdateSchema,  options).toPromise();
    }

    /**
     * Create a new Item row in the database.
     * Endpoint
     * @param param the request object
     */
    public endpointItemsPostWithHttpInfo(param: ItemsApiEndpointItemsPostRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.endpointItemsPostWithHttpInfo(param.itemCreateSchema,  options).toPromise();
    }

    /**
     * Create a new Item row in the database.
     * Endpoint
     * @param param the request object
     */
    public endpointItemsPost(param: ItemsApiEndpointItemsPostRequest, options?: Configuration): Promise<any> {
        return this.api.endpointItemsPost(param.itemCreateSchema,  options).toPromise();
    }

}

import { ObservableUsersApi } from "./ObservableAPI";
import { UsersApiRequestFactory, UsersApiResponseProcessor} from "../apis/UsersApi";

export interface UsersApiUsersCurrentUserUsersUsersMeGetRequest {
}

export interface UsersApiUsersDeleteUserUsersUsersIdDeleteRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof UsersApiusersDeleteUserUsersUsersIdDelete
     */
    id: string
}

export interface UsersApiUsersPatchCurrentUserUsersUsersMePatchRequest {
    /**
     * 
     * @type UserUpdate
     * @memberof UsersApiusersPatchCurrentUserUsersUsersMePatch
     */
    userUpdate: UserUpdate
}

export interface UsersApiUsersPatchUserUsersUsersIdPatchRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof UsersApiusersPatchUserUsersUsersIdPatch
     */
    id: string
    /**
     * 
     * @type UserUpdate
     * @memberof UsersApiusersPatchUserUsersUsersIdPatch
     */
    userUpdate: UserUpdate
}

export interface UsersApiUsersUserUsersUsersIdGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof UsersApiusersUserUsersUsersIdGet
     */
    id: string
}

export class ObjectUsersApi {
    private api: ObservableUsersApi

    public constructor(configuration: Configuration, requestFactory?: UsersApiRequestFactory, responseProcessor?: UsersApiResponseProcessor) {
        this.api = new ObservableUsersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Users:Current User
     * @param param the request object
     */
    public usersCurrentUserUsersUsersMeGetWithHttpInfo(param: UsersApiUsersCurrentUserUsersUsersMeGetRequest = {}, options?: Configuration): Promise<HttpInfo<UserRead>> {
        return this.api.usersCurrentUserUsersUsersMeGetWithHttpInfo( options).toPromise();
    }

    /**
     * Users:Current User
     * @param param the request object
     */
    public usersCurrentUserUsersUsersMeGet(param: UsersApiUsersCurrentUserUsersUsersMeGetRequest = {}, options?: Configuration): Promise<UserRead> {
        return this.api.usersCurrentUserUsersUsersMeGet( options).toPromise();
    }

    /**
     * Users:Delete User
     * @param param the request object
     */
    public usersDeleteUserUsersUsersIdDeleteWithHttpInfo(param: UsersApiUsersDeleteUserUsersUsersIdDeleteRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.usersDeleteUserUsersUsersIdDeleteWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Users:Delete User
     * @param param the request object
     */
    public usersDeleteUserUsersUsersIdDelete(param: UsersApiUsersDeleteUserUsersUsersIdDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.usersDeleteUserUsersUsersIdDelete(param.id,  options).toPromise();
    }

    /**
     * Users:Patch Current User
     * @param param the request object
     */
    public usersPatchCurrentUserUsersUsersMePatchWithHttpInfo(param: UsersApiUsersPatchCurrentUserUsersUsersMePatchRequest, options?: Configuration): Promise<HttpInfo<UserRead>> {
        return this.api.usersPatchCurrentUserUsersUsersMePatchWithHttpInfo(param.userUpdate,  options).toPromise();
    }

    /**
     * Users:Patch Current User
     * @param param the request object
     */
    public usersPatchCurrentUserUsersUsersMePatch(param: UsersApiUsersPatchCurrentUserUsersUsersMePatchRequest, options?: Configuration): Promise<UserRead> {
        return this.api.usersPatchCurrentUserUsersUsersMePatch(param.userUpdate,  options).toPromise();
    }

    /**
     * Users:Patch User
     * @param param the request object
     */
    public usersPatchUserUsersUsersIdPatchWithHttpInfo(param: UsersApiUsersPatchUserUsersUsersIdPatchRequest, options?: Configuration): Promise<HttpInfo<UserRead>> {
        return this.api.usersPatchUserUsersUsersIdPatchWithHttpInfo(param.id, param.userUpdate,  options).toPromise();
    }

    /**
     * Users:Patch User
     * @param param the request object
     */
    public usersPatchUserUsersUsersIdPatch(param: UsersApiUsersPatchUserUsersUsersIdPatchRequest, options?: Configuration): Promise<UserRead> {
        return this.api.usersPatchUserUsersUsersIdPatch(param.id, param.userUpdate,  options).toPromise();
    }

    /**
     * Users:User
     * @param param the request object
     */
    public usersUserUsersUsersIdGetWithHttpInfo(param: UsersApiUsersUserUsersUsersIdGetRequest, options?: Configuration): Promise<HttpInfo<UserRead>> {
        return this.api.usersUserUsersUsersIdGetWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Users:User
     * @param param the request object
     */
    public usersUserUsersUsersIdGet(param: UsersApiUsersUserUsersUsersIdGetRequest, options?: Configuration): Promise<UserRead> {
        return this.api.usersUserUsersUsersIdGet(param.id,  options).toPromise();
    }

}
