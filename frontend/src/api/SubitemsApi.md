# .SubitemsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**endpointSubitemsGet**](SubitemsApi.md#endpointSubitemsGet) | **GET** /subitems | Endpoint
[**endpointSubitemsIdDelete**](SubitemsApi.md#endpointSubitemsIdDelete) | **DELETE** /subitems/{id} | Endpoint
[**endpointSubitemsIdGet**](SubitemsApi.md#endpointSubitemsIdGet) | **GET** /subitems/{id} | Endpoint
[**endpointSubitemsIdPatch**](SubitemsApi.md#endpointSubitemsIdPatch) | **PATCH** /subitems/{id} | Endpoint
[**endpointSubitemsPost**](SubitemsApi.md#endpointSubitemsPost) | **POST** /subitems | Endpoint


# **endpointSubitemsGet**
> ResponseEndpointSubitemsGet endpointSubitemsGet()

Read multiple Subitem rows from the database.  - Use page & itemsPerPage for paginated results - Use offset & limit for specific ranges - Returns paginated response when using page/itemsPerPage - Returns simple list response when using offset/limit

### Example


```typescript
import { createConfiguration, SubitemsApi } from '';
import type { SubitemsApiEndpointSubitemsGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SubitemsApi(configuration);

const request: SubitemsApiEndpointSubitemsGetRequest = {
    // Offset for unpaginated queries (optional)
  offset: 1,
    // Limit for unpaginated queries (optional)
  limit: 1,
    // Page number (optional)
  page: 1,
    // Number of items per page (optional)
  itemsPerPage: 1,
  
  ownerId: null,
  
  itemId: null,
};

const data = await apiInstance.endpointSubitemsGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | [**number**] | Offset for unpaginated queries | (optional) defaults to undefined
 **limit** | [**number**] | Limit for unpaginated queries | (optional) defaults to undefined
 **page** | [**number**] | Page number | (optional) defaults to undefined
 **itemsPerPage** | [**number**] | Number of items per page | (optional) defaults to undefined
 **ownerId** | **any** |  | (optional) defaults to undefined
 **itemId** | **any** |  | (optional) defaults to undefined


### Return type

**ResponseEndpointSubitemsGet**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **endpointSubitemsIdDelete**
> any endpointSubitemsIdDelete()

Delete a Subitem row from the database by its primary keys: [\'id\'].

### Example


```typescript
import { createConfiguration, SubitemsApi } from '';
import type { SubitemsApiEndpointSubitemsIdDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SubitemsApi(configuration);

const request: SubitemsApiEndpointSubitemsIdDeleteRequest = {
  
  id: 1,
};

const data = await apiInstance.endpointSubitemsIdDelete(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


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
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **endpointSubitemsIdGet**
> SubitemSchema endpointSubitemsIdGet()

Read a single Subitem row from the database by its primary keys: [\'id\'].

### Example


```typescript
import { createConfiguration, SubitemsApi } from '';
import type { SubitemsApiEndpointSubitemsIdGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SubitemsApi(configuration);

const request: SubitemsApiEndpointSubitemsIdGetRequest = {
  
  id: 1,
};

const data = await apiInstance.endpointSubitemsIdGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


### Return type

**SubitemSchema**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **endpointSubitemsIdPatch**
> any endpointSubitemsIdPatch(subitemCreateSchema)

Update an existing Subitem row in the database by its primary keys: [\'id\'].

### Example


```typescript
import { createConfiguration, SubitemsApi } from '';
import type { SubitemsApiEndpointSubitemsIdPatchRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SubitemsApi(configuration);

const request: SubitemsApiEndpointSubitemsIdPatchRequest = {
  
  id: 1,
  
  subitemCreateSchema: {
    ownerId: "ownerId_example",
    name: "name_example",
    itemId: 1,
  },
};

const data = await apiInstance.endpointSubitemsIdPatch(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subitemCreateSchema** | **SubitemCreateSchema**|  |
 **id** | [**number**] |  | defaults to undefined


### Return type

**any**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **endpointSubitemsPost**
> any endpointSubitemsPost(subitemCreateSchema)

Create a new Subitem row in the database.

### Example


```typescript
import { createConfiguration, SubitemsApi } from '';
import type { SubitemsApiEndpointSubitemsPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SubitemsApi(configuration);

const request: SubitemsApiEndpointSubitemsPostRequest = {
  
  subitemCreateSchema: {
    ownerId: "ownerId_example",
    name: "name_example",
    itemId: 1,
  },
};

const data = await apiInstance.endpointSubitemsPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subitemCreateSchema** | **SubitemCreateSchema**|  |


### Return type

**any**

### Authorization

[OAuth2PasswordBearer](README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


