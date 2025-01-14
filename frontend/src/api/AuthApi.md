# .AuthApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authJwtLoginUsersJwtLoginPost**](AuthApi.md#authJwtLoginUsersJwtLoginPost) | **POST** /users/jwt/login | Auth:Jwt.Login
[**authJwtLogoutUsersJwtLogoutPost**](AuthApi.md#authJwtLogoutUsersJwtLogoutPost) | **POST** /users/jwt/logout | Auth:Jwt.Logout
[**registerRegisterUsersAuthRegisterPost**](AuthApi.md#registerRegisterUsersAuthRegisterPost) | **POST** /users/auth/register | Register:Register
[**resetForgotPasswordUsersAuthForgotPasswordPost**](AuthApi.md#resetForgotPasswordUsersAuthForgotPasswordPost) | **POST** /users/auth/forgot-password | Reset:Forgot Password
[**resetResetPasswordUsersAuthResetPasswordPost**](AuthApi.md#resetResetPasswordUsersAuthResetPasswordPost) | **POST** /users/auth/reset-password | Reset:Reset Password
[**verifyRequestTokenUsersAuthRequestVerifyTokenPost**](AuthApi.md#verifyRequestTokenUsersAuthRequestVerifyTokenPost) | **POST** /users/auth/request-verify-token | Verify:Request-Token
[**verifyVerifyUsersAuthVerifyPost**](AuthApi.md#verifyVerifyUsersAuthVerifyPost) | **POST** /users/auth/verify | Verify:Verify


# **authJwtLoginUsersJwtLoginPost**
> BearerResponse authJwtLoginUsersJwtLoginPost()


### Example


```typescript
import { createConfiguration, AuthApi } from '';
import type { AuthApiAuthJwtLoginUsersJwtLoginPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AuthApi(configuration);

const request: AuthApiAuthJwtLoginUsersJwtLoginPostRequest = {
  
  username: "username_example",
  
  password: "password_example",
  
  grantType: "password",
  
  scope: "",
  
  clientId: "clientId_example",
  
  clientSecret: "clientSecret_example",
};

const data = await apiInstance.authJwtLoginUsersJwtLoginPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | [**string**] |  | defaults to undefined
 **password** | [**string**] |  | defaults to undefined
 **grantType** | [**string**] |  | (optional) defaults to undefined
 **scope** | [**string**] |  | (optional) defaults to ''
 **clientId** | [**string**] |  | (optional) defaults to undefined
 **clientSecret** | [**string**] |  | (optional) defaults to undefined


### Return type

**BearerResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**400** | Bad Request |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authJwtLogoutUsersJwtLogoutPost**
> any authJwtLogoutUsersJwtLogoutPost()


### Example


```typescript
import { createConfiguration, AuthApi } from '';

const configuration = createConfiguration();
const apiInstance = new AuthApi(configuration);

const request = {};

const data = await apiInstance.authJwtLogoutUsersJwtLogoutPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**any**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**401** | Missing token or inactive user. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **registerRegisterUsersAuthRegisterPost**
> UserRead registerRegisterUsersAuthRegisterPost(userCreate)


### Example


```typescript
import { createConfiguration, AuthApi } from '';
import type { AuthApiRegisterRegisterUsersAuthRegisterPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AuthApi(configuration);

const request: AuthApiRegisterRegisterUsersAuthRegisterPostRequest = {
  
  userCreate: {
    email: "email_example",
    password: "password_example",
    isActive: true,
    isSuperuser: true,
    isVerified: true,
  },
};

const data = await apiInstance.registerRegisterUsersAuthRegisterPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userCreate** | **UserCreate**|  |


### Return type

**UserRead**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**400** | Bad Request |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **resetForgotPasswordUsersAuthForgotPasswordPost**
> any resetForgotPasswordUsersAuthForgotPasswordPost(bodyResetForgotPasswordUsersAuthForgotPasswordPost)


### Example


```typescript
import { createConfiguration, AuthApi } from '';
import type { AuthApiResetForgotPasswordUsersAuthForgotPasswordPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AuthApi(configuration);

const request: AuthApiResetForgotPasswordUsersAuthForgotPasswordPostRequest = {
  
  bodyResetForgotPasswordUsersAuthForgotPasswordPost: {
    email: "email_example",
  },
};

const data = await apiInstance.resetForgotPasswordUsersAuthForgotPasswordPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bodyResetForgotPasswordUsersAuthForgotPasswordPost** | **BodyResetForgotPasswordUsersAuthForgotPasswordPost**|  |


### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **resetResetPasswordUsersAuthResetPasswordPost**
> any resetResetPasswordUsersAuthResetPasswordPost(bodyResetResetPasswordUsersAuthResetPasswordPost)


### Example


```typescript
import { createConfiguration, AuthApi } from '';
import type { AuthApiResetResetPasswordUsersAuthResetPasswordPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AuthApi(configuration);

const request: AuthApiResetResetPasswordUsersAuthResetPasswordPostRequest = {
  
  bodyResetResetPasswordUsersAuthResetPasswordPost: {
    token: "token_example",
    password: "password_example",
  },
};

const data = await apiInstance.resetResetPasswordUsersAuthResetPasswordPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bodyResetResetPasswordUsersAuthResetPasswordPost** | **BodyResetResetPasswordUsersAuthResetPasswordPost**|  |


### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**400** | Bad Request |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **verifyRequestTokenUsersAuthRequestVerifyTokenPost**
> any verifyRequestTokenUsersAuthRequestVerifyTokenPost(bodyVerifyRequestTokenUsersAuthRequestVerifyTokenPost)


### Example


```typescript
import { createConfiguration, AuthApi } from '';
import type { AuthApiVerifyRequestTokenUsersAuthRequestVerifyTokenPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AuthApi(configuration);

const request: AuthApiVerifyRequestTokenUsersAuthRequestVerifyTokenPostRequest = {
  
  bodyVerifyRequestTokenUsersAuthRequestVerifyTokenPost: {
    email: "email_example",
  },
};

const data = await apiInstance.verifyRequestTokenUsersAuthRequestVerifyTokenPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bodyVerifyRequestTokenUsersAuthRequestVerifyTokenPost** | **BodyVerifyRequestTokenUsersAuthRequestVerifyTokenPost**|  |


### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **verifyVerifyUsersAuthVerifyPost**
> UserRead verifyVerifyUsersAuthVerifyPost(bodyVerifyVerifyUsersAuthVerifyPost)


### Example


```typescript
import { createConfiguration, AuthApi } from '';
import type { AuthApiVerifyVerifyUsersAuthVerifyPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AuthApi(configuration);

const request: AuthApiVerifyVerifyUsersAuthVerifyPostRequest = {
  
  bodyVerifyVerifyUsersAuthVerifyPost: {
    token: "token_example",
  },
};

const data = await apiInstance.verifyVerifyUsersAuthVerifyPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bodyVerifyVerifyUsersAuthVerifyPost** | **BodyVerifyVerifyUsersAuthVerifyPost**|  |


### Return type

**UserRead**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**400** | Bad Request |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


