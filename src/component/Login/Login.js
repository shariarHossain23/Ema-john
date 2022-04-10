import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState({ value: "", errorr: "" });
  const [password, setPassword] = useState({ value: "", errorr: "" });
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate();
  const location = useLocation()
  let from = location.state?.from?.pathname || "/";


  const handleEmailBlur = (event) => {
    const eamailInput = event.target.value;
    setEmail({ value: eamailInput, errorr: "" });
  };
  const handlePasswordlBlur = (event) => {
    const passwordInput = event.target.value;
    setPassword({ value: passwordInput, errorr: "" });
  };
  if (user) {
    navigate(from, { replace: true });
    toast.success("log in successfull",{id:"success"})
  }
  const formSubmit = (event) => {
    event.preventDefault();
    if (password.value.length < 6)
      setPassword({ value: "", errorr: "password must be 6 character" });
    signInWithEmailAndPassword(email.value, password.value);
  };
  if (error?.message.includes("user-not-found")) {
    toast.error("user not found", { id: "error" });
  }
  return (
    <div className="form">
      <div>
        <h1 className="form-title">Log In</h1>
        <form onSubmit={formSubmit} action="#">
          <div className="input-group">
            <label htmlFor="email">Email </label>
            <input onBlur={handleEmailBlur} type="email" name="email" id="" />
          </div>
          <div className="input-group">
            <label htmlFor="password">password</label>
            <input
              onBlur={handlePasswordlBlur}
              type="password"
              name="password"
              id=""
            />
            <p>{password.errorr}</p>
          </div>
          <div>
            <button className="form-submit">submit</button>
          </div>
        </form>
        <p className="form-text">
          New to amazon{" "}
          <Link className="form-link" to="/signup">
            Sign up
          </Link>
        </p>
        <div className="form-other">
          <div className="left"></div>
          <p>or</p>
          <div className="right"></div>
        </div>
        <button className="google-sign-in">sign in with google</button>
      </div>
    </div>
  );
};

export default Login;
