import { createContext } from 'react';
export const authContext=createContext(null)

const Authprovider = ({children}) => {
    const value={
        name:"mint"
    }
    return (
        <authContext.Provider value={value} >
            {children}
        </authContext.Provider>
    );
};

export default Authprovider;