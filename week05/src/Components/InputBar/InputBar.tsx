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
            e.target.value = e.target.value.replace(/(^\s*)|(\s*$)/g, '');
            const judge = props.todos.find(ele => ele?.content === e.target.value);
            if (judge === undefined) {
                const todoItem = new Todo({
                    id: uuid.v4(),
                    content: e.target.value,
                    finished: false,
                    ctime: dayjs(),
                    mtime: dayjs(),
                });

                const tempList = [...props.todos, todoItem];
                window.localStorage.setItem('todoList', JSON.stringify(tempList));

                props.todosUpdate(tempList);
                e.target.value = '';
            } else {
                alert('重复！');
            }
        }
    }
    return (
        <input id='input' type='text' className='input'
                placeholder='What needs to be done?'
                onKeyDown={e => keydownHandler(e)}
        />
    );
}