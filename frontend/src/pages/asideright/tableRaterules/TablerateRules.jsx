import React, { useEffect, useState } from "react";
import "../tableRaterules/TablerateRules.css";
// import table from "../../../../../backend/models/tablerateModel";

function TablerateRules() {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    days: "",
    startrule: "",
    endrule: "",
    applyTable: "",
    rateType: "",
    rate: "",
    enable: "",
  });
  const [errors, setErrors] = useState({});
  const [tables, setTables] = useState([]);
  const [shouldFetch, setShouldFetch] = useState(false);
  const [edit,setedit]=useState(false);
  const [editid,seteditId]=useState(null);

  const validateTablerate = () => {
    const newErrors = {};
    if (!formData.days.trim()) {
      newErrors.days = "Please select days";
    }
    if (!formData.startrule.trim()) {
      newErrors.startrule = "Please select start rule";
    }
    if (!formData.endrule.trim()) {
      newErrors.endrule = "Please select end rule";
    }
    if (!formData.applyTable.trim()) {
      newErrors.applyTable = "Please select a table";
    }
    if (!formData.rateType.trim()) {
      newErrors.rateType = "Please select rate type";
    }
    if (!formData.rate.trim()) {
      newErrors.rate = "Please enter rate";
    }
    if (!formData.enable.trim()) {
      newErrors.enable = "Please select enable";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateTablerate()) {
      console.log("Form Submitted:", formData);
      // alert("Form Submitted Successfully!");
      if(edit){
        updateEditData()
      }else{
        postingData()
      }
     
    } else {
      alert("Please fill all required fields");
    }
  };
  async function updateEditData() {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_PRODUCT_API}/updaterate/${editid}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to update the data");
      }
      alert("Data updated successfully");
      setShow(false)
      setShouldFetch((prev) => !prev);
    } catch (err) {
      console.error("Error updating data:", err);
      alert("Error updating data. Please try again.");
    }
  }
  
  // async function updateEditData(){
  //   try{
  //     const response=await fetch (process.env.REACT_APP_PRODUCT_API+"/updaterate/"+editid,{
  //       method: 'PUT',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(formData)
  //     })
  //   }catch(err){
  //     console.error("Error updating data");
  //   }
  // }
 async function postingData(){
    const response = await fetch(process.env.REACT_APP_PRODUCT_API + '/createtable', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if(response.ok){
      alert("Data posted successfully");
      setShouldFetch((prev) => !prev);
      setShow(false);
   

    }
  }



  const handleEdit=(table)=>{
    console.log(table);
    setShow(true);
    setedit(true);
    seteditId(table._id)

    setFormData({
      days: table.days,
      startrule: table.startrule,
      endrule: table.endrule,
      applyTable: table._id,
      rateType: table.rateType,
      rate: table.rate,
      enable: table.enable,
    })

    

  }
  async function getDatatable(){

   

    
      try{
        let response= await fetch(process.env.REACT_APP_PRODUCT_API+"/gettableratedetails")
        if(response.ok){
          const data =await response.json();
          // console.log(data.ratetables);
          
          setTables(data.ratetables);

        }

      }catch(err){
        console.error(err);
      }
    }

  
  useEffect(()=>{
    getDatatable();

  },[shouldFetch])

  const showTable = (e) => {
    e.preventDefault();
    setShow(true);
  };
  const deleteRatetable= async(deleteId)=>{
    console.log(deleteId);

    try{
      const response= await fetch(process.env.REACT_APP_PRODUCT_API+"/deleteRatetable/" +deleteId,{
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      if(response.ok){
        setTables((prev)=>
        prev.filter(item=>item._id!==deleteId))

      }


    }catch(err){
      console.error(err);
    }
    
  }



  return (
    <div className="container-fluid">
      <div className="Tablerate-Rules">
        {!show ? (
          <>
            <div className="table-rate-top">
              <div className="table-rate-heading">
                <h4>Table Rate Rules ({tables.length})</h4>
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
                    {tables.length>0 ?(
                      tables.map((table,index)=>(
                        <tr>
                          <td>{index+1}</td>
                          <td>Users</td>
                          <td>
                            <p>
                              <span>{table.days}</span>
                            </p>
                            <p>{table.startrule}{table.endrule}</p>
                          </td>
                          <td>{table.applyTable}</td>
                          <td>{table.rate}</td>
                          <td>
                          {table.enable === "Yes" ? (
  <button type="button" className="btn btn-success">Enable</button>
) : (
  <button type="button" className="btn btn-danger">Disable</button>
)}

                           
                              
                          </td>
                          <td>
                            <button className="btn btn-link" onClick={()=>{handleEdit(table)}}>Edit</button>
                            <button className="btn btn-link" onClick={()=>deleteRatetable(table._id)}>Delete</button>
                          </td>
                        

                        </tr>

                      ))
                    
                    ):(  <tr>
                      No records found
                        
                      </tr>)}
                    {/* <tr>
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
                    </tr> */}
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
                <button className="btn btn-secondary" onClick={() => setShow(false)}>
                  Close
                </button>
              </div>
            </div>
            <div className="tabelerate-bdy-wrap">
            <form onSubmit={handleSubmit}>
      <div className="row gy-3">
        {/* Days Field */}
        <div className="col-md-4">
          <label className="form-label">Apply on following days</label>
          {["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"].map((day) => (
            <div className="form-check" key={day}>
              <input
                type="radio"
                id={day}
                name="days"
                value={day}
                // checked={formData.days === day}
                onChange={handleChange}
                className="form-check-input"
              />
              <label htmlFor={day} className="form-check-label">
                {day.charAt(0).toUpperCase() + day.slice(1)}
              </label>
            </div>
          ))}
          {errors.days && <span className="text-danger">{errors.days}</span>}
        </div>

        {/* Start Rule Field */}
        <div className="col-md-4">
          <label className="form-label">Start rule at:</label>
          <select
            name="startrule"
            className="form-control"
            value={formData.startrule}
            onChange={handleChange}
          >
            <option value="">Select Start Rule</option>
            {["12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM"].map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
          {errors.startrule && <span className="text-danger">{errors.startrule}</span>}
        </div>

        {/* End Rule Field */}
        <div className="col-md-4">
          <label className="form-label">End rule at:</label>
          <select
            name="endrule"
            className="form-control"
            value={formData.endrule}
            onChange={handleChange}
          >
            <option value="">Select End Rule</option>
            {["12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM"].map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
          {errors.endrule && <span className="text-danger">{errors.endrule}</span>}
        </div>

        {/* Apply Table Field */}
        <div className="col-md-4">
          <label className="form-label">Apply to Table:</label>
          <select
            name="applyTable"
            className="form-control"
            value={formData.applyTable}
            onChange={handleChange}
          >
            <option value="">Select Table</option>
            {["Table 1", "Table 2", "Table 3"].map((table) => (
              <option key={table} value={table}>
                {table}
              </option>
            ))}
          </select>
          {errors.applyTable && <span className="text-danger">{errors.applyTable}</span>}
        </div>

        {/* Rate Type Field */}
        <div className="col-md-4">
          <label className="form-label">Rate Type:</label>
          <select
            name="rateType"
            className="form-control"
            value={formData.rateType}
            onChange={handleChange}
          >
            <option value="">Select Rate Type</option>
            {["Fixed", "Percentage"].map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.rateType && <span className="text-danger">{errors.rateType}</span>}
        </div>

        {/* Rate Field */}
        <div className="col-md-4">
          <label className="form-label">Rate:</label>
          <input
            type="text"
            name="rate"
            value={formData.rate}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter Rate"
          />
          {errors.rate && <span className="text-danger">{errors.rate}</span>}
        </div>

        {/* Enable Field */}
        <div className="col-md-4">
          <label className="form-label">Enable:</label>
          <select
            name="enable"
            className="form-control"
            value={formData.enable}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          {errors.enable && <span className="text-danger">{errors.enable}</span>}
        </div>
      </div>

      <div className="mt-4">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
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
