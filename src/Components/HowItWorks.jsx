import { MoveDown } from 'lucide-react';
import React from 'react';

const HowItWorks = () => {
    return (
        <div className='w-11/12 mx-auto py-4'>
            <h2 className='text-center font-bold text-3xl my-5'>How SkillSwap Works</h2>
            <div className='flex flex-col gap-4  items-center'>
                <div className='text-blue-800 font-semibold text-2xl border shadow-xl rounded-2xl p-7 text-center max-w-fit space-y-4'>
            <p>Create A Profile</p>
        <h3 className='text-white'>Sign Up,Book your Skill What you want to learn</h3>
                
                </div>
                <MoveDown />
                <div className='text-blue-800 font-semibold text-2xl border shadow-xl rounded-2xl p-7 text-center max-w-fit space-y-4'>
            <p>Browse Local Skills</p>
            <h3 className='text-white'>Explore Available Skills locally or Globally</h3>
                </div>
                <MoveDown />
                <div className='text-blue-800 font-semibold text-2xl border shadow-xl rounded-2xl p-7 text-center max-w-fit space-y-4'>
            <p>Rate and Review</p>
            <h3 className='text-white'>Give Ratings to Inspire Us and Share With Your Friends</h3>
                </div>

            </div>
        </div>
    );
};

export default HowItWorks;