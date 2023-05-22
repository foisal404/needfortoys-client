import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const AllToys = () => {
  const loader = useLoaderData();
  const [toys, setToys] = useState(loader.slice(0, 20));
  // console.log(loader);
  return (
    <div>
      <div className="overflow-x-auto w-full p-5 px-10">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>About</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>details</th>
            </tr>
          </thead>
          <tbody>
            {toys.map((toy) => (
              
                <tr key={toy._id}>
                  <td>
                    <span className="flex items-center space-x-3">
                      
                      <span className="hidden md:block">
                        <span className="font-bold">{toy?.name }</span>
                        <span >Seller :{toy?.seller_name && toy?.seller_name }</span>
                        <span className="text-sm opacity-50"></span>
                      </span>
                    </span>
                  </td>
                  <td>
                    {/* {toy.category_name}
                    <br /> */}
                    <span className="badge badge-ghost badge-sm">
                      {toy?.subcategory_name}
                    </span>
                  </td>
                  <td>${toy.price}</td>
                  <td>{toy?.available_quantity}</td>
                  <th>
                    <button className="btn  btn-ghost btn-xs"><Link to={`/toy/${toy?._id}`}>Details</Link></button>
                  </th>
                </tr>
            
            ))}
          </tbody>
        </table>
      </div>
      <div className="text-center py-5">
        <button
          onClick={() => setToys(loader)}
          className="btn btn-outline btn-error"
        >
          All toys
        </button>
      </div>
    </div>
  );
};

export default AllToys;
