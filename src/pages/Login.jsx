import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-[90vh]">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className="font-bold text-2xl text-center py-5">
          Login Your Account
        </h2>
        <form>
          <div className="card-body">
            <fieldset className="fieldset">
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
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
            <p className="font-medium text-center">
              Don't Have An Account ?{" "}
              <Link className="text-secondary" to="/auth/register">
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
