// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** closeProductOrder POST /api/productOrder/close */
export async function closeProductOrderUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.closeProductOrderUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/productOrder/close', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** addProductOrder POST /api/productOrder/create */
export async function addProductOrderUsingPOST(
  body: API.ProductOrderAddRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseProductOrderVO_>('/api/productOrder/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteProductOrder POST /api/productOrder/delete */
export async function deleteProductOrderUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteProductOrderUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/productOrder/delete', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getProductOrderById GET /api/productOrder/get */
export async function getProductOrderByIdUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getProductOrderByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseProductOrderVO_>('/api/productOrder/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listProductOrderByPage POST /api/productOrder/list/page */
export async function listProductOrderByPageUsingPOST(
  body: API.ProductOrderQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageProductOrder_>('/api/productOrder/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** listMyProductOrderByPage POST /api/productOrder/my/list/page */
export async function listMyProductOrderByPageUsingPOST(
  body: API.ProductOrderQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseOrderVo_>('/api/productOrder/my/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** parseOrderNotifyResult POST /api/productOrder/notify/order */
export async function parseOrderNotifyResultUsingPOST(
  body: string,
  options?: { [key: string]: any },
) {
  return request<string>('/api/productOrder/notify/order', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** queryOrderStatus POST /api/productOrder/query/status */
export async function queryOrderStatusUsingPOST(
  body: API.ProductOrderQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/productOrder/query/status', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
