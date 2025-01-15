# .UsersApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**usersCurrentUserUsersAuthMeGet**](UsersApi.md#usersCurrentUserUsersAuthMeGet) | **GET** /users/auth/me | Users:Current User
[**usersDeleteUserUsersAuthIdDelete**](UsersApi.md#usersDeleteUserUsersAuthIdDelete) | **DELETE** /users/auth/{id} | Users:Delete User
[**usersPatchCurrentUserUsersAuthMePatch**](UsersApi.md#usersPatchCurrentUserUsersAuthMePatch) | **PATCH** /users/auth/me | Users:Patch Current User
[**usersPatchUserUsersAuthIdPatch**](UsersApi.md#usersPatchUserUsersAuthIdPatch) | **PATCH** /users/auth/{id} | Users:Patch User
[**usersUserUsersAuthIdGet**](UsersApi.md#usersUserUsersAuthIdGet) | **GET** /users/auth/{id} | Users:User


# **usersCurrentUserUsersAuthMeGet**
> UserRead usersCurrentUserUsersAuthMeGet()


### Example


```typescript
import { createConfiguration, UsersApi } from '';

const configuration = createConfiguration();
const apiInstance = new UsersApi(configuration);

const request = {};

const data = await apiInstance.usersCurrentUserUsersAuthMeGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**UserRead**

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

# **usersDeleteUserUsersAuthIdDelete**
> void usersDeleteUserUsersAuthIdDelete()


### Example


```typescript
import { createConfiguration, UsersApi } from '';
import type { UsersApiUsersDeleteUserUsersAuthIdDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new UsersApi(configuration);

const request: UsersApiUsersDeleteUserUsersAuthIdDeleteRequest = {
  
  id: "id_example",
};

const data = await apiInstance.usersDeleteUserUsersAuthIdDelete(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful Response |  -  |
**401** | Missing token or inactive user. |  -  |
**403** | Not a superuser. |  -  |
**404** | The user does not exist. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **usersPatchCurrentUserUsersAuthMePatch**
> UserRead usersPatchCurrentUserUsersAuthMePatch(userUpdate)


### Example


```typescript
import { createConfiguration, UsersApi } from '';
import type { UsersApiUsersPatchCurrentUserUsersAuthMePatchRequest } from '';

const configuration = createConfiguration();
const apiInstance = new UsersApi(configuration);

const request: UsersApiUsersPatchCurrentUserUsersAuthMePatchRequest = {
  
  userUpdate: {
    password: "password_example",
    email: "email_example",
    isActive: true,
    isSuperuser: true,
    isVerified: true,
  },
};

const data = await apiInstance.usersPatchCurrentUserUsersAuthMePatch(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userUpdate** | **UserUpdate**|  |


### Return type

**UserRead**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**401** | Missing token or inactive user. |  -  |
**400** | Bad Request |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **usersPatchUserUsersAuthIdPatch**
> UserRead usersPatchUserUsersAuthIdPatch(userUpdate)


### Example


```typescript
import { createConfiguration, UsersApi } from '';
import type { UsersApiUsersPatchUserUsersAuthIdPatchRequest } from '';

const configuration = createConfiguration();
const apiInstance = new UsersApi(configuration);

const request: UsersApiUsersPatchUserUsersAuthIdPatchRequest = {
  
  id: "id_example",
  
  userUpdate: {
    password: "password_example",
    email: "email_example",
    isActive: true,
    isSuperuser: true,
    isVerified: true,
  },
};

const data = await apiInstance.usersPatchUserUsersAuthIdPatch(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userUpdate** | **UserUpdate**|  |
 **id** | [**string**] |  | defaults to undefined


### Return type

**UserRead**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**401** | Missing token or inactive user. |  -  |
**403** | Not a superuser. |  -  |
**404** | The user does not exist. |  -  |
**400** | Bad Request |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **usersUserUsersAuthIdGet**
> UserRead usersUserUsersAuthIdGet()


### Example


```typescript
import { createConfiguration, UsersApi } from '';
import type { UsersApiUsersUserUsersAuthIdGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new UsersApi(configuration);

const request: UsersApiUsersUserUsersAuthIdGetRequest = {
  
  id: "id_example",
};

const data = await apiInstance.usersUserUsersAuthIdGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined


### Return type

**UserRead**

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
**403** | Not a superuser. |  -  |
**404** | The user does not exist. |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


