import { Todo } from './props'
const dayjs = require('dayjs')

export function createTodos () {
    let todos: Todo[] = [];
    if (window.localStorage.getItem('todoList') === null) {
        const tempArray: Todo[] = [];
        window.localStorage.setItem('todoList', JSON.stringify(tempArray));
    }
    todos = JSON.parse(window.localStorage.getItem('todoList') as string);
    return todos;
}

export function sortTodos (e1: Todo, e2: Todo) {
    const prev = Number(e1.finished);
    const next = Number(e2.finished);

    if (prev === next) {
        return dayjs(e2.mtime) - dayjs(e1.mtime);
    } else {
        return prev - next;
    }
}

export function isBlankOrRepeat (todos: Todo[], ele: HTMLInputElement) {
    ele.value = ele.value.replace(/(^\s*)|(\s*$)/g, '');
    if (ele.value.length === 0) {
        return '请输入一个内容不为空的任务!';
    } else {
        const judge = todos.find(e => e?.content === ele.value);
        if (judge !== undefined) {
            return '任务重复! 您已添加过此任务!';
        } else {
            return true;
        }
    }
}