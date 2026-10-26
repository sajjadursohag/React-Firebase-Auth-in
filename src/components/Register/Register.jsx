import { createUserWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { Link } from "react-router";
import { auth } from "../../firebase/firebase.init";

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        console.log(result)
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div
      className="card bg-base-100 w-full mx-auto
     max-w-sm shrink-0 shadow-2xl"
    >
      <div className="card-body">
        <h1 className="text-3xl font-bold">Please Register!</h1>
        <form onSubmit={handleRegister}>
          <fieldset className="fieldset">
            {/* Name */}
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Your Name"
            />
            {/* Email */}
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
            />
            {/* Password */}
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>
        </form>
        <p>
          Allready have an account? please{" "}
          <Link className="text-blue-500 hover:text-red-500" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
