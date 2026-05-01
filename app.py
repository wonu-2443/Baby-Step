from flask import Flask, request, jsonify, render_template
import os
import json

app = Flask(__name__)

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_FILE = os.path.join(BASE_DIR, "tasks.json")

# ======================
# 読み込み
# ======================
def load_all_tasks():
    if os.path.exists(DATA_FILE):
        with open(DATA_FILE, "r", encoding="utf-8") as f:
            data = json.load(f)
            if isinstance(data, dict):
                return data
    return {}

# ======================
# 保存
# ======================
def save_all_tasks(data):
    with open(DATA_FILE, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

# メモリ
tasks_db = load_all_tasks()

if not isinstance(tasks_db, dict):
    tasks_db = {}

# ======================
# 画面
# ======================
@app.route("/")
def home():
    return render_template("index.html")

# ======================
# GET
# ======================
@app.route("/tasks", methods=["GET"])
def get_tasks():
    user_id = request.args.get("userId")

    if not user_id:
        return jsonify([])

    if user_id not in tasks_db:
        tasks_db[user_id] = []

    return jsonify(tasks_db[user_id])

# ======================
# POST
# ======================
@app.route("/tasks", methods=["POST"])
def add_task():
    data = request.json

    user_id = data.get("userId")
    task = data.get("task")

    if not user_id or not task:
        return jsonify({"status": "error"})

    if user_id not in tasks_db:
        tasks_db[user_id] = []

    tasks_db[user_id].append(task)

    save_all_tasks(tasks_db)

    return jsonify({"status": "ok"})

# ======================
# PUT
# ======================
@app.route("/tasks", methods=["PUT"])
def update_tasks():
    data = request.json

    user_id = data.get("userId")
    tasks = data.get("tasks")

    if not user_id:
        return jsonify({"status": "error"})

    tasks_db[user_id] = tasks

    save_all_tasks(tasks_db)

    return jsonify({"status": "ok"})

# ======================
if __name__ == "__main__":
    app.run(debug=True)