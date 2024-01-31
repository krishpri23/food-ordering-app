import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    email && password ? navigate("/") : "";
  };

  return (
    <main className="w-full pt-10">
      <h1 className="font-bold text-center text-3xl"> Login </h1>
      <form className="w-1/3 bg-slate-200 p-10" onSubmit={handleSubmit}>
        <input
          type="email"
          id="email"
          placeholder="Email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          id="password"
          placeholder="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="font-thin text-slate-900 text-sm -mt-7">
          {" "}
          By clicking on Login, I accept the Terms & Conditions & Privacy Policy
        </p>
        <button id="primary-btn" type="submit">
          {" "}
          Login{" "}
        </button>

        <Link
          to="/register"
          className="font-normal text-blue-800 text-sm -mt-7 underline text-center "
        >
          Create a new account
        </Link>
      </form>
    </main>
  );
};

export default Login;
