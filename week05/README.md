# Elubrazione's Todo List
升级版，使用 `React` 进行开发，任务列表未完成的在前且按时间倒序排序。
## 目录
- [Elubrazione's Todo List](#elubraziones-todo-list)
  - [目录](#目录)
  - [要求清单](#要求清单)
  - [完成思路](#完成思路)
  - [遇到的问题](#遇到的问题)
  - [优化事项](#优化事项)
  - [相关笔记](#相关笔记)

## 要求清单
- 使用 `React` 框架，并使用 `function component` 的开发模式
- 使用 `webpack` 进行项目打包和构建，并配置相应的 `script`
- 使用 `TypeScript` 进行开发，并使用合适的npm库
- 清单列表中未完成的在前，完成的在后；状态一样则按修改时间倒序排序
- 每个清单条目必须是一个单独的组件

## 完成思路
- 配置环境：包括 `React`, `Eslint`, `Webpack`, `tsconfig`等；
- 完成 `Header`、`Input` 组件以及`keydown`事件；
- 完成 `TodoList` 和 `TodoItem` 组件，绑定 `onChange`、`delete`、`finish` 事件；
- 完成对清单列表的排序，未完成的在前且按时间倒序排序；
- 代码优化事项。

## 遇到的问题
**1. 一直提示：Invalid Hook Call Warning**
  - 不能在循环、条件语句里使用 `Hook`，而且只能在函数组件里使用。所以将所有组件打包成一个 `App` 组件，再在 `index.tsx` 里渲染到DOM节点。

**2. `useState` 异步更新，但下一句中的localStorage依赖于useState更新的内容**
  - 先临时将值更新到一个 `Array` 变量，localStorage这个变量。

**3. 更新List数据后，打印出来的List已经更新，但是页面不刷新**
  - 和2的问题本质是一样的。在列表更新的时候，使用 `[...list]` 的格式进行拷贝和更新。

**4. 如何在子组件里修改父组件中的列表数据**
  - 在父组件里写一个 `update` 函数来更新state，将该函数作为 `props` 参数传给子组件，在子组件中通过 `props.updateList` 来更改父组件的List。

**5. `AlertBar` 实现问题：（1）如何挂载，哪里挂载；（2）挂载后如何移除**
  - 直接挂载在 `App` 组件当中，设置一个 `state` 布尔变量，在 `AlerBar` 组件里根据传入的state值来决定返回弹窗还是NULL；
  - 通过一个 `alertUpdate` 函数，在弹窗组件内部调用，设置1s的定时器后将 `status` 的值改为 `false`，则弹窗组件就会自动更新返回NULL，从而移除消失。

## 优化事项
- AlertBar传值优化，将传入的 `status` 和 `content`（提示语内容）合并成一个`INTERFACE` 结构。解决了每次要渲染两次的问题。
- 将输入判重和判空功能抽象成一个函数，避免了 `InputBar` 和 `TodoItem` 中的代码重复。
- 由于不存在todos列表和上一次的值相同的情况，因此不用添加相关Hooks来判断渲染（如果是我考虑不周麻烦联系我orz）

## 相关笔记
Hooks使用和项目创建：*https://elubrazione.github.io/2022/10/22/React/*