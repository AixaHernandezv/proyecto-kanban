const inputTask = document.querySelector("#inputTask");
const btnAddTask = document.querySelector("#btnAddTask");
const todoList = document.querySelector("#todoList tbody");
let tableTask = [];


inputTask.focus();
btnAddTask.addEventListener("click", addTarea);

function addTarea() {
    if (inputTask.value === "") {
        alert("no hay nada que agegar");
        inputTask.focus();
    } else {
        tableTask.push(inputTask.value);
        listTasks();
        inputTask.value = "";
        inputTask.focus();
    }
}

function listTasks() {
    todoList.innerHTML = "";
    tableTask.forEach((task, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td id="taskId${index}" data-id="${index}">
                ${task}
            </td>
            <td> 
                <button id="btnDelete${index}" type="button" data-id="${index}">
                    X
                </button>
            </td>
        `;

        row.setAttribute("id", `row${index}`);
        todoList.appendChild(row);

        const btnDelete = document.querySelector(`#btnDelete${index}`);
        btnDelete.addEventListener("click", deleteTask);
        const taskSelected = document.querySelector(`#taskId${index}`);
        taskSelected.addEventListener("click", selectTask);
    });
    console.log(tableTask);
}

function deleteTask(e) {
    const index = e.target.getAttribute("data-id");
    tableTask.splice(index, 1);
    const rowToDelete = document.querySelector(`#row${index}`);
    todoList.removeChild(rowToDelete);
}

function selectTask(e) {
    deselectAllTodo();
    const index = e.target.getAttribute("data-id");
    const rowSelected = document.querySelector(`#row${index}`);
    rowSelected.classList.add('selected-row');
}

function deselectAllTodo() {
    tableTask.forEach((task,i) => {
        const row = document.querySelector(`#row${i}`);
        row.classList.remove('selected-row');
    });
}