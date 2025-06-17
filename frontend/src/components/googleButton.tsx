interface GoogleAuthButtonProps {
    googleText: string
}

const GooglleAuthButton = ({googleText}: GoogleAuthButtonProps) => {
    return (
        <button className='formElement'>
            <div className='googleButtonContainer'>
                <div className='googleAuthEl'>
                    <p className='signInText'>{googleText}</p>
                </div>
                <div className='googleAuthEl'>
                    <img className='googleIcon' src='google.png' alt='google' />
                </div>
            </div>
        </button>
    )
}

export default GooglleAuthButton;