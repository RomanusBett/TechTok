from flask import Blueprint, request, jsonify
from src.myapp.models import User
from src import db, bcrypt
from flask_login import login_user

register_bp = Blueprint('register', __name__)

@register_bp.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    if not data or not all(keys in data for keys in('f_name', 'l_name', 'email', 'password')):
        return jsonify({'error': 'Missing required fields'}), 400
    
    f_name = data['f_name']
    l_name = data['l_name']
    email = data['email']
    password = data['password']
    
    existing_user = User.query.filter(User.email == email).first()
    if existing_user:
        return jsonify({'message': 'User already exists'}), 400
    
    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
    new_user = User(f_name=f_name, l_name=l_name, email=email, password=hashed_password)
    db.session.add(new_user)
    db.session.commit()
    
    login_user(new_user)
    return jsonify({'message': 'User registered successfully'}), 201