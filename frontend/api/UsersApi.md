# .UsersApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**usersCurrentUserUsersUsersMeGet**](UsersApi.md#usersCurrentUserUsersUsersMeGet) | **GET** /users/users/me | Users:Current User
[**usersDeleteUserUsersUsersIdDelete**](UsersApi.md#usersDeleteUserUsersUsersIdDelete) | **DELETE** /users/users/{id} | Users:Delete User
[**usersPatchCurrentUserUsersUsersMePatch**](UsersApi.md#usersPatchCurrentUserUsersUsersMePatch) | **PATCH** /users/users/me | Users:Patch Current User
[**usersPatchUserUsersUsersIdPatch**](UsersApi.md#usersPatchUserUsersUsersIdPatch) | **PATCH** /users/users/{id} | Users:Patch User
[**usersUserUsersUsersIdGet**](UsersApi.md#usersUserUsersUsersIdGet) | **GET** /users/users/{id} | Users:User


# **usersCurrentUserUsersUsersMeGet**
> UserRead usersCurrentUserUsersUsersMeGet()


### Example


```typescript
import { createConfiguration, UsersApi } from '';

const configuration = createConfiguration();
const apiInstance = new UsersApi(configuration);

const request = {};

const data = await apiInstance.usersCurrentUserUsersUsersMeGet(request);
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

# **usersDeleteUserUsersUsersIdDelete**
> void usersDeleteUserUsersUsersIdDelete()


### Example


```typescript
import { createConfiguration, UsersApi } from '';
import type { UsersApiUsersDeleteUserUsersUsersIdDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new UsersApi(configuration);

const request: UsersApiUsersDeleteUserUsersUsersIdDeleteRequest = {
  
  id: "id_example",
};

const data = await apiInstance.usersDeleteUserUsersUsersIdDelete(request);
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

# **usersPatchCurrentUserUsersUsersMePatch**
> UserRead usersPatchCurrentUserUsersUsersMePatch(userUpdate)


### Example


```typescript
import { createConfiguration, UsersApi } from '';
import type { UsersApiUsersPatchCurrentUserUsersUsersMePatchRequest } from '';

const configuration = createConfiguration();
const apiInstance = new UsersApi(configuration);

const request: UsersApiUsersPatchCurrentUserUsersUsersMePatchRequest = {
  
  userUpdate: {
    password: "password_example",
    email: "email_example",
    isActive: true,
    isSuperuser: true,
    isVerified: true,
  },
};

const data = await apiInstance.usersPatchCurrentUserUsersUsersMePatch(request);
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

# **usersPatchUserUsersUsersIdPatch**
> UserRead usersPatchUserUsersUsersIdPatch(userUpdate)


### Example


```typescript
import { createConfiguration, UsersApi } from '';
import type { UsersApiUsersPatchUserUsersUsersIdPatchRequest } from '';

const configuration = createConfiguration();
const apiInstance = new UsersApi(configuration);

const request: UsersApiUsersPatchUserUsersUsersIdPatchRequest = {
  
  id: "id_example",
  
  userUpdate: {
    password: "password_example",
    email: "email_example",
    isActive: true,
    isSuperuser: true,
    isVerified: true,
  },
};

const data = await apiInstance.usersPatchUserUsersUsersIdPatch(request);
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

# **usersUserUsersUsersIdGet**
> UserRead usersUserUsersUsersIdGet()


### Example


```typescript
import { createConfiguration, UsersApi } from '';
import type { UsersApiUsersUserUsersUsersIdGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new UsersApi(configuration);

const request: UsersApiUsersUserUsersUsersIdGetRequest = {
  
  id: "id_example",
};

const data = await apiInstance.usersUserUsersUsersIdGet(request);
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


