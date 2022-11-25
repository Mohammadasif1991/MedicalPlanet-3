import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, updateEmail] = useState("");
  const [password, updatePassword] = useState("");
  // const [style, setStyle] = useState("");
  const [msg, setMsg] = useState("");

  const getLogin = () => {
    // alert(id);
    if (email == "" || password == "") {
      setMsg("Empty EmailId or Password");
    } else {
      setMsg("Please Wait....");
      axios.get("http://localhost:8080/account").then((response) => {
        var semail = response.data[0].email;
        var spwd = response.data[0].password;
        if (email == semail && password == spwd) {
          setMsg("Success: Please Wait Redirecting...");
          localStorage.setItem("email", response.data[0].email);
          localStorage.setItem("fullname", response.data[0].fullname);
          localStorage.setItem("type", response.data[0].type);
          window.location.href = "#/dashboard";
          window.location.reload(); // after login dashboard page will come
        } else {
          setMsg("Fail: Invalid or Not Exit");
          // console.log(email, password);
        }
      });
    }

    // const getLogin = () => {
    //   let input = {
    //     email: email,
    //     password: password,
    //   };
    //   const requestOptions = {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(input),
    //   };
    //   fetch("http://localhost:8080/user/", requestOptions)
    //     .then((response) => response.json())
    //     .then((data) => {
    //       // console.log(data);
    //       if (data.status == "SUCCESS") {
    //         // setStyle("success");

    //         window.location.href = "/dashboard";
    //         window.location.reload();
    //       } else {
    //         setStyle("failure");
    //       }
    //       setMsg(data.status + " :" + data.message);
    //       console.log(data);
    //     });
  };

  return (
    <>
      <div className="container">
        <div className="row text-center">
          <h3 className="text-primary mt-5">
              Login Page
          </h3>
          <p className="text-center text-warning">{msg}</p>
        </div>
        <div className="row mt-3">
          <div className="col-lg-6 offset-3">
            <div className="card">
              <div className="card-header p-3 bg-warning text-white">
                <h4 className="text-center">
                  <i className="fa fa-lock"></i> Login
                </h4>
              </div>
              <div className="card-body p-3">
                <p className="text-danger text-center"></p>

                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fa fa-envelope fa-1"> </i>
                  </span>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    required={true}
                    value={email}
                    onChange={(obj) => updateEmail(obj.target.value)}
                  />
                </div>
                <p className="text-danger text-small">
                  <small></small>
                </p>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fa fa-lock fa-1x"> </i>
                  </span>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    // required={true}
                    value={password}
                    onChange={(obj) => updatePassword(obj.target.value)}
                  />
                </div>
                <p className="text-danger text-small">
                  <small></small>
                </p>
                <div className="mt-4 text-center">
                  <button className="btn btn-success px-4" onClick={getLogin}>
                    Login <i className="fa fa-arrow-right"></i>
                  </button>
                  <hr />
                  <a href="#/">Forgot Password?</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
