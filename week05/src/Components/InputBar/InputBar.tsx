import { Todo } from '../../Utils/Props';
import React from 'react';
import './InputBar.css';

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
            e.target.value = e.target.value.replace(/(^\s*)|(\s*$)/g, '');
            if (e.target.value.length === 0) {
                props.alertUpdate('请输入一个内容不为空的任务!');
            } else {
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
                    props.alertUpdate('任务重复! 您已添加过此任务!');
                }
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