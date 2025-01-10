import React, { useEffect, useState } from "react";
import "../tableManagement/TableManagement.css";
// import caroomImage from '../assetes/tablemanagement/carom.png';
import caroomImage from '../../../assetes/tablemanagement/carom.png';
import Ludo from '../../../assetes/tablemanagement/ludo.png';
import Other from '../../../assetes/tablemanagement/other.jpg';
import Snooker from '../../../assetes/tablemanagement/snooker.png';
import Tennis from '../../../assetes/tablemanagement/tennis.jpg';
import SnookerBlue from '../../../assetes/tablemanagement/snooker-blue.png';




function TableManagement() {
  const [showNewtable, setShowNewtable] = useState(false);
  const [formData, setFormData] = useState({
    tableName: "",
    tableCharges: "",
    enableBooking: "",
    ratePerMin1: "",
    ratePerMin2: "",
    roomRate: "",
    tableTheme: "",
  });
  const [errors, setErrors] = useState({});
  const [tableData,settableData]=useState([]);
  const [isedited, setisedited] = useState(false)
  const [editId,seteditId]=useState(null);
  const [searchData,setsearchdata]=useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateTable = (data) => {
    let errors = {};
    if (!(data.tableName || "").trim()) errors.tableName = "Table Name is required";
    if (!(data.tableCharges || "").trim()) errors.tableCharges = "Table Charges are required";
    if (!(data.ratePerMin1 || "").trim()) errors.ratePerMin1 = "Rate per Minute 1 is required";
    if (!(data.ratePerMin2 || "").trim()) errors.ratePerMin2 = "Rate per Minute 2 is required";
    if (!(data.roomRate || "").trim()) errors.roomRate = "Room Rate is required";
    if (!(data.tableTheme || "").trim()) errors.tableTheme = "Table Theme is required";
    return errors;
  };



  const handleEdit=(table)=>{
    setisedited(true);
    seteditId(table._id)
    setShowNewtable(true);
    
 
    console.log(table);
    setFormData({
      tableName: table.tableName,
      tableCharges: table.tableCharges,
      enableBooking: table.enableBooking,
      ratePerMin1: table.ratePerMin1,
      ratePerMin2: table.ratePerMin2,
      roomRate: table.roomRate,
      tableTheme: table.tableTheme,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateTable(formData);
    setErrors(validationErrors);
  
    if (Object.keys(validationErrors).length > 0) { return; }
    

      if(isedited){
        updateEditData()
      }else{
        updateSubmitData()
      }
   
  };

  const updateEditData =async ()=>{
    try{
   const response=await fetch(process.env.REACT_APP_PRODUCT_API+'/updatedtablemember/'+editId,{
    method:'PUT',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
   })

   if(response.ok){
    setShowNewtable(false);
    const updatedTableData = await fetchTableData();
    setsearchdata(updatedTableData);
    alert("updated successfully")

   }



   
 
    

    }catch(err){
      console.error(err);
    }

  }
const updateSubmitData = async () => {
  try {
    const response = await fetch(process.env.REACT_APP_PRODUCT_API + '/tablemembers', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      const result = await response.json();
      alert("Form submitted successfully!");
      console.log("Form submitted successfully:", result);
      
     
      setFormData({
        tableName: "",
        tableCharges: "",
        enableBooking: "",
        ratePerMin1: "",
        ratePerMin2: "",
        discountedRate: "",
        roomRate: "",
        tableTheme: "",
      });
      setShowNewtable(false);

      // Fetch updated table data or add new entry to state
      const updatedTableData = await fetchTableData();
      // settableData(updatedTableData);
      setsearchdata(updatedTableData);
    } else {
      alert("Failed to submit the form. Please try again.");
      console.error("Server Error:", response.statusText);
    }
  } catch (error) {
    alert("An error occurred. Please check your network connection.");
    console.error("Fetch Error:", error.message);
  }
}

  
    

    

  useEffect(()=>{
    const loadTabledata= async ()=>{
      const data = await fetchTableData();
      settableData(data);
      setsearchdata(data);

    }
    loadTabledata()
  },[])


 

  const fetchTableData = async () => {
    try {
      const response = await fetch(process.env.REACT_APP_PRODUCT_API + '/fulltablemembers');
      if (response.ok) {
        const data = await response.json();
        return data.data; // Return fetched data  
      } else {
        console.error("Failed to fetch table data:", response.statusText);
        return [];
      }
    } catch (err) {
      console.error("Error fetching table data:", err.message);
      return [];
    }
  };
  
    const DeletetableMember = async (deleteId) => {
      try {
        const response = await fetch(process.env.REACT_APP_PRODUCT_API + '/tablemember/' + deleteId, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          }
        });
    
        if (response.ok) {
          alert("Table member deleted successfully!");
    
          // Update the state to remove the deleted member
          setsearchdata((prevTableData) =>
            prevTableData.filter((member) => member._id !== deleteId)
          );
          
        } else {
          console.error("Failed to delete table member:", response.statusText);
        }
      } catch (err) {
        console.error("Error deleting table member:", err.message);
      }
    };
    

  const showTable = () =>{
    setShowNewtable(true);
    setFormData({})
  }
  const hideTable = () => setShowNewtable(false);


  //serching table data using input

  const getTableData=(e)=>{
    let searchTerm=e.target.value;
    if(!searchTerm){
      setsearchdata(tableData);
      return;
    }else{
      const filterdadat=tableData.filter((data)=>
        data.tableName.toLowerCase().includes(searchTerm)
       
        
      )
      setsearchdata(filterdadat);

    }
    

    

  }

  const tableThemes = [
    { id: "snooker", label: "Snooker", alt: "Snooker Theme", src: Snooker },
    { id: "pool", label: "Pool", alt: "Pool Theme", src: SnookerBlue },
    { id: "tennis", label: "Tennis", alt: "Tennis Theme", src: Tennis },
    { id: "carrom", label: "Carrom", alt: "Carrom Theme", src: caroomImage },
    { id: "ludo", label: "Ludo", alt: "Ludo Theme", src: Ludo },
    { id: "other", label: "Other", alt: "Other Theme", src: Other },
  ];

  return (
    <div className="container-fluid">
      {!showNewtable ? (
        <div className="tableManagement">
          {/* Top Section */}
          <div className="table-p-top">
            <div className="table-p-heading">
              <h4>
                Table Management <span>({searchData.length})</span>
              </h4>
            </div>
            <div className="table-p-buttons">
              <button className="btn btn-outline-primary">Export</button>
              <button className="btn btn-outline-secondary">View Deleted Records</button>
              <button onClick={showTable} className="btn btn-outline-success">
                Create
              </button>
            </div>
          </div>

         
          <div className="table-p-bottom text-end">
            <button className="btn btn-outline-info">Print QR Codes</button>
          </div>
          <hr />

         
          <div className="tablemanage-forms">
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
                  onChange={getTableData}
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
            <div className="tablemanage-popupshowtable table-responsive">
              <table className="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Table Charges</th>
                    <th>Rate Per Minute1 ($)</th>
                    <th>Rate Per Minute2 ($)</th>
                    <th>Room Rate</th>
                    <th>Table Theme</th>
                    <th>Action</th>
                  </tr>
                </thead>

          <tbody>
          {searchData.length > 0 ? (
        searchData.map((item,index)=>(
          <tr key={index}>
                    <td>{index+1}</td>
                    <td>{item.tableName}</td>
                    <td>{item.tableCharges}</td>
                    <td>{item.ratePerMin1}</td>
                    <td>{item.ratePerMin2}</td>
                    <td>{item.roomRate}</td>
                    <td>{item.tableTheme}</td>
                    <td>
                      <button className="btn btn-link" onClick={() => handleEdit(item)}>Edit</button>
                      <button className="btn btn-link" onClick={()=>DeletetableMember(item._id)}>Delete</button>
                    </td>
                  </tr>
        ))
          ) : (
            <tr>
              <td colSpan="8" className="text-center">
                No Records Found
              </td>
            </tr>
          )}
          </tbody>
                {/* <tbody>
                  <tr>
                    <td>1</td>
                    <td>John Doe</td>
                    <td>$150</td>
                    <td>100</td>
                    <td>Yes</td>
                    <td>yes</td>
                    <td></td>
                    <td>
                      <button className="btn btn-link">Edit</button>
                      <button className="btn btn-link">Delete</button>
                    </td>
                  </tr>
                </tbody> */}
              </table>
            </div>
          </div>
        </div>
      ) : (
        <div className="tablemanagementSecond">
          <div className="newtop-wrap">
            <div className="newtop-title">
              <h3>Create</h3>
            </div>
            <div className="newtop-end">
              <button onClick={hideTable} className="btn btn-link">
                Close
              </button>
            </div>
          </div>
          <hr />
          <div className="tablebody-wrap">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-4">
                  <label htmlFor="tablename" className="form-label">
                    Table Name
                  </label>
                  <input
              type="text"
              id="tablename"
              name="tableName"
              value={formData.tableName}
              className="form-control"
              placeholder="Enter table name"
              onChange={handleChange}
            />
            
                  {errors.tableName && <span className="error">{errors.tableName}</span>}
                </div>

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
                </div>

                <div className='col-md-4'>
                      <label className='form-label d-block'>Enable Booking</label>
                      <div className="form-check form-check-inline">
                        <input type="radio" id="enablebooking" name="enablebooking" className="form-check-input" />
                        <label htmlFor="enablebooking" className="form-check-label">
                            Enable
                        </label>
                        <p>If enabled, customer can book this table online via booking page.</p>
                      </div>
                    </div>
                    <div className='col-md-4'>
                      <label htmlFor="ratepermin1">Rate Per Minute  in $:</label>
                      <input
              type="text"
              id="ratepermin1"
              className="form-control"
              name="ratePerMin1"
              placeholder="Enter per Min rate"
              onChange={handleChange}
              value={formData.ratePerMin1}
            />
                      {errors.ratePerMin1 && <span className="error">{errors.ratePerMin1}</span>}
                    </div>
                    
                    <div className="col-md-4">
                      <label htmlFor="rateperminute2">Rate Per Minute (2) in $:</label>
                      <input
              type="text"
              id="rateperminute2"
              className="form-control"
              name="ratePerMin2"
              placeholder="Discounted per min rate"
              onChange={handleChange}
              value={formData.ratePerMin2}
            />                      {errors.ratePerMin2 && <span className="error">{errors.ratePerMin2}</span>}
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="gamegroom">Game/Room Rate in $:</label>
                      <input
              type="text"
              id="gamegroom"
              className="form-control"
              name="roomRate"
              placeholder="Enter Room/Room Rate"
              onChange={handleChange}
              value={formData.roomRate}
            />
                      {errors.roomRate && <span className="error">{errors.roomRate}</span>}
                    </div>
  
              </div>
              <div className="row mt-4">
                <p className="form-label">Table Theme</p>
                {tableThemes.map((theme) => (
                  <div className="col-md-2" key={theme.id}>
                    <img
                      src={theme.src}
                      alt={theme.alt}
                      className="img-thumbnail mb-3"
                      style={{ width: "150px", height: "auto" }}
                    />
                    <div>
                      <input
                        type="radio"
                        id={theme.id}
                        name="tableTheme"
                        className="form-check-input me-1"
                        onChange={handleChange}
                        value={theme.label}
                      />
                      <label htmlFor={theme.id} className="form-check-label">
                        {theme.label}
                      </label>
                    </div>
                  </div>
                ))}
                {errors.tableTheme && <span className="error">{errors.tableTheme}</span>}
              </div>
              <div className="submit-button">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
                  
                
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default TableManagement;
  