import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
// import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user] = useAuthState(auth);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    // const navigate = useNavigate();


    const handleNameBlur = event => { 
        setName(event.target.value);
    }

    const handleAddressBlur = event => {
        setAddress(event.target.value);
    }

    const handlePhoneNumberBlur = event => {
        setPhone(event.target.value);
    }

    const handleCreateUser = event => {
        event.preventDefault();
        const shipping = { name, email, phone, address };
        console.log(shipping);
    }

    return (
        <div className='form-container'>
            <div className='form-shadow'>

            </div>
            <div className='form-shadow'>
            <div>
            <h2 className='form-title'>Shipping Information</h2>
                <form onSubmit={handleCreateUser}>
                <div className="input-group">
                <label htmlFor="name">Your Name</label>
                <input onBlur={handleNameBlur} type="text" name='name' placeholder='name' required/>
                </div>
                <div className="input-group">
                <label htmlFor="email">Your Email</label>
                <input value={user?.email} readOnly type="email" name='email' placeholder='email' required/>
                </div>
                <div className="input-group">
                    <label htmlFor="password">Address</label>
                    <input onBlur={handleAddressBlur} type="text" name='address' placeholder='address' required/>
                </div>
                <div className="input-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input onBlur={handlePhoneNumberBlur} type="text" name='Phone' placeholder='phone' required/>
                        </div>
                        <h5 style={{color: 'red'}}>{ error }</h5>
                <div className="input-submit">
                    <input className='from-submit' type="submit" value="Add Shipping"/>
                </div>
                </form>
                    {/* <div className='form-line'>
                        <div className='line'></div>
                        <div>or</div>
                        <div className='line'></div>
                    </div>
                    <button className="input-button"> Continue With Google</button> */}
            </div>
            </div>
        </div>
    );
};

export default Shipment;