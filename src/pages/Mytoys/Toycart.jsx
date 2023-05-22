import Rating from "react-rating";
import {  FaEdit, FaRegStar, FaRegTimesCircle, FaStar } from "react-icons/fa";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
const Toycart = ({ toy ,handleToys}) => {
  const { _id, name, picture, rating, details,price,available_quantity } = toy;
  const handleDelate=()=>{
    // console.log(_id);
    fetch(`https://mango-toys-server.vercel.app/toys/${_id}`,{
        method:"DELETE"
    })
    .then(res=>res.json())
    .then(data=>{
        // console.log(data);
        if(data.deletedCount>0){
            toast("delete succesfully")
            handleToys(_id);

        }
        if(data.deletedCount<0){
            toast("delete unsuccesfully")
        }
    })
  }
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl border">
        <div className="w-1/5 p-5">
          <figure>
            <img src={picture} alt="Movie"  className="rounded-2xl"/>
          </figure>
        </div>
        <div className="card-body flex flex-row items-center">
          <div className="flex-grow">
            <h2 className="card-title text-3xl font-bold my-3">{name}</h2>
            <h2 ><span className="border rounded-md border-zinc-950 px-3">$ {price}</span>{
              available_quantity&& <span className="border rounded-md border-zinc-950 px-3 ml-3">{available_quantity}</span>
            }</h2>
            <p className="text-sm">{details}</p>
            <div className="flex">
              <Rating
                placeholderRating={rating}
                emptySymbol={<FaRegStar />}
                placeholderSymbol={
                <FaStar className="text-yellow-600" />}
                fullSymbol={<FaStar />}
                readonly
              />
              <p className="ml-2">{rating}</p>
            </div>
          </div>
          <div className="card-actions flex flex-col">
          <Link to={`/edit/${_id}`}><button className="btn btn-ghost"><FaEdit className="text-xl text-cyan-500"/></button></Link>
            <button className="btn  btn-ghost" onClick={handleDelate}><FaRegTimesCircle className="text-xl text-red-500"/></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toycart;
