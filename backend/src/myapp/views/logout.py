from flask import Blueprint, jsonify
from flask_login import logout_user, login_required

logout_bp = Blueprint('logout', __name__)

@logout_bp.route('/logout', methods=['POST'])
@login_required
def logout():
    logout_user()
    return jsonify({'message': 'User successfully logged out'})