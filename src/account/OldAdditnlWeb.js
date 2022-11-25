import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const AdditionalWeb = () => {
  const [addWeblist, setAddWebList] = useState([]);
  const [selecttitle, setSelectTitle] = useState([]);
  const [msg, setMsg] = useState("");
  const [selectList, setSelectList] = useState([]);
  const [finalList, setFinalList] = useState([]);
  const [search, updateSearch] = useState("");

  const getAddWebDetails = () => {
    fetch("https://firstenquiry.com/webapi/Adminapp/allWebsitePage")
      .then((resp) => resp.json())
      .then((addArray) => {
        setAddWebList(addArray);
      });
  };

  const selectItem = (index) => {
    if (selecttitle.length <= 14) {
      setSelectTitle((selecttitle) => [...selecttitle, addWeblist[index]]);
    } else {
      alert("No more than 15 datas ");
      setMsg("Here must not be more than 15 data");
    }
    //console.log(selecttitle)
  };

  const removeItems = (index) => {
    selecttitle.splice(index, 1);
    setSelectTitle((selecttitle) => [...selecttitle]);
  };
  //this is for update the id length in console.....

  const updateItem = () => {
    for (var i = 0, list = selecttitle.length; i < list; i++) {
      var store = selecttitle[i];
      selectList.push(store["id"]);
    }
    finalList.push(selectList);
    // console.log(finalList);
  };

  useEffect(() => {
    getAddWebDetails();
    // viewService();
    // addService();
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
            <div className="mb-2 mt-2">
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
                              onClick={selectItem.bind(this, index)}
                            >
                              <i
                                className="fa fa-plus-circle fa-2x "
                                aria-hidden="true"
                              ></i>
                            </button>
                            <button className="btn btn-info btn-sm mx-2">
                              <i
                                className="fa fa-pencil-square-o fa-2x"
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
                            onClick={removeItems.bind(this, index)}
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

              <button
                className="btn btn-success offset-10 px-4 mt-4 mb-4"
                onClick={updateItem}
              >
                UPDATE
              </button>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdditionalWeb;
