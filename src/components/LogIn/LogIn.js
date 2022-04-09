import React from 'react';
import { Link } from 'react-router-dom';
import './LogIn.css'

const LogIn = () => {
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>This is log in</h2>
                <form >
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="" id="" required />
                    </div>
                    <input className='form-submit' type="submit" value="LogIn" required />
                </form>
                <p>
                    New to ema-john? <Link className='form-link' to='/singup'>Create account</Link>
                </p>
            </div>
        </div>
    );
};

export default LogIn;