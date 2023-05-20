import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const AllToys = () => {
  const loader = useLoaderData();
  const [toys, setToys] = useState(loader.slice(0, 20));
  console.log(loader);
  return (
    <div>
      <div className="overflow-x-auto w-full p-5 px-10">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>About</th>
              <th>types</th>
              <th>Rating</th>
              <th>details</th>
            </tr>
          </thead>
          <tbody>
            {toys.map((toy) => (
              <>
                <tr key={toy._id}>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-20 h-20  lg:w-40 lg:h-40">
                          <img
                            src={toy.picture}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div className="hidden md:block">
                        <div className="font-bold">{toy.name}</div>
                        <div className="text-sm opacity-50"></div>
                      </div>
                    </div>
                  </td>
                  <td >
                    {toy.category_name}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      {toy.subcategory_name}
                    </span>
                  </td>
                  <td>{toy.rating}</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                  </th>
                </tr>
              </>
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
