import React, { useState } from 'react';
import Layout from '../../components/layout/Layout.js';
import toast from 'react-hot-toast';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import "../../styles/AuthStyles.css";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [answer, setAnswer] = useState("");


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
            const res = await axios.post(`/api/v1/auth/forgot-password`, {email, newPassword, answer});
            if(res && res.data.success){
                //Pop up Success
                toast.success(res.data && res.data.message);
                navigate("/login");
            }else {
                toast.success(res.data.message);
            }
            
        } catch (error) {
            console.log(error)
            toast.error('Something went wrong')
        }
    }
  return (
    <Layout title="Forgot Password - Ecommerce App">
        <div className='form-container'>
            <h1>RESET PASSWORD</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputName" className="form-label">Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail" placeholder='Enter your Email' required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputName" className="form-label">Secret Answer</label>
                    <input type="text" value={answer} onChange={(e) => setAnswer(e.target.value)} className="form-control" id="exampleInputEmail" placeholder='Enter your favorite sport Name' required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">New Password</label>
                    <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} className="form-control" id="exampleInputPassword" placeholder='Enter your Password' required/>
                </div>
                <button type="submit" className="btn btn-primary">RESET</button>
            </form>
        </div>
    </Layout>
  )
}

export default ForgotPassword