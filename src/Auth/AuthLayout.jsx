import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet, useNavigation } from 'react-router';
import { ToastContainer } from 'react-toastify';
import Loading from '../Components/Loading';

const AuthLayout = () => {
    const {state}=useNavigation();
    return (
       <>
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                {state=="loading"?<Loading></Loading>:<Outlet></Outlet>}
            </main>
        </div>
        <ToastContainer></ToastContainer>
       </>
    );
};

export default AuthLayout;