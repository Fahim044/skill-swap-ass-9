import React, { useEffect, useState } from 'react';
import { createContext } from "react";
import app from "../firebase/firebase.config";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup, signOut, updateProfile,GoogleAuthProvider, signInWithEmailAndPassword, sendPasswordResetEmail} from "firebase/auth";

export const AuthContext=createContext();
const auth=getAuth(app);
// console.log(auth);
const googleProvider=new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const  [user,setUser]=useState(null);
    const [collectEmail,setCollectEmail]=useState("");
    const [loading,setLoading]=useState(true);
    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const updateUser=(updatedData)=>{
        return updateProfile(auth.currentUser,updatedData);
    }
    const logOut=()=>{
        return signOut(auth);
    }
    const signInWithGoogle=()=>{
        return signInWithPopup(auth,googleProvider);
    }
    const signIn=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    const resetPass=(email)=>{
        return sendPasswordResetEmail(auth,email);
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        });
        return ()=>{
            unsubscribe();
        }
    },[])
    const authData={
        user,
        setUser,
        loading,
        setLoading,
        createUser,
        updateUser,
        logOut,
        signInWithGoogle,
        signIn,
        resetPass,
        collectEmail,
        setCollectEmail
    }
    return (
        <AuthContext value={authData}>{children}</AuthContext>
    );
};

export default AuthProvider;