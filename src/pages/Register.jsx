import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="flex justify-center items-center my-4 min-h-[90vh]">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className="font-bold text-2xl text-center py-5">
          Register Your Account
        </h2>
        <form>
          <div className="card-body">
            <fieldset className="fieldset">
              {/* name */}
              <label className="label">Name</label>
              <input
                name="name"
                type="text"
                className="input"
                placeholder="Enter Your Name"
              />
              {/* photo */}
              <label className="label">Photo</label>
              <input
                name="Photo URL"
                type="text"
                className="input"
                placeholder="Enter Your Photo URL"
              />
              {/* email */}
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
              />
              {/* password */}
              <label className="label">Password</label>
              <input
                name="password"
                type="password"
                className="input"
                placeholder="Password"
              />

              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
            <p className="font-medium text-center">
              Already Have An Account ? Please{" "}
              <Link className="text-secondary" to="/auth/login">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
