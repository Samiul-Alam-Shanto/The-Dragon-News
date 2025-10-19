import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userImg from "../assets/user.png";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logout, setUser } = use(AuthContext);
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      <li>
        <NavLink to="/about">About</NavLink>
      </li>

      <li>
        <NavLink to="/career">Career</NavLink>
      </li>
    </>
  );

  const handleLogout = () => {
    logout()
      .then(() => {
        setUser(null);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="navbar bg-base-100 shadow-sm">
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
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="linksNav menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 text-accent shadow "
          >
            {links}
          </ul>
        </div>
      </div>
      <div>{user && user.email}</div>
      <div className="navbar-center hidden lg:flex">
        <ul className="linksNav menu menu-horizontal text-accent px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end gap-3">
        <img
          className="rounded-full"
          src={user ? user.photoURL : userImg}
          alt=""
        />
        {user ? (
          <Link
            to="/auth/login"
            onClick={handleLogout}
            className="btn btn-primary"
          >
            Log Out
          </Link>
        ) : (
          <Link to="/auth/login" className="btn btn-primary">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
