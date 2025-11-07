import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Components/Footer';
import HeroSlider from '../Components/HeroSlider';
import { ToastContainer } from 'react-toastify';
import Loading from '../Components/Loading';

const HomeLayout = () => {
    const {state}=useNavigation();
    return (
        <>
        <div>
          <header>
              <Navbar></Navbar>
          <HeroSlider></HeroSlider>
          </header>
        <main>
            {state=="loading"?<Loading></Loading>:<Outlet></Outlet>}
            
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