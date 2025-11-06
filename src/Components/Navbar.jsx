import React from 'react';
import { NavLink } from 'react-router';
import logo from '../assets/icons8-logo-50.png';
const Navbar = () => {
    return (
        <div className='flex justify-between items-center w-11/12 mx-auto py-3'>
            <img src={logo} alt="" />
            <div className='flex gap-10 items-center'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/profile">My Profile</NavLink>
            </div>
            <div className='flex gap-3'>
                <NavLink to="/auth/login" className="btn  btn-primary">Login</NavLink>
                <NavLink to="/auth/signup" className="btn btn-secondary">Sign Up</NavLink>
            </div>
        </div>
    );
};

export default Navbar;