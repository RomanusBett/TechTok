from flask import Blueprint, request, jsonify
from src.myapp.models import Post
from flask_login import login_required, current_user
from src import db

createBlog_bp = Blueprint('createblog', __name__)

@createBlog_bp.route('/create', methods=['POST'])
@login_required
def createBlog():
    data = request.get_json()
    title = data['title']
    content = data['content']
    
    if not content:
        return jsonify({
            "message": "Missing required fields"
        })
    post = Post(title=title, content=content)
    post.author = current_user
    db.session.add(post)
    db.session.commit()
    
    return jsonify({
        "message": "post created successfully",
        "post_id": post.id,
        "author": post.author.f_name
    })
    

@createBlog_bp.route('/blogs', methods=['GET'])
@login_required
def getBlogs():
    posts = Post.query.order_by(Post.timestamp.desc()).all()
    
    return jsonify([
        {
        "id": post.id,
        "authorName": [{
            "f_name": post.author.f_name,
            "l_name": post.author.l_name
        }],
        "title": post.title,
        "content": post.content,
        "posted_on": post.timestamp,
        "comments": len(post.comments),
        "likes": len(post.likes)
        }
        for post in posts
    ]), 200 

@createBlog_bp.route('/<int:post_id>/comments', methods=['GET'])
@login_required
def get_post_comments(post_id):
    post = Post.query.get_or_404(post_id)
    return jsonify([
        {
           "id": post.id,
            "title": post.title,
            "content": post.content,
            "timestamp": post.timestamp,
            "likes": len(post.likes),
            "total_comments": len(post.comments),
            "comments": [
                {
                    "id": comment.id,
                    "author": [{
                        "f_name": comment.commenter.f_name,
                        "l_name": comment.commenter.l_name,
                    }],
                    "content":comment.text,
                    "timestamp": comment.timestamp
                }
                for comment in post.comments
            ]
        }
    ])