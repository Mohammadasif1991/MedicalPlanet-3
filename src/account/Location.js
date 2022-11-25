import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const Location = () => {
  const [locationlist, setLocationList] = useState([]);
  const[showloading,setLoading]=useState(false)

  const getLocationList = () => {
    fetch("https://firstenquiry.com/webapi/Adminapp/allLocation")
      .then((res) => res.json())
      .then((loArray) => {
        setLocationList(loArray);
      });
  };
  useEffect(() => {
    getLocationList();
  }, [1]);

  const PER_PAGE = 5;

  const [currentPage, setCurrentPage] = useState(0);

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  const totalPage = currentPage * PER_PAGE;
  const pageCount = Math.ceil(locationlist.length / PER_PAGE);
  return (
    <>
      <div className="container">
        <div className="row mt-2">
          <h2 className="text-center text-primary">
            All Locations : {locationlist.length}
          </h2>
          <table className="table table-bordered mt-2 mb-2 text-center">
            <thead className="bg-warning">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {locationlist
                .slice(totalPage, totalPage + PER_PAGE)
                .map((data, index) => {
                  return (
                    <>
                      <tr key={index}>
                        <td>{data.id}</td>
                        <td>{data.name}</td>
                        <td>
                          <button className="btn btn-danger btn-sm mx-3">
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

export default Location;
