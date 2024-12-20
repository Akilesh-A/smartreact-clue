import React, { useEffect, useState } from 'react';
import '../dpages/Newmember.css';
import { CloseOutlined, PlusOutlined, CheckOutlined } from '@ant-design/icons';

function Newmember() {
  const [members, setMembers] = useState([]);
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [errors, setErrors] = useState({});

  // Handle input change
  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Form validation
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.phone || formData.phone.length !== 10) newErrors.phone = 'Phone must be 10 digits';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async () => {

    if (validateForm()) {
      try {
        const response = await fetch(process.env.REACT_APP_PRODUCT_API+'/newMember', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
        const result = await response.json();

        console.log('Result:', result,response);

        if (response.ok && result.newMember) {
          setMembers((prevMembers) => [...prevMembers, result.newMember]);
          setFormData({ name: '', phone: '' });
        
          setErrors({});
        } else {
          console.error('Failed to create member:', result.message || 'No member data');
        }
        // getapicalling()


      } catch (error) {
        console.error('Error creating member:', error);
      }
    }
    // window.location.reload();
  };


  useEffect(() => {
    fetch(process.env.REACT_APP_PRODUCT_API+'/members')
      .then((response) => response.json())
      .then((data) => setMembers(data.members));
    // getapicalling()
  }, []);
  // const getapicalling = async () => {
  //   try {
  //     const response = await fetch('http://localhost:8000/api/v2/members');
  //     const data = await response.json();
  //     if (response.ok) {
  //       setMembers(data.members);
  //     } else {
  //       alert('Failed to fetch members.');
  //     }
  //   } catch (error) {
  //     alert('Error fetching members. Please try again.');
  //     console.error('Error:', error);
  //   }
  // };

  // Delete member action
  const deleteaction = async (memberId) => {
  
    try {
      const response = await fetch(`http://localhost:8000/api/v2/members/${memberId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // Remove the member from the local state (UI)
        setMembers((prevMembers) => prevMembers.filter((member) => member._id !== memberId));
      } else {
        console.error('Failed to delete member');
      }
    } catch (error) {
      console.error('Error deleting member:', error);
    }
  };

  return (
    <div className="new-member">
      <div className="newMemberTable">
        <div className="newMemberTop">
          <h5>
            <PlusOutlined /> &nbsp; Create New Member
          </h5>
          <button className="clearform">
            <CloseOutlined />
          </button>
        </div>
        <div className="text-end">
          <a href="" className="popup-crn-btn">
            Try New UI
          </a>
        </div>
        <hr />
        <div className="forms">
          <div className="form-fields">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              onChange={handleInput}
              value={formData.name}
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>
          <div className="form-fields">
            <label>Phone:</label>
            <input
              type="number"
              name="phone"
              placeholder="Enter Your Mobile"
              onChange={handleInput}
              value={formData.phone}
            />
            {errors.phone && <span className="error">{errors.phone}</span>}
          </div>
        </div>
        <div className="membersButtons">
          <button className="closeButton">
            <CloseOutlined /> Close
          </button>
          <button className="createButton" onClick={handleSubmit}>
            <CheckOutlined /> Create
          </button>
        </div>
      </div>

      <div className="Existing-member">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {members.length > 0 ? (
              members.map((member, index) => (
                <tr key={member._id}>
                  <td>{member.name || 'N/A'}</td>
                  <td>{member.phone || 'N/A'}</td>
                  <td>
                    <CloseOutlined onClick={() => deleteaction(member._id)} />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">No members found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Newmember;
