import Navbar from "../components/navbar";
import CaptionHolder from "../components/captionHolder";
import './profilePage.css';
import './authPage.css';
import { useUser } from "../components/store/UserContext";
import axios from "axios";
import { useState } from "react";

interface CreateForm {
    title: string;
    content: string;
}

const ProfilePage = () => {
    const {user} = useUser();
    const profileHeader = "Welcome ";
    const profileContent = "Create and publish a blog post to the world on your new startup";

    const [formData, setFormData] = useState<CreateForm>({
        title: '',
        content: ''
    });
    const [message, setMessage] = useState<string>('')

    const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = async(e:React.FormEvent)=>{
        e.preventDefault();
        try{
            const res = await axios.post('http://127.0.0.1:5000/create', formData, {withCredentials:true});
            setMessage(res.data.message)
        } catch(err:any){
            if (err.response?.data?.error){
                setMessage(err.response.data.error);
            } else {
                setMessage('something went wrong')
            }
        }
    }

    return (
        <div>
            <Navbar pageLink="/" toPage="home" selectImage="home.png" />
            <CaptionHolder title={profileHeader} spanContent={user?.f_name || ''} content={profileContent} />
            <div className="createBlogContainer">
                <div className="createBlogBox">
                    <h2>Create Blog</h2>
                </div>
                <div className="createFormContainer formElContainer">
                    <h3>Share insights on your startup journey</h3>
                    <form className="createForm" onSubmit={handleSubmit}>
                        <label className="blogFormEl">Title</label>
                        <input name='title' value={formData.title} onChange={handleChange} type="text" />
                        <label className="blogFormEl">Content</label>
                        <textarea name='content' onChange={handleChange} value={formData.content} />
                        <button className="blogFormEl">Publish</button>
                        <div>
                            {message && <p>{message}</p>}
                        </div>
                    </form>
                </div>
            </div>
            <div className="createBlogContainer">
                <div className="personalDetails">
                    <h2>Personal details</h2>
                </div>
                <div className="createFormContainer formElContainer">
                    <h3>Update your details or change your password</h3>
                    <form>
                        <div className="userInformation">
                            <div className="userFormEl">
                                <label>First name</label>
                                <input type="text" />
                            </div>
                            <div className="userFormEl">
                                <label>Last name</label>
                                <input type="text" />
                            </div>
                        </div>
                        <div className="passwordEl">
                            <label>change password</label>
                            <input type="password" />
                            <label>confirm password</label>
                            <input type="password" />
                        </div>
                        <button className="userDetailsButton">Submit</button>
                    </form>
                </div>
            </div>
            <div className="footerBlock">
                <p>2024 All rights reserved</p>
            </div>
        </div>
    )
}

export default ProfilePage;