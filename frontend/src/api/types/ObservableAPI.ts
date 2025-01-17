import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { BearerResponse } from '../models/BearerResponse';
import { BodyResetForgotPasswordUsersAuthForgotPasswordPost } from '../models/BodyResetForgotPasswordUsersAuthForgotPasswordPost';
import { BodyResetResetPasswordUsersAuthResetPasswordPost } from '../models/BodyResetResetPasswordUsersAuthResetPasswordPost';
import { BodyVerifyRequestTokenUsersAuthRequestVerifyTokenPost } from '../models/BodyVerifyRequestTokenUsersAuthRequestVerifyTokenPost';
import { BodyVerifyVerifyUsersAuthVerifyPost } from '../models/BodyVerifyVerifyUsersAuthVerifyPost';
import { Detail } from '../models/Detail';
import { DynamicListResponse } from '../models/DynamicListResponse';
import { DynamicPaginatedResponse } from '../models/DynamicPaginatedResponse';
import { ErrorModel } from '../models/ErrorModel';
import { HTTPValidationError } from '../models/HTTPValidationError';
import { ItemCreateSchema } from '../models/ItemCreateSchema';
import { ItemSchema } from '../models/ItemSchema';
import { ItemUpdateSchema } from '../models/ItemUpdateSchema';
import { ResponseEndpointItemsGet } from '../models/ResponseEndpointItemsGet';
import { UserCreate } from '../models/UserCreate';
import { UserRead } from '../models/UserRead';
import { UserUpdate } from '../models/UserUpdate';
import { ValidationError } from '../models/ValidationError';
import { ValidationErrorLocInner } from '../models/ValidationErrorLocInner';

