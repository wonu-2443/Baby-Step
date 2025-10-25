const taskInput = document.getElementById("task_input");
const addBtn = document.getElementById("add");
const taskList = document.getElementById("task_list");


addBtn.addEventListener("click", () => { //追加ボタンを押したときの処理
    const text = taskInput.value.trim(); //入力欄の値を取得し、前後の空白を削除
    
    if (text !== "") { //空でなければ
        const task_li = document.createElement("li"); //li要素を作成
        task_li.textContent = text; //li要素に入力される値を文字に設定
        taskList.appendChild(task_li); //ul要素の子要素に追加
        taskInput.value = ""; //入力欄を空にする
    }

});

const maindeleBtn = document.createElement("button"); //削除ボタンを生成
maindeleBtn.textContent = "削除"; //ボタンのテキスト
