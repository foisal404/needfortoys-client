import Rating from "react-rating";
import { FaCross, FaEdit, FaRegStar, FaRegTimesCircle, FaStar } from "react-icons/fa";
const Toycart = ({ toy }) => {
  const { _id, name, picture, rating, details } = toy;
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <div className="w-1/5 p-5">
          <figure>
            <img src={picture} alt="Movie" />
          </figure>
        </div>
        <div className="card-body flex flex-row">
          <div className="flex-grow">
            <h2 className="card-title">{name}</h2>
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
            <button className="btn btn-outline btn-ghost"><FaEdit/></button>
            <button className="btn btn-outline  btn-ghost"><FaRegTimesCircle/></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toycart;
