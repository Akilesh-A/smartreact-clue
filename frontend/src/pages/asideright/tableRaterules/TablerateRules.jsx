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
      <div className="Tablerate-Rules">
        {!show ? (
          <>
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
              <div className="row mb-3">
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
                    Date From:
                  </label>
                  <input type="date" id="tabledate-from" className="form-control" />
                </div>
                <div className="col-md-4 col-lg-2">
                  <label htmlFor="tabledate-to" className="form-label">
                    Date To:
                  </label>
                  <input type="date" id="tabledate-to" className="form-control" />
                </div>
                <div className="col-md-2 col-lg-2 d-flex align-items-end">
                  <button type="submit" className="btn btn-outline-dark w-100">
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
                        <p>
                          <span>Mon</span>
                        </p>
                        <p>4:00 AM - 12:00 AM (Next Day)</p>
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
          </>
        ) : (
        <>
          <div className="table-rate-popup">
          <div className="tablerate-pop-head">
            <h4>Rate Table</h4>
          </div>
          <div className="tableratebutton">
            <button className="btn btn-secondary"  onClick={() => setShow(false)}>Close</button>
       
          </div>
        </div>
        <div className="tabelerate-bdy-wrap">
        <form>
        <div className="row">

            <div className="col-md-4">
              <label htmlFor="days" className="form-label">
                Apply on following days
              </label>
              <div className="form-check">
                <input type="radio" id="monday" 
                 name="days"
                 className="form-check-input"
                value="monday"/>
                 <label htmlFor="monday" className="form-check-label">
                    Monday
                    </label>
                

              </div>
              <div className="form-check">
                <input type="radio" id="tuesday" 
                 name="days"
                 className="form-check-input"
                value="tuesday"/>
                 <label htmlFor="tuesday"   className="form-check-label">
                 Tuesday
                    </label>
                

              </div>

              <div className="form-check">
                <input type="radio" id="wednesday" 
                 name="days"
                 className="form-check-input"
                value="wednesday"/>
                 <label htmlFor="wednesday"   className="form-check-label">
                 Wednesday
                    </label>
                

              </div>

              <div className="form-check">
                <input type="radio" id="thursday" 
                 name="days"
                 className="form-check-input"
                value="thursday"/>
                 <label htmlFor="thursday"   className="form-check-label">
                 Thursday
                    </label>
                

              </div>

              <div className="form-check">
                <input type="radio" id="friday" 
                 name="days"
                 className="form-check-input"
                value="friday"/>
                 <label htmlFor="friday"   className="form-check-label">
                 Friday
                    </label>
                

              </div>

              <div className="form-check">
                <input type="radio" id="saturday" 
                 name="days"
                 className="form-check-input"
                value="saturday"/>
                 <label htmlFor="saturday"   className="form-check-label">
                 Saturday
                    </label>
                

              </div>

              <div className="form-check">
                <input type="radio" id="sunday" 
                 name="days"
                 className="form-check-input"
                value="sunday"/>
                 <label htmlFor="sunday"   className="form-check-label">
                 Sunday
                    </label>
                

              </div>

            </div>
            <div className="col-md-4">
              <label htmlFor="time" className="form-label">
                Start rule at:
              </label>
              <select name="" id="time1select" className="form-control">
              <option value="12:00 PM">12:00 PM</option>
              <option value="01:00 PM">01:00 PM</option>
              <option value="02:00 PM">02:00 PM</option>
              <option value="03:00 PM">03:00 PM</option>

              </select>

            </div>


{/* 
            <div className="col-md-4">
                  <label className="form-label d-block">Table Charges</label>
                  <div className="form-check">
                  <input
                type="radio"
                id="perminute"
                name="tableCharges"
                className="form-check-input"
                onChange={handleChange}
                value="perminute"
             
              />
                   
                    <label htmlFor="perminute" className="form-check-label">
                      Per Minute
                    </label>
                  </div>
                  <div className="form-check">
                  <input
                type="radio"
                id="perhour"
                name="tableCharges"
                className="form-check-input"
                onChange={handleChange}
                value="perhour"
                
              />
                    <label htmlFor="perhour" className="form-check-label">
                      Per Hour
                    </label>
                  </div>
                  {errors.tableCharges &&  <span className="error">{errors.tableCharges}</span>}
                </div> */}

          </div>
        </form>

        </div>
        </>
        
        )}
      </div>
    </div>
  );
}

export default TablerateRules;
