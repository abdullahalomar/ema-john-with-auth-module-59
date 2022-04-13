import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

    const handleEmailBlur = event => { 
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }
    if (user) {
        navigate('/shop');
    }

    const handleCreateUser = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError('Your password did not match');
            return;
        }
        if (password.length < 6) {
            setError('password must be 6 characters or longer')
        }
        createUserWithEmailAndPassword(email, password);

    }
    
    return (
        <div className='form-container'>
            <div className='form-shadow'>

            </div>
            <div className='form-shadow'>
            <div>
            <h2 className='form-title'>Sign up</h2>
                <form onSubmit={handleCreateUser}>
                <div className="input-group">
                <label htmlFor="email">Email</label>
                <input onBlur={handleEmailBlur} type="email" name='email' placeholder='email' required/>
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input onBlur={handlePasswordBlur} type="password" name='password' placeholder='password' required/>
                </div>
                <div className="input-group">
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input onBlur={handleConfirmPasswordBlur} type="password" name='confirm-password' placeholder='confirm-password' required/>
                        </div>
                        <h5 style={{color: 'red'}}>{ error }</h5>
                <div className="input-submit">
                    <input className='from-submit' type="submit" value="Sign Up"/>
                </div>
                </form>
                    <p><span className='form-link-text'>Already Have an account</span> <Link className='form-link' to="/login">Login</Link></p>
                    <div className='form-line'>
                        <div className='line'></div>
                        <div>or</div>
                        <div className='line'></div>
                    </div>
                    <button className="input-button"> Continue With Google</button>
            </div>
            </div>
        </div>
    );
};

export default SignUp;