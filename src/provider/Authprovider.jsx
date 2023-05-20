import { createContext, useState } from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
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
    const value={
        user,
        loading,
        GoogleUp
    }
    return (
        <authContext.Provider value={value} >
            {children}
        </authContext.Provider>
    );
};

export default Authprovider;