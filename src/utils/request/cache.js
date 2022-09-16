/*
 * @Author: duanruilong
 * @Date: 2022-09-16 14:57:19
 * @LastEditors: duanruilong
 * @LastEditTime: 2022-09-16 15:18:27
 * @Description:
 */
import Taro from "@tarojs/taro";
import { objectEqual } from "./tools";

const cacheData = {};

function setCache(options) {
  const { key, params, data } = options;
  cacheData[key] = { params, data };
}

function getCache(options) {
  const { key, params } = options;
  const item = cacheData[key];
  if (item) {
    if (objectEqual(item.params, params)) {
      return item.data;
    }
  }
  return null;
}

function setLocal(options) {
  const { key, params, data } = options;
  Taro.setStorage({
    key,
    data: options
  });
}

function getLocal(options) {
  const { key, params } = options;
  Taro.getStorage({
    key: key
  })
    .then(res => {
      if (res.data) {
        const item = res.data;
        if (objectEqual(item.params, params)) {
          return item.data;
        }
        Taro.removeStorageSync(key);
      } else {
        return null;
      }
    })
    .catch(() => {
      return null;
    });
}

// interface ItemType extends CacheOptions {
//   type: string;
// }

export function setCacheItem({ type, ...args }) {
  if (type === "local") {
    return setLocal(args);
  }
  return setCache(args);
}

export function getCacheItem({ type, ...args }) {
  if (type === "local") {
    return getLocal(args);
  }
  return getCache(args);
}

// type RemoveItemType = { type; key };

export function removeCacheItem({ type, key }) {
  if (type === "local") {
    window.localStorage.removeItem(key);
    return;
  }
  delete cacheData[key];
}
