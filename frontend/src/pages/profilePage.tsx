import Navbar from "../components/navbar";
import CaptionHolder from "../components/captionHolder";

const ProfilePage = () => {
    const title = "Welcome ";
    const spanContent = "John";
    const content = "Create and publish a blog post to the world on your new startup";

    return (
        <div>
            <Navbar pageLink="/" toPage="home" selectImage="home.png" />
            <CaptionHolder title={title} spanContent={spanContent} content={content} />
            <div>
                <div>
                    <h1>Create</h1>
                    <img src="" alt=""/>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default ProfilePage;