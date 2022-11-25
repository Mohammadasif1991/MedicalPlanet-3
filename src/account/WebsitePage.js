import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Link, useParams } from "react-router-dom";

const WebsitePage = () => {
  const [wslist, setWSList] = useState([]);
  const [search, updateSearch] = useState("");

  const { id } = useParams();
  const getPage = () => {
    let input = {
      location: id,
    };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input),
    };
    fetch(
      "https://firstenquiry.com/webapi/Adminapp/pagebylocation",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        setWSList(data);
      });
  };
  const [locationlist, setLocationList] = useState([]);
  const getLocationList = () => {
    fetch("https://firstenquiry.com/webapi/Adminapp/allLocation")
      .then((res) => res.json())
      .then((locArray) => {
        setLocationList(locArray);
      });
  };

  useEffect(() => {
    getPage();
    getLocationList();
  }, [wslist]);
  //........Pagination .....Here........!!!!!!..........
  const PER_PAGE = 5;

  const [currentPage, setCurrentPage] = useState(0);

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  const totalPage = currentPage * PER_PAGE;
  const pageCount = Math.ceil(wslist.length / PER_PAGE);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-7 text-end">
            <h2 className="text-primary offset-4 mt-2 mb-4">
              All Locations Details : {locationlist.length}
            </h2>
          </div>
          <div className="col-lg-4 text-end mt-5 ">
            <input
              type="text"
              className="bg-info text-start"
              placeholder="Search..."
              value={search}
              onChange={(obj) => updateSearch(obj.target.value)}
            />
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-lg-3 mb-2">
            <button className="btn btn-success mb-4">
              <i class="fa fa-location-arrow" aria-hidden="true"></i>
              <h3>Location</h3>
            </button>
            {locationlist.map((loc, index) => {
              return (
                <>
                  <p key={index}>
                    <Link to={`/websitepage/${loc.id}`}>{loc.name}</Link>
                  </p>
                </>
              );
            })}
          </div>
          <div className="col-lg-9">
            <table className="table table-bordered text-center">
              <thead className="bg-warning ">
                <tr>
                  <th>ID</th>
                  <th>TITLE</th>
                </tr>
              </thead>
              <tbody>
                {wslist
                  .filter((item) => {
                    if (search === "") {
                      return item;
                    } else if (
                      item.title.toLowerCase().includes(search.toLowerCase())
                    ) {
                      return item;
                    } else if (
                      item.location.toLowerCase().includes(search.toLowerCase())
                    ) {
                      return item;
                    }
                  })
                  .slice(totalPage, totalPage + PER_PAGE)
                  .map((pages, index) => {
                    return (
                      <tr key={index}>
                        <td>{pages.id}</td>
                        <td>
                          <a href={pages.url} target="_new">
                            {pages.title}
                          </a>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
            {/* For Pagination Here...... */}
            <div className="mb-4 mt-4">
              <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                breakLabel={"..."}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={4}
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
      </div>
    </>
  );
};

export default WebsitePage;
