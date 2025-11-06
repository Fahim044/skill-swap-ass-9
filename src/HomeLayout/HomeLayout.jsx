import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import HeroSlider from '../Components/HeroSlider';

const HomeLayout = () => {
    return (
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
    );
};

export default HomeLayout;