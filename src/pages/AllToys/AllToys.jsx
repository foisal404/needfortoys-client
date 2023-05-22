import { useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const AllToys = () => {
  const loader = useLoaderData();
  const [toys, setToys] = useState(loader.slice(0, 20));
  const inputref = useRef(null)
  function handleClick() {
    const q=inputref.current.value;
    fetch(`https://mango-toys-server.vercel.app/toys?name=${q}`)
    .then(res=>res.json())
    .then(data=>setToys(data))
  }
  // console.log(loader);
  return (
    <div>
      <div className="overflow-x-auto w-full p-5 px-10">
        <div className="flex justify-between">
          <h2 className="text-3xl font-mono">All Toys</h2>
          <div className="pb-4">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered"
              ref={inputref}
            />
            <button className="btn btn-ghost ml-2" onClick={handleClick}><FaSearch/></button>
          </div>
          <div>
            <span className="text-xs">sort by</span>
            <button className="btn mx-2">low price</button>
            <button className="btn mx-2">high price</button>
          </div>
        </div>
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr className="relative z-0">
              <th className="z-0">About</th>
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
                      <span className="font-bold">{toy?.name}</span>
                      <span className="ml-5">
                        Seller :{toy?.seller_name && toy?.seller_name}
                      </span>
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
                  <button className="btn  btn-ghost btn-xs">
                    <Link to={`/toy/${toy?._id}`}>Details</Link>
                  </button>
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
