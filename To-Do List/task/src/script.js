document.getElementById("add-task-button")
    .addEventListener("click", function () {
        let inputTask = document.getElementById("input-task");
        if (inputTask.value === "") {
            console.log("empty input");
            return;
        }
        console.log("Task: " + inputTask);
        addTask(inputTask.value);
        inputTask.value = "";
    });

function addTask(task) {
    let inputElement = document.createElement("input");
    inputElement.type = "checkbox";

    let spanElement = document.createElement("span");
    spanElement.className = "task";
    spanElement.innerHTML = task;

    let buttonElement = document.createElement("button");
    buttonElement.className = "delete-btn";
    buttonElement.innerHTML = "del";

    let listElement = document.createElement("li");
    listElement.append(inputElement, spanElement, " ", buttonElement);

    document.getElementById("task-list")
        .append(listElement);

    buttonElement.addEventListener("click", function () {
        document.getElementById("task-list")
            .removeChild(listElement);
    });
}
