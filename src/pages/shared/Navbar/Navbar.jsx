import { Link } from "react-router-dom";
import useAuthContext from "../../../hooks/useAuthContext";

const Navbar = () => {
  const { user } = useAuthContext();
  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">Menu</Link>
      </li>
      <li>
        <Link to="/order">Order Food</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/signup">Sign Up</Link>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar fixed z-10 opacity-50 bg-black max-w-screen-xl mx-auto text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-black"
            >
              {navOptions}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl ">
            <div className="flex flex-col m-0 ">
              <span>BistroBoss</span>
              <span className="text-center text-sm">Restaurant</span>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">{user?.email}</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
