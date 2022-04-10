import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user]=useAuthState(auth)
    const [email,setEmail]=useState('')
    const [name,setName]=useState('')
    const [password,setAdress]=useState('')
    const [confirmPassword,setPhone]=useState('')
    const [erorr,setErorr]=useState('')

    const handleEmail=(e)=>{
        setEmail(e.target.value);
    }
    const handleAdress=(e)=>{
        setAdress(e.target.value);
    }
    const handlePhone=(e)=>{
        setPhone(e.target.value);
    }
    const handleName=(e)=>{
        setName(e.target.value);
    }

    const handleCreateUser=e=>{
        e.preventDefault();
       
    }
    return (
        <div>
            <div className='form-container'>
                <div>
                    <h2 className='form-title'>This is shipment information</h2>
                    <form onSubmit={handleCreateUser} >
                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input value={user?.email} readOnly type="text" name="" id="" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="text">Your name</label>
                            <input onBlur={handleName} type="text" name="" id="" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="text">Adress</label>
                            <input onBlur={handleAdress} type="text" name="" id="" required/>
                        </div>
                        <div className="input-group">
                            <label htmlFor=" Confirm password">Phone</label>
                            <input onBlur={handlePhone} type="number" name="" id="" required />
                        </div>
                        <input className='form-submit' type="submit" value="Shipping" />
                    </form>
                </div>
            </div>
      
        </div>
    );
};

export default Shipment;