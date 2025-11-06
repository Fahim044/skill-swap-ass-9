import React from 'react';

const Skill = ({skill}) => {
    // console.log(skill);
    const {image,skillName,rating,price}=skill;
    return (
        <div className='p-3 shadow-2xl space-y-3 flex flex-col'>
            <img className='mx-auto' src={image} alt="" />
            <h3 className='font-bold  text-lg'>{skillName}</h3>
            <p>Rating:<span className='font-bold'>{rating}</span></p>
            <p>Price:<span className='font-bold'>{price}</span></p>
            <button className='mx-auto btn btn-success  mt-auto  '>View Details</button>
        </div>
    );
};

export default Skill;