from flask import Flask, request, jsonify, render_template
import json

app = Flask(__name__)
Folder = 'todos.json'

def load():
    try:
        with open(Folder) as f :
            return json.load(f)
    except:
        return[]

def save(data):
    with open(Folder, 'W') as f:
        json.dump(data, f)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/tasks', methods = ['GET'])
def get_todos():
    return jsonify(load())

@app.route('/tasks', methods = ['POST'])
def add_todo():
    todos = load()
    todos.append(request.json['title'])
    save(todos)
    return jsonify({'status': 'ok'})

if __name__ == "__main__":
    app.run(debug = True)
