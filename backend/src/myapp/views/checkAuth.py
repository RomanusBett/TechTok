from flask import Blueprint, jsonify
from flask_login import current_user
from flask_cors import cross_origin

check_auth_bp = Blueprint('checkauth', __name__)

@check_auth_bp.route('/checkauth', methods=['GET'])
def check_auth():
    if current_user.is_authenticated:
        return jsonify({'loggedIn':True, 'f_name':current_user.f_name, 'email':current_user.email})
    else: 
        return jsonify({'loggedIn':False})