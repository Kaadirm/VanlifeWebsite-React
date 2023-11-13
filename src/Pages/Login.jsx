import React from 'react'
import { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { loginUser } from './../api';

export const loader = ({request}) => {
    return new URL(request.url).searchParams.get("message")
}

export const action = async ({request}) => {
    // const formData = await request.formData()
    // const email = formData.get("email")
    // const password = formData.get("password")
    // const data = await loginUser({email, password})
    // console.log(data)
    // return null
        //     If you want to use React <Form /> Component feature get it done these steps
        // 1- in the App.js route login should has action={loginAction}
        // 2- import beside of Login component (action as loginAction)
        // 2- opening and closing form elements should have capital letter <Form></Form>
        // 3- import Form from "react-router-dom"
        // 4- add method="post" Form element
        // 5- delete handle submit function and useStates
        // 6- delete handleChange functions, onChange and value attributes

}

function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })
    const message = useLoaderData()
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(null)
    const navigate = useNavigate()

    const handleChange = (e) => {
        const {name, value} = e.target 
        setFormData(preVal => ({
            ...preVal,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true)
        setError(null)
        loginUser(formData)
        .then(data => {
            localStorage.setItem("isLoggedIn", true)
            navigate("/host", {replace: true}) 
        }) 
        .catch((err) => setError(err))
        .finally(() => setIsSubmitting(false));
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
            {error && <h3 className='loginPage-message'>{error.message}</h3>}
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
                <button className="loginPage-btn" disabled={isSubmitting}>
                    {isSubmitting ? "Loggin in..." : "Log in"}</button>
            </form>
        </div>
        </div>
    </>
  )
}

export default Login