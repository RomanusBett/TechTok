import Navbar from "../components/navbar";
import { useParams } from "react-router-dom";
import { blogPosts } from "../blogObjects/blogData";
import './blogDetails.css';
import './authPage.css';

const BlogDetails = ()=>{
    const {id} = useParams<{id: string}>();
    const blog = blogPosts.find(post=> post.id === Number(id));
    if (!blog) return <p>Blog not found</p>

    return(
        <div className="individualBlog">
            <Navbar pageLink='/profile' toPage='profile' selectImage="/user.png" />
            <div className="blogDetailsContainer">
                <div className="blogInfoBox">
                    <h1>{blog.title}</h1>
                    <p><strong>By: </strong>{blog.author}</p>
                    <p><strong>Date: </strong>{blog.date}</p>
                    <p>{blog.content}</p>
                </div>
                <div className="commentsContainer">
                    <h3>Comments</h3>
                    {blog.commentsList && blog.commentsList.length>0 ? 
                    blog.commentsList.map((comment, index)=>{
                        return(
                            <div key={index} className="commentBox">
                                <p><span className="commentUsername">{comment.username}</span></p>
                                <p>{comment.text}</p>
                            </div>
                        )
                    }): (<p>No comments yet.</p>)}
                </div>
                <div className="formElContainer makeComment">
                    <h3>Make a comment</h3>
                    <form action="">
                        <input type='text' placeholder=" congratulations on the startup!" className="commentInput"/>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    ) 
}

export default BlogDetails;