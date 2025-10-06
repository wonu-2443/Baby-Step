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
    listItem.appendChild(addSubtaskButton)

    assSubtaskButton.addEventListener("click", () => {
        
    }
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