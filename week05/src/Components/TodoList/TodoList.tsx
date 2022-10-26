import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import { Todo } from '../../Utils/props'

interface IProps {
  todos: Todo[],
  todosUpdate: Function
}

export default function TodoList (props: IProps) {
    return (
        <section>
            {props.todos.map(item =>
                <TodoItem
                    key={item.id}
                    todo={item}
                />)
            }
        </section>
    )
}
