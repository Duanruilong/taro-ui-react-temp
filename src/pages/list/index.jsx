/*
 * @Author: duanruilong
 * @Date: 2022-09-15 14:18:59
 * @LastEditors: duanruilong
 * @LastEditTime: 2022-09-16 17:49:23
 * @Description:
 */

import React, { useState, useEffect } from "react";
import { View, Image } from "@tarojs/components";
import { AtButton, AtTabBar } from "taro-ui";
import "taro-ui/dist/style/components/button.scss"; // 按需引入
import "./index.scss";

const List = () => {
  const [current, setCurrent] = useState(0);

  const handleClick = value => {
    console.log("111111 :>> ", 111111);
    setCurrent(value);
  };

  return (
    <View className="list">
      <View className="at-article">
        <View className="at-article__h1">这是一级标题这是一级标题</View>
        <View className="at-article__info">
          2017-05-07&nbsp;&nbsp;&nbsp;这是作者
        </View>
        <View className="at-article__content">
          <View className="at-article__section">
            <View className="at-article__h2">这是二级标题</View>
            <View className="at-article__h3">这是三级标题</View>
            <View className="at-article__p">
              这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本落。这是文本段落。1234567890123456789012345678901234567890
              ABCDEFGHIJKLMNOPQRSTUVWXYZ
            </View>
            <View className="at-article__p">这是文本段落。这是文本段落。</View>
            <Image
              className="at-article__img"
              src="https://jdc.jd.com/img/400x400"
              mode="widthFix"
            />
          </View>
        </View>
      </View>
    </View>
  );
};
export default List;
