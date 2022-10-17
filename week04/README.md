# Elubrazione's Todo List
升级版，使用 `Typescript` 进行开发，可对任务进行修改并显示最后修改时间
## 目录
- [Elubrazione's Todo List](#elubraziones-todo-list)
  - [目录](#目录)
  - [要求清单](#要求清单)
  - [完成思路](#完成思路)
  - [遇到的问题](#遇到的问题)

## 要求清单
- 不使用任何第三方框架或库，如 jQuery、React、Vue；
- 使用 `Typescript` 进行开发；
- 每次创建，需要生成 `ctime`，每次修改都需要修改 `mtime`；

## 完成思路
- 配置 `tsconfig` 和 `webpack` 文件；
- 修改接口字段，重写 `Typescript` 文件，完成上周的基础功能；
- 增加修改任务内容的功能，绑定事件监听函数，显示最后修改时间

## 遇到的问题
<!-- **1. window.localStorage 不能直接存储对象**
  - 通过 `JSON.stringify` 转化为字符串再存储，读取的时候用 `JSON.parse` 转化为 `Array`即可。

**2. 用 `e.keyCode === 13` 判断回车字符，但是被提示API已被弃用**
  - 查询 `MDN` 文档改用 `e.key === 'Enter'` 来判断。

**3. 输入空格时也会创建任务项目**
  - 创建 `DOM` 对象前先删除掉文本的前后空格，再判断文本字符串的长度，为0则不创建。

**4. 页面刷新后任务的完成状态丢失，仍然被标记成未完成**
  - 在LocalData中添加 `finish` 字段，类型为 `boolean`，用来标记是否完成，根据此状态渲染不同的CSS。

**5. 可能会有重复输入的内容**
  - 输入创建taskDom节点时先判断此内容是否存在，存在则提示用户已添加过此任务，反之则添加并创建节点。 -->