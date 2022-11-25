import React from "react";
import { Link } from "react-router-dom";
const AccountNavbar = () => {
  return (
    <ul className="list-group">
      <li className="list-group-item active"> Navigation </li>
      <li className="list-group-item">
        {" "}
        <Link to="/login">Login</Link>{" "}
      </li>
      <li className="list-group-item">
        {" "}
        <Link to="/signup">Register</Link>{" "}
      </li>
      <li className="list-group-item">
        {" "}
        <Link to="/term-conditions">Terms Of Use</Link>{" "}
      </li>
      <li className="list-group-item">
        {" "}
        <Link to="/userdetails">UserDetails</Link>{" "}
      </li>
      <li className="list-group-item">
        {" "}
        <Link to="/user">User</Link>{" "}
      </li>
      <li className="list-group-item">
        {" "}
        <Link to="/course">Course</Link>{" "}
      </li>

      <li className="list-group-item">
        {" "}
        <Link to="/location">Location</Link>{" "}
      </li>

      <li className="list-group-item">
        {" "}
        <Link to="/software">SoftwareCompany</Link>{" "}
      </li>

      <li className="list-group-item">
        {" "}
        <Link to="/websitepage/1">WebsitePage</Link>{" "}
      </li>
    </ul>
  );
};

export default AccountNavbar;
