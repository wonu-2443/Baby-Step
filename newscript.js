/*
//１から次はデータ型にしよう！！
let tasks = []; //タスクを保存する場所

const taskInput = document.getElementById("task_input");
const button = document.getElementById("add");
const taskList = document.getElementById("task_list");

//親タスク追加
button.addEventListener("click", () => {
    const text = taskInput.value.trim(); //入力値をとって、前後の空白を消す

    if (text !== "") {
        const newTask = {
            id: Date.now(),
            text: text,
            children: []
        };

        tasks.push(newTask); //配列の追加

        taskInput.value = ""; //入力欄をリセット
        render();　//表示、更新
        };
    };
});

//render表示

function render() {
    taskList.innerHTML = ""; //taskListをリセット

    tasks.forEach(task => {　//全タスクの処理
        taskList.appendChild(createTaskElement(task)); //taskListに新しく作ったtask要素を追加
    });
};


//DOM生成
