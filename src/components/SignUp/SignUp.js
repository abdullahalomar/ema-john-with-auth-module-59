import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className='form-container'>
            <div className='form-shadow'>

            </div>
            <div className='form-shadow'>
            <div>
            <h2 className='form-title'>Sign up</h2>
                <form>
                <div className="input-group">
                <label htmlFor="email">Email</label>
                <input type="email" name='email' placeholder='email'/>
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' placeholder='password'/>
                </div>
                <div className="input-group">
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input type="password" name='confirm-password' placeholder='confirm-password'/>
                </div>
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