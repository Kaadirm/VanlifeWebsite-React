import React from 'react'
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

export const loader = ({request}) => {
    return new URL(request.url).searchParams.get("message")
}

function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const message = useLoaderData()

    const handleChange = (e) => {
        const {name, value} = e.target 
        setFormData(preVal => ({
            ...preVal,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
    }

    const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    };
  return (
    <>
        <div className="loginPage-container">
        <div className="loginPage-frame">
            <h1 className='loginPage-header'>Sign in to your account</h1>
            {message && <h3 className='loginPage-message'>{message}</h3>}
            <form onSubmit={handleSubmit}>
                <div>
                    <input 
                    type="email" 
                    id="email"
                    name="email" 
                    value={formData.email}
                    placeholder="email"
                    className="loginPage-input loginPage-email"
                    onChange={handleChange}>
                    </input>
                </div>
                <div className="loginPage-password-container">
                    <input 
                        type={showPassword ? 'text' : 'password'} 
                        id="password"
                        name="password"
                        value={formData.password}
                        placeholder="password"  
                        className="loginPage-input loginPage-password"
                        onChange={handleChange}>                 
                    </input>
                    <span className="loginPage-toggle-password" onClick={togglePasswordVisibility}>
                    {showPassword ? '👁️' : '🔒'}
                    </span>
                </div>
                <button className="loginPage-btn">Log in</button>
            </form>
        </div>
        </div>
    </>
  )
}

export default Login