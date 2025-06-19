import './cards.css';

interface BlogCardProps{
    key:number;
    name: string;
    date: string;
    title: string;
    content: string;
    likes: number;
    comments: number;
}

const BlogCard = ({key, name, date, title, content, likes, comments}: BlogCardProps) => {
    return (
        <div key={key} className='bigCard'>
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
                    <button>read more</button>
                </div>
            </div>
            <div className="cardElements reactionElements">
                <div className='reactionBox'>
                    <img className='iconImage' src="heart.png" alt="likes" />
                    <p>{likes}</p>
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