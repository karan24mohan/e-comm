import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Signup.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  //We have added this navigation is useeffect - If in case user try to go on signup page via url so it won't allow user to navigate to signup page if user is signed in.
  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });

  const handleSubmit = async () => {
    console.log(name, email, password);
    let result = await fetch("http://localhost:4900/signup", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
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
