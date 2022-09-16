/*
 * @Author: duanruilong
 * @Date: 2022-09-16 14:22:13
 * @LastEditors: duanruilong
 * @LastEditTime: 2022-09-16 16:48:40
 * @Description: http
 */

import Taro from "@tarojs/taro";
import { isString } from "./utils";
import Request, { setCacheItem } from "./request";
import { toast, showLoading, hideLoading } from "./tools";
import { ENV, HOME_PAGE } from "../constants";
import servers from "./servers";
import { getUserId, updateSession, loginOutHandler } from "./loginHandler";

const msgMap = {
  networkError: "网络异常，请稍后再试",
  httpError: "请求错误",
  dataError: "请求错误"
};

export default function getHttp(admin, opts = {}) {
  return new Request({
    host: servers[admin],
    authFailCodes: ["100103"],
    outLoginCodes: ["100101", "100102", "100104", "100105"],
    authErrorCodes: ["00010001"],
    ignoreErrorCode: ["00010008"],
    timeout: 10000,
    ignoreSession: false,
    ignoreErrorTips: false,
    // useMock: true,
    // useCache: { type: 'local', session: true,refresh:false },
    loading: {
      title: "加载中",
      mask: true
    },
    requestInterceptor: ({ config }) => {
      const { useMock, ignoreSession, path, loading, header = {} } = config;

      loading && showLoading(loading);
      if (ENV === "dev" && useMock) {
        config.url = `http://localhost:3721${path}`;
      }

      if (path.indexOf("http://") !== -1) {
        config.url = path;
      }

      if (!ignoreSession) {
        // config.header._ticketObject = getSession();
        // 统一处理请求参数
        Taro.getStorage({
          key: "userInfo"
        })
          .then(res => {
            // console.log(' key: "userInfo" :>> ', res.data);
            if (res.data) {
              // config.data.userid = res.data?.userid;
            }
          })
          .catch(() => {});
      }

      for (const key in config.data) {
        if (isString(config.data[key])) {
          config.data[key] = config.data[key].trim();
        }
      }
      return config;
    },
    responseInterceptor: ({ response, config, request }) => {
      const {
        ignoreSession,
        loading,
        authFailCodes,
        outLoginCodes,
        authErrorCodes,
        ignoreErrorCode,
        sessionUpdated,
        ignoreErrorTips,
        useCache,
        path
      } = config;
      const { data = {}, statusCode } = response;

      console.log(`${path}：`, config);
      console.log("response：", data);

      loading && hideLoading();

      if (!statusCode) {
        toast(msgMap["networkError"]);
        return Promise.reject(response);
      }

      if (statusCode < 200 || statusCode >= 300) {
        toast(msgMap["httpError"]);
        return Promise.reject(response);
      }

      const { errorCode = "", errorMsg, status } = data;

      if (status && status.toUpperCase() === "ERROR") {
        if (!ignoreSession) {
          if (outLoginCodes.indexOf(errorCode) !== -1) {
            loginOutHandler();
            toast(errorMsg || msgMap["dataError"]);
            return Promise.reject(data);
          }

          if (authFailCodes.indexOf(errorCode) !== -1) {
            if (!sessionUpdated && getUserId()) {
              return new Promise(async resolve => {
                await updateSession();
                resolve(request(true));
              });
            } else {
              loginOutHandler();
              toast(errorMsg || msgMap["dataError"]);
              return Promise.reject(data);
            }
          }

          if (authErrorCodes.indexOf(errorCode) !== -1) {
            toast(errorMsg || msgMap["dataError"], { mask: true }, () => {
              Taro.switchTab({ url: HOME_PAGE });
            });
            return Promise.reject(data);
          }
        }
        // 忽略并交由业务自己处理的错误
        if (ignoreErrorCode.includes(errorCode)) {
          return Promise.reject(data);
        }
        !ignoreErrorTips && toast(errorMsg || msgMap["dataError"]);
        return Promise.reject(data);
      }

      const content = data.content !== undefined ? data.content : data;

      if (useCache) {
        const { type, session = true } = useCache;
        let params = {
          ...config.data
        };
        if (session) {
          params = { ...params, ...config.header };
        }
        setCacheItem({
          type,
          key: config.url,
          params,
          data: content
        });
      }

      return Promise.resolve(content);
    },
    ...opts
  });
}
