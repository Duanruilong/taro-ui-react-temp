/*
 * @Author: duanruilong
 * @Date: 2022-09-15 14:18:59
 * @LastEditors: duanruilong
 * @LastEditTime: 2022-09-16 14:10:52
 * @Description:
 */
export default {
  pages: ["pages/index/index", "pages/list/index", "pages/user/index"],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "Taro-ui-temp",
    navigationBarTextStyle: "black"
  },
  tabBar: {
    color: "#8c8c8c",
    selectedColor: "#000000",
    list: [
      {
        pagePath: "pages/index/index",
        text: "首页",
        iconPath: "assets/worktop.png",
        selectedIconPath: "assets/worktop_select.png"
      },
      {
        pagePath: "pages/list/index",
        text: "列表",
        iconPath: "assets/doctor.png",
        selectedIconPath: "assets/doctor_select.png"
      },
      {
        pagePath: "pages/user/index",
        text: "我的",
        iconPath: "assets/user.png",
        selectedIconPath: "assets/user_select.png"
      }
    ]
  },
  permission: {
    "scope.userLocation": {
      desc: "要获取你的地理位置，是否允许？"
    }
  }
};
