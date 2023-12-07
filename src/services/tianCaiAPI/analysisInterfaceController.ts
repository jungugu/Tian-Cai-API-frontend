// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** listOrderInfo GET /api/analysis/order/total */
export async function listOrderInfoUsingGET(options?: { [key: string]: any }) {
  return request<API.BaseResponseListAnalysisOrderVO_>('/api/analysis/order/total', {
    method: 'GET',
    ...(options || {}),
  });
}

/** listRegisterUserInWeek GET /api/analysis/register/user */
export async function listRegisterUserInWeekUsingGET(options?: { [key: string]: any }) {
  return request<API.BaseResponseListAnalysisUserRegisterVO_>('/api/analysis/register/user', {
    method: 'GET',
    ...(options || {}),
  });
}

/** listTopInvokeInterfaceInfo GET /api/analysis/top/interface/invoke */
export async function listTopInvokeInterfaceInfoUsingGET(options?: { [key: string]: any }) {
  return request<API.BaseResponseListInterfaceInfo_>('/api/analysis/top/interface/invoke', {
    method: 'GET',
    ...(options || {}),
  });
}
