import { Todo } from './props'

export function createTodos() {
    let todos: Todo[] = [];
    if (window.localStorage.getItem('todoList') === null) {
        const tempArray: Todo[] = [];
        window.localStorage.setItem('todoList', JSON.stringify(tempArray));
    }
    todos = JSON.parse(window.localStorage.getItem('todoList') as string);
    return todos;
}