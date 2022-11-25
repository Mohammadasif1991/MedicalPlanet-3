import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const EditUsers = () => {
  const { uid } = useParams();
  const [id, picId] = useState("");
  const [type, picType] = useState("");
  const [fullname, picFullName] = useState("");
  const [mobile, picMobile] = useState("");
  const [email, picEmail] = useState("");
  const [city, picCity] = useState("");
  const [pass, picPass] = useState("");
  const [msg, setMsg] = useState("");

  const editUser = () => {
    const url = "http://localhost:8080/user/" + uid;
    axios.get(url).then((response) => {
      picType(response.data.type);
      picFullName(response.data.fullname);
      picMobile(response.data.mobile);
      picEmail(response.data.email);
      picPass(response.data.password);
      picCity(response.data.city);
      picId(response.data.id);
      //   console.log();
    });
    // console.log(url);

    // let input = { id: uid };
    // const requestOptions = {
    //   method: "PUT",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(input),
    // };
    // fetch("http://localhost:8080/user/" + uid, requestOptions)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     // alert(data);
    //     picId(data.id);
    //     picType(data.type);
    //     picFullName(data.fullname);
    //     picMobile(data.mobile);
    //     picEmail(data.email);
    //     picPass(data.password);
    //     picCity(data.city);

    //     // console.log(data);
    //   });
  };
  const updateUsers = () => {
    let input = {
      type: type,
      fullname: fullname,
      mobile: mobile,
      email: email,
      password: pass,
      city: city,
      id: id,
    };
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input),
    };
    fetch("http://localhost:8080/user/" + uid, requestOptions)
      .then((response) => response.text())
      .then((data) => {
        //alert(data);
        setMsg("Updated Successfully");
        picFullName("");
        picMobile("");
        picEmail("");
        picPass("");
        picCity("");
        // console.log(type, fullname, mobile, email, pass, city);
      });
  };
  useEffect(() => {
    editUser();
  }, [1]);
  return (
    <>
      <div className="container">
        <div className="row mt-2">
          <h2 className="text-center text-primary">Edit User Details</h2>
          <p className="text-center text-warning">{msg}</p>
          <div className="col-lg-3"></div>
          <div className="col-lg-8  bg-info border-rounded shadow mt-4">
            <div className="m-2">
              <label>ID</label>
              <input
                type="text"
                className="form-control"
                value={id}
                onChange={(obj) => picId(obj.target.value)}
              ></input>
            </div>
            <div className="m-2">
              <label>Type</label>
              <input
                type="text"
                className="form-control"
                value={type}
                onChange={(obj) => picType(obj.target.value)}
              ></input>
            </div>
            <div className="m-2">
              <label>Full Name</label>
              <input
                type="text"
                className="form-control"
                value={fullname}
                onChange={(obj) => picFullName(obj.target.value)}
              ></input>
            </div>
            <div className="m-2">
              <label>Mobile Number</label>
              <input
                type="text"
                className="form-control"
                value={mobile}
                onChange={(obj) => picMobile(obj.target.value)}
              ></input>
            </div>
            <div className="m-2">
              <label>Email Id</label>
              <input
                type="text"
                className="form-control"
                value={email}
                onChange={(obj) => picEmail(obj.target.value)}
              ></input>
            </div>
            <div className="m-2">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                value={pass}
                onChange={(obj) => picPass(obj.target.value)}
              ></input>
            </div>
            <div className="m-2">
              <label>City</label>
              <input
                type="text"
                className="form-control"
                value={city}
                onChange={(obj) => picCity(obj.target.value)}
              ></input>
            </div>
            <button className="btn btn-success btn-sm" onClick={updateUsers}>
              UPDATE
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditUsers;
