import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../assets/icons8-logo-50.png';
import { AuthContext } from '../Auth/AuthProvider';
import { toast } from 'react-toastify';

const Navbar = () => {
    const {user,logOut}=use(AuthContext);
    const handleLogOut=()=>{
        logOut()
        .then(()=>{
            toast.success("Logged Out Successfully");
        })
        .catch(error=>{
            toast(error.message);
        })
    }
    return (
        <div className='flex justify-between items-center w-11/12 mx-auto py-3'>
            <img src={logo} alt="" />
            <div className='flex gap-10 items-center'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/profile">My Profile</NavLink>
            </div>
            <div className='flex gap-3'>
                {
                    user ?
                    <button onClick={handleLogOut} className='btn btn-neutral'>LogOut</button>
                    :
                    <>
                    <Link to="/auth/login" className="btn  btn-primary">Login</Link>
                <Link to="/auth/signup" className="btn btn-secondary">Sign Up</Link>
                </>
                }
                
            </div>
        </div>
    );
};

export default Navbar;