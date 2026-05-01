from flask import Flask, request, jsonify
import json
import os

app = Flask(__name__)

DATA_FILE = "tasks.json"

# ======================
# 読み込み
# ======================
def load_tasks():
    if os.path.exists(DATA_FILE):
        with open(DATA_FILE, "r", encoding="utf-8") as f:
            return json.load(f)
    return []

# ======================
# 保存
# ======================
def save_tasks(tasks):
    with open(DATA_FILE, "w", encoding="utf-8") as f:
        json.dump(tasks, f, ensure_ascii=False, indent=2)

# 初期データ
tasks = load_tasks()

# ======================
# API
# ======================

# 取得
@app.route("/tasks", methods=["GET"])
def get_tasks():
    return jsonify(tasks)

# 追加
@app.route("/tasks", methods=["POST"])
def add_task():
    data = request.json
    tasks.append(data)
    save_tasks(tasks)
    return jsonify({"status": "ok"})

# 全更新
@app.route("/tasks", methods=["PUT"])
def update_tasks():
    global tasks
    tasks = request.json
    save_tasks(tasks)
    return jsonify({"status": "ok"})

# ======================
app.run(debug=True)

print("読み込んだtasks:", tasks)
