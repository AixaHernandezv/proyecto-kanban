const inputTask = document.querySelector("#inputTask");
const btnAddTask = document.querySelector("#btnAddTask");
const todoList = document.querySelector("#todoList tbody");
let tableTask = [];

cargarEventListeners();

function cargarEventListeners() {
    btnAddTask.addEventListener("click", addTarea);
}

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
    tableTask.forEach((task) => {
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${task}</td>
        <td>  <button type="button" id="btnAddTask">x</button> </td>
        `;

        todoList.appendChild(row);
    });
}
