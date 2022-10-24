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
- 

## 遇到的问题
**1. `useState` 异步更新，但localStorage依赖于useState更新的内容**
  - 先临时将值更新到一个 `Array` 变量，localStorage这个变量。