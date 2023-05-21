import { useContext, useEffect, useState } from "react";
import { authContext } from "../../provider/Authprovider";
import Toycart from "./Toycart";


const Mytoys = () => {
    const {user}=useContext(authContext)
    const [toys,setToys]=useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/toys?seller_email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>setToys(data))
    },[])
    return (
        <div className="p-5 grid grid-cols-1 gap-5">
            <h2 className="text-center text-4xl py-5">My Toys</h2>
            {
                toys.map(toy=><Toycart key={toy._id} toy={toy}></Toycart>)
            }
        </div>
    );
};

export default Mytoys;