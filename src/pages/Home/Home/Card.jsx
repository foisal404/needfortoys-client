import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
const Card = ({ toy }) => {
  const { _id, name, picture, price, rating } = toy;
  return (
    <div>
      <div className="card w-80 bg-base-100 shadow-xl">
        <figure>
          <img src={picture} alt="car" className="h-48 w-full p-5" />
        </figure>
        <div className="card-body text-left">
          <h2 className="card-title">{name}</h2>
          <p className="text-lg"><span className="text-green-600">$</span>{price}</p>
          <div className="flex">
            <Rating
              placeholderRating={rating}
              emptySymbol={<FaRegStar />}
              placeholderSymbol={<FaStar className="text-yellow-300" />}
              fullSymbol={<FaStar />}
              readonly
            />
            <p className="mx-4">{rating}</p>
          </div>
          <div className="card-actions justify-center">
          <button className="btn w-full rounded-none bg-red-600" ><Link to={`/toy/${_id}`}>Details</Link></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
