import React, { useState } from 'react';
import { Todo } from './Utils/props'
import Header from './Components/Header/Header'
import InputBar from './Components/InputBar/InputBar';
import TodoList from './Components/TodoList/TodoList';
import { createTodos, sortTodos } from './Utils/tools'
import './Styles/index.css';

export default function App () {
  const [todoList, setTodoList] = useState<Todo[]>(createTodos());
  todoList.sort(sortTodos);

  // 传入一个Todo变量，在这里更新TodoList。但是要怎么区分删除、添加、修改。
  // 传入修改后的List，问题在于TodoItem里获取不到List完整信息。
  // 其实可以传TodoList给TodoItem，但是不够优雅
  // 妥协了，不优雅就不优雅吧
  const todosUpdate = (e: Todo[]) => {
    setTodoList([...e]);
    todoList.sort(sortTodos);
  }

  return (
    <>
      <Header/>
      <InputBar todos={todoList} todosUpdate={todosUpdate}/>
      <TodoList todos={todoList} todosUpdate={todosUpdate}/>
    </>
  )
}
