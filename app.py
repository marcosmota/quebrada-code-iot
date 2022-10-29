from flask import Flask, render_template
from flask_socketio import SocketIO, emit
from flask import request, jsonify

app = Flask(__name__, static_folder='assets')
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/switch/<status>', methods = ['POST'])
def switch(status):
    print(status)
    return { 'light': status }
    

@socketio.event
def my_event(message):
    emit('my response', {'data': 'got it!'})

if __name__ == '__main__':
    socketio.run(app)