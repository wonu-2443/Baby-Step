const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask(parentList = taskList, text = null) {
    const text = taskInput.value.trim();
    if (text === "") return;

    const li = document.createElement("li");
    li.textContent = text;

    //削除ボタン
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "削除";
    deleteBtn.onclick = () => li.remove();
    li.appendChild(deleteBtn);

    //細分化ボタン
   const subBtn = document.createElement("button");
   subBtn.textContent = "＋細分化"
   subBtn.onclick = () => {
    //子リストを作る
    const subUl = document.createElement("ul")
    
    //サブタスク入力欄と追加ボタン
    const subInput = document.createElement("input");
    subInput.type = "text";
    subInput.plancehodlder = "サブタスクを入力";

    const addSubBtn = document.createElement("button");
    addSubBton.textConten = "追加";
    addSubBtn.onclick = () => {
        const subText = subInput.value.trim();
        if (subText === "")return;
        addTask(subUI, subText);
        subInput.value = "";
    };

    li.appendChild(subInput);
    li.appendChild(addSubBtn);
    li.appendChild(subUI);

    //一度押したら入力UIは出さないようにするなら
    subBtn.disabled = true;

    //入力欄から子タスクを追加
    addTask(subUI);
   };
   li.appendChild(subBtn);

   parentList.appendChild(li);

    taskInput.value = "";
}

//サブタスク追加用にtextチキ数を追加
function addTask(parentList = taskList, text = null){
    if (!text) {
        text = taskInput.value.trim();
        if (text ==="") return;
    }

    const li = document.createElement("li");
    li.textContent = text;

    //削除ボタン
}
