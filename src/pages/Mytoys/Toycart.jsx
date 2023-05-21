import Rating from "react-rating";
import {  FaEdit, FaRegStar, FaRegTimesCircle, FaStar } from "react-icons/fa";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
const Toycart = ({ toy ,handleToys}) => {
  const { _id, name, picture, rating, details,price } = toy;
  const handleDelate=()=>{
    console.log(_id);
    fetch(`https://mango-toys-server.vercel.app/toys/${_id}`,{
        method:"DELETE"
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        if(data.deletedCount>0){
            toast("delate succesfully")
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
            <h2 className="card-title">{name}</h2>
            <h2 >$ {price}</h2>
            <p>{details}</p>
            <div className="flex">
              <Rating
                placeholderRating={rating}
                emptySymbol={<FaRegStar />}
                placeholderSymbol={
                <FaStar className="text-yellow-600" />}
                fullSymbol={<FaStar />}
                readonly
              />
              <p>{rating}</p>
            </div>
          </div>
          <div className="card-actions flex flex-col">
          <Link to={`/edit/${_id}`}><button className="btn btn-outline btn-ghost"><FaEdit/></button></Link>
            <button className="btn btn-outline  btn-ghost" onClick={handleDelate}><FaRegTimesCircle/></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toycart;
