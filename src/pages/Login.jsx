import React, { use, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import SocialLogin from "../components/homeLayout/SocialLogin";

const Login = () => {
  const { loginUser, resetPassword } = use(AuthContext);
  const [error, setError] = useState("");
  const emailRef = useRef();

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginUser(email, password)
      .then(() => {
        alert("Login SuccessFull");
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => setError(error.message));
  };

  const handleResetPassword = () => {
    const email = emailRef.current.value;
    if (!email) {
      alert("Enter Your Email");
      return;
    }
    resetPassword(email)
      .then(() => alert("Check Your Email For Reset Password"))
      .catch((error) => alert(error.message));
  };

  return (
    <div className="flex justify-center items-center min-h-[90vh]">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className="font-bold text-2xl text-center py-5">
          Login Your Account
        </h2>
        <form onSubmit={handleLogin}>
          <div className="card-body">
            <fieldset className="fieldset">
              {/* email */}
              <label className="label">Email</label>
              <input
                ref={emailRef}
                name="email"
                type="email"
                className="input"
                placeholder="Email"
                required
              />
              {/* password */}
              <label className="label">Password</label>
              <input
                name="password"
                type="password"
                className="input"
                placeholder="Password"
                required
              />
              <div>
                <a onClick={handleResetPassword} className="link link-hover">
                  Forgot password?
                </a>
              </div>
              {error && <p className="text-red-400">{error}</p>}
              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
            <p className="font-medium text-center">
              Don't Have An Account ?{" "}
              <Link className="text-secondary" to="/auth/register">
                Register
              </Link>
            </p>
            <SocialLogin />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
