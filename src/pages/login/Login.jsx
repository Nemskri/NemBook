import React from 'react'
import "./login.scss"
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../../Context'

function Login() {

    const { login, currentUser } = useGlobalContext();



    return <div className="login">
        <div className="card">
            <div className="left">
                <h1>Greetings User.</h1>
                <p>Welcome to our messenger platform. We're excited to have you here and can't wait for you to start chatting with your friends and family. To get started, simply create an account or log in if you already have one.</p>
                <span>Don't have an Account?</span>
                <Link to='/register'>
                    <button>Register</button>
                </Link>
            </div>
            <div className="right">
                <h1>Login</h1>
                <form>
                    <input type="text" placeholder='Username or Email' />
                    <input type="text" placeholder='password' />
                    <button onClick={login}>Submit</button>

                </form>

            </div>
        </div>
    </div>
}

export default Login
