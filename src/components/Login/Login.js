import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();

    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    if (user) {
        navigate(from, {replace: true});
    }

    const handleUserSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    return (
        <div className='form-container'>
            <div className='form-shadow'>

            </div>
            <div className='form-shadow'>
            <div>
            <h2 className='form-title'>Login</h2>
                <form onSubmit={handleUserSignIn}>
                <div className="input-group">
                <label htmlFor="email">Email</label>
                <input onBlur={handleEmailBlur} type="email" name='email' placeholder='email' required/>
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input onBlur={handlePasswordBlur} type="password" name='password' placeholder='password' required/>
                        </div>
                        <h5 style={{ color: 'red' }}>{error?.message}</h5>
                        {
                            loading && <h5>Loading...</h5>
                        }
                <div className="input-submit">
                    <input className='from-submit' type="submit" value="Login"/>
                </div>
                </form>
                    <p><span className='form-link-text'>New To Ema-John?</span> <Link className='form-link' to="/signup">Create an account</Link></p>
                    <div className='form-line'>
                        <div className='line'></div>
                        or
                        <div className='line'></div>
                    </div>
                    
                    <button className="input-button"> Continue With Google</button>
                
            </div>
            </div>
        </div>
    );
};

export default Login;