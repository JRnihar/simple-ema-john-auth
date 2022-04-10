
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './SignUo.css'
import auth from '../../firebase.init'

const SignUp = () => {
    const navigate=useNavigate()
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [confirmPassword,setConfirmPassword]=useState('')
    const [erorr,setErorr]=useState('')
    const [createUserWithEmailAndPassword,user] = useCreateUserWithEmailAndPassword(auth);


    const handleEmail=(e)=>{
        setEmail(e.target.value);
    }
    const handlepassword=(e)=>{
        setPassword(e.target.value);
    }
    const handleConfirmPAss=(e)=>{
        setConfirmPassword(e.target.value);
    }
    if(user){
        navigate('/')
    }



    const handleCreateUser=e=>{
        e.preventDefault();
        createUserWithEmailAndPassword(email,password)
    }

    return (
        <div>
            <div className='form-container'>
                <div>
                    <h2 className='form-title'>This is sign up</h2>
                    <form onSubmit={handleCreateUser} >
                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input onBlur={handleEmail} type="text" name="" id="" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input onBlur={handlepassword} type="password" name="" id="" required/>
                        </div>
                        <div className="input-group">
                            <label htmlFor=" Confirm password"> Confirm Password</label>
                            <input onBlur={handleConfirmPAss} type="password" name="" id="" required />
                        </div>
                        <input className='form-submit' type="submit" value="LogIn" />
                    </form>
                    <p>
                        Already have an account? <Link className='form-link' to='/login'>Log In</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;