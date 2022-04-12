import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div className='form-container'>
            <div className='form-shadow'>

            </div>
            <div className='form-shadow'>
            <div>
            <h2 className='form-title'>Login</h2>
                <form>
                <div className="input-group">
                <label htmlFor="email">Email</label>
                <input type="email" name='email' placeholder='email'/>
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' placeholder='password'/>
                </div>
                <div className="input-submit">
                    <input className='from-submit' type="submit" value="Login"/>
                </div>
                </form>
                    <p><span className='form-link-text'>New To Ema-John?</span> <Link className='form-link' to="/signup">Create an account</Link></p>
                    <div className='form-line'>
                        <div className='line'></div>
                        <div>or</div>
                        <div className='line'></div>
                   </div>
            </div>
            </div>
        </div>
    );
};

export default Login;