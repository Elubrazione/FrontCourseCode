import React from 'react';
import './TodoItem.css'
import '../../Styles/iconfont.css'

import { todoProps } from '../../Types/Props';

export default function TodoItem (props: todoProps) {
    function changeHandler (e: any) {

    }
    function finishHandler (e: any) {

    }
    function deleteHandler (e: any) {

    }
    console.log(props)
    return (
        <div className='todo-item'>
            <i className='iconfont icon-checkbox'
                onClick={e => finishHandler(e.target)}>
            </i>
            <input className='todo-title' type='text'
                    onClick={e => changeHandler(e.target)}
                    value={props.content}>
            </input>
            <div className='modified-time'>
                {props.mtime}
            </div>
            <i className='iconfont icon-delete'
                onClick={e => deleteHandler(e.target)}>
            </i>
        </div>
    )
}