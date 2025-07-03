import { useState } from 'react';
import axios from 'axios';
import GooglleAuthButton from '../components/googleButton';
import LogoTemplate from '../components/logoTemplate';
import { RegisterData } from '../interface/appInterface';
import './authPage.css';

const RegisterPage: React.FC = () => {
    const [formData, setFormData] = useState<RegisterData>({
        f_name: '',
        l_name: '',
        email: '',
        password: '',
        confirm_password: ''
    });

    const [message, setMessage] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (formData.password !== formData.confirm_password) {
            alert('passwords do not match');
        } else {
            try {
                const res = await axios.post('http://127.0.0.1:5000/register', formData, {
                    withCredentials: true,
                    headers: {
                        'Authorization': 'Bearer your_token',
                        'Content-Type': 'application/json'
                    }
                })
                setMessage(res.data.message)
                window.location.href = '/'
            } catch (err: any) {
                if (err.response?.data?.error) {
                    setMessage(err.response.data.error);
                } else {
                    setMessage('something went wrong');
                }
            }
        }
    }

    return (
        <div className='authPage'>
            <div className="formContainer">
                <LogoTemplate logoText='Sign up today' />
                <form onSubmit={handleSubmit}>
                    <div className='authContainer'>
                        <div className='formElContainer'>
                            <label htmlFor="firstName">First Name</label>
                            <input className='formElement' type="text" id="fName" value={formData.f_name} onChange={handleChange} name="f_name" />
                        </div>
                        <div className='formElContainer'>
                            <label htmlFor="lastName">Last Name</label>
                            <input className='formElement' id="lName" type="text" value={formData.l_name} onChange={handleChange} name="l_name" /></div>
                        <div className='formElContainer'>
                            <label htmlFor="email">Email</label>
                            <input className='formElement' id="user_email" type="email" value={formData.email} onChange={handleChange} name='email' />
                        </div>
                        <div className='formElContainer'>
                            <label htmlFor="password">Password</label>
                            <input className='formElement' id="user_password" type="password" value={formData.password} onChange={handleChange} name='password' />
                        </div>
                        <div className='formElContainer'>
                            <label htmlFor="ConfrimPassword">Confirm Password</label>
                            <input className='formElement' type="password" value={formData.confirm_password} name='confirm_password' onChange={handleChange} id="confirm_password" />
                        </div>
                        <div className='formElContainer'>
                            <button className='formElement'>Sign up</button>
                        </div>
                        <div>
                            {message && <p>{message}</p>}
                        </div>
                        <div className='formElContainer redirectBox'><p>or</p></div>
                        <div className='formElContainer'>
                            <GooglleAuthButton googleText='Sign up with Google' />
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