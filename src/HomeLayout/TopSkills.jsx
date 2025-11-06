import React, { use } from 'react';
import Skill from './skill';
const skillsPromise=fetch("/topSkills.json").then(res=>res.json());

const TopSkills = () => {
        const topSkills=use(skillsPromise);
    
    return (
        <div>
            <div className='w-11/12 mx-auto py-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
        {
            topSkills.map(skill=><Skill skill={skill} key={skill.skillId}></Skill>)
        }
            </div>
        </div>
    );
};

export default TopSkills;