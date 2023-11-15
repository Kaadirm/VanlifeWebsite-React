import React from 'react'
import { useState} from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { loginUser } from './../api';

export const loader = ({request}) => {
    if(localStorage.getItem('isLoggedIn')){
        return 
    }
    return new URL(request.url).searchParams.get("message")
    
}   

// export const action = async ({request}) => {
//     const formData = await request.formData()
//     const email = formData.get("email")
//     const password = formData.get("password")
//     try{
//         const data = await loginUser({email, password})
//         localStorage.setItem("loggedIn", true)
//         return redirect("/host")
//     }catch(err){
//         return err.message
//     }

//     return null
//             If you want to use React <Form /> Component feature get it done these steps
//         1- in the App.js route login should has action={loginAction}
//         2- import beside of Login component (action as loginAction)
//         2- opening and closing form elements should have capital letter <Form></Form>
//         3- import Form from "react-router-dom"
//         4- add method="post" Form element
//         5- delete handle submit function and useStates
//         6- delete handleChange functions, onChange and value attributes
//         7- import useActionData from  "react-router-dom"
//         8- put useActionData() in a state then use it to show error message to Users
//         9- You can disable login button during submit by using useNavigation() 
//              import it from "react-router-dom, put in a state in Login Component function
//              then use it like disabled={navigation.state}
// }

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

    
    // useEffect(() => {
    //     if (isLoggedIn) {
    //       navigate(-1, { replace: true });
    //     }
    // }, [isLoggedIn, navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true)
        setError(null)
        loginUser(formData)
        .then(data => {
            localStorage.setItem("isLoggedIn", true)
            navigate(-1, {replace: true}) 
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