/*
 * @Author: duanruilong
 * @Date: 2022-09-16 15:29:08
 * @LastEditors: duanruilong
 * @LastEditTime: 2022-09-16 16:08:28
 * @Description:
 */
import { ENV } from "../constants";

const hostMap = {
  dev: "https://base.zhsq.work:8075",
  qa: "https://base.zhsq.work:8075",
  prod: "https://base.zhsq.work:8075"
};

const servers = {
  server: `${hostMap[ENV]}/base/api/server`
};

export default servers;
