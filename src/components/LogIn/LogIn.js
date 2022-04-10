import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link,useLocation,useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './LogIn.css'

const LogIn = () => {
    const navigate=useNavigate()
    const location=useLocation()
    let from=location.state?.from?.pathname||'/'
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      if (loading) {
        return <p>Loading...</p>;
      }

    const handleEmail=(e)=>{
        setEmail(e.target.value);
    }
    const handlepassword=(e)=>{
        setPassword(e.target.value);
    }
    const handleCreateUser=e=>{
        e.preventDefault();
        signInWithEmailAndPassword(email,password)
        
    }
    if(user){
        navigate(from,{replace:true})
    }
    return (
        <div className='form-container'>
            <div>
            <p style={{color: 'red'}}> {error?.message}</p>
                <h2 className='form-title'>This is log in</h2>
                <form onSubmit={handleCreateUser} >
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmail} type="email" name="" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlepassword} type="password" name="" id="" required />
                       
                    </div>
                    {/* <p>Error: {error.message}</p> */}
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