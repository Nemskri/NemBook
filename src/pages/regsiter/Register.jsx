import React from 'react'
import './register.scss'
import { Link } from 'react-router-dom'

function Register() {
    return <div className="register">
        <div className="card">
            <div className="left">
                <h1>Register</h1>
                <form>
                    <input type="text" placeholder='Username' />
                    <input type="text" placeholder='Email' />
                    <input type="text" placeholder='password' />
                    <input type="text" placeholder='Name' />
                    <button>Submit</button>
                </form>
            </div>
            <div className="right">
                <h1>Nems Book</h1>
                <p>Welcome to our platform! To get started, please fill out the registration form below with your personal information. We take your privacy seriously and will never share your information with third parties without your consent.</p>
                <span>Do you have an Account?</span>
                <Link to="/login">
                    <button>Login</button>
                </Link>
            </div>
        </div>
    </div>
}

export default Register
