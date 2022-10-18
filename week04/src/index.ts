import { Todo } from './type';
const dayjs = require('dayjs');
const uuid = require('uuid');
const input = document.getElementById('input') as HTMLInputElement;
const container = document.getElementById('container');

let todoListArray: Todo [] = [];

function keydownHandler (e: any) {
    if (e.key === 'Enter') {
        input.value = input.value.replace(/(^\s*)|(\s*$)/g, "");
        if (input.value.length === 0) {
            alert('Input could not be NULL!')
            return;
        } else {
            let judge = todoListArray.find(ele => ele?.content === input.value);
            if (judge != undefined) {
                alert('Repetitious task! You have already added this task!');
                return;
            } else {
                let todoItem = new Todo({
                    id: uuid.v4(),
                    content: input.value,
                    finished: false,
                    ctime: dayjs().format('MM-DD HH:mm:ss'),
                    mtime: dayjs().format('MM-DD HH:mm:ss'),
                })
                // console.log('ietm:  ', todoItem);
                todoListArray.push(todoItem);
                window.localStorage.setItem('todoListArray', JSON.stringify(todoListArray));
                input.value = '';
                createTodoDom(todoItem);
            }
        }
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
            // change time display
            let tempTime = dayjs().format('MM-DD HH:mm:ss');
            (e.ele.childNodes[2] as HTMLElement).innerText = tempTime;

            // get index in array, modified array and reset storage
            let modifiedIndex = todoListArray.indexOf(e);
            todoListArray[modifiedIndex].mtime = tempTime;
            todoListArray[modifiedIndex].content = (e.ele.childNodes[1] as HTMLInputElement).value;
            window.localStorage.setItem('todoListArray', JSON.stringify(todoListArray));
        }
    });

    let time = document.createElement('div');
    time.className = 'modified-time';
    time.innerText = e.mtime.toString();

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


function timeFormat (e: number) {
    
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

window.onload = windowRefresh();