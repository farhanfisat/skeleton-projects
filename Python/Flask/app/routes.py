from app import app

@app.route('/')
@app.route('/index')
def index():
    return "Hello, World!"
@app.route('/login')
def login():
    return "Welcome to login Page!"
