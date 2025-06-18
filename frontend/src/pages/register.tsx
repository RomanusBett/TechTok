import GooglleAuthButton from '../components/googleButton';
import LogoTemplate from '../components/logoTemplate';
import './authPage.css';

const RegisterPage = () => {
    return (
        <div className='authPage'>
            <div className="formContainer">
                <LogoTemplate logoText='Sign up today'/>
                <form>
                    <div className='authContainer'>
                        <div className='formElContainer'>
                            <label htmlFor="firstName">First Name</label>
                            <input className='formElement' type="text" id="fName" name="firstName" />
                        </div>
                        <div className='formElContainer'>
                            <label htmlFor="lastName">Last Name</label>
                            <input className='formElement' id="lName" type="text" name="lastName" /></div>
                        <div className='formElContainer'>
                            <label htmlFor="email">Email</label>
                            <input className='formElement' type="email" id="email" />
                        </div>
                        <div className='formElContainer'>
                            <label htmlFor="password">Password</label>
                            <input className='formElement' type="password" id="password" />
                        </div>
                        <div className='formElContainer'>
                            <label htmlFor="ConfrimPassword">Confirm Password</label>
                            <input className='formElement' type="password" id="confirmPassword" />
                        </div>
                        <div className='formElContainer'>
                            <button className='formElement'>Sign up</button>
                        </div>
                        <div className='formElContainer redirectBox'><p>or</p></div>
                        <div className='formElContainer'>
                            <GooglleAuthButton googleText='Sign up with Google'/>
                        </div>
                        <div className='formElContainer redirectBox'>
                            <p>Already have an account? <a href='/login'>login</a></p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegisterPage; 