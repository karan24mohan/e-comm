import React, { useState, useEffect } from "react";
import "../Signup.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  //We have added this navigation is useeffect - If in case user try to go on login page via url so it won't allow user to navigate to login page if user is signed in.
  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });

  const handleSubmit = async () => {
    console.log(email, password);
    let result = await fetch("http://localhost:3640/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = await result.json();
    localStorage.setItem("user", JSON.stringify(data));
    navigate("/");
  };

  return (
    <div className="signupwrapper">
      <h1> Welcome to Jammy </h1>{" "}
      <form>
        <div className="emailWrapper">
          <label htmlFor="email"> Email </label>{" "}
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter email"
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
          />{" "}
        </div>{" "}
        <div className="passwordWrapper">
          <label htmlFor="password"> Password </label>{" "}
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter password"
            autoComplete="off"
            onChange={(e) => setPassword(e.target.value)}
          />{" "}
        </div>{" "}
        <div>
          <button type="button" onClick={handleSubmit}>
            {" "}
            Login{" "}
          </button>{" "}
          <p>
            <span className="spanClass"> Sign up | </span> If you don't have
            account. ?{" "}
          </p>{" "}
        </div>{" "}
      </form>{" "}
    </div>
  );
};

export default Login;
