import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from './AuthProvider';
import { Link, } from 'react-router';


const ForgetPassword = () => {
    
    
    const {resetPass,collectEmail}=useContext(AuthContext);
    // console.log(collectEmail);
    const handleResetPass=(e)=>{
         e.preventDefault();
    const form=e.target;
       
    const email=form.email.value;
    resetPass(email)
    .then(()=>{

        toast.success("Please Check Your Email to Reset Password");
        window.open("https://mail.google.com/","_blank");
    }).catch(error=>{
        toast.error(error.message);
    })
        form.reset();
        

    }
    return (
        <>
        <div className='flex flex-col justify-center items-center w-11/12 mx-auto space-y-3'>
            <h2 className='font-bold text-2xl text-center'>Reset Your Password</h2>
            <form onSubmit={handleResetPass}>
            <label className="label">Email</label>
             <br />
    <input name='email' type="email" className="input" placeholder="Email" defaultValue={collectEmail} required />
       <button type='submit' className="btn btn-neutral mt-4 w-full"> Reset Password</button>
         </form>
        </div>
        
        </>
    );
};

export default ForgetPassword;