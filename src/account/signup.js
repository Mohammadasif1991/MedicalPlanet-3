import { useState } from "react";
//import axios from "axios";
import { Link } from "react-router-dom";

const Register = () => {
  const [citylist] = useState([
    "Mysore",
    "manglore",
    "Banglore",
    "Hubballi",
    "White Field",
    "Delhi",
    "Mumbai",
  ]);
  const [id, updateId] = useState("");
  const [fullname, updateFullName] = useState("");
  const [mobile, updateMobile] = useState("");
  const [email, updateEmail] = useState("");
  const [password, updatePassword] = useState("");
  const [city, updateCity] = useState("");
  const [type, updateType] = useState("");
  const [msg, updateMsg] = useState("");
  //const [errorlist, updateErrorlist] = useState([]);
  //const [terms, updateTerms] = useState("");
  // console.log(type, fullname, mobile, email, password, city);

  // const registerData = () => {
  //   let formstatus = true;
  //   let allerror = {};
  //   if (fullname == "") {
  //     allerror["nameError"] = "Invalid Name";
  //     formstatus = false;
  //   } else {
  //     allerror["nameError"] = "";
  //   }
  //   var mpattern = /^[6-9]\d{9}$/;
  //   if (!mpattern.test(mobile)) {
  //     allerror["mobileError"] = "Mobile number should be 10 digit";
  //     formstatus = false;
  //   } else {
  //     allerror["mobileError"] = "";
  //   }
  //   var epattern =
  //     /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  //   if (!epattern.test(email)) {
  //     allerror["emailError"] = "Invalid Email";
  //     formstatus = false;
  //   } else {
  //     allerror["emailError"] = "";
  //   }
  //   if (password == "") {
  //     allerror["passwordError"] = "Invalid Password";
  //     formstatus = false;
  //   } else {
  //     allerror["passwordError"] = "";
  //   }
  //   if (city == "") {
  //     allerror["cityError"] = "Invalid city";
  //     formstatus = false;
  //   } else {
  //     allerror["cityError"] = "";
  //   }
  //   if (terms == "") {
  //     allerror["termError"] = "Select Terms and Condition";
  //     formstatus = false;
  //   } else {
  //     allerror["termError"] = "";
  //   }
  //   updateErrorlist(allerror);
  //   // console.log(setError);
  //   if (formstatus == true) {
  //     updateMsg("Please wait submitting...!");
  //     var url = "http://localhost:8080/user/";
  //     var newuser = {
  //       fullname: fullname,
  //       mobile: mobile,
  //       email: email,
  //       password: password,
  //       city: city,
  //       id: id,
  //       type: type,
  //     };
  //     axios.post(url, newuser).then((response) => {
  //       updateMsg("Account Created Successfully");
  //       updateFullName("");
  //       updateEmail("");
  //       updateCity("");
  //       updateMobile("");
  //       updatePassword("");
  //       updateTerms("");
  //     });
  //   }
  //};
  // const Clear = () => {
  //   setName("");
  //   setEmail("");
  //   setCity("");
  //   setMobile("");
  //   setPassword("");
  //   setTerms("");
  // };

  const saveRegister = () => {
    let input = {
      fullname: fullname,
      mobile: mobile,
      email: email,
      password: password,
      city: city,
      type: type,
    };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input),
    };
    fetch("http://localhost:8080/user", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        alert(data);
        // console.log(data);
        updateMsg("Successfully Saved");
      });
  };
  return (
    <>
      <div className="container mt-2">
        <h2 className="text-center mt-4  mb-4 text-primary">Register Page</h2>
        <div className="card  bg-warning ">
          <div className="card-body mt-2 mb-2">
            <p className="text-center text-danger mb-2">{msg}</p>
            <label className="form-check-label" htmlFor="inlineRadio1">
              Company
            </label>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="name"
                id="iname"
                value="Company"
                onChange={(obj) => updateType(obj.target.value)}
              />
            </div>
            <label className="form-check-label" htmlFor="inlineRadio2">
              Individual
            </label>
            <div className="form-check form-check-inline"></div>
            <input
              className="form-check-input"
              type="radio"
              name="name"
              id="iname"
              value="Individual"
              onChange={(obj) => updateType(obj.target.value)}
            />
            <div className="col mt-2">
              <label className="form-label" htmlFor="typeName">
                Full/Company Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder=""
                value={fullname}
                onChange={(obj) => updateFullName(obj.target.value)}
              ></input>
              {/* <i className="text-danger">{errorlist.nameError}</i> */}
            </div>
            <div className="form-outline mt-3">
              <label className="form-label" htmlFor="typePhone">
                {" "}
                Whatsapp/Phone/Mobile
              </label>
              <input
                type="tel"
                id="typePhone"
                className="form-control"
                value={mobile}
                onChange={(obj) => updateMobile(obj.target.value)}
              />
              {/* <i>{errorlist.mobileError}</i> */}
            </div>

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
              {/* <i className="text-danger">{errorlist.emailError}</i> */}
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
            {/* <i className="text-danger">{errorlist.passwordError}</i> */}
            <div className="form-outline mt-2">
              <label>City</label>

              <select
                className="form-select mt-2"
                aria-label="Default select example"
                value={city}
                onChange={(obj) => updateCity(obj.target.value)}
              >
                <option>Choose</option>
                {citylist.map((info, index) => {
                  return (
                    <>
                      <option key={index}>{info}</option>
                    </>
                  );
                })}
              </select>
            </div>
            <div className="form-check d-flex justify-content-center mt-2  mb-5">
              <input
                className="form-check-input me-2"
                type="checkbox"
                value=""
                id="form2Example3c"
              />
              <label className="form-check-label" htmlFor="form2Example3">
                I agree all statements in{" "}
                <Link to="/term-conditions">Terms & conditions</Link>
              </label>
            </div>

            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
              <button
                type="button"
                className="btn btn-primary btn-lg"
                onClick={saveRegister}
              >
                Register
              </button>
            </div>
            <p className="text-center text-muted mt-5 mb-0">
              Have Already have an Account?{" "}
              <Link to="/login" className="fw-bold text-body">
                <ul>Login Here</ul>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
