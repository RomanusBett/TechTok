interface LogoTemplateProps {
    logoText : string
}

const LogoTemplate = ({logoText}: LogoTemplateProps) => {
    return (
        <>
            <div className='fullLogoBigBox'>
                <div className='fullLogoContainer'>
                    <img src='fullLogo.png' alt='logo' />
                </div>
            </div>
            <div className='fullLogoBigBox'>
                <p>Something's Brewing, <br /> <span className='actionSpan'>{logoText}</span></p>
            </div>
        </>
    )
};

export default LogoTemplate;