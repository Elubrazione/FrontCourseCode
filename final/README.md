# 用户录入系统

## 要求清单
- 项目目录 final。前后端分离，前端项目放在fe文件夹，后端项目放在server。
  - 前端：React + Typescript，需要相应的README，记录开发完成的思路以及遇到的问题；
  - 后端：NodeJS + Koa，数据持久化使用json文件保存即可，需要相应的README。
- 记录开发完成的思路、接口设计、数据结构设计，遇到的问题以及运行说明。
- 代码有良好的可读性，遵守编码规范，有合适的代码注释。
- 合理拆分函数、组件以及模块，切忌所有的代码写到一个文件。

## 如何使用
**1. 打开一个终端**
```js
/* cd到服务器所在目录 */
cd ./server

/* 启动服务端 */
node app.js
```
**2. 打开另一个终端**
```js
/* cd到前端所在目录 */
cd ./fe

/* 自动打开浏览器 */
npm run dev
```
## 完成思路
#### 前端
1. 配置环境，完成页面的划分，编写 `router`；
2. 使用 `antd` 完成UI组件和页面，但没有实际功能；
3. 重新配置 `webpack`，实现打包到 `final/server` 目录；
4. 企图使用 `redux` 做全局管理；
5. 设计通信接口并在前端代码里预留出后端的接口；
6. 反复挣扎发现redux用不好且bug频出，放弃，推倒开始使用 `state`；
7. 实现各种组件的实际功能，如增加、修改、查看详情、搜索、退出登录等；
8. 配合后端调试，最终完成。
#### 后端
1. 登录相关接口 => `server/src/user_login.js`
2. 数据处理相关接口 => `server/src/data_handler.js`
3. 汇总调用 => `server/app.js`

## 接口设计
#### 前后端接口设计
- `post /api/user/login` 根据用户名密码，判断能否成功登录。成功则以session存储用户；
- `post /api/user/logout` 退出登录，删除用户的session记录；
- `get /api/stu/info` 获取当前登录信息，判断是否登录，防止强敲进入；
- `get /api/stu/list` 获取存储的学生信息；
- `post /api/stu/create` 创建学生记录；
- `post /api/stu/update` 修改更新学生记录；
- `post /api/stu/delete` 删除学生记录；
- `post /api/stu/clear` 清除所有学生记录；

#### 数据结构设计
##### 组件
- ButtonArea => 数据顶部的按钮区（包含增加、搜索、清除按钮）
- Modal => 点击按钮区的增加以及对学生信息进行编辑时的弹窗
  - ModalOut => 增加和编辑学生共用，包含表单组件
  - SubmitForm => 表单组件，用于填写或修改学生信息
- Table => 数据展示表格
  - InfoTable => 学生数据展示，包含学生信息和操作按钮
  - StuAction => 操作按钮，下拉含有：查看、编辑、删除操作
- HeadBar => 头部栏，含有管理员头像和ID
- SideBar => 侧边导航栏，含有“人员管理”和“关于”菜单
- StuDetails => 查看学生详情页面时展示学生详情的组件

##### 页面
- Login => 登录界面；
- Main => 主界面，用于展示学生信息；
- About => 关于界面，介绍设计情况；
- StuSingle => 单个学生的详情页

## 遇到的问题
**1. `Redux` 使用 `useAppSelector` 一直获取不到store里面的数据**
- 还未解决，几乎整个作业都在解决各种redux的问题，最后由于作业截止时间即将到来，于是放弃使用`Redux`（感觉好遗憾）。

**2. 如何进行学生搜索**
- 对输入的搜索值在学生的姓名列表里进行匹配，使用 `split` 函数，若切分后的数组长度大于1则说明该学生姓名中存在相关值。将所有符合条件的学生姓名返回，更新渲染数据表单
