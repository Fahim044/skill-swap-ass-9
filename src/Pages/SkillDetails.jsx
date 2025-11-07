import React, { use, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { toast, ToastContainer } from 'react-toastify';
const skillsPromise=fetch("/skills.json").then(res=>res.json());

const SkillDetails = () => {
        const skills=use(skillsPromise);
    const {id}=useParams();
    const [skill,setSkill]=useState({});
    useEffect(()=>{
        const skillDetail=skills.find(skill=>skill.skillId==id);
        setSkill(skillDetail);
    },[skills,id]);
    // console.log(id);
    const {
skillId,
skillName,
providerName,
providerEmail,
price,
rating,
slotsAvailable,
description,
image,
category}=skill;
    return (
        <>
        <div>
            <header>
              <Navbar></Navbar>
          </header>
          <main className='w-11/12 mx-auto py-3 '>
        <h1 className='font-bold text-center text-3xl'>Skill Details</h1>
        <div className='flex flex-col items-center justify-center space-y-3 font-semibold text-lg border border-blue-400 py-3 mb-4'>
<img src={image} alt="" />
<p>Skill Id:{skillId}</p>
<p>{skillName}</p>
<p>Provider: {providerName}</p>
<p>Provider Email: {providerEmail}</p>
<p>Price: {price}</p>
<p>Rating: {rating}</p>
<p>Slots Available: {slotsAvailable}</p>
<p>Description: {description}</p>
<p>Category: {category}</p>

        </div>
            <h2 className='font-bold text-center text-3xl'>Book Session</h2>
        <div className='card-body flex flex-col justify-center items-center'>
            <form onSubmit={(e)=>{
                e.preventDefault();
                toast.success("Session Booked")
            }}>
                 <label className="label">Name</label>
                 <br />
          <input name='name' type="text" className="input" placeholder="Name" required />
                <label className="label">Email</label>
                <br />
          <input name='email' type="email" className="input" placeholder="Email" required />
          <button className="btn btn-neutral mt-4 w-full">Submit</button>
            </form>
        </div>
          </main>
          
          <footer>
            <Footer></Footer>
        </footer>
        </div>
        <ToastContainer></ToastContainer>
        </>
    );
};

export default SkillDetails;