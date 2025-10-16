let tasks =[];
let task_input = document.getElementById("task_input");
let add = document.getElementById("add");
let task_check = document.getElementById("task_check");
let task_list = document.getElementById("task_list");

const createTask = (title)  => {
    return {
        title: title,
        completed: false,
        subtasks: []
    };
}

const addTask = (task) => {
    const newtask = createTask(task);
    tasks.push(newtask);

    //親タスクのliの作成
    const listItem = document.createElement("li");
    listItem.textContent = task;

    //子タスクのulの作成
    const subtaskList = document.createElement("ul");
    listItem.appendChild(subtaskList);

    //子追加ボタン
    const addSubtaskButton = document.createElement("button");
    addSubtaskButton.innerHTML = "細分化";
    listItem.appendChild(addSubtaskButton);

    addSubtaskButton.addEventListener("click", () => {
        const subtaskInput = document.createElement("input");
        subtaskInput.type = "text";
        subtaskInput.placeholder = "子タスクを入力";
        
        subtaskInput.addEventListener("keypress", e =>{
            if (e.key === "Enter" && subtaskInput.value.trim() !=="") {
                addSubtask(subtaskInput.value, subtaskList, newtask);
                subtaskInput.remove();
            }
        });

        listItem.insertBefore(subtaskInput, subtaskList.nextSibling);
        subtaskInput.focus();
        
    });
    //親削除ボタンの追加
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "削除";
    listItem.appendChild(deleteButton);

    //削除機能
    deleteButton.addEventListener("click", evt => {
        evt.preventDefault();
        deleteTasks(deleteButton);
    });

    task_list.appendChild(listItem);
};
//子タスク追加関数
const addSubtask = (subtask, subtaskList, parentTask) => {
    const newSubtask = createTask(subtask);
    parentTask.subtasks.push(newSubtask);

    const sublistItem = document.createElement("li");
    const subtaskSpan = doucument.createElement("span");
    sublistItem.textContent = subtask;
    subtaskList.appendChild(subtaskSpan);

    const deleteSubtaskButton = doucument.createElement("button");
    deleteSubtaskButton.textContent = "削除";
    sublistItem.appendChild(deleteSubtaskButton);

    deleteSubtaskButton.addEventListner("click", () => {
        deleteSubtaskButton(deleteSubtaskButton, parentTask);
    });
    subtaskList.appendChild(sublistItem);
}
//子タスクの削除関数
const deleSubtask = (deleSubtaskButton) => {
    const chosenSubtask = deleSubtaskButton.closest("li");
    const subtaskText = chosenSubtask.querySelector("span").textContent;

    const index = parentTask.subtasks.findIndex(sub => sub.title === subtaskText);
    if (index !== -1) {
        parentTask.subtasks.splice(index, 1);
    }

    chosenSubtask.remobe();
};

const deleteTasks = (deleteButton) => {
    const chosenTask = deleteButton.closest("li");
    task_list.removeChild(chosenTask);
};

add.addEventListener("click", evt => {
    evt.preventDefault();
    const task = task_input.value;
    addTask(task);
    task_input.value = "";
});