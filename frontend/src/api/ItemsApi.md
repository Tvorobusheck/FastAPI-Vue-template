# .ItemsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**endpointItemsGet**](ItemsApi.md#endpointItemsGet) | **GET** /items | Endpoint
[**endpointItemsIdDelete**](ItemsApi.md#endpointItemsIdDelete) | **DELETE** /items/{id} | Endpoint
[**endpointItemsIdGet**](ItemsApi.md#endpointItemsIdGet) | **GET** /items/{id} | Endpoint
[**endpointItemsIdPatch**](ItemsApi.md#endpointItemsIdPatch) | **PATCH** /items/{id} | Endpoint
[**endpointItemsPost**](ItemsApi.md#endpointItemsPost) | **POST** /items | Endpoint
[**searchSearchItemsGet**](ItemsApi.md#searchSearchItemsGet) | **GET** /search/items | Search


# **endpointItemsGet**
> ResponseEndpointItemsGet endpointItemsGet()

Read multiple Item rows from the database.  - Use page & itemsPerPage for paginated results - Use offset & limit for specific ranges - Returns paginated response when using page/itemsPerPage - Returns simple list response when using offset/limit

### Example


```typescript
import { createConfiguration, ItemsApi } from '';
import type { ItemsApiEndpointItemsGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ItemsApi(configuration);

const request: ItemsApiEndpointItemsGetRequest = {
    // Offset for unpaginated queries (optional)
  offset: 1,
    // Limit for unpaginated queries (optional)
  limit: 1,
    // Page number (optional)
  page: 1,
    // Number of items per page (optional)
  itemsPerPage: 1,
  
  ownerId: null,
};

const data = await apiInstance.endpointItemsGet(request);
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


### Return type

**ResponseEndpointItemsGet**

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

# **endpointItemsIdDelete**
> any endpointItemsIdDelete()

Delete a Item row from the database by its primary keys: [\'id\'].

### Example


```typescript
import { createConfiguration, ItemsApi } from '';
import type { ItemsApiEndpointItemsIdDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ItemsApi(configuration);

const request: ItemsApiEndpointItemsIdDeleteRequest = {
  
  id: 1,
};

const data = await apiInstance.endpointItemsIdDelete(request);
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

# **endpointItemsIdGet**
> ItemSchema endpointItemsIdGet()

Read a single Item row from the database by its primary keys: [\'id\'].

### Example


```typescript
import { createConfiguration, ItemsApi } from '';
import type { ItemsApiEndpointItemsIdGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ItemsApi(configuration);

const request: ItemsApiEndpointItemsIdGetRequest = {
  
  id: 1,
};

const data = await apiInstance.endpointItemsIdGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


### Return type

**ItemSchema**

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

# **endpointItemsIdPatch**
> any endpointItemsIdPatch(itemCreateSchema)

Update an existing Item row in the database by its primary keys: [\'id\'].

### Example


```typescript
import { createConfiguration, ItemsApi } from '';
import type { ItemsApiEndpointItemsIdPatchRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ItemsApi(configuration);

const request: ItemsApiEndpointItemsIdPatchRequest = {
  
  id: 1,
  
  itemCreateSchema: {
    ownerId: "ownerId_example",
    name: "name_example",
    description: "description_example",
  },
};

const data = await apiInstance.endpointItemsIdPatch(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemCreateSchema** | **ItemCreateSchema**|  |
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

# **endpointItemsPost**
> any endpointItemsPost(itemCreateSchema)

Create a new Item row in the database.

### Example


```typescript
import { createConfiguration, ItemsApi } from '';
import type { ItemsApiEndpointItemsPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ItemsApi(configuration);

const request: ItemsApiEndpointItemsPostRequest = {
  
  itemCreateSchema: {
    ownerId: "ownerId_example",
    name: "name_example",
    description: "description_example",
  },
};

const data = await apiInstance.endpointItemsPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemCreateSchema** | **ItemCreateSchema**|  |


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

# **searchSearchItemsGet**
> PageItemSchema searchSearchItemsGet()


### Example


```typescript
import { createConfiguration, ItemsApi } from '';
import type { ItemsApiSearchSearchItemsGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ItemsApi(configuration);

const request: ItemsApiSearchSearchItemsGetRequest = {
  
  name: "name_example",
    // Page number (optional)
  page: 1,
    // Page size (optional)
  size: 50,
};

const data = await apiInstance.searchSearchItemsGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] |  | (optional) defaults to undefined
 **page** | [**number**] | Page number | (optional) defaults to 1
 **size** | [**number**] | Page size | (optional) defaults to 50


### Return type

**PageItemSchema**

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


