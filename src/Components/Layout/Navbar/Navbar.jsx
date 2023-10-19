import { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Log out successfully");
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  const links = (
    <>
      <li className="font-bold  text-lg">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="font-bold  text-lg">
            <NavLink to="/addcar">Add Car</NavLink>
          </li>
          <li className="font-bold  text-lg">
            <NavLink to="/my-cart">My cart</NavLink>
          </li>
    </>
  );

  return (
    <div>
      <div className="navbar  drop-shadow-xl z-40" >
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
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
              className="menu menu-sm dropdown-content  mt-3  p-2 shadow bg-[#6c63ff] rounded-box lg:w-52">
              {links}
            </ul>
          </div>
          <Link to="/" className="ml-5 normal-case">
            <span className=" text-2xl font-bold text-red-500">Car Shop</span>
            
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">{links}</ul>
        </div>
        <div className="navbar-end ">
          {user ? (
            <>
            <div>
              
            </div>
              <div className="dropdown dropdown-end ">
                <label
                  tabIndex={0}
                  className="btn btn-ghost btn-circle avatar bg-white ">
                  <div className="w-10 rounded-full">
                    {
                      user.photoURL ? <img src={user?.photoURL} /> : <img src="https://imagedelivery.net/5MYSbk45M80qAwecrlKzdQ/dee97162-41b2-4e11-1d58-1d86f8ac3a00/preview" /> 
                    }
                    
                    
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content  z-[1] menu p-2 shadow bg-base-100 rounded-box lg:w-52">
                    <li>
                    <a className="font-semibold">{user.displayName}</a>
                  </li>
                  <li>
                    <a className="font-semibold">Dashboard</a>
                  </li>
                  <li>
                    <a className="font-semibold">Edit Profile</a>
                  </li>
                  <a
                    onClick={handleLogOut}
                    className="btn mt-1 btn-md font-bold text-white hover:text-[#ff3c00] border-none bg-[#ff3c00]">
                    {" "}
                    Log Out
                  </a>
                  
                </ul>
              </div>
              
            </>
          ) : (
            <div className="flex gap-2">
              <Link to="/login">
                <button className=" font-semibold text-white rounded-lg p-2 bg-[#ff3c00] border-none">
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button className=" font-semibold p-2  text-white rounded-lg bg-[#ff3c00] border-none">
                  Sign Up
                </button>
              </Link>
            </div>
          )}
        </div>
        <Toaster />
      </div>
    </div>
  );
};

export default Navbar;
