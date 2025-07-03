import Navbar from "../components/navbar";
import BlogCard from "../components/blogCard";
import CaptionHolder from "../components/captionHolder";
import './homePage.css';
import axios from "axios";
import { useEffect, useState } from "react";

type Author = {
    f_name: string;
    l_name: string;
}
export interface Blog {
    id: number;
    title: string;
    content: string;
    total_comments: number;
    likes: number;
    posted_on: string;
    authorName: Author[];
}

const HomePage = () => {
    const title = "Discover Kenyan ";
    const spanContent = "Startups";
    const content = "Explore innovative startups shaping Kenya's future through\ntechnology, sustainability and social impact";
    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(()=>{
        axios.get("http://127.0.0.1:5000/blogs", {withCredentials:true}).then(
            res => {
                setBlogs(res.data)
            }
        ).catch(err=>console.log(err))
    },[])

    return (
        <div>
            <Navbar pageLink='/profile' toPage='profile' selectImage="user.png" />
            <CaptionHolder title={title} spanContent={spanContent} content={content} />
            <div className="homeContainer featuredContainer">
                <h1>Featured startups</h1>
                <div className="cardsContainer">
                    {blogs.map((blog, index) => {
                        return (
                            <BlogCard
                                key={blog.id}
                                id={blog.id}
                                name={`${blog.authorName[0]?.f_name} ${blog.authorName[0]?.l_name}`}
                                date={blog.posted_on}
                                title={blog.title}
                                content={blog.content}
                                likes={blog.likes}
                                comments={blog.total_comments}
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