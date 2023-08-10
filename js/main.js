const inputTask = document.querySelector("#inputTask");
const btnAddTask = document.querySelector("#btnAddTask");
const todoList = document.querySelector("#todoList tbody");
let tableTask = [];
inputTask.focus();
btnAddTask.addEventListener("click", addTarea);



function addTarea() {
    
    if (inputTask.value === '') {
        alert('no hay nada que agegar');
        inputTask.focus();
    }
    else {
       
        tableTask.push(inputTask.value);
        listTasks();
        inputTask.value = '';
        inputTask.focus();
    }
}

function listTasks() {
    todoList.innerHTML = '';
    tableTask.forEach((task, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${task}</td>
        <td>  <button id="btnDelete${index}" type="button" data-id="${index}">x</button> </td>
        `;
        row.setAttribute('id',`row${index}`);
        todoList.appendChild(row);
        const btnDelete = document.querySelector(`#btnDelete${index}`);
       btnDelete.addEventListener('click', deleteTask)
    });
}

function deleteTask(e) {

   const index = e.target.getAttribute("data-id");
    tableTask.splice(index,1);
    const rowToDelete = document.querySelector(`#row${index}`);
    todoList.removeChild(rowToDelete);
    




    
}