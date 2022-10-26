import React, { useState } from 'react';
import { Todo } from './Utils/props'
import Header from './Components/Header/Header'
import InputBar from './Components/InputBar/InputBar';
import TodoList from './Components/TodoList/TodoList';
import { createTodos } from './Utils/utils'
import './Styles/index.css';

export default function App () {
  const [todoList, setTodoList] = useState<Todo[]>(createTodos());

  const todosUpdate = (e: Todo) => {
    setTodoList([...todoList, e]);
  }

  return (
    <>
      <Header/>
      <InputBar todos={todoList} todosUpdate={todosUpdate}/>
      <TodoList todos={todoList} todosUpdate={todosUpdate}/>
    </>
  )
}
