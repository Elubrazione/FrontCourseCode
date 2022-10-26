import { Todo } from '../../Utils/Props';
import React from 'react';
import './InputBar.css';

const dayjs = require('dayjs');
const uuid = require('uuid');

interface IProps {
    todos: Todo[],
    todosUpdate: Function,
}

export default function TodoList (props: IProps) {

    const keydownHandler = (e: any) => {
        if (e.key === 'Enter'){
            // console.log(e.key, e.target.value)
            const todoItem = new Todo({
                id: uuid.v4(),
                content: e.target.value,
                finished: false,
                ctime: dayjs(),
                mtime: dayjs(),
            });
            const tempList = [...props.todos, todoItem];
            window.localStorage.setItem('todoList', JSON.stringify(tempList));

            props.todosUpdate(todoItem);
            e.target.value = '';
        }
    }
    return (
        <input id='input' type='text' className='input'
                placeholder='What needs to be done?'
                onKeyDown={e => keydownHandler(e)}
        />
    );
}