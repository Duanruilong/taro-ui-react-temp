<!--
 * @Author: duanruilong
 * @Date: 2022-09-15 15:47:48
 * @LastEditors: duanruilong
 * @LastEditTime: 2022-09-15 15:52:19
 * @Description: 
-->
 
## taro-ui-temp

taro + taro-ui

## 开始


克隆到本地开发:

```

    # 使用 cnpm 安装依赖
    $ cnpm install

    # 使用 npm 安装依赖
    $ npm install

    # 运行
    $ npm start

    # 运行本地mock接口
    $ npm run mock

```

 
## 微信小程序
 编译命令

 ```
    # yarn
    $ yarn dev:weapp
    $ yarn build:weapp

    # npm script
    $ npm run dev:weapp
    $ npm run build:weapp

    # 仅限全局安装
    $ taro build --type weapp --watch
    $ taro build --type weapp

    # npx 用户也可以使用
    $ npx taro build --type weapp --watch
    $ npx taro build --type weapp

    # watch 同时开启压缩
    $ set NODE_ENV=production && taro build --type weapp --watch # Windows
    $ NODE_ENV=production taro build --type weapp --watch # Mac
```