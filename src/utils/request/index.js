/*
 * @Author: duanruilong
 * @Date: 2022-09-16 14:49:49
 * @LastEditors: duanruilong
 * @LastEditTime: 2022-09-16 16:24:14
 * @Description: Request
 */
import Taro from "@tarojs/taro";

export * from "./cache";

/**
 * Request
 *
 * @props host 接口域名
 * @props authFailCodes 授权过期错误码数组，用户pc、H5下线处理
 * @props useMock 是否开启本地mock
 * @props loading loading效果
 * @props timeout 超时时长
 * @props ignoreSession 忽略session
 * @props ignoreErrorTips 忽略提示错误
 * @props requestInterceptor request拦截器
 * @props responseInterceptor response拦截器
 */
export default class Request {
  constructor(options = {}) {
    this.options = options;
  }

  options;

  get = (...args) => {
    return this.request("GET", ...args);
  };

  post = (...args) => {
    return this.request("POST", ...args);
  };
  put = (...args) => {
    return this.request("PUT", ...args);
  };

  request = (...args) => {
    return new Promise((resolve, reject) => {
      console.log("····················args :>> ", args);
      const [
        method = "GET",
        path = undefined,
        params = {},
        options = {},
        sessionUpdated = false
      ] = args;
      const { useCache, log = false } = options;
      const {
        requestInterceptor,
        responseInterceptor,
        host,
        ...rest
      } = this.options;

      let config = {
        url: `${host}${path}`,
        data: params,
        path,
        method,
        sessionUpdated,
        ...rest,
        ...options
      };

      if (requestInterceptor) {
        config = requestInterceptor({ config });
      }
      console.log("Taro.config :>> ", config);

      return Taro.request({
        ...config,
        success: response => {
          console.log("Taro.request :>> ", response);
          if (responseInterceptor) {
            responseInterceptor({
              response,
              config,
              request: this.request.bind(this, ...args)
            })
              .then(resolve)
              .catch(reject);
          }
        }
      });
    });
  };
}
