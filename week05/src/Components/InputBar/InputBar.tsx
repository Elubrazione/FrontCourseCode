import { Todo } from '../../Utils/Props';
import React from 'react';
import './InputBar.css';
import { isBlankOrRepeat } from '../../Utils/tools';

const dayjs = require('dayjs');
const uuid = require('uuid');

interface IProps {
    todos: Todo[],
    todosUpdate: Function,
    alertUpdate: Function,
}

export default function TodoList (props: IProps) {

    const keydownHandler = (e: any) => {
        if (e.key === 'Enter'){
            const ret = isBlankOrRepeat(props.todos, e.target);
            if (ret === true) {
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
                props.alertUpdate(ret as string);
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