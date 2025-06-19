import Navbar from "../components/navbar";
import BlogCard from "../components/blogCard";
import './homePage.css';
import { blogPosts } from "../blogObjects/blogData";
import CaptionHolder from "../components/captionHolder";

const HomePage = () => {
    const title = "Discover Kenyan ";
    const spanContent = "Startups";
    const content = "Explore innovative startups shaping Kenya's future through\ntechnology, sustainability and social impact";

    return (
        <div>
            <Navbar pageLink='/profile' toPage='profile' selectImage="user.png" />
            <CaptionHolder title={title} spanContent={spanContent} content={content} />
            <div className="homeContainer featuredContainer">
                <h1>Featured startups</h1>
                <div className="cardsContainer">
                    {blogPosts.map((blog, index) => {
                        return (
                            <BlogCard
                                key={index}
                                name={blog.author}
                                date={blog.date}
                                title={blog.title}
                                content={blog.content}
                                likes={blog.likes}
                                comments={blog.comments}
                            />
                        )
                    })}
                </div>
            </div>
            <div className="footerBlock">
                <p>2024 All rights reserved</p>
            </div>
        </div>
    )
}
export default HomePage;