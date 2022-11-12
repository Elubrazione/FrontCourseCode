## 完成思路
#### 前端
##### 1. 完成UI部分（components和router）
##### 2. 添加Redux做全局状态管理
- state：一个 `stuInfos` 的列表，存储着所有的学生信息；
- actions：
  （1）`addStu` => 添加学生；
  （2）`toggleStu` => 修改学生信息；
  （3) `deleteStu` => 删除学生；
  （4）`clearStus` => 清空学生列表。
- views：
  （1）`Main/DataSelect` 的**添加**按钮 => addStu；
  （2）`Main/stuInfos` 表单 => 根据列表**展示**数据；
  （3）`Main/stuInfos/stu` 单条数据的操作 => toggleStu，deleteStu

##### 3. 重新配置webpack

#### 后端

<!-- import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount
} from './counterSlice'
import styles from './Counter.module.css'

export function Counter() {
  const count = useSelector(selectCount)
  const dispatch = useDispatch()
  const [incrementAmount, setIncrementAmount] = useState('2')

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      {/* 这里省略了额外的 render 代码 */}
    </div>
  )
} -->

在编辑表单的时候把数据存到表单组件中，当用户提交表单的时候再 dispatch action 来更新 store。

