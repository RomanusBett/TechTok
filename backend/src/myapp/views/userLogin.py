from flask import Blueprint, jsonify, request
from flask_login import login_user
from src.myapp.models import User
from src import db, bcrypt

login_bp = Blueprint('login', __name__)

@login_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    if not data or not all(keys in data for keys in ('email', 'password')):
        return jsonify({'error': 'Missing fields required'}), 400
    
    email = data['email']
    password = data['password']
    
    user = User.query.filter_by(email=email).first()
    
    if not user or not bcrypt.check_password_hash(user.password, password):
        return jsonify({'error': 'Invalid email or password'}), 401
    
    login_user(user)
    return jsonify({'message': 'User successfully logged in'}), 200