import Navbar from "../components/navbar";
import CaptionHolder from "../components/captionHolder";
import './profilePage.css';
import './authPage.css';

const ProfilePage = () => {
    const title = "Welcome ";
    const spanContent = "John";
    const content = "Create and publish a blog post to the world on your new startup";

    return (
        <div>
            <Navbar pageLink="/" toPage="home" selectImage="home.png" />
            <CaptionHolder title={title} spanContent={spanContent} content={content} />
            <div className="createBlogContainer">
                <div className="createBlogBox">
                    <h2>Create Blog</h2>
                </div>
                <div className="createFormContainer formElContainer">
                    <h3>Share insights on your startup journey</h3>
                    <form className="createForm">
                        <label className="blogFormEl">Title</label>
                        <input type="text" />
                        <label className="blogFormEl">Content</label>
                        <textarea name='content' />
                        <button className="blogFormEl">Publish</button>
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