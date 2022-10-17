import { ITodo, Todo } from './type';
const dayjs = require('dayjs');
const uuid = require('uuid');
const input = document.getElementById('input') as HTMLInputElement;
const container = document.getElementById('container') as HTMLInputElement;

let todoListArray: ITodo [] = [];

function SetLocalStorage () {
    window.localStorage.setItem('todoListArray', JSON.stringify(todoListArray));
}

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
                SetLocalStorage();
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


function createTodoDom (e: ITodo) {

    let todoItemDom = document.createElement('div');
    if (e.finished === false) {
        todoItemDom.className = 'todo-item';
    } else {
        todoItemDom.className = 'todo-item todo-finished';
    }

    let checkboxIcon = document.createElement('i');
    checkboxIcon.className = 'iconfont icon-checkbox';
    checkboxIcon.addEventListener('click', changeHandler);

    let text = document.createElement('span');
    text.className = 'todo-title';
    text.innerText = e.content;

    let deleteIcon = document.createElement('i');
    deleteIcon.className = 'iconfont icon-delete';
    deleteIcon.addEventListener('click', deleteHandler);

    todoItemDom.appendChild(checkboxIcon);
    todoItemDom.appendChild(text);
    todoItemDom.appendChild(deleteIcon);

    container.appendChild(todoItemDom);
}


function deleteHandler (e: any) {
    let parentEle = e.target.parentElement;
    let previousEle = e.target.previousElementSibling;
    let deleteNode = todoListArray.find(ele => ele?.content === previousEle.innerText) as ITodo;

    let deleteIndex = todoListArray.indexOf(deleteNode);
    todoListArray.splice(deleteIndex, 1);
    SetLocalStorage();
    parentEle.remove();
}


function changeHandler (e: any) {
    let parentEle = e.target.parentElement;
    let nextEle = e.target.nextElementSibling;

    let finishNode = todoListArray.find(ele => ele?.content === nextEle.innerText) as ITodo;

    let finishIndex = todoListArray.indexOf(finishNode);

    if (todoListArray[finishIndex].finished === false) {
        parentEle.className = 'todo-item todo-finished';
        todoListArray[finishIndex].finished = true;
    } else {
        parentEle.className = 'todo-item';
        todoListArray[finishIndex].finished = false;
    }
    SetLocalStorage();
}


function updataTask (): any {
    if (window.localStorage.getItem('todoListArray') === null) {
        let arrayTemp = new Array();
        window.localStorage.setItem('todoListArray', JSON.stringify(arrayTemp));
    }

    todoListArray = JSON.parse(window.localStorage.getItem('todoListArray') as string);

    LoadTaskDom();

    input.addEventListener('keydown', keydownHandler);

    let checkIcon = document.getElementsByClassName('iconfont icon-checkbox');
    let deleIcon = document.getElementsByClassName('iconfont icon-delete');
    for(let i = 0; i < checkIcon.length; i++) {
        checkIcon[i].addEventListener('click', changeHandler);
        deleIcon[i].addEventListener('click', deleteHandler);
    }
}

window.onload = updataTask();