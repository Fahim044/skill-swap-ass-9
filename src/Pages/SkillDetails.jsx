import React, { use, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
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
        <div>
            <header>
              <Navbar></Navbar>
          </header>
          <main className='w-11/12 mx-auto py-3 border border-blue-400'>
        <h1 className='font-bold text-center text-3xl'>Skill Details</h1>
        <div className='flex flex-col items-center justify-center space-y-3 font-semibold text-lg'>
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
          </main>
          <footer>
            <Footer></Footer>
        </footer>
        </div>
    );
};

export default SkillDetails;