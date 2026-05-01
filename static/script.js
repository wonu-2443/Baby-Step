/*
let tasks =[];
let task_input = document.getElementById("task_input");
let add = document.getElementById("add");
let task_check = document.getElementById("task_check");
let task_list = document.getElementById("task_list");

//createTasak関数でタイトルと完了状態、子タスクの配列を持つ
const createTask = (title)  => {
    return {
        title: title,
        completed: false,
        subtasks: []
    };
}

//親タスク追加関数
const addTask = (task) => {
    //新しいメインタスクの生成
    const newtask = createTask(task);
    tasks.push(newtask);

    //親タスクのliの作成
    const listItem = document.createElement("li");
    listItem.textContent = task;

    //子タスクのulの作成
    const subtaskList = document.createElement("ul");
    listItem.appendChild(subtaskList);

    //子タスク細分化ボタン
    const addSubtaskButton = document.createElement("button");
    addSubtaskButton.innerHTML = "細分化";
    listItem.appendChild(addSubtaskButton);

    //子タスク細分化ボタンをクリックした時の処理
    addSubtaskButton.addEventListener("click", () => {
        
        //子タスク入力欄の生成
        const subtaskInput = document.createElement("input");
        subtaskInput.type = "text";
        subtaskInput.placeholder = "子タスクを入力";
        
        //Enterを押した時の処理
        subtaskInput.addEventListener("keypress", (e) =>{
            if (e.key === "Enter" && subtaskInput.value.trim() !=="") {
                addSubtask(subtaskInput.value, subtaskList, newtask);
                subtaskInput.remove();
            }
        });

        //subtaskInputをsubtaskListの直後に挿入、focusですぐに入力を可能に
        listItem.insertBefore(subtaskInput, subtaskList.nextSibling);
        subtaskInput.focus();
        
    });

    //削除ボタンの追加
    const maindeleteButton = document.createElement("button");
    maindeleteButton.textContent = "削除";
    listItem.appendChild(maindeleteButton);

    //削除ボタンをクリックした時の処理
    maindeleteButton.addEventListener("click", evt => {
        evt.preventDefault();
        deleteTask(maindeleteButton);
    });

    task_list.appendChild(listItem);
};
//子タスク追加関数
const addSubtask = (subtask, subtaskList, parentTask) => {
    const newSubtask = createTask(subtask);
    parentTask.subtasks.push(newSubtask);

    const sublistItem = document.createElement("li");

    const subtaskSpan = document.createElement("span");
    subtaskSpan.textContent = subtask;
    sublistItem.appendChild(subtaskSpan);

    const deleteSubtaskButton = document.createElement("button");
    deleteSubtaskButton.textContent = "削除";
    sublistItem.appendChild(deleteSubtaskButton);

    deleteSubtaskButton.addEventListener("click", () => {
        deleteSubtask(deleteSubtaskButton, parentTask);
    });
    subtaskList.appendChild(sublistItem);
};
//子タスクの削除関数
const deleteSubtask = (deleSubtaskButton, parentTask) => {
    const chosenSubtask = deleSubtaskButton.closest("li");
    const subtaskText = chosenSubtask.querySelector("span").textContent;

    const index = parentTask.subtasks.findIndex(sub => sub.title === subtaskText);
    if (index !== -1) {
        parentTask.subtasks.splice(index, 1);
    }

    chosenSubtask.remove();
};

const deleteTask = (deleteButton) => {
    const chosenTask = deleteButton.closest("li");
    task_list.removeChild(chosenTask);
};

add.addEventListener("click", evt => {
    evt.preventDefault();
    const task = task_input.value;
    if (task !== "") {
     addTask(task);
     task_input.value = "";
    }
});
*/