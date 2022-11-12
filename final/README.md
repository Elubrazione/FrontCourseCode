### 完成思路
##### 1. 使用Redux做全局状态管理
- state：一个 `stuInfos` 的列表，存储着所有的学生信息；
- actions：
  （1）addStu => 添加学生；
  （2）toggleStu => 修改学生信息；
  （3) deleteStu => 删除学生；
  （4）clearStus => 清空学生列表。
- views：
  （1）`Main/DataSelect` 的**添加**按钮 => addStu；
  （2）`Main/stuInfos` 表单 => 根据列表**展示**数据；
  （3）`Main/stuInfos/stu` 单条数据的操作 => toggleStu，deleteStu