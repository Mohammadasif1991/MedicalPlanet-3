import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DashBoard = () => {
  const [udetails, setUDetails] = useState([]);
  const [cdetails, setCDetails] = useState([]);
  const [locdetails, setLocDetails] = useState([]);
  const [scompdetails, setSCompDetails] = useState([]);
  const getUser = () => {
    fetch("https://firstenquiry.com/webapi/Adminapp/allUser")
      .then((res) => res.json())
      .then((uArray) => {
        setUDetails(uArray);
      });
  };

  const getCourse = () => {
    fetch("https://firstenquiry.com/webapi/Adminapp/allCourse")
      .then((res) => res.json())
      .then((cArray) => {
        setCDetails(cArray);
      });
  };

  const getLocation = () => {
    fetch("https://firstenquiry.com/webapi/Adminapp/allLocation")
      .then((res) => res.json())
      .then((locArray) => {
        setLocDetails(locArray);
      });
  };
  const getSoftwareCompanyDetail = () => {
    fetch("https://firstenquiry.com/webapi/Adminapp/allSoftwareCategory")
      .then((res) => res.json())
      .then((scArray) => {
        setSCompDetails(scArray);
      });
  };

  useEffect(() => {
    getUser();
    getCourse();
    getLocation();
    getSoftwareCompanyDetail();
  }, [1]);
  return (
    <>
      <div className="container">
        <div className="col-lg-12 text-center mt-5 mb-4">
          <h4 className="text-primary ">
            <i class="fa fa-windows" aria-hidden="true">
              {" "}
              Websites Dashboard
            </i>
          </h4>
        </div>

        <div className="row">
          <div className="col-lg-3">
            <Link to="/User" className="text-decoration-none">
              <div className="card">
                <div className="card-body text-center bg-success text-danger">
                  <i className="fa fa-users fa-3x " aria-hidden="true"></i>
                  <h3 className="text-white">User</h3>
                  <p>{udetails.length}</p>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-lg-3">
            <Link to="/Course" className="text-decoration-none">
              <div className="card">
                <div className="card-body text-center bg-primary text-info">
                  <i class="fa fa-graduation-cap fa-3x" aria-hidden="true"></i>
                  <h3 className="text-white"> Course</h3>
                  <p>{cdetails.length}</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-lg-3">
            <Link to="/Location" className="text-decoration-none">
              <div className="card">
                <div className="card-body text-center bg-warning text-success">
                  <i class="fa fa-location-arrow fa-3x" aria-hidden="true"></i>
                  <h3 className="text-white">Location</h3>
                  <p>{locdetails.length}</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-lg-3">
            <Link to="/Software" className="text-decoration-none">
              <div className="card">
                <div className="card-body text-center bg-danger text-warning">
                  <i class="fa fa-bandcamp fa-3x" aria-hidden="true"></i>
                  <h3 className="text-white">Software </h3>
                  <p>{scompdetails.length}</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
