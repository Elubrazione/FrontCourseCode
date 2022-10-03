# Elubrazione's Dribbble
- 一个简易版的 `Dribbble` 页面，无依赖外部框架或样式库，使用媒体查询和Grid、Flex实现响应式布局。

## 目录
- [Elubrazione's Dribbble](#elubraziones-dribbble)
  - [目录](#目录)
  - [要求清单](#要求清单)
  - [效果总览](#效果总览)
    - [task-375w](#task-375w)
    - [task-menu-375w](#task-menu-375w)
    - [task-768w](#task-768w)
    - [task-920w](#task-920w)
    - [task-1366w](#task-1366w)
    - [task-1920w](#task-1920w)
    - [task-hover](#task-hover)
  - [完成思路](#完成思路)
  - [问题及解决方式](#问题及解决方式)

## 要求清单
- `task-375w` ：页面宽度 `375px` 时，顶部导航菜单折叠了起来，并且固定在顶部，内容区域采用单列布局。
- `task-menu-375w` ：折叠菜单展开时，出现一个遮罩遮住整个页面
- `task-768w` ：页面宽度 `768px` 时，导航菜单依旧是折叠的，下面的banner和内容区域变成了两列布局。
- `task-920w` ：页面宽度 `920px` 时，导航菜单平铺，并且不再固定在顶部，下方内容依然是两列布局
- `task-1366w` ：页面宽度 `1366px` 时，banner和下方列表占据全部的水平空间，两侧留有固定的内边距。
- `task-1920w` ：页面宽度 `1920px` 时，banner区域已经变成固定宽度，列表区域依然占据全部水平空间，两侧留有固定的内边距。
- `task-hover`：平铺的导航菜单鼠标悬停时有改变颜色。

## 效果总览
### task-375w
<image src="./mdsrc/375w.png" width="32%">
<image src="./mdsrc/375ww.png" width="32%">
<image src="./mdsrc/375www.png" width="32%">

### task-menu-375w
<image src="./mdsrc/menu-375w.png" width="48%">
<image src="./mdsrc/menu-375ww.png" width="48%">

### task-768w
<image src="./mdsrc/768w.png" width="48%">
<image src="./mdsrc/768ww.png" width="48%">

### task-920w
<image src="./mdsrc/920w.png" width="48%">
<image src="./mdsrc/920ww.png" width="48%">

### task-1366w
<image src="./mdsrc/1366w.png" width="48%">
<image src="./mdsrc/1366ww.png" width="48%">

### task-1920w
<image src="./mdsrc/1920w.png" width="96%">
<center>页宽为1920px时的页首</center>

<image src="./mdsrc/1920ww.png" width="96%">
<center>页宽为1920px时的页尾</center>

### task-hover
菜单鼠标悬停时改变颜色，在页宽小于1366w时文字渲染为 `Learn`，大于时则为 `Learn Design`

<image src="./mdsrc/hoverw.png" width="48%">
<image src="./mdsrc/hoverww.png" width="48%">

## 完成思路

## 问题及解决方式