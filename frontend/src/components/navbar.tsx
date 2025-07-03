import axios from 'axios';
import './navElements.css';

interface NavbarProps {
    toPage: string;
    selectImage: string;
    pageLink: string;
}

const Navbar = ({ toPage, selectImage, pageLink }: NavbarProps) => {
    const logoutUser = () => {
        axios.post('http://127.0.0.1:5000/logout', {}, {withCredentials:true}).then(
            res => {
                console.log(res.data);
                window.location.href = '/';
            }
        ).catch(err => console.log(err))
    }

    return (
        <div className='navElBox brandBox'>
            <div className='brandBoxChild'>
                <div className='navLogoContainer'>
                    <img src="/logo.png" alt="logo" />
                    <p><span className='tech'>TECH</span><span className='tok'>TOK</span></p>
                </div>
                <ul className='navElBox navigationList'>
                    <div className='navLinkBoxes'>
                        <img src={selectImage} alt='profile' />
                        <li><a href={pageLink}>{toPage}</a></li>
                    </div>
                    <div className='navLinkBoxes' onClick={logoutUser}>
                        <img src='/logout.png' alt='logout' />
                        <li>logout</li>
                    </div>

                </ul>
            </div>
        </div>
    )
}

export default Navbar;