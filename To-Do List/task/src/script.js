let taskArray = JSON.parse(localStorage.getItem("tasks")) || [];
for (const task of taskArray) {
    addTaskToView(task);
}

document.getElementById("add-task-button")
    .addEventListener("click", function () {
        let inputTask = document.getElementById("input-task");
        if (inputTask.value === "") {
            console.log("Empty input");
            return;
        }

        let task = {text: inputTask.value, done: false};
        addTaskToView(task);
        taskArray.push(task);
        saveTasks(taskArray)

        inputTask.value = "";
    });

function addTaskToView(task) {
    console.log("Task: " + taskToString(task));

    let taskListElement = document.getElementById("task-list");
    let taskIndex = taskListElement.childElementCount;

    let inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.checked = task.done;
    inputElement.addEventListener("click", function () {
        task.done = !task.done;
        saveTasks(taskArray);
        console.log("Task: " + taskToString(task))
    });

    let spanElement = document.createElement("span");
    spanElement.className = "task";
    spanElement.innerHTML = task.text;

    let buttonElement = document.createElement("button");
    buttonElement.className = "delete-btn";
    buttonElement.innerHTML = "del";
    buttonElement.addEventListener("click", function () {
        console.log("Remove task: " + taskToString(task));
        taskListElement.removeChild(listElement);
        taskArray.splice(taskIndex, 1);
        saveTasks(taskArray);
    });

    let listElement = document.createElement("li");
    listElement.append(inputElement, spanElement, " ", buttonElement);

    taskListElement.append(listElement);
}

function taskToString(task) {
    return task.text + (task.done ? " (done)" : " (open)");
}

function saveTasks(taskArray) {
    localStorage.setItem("tasks", JSON.stringify(taskArray));
}
