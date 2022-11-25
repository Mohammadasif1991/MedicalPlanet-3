import React from "react";
import { Link } from "react-router-dom";
const AccountNav = () => {
  // const logOut = () => {
  //   localStorage.clear();
  //   window.location.reload(); //its reload the url
  // };
  return (
    <>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark ">
          <a className="navbar-brand text-warning mx-3">
            <i className="fa fa-bars" aria-hidden="true"></i> Navbar
          </a>

          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav mx-auto mb-2 mb-md-0">
              <li className="nav-item ">
                <Link className="nav-link text-info" to="/dashboard">
                  <i className="fa fa-tachometer" aria-hidden="true"></i>{" "}
                  Dashboard
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-info" to="/user">
                  <i className="fa fa-users" aria-hidden="true"></i> All Users
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-info" to="/course">
                  <i className="fa fa-graduation-cap" aria-hidden="true"></i> All
                  Courses
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-info" to="/location">
                  <i className="fa fa-location-arrow" aria-hidden="true"></i> All
                  Locations
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-info" to="/software">
                  <i className="fa fa-handshake-o" aria-hidden="true"></i> All
                  Software Category
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-info" to="/websitepage/:id">
                  <i className="fa fa-pagelines" aria-hidden="true"></i> All Website
                  Pages
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-info" to="/additional">
                  <i className="fa fa-plus-square" aria-hidden="true"></i>
                      AdditionalWeb Pages
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-info" to="/viewprofile">
                  <i className="fa fa-users" aria-hidden="true"></i>
                      ViewProfile Pages
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-info" to="/userdetails">
                  <i className="fa fa-info-circle" aria-hidden="true"></i>  User
                  Details
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-info" to="/term-conditions">
                  <i className="fa fa-trademark" aria-hidden="true"></i> Terms &
                  Uses
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-info" to="/signup">
                  <i className="fa fa-registered" aria-hidden="true"></i> Register
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link text-info">
                  {/* {localStorage.getItem("name")}- */}
                  <i className="fa fa-sign-in" aria-hidden="true"></i>Login
                </Link>
              </li>

              {/* <li className="nav-item" onClick={logout}>
                <a href="#" className="nav-link text-danger" to="/logout">
                  {localStorage.getItem("name")}
                  <i className="fa fa-power-off"></i> Logout
                </a>
              </li> */}
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default AccountNav;
