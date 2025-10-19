import React, { use } from "react";
import { Link, Navigate, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const { createUser, updateUser, user, setUser } = use(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoURL = e.target.photoURL.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    createUser(email, password)
      .then(() => {
        updateUser({
          displayName: name,
          photoURL: photoURL,
        })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photoURL });
            alert("Account Created");
            navigate("/");
          })
          .catch((error) => alert(error.message));
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="flex justify-center items-center my-4 min-h-[90vh]">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className="font-bold text-2xl text-center py-5">
          Register Your Account
        </h2>
        <form onSubmit={handleRegister}>
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
                name="photoURL"
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

              <button className="btn btn-neutral mt-4">Register</button>
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
