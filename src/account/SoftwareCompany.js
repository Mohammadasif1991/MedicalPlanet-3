import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const SoftwareCompany = () => {
  const [sclist, setSCList] = useState([]);

  const getSCList = () => {
    fetch("https://firstenquiry.com/webapi/Adminapp/allSoftwareCategory")
      .then((res) => res.json())
      .then((courseArray) => {
        setSCList(courseArray);
      });
  };
  useEffect(() => {
    getSCList();
  }, [1]);

  //....Pagination start from here.....
  const PER_PAGE = 4;
  const [currentPage, setCurrentPage] = useState(0);
  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }
  const totalPage = currentPage * PER_PAGE;
  const pageCount = Math.ceil(sclist.length / PER_PAGE);
  return (
    <>
      <div className="container">
        <div className="row mt-2">
          <h2 className="text-center text-primary ">
            All SoftwareCompanies : {sclist.length}
          </h2>
          <table className="table table-bordered text-center">
            <thead className="bg-warning">
              <tr>
                <th>ID</th>
                <th>PARENT ID</th>
                <th>NAME</th>
                <th>Seo Name</th>
                <th>Files</th>
                <th>Active</th>
                <th>Displayhome</th>
                <th>ACTION</th>
              </tr>
            </thead>
            {sclist
              .slice(totalPage, totalPage + PER_PAGE)
              .map((data, index) => {
                return (
                  <>
                    <tr key={index}>
                      <td>{data.id}</td>
                      <td>{data.parentid}</td>
                      <td>{data.name}</td>
                      <td>{data.seoname}</td>
                      <td>{data.files}</td>
                      <td>{data.active}</td>
                      <td>{data.displayhome}</td>
                      <td>
                        <td>
                          <button className="btn btn-danger btn-sm mx-2">
                            {" "}
                            <i className="fa fa-trash"></i>
                          </button>
                          <button className="btn btn-success btn-sm ">
                            <i
                              className="fa fa-pencil-square-o"
                              aria-hidden="true"
                            ></i>
                          </button>
                        </td>
                      </td>
                    </tr>
                  </>
                );
              })}
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

export default SoftwareCompany;
