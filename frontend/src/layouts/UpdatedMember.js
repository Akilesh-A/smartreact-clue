import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Aside from '../components/asidebar/Aside';
import Dashboard from '../pages/asideright/Dashboard';
import TableManagement from '../pages/asideright/tableManagement/TableManagement';
import TablerateRules from '../pages/asideright/tableRaterules/TablerateRules';

import '../layouts/UpdatedMember.css';

function UpdatedMember() {
  return (
    <div className="asidebars">
      {/* Left Sidebar */}
      <div className="leftasidebar">
        <Aside />
      </div>

      {/* Right Content Area */}
      <div className="rightasidebar">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/table-management" element={<TableManagement />} />
          <Route path="/table-rate-rules" element={<TablerateRules/>} />
          {/* <Route path="/other" element={<OtherPage />} />  */}
        </Routes>
      </div>
    </div>
  );
}

export default UpdatedMember;
