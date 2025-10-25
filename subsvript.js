const taskInput = document.getElementById("task_input");
const addBtn = document.getElementById("add");
const taskList = document.getElementById("task_list");

//子タスク
const create_new_task = (task_li) => { //サブタスクを作れるようにする関数化
    const new_task_Btn = document.createElement("button"); //細分化ボタンを作る
    new_task_Btn.textContent = "細分化";
    
    new_task_Btn.addEventListener("click", () => { //細分化ボタンを押したときの処理
        const new_task_input = document.createElement("input"); //入力欄を作る
        new_task_input.type = "text"; //テキスト設定
        new_task_input.placeholder = "サブタスクを入力"; //入力欄の背景に文字

    });

}

const task_deleBtn = (task_li) => { //削除機能を関数化
    const deleBtn = document.createElement("button"); //削除ボタンを生成
    deleBtn.textContent = "削除"; //ボタンのテキスト

    deleBtn.addEventListener("click", () => { //削除ボタンを押したときの処理
        task_li.remove(); //task_li
    });

    task_li.appendChild(deleBtn);
}


addBtn.addEventListener("click", () => { //追加ボタンを押したときの処理
    const text = taskInput.value.trim(); //入力欄の値を取得し、前後の空白を削除
    
    if (text !== "") { //空でなければ
        const task_li = document.createElement("li"); //li要素を作成
        task_li.textContent = text; //li要素に入力される値を文字に設定
        taskList.appendChild(task_li); //ul要素の子要素に追加
        taskInput.value = ""; //入力欄を空にする
    }

});
