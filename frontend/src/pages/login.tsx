import GooglleAuthButton from '../components/googleButton';
import LogoTemplate from '../components/logoTemplate';
import './authPage.css';

const LoginPage = () => {
    return (
        <div className='authPage'>
            <div className='formContainer'>
                <LogoTemplate logoText = "Sign in"/>
                <form className="authForm">
                    <div className='formElContainer'>
                        <label htmlFor="email">Email</label>
                        <input className='formElement' type="email" id="logInEmail" />
                    </div>
                    <div className='formElContainer'>
                        <label htmlFor="password">Password</label>
                        <input className='formElement formButton' type="password" id="logInPassword" />
                    </div>
                    <div className='formElContainer'>
                        <button className='formElement formButton'>SIGN IN</button>
                    </div>
                    <div className='formElContainer redirectBox'><p>or</p></div>
                    <div className='formElContainer'>
                        <GooglleAuthButton googleText='Sign in with Google'/>
                    </div>
                    <div className='formElContainer redirectBox'>
                        <p>Don't have an account? <a href='/register'>register</a></p>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default LoginPage;