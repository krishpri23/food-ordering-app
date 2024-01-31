import React, { useState } from "react";

export const Register = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <main className="w-full pt-10 ">
      <h1 className="font-bold text-center text-3xl"> Register </h1>
      <form className="w-1/3 bg-slate-200 p-10" onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" id="name" value={name} />
        <input type="text" placeholder="Email" id="email" value={email} />
        <input
          type="password"
          placeholder="Password"
          id="password"
          value={password}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          id="confirmPassword"
          value={confirmPassword}
        />
        <button id="primary-btn" type="submit">
          Register
        </button>
      </form>
    </main>
  );
};
