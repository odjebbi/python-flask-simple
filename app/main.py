from flask import Flask, jsonify, render_template
import os

app = Flask(
    __name__,
    template_folder='../templates',
    static_folder='../static'
)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/api/hello')
def hello():
    return jsonify({'message': 'Hello from Python Flask!'})

@app.route('/health')
def health():
    return jsonify({'status': 'ok', 'service': 'python-flask'})

@app.route('/api/info')
def info():
    return jsonify({
        'language': 'Python',
        'framework': 'Flask',
        'version': '1.0.0'
    })
