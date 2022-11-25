import React, { useEffect, useState } from "react";

const EditProfile = () => {
  const [fullname, updateFullName] = useState("");
  const [mobile, updateMobile] = useState("");
  const [email, updateEmail] = useState("");
  const [password, updatePassword] = useState("");
  const [city, updateCity] = useState("");
  const [area, updateArea] = useState("");
  const [pincode, updatePincode] = useState("");
  const [profiles, updateProfiles] = useState("");
  const [since, updateSince] = useState("");
  const [address, updateAddress] = useState("");
  const [state, updateState] = useState("");
  const [msg, updateMsg] = useState("");

  const getProfile = () => {
    let input = {
      userid: 16,
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
        updateFullName(data.fullname);
        updateEmail(data.email);
        updatePassword(data.password);
        updateCity(data.city);
        updateArea(data.area);
        updatePincode(data.pincode);
        updateProfiles(data.profile);
        updateSince(data.since);
        updateAddress(data.address);
        updateState(data.state);
        updateMobile(data.mobile);
      });
  };

  const updateProfile = () => {
    let input = {
      userid: 15,
      fullname: fullname,
      email: email,
      mobile: mobile,
      city: city,
      address: address,
      pincode: pincode,
      state: state,
      area: area,
      profile: profiles,
      since: since,
      password: password,
    };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input),
    };
    fetch("https://firstenquiry.com/webapi/Education/update", requestOptions)
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
      });
  };
  useEffect(() => {
    getProfile();
  }, [1]);

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-6">
            <h2 className="text-center text-primary">VieW Profile</h2>
            <p></p>
            <label className="form-label" htmlFor="typeName">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder=""
              value={fullname}
              onChange={(obj) => updateFullName(obj.target.value)}
            ></input>
            <div className="form-outline mt-2">
              <label className="form-label" htmlFor="typeEmail">
                Email Id
              </label>
              <input
                type="email"
                id="typeEmail"
                className="form-control"
                value={email}
                onChange={(obj) => updateEmail(obj.target.value)}
              />
            </div>
            <div className="form-outline mt-3">
              <label className="form-label" htmlFor="typePhone">
                {" "}
                Mobile
              </label>
              <input
                type="tel"
                id="typePhone"
                className="form-control"
                value={mobile}
                onChange={(obj) => updateMobile(obj.target.value)}
              />
            </div>
            <div className="form-outline mt-2">
              <label className="form-label" htmlFor="typeName">
                City
              </label>
              <input
                type="text"
                className="form-control"
                placeholder=""
                value={city}
                onChange={(obj) => updateCity(obj.target.value)}
              ></input>
            </div>

            <div className="form-outline mt-2">
              <label className="form-label" htmlFor="typePassword">
                Password
              </label>
              <input
                type="password"
                id="typePassword"
                className="form-control"
                value={password}
                onChange={(obj) => updatePassword(obj.target.value)}
              />
            </div>
            <div className="form-outline mt-2">
              <label className="form-label" htmlFor="typeName">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                placeholder=""
                value={address}
                onChange={(obj) => updateAddress(obj.target.value)}
              ></input>
            </div>
            <div className="form-outline mt-2">
              <label className="form-label" htmlFor="typeName">
                Pincode
              </label>
              <input
                type="text"
                className="form-control"
                placeholder=""
                value={pincode}
                onChange={(obj) => updatePincode(obj.target.value)}
              ></input>
              <div className="form-outline mt-2">
                <label className="form-label" htmlFor="typeName">
                  State
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder=""
                  value={state}
                  onChange={(obj) => updateState(obj.target.value)}
                ></input>
              </div>
              <div className="form-outline mt-2">
                <label className="form-label" htmlFor="typeName">
                  Area
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder=""
                  value={area}
                  onChange={(obj) => updateArea(obj.target.value)}
                ></input>
              </div>
              <div className="form-outline mt-2">
                <label className="form-label" htmlFor="typeName">
                  Profile
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder=""
                  value={profiles}
                  onChange={(obj) => updateProfiles(obj.target.value)}
                ></input>
              </div>
              <div className="form-outline mt-2">
                <label className="form-label" htmlFor="typeName">
                  Since
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder=""
                  value={since}
                  onChange={(obj) => updateSince(obj.target.value)}
                ></input>
              </div>
              <div className="form-outline mt-2 text-center">
                <button className="btn btn-success " onClick={updateProfile}>
                  {" "}
                  UPDATE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
