import React, { Suspense } from 'react';
import { Navigate } from 'react-router';
import PopularSkills from '../HomeLayout/PopularSkills';
import Loading from './Loading';
import TopSkills from '../HomeLayout/TopSkills';

const Home = () => {
    return (
        
        <div>
            <h1 className='text-center font-bold text-3xl mt-3'>Popular Skills</h1>
            <Suspense fallback={<Loading></Loading>}>
            <PopularSkills></PopularSkills>
            </Suspense>
            <h1 className='text-center font-bold text-3xl mt-3'>Top Rated Providers</h1>
            <Suspense fallback={<Loading></Loading>}>
                <TopSkills></TopSkills>
            </Suspense>
            <Navigate to="/"></Navigate>
        </div>
    );
};

export default Home;