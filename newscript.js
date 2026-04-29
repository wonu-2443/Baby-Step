/*
//１から次はデータ型にしよう！！

let tasks = []; //タスクを保存する場所

const taskInput = document.getElementById("task_input");
const button = document.getElementById("add");
const taskList = document.getElementById("task_list");

//render表示

function render() {
    taskList.innerHTML = ""; //taskListをリセット

    tasks.forEach(task => {　//全タスクの処理
        taskList.appendChild(createTaskElement(task)); //taskListに新しく作ったtask要素を追加
    });
};

//親タスク追加
button.addEventListener("click", () => {
    const text = taskInput.value.trim(); //入力値をとって、前後の空白を消す

    if (text !== "") {
        const newTask = {
            id: Date.now(),
            text: text,
            children: []
        }; //テキストの内容を指定

        tasks.push(newTask); //配列の追加

        taskInput.value = ""; //入力欄をリセット
        render();　//表示、更新
        };
    };
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

    delbtn.addEventListener("click",() => {
        delbtnTask(task.id,tasks); //削除関数を呼び出す　関数は最後にまとめる
        render();
    });
};

li.appendChild(delbtn);

const addSubtaskbtn = document.createElement("button");
addSubtaskbtn.textContent = "細分化";

addSubtaskbtn.addEventListener("click", () => {
    const subInput = document.createElement("input");
    subInput.placeholder = "細分化タスクを入力";

    li.appendChild(subInput);

    subInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            const text = subInput.value.trim();

            if (text !== "") {
                const child = {
                    id: Date.now(),
                    text: text,
                    children: []
                };

                task.children.push(child);
                render();
                };
            };
        };
    });
});

li.removeChild(subInput);
render();
