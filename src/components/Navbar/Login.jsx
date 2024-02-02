import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState(null);
  const [emailValid, setEmailValid] = useState();

  const [password, setPassword] = useState(null);
  const [passwordValid, setPasswordValid] = useState();

  const [errMsg, setErrMsg] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const login = JSON.parse(localStorage.getItem("register"));
    console.log("Logged in successfully");
    login.email === email && login.password === password
      ? navigate("/")
      : setErrMsg("Invalid Email or Password !!");
  };

  return (
    <main className="w-full pt-10">
      <h1 className="font-bold text-center text-3xl"> Login </h1>
      <form className="w-1/3 bg-slate-200 p-10" onSubmit={handleSubmit}>
        {errMsg && (
          <p className="font-semibold text-red-500 -my-6 text-center">
            {" "}
            {errMsg}{" "}
          </p>
        )}
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
        {errMsg && <p className="font-bold text-red-600"> {errMsg} </p>}
        <p className="font-thin text-slate-900 text-sm -mt-7">
          By clicking on Login, I accept the Terms & Conditions & Privacy Policy
        </p>

        <button className="primary-btn" type="submit">
          Login
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
