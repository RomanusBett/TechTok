import './cards.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

interface BlogCardProps{
    id:number;
    name: string;
    date: string;
    title: string;
    content: string;
    likes: number;
    comments: number;
}

const BlogCard = ({id, name, date, title, content, likes, comments}: BlogCardProps) => {
    const [liked, setLiked] = useState<boolean>(false);

    const likePost = ()=>{
        axios.post(`http://127.0.0.1:5000/${id}/like`, {}, {withCredentials: true}).then(
            res=>setLiked(true)
        ).catch(err=>console.log(err))
    }

    return (
        <div key={id} className='bigCard'>
            <div className="cardElements cardinfoBox">
                <p>{name}</p>
                <div className='calendarBox'>
                    <img className='iconImage' src="calendar.png" alt="calendar" />
                    <p>{date}</p>
                </div>
            </div>
            <div className="cardElements startupInfoSection">
                <h2>{title}</h2>
                <div className='blogContent'>
                    <p>{content.split(" ").slice(0, 40).join(" ")}...</p>
                    <Link to={`/${id}/blog`}>
                        <button>read more</button>
                    </Link>
                </div>
            </div>
            <div className="cardElements reactionElements">
                <div  onClick={()=>likePost()} className='reactionBox'>
                    <img className='iconImage' src="heart.png" alt="likes" />
                    <p style={{color: liked?'rgb(166, 0, 0)':'grey'}}>{likes}</p>
                </div>
                <div className='reactionBox'>
                    <img className='iconImage' src="chat.png" alt="comments" />
                    <p>{comments}</p>
                </div>
            </div>
        </div>
    )
}

export default BlogCard;