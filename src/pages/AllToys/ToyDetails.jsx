import { useLoaderData } from "react-router-dom";
import Rating from "react-rating";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
const ToyDetails = () => {
  const loader = useLoaderData();
  const {
    _id,
    name,
    picture,
    price,
    rating,
    category_name,
    subcategory_name,
    details,
    available_quantity,
    seller_name,
    seller_email,
  } = loader;
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={picture} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{name}</h1>
            <div>
              <p className="text-2xl">{category_name}</p>
              <p className="text-xs">{subcategory_name}</p>
            </div>
            <p className="py-6">{details}</p>
            <div className="flex">
            <p>Seller  : "{seller_name} "  </p>
            <p>{seller_email ? seller_email : "no seller_email"}</p>
            </div>
            <p>quantity :{available_quantity}</p>
            <p> price $ {price}</p>

            <div className="flex">
              <Rating
                placeholderRating={rating}
                emptySymbol={<FaRegStar />}
                placeholderSymbol={<FaStar className="text-yellow-300" />}
                fullSymbol={<FaStar />}
                readonly
              />
              <p>{rating}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
