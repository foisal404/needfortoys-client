import { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../provider/Authprovider";

const Headnav = () => {
  const { user, logOut } = useContext(authContext);
  console.log(user && user);
  //handle logout
  const handleLogout = () => {
    logOut()
      .then(() => {
        console.log("logout succesfully");
      })
      .catch((error) => {
        console.error(error.message);
      });
  };
  const links = (
    <>
      <li>
        <Link to="/">Home</Link>
        <Link to="/toys">All Toys</Link>
        <Link to="/blogs">Blogs</Link>
        {user && (
          <>
            <Link to="/mytoys">My Toys </Link>
            <Link to="/addtoy">Add A Toy</Link>
          </>
        )}
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-neutral text-neutral-content">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow  bg-neutral text-neutral-content rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Need4Toys</a>
            <a href=""><img src="../../src/assets/logo.png"  className="w-30 h-10"/></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1"> {links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <div
                className="tooltip  tooltip-bottom"
                data-tip={`${user?.displayName}`}
              >
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user?.photoURL} />
                  </div>
                </label>
              </div>
              <button
                className="btn btn-error sm:mx-5 sm:ms-9"
                onClick={handleLogout}
              >
                log out
              </button>
            </>
          ) : (
            <Link className="btn" to="/login">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Headnav;
