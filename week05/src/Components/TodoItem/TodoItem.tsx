import React from 'react';
import './TodoItem.css'
import '../../Styles/iconfont.css';
import { Todo } from '../../Utils/props'
const dayjs = require('dayjs');

interface IProps {
    todo: Todo,
}

export default function TodoItem (props: IProps) {
    const changeHandler = (e: any) => {
        console.log(e);
    }
    const finishHandler = (e: any) => {
        console.log(e);
    }
    const deleteHandler = (e: any) => {
        console.log(e);
    }
    // console.log(props)

    return (
        <div className={props.todo.finished?'todo-item todo-finished':'todo-item'}>
            <i className='iconfont icon-checkbox'
                onClick={e => finishHandler(e.target)}>
            </i>
            <input className='todo-title' type='text'
                    onKeyDown={e => changeHandler(e)}
                    value={props.todo.content}>
            </input>
            <div className='modified-time'>
                {dayjs(props.todo.mtime).format('MM月DD日 HH:mm:ss')}
            </div>
            <i className='iconfont icon-delete'
                onClick={e => deleteHandler(e.target)}>
            </i>
        </div>
    )
}