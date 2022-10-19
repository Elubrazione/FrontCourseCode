import { Todo } from './type';
const dayjs = require('dayjs');
const uuid = require('uuid');
const input = document.getElementById('input') as HTMLInputElement;
const container = document.getElementById('container') as HTMLElement;

let todoListArray: Todo [] = [];


function isBlankOrRepeat (e: HTMLInputElement) {
    e.value = e.value.replace(/(^\s*)|(\s*$)/g, '');
    if (e.value.length === 0) {
        Remind('请输入一个内容不为空的任务!');
        return false;
    } else {
        let judge = todoListArray.find(ele => ele?.content === e.value);
        if (judge != undefined) {
            Remind('任务重复! 您已添加过此任务!');
            return false;
        } else {
            return true;
        }
    }
}


function keydownHandler (e: any) {
    if (e.key === 'Enter') {
        // No repeatitious and blank
        if (isBlankOrRepeat(input)) {
            let todoItem = new Todo({
                id: uuid.v4(),
                content: input.value,
                finished: false,
                ctime: dayjs().format('MM月DD日 HH:mm:ss').toString(),
                mtime: dayjs().format('MM月DD日 HH:mm:ss').toString(),
            })
            todoListArray.push(todoItem);
            window.localStorage.setItem('todoListArray', JSON.stringify(todoListArray));
            input.value = '';
            createTodoDom(todoItem);
        }

        return;
    }
}


function LoadTaskDom () {
    for (let i = 0; i < todoListArray.length; i++) {
        createTodoDom(todoListArray[i]);
    }
}


function createTodoDom (e: Todo) {
    let todoItemDom = document.createElement('div');
    if (e.finished === false) {
        todoItemDom.className = 'todo-item';
    } else {
        todoItemDom.className = 'todo-item todo-finished';
    }

    let checkboxIcon = document.createElement('i');
    checkboxIcon.className = 'iconfont icon-checkbox';
    checkboxIcon.addEventListener('click', () => changeHandler(e));

    let text = document.createElement('input');
    text.className = 'todo-title';
    text.value = e.content;
    text.addEventListener('keydown', event => {

        if (event.key === 'Enter') {
            let currentInput = e.ele.childNodes[1] as HTMLInputElement;
            if (isBlankOrRepeat(currentInput)) {
                // change time display
                let tempTime = dayjs().format('MM月DD日 HH:mm:ss').toString();
                (e.ele.childNodes[2] as HTMLElement).innerText = tempTime;

                // get index in array, modified array and reset storage
                let modifiedIndex = todoListArray.indexOf(e);
                todoListArray[modifiedIndex].mtime = tempTime;
                todoListArray[modifiedIndex].content = currentInput.value;
                window.localStorage.setItem('todoListArray', JSON.stringify(todoListArray));
            }
        }
    });

    let time = document.createElement('div');
    time.className = 'modified-time';
    time.innerText = e.mtime;

    let deleteIcon = document.createElement('i');
    deleteIcon.className = 'iconfont icon-delete';
    deleteIcon.addEventListener('click', () => deleteHandler(e));

    todoItemDom.appendChild(checkboxIcon);
    todoItemDom.appendChild(text);
    todoItemDom.appendChild(time);
    todoItemDom.appendChild(deleteIcon);

    e.ele = todoItemDom;
    container.appendChild(todoItemDom);
}


function deleteHandler (e: Todo) {
    let deleteIndex = todoListArray.indexOf(e);
    todoListArray.splice(deleteIndex, 1);
    window.localStorage.setItem('todoListArray', JSON.stringify(todoListArray));
    e.ele.remove();
}


function changeHandler (e: Todo) {
    let finishIndex = todoListArray.indexOf(e);
    if (todoListArray[finishIndex].finished === false) {
        e.ele.className = 'todo-item todo-finished';
        todoListArray[finishIndex].finished = true;
    } else {
        e.ele.className = 'todo-item';
        todoListArray[finishIndex].finished = false;
    }
    window.localStorage.setItem('todoListArray', JSON.stringify(todoListArray));
}


function windowRefresh (): any {
    if (window.localStorage.getItem('todoListArray') === null) {
        let arrayTemp = new Array();
        window.localStorage.setItem('todoListArray', JSON.stringify(arrayTemp));
    }
    todoListArray = JSON.parse(window.localStorage.getItem('todoListArray') as string);

    LoadTaskDom();

    input.addEventListener('keydown', keydownHandler);
}


function Remind (e: string) {
    let message = document.createElement('div')
    message.id = 'msg';
    message.className = 'message'
    message.style.top = 140 + 'px';

    document.getElementById('header').appendChild(message);

    let msgContent = document.createElement('p');
    msgContent.className = 'msgtext';
    msgContent.innerText = e;

    message.appendChild(msgContent);

    window.setTimeout(() => {
        document.getElementById('msg').remove();
    }, 1000);
}

window.onload = windowRefresh();