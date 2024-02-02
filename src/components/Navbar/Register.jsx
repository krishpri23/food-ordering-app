import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PWD_REGEX, USER_REGEX, EMAIL_REGEX } from "../../const/regex";

export default Register = () => {
  const REGISTER_URL = "/register";

  // To focus on name field on reload
  const nameRef = useRef();

  const [name, setName] = useState("");
  const [validName, setValidName] = useState(false);
  const [nameFocus, setNameFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passFocus, setPassFocus] = useState(false);

  const [confirmPassword, setConfirmPassword] = useState("");
  const [validConfirm, setValidConfirm] = useState(false);
  const [confirmFocus, setConfirmFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(USER_REGEX.test(name));
  }, [name]);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setValidPassword(PWD_REGEX.test(password));
    setValidConfirm(password === confirmPassword);
  }, [password, confirmPassword]);

  console.log(validName, validEmail, validPassword, validConfirm);

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem(
      "register",
      JSON.stringify({
        email: email,
        password: password,
        name: name,
      })
    );
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");

    navigate("/");
  };
  return (
    <main className="w-full pt-10 ">
      <h1 className="font-bold text-center text-3xl"> Register </h1>
      <form className="w-1/3 bg-slate-200 p-10" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          id="name"
          required
          ref={nameRef}
          value={name}
          onChange={(e) => setName(e.target.value)}
          onFocus={() => setNameFocus(true)}
          onBlur={() => setNameFocus(false)}
        />
        <p
          className={
            nameRef && name && !validName ? "text-red-600 font-bold " : "hidden"
          }
        >
          Invalid Name
        </p>
        <input
          type="text"
          placeholder="Email"
          id="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={() => setEmailFocus(true)}
          onBlur={() => setEmailFocus(false)}
        />
        <p
          className={
            emailFocus && email && !validEmail
              ? "text-red-600 font-bold "
              : "hidden"
          }
        >
          Invalid Email
        </p>
        <input
          type="password"
          placeholder="Password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onFocus={() => setPassFocus(true)}
          onBlur={() => setPassFocus(false)}
        />
        <p
          className={
            passFocus && password && !validPassword
              ? "text-red-600 font-bold "
              : "hidden"
          }
        >
          Invalid Password
        </p>
        <input
          type="password"
          placeholder="Confirm Password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          onFocus={() => setConfirmFocus(true)}
          onBlur={() => setConfirmFocus(false)}
        />
        <p
          className={
            confirmFocus && confirmPassword && !validConfirm
              ? "text-red-600 font-bold "
              : "hidden"
          }
        >
          Password do not match
        </p>
        <button
          className="primary-btn"
          type="submit"
          // disabled={
          //   !validName || !validEmail || !validPassword || !validConfirm
          // }
        >
          Register
        </button>
      </form>
    </main>
  );
};
