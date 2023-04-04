import React, { useState } from 'react';
import Layout from '../../components/layout/Layout.js';
import toast from 'react-hot-toast';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import "../../styles/AuthStyles.css";


const Register = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [phone,setPhone] = useState("");
    const [address,setAddress] = useState("");
    const [answer,setAnswer] = useState("");
    const navigate = useNavigate();


    // Form Function Test Data 
    /**const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, password, phone, address);
        //Pop up Success
        toast.success('Registered Successfully');
    }*/
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`/api/v1/auth/register`, {name, email, password, phone, address, answer});
            if(res && res.data.success){
                //Pop up Success
                toast.success(res.data.message);
                navigate('/login');
            }else {
                toast.success(res.data.message);
            }
            
        } catch (error) {
            console.log(error)
            toast.error('Something went wrong')
        }
    }
    //console.log(process.env.REACT_APP_API)
  return (
    <Layout title="Register - Ecommerce App">
        <div className='form-container'>
            <h1>Register Page</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputName" className="form-label">Name</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" id="exampleInputName" placeholder='Enter your Name' required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputName" className="form-label">Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail" placeholder='Enter your Email' required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleInputPassword" placeholder='Enter your Password' required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputName" className="form-label">Phone</label>
                    <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control" id="exampleInputPhone" placeholder='Enter your Phone' required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputName" className="form-label">Address</label>
                    <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} className="form-control" id="exampleInputAddress" placeholder='Enter your Address' required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputName" className="form-label">Secret Question :</label>
                    <input type="text" value={answer} onChange={(e) => setAnswer(e.target.value)} className="form-control" id="exampleInputAddress" placeholder='What is your favorite sport ?' required/>
                </div>
                <button type="submit" className="btn btn-primary">REGISTER</button>
            </form>
        </div>
    </Layout>
  );
};

export default Register;