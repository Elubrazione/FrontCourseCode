import React, { useState } from 'react';
import { Todo, IAlert } from './Utils/props'
import Header from './Components/Header/Header'
import InputBar from './Components/InputBar/InputBar';
import TodoList from './Components/TodoList/TodoList';
import AlertBar from './Components/AlertBar/AlertBar'
import { createTodos, sortTodos } from './Utils/tools'
import './Styles/index.css';

export default function App () {

  const [ todoList, setTodoList ] = useState<Todo[]>(createTodos());
  const [ alertValue, setAlertValue ] = useState<IAlert>({status: false});

  todoList.sort(sortTodos);

  const todosUpdate = (e: Todo[]) => {
    setTodoList([...e]);
    todoList.sort(sortTodos);
  }

  const alertUpdate = (e: string) => {
    if (e !== '') {
      setAlertValue({status: true, content: e});
    } else {
      setTimeout(() => {
        setAlertValue({status: false});
      }, 1000);
    }
  }

  return (
    <>
      <AlertBar alertValue={alertValue} alertUpdate={alertUpdate}/>
      <Header/>
      <InputBar todos={todoList} todosUpdate={todosUpdate} alertUpdate={alertUpdate}/>
      <TodoList todos={todoList} todosUpdate={todosUpdate} alertUpdate={alertUpdate}/>
    </>
  );
}
