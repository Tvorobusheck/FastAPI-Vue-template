# .SearchApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**searchSearchItemsGet**](SearchApi.md#searchSearchItemsGet) | **GET** /search/items | Search


# **searchSearchItemsGet**
> PageItemSchema searchSearchItemsGet()


### Example


```typescript
import { createConfiguration, SearchApi } from '';
import type { SearchApiSearchSearchItemsGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SearchApi(configuration);

const request: SearchApiSearchSearchItemsGetRequest = {
  
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


