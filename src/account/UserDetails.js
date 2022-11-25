import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UserDetails = () => {
  const [userdetailslist, setUserDetailsList] = useState([]);

  const getUserdetails = () => {
    fetch("http://localhost:8080/user")
      .then((response) => response.json())
      .then((userArray) => {
        setUserDetailsList(userArray);
      });
  };
  useEffect(() => {
    getUserdetails();
  }, []);
  const [msg, updateMsg] = useState("");

  // delete process from here.....

  const deleteUserDetails = (uid) => {
    // let input = { id: uid };
    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    };

    fetch("http://localhost:8080/user/" + uid, requestOptions)
      .then((response) => response.text())
      .then((data) => {
        // alert("Updated successfully");
        updateMsg(data);
        // window.location.reload();
        // console.log(data);
      });
  };

  return (
    <>
      <div className="container">
        <div className="row mt-2">
          <h2 className="text-center text-primary">
            User Details :{userdetailslist.length}
          </h2>
          <p className="text-ceneter text-warning">{msg}</p>
          <table className="table table-bordered mt-2">
            <thead className="bg-warning">
              <tr>
                <th>Id</th>
                <th>Type</th>
                <th>Full Name</th>
                <th>Mobile Number</th>
                <th>Email Id </th>
                <th>Password</th>
                <th>City</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {userdetailslist.map((user, index) => {
                return (
                  <>
                    <tr key={index}>
                      <td>{user.id}</td>
                      <td>{user.type}</td>
                      <td>{user.fullname}</td>
                      <td>{user.mobile}</td>
                      <td>{user.email}</td>
                      <td>{user.password}</td>
                      <td>{user.city}</td>
                      <td>
                        <button
                          className="btn btn-danger btn-sm mx-3"
                          onClick={deleteUserDetails.bind(this, user.id)}
                        >
                          <i className="fa fa-trash" aria-hidden="true"></i>
                        </button>
                        <Link to={`/edituser/${user.id}`}>
                          <button className="btn btn-success btn-sm ">
                            <i
                              className="fa fa-pencil-square-o"
                              aria-hidden="true"
                            ></i>
                          </button>
                        </Link>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default UserDetails;
