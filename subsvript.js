const taskInput = document.getElementById("task_input");
const addBtn = document.getElementById("add");
const taskList = document.getElementById("task_list");

addBtn.addEventListener("click", () => { //追加ボタンを押したときの処理
    const text = taskInput.value.trim(); //入力欄の値を取得し、前後の空白を削除
    
    if (text !== "") {
        const task_li = document.createElement("li");
        task_li.textContent = text;
        taskList.appendChild(task_li); 
        taskInput.value = ""; //入力欄を空にする
    }

});
