import Navbar from "../components/navbar";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import './blogDetails.css';
import './authPage.css';

import { Blog } from "./home";
interface IndividualBlog extends Blog {
    comments: any[];
}

const BlogDetails = () => {
    const { id } = useParams<{ id: string }>();
    const [commentInput, setCommentInput] = useState<string>('');
    const [message, setMessage] = useState<string>('')

    const [thisBlog, setThisBlog] = useState<IndividualBlog | null>(null);

    useEffect(() => {
        axios.get(`http://127.0.0.1:5000/${id}/comments`, { withCredentials: true }).then(
            res => { setThisBlog(res.data[0]); console.log(res.data) }
        ).catch(
            err => console.log(err)
        )
    }, [id]);

    if (!thisBlog) return <p>Blog not found</p>

    const handleCommentSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await axios.post(`http://127.0.0.1:5000/${id}/comment`, { commentedText: commentInput }, { withCredentials: true })
            setMessage(res.data.message)
        } catch (err: any) {
            if (err.response?.data?.error) {
                setMessage(err.response.data.error)
            }
            else {
                setMessage('something went wrong')
            }
        }
    }

    return (
        <div className="individualBlog">
            <Navbar pageLink='/profile' toPage='profile' selectImage="/user.png" />
            <div className="blogDetailsContainer">
                <div className="blogInfoBox">
                    <h1>{thisBlog.title}</h1>
                    <p><strong>By: </strong>
                        {thisBlog.authorName?.[0]
                            ? `${thisBlog.authorName[0].f_name} ${thisBlog.authorName[0].l_name}`
                            : 'Unknown Author'}
                    </p>
                    <p><strong>Date: </strong>{thisBlog.posted_on}</p>
                    <p>{thisBlog.content}</p>
                </div>
                <div className="commentsContainer">
                    <h3>Comments</h3>
                    {thisBlog.comments && thisBlog.comments.length > 0 ?
                        thisBlog.comments.map((comment, index) => {
                            return (
                                <div key={index} className="commentBox">
                                    <p><span className="commentUsername">
                                        {comment.author?.[0]?.f_name} {comment.author?.[0]?.l_name}
                                    </span></p>
                                    <p>{comment.content}</p>
                                </div>
                            )
                        }) : (<p>No comments yet.</p>)}
                </div>
                <div className="formElContainer makeComment">
                    <h3>Make a comment</h3>
                    <form onSubmit={handleCommentSubmit}>
                        <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCommentInput(e.target.value)} type='text' placeholder=" congratulations on the startup!" className="commentInput" />
                        <button>Submit</button>
                        {message && <p>{message}</p>}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default BlogDetails;