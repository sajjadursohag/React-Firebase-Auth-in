import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../context/AuthContext/AuthContext";

const Login = () => {
  const { signInuser } = use(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    signInuser(email, password)
      .then((result) => {
        console.log(result.user);
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
        <h1 className="text-3xl font-bold">Please Login!</h1>
        <form onSubmit={handleLogin}>
          <fieldset className="fieldset">
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
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
        </form>
        <p>
          New to our website? please{" "}
          <Link className="text-blue-500 hover:text-red-500" to="/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
