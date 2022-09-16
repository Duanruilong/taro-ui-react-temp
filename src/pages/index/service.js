/*
 * @Author: duanruilong
 * @Date: 2022-09-16 14:18:28
 * @LastEditors: duanruilong
 * @LastEditTime: 2022-09-16 16:08:37
 * @Description:
 */
import http from "@/utils/http";

const { post } = new http("server");

// getList
export function getList(params, options) {
  return post("/plan/v2/list", params, {
    ignoreErrorTips: true,
    useMock: true,
    ...options
  });
}

export function getPlanList(params, options) {
  return post("/plan/v2/list", params, {
    ignoreErrorTips: true,
    useMock: true,
    ...options
  });
}
