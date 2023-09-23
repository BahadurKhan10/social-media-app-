import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Signup.css";

function Signup() {
    const navigate = useNavigate();

    const handleLogin = () => {
        // Perform login logic here if needed
        // After successful login, navigate to the login page
        navigate('/login'); // Replace '/login' with the actual path to your login page
    }

    return (
        <div className='Login'>
            <div className="loginWrapper">
                <div className="left-side">
                    <div className="logo-name"></div>
                    <div className="logo-name">Sign in and enjoy <br></br> Sharing moments with your <br></br>loved ones</div>
                </div>
                <div className="right-side">
                    <div className="loginBox">
                        <input type="text" placeholder="Username" className="loginInput" />
                        <input type="text" placeholder="Email" className="loginInput" />
                        <input type="text" placeholder="Password" className="loginInput" />
                        <input type="password" placeholder="Password Again" className="loginInput" />
                        <button onClick={handleLogin} className="loginButton">Sign up</button>

                        {/* Navigate to the login page on button click */}
                        <button className="loginRegisterButton" onClick={handleLogin}>Log into Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup;
