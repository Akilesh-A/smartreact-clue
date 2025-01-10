import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Aside from '../components/asidebar/Aside';
import Dashboard from '../pages/asideright/Dashboard';
import TableManagement from '../pages/asideright/tableManagement/TableManagement';
import TablerateRules from '../pages/asideright/tableRaterules/TablerateRules';
import Members from '../pages/asideright/members/Members';
import Menu from '../pages/asideright/menu/Menu';

import '../layouts/UpdatedMember.css';

function UpdatedMember() {
  const [show ,setshow]=useState(false);
  const togglebar=()=>{
    setshow(!show);
  }
  return (
    <div className="asidebars">
      <><button className='hidingbutton' style={{display:"none"}} onClick={togglebar}>{show?"show":"hide"}</button></>
      {/* Left Sidebar */}
    {!show?  <div className="leftasidebar">
        <Aside />
      </div>:<div></div>}

      {/* Right Content Area */}
      <div className="rightasidebar">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/table-management" element={<TableManagement />} />
          <Route path="/table-rate-rules" element={<TablerateRules/>} />
          <Route path="/members" element={<Members />} />
          <Route path="/menu" element={<Menu />} />
          {/* <Route path="/other" element={<OtherPage />} />  */}
        </Routes>
      </div>
    </div>
  );
}

export default UpdatedMember;
