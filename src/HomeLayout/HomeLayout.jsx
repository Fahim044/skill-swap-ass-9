import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import HeroSlider from '../Components/HeroSlider';
import { ToastContainer } from 'react-toastify';

const HomeLayout = () => {
    return (
        <>
        <div>
          <header>
              <Navbar></Navbar>
          <HeroSlider></HeroSlider>
          </header>
        <main>
            <Outlet></Outlet>
        </main>
        <footer>
            <Footer></Footer>
        </footer>
        </div>
<ToastContainer />
        </>

    );
    
};

export default HomeLayout;