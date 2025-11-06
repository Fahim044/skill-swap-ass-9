import React, { use } from 'react';
import Skill from './skill';
const skillsPromise=fetch("/skills.json").then(res=>res.json());
const PopularSkills = () => {
    const skills=use(skillsPromise);
    // console.log(skills);
    return (
        <div>
            
            <div className='w-11/12 mx-auto py-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
        {
            skills.map(skill=><Skill skill={skill} key={skill.skillId}></Skill>)
        }
            </div>
        </div>
    );
};

export default PopularSkills;