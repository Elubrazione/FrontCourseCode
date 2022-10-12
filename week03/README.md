# Elubrazione's Todo List

## 目录
- [Elubrazione's Todo List](#elubraziones-todo-list)
  - [目录](#目录)
  - [要求清单](#要求清单)
  - [完成思路](#完成思路)
  - [遇到的问题](#遇到的问题)

## 要求清单
- 不得使用任何第三方框架或库，如 jQuery、React、Vue；
- 静态部分直接编写 html，动态部分使用 `createElement` 创建 `DOM` 结构，不使用字符串模板替换、拼接的方式；
- 键盘点击enter时将条目添加至列表；
- 点击左边的checkbox图标切换todo状态；
- 点击右边的删除图标，删除todo条目；
- 在 `README.md` 中记录作业完成的思路和遇到的问题；

## 完成思路
- 在 `html` 文件中写好静态部分，调整CSS文件；
- `keydown` 绑定监听函数，完成输入任务的 `DOM` 节点创建；
- 为“完成”和“删除”按钮增加事件监听函数；

## 遇到的问题
**1. window.localStorage 不能直接存储对象**
- 通过 `JSON.stringify` 转化为字符串再存储，读取的时候用 `JSON.parse` 转化为 `Array`即可。

**2. 用 `e.keyCode === 13` 判断回车字符，但是被提示API已被弃用**
  - 查询 `MDN` 文档改用 `e.key === 'Enter'` 来判断。

**3. 输入空格时也会创建任务项目**
  - 创建 `DOM` 对象前先删除掉文本的前后空格，再判断文本字符串的长度，为0则不创建。

**4. 页面刷新后任务的完成状态丢失，仍然被标记成未完成**
  - 在LocalData中添加 `finish` 字段，类型为 `boolean`，用来标记是否完成，根据此状态渲染不同的CSS。
