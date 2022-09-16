/*
 * @Author: duanruilong
 * @Date: 2022-09-15 14:18:59
 * @LastEditors: duanruilong
 * @LastEditTime: 2022-09-16 18:00:08
 * @Description:
 */

import React, { useState, useEffect } from "react";
import { View, Image } from "@tarojs/components";
import { AtButton, AtDivider, AtGrid } from "taro-ui";
import "taro-ui/dist/style/components/button.scss"; // 按需引入
import "./index.scss";

const User = () => {
  // const [current, setCurrent] = useState(0);

  const handleClick = value => {
    console.log("111111 :>> ", 111111);
    // setCurrent(value);
  };

  return (
    <View className="user">
      <View className="at-row">
        <Image
          className="user-img"
          src="https://jdc.jd.com/img/200"
          mode="widthFix"
        />
      </View>
      <AtGrid
        mode="rect"
        data={[
          {
            image:
              "https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png",
            value: "领取中心"
          },
          {
            image:
              "https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png",
            value: "找折扣"
          },
          {
            image:
              "https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png",
            value: "领会员"
          },
          {
            image:
              "https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png",
            value: "新品首发"
          },
          {
            image:
              "https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png",
            value: "领京豆"
          },
          {
            image:
              "https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png",
            value: "手机馆"
          }
        ]}
      />
      <AtDivider content="```" fontColor="#9ec6f8" lineColor="#9ec6f8" />
      <AtButton type="primary">退出</AtButton>
    </View>
  );
};
export default User;
