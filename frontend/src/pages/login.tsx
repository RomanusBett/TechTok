import { useState } from 'react';
import axios from 'axios';
import GooglleAuthButton from '../components/googleButton';
import LogoTemplate from '../components/logoTemplate';
import { LoginData } from '../interface/appInterface';
import './authPage.css';

const LoginPage = () => {
    const [formData, setFormData] = useState<LoginData>({
        email: '',
        password: '' 
    });
    const [message, setMessage] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://127.0.0.1:5000/login', formData, {
                withCredentials: true, headers: {
                    'Content-Type': 'application/json'
                }
            });
            setMessage(res.data.message);
            window.location.href = '/';
        } catch (err: any) {
            if (err.response?.data?.error) {
                setMessage(err.response.data.error)
            }
            else {
                setMessage('something went wrong')
            }
        }
    }

    return (
        <div className='authPage'>
            <div className='formContainer'>
                <LogoTemplate logoText="Sign in" />
                <form className="authForm" onSubmit={handleSubmit}>
                    <div className='formElContainer'>
                        <label htmlFor="email">Email</label>
                        <input className='formElement' type="email" value={formData.email} onChange={handleChange} name='email' id="logInEmail" />
                    </div>
                    <div className='formElContainer'>
                        <label htmlFor="password">Password</label>
                        <input className='formElement formButton' value={formData.password} onChange={handleChange} type="password" name='password' id="logInPassword" />
                    </div>
                    <div className='formElContainer'>
                        <button className='formElement formButton'>Sign in</button>
                    </div>
                    <div>
                        {message && <p>{message}</p>}
                    </div>
                    <div className='formElContainer redirectBox'><p>or</p></div>
                    <div className='formElContainer'>
                        <GooglleAuthButton googleText='Sign in with Google' />
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