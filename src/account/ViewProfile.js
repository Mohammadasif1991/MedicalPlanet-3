import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ViewProfile = () => {
  const [profile, setProfile] = useState([]);
  const [showloader, setShowLoader] = useState(false);

  const viewProfile = () => {
    setShowLoader(true);
    let input = {
      userid: 10,
    };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input),
    };
    fetch("https://firstenquiry.com/webapi/Education/myprofile", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProfile(data);
        setShowLoader(false);
      });
  };
  useEffect(() => {
    viewProfile();
  }, [1]);
  return (
    <>
      <div className="container mt-5 p-5">
        {showloader ? (
          <div className="loader-container">
            <div className="spinner"></div>
          </div>
        ) : (
          <div className="row mt-2">
            <div className="col-lg-12">
              <h2 className="text-center text-primary mt-4 mb-4">
                {" "}
                View Profile
              </h2>

              <div className="col-lg-6 offset-3">
                <table className="table table-bordered shadow">
                  <tbody>
                    <tr>
                      <th className="col-lg-2 ">Full Name</th>
                      <td className="col-lg-4">{profile.fullname}</td>
                    </tr>
                    <tr>
                      <th>E-Mail</th>
                      <td>{profile.email}</td>
                    </tr>
                    <tr>
                      <th>Mobile</th>
                      <td>{profile.mobile}</td>
                    </tr>
                    <tr>
                      <th>PassWord</th>
                      <td>{profile.password}</td>
                    </tr>
                    <tr>
                      <th>City</th>
                      <td>{profile.city}</td>
                    </tr>
                    <tr>
                      <th>Address</th>
                      <td>{profile.address}</td>
                    </tr>
                    <tr>
                      <th className="col-lg-2 ">Profile</th>
                      <td className="col-lg-4">{profile.profile}</td>
                    </tr>
                    <tr>
                      <th>Area</th>
                      <td>{profile.area}</td>
                    </tr>
                    <tr>
                      <th>State</th>
                      <td>{profile.state}</td>
                    </tr>
                    <tr>
                      <th>Pincode</th>
                      <td>{profile.pincode}</td>
                    </tr>
                    <tr>
                      <th>Since</th>
                      <td>{profile.since}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-lg-6 offset-3">
                <div className="row mt-2 text-center ">
                  <Link to="/edit">
                    {" "}
                    <button className="btn btn-info btn-sm">
                      {" "}
                      <i
                        className="fa fa-pencil-square-o fa-2x"
                        aria-hidden="true"
                      ></i>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ViewProfile;
