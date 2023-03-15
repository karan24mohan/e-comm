import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/signup");
  };
  return (
    <div>
      <ul className="navbar">
        <li>
          {" "}
          <Link to="/"> Home page </Link>{" "}
        </li>{" "}
        <li>
          {" "}
          <Link to="/add"> Add Product page </Link>{" "}
        </li>{" "}
        <li>
          {" "}
          <Link to="/update"> Update page </Link>{" "}
        </li>{" "}
        <li>
          {" "}
          <Link to="/profile"> Profile page </Link>{" "}
        </li>{" "}
        {auth ? (
          <li>
            <Link to="/signup" onClick={logout}>
              Logout page{" "}
            </Link>{" "}
          </li>
        ) : (
          <>
            <li>
              <Link to="/signup"> Sign up page </Link>{" "}
            </li>{" "}
            <li>
              <Link to="/login"> Login page </Link>{" "}
            </li>{" "}
          </>
        )}{" "}
      </ul>{" "}
    </div>
  );
};

export default Nav;
