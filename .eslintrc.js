/*
 * @Author: duanruilong
 * @Date: 2022-09-15 14:18:59
 * @LastEditors: duanruilong
 * @LastEditTime: 2022-09-15 15:21:46
 * @Description:
 */
module.exports = {
  extends: ["taro/react"],
  rules: {
    "import/no-commonjs": 0,
    "no-shadow": 0,
    "react/jsx-curly-brace-presence": 0,
    "jsx-quotes": 0,
    "no-unused-vars": "warn"
  },
  globals: {
    wx: true
  }
};
