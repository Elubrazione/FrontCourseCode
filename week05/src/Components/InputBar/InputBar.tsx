import { Todo } from '../../Types/Class'
import React, { useState } from 'react';
import './InputBar.css'

const dayjs = require('dayjs');
const uuid = require('uuid');

export default function TodoList () {

    const [todoList, setTodoList] = useState([]);

    function keydownHandler (e: any) {
        if (e.key === 'Enter'){
            // console.log(e.key, e.target.value)
            const todoItem = new Todo({
                id: uuid.v4(),
                content: e.target.value,
                finished: false,
                ctime: dayjs(),
                mtime: dayjs(),
            });
            const tempList = [...todoList, todoItem];
            window.localStorage.setItem('todoList', JSON.stringify(tempList));
            setTodoList(tempList);
            e.target.value = '';
        }
    }
    return (
        <input id='input' type='text' className='input' placeholder='What needs to be done?' onKeyDown={
            e => keydownHandler(e)
        }/>
    );
}