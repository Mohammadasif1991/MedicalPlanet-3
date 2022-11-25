import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const User = () => {
  const [userlist, setUserList] = useState([]);
  const getUserList = () => {
    fetch("https://firstenquiry.com/webapi/Adminapp/allUser")
      .then((res) => res.json())
      .then((uArray) => {
        setUserList(uArray);
      });
  };
  useEffect(() => {
    getUserList();
  }, [1]);

  const PER_PAGE = 4;

  const [currentPage, setCurrentPage] = useState(0);

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  const totalPage = currentPage * PER_PAGE;
  const pageCount = Math.ceil(userlist.length / PER_PAGE);
  return (
    <>
      <div className="container">
        <div className="row mt-2">
          <h2 className="text-center text-primary ">
            User : {userlist.length}
          </h2>
          <table className="table table-bordered mt-2 mb-2">
            <thead className="bg-warning">
              <tr>
                <th>USER ID</th>
                <th>FULL NAME</th>
                <th>EMAIL ID</th>
                <th>PASSWORD</th>
                <th>TYPE</th>
                <th>CITY</th>
                <th>MOBILE</th>
                <th>ACTIVE</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {userlist
                .slice(totalPage, totalPage + PER_PAGE)
                .map((data, index) => {
                  return (
                    <>
                      <tr key={index}>
                        <td>{data.userid}</td>
                        <td>{data.fullname}</td>
                        <td>{data.email}</td>
                        <td>{data.password}</td>
                        <td>{data.type}</td>
                        <td>{data.city}</td>
                        <td>{data.mobile}</td>
                        <td>{data.active}</td>
                        <td>
                          <button className="btn btn-danger btn-sm mx-2">
                            <i className="fa fa-trash"></i>
                          </button>

                          <button className="btn btn-success btn-sm ">
                            <i
                              className="fa fa-pencil-square-o"
                              aria-hidden="true"
                            ></i>
                          </button>
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
          <div className="mb-4 mt-4">
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              breakLabel={"..."}
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={3}
              onPageChange={handlePageClick}
              containerClassName={"pagination borde justify-content-center"}
              pageClassName={"page-item"}
              pageLinkClassName={"page-link"}
              previousClassName={"page-item"}
              previousLinkClassName={"page-link"}
              nextClassName={"page-item"}
              nextLinkClassName={"page-link"}
              breakClassName={"page-item"}
              breakLinkClassName={"page-link"}
              activeClassName={"active danger"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
