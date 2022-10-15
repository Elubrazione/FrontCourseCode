window.onload = function () {

    function keydownHandler (e) {
        // console.log('begin');
        // console.log(e.key);
        if (e.key === 'Enter') {

            // 删除首尾巴的空格
            input.value = input.value.replace(/(^\s*)|(\s*$)/g,"");
            // console.log('inputValue:    ', input.value);

            if (input.value.length === 0) {
                // console.log('Input is Null.');
                alert('Input could not be NULL!')
                return;
            } else {
                let judge = todoListArray.find(ele => ele?.detail === input.value);
                console.log(judge);
                if (judge != undefined) {
                    alert('Repetitious task! You have already added this task!');
                    return;
                } else {
                    let todoItem = {
                        detail: input.value,
                        finish: false,
                    }
                    todoListArray.push(todoItem);
                    window.localStorage.setItem('todoListArray', JSON.stringify(todoListArray));
                    input.value = '';

                    createTodoDom(todoItem);
                }
            }
        }
    }


    function LoadTaskDom () {
        console.log(todoListArray);
        for (let i = 0; i < todoListArray.length; i++) {
            createTodoDom(todoListArray[i]);
        }
        return;
    }


    function createTodoDom (e) {

        let todoItemDom = document.createElement('div');
        if (e.finish === false) {
            todoItemDom.className = 'todo-item';
        } else {
            todoItemDom.className = 'todo-item todo-finished';
        }

        let checkboxIcon = document.createElement('i');
        checkboxIcon.className = 'iconfont icon-checkbox';
        checkboxIcon.addEventListener('click', changeHandler);

        let text = document.createElement('span');
        text.className = 'todo-title';
        text.innerText = e.detail;

        let deleteIcon = document.createElement('i');
        deleteIcon.className = 'iconfont icon-delete';
        deleteIcon.addEventListener('click', deleteHandler);

        todoItemDom.appendChild(checkboxIcon);
        todoItemDom.appendChild(text);
        todoItemDom.appendChild(deleteIcon);

        container.appendChild(todoItemDom);
    }


    function deleteHandler (e) {
        let parentEle = e.target.parentElement;
        let previousEle = e.target.previousElementSibling;
        let deleteNode = todoListArray.find(ele => ele?.detail === previousEle.innerText);
        let deleteIndex = todoListArray.indexOf(deleteNode);
        todoListArray.splice(deleteIndex, 1);

        window.localStorage.setItem('todoListArray', JSON.stringify(todoListArray));
        parentEle.remove();
    }


    function changeHandler (e) {
        let parentEle = e.target.parentElement;
        let nextEle = e.target.nextElementSibling;
        // console.log(parentEle);
        // console.log(nextEle);

        let finishNode = todoListArray.find(ele => ele?.detail === nextEle.innerText);
        let finishIndex = todoListArray.indexOf(finishNode);

        if (todoListArray[finishIndex].finish === false) {
            parentEle.className = 'todo-item todo-finished';
            todoListArray[finishIndex].finish = true;
        } else {
            parentEle.className = 'todo-item';
            todoListArray[finishIndex].finish = false;
        }

        window.localStorage.setItem('todoListArray', JSON.stringify(todoListArray));
        return;
    }

    const input = document.getElementById('input')
    const container = document.getElementById('container');

    if (window.localStorage.getItem('todoListArray') === null) {
        let arrayTemp = new Array();
        window.localStorage.setItem('todoListArray', JSON.stringify(arrayTemp));
    }
    todoListArray = JSON.parse(window.localStorage.getItem('todoListArray'));
    // console.log('todoListArray: ', todoListArray);
    LoadTaskDom();

    input.addEventListener('keydown', keydownHandler);

    var checkIcon = document.getElementsByClassName('iconfont icon-checkbox');
    var deleIcon = document.getElementsByClassName('iconfont icon-delete');
    for(let i = 0; i < checkIcon.length; i++) {
        checkIcon[i].addEventListener('click', changeHandler);
        deleIcon[i].addEventListener('click', deleteHandler);
    }
}