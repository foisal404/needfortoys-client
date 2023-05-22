import { useContext, useEffect, useState } from "react";
import { authContext } from "../../provider/Authprovider";
import Toycart from "./Toycart";


const Mytoys = () => {
    const {user}=useContext(authContext)
    const [toys,setToys]=useState([])
    const handleToys=(id)=>{
        const remaining =toys.filter(toy=>toy._id!==id)
        setToys(remaining)
    }
    useEffect(()=>{
        fetch(`https://mango-toys-server.vercel.app/toys?seller_email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>setToys(data))
    },[])
    return (
        <div className="p-5  px-24 grid grid-cols-1 gap-5">
            <h2 className="text-center text-4xl py-5 font-bold font-serif">My Toys</h2>
            {
                toys.map(toy=><Toycart key={toy._id} toy={toy} handleToys={handleToys}></Toycart>)
            }
        </div>
    );
};

export default Mytoys;