// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** addProductInfo POST /api/productInfo/add */
export async function addProductInfoUsingPOST(
  body: API.ProductInfoAddRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseLong_>('/api/productInfo/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteProductInfo POST /api/productInfo/delete */
export async function deleteProductInfoUsingPOST(
  body: API.DeleteRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/productInfo/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getProductInfoById GET /api/productInfo/get */
export async function getProductInfoByIdUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getProductInfoByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseProductInfo_>('/api/productInfo/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listProductInfoByPage POST /api/productInfo/list/page */
export async function listProductInfoByPageUsingPOST(
  body: API.ProductInfoQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageProductInfo_>('/api/productInfo/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** listMyProductInfoByPage POST /api/productInfo/my/list/page */
export async function listMyProductInfoByPageUsingPOST(
  body: API.ProductInfoQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageProductInfo_>('/api/productInfo/my/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** offlineHandle POST /api/productInfo/offline */
export async function offlineHandleUsingPOST(
  body: API.ProductOnlineRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/productInfo/offline', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** onlineHandle POST /api/productInfo/online */
export async function onlineHandleUsingPOST(
  body: API.ProductOnlineRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/productInfo/online', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** updateProductInfo POST /api/productInfo/update */
export async function updateProductInfoUsingPOST(
  body: API.ProductInfoUpdateRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/productInfo/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
