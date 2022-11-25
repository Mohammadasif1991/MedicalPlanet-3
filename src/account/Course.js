import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const Course = () => {
  const [courselist, setCousreList] = useState([]);

  const getCourseList = () => {
    fetch("https://firstenquiry.com/webapi/Adminapp/allCourse")
      .then((res) => res.json())
      .then((cArray) => {
        if (cArray.length > 0) {
          setCousreList(cArray);
        }
      });
  };
  useEffect(() => {
    getCourseList();
  }, [1]);
  //....Pagination start from here.......
  const PER_PAGE = 4;

  const [currentPage, setCurrentPage] = useState(0);

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  const totalPage = currentPage * PER_PAGE;
  const pageCount = Math.ceil(courselist.length / PER_PAGE);
  return (
    <>
      <div className="container">
        <div className="row mt-2">
          <h2 className="text-center text-primary ">
            All Courses : {courselist.length}
          </h2>
          <table className="table table-bordered mt-2 mb-2">
            <thead className="bg-warning">
              <tr>
                <th>ID</th>
                <th>GPARENT ID</th>
                <th>PARENT ID</th>
                <th>COURSE_NAME</th>
                <th>PAGE URL</th>
                <th>ACTIVE</th>
                <th>LEFT NAV</th>
                <th>HOME</th>
                <th>HOT COURSE</th>
                <th>CATEGORY</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {courselist
                .slice(totalPage, totalPage + PER_PAGE)
                .map((data, index) => {
                  return (
                    <>
                      <tr key={index}>
                        <td>{data.id}</td>
                        <td>{data.gparentid}</td>
                        <td>{data.parentid}</td>
                        <td>{data.course_name}</td>
                        <td>{data.pageurl}</td>
                        <td>{data.active}</td>
                        <td>{data.leftnav}</td>
                        <td>{data.home}</td>
                        <td>{data.hotcourse}</td>
                        <td>{data.category}</td>
                        <td>
                          <button className="btn btn-danger btn-sm ">
                            {" "}
                            <i className="fa fa-trash"></i>
                          </button>
                          <button className="btn btn-success btn-sm mt-2">
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
              pageRangeDisplayed={5}
              onPageChange={handlePageClick}
              containerClassName={"pagination border justify-content-center"}
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

export default Course;
