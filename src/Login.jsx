import React from 'react';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='login-page'>
            <div className='wrapper'>
                <form action=''>
                    <h1>Login</h1>
                    <div className='input-box'>
                        <input type='text' placeholder='Username' required />
                        <FaUser className='icon' />
                    </div>
                    <div className='input-box'>
                        <input type='password' placeholder='Password' required />
                        <FaLock className='icon' />
                    </div>
                    <div className='remember-forgot'>
                        <label> <input type= "checkbox"/>"Remember me"</label>
                        <a href='hello' >Forgot password</a>
                    </div>
                    <Link to="/home">
                        <button className='button' type='submit'>Login</button>
                    </Link>
                    <div className="register-link">
                        <p>Don't have an account? <a href='hello'>Register</a></p>
                    </div>
                </form>

            </div>
        </div>
    );
}

export default Login;