import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/Header/Header'
import TodoList from './Components/TodoList/TodoList';
import Input from './Components/InputBar/InputBar';
import './Styles/index.css';

const app = document.getElementById('app') as HTMLElement;
ReactDOM.createRoot(app).render(
  <>
    <Header/>
    <Input/>
    <TodoList />
  </>
)