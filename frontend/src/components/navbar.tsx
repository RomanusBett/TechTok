import './navElements.css';

interface NavbarProps {
    toPage: string;
    selectImage: string;
    pageLink: string;
}

const Navbar = ({toPage, selectImage, pageLink}: NavbarProps) => {
    return (
        <div className='navElBox brandBox'>
            <div className='brandBoxChild'>
                <div className='navLogoContainer'>
                    <img src="logo.png" alt="logo" />
                    <p><span className='tech'>TECH</span><span className='tok'>TOK</span></p>
                </div>
                <ul className='navElBox navigationList'>
                    <div className='navLinkBoxes'>
                        <img src={selectImage} alt='profile'/>
                        <li><a href={pageLink}>{toPage}</a></li>
                    </div>
                    <div className='navLinkBoxes'>
                        <img src='logout.png' alt='logout'/>
                        <li>logout</li>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;