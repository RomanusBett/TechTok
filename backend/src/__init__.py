from decouple import config
from flask import Flask
from flask_login import LoginManager
from src.extensions import db, bcrypt, migrate
from .myapp.models import User
from flask_cors import CORS

app = Flask(__name__)
app.config.from_object(config('APP_SETTINGS'))
bcrypt.init_app(app)
db.init_app(app)
migrate.init_app(app, db)
CORS(app)

login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = 'myapp.login'
login_manager.login_message_category = 'danger'

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

from src.myapp.views.registerUser import register_bp
from src.myapp.views.userLogin import login_bp
from src.myapp.views.logout import logout_bp
from src.myapp.views.createBlog import createBlog_bp
from src.myapp.views.blogReaction import blogReactions_bp
from src.myapp.views.checkAuth import check_auth_bp

app.register_blueprint(register_bp)
app.register_blueprint(login_bp)
app.register_blueprint(logout_bp)
app.register_blueprint(createBlog_bp)
app.register_blueprint(blogReactions_bp)
app.register_blueprint(check_auth_bp)
