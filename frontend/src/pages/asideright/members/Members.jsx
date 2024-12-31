import React, { useEffect, useState } from 'react';
import "../members/Members.css";

function Members() {
  const [members, setMembers] = useState([]);
  const [filteredMembers, setFilteredMembers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Fetch members from the API
    fetch(process.env.REACT_APP_PRODUCT_API + "/membersdetails")
      .then((response) => response.json())
      .then((data) => {
        setMembers(data.member);
        setFilteredMembers(data.member)
      })
      .catch((error) => console.error("Error fetching members:", error));
  }, []);

  const handleSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearchTerm(searchValue);
    const filtered = members.filter((member) =>
      member.name.toLowerCase().includes(searchValue)
    );
    setFilteredMembers(filtered);
  };


  const handleBookNow = (id) => {
    alert(`Booking initiated for Member ID: ${id}`);
    // Implement your booking logic here
  };

  const handleViewProfile = (id) => {
    alert(`View Profile for Member ID: ${id}`);
    // Implement profile viewing logic here
  };

  return (
    <div className='container-fluid'>
      <div className='membersManagement'>
        <div className='members-top'>
          <div className="members-heading">
            <h4>Members Management <span>{filteredMembers.length}</span></h4>
          </div>
        </div>
        <div className='members-formtable'>
          <div className='row'>
            <div className='col-md-3'>
              <label htmlFor="members-search" className='form-label'>
                Search:
              </label>
              <input
                type="text"
                className='form-control'
                id='members-search'
                placeholder='Search Here'
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
            <div className='col-md-3'>
              <label htmlFor="memberdate" className='form-label'>Date From</label>
              <input type="date" id='memberdate' className='form-control' />
            </div>
            <div className='col-md-3'>
              <label htmlFor="memberdate" className='form-label'>Date To</label>
              <input type="date" id='memberdate' className='form-control' />
            </div>
            <div className='col-md-3 d-flex align-items-end'>
              <button type="submit" className="btn btn-outline-dark">
                Filter
              </button>
            </div>
          </div>

          <div className='table-responsive members-fulltable'>
            <table className='table table-bordered table-striped'>
              <thead>
                <tr>
                  <th>S No</th>
                  <th>Member Image</th>
                  <th>Name</th>
                  <th>Tag</th>
                  <th>Mobile Number</th>
                  <th>Speciality</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredMembers.map((item, index) => (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>
                      <img
                        src={item.image}
                        alt={item.name}
                        style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                      />
                    </td>
                    <td>{item.name}</td>
                    <td>{item.tag}</td>
                    <td>{item.mobileNumber}</td>
                    <td>{item.speciality}</td>
                    <td>
                      <button
                        className="btn btn-success me-2"
                        onClick={() => handleBookNow(item.id)}
                      >
                        Book Now
                      </button>
                      <button
                        className="btn btn-primary"
                        onClick={() => handleViewProfile(item.id)}
                      >
                        View Profile
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Members;
