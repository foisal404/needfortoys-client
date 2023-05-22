import { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
export const authContext=createContext(null)

const Authprovider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true)
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const GoogleUp=()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const signUp=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const updateUser=(name,photo)=>{
        setLoading(true)
        return updateProfile(auth.currentUser,{
            displayName: `${name}`, photoURL: `${photo}`
        })
    }
    const logOut=()=>{
        return signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            setLoading(false)
            setUser(currentUser)
            // console.log("User state change")
        })
        return()=>{
            return unsubscribe();
        }
    },[])
    const value={
        user,
        loading,
        GoogleUp,
        signUp,
        signIn,
        updateUser,
        logOut
    }
    return (
        <authContext.Provider value={value} >
            {children}
        </authContext.Provider>
    );
};

export default Authprovider;