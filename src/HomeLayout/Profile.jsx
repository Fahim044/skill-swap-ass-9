import React, { useContext, useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { AuthContext } from '../Auth/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';

const Profile = () => {
    const {user,updateUser,setUser}=useContext(AuthContext);
    // console.log(user);
    const [showUpdateProfile,setShowUpdateProfile]=useState(false);
    const handleUpdateProfile=(e)=>{
        
        e.preventDefault();
        const form=e.target;
        const name=form.name.value;
        const photo=form.photo.value;
        const profile={
            displayName:name,
            photoURL:photo
        }
        updateUser(profile)
        .then(()=>{
            setUser({...user,...profile})
            toast.success("Profile Updated");
            console.log(user);
        })
        .catch(error=>{
            toast(error.message);
        })
        form.reset();
                    
    }
    return (
        <>
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <main className='w-11/12 mx-auto flex flex-col justify-center items-center space-y-4'>
        <img src={user.photoURL} alt="" />
        <p>Name: {user.displayName}</p>
        <p>Email: {user.email}</p>
        <button onClick={()=>{
                setShowUpdateProfile(!showUpdateProfile);
                console.log(showUpdateProfile);
            }} className='btn btn-primary px-25'>{showUpdateProfile ?"Collapse" :"Update Profile"}</button>
        {showUpdateProfile && 
        <form onSubmit={handleUpdateProfile}>
            <label className="label">Name</label>
                         <br />
            <input name='name' type="text" className="input" placeholder="Name" required />
            <label className="label">Photo</label>
                        <br />
            <input name='photo' type="text" className="input" placeholder="Photo URL" required />
            <button  className="btn btn-primary mt-4 w-full">Update Profile</button>
        </form>
        }
            </main>
           <footer>
             <Footer></Footer>
           </footer>
        </div>
        <ToastContainer></ToastContainer>
        </>
    );
};

export default Profile;