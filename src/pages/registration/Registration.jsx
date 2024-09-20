
import React, { useState } from 'react';
import './style.css';
import axios from 'axios';
// import FarmerCommunity from './community.jpg';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
    const [loading,setloading] = useState(false)
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phonenumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('setller');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setloading(true)
        try {
            const responce= await axios.post('https://kalkiagri-backend.onrender.com/api/new/kalki/user', { username, email, password, userType, phonenumber });
            if(responce.status ==200){
                alert('success')
                navigate('/')
                setloading(false)
            }
        } catch (error) {
            console.error(error);
            setloading(false)
        }
    };

    return (
     <section className="register">
            <div className="banner-top p-3">
                <h1 className="fs-1 fw-bold text-light">
                Register
                </h1>
            </div> 
        <div className="Register-Container ">
            <form onSubmit={handleSubmit} validate>
            <h1 className="Hero-Heading fs-1">Join Us and Grow Together: Be a Part of Our Community</h1>
            <div className='inputs'>
            
            <input
                type="text"
                required
                placeholder="Name"
                minLength={5}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                required
                minLength={8}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

                <input
                type="tel"
                placeholder="+91 000-0000-000"
                required
                minLength={10}
                maxLength={13}
                value={[phonenumber]}
                onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <select value={userType}  onChange={(e) => setUserType(e.target.value)}>
                <option value="" disabled >Select Buyer or Seller</option>
                <option value="buyer">Buyer</option>
                <option value="seller">Seller</option>
                
            </select></div>
                
                <button type="submit">
                {
                     loading?"Please wait...":"Register"
                }
                </button>
            </form>
            <img src='https://github.com/Nareshmohan0023/Bhaskar_sirs_Kalki_Agri/blob/main/src/pages/Register/community.jpg?raw=true' alt="" className="Hero-img"  />
        </div>
           
     </section>
    );
};

export default Registration;
