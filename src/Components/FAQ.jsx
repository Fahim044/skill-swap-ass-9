import React from 'react';

const FAQ = () => {
    return (
        <div className='w-11/12 mx-auto py-4'>
            <h2 className='text-center font-bold text-3xl my-5'>FAQ</h2>
            <div className='flex flex-col gap-4  items-center'>
                <div className='text-blue-800 font-semibold text-2xl border shadow-xl rounded-2xl p-7 text-center max-w-fit space-y-4'>
            <p>What is SkillSwap?</p>
            <p className='text-white'>Answer: An interactive platform for individuals to offer, learn, and trade skills within their local area.</p>
                </div>
                <div className='text-blue-800 font-semibold text-2xl border shadow-xl rounded-2xl p-7 text-center max-w-fit space-y-4'>
            <p>Is SkillSwap Free For Students?</p>
            <p className='text-white'>Answer: Yes,it is free for Students.</p>
                </div>
                <div className='text-blue-800 font-semibold text-2xl border shadow-xl rounded-2xl p-7 text-center max-w-fit space-y-4'>
            <p>How May I Know About The Support Session?</p>
            <p className='text-white'>Answer: You have to login,or signUp(if you have not an account yet),then Our Team Members will Contact You if you submit a request from our request form.</p>
                </div>
                
            </div>
        </div>
    );
};

export default FAQ;