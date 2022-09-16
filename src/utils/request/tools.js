/*
 * @Author: duanruilong
 * @Date: 2022-09-16 14:57:19
 * @LastEditors: duanruilong
 * @LastEditTime: 2022-09-16 15:19:30
 * @Description:
 */
export function objectEqual(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}
