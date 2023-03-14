import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Signup.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    console.log(name, email, password);
    let result = await fetch("http://localhost:3200/signup", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = await result.json();
    if (data) {
      navigate("/");
    }
  };
  return (
    <div className="signupwrapper">
      <h1> Welcome to Jammy </h1>{" "}
      <form>
        <div className="nameWrapper">
          <label htmlFor="name"> Full Name </label>{" "}
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter full name"
            autoComplete="off"
            onChange={(e) => setName(e.target.value)}
          />{" "}
        </div>{" "}
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
            Create Account{" "}
          </button>{" "}
          <p>
            Already have an account ?{" "}
            <span className="spanClass"> Log in </span>{" "}
          </p>{" "}
        </div>{" "}
      </form>{" "}
    </div>
  );
};

export default Signup;
