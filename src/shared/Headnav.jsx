import { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../provider/Authprovider";
import logo from '../../src/assets/logo.png'
import { FaSignOutAlt } from "react-icons/fa";

const Headnav = () => {
  const { user, logOut } = useContext(authContext);
  // console.log(user && user);
  //handle logout
  const handleLogout = () => {
    logOut()
      .then(() => {
        // console.log("logout succesfully");
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
    <>
      <nav className="navbar bg-cyan-600 sticky top-0  z-10 text-neutral-content">
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
          <Link to='/' className="btn btn-ghost normal-case text-xl">Need4Toys</Link>
            <Link to='/'><img src={logo}  className="w-30 h-10 none md:block"/></Link>
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
                className="btn btn-outline btn-error border-0 sm:mx-5 sm:ms-9 lowercase border-1  rounded-sm px-5"
                onClick={handleLogout}
              >
                <FaSignOutAlt/> log out
              </button>
            </>
          ) : (
            <Link className="btn" to="/login">
              Login
            </Link>
          )}
        </div>
      </nav>
    </>
  );
};

export default Headnav;
