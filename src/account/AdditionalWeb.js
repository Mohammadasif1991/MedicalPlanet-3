import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";

const AdditionalWeb = () => {
  const [addWeblist, setAddWebList] = useState([]);
  const [selecttitle, setSelectTitle] = useState([]);
  const [msg] = useState("");
  // const [selectList] = useState([]);
  // const [finalList] = useState([]);
  const [search, updateSearch] = useState("");

  const getAddWebDetails = () => {
    fetch("https://firstenquiry.com/webapi/Adminapp/allWebsitePage")
      .then((resp) => resp.json())
      .then((addArray) => {
        setAddWebList(addArray);
      });
  };

  const selectItem = (sid) => {
    let input = {
      userid: 15,
      serviceid: sid,
    };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input),
    };
    fetch(
      "https://firstenquiry.com/webapi/Education/addservice",
      requestOptions
    )
      .then((response) => response.text())
      .then((data) => {
        alert(data);
        viewService();
      });
  };

  const viewService = () => {
    let input = {
      userid: 15,
    };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input),
    };
    fetch(
      "https://firstenquiry.com/webapi/Education/viewservice",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        setSelectTitle(data);
      });
  };

  const addService = (sid) => {
    let input = {
      userid: 15,
      serviceid: sid,
    };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input),
    };
    fetch(
      "https://firstenquiry.com/webapi/Education/addservice",
      requestOptions
    )
      .then((response) => response.text())
      .then((data) => {
        // console.log(data);
        viewService(); // service list
        alert(data);
      });
  };

  const deleteService = (sid) => {
    let input = {
      userid: 15,
      serviceid: sid,
    };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input),
    };
    fetch(
      "https://firstenquiry.com/webapi/Education/deleteservice",
      requestOptions
    )
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
        viewService(); // service list
        alert(data);
      });
  };

  useEffect(() => {
    getAddWebDetails();
    viewService();
  }, [1]);
  //.....Pagination start from here.....

  const PER_PAGE = 20;

  const [currentPage, setCurrentPage] = useState(0);

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  const totalPage = currentPage * PER_PAGE;
  const pageCount = Math.ceil(addWeblist.length / PER_PAGE);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mt-4 text-center">
            <h2 className="text-info mb-4">
              This is Additional WebsitePage : {addWeblist.length}
            </h2>
            <div className="text-start mb-2">
              <input
                type="text"
                className="bg-info text-start"
                placeholder="Search..."
                value={search}
                onChange={(obj) => updateSearch(obj.target.value)}
              />
            </div>

            <table className="table table-bordered text-center">
              <thead className="bg-primary">
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {addWeblist
                  .filter((item) => {
                    if (search === "") {
                      return item;
                    } else if (
                      item.id.toLowerCase().includes(search.toLowerCase())
                    ) {
                      return item;
                    } else if (
                      item.title.toLowerCase().includes(search.toLowerCase())
                    ) {
                      return item;
                    }
                  })
                  .slice(totalPage, totalPage + PER_PAGE)
                  .map((addweb, index) => {
                    return (
                      <>
                        <tr key={index}>
                          <td>{addweb.id}</td>
                          <td>{addweb.title}</td>

                          <td>
                            <button
                              className="btn btn-success btn-sm mx-2"
                              onClick={addService.bind(this, addweb.id)}
                            >
                              <i
                                className="fa fa-plus-circle fa-2x "
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
            <div className=" col-lg-12 mb-2 mt-2">
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

          <div className="col-lg-6 mt-4 text-center">
            <h2 className="text-info mb-4">
              Selected Page : {selecttitle.length}
            </h2>
            <p className="text-danger text-center">{msg}</p>

            <table className="table table-bordered text-center">
              <thead className="bg-warning">
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {selecttitle.map((item, index) => {
                  return (
                    <>
                      <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={deleteService.bind(this, item.id)}
                          >
                            <i
                              className="fa fa-minus-circle"
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
          </div>
        </div>
      </div>
    </>
  );
};

export default AdditionalWeb;