import { AuthApiRequestFactory, AuthApiResponseProcessor} from "../apis/AuthApi";
export class ObservableAuthApi {
    private requestFactory: AuthApiRequestFactory;
    private responseProcessor: AuthApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AuthApiRequestFactory,
        responseProcessor?: AuthApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AuthApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AuthApiResponseProcessor();
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
    public authJwtLoginUsersJwtLoginPostWithHttpInfo(username: string, password: string, grantType?: string, scope?: string, clientId?: string, clientSecret?: string, _options?: Configuration): Observable<HttpInfo<BearerResponse>> {
        const requestContextPromise = this.requestFactory.authJwtLoginUsersJwtLoginPost(username, password, grantType, scope, clientId, clientSecret, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authJwtLoginUsersJwtLoginPostWithHttpInfo(rsp)));
            }));
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
    public authJwtLoginUsersJwtLoginPost(username: string, password: string, grantType?: string, scope?: string, clientId?: string, clientSecret?: string, _options?: Configuration): Observable<BearerResponse> {
        return this.authJwtLoginUsersJwtLoginPostWithHttpInfo(username, password, grantType, scope, clientId, clientSecret, _options).pipe(map((apiResponse: HttpInfo<BearerResponse>) => apiResponse.data));
    }

    /**
     * Auth:Jwt.Logout
     */
    public authJwtLogoutUsersJwtLogoutPostWithHttpInfo(_options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.authJwtLogoutUsersJwtLogoutPost(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authJwtLogoutUsersJwtLogoutPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Auth:Jwt.Logout
     */
    public authJwtLogoutUsersJwtLogoutPost(_options?: Configuration): Observable<any> {
        return this.authJwtLogoutUsersJwtLogoutPostWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Register:Register
     * @param userCreate
     */
    public registerRegisterUsersAuthRegisterPostWithHttpInfo(userCreate: UserCreate, _options?: Configuration): Observable<HttpInfo<UserRead>> {
        const requestContextPromise = this.requestFactory.registerRegisterUsersAuthRegisterPost(userCreate, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.registerRegisterUsersAuthRegisterPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Register:Register
     * @param userCreate
     */
    public registerRegisterUsersAuthRegisterPost(userCreate: UserCreate, _options?: Configuration): Observable<UserRead> {
        return this.registerRegisterUsersAuthRegisterPostWithHttpInfo(userCreate, _options).pipe(map((apiResponse: HttpInfo<UserRead>) => apiResponse.data));
    }

    /**
     * Reset:Forgot Password
     * @param bodyResetForgotPasswordUsersAuthForgotPasswordPost
     */
    public resetForgotPasswordUsersAuthForgotPasswordPostWithHttpInfo(bodyResetForgotPasswordUsersAuthForgotPasswordPost: BodyResetForgotPasswordUsersAuthForgotPasswordPost, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.resetForgotPasswordUsersAuthForgotPasswordPost(bodyResetForgotPasswordUsersAuthForgotPasswordPost, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.resetForgotPasswordUsersAuthForgotPasswordPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Reset:Forgot Password
     * @param bodyResetForgotPasswordUsersAuthForgotPasswordPost
     */
    public resetForgotPasswordUsersAuthForgotPasswordPost(bodyResetForgotPasswordUsersAuthForgotPasswordPost: BodyResetForgotPasswordUsersAuthForgotPasswordPost, _options?: Configuration): Observable<any> {
        return this.resetForgotPasswordUsersAuthForgotPasswordPostWithHttpInfo(bodyResetForgotPasswordUsersAuthForgotPasswordPost, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Reset:Reset Password
     * @param bodyResetResetPasswordUsersAuthResetPasswordPost
     */
    public resetResetPasswordUsersAuthResetPasswordPostWithHttpInfo(bodyResetResetPasswordUsersAuthResetPasswordPost: BodyResetResetPasswordUsersAuthResetPasswordPost, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.resetResetPasswordUsersAuthResetPasswordPost(bodyResetResetPasswordUsersAuthResetPasswordPost, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.resetResetPasswordUsersAuthResetPasswordPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Reset:Reset Password
     * @param bodyResetResetPasswordUsersAuthResetPasswordPost
     */
    public resetResetPasswordUsersAuthResetPasswordPost(bodyResetResetPasswordUsersAuthResetPasswordPost: BodyResetResetPasswordUsersAuthResetPasswordPost, _options?: Configuration): Observable<any> {
        return this.resetResetPasswordUsersAuthResetPasswordPostWithHttpInfo(bodyResetResetPasswordUsersAuthResetPasswordPost, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Verify:Request-Token
     * @param bodyVerifyRequestTokenUsersAuthRequestVerifyTokenPost
     */
    public verifyRequestTokenUsersAuthRequestVerifyTokenPostWithHttpInfo(bodyVerifyRequestTokenUsersAuthRequestVerifyTokenPost: BodyVerifyRequestTokenUsersAuthRequestVerifyTokenPost, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.verifyRequestTokenUsersAuthRequestVerifyTokenPost(bodyVerifyRequestTokenUsersAuthRequestVerifyTokenPost, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.verifyRequestTokenUsersAuthRequestVerifyTokenPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Verify:Request-Token
     * @param bodyVerifyRequestTokenUsersAuthRequestVerifyTokenPost
     */
    public verifyRequestTokenUsersAuthRequestVerifyTokenPost(bodyVerifyRequestTokenUsersAuthRequestVerifyTokenPost: BodyVerifyRequestTokenUsersAuthRequestVerifyTokenPost, _options?: Configuration): Observable<any> {
        return this.verifyRequestTokenUsersAuthRequestVerifyTokenPostWithHttpInfo(bodyVerifyRequestTokenUsersAuthRequestVerifyTokenPost, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Verify:Verify
     * @param bodyVerifyVerifyUsersAuthVerifyPost
     */
    public verifyVerifyUsersAuthVerifyPostWithHttpInfo(bodyVerifyVerifyUsersAuthVerifyPost: BodyVerifyVerifyUsersAuthVerifyPost, _options?: Configuration): Observable<HttpInfo<UserRead>> {
        const requestContextPromise = this.requestFactory.verifyVerifyUsersAuthVerifyPost(bodyVerifyVerifyUsersAuthVerifyPost, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.verifyVerifyUsersAuthVerifyPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Verify:Verify
     * @param bodyVerifyVerifyUsersAuthVerifyPost
     */
    public verifyVerifyUsersAuthVerifyPost(bodyVerifyVerifyUsersAuthVerifyPost: BodyVerifyVerifyUsersAuthVerifyPost, _options?: Configuration): Observable<UserRead> {
        return this.verifyVerifyUsersAuthVerifyPostWithHttpInfo(bodyVerifyVerifyUsersAuthVerifyPost, _options).pipe(map((apiResponse: HttpInfo<UserRead>) => apiResponse.data));
    }

}

import { ItemsApiRequestFactory, ItemsApiResponseProcessor} from "../apis/ItemsApi";
export class ObservableItemsApi {
    private requestFactory: ItemsApiRequestFactory;
    private responseProcessor: ItemsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ItemsApiRequestFactory,
        responseProcessor?: ItemsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ItemsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ItemsApiResponseProcessor();
    }

    /**
     * Read multiple Item rows from the database.  - Use page & itemsPerPage for paginated results - Use offset & limit for specific ranges - Returns paginated response when using page/itemsPerPage - Returns simple list response when using offset/limit
     * Endpoint
     * @param [offset] Offset for unpaginated queries
     * @param [limit] Limit for unpaginated queries
     * @param [page] Page number
     * @param [itemsPerPage] Number of items per page
     */
    public endpointItemsGetWithHttpInfo(offset?: number, limit?: number, page?: number, itemsPerPage?: number, _options?: Configuration): Observable<HttpInfo<ResponseEndpointItemsGet>> {
        const requestContextPromise = this.requestFactory.endpointItemsGet(offset, limit, page, itemsPerPage, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.endpointItemsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Read multiple Item rows from the database.  - Use page & itemsPerPage for paginated results - Use offset & limit for specific ranges - Returns paginated response when using page/itemsPerPage - Returns simple list response when using offset/limit
     * Endpoint
     * @param [offset] Offset for unpaginated queries
     * @param [limit] Limit for unpaginated queries
     * @param [page] Page number
     * @param [itemsPerPage] Number of items per page
     */
    public endpointItemsGet(offset?: number, limit?: number, page?: number, itemsPerPage?: number, _options?: Configuration): Observable<ResponseEndpointItemsGet> {
        return this.endpointItemsGetWithHttpInfo(offset, limit, page, itemsPerPage, _options).pipe(map((apiResponse: HttpInfo<ResponseEndpointItemsGet>) => apiResponse.data));
    }

    /**
     * Delete a Item row from the database by its primary keys: [\'id\'].
     * Endpoint
     * @param id
     */
    public endpointItemsIdDeleteWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.endpointItemsIdDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.endpointItemsIdDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete a Item row from the database by its primary keys: [\'id\'].
     * Endpoint
     * @param id
     */
    public endpointItemsIdDelete(id: number, _options?: Configuration): Observable<any> {
        return this.endpointItemsIdDeleteWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Read a single Item row from the database by its primary keys: [\'id\'].
     * Endpoint
     * @param id
     */
    public endpointItemsIdGetWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<ItemSchema>> {
        const requestContextPromise = this.requestFactory.endpointItemsIdGet(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.endpointItemsIdGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Read a single Item row from the database by its primary keys: [\'id\'].
     * Endpoint
     * @param id
     */
    public endpointItemsIdGet(id: number, _options?: Configuration): Observable<ItemSchema> {
        return this.endpointItemsIdGetWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<ItemSchema>) => apiResponse.data));
    }

    /**
     * Update an existing Item row in the database by its primary keys: [\'id\'].
     * Endpoint
     * @param id
     * @param itemUpdateSchema
     */
    public endpointItemsIdPatchWithHttpInfo(id: number, itemUpdateSchema: ItemUpdateSchema, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.endpointItemsIdPatch(id, itemUpdateSchema, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.endpointItemsIdPatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update an existing Item row in the database by its primary keys: [\'id\'].
     * Endpoint
     * @param id
     * @param itemUpdateSchema
     */
    public endpointItemsIdPatch(id: number, itemUpdateSchema: ItemUpdateSchema, _options?: Configuration): Observable<any> {
        return this.endpointItemsIdPatchWithHttpInfo(id, itemUpdateSchema, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Create a new Item row in the database.
     * Endpoint
     * @param itemCreateSchema
     */
    public endpointItemsPostWithHttpInfo(itemCreateSchema: ItemCreateSchema, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.endpointItemsPost(itemCreateSchema, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.endpointItemsPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a new Item row in the database.
     * Endpoint
     * @param itemCreateSchema
     */
    public endpointItemsPost(itemCreateSchema: ItemCreateSchema, _options?: Configuration): Observable<any> {
        return this.endpointItemsPostWithHttpInfo(itemCreateSchema, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

}

import { UsersApiRequestFactory, UsersApiResponseProcessor} from "../apis/UsersApi";
export class ObservableUsersApi {
    private requestFactory: UsersApiRequestFactory;
    private responseProcessor: UsersApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: UsersApiRequestFactory,
        responseProcessor?: UsersApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new UsersApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new UsersApiResponseProcessor();
    }

    /**
     * Users:Current User
     */
    public usersCurrentUserUsersAuthMeGetWithHttpInfo(_options?: Configuration): Observable<HttpInfo<UserRead>> {
        const requestContextPromise = this.requestFactory.usersCurrentUserUsersAuthMeGet(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.usersCurrentUserUsersAuthMeGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Users:Current User
     */
    public usersCurrentUserUsersAuthMeGet(_options?: Configuration): Observable<UserRead> {
        return this.usersCurrentUserUsersAuthMeGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<UserRead>) => apiResponse.data));
    }

    /**
     * Users:Delete User
     * @param id
     */
    public usersDeleteUserUsersAuthIdDeleteWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.usersDeleteUserUsersAuthIdDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.usersDeleteUserUsersAuthIdDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Users:Delete User
     * @param id
     */
    public usersDeleteUserUsersAuthIdDelete(id: string, _options?: Configuration): Observable<void> {
        return this.usersDeleteUserUsersAuthIdDeleteWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Users:Patch Current User
     * @param userUpdate
     */
    public usersPatchCurrentUserUsersAuthMePatchWithHttpInfo(userUpdate: UserUpdate, _options?: Configuration): Observable<HttpInfo<UserRead>> {
        const requestContextPromise = this.requestFactory.usersPatchCurrentUserUsersAuthMePatch(userUpdate, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.usersPatchCurrentUserUsersAuthMePatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Users:Patch Current User
     * @param userUpdate
     */
    public usersPatchCurrentUserUsersAuthMePatch(userUpdate: UserUpdate, _options?: Configuration): Observable<UserRead> {
        return this.usersPatchCurrentUserUsersAuthMePatchWithHttpInfo(userUpdate, _options).pipe(map((apiResponse: HttpInfo<UserRead>) => apiResponse.data));
    }

    /**
     * Users:Patch User
     * @param id
     * @param userUpdate
     */
    public usersPatchUserUsersAuthIdPatchWithHttpInfo(id: string, userUpdate: UserUpdate, _options?: Configuration): Observable<HttpInfo<UserRead>> {
        const requestContextPromise = this.requestFactory.usersPatchUserUsersAuthIdPatch(id, userUpdate, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.usersPatchUserUsersAuthIdPatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Users:Patch User
     * @param id
     * @param userUpdate
     */
    public usersPatchUserUsersAuthIdPatch(id: string, userUpdate: UserUpdate, _options?: Configuration): Observable<UserRead> {
        return this.usersPatchUserUsersAuthIdPatchWithHttpInfo(id, userUpdate, _options).pipe(map((apiResponse: HttpInfo<UserRead>) => apiResponse.data));
    }

    /**
     * Users:User
     * @param id
     */
    public usersUserUsersAuthIdGetWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<UserRead>> {
        const requestContextPromise = this.requestFactory.usersUserUsersAuthIdGet(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.usersUserUsersAuthIdGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Users:User
     * @param id
     */
    public usersUserUsersAuthIdGet(id: string, _options?: Configuration): Observable<UserRead> {
        return this.usersUserUsersAuthIdGetWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<UserRead>) => apiResponse.data));
    }

}
