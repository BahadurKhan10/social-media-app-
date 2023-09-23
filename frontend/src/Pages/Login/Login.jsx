import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Login.css";

function Login() {
    const navigate = useNavigate();

    const handleLogin = () => {
        // Perform login logic here if needed
        // After successful login, navigate to the home page
        navigate('/'); // Replace '/home' with the actual path to your home page
    }

    return (
        <div className='Login'>
            <div className="loginWrapper">
                <div className="left-side">
                    <div className="logo-name">Sign in and enjoy <br></br> Sharing moments with your <br></br>loved ones</div>
                    <div className="logo-dec"> </div>
                </div>
                <div className="right-side">
                    <div className="loginBox">
                        <input type="text" placeholder="Email" className="loginInput" />
                        <input type="password" placeholder="Password" className="loginInput" />
                        <button className="loginButton" onClick={handleLogin}>Log In</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegisterButton">Create a New Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
