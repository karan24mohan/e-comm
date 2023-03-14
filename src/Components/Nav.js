import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
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
          <Link to="/logout"> Logout page </Link>{" "}
        </li>{" "}
        <li>
          {" "}
          <Link to="/profile"> Profile page </Link>{" "}
        </li>{" "}
        <li>
          <Link to="/signup"> Sign up page </Link>{" "}
        </li>{" "}
      </ul>{" "}
    </div>
  );
};

export default Nav;
