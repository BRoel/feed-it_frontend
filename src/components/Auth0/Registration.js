import React from 'react';
import LoginButton from './LoginButton';

const Registration = () => {


    return (
        <div className='register-container'>
            <div className='register-design'>
                <img className='register-img' src='/images/James H. Roel USS Colorado.jpeg'></img>
            </div>
            <div className='register-login'>
                <div className='register-login-box'>
                    <h1>Salute</h1>
                    <LoginButton/>
                </div>
            </div>
        </div>
    );
}

export default Registration