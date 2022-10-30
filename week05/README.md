# Elubrazione's Todo List
升级版，使用 `Typescript` 进行开发，可对任务进行修改并显示最后修改时间
## 目录
- [Elubrazione's Todo List](#elubraziones-todo-list)
  - [目录](#目录)
  - [要求清单](#要求清单)
  - [完成思路](#完成思路)
  - [遇到的问题](#遇到的问题)

## 要求清单
-

## 完成思路
- 配置环境：包括 `React`, `Eslint`, `Webpack`, `tsconfig`等；
- 完成 `Header`、`Input` 组件以及`keydown`事件；
- 完成 `TodoList` 和 `TodoItem` 组件，绑定 `onChange`、`delete`、`finish` 事件
- 完成对列表的排序
- 优化：`AlertBar` 组件等

## 遇到的问题
**1. 一直提示：Invalid Hook Call Warning**
  - 不能在循环、条件语句里使用 `Hook`，而且只能在函数组件里使用。所以将所有组件打包成一个 `App` 组件，再在 `index.tsx` 里 `render` 到DOM节点里。

**2. `useState` 异步更新，但localStorage依赖于useState更新的内容**
  - 先临时将值更新到一个 `Array` 变量，localStorage这个变量。

**3. TodoList的content不按回车也会修改值，只不过不缓存到本地，下次打开会消失（这应该是上周的遗留bug）想修改成不按回车无法修改，会复原。**
  - 用 `onChange` 属性！（上周的我好奇怪）现在不按回车，实时更新。

**4. 要如何实现在TodoItem里修改TodoList，传了单个interface的值再传整个List感觉很不优雅**