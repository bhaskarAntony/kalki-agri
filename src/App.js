import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/Register/Register';
import Dashboard from './pages/Dashboard/Dashboard';
import Header from './components/header/Header';
import whatsappIcon from './assets/images/whatsapp.png'
import Footer from './components/footer/Footer';
import Aos from 'aos';

const App = () => {
    useEffect(()=>{
        Aos.init()
    }, [])
    return (
    <Fragment>
       
     
        <Router>
        <Link to="https://whatsapp.com/channel/0029VakbaFG0lwgyvCjOiX2G" className='whatsapp'>
     <img src={whatsappIcon} alt="whatsapp" />
     </Link>
        
          <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            </Routes>
            <Footer/>
        </Router>
    </Fragment>
    );
};

export default App;
