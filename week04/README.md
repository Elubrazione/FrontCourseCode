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
- 每次创建，需要生成 `ctime` 和 `mtime`；
- 点击任务可对内容进行修改，按回车提交，可显示最后提交时间。

## 完成思路
- 配置 `tsconfig` 和 `webpack` 文件；
- 修改接口字段，重写 `Typescript` 文件，完成上周的基础功能；
- 增加修改任务内容的功能，绑定事件监听函数，显示最后修改时间；
- 重写alert组件，实现弹出1s后自动关闭，`alert() => Remind()`

## 遇到的问题
**1. 删、改任务时，获取节点和容器数组索引的方法太麻烦**
  - 改变存储的数据结构。创建 `Todo` 类并添加 `ele` 属性，创建节点时将节点和 `e.ele` 属性绑定；事件监听函数直接使用 `Todo` 实例作为参数，快速获取对应节点。

**2. 原来的alert不太好看，而且要手动关闭，略显麻烦**
  - 写一个组件并使用 `setTimeout()`，在回调函数里动态获取渲染出的弹窗并将其移除，延迟时间为1s。

**3. 不太熟悉webpack的配置，配置结果达不到预期效果**
  - 重新简单地看了一下，相关笔记链接: https://elubrazione.github.io/2022/10/16/Webpack/#/entry-amp-output