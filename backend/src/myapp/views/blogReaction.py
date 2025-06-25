from flask import Blueprint, request, jsonify
from src.myapp.models import Post, Like, Comment
from flask_login import login_required, current_user
from src import db

blogReactions_bp = Blueprint('blogReactions', __name__)

@blogReactions_bp.route('/<int:post_id>/like', methods=['POST'])
@login_required
def like_post(post_id):
    post = Post.query.get_or_404(post_id)
    
    if any(like.user_id == current_user.id for like in post.likes):
        return jsonify({"message": "You already liked this post"})
    
    like = Like(user_id=current_user.id, post_id=post.id)
    db.session.add(like)
    db.session.commit()
    
    return jsonify({
        "message": "Post liked"
    })
    
@blogReactions_bp.route('/<int:post_id>/comment', methods=['POST'])
@login_required
def post_comment(post_id):
    post = Post.query.get_or_404(post_id)
    data = request.get_json()
    
    text = data['commentedText']
    comment = Comment(text=text, user_id=current_user.id, post_id=post.id)
    db.session.add(comment)
    db.session.commit()
    