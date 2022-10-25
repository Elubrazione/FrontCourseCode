import React from 'react';
import { Todo } from '../../Types/Class'
import TodoItem from '../TodoItem/TodoItem';

export default function TodoList () {
    if (window.localStorage.getItem('todoList') === null) {
        const arrayTemp: Todo[] = [];
        window.localStorage.setItem('todoList', JSON.stringify(arrayTemp));
    }
    const todoList = JSON.parse(window.localStorage.getItem('todoList') as string) as Array<Todo>;
    return (
        <section>
            {todoList.map(item =>
                <TodoItem
                    key = {item.id}
                    mtime = {item.mtime}
                    content = {item.content}
                    finished = {item.finished}/>)}
        </section>
    )
}
