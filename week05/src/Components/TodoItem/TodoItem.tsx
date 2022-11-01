import React from 'react';
import './TodoItem.css'
import '../../Styles/iconfont.css';
import { Todo } from '../../Utils/props'

const dayjs = require('dayjs');

interface IProps {
    todo: Todo,
    todosUpdate: Function,
    todos: Todo[],
    alertUpdate: Function
}

export default function TodoItem (props: IProps) {

    const changeHandler = (e: HTMLInputElement) => {
        e.value = e.value.replace(/(^\s*)|(\s*$)/g, '');
        if (e.value.length !== 0) {
            const judge = props.todos.find(ele => ele?.content === e.value);
            if (judge === undefined) {
                props.todo.mtime = dayjs();
                props.todo.content = e.value;
                const index = props.todos.indexOf(props.todo);
                props.todos[index] = props.todo;
                props.todosUpdate(props.todos);
                window.localStorage.setItem('todoList', JSON.stringify(props.todos));
            } else {
                props.alertUpdate('任务重复! 您已添加过此任务!');
            }
        }
    }

    const finishHandler = (e: any) => {
        props.todo.finished = !props.todo.finished;
        const index = props.todos.indexOf(props.todo);
        props.todos[index] = props.todo;
        props.todosUpdate(props.todos);
        window.localStorage.setItem('todoList', JSON.stringify(props.todos));
    }

    const deleteHandler = () => {
        const index = props.todos.indexOf(props.todo);
        props.todos.splice(index, 1);
        props.todosUpdate(props.todos);
        window.localStorage.setItem('todoList', JSON.stringify(props.todos));
    }


    return (
        <div className={props.todo.finished?'todo-item todo-finished':'todo-item'}>
            <i className='iconfont icon-checkbox'
                onClick={e => finishHandler(e.target)}>
            </i>
            <input className='todo-title' type='text'
                    onChange={e => changeHandler(e.target)}
                    defaultValue={props.todo.content}>
            </input>
            <div className='modified-time'>
                {dayjs(props.todo.mtime).format('MM月DD日 HH:mm:ss')}
            </div>
            <i className='iconfont icon-delete'
                onClick={e => deleteHandler()}>
            </i>
        </div>
    )
}