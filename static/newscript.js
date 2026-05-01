
//１から次はデータ型にしよう！！

let tasks = []; //タスクを保存する場所

const taskInput = document.getElementById("task_input");
const button = document.getElementById("add");
const taskList = document.getElementById("task_list");

//render表示

function render() {
    taskList.innerHTML = ""; //taskListをリセット

    tasks.forEach(task => { //全タスクの処理
        taskList.appendChild(createTaskElement(task)); //taskListに新しく作ったtask要素を追加
    });
};

//親タスク追加
button.addEventListener("click", async () => {
    const text = taskInput.value.trim();

    if (text !== "") {
        const newTask = {
            id: Date.now(),
            text: text,
            children: []
        };

        tasks.push(newTask);

        await fetch("/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newTask)
        });

        taskInput.value = "";
        render();
    }
});


//DOM作成関数
function createTaskElement(task) {
    const li = document.createElement("li"); //li要素を作る
    //テキスト
    const span = document.createElement("span");
    span.textContent = task.text;
    li.appendChild(span);

    //削除ボタン
    const delbtn = document.createElement("button");
    delbtn.textContent ="削除";

    delbtn.addEventListener("click",async () => {
        delbtnTask(task.id,tasks); //削除関数を呼び出す　関数は最後にまとめる

        await fetch("/tasks", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(tasks)
        });

        render();
    });

    li.appendChild(delbtn);

    const addSubtaskbtn = document.createElement("button");
    addSubtaskbtn.textContent = "細分化";

    addSubtaskbtn.addEventListener("click", () => {
        if (li.querySelector("input")) return;
        
        const subInput = document.createElement("input");
        subInput.placeholder = "細分化タスクを入力";

        li.appendChild(subInput);

        subInput.addEventListener("keydown", async (e) => {
            if (e.key === "Enter") {
                const text = subInput.value.trim();

                if (text !== "") {
                    const child = {
                        id: Date.now(),
                        text: text,
                        children: []
                    };

                    task.children.push(child);
                    li.removeChild(subInput);

                    await fetch("/tasks", {
                        method: "PUT",
                        headers: {
                        "Content-Type": "application/json"
                        },
                        body: JSON.stringify(tasks)
                    });
                };
                render();
            };
        });
    });
    li.appendChild(addSubtaskbtn);

    //子タスクの再帰表示
    if (task.children.length > 0) {
        const ul = document.createElement("ul");
        task.children.forEach(child => {
            ul.appendChild(createTaskElement(child));
        });

        li.appendChild(ul);
    };

    return li;
};

//削除関数
function  delbtnTask(id, taskArray) {
    for(let i = 0; i < taskArray.length; i++) {
        if(taskArray[i].id === id) {
            taskArray.splice(i, 1);
            return true
        } else if (taskArray[i].children.length > 0){
            const deleted = delbtnTask(id, taskArray[i].children);
            if (deleted) return true;
        };
    };
    return false;
};

async function loadTasks() {
    const res = await fetch("/tasks");
    tasks = await res.json();
    render();
}

completed: false
loadTasks();

