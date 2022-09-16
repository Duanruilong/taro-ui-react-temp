/*
 * @Author: duanruilong
 * @Date: 2022-09-15 14:18:59
 * @LastEditors: duanruilong
 * @LastEditTime: 2022-09-16 17:45:42
 * @Description:
 */

import React, { useState, useEffect } from "react";
import { View, Image, Swiper, SwiperItem } from "@tarojs/components";
import { AtButton, AtList, AtListItem } from "taro-ui";
import bcimg from "@/assets/bcimg.png";
import bcimg1 from "@/assets/bcimg1.png";
import bcimg2 from "@/assets/bcimg2.png";
import { getList } from "./service";
import "./index.scss";

const Index = () => {
  const [data, setData] = useState(0);

  useEffect(() => {
    getOTCData();
  }, []);

  const getOTCData = () => {
    getList()
      .then(res => {
        console.log("getList :>> ", res);
        setData(res);
      })
      .catch(() => {});
  };

  return (
    <View className="index">
      <Swiper
        className="swipt"
        indicatorColor="#999"
        indicatorActiveColor="#333"
        circular
        indicatorDots
        autoplay
      >
        <SwiperItem>
          <View className="demo-text-1">
            <Image mode={"scaleToFill"} className={"icon"} src={bcimg} />
          </View>
        </SwiperItem>
        <SwiperItem>
          <View className="demo-text-2">
            <Image mode={"scaleToFill"} className={"icon"} src={bcimg1} />
          </View>
        </SwiperItem>
        <SwiperItem>
          <View className="demo-text-3">
            <Image mode={"scaleToFill"} className={"icon"} src={bcimg2} />
          </View>
        </SwiperItem>
      </Swiper>
      <AtList hasBorder={false}>
        <AtListItem title="标题文字" note="描述信息" />
        <AtListItem title="标题文字" note="描述信息" arrow="right" />
        <AtListItem
          arrow="right"
          note="描述信息"
          title="标题文字标题文字标题文字标题文字标题文字"
          extraText="详细信息详细信息详细信息详细信息"
        />
      </AtList>
    </View>
  );
};
export default Index;
