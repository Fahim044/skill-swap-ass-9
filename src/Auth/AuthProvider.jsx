import React, { useEffect, useState } from 'react';
import { createContext } from "react";
import app from "../firebase/firebase.config";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut, updateProfile} from "firebase/auth";
export const AuthContext=createContext();
const auth=getAuth(app);
console.log(auth);
const AuthProvider = ({children}) => {
    const  [user,setUser]=useState(null);
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const updateUser=(updatedData)=>{
        return updateProfile(auth.currentUser,updatedData);
    }
    const logOut=()=>{
        return signOut(auth);
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
        });
        return ()=>{
            unsubscribe();
        }
    },[])
    const authData={
        user,
        setUser,
        createUser,
        updateUser,
        logOut
    }
    return (
        <AuthContext value={authData}>{children}</AuthContext>
    );
};

export default AuthProvider;