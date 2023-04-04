import React, { useState } from 'react';
import Layout from '../../components/layout/Layout.js';
import toast from 'react-hot-toast';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import "../../styles/AuthStyles.css";
import { useAuth } from '../../context/auth.js';

const Login = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [auth, setAuth] = useAuth();
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
            const res = await axios.post(`/api/v1/auth/login`, {email, password});
            if(res && res.data.success){
                //Pop up Success
                toast.success(res.data && res.data.message);
                setAuth({
                    ...auth,
                    user:res.data.user,
                    token:res.data.token,
                });
                localStorage.setItem('auth', JSON.stringify(res.data));
                navigate('/');
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
    <Layout title="Login - Ecommerce App">
        <div className='form-container'>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputName" className="form-label">Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail" placeholder='Enter your Email' required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleInputPassword" placeholder='Enter your Password' required/>
                </div>
                <button type="submit" className="btn btn-primary">LOGIN</button>
            </form>
        </div>
    </Layout>
  )
}

export default Login