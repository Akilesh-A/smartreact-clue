import React, { useState } from "react";
import "../tableRaterules/TablerateRules.css";

function TablerateRules() {
  const [show, setShow] = useState(false);

  const showTable = (e) => {
    e.preventDefault();
    setShow(true);
  };

  return (
    <div className="container-fluid">
      {!show ? (
        <div className="Tablerate-Rules">
          <div className="table-rate-top">
            <div className="table-rate-heading">
              <h4>Table Rate Rules (2 records)</h4>
            </div>
            <div className="table-rate-buttons">
              <button className="btn btn-outline-danger">View Deleted Records</button>
              <button className="btn btn-secondary" onClick={showTable}>
                Create
              </button>
            </div>
          </div>

          <div className="tablerule-forms">
            <div className="row">
              <div className="col-md-4 col-lg-2">
                <label htmlFor="tabeldata-search" className="form-label">
                  Search:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="tabeldata-search"
                  placeholder="Search Here"
                />
              </div>

              <div className="col-md-4 col-lg-2">
                <label htmlFor="tabledate-from" className="form-label">
                  Date From
                </label>
                <input type="date" id="tabledate-from" className="form-control" />
              </div>

              <div className="col-md-4 col-lg-2">
                <label htmlFor="tabledate-to" className="form-label">
                  Date To
                </label>
                <input type="date" id="tabledate-to" className="form-control" />
              </div>

              <div className="col-md-2 col-lg-2 filterbtn">
                <button type="submit" className="btn btn-outline-dark">
                  Filter
                </button>
              </div>
            </div>

            <div className="tablerules-popupshowtable table-responsive">
              <table className="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Rule Name</th>
                    <th scope="col">Day/Time</th>
                    <th scope="col">Applied on Tables</th>
                    <th scope="col">Rate</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Users</td>
                    <td>
                      <div>
                        <p>
                          <span>Mon</span>
                        </p>
                        <p>4:00 AM - 12:00 AM (Next Day)</p>
                      </div>
                    </td>
                    <td>1</td>
                    <td>551/game</td>
                    <td>
                      <button type="button" className="btn btn-success">
                        Enabled
                      </button>
                    </td>
                    <td>
                      <button className="btn btn-link">Edit</button>
                      <button className="btn btn-link">Delete</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        <div className="table-rate-popup">
          <div className="tablerate-pop-head">
            <h4>Rate Table</h4>
          </div>
          <div className="tablerate-top-cloase">
            <button onClick={()=>setShow(false)}>Close</button>

          </div>

         
        </div>
      )}
    </div>
  );
}

export default TablerateRules;
