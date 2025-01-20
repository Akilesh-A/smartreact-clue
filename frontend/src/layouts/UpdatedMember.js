import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Aside from '../components/asidebar/Aside';
import Dashboard from '../pages/asideright/Dashboard';
import TableManagement from '../pages/asideright/tableManagement/TableManagement';
import TablerateRules from '../pages/asideright/tableRaterules/TablerateRules';
import Members from '../pages/asideright/members/Members';
import Menu from '../pages/asideright/menudetails/menu/Menu';
import AllMenuItems from '../pages/asideright/menudetails/fullmenu/AllMenuItems';
import SingleMenuItem from '../pages/asideright/menudetails/singlemenudet/SingleMenudetails';

import '../layouts/UpdatedMember.css';

function UpdatedMember() {
  const [show ,setshow]=useState(false);
  const [showmenu,setshowmenu]=useState([]);
  const togglebar=()=>{
    setshow(!show);
  }
  useEffect(()=>{
    fetch(process.env.REACT_APP_PRODUCT_API+"/getmenu").then((res)=>{
      return res.json()
      
    }).then((result)=>{
      // console.log(result.menu);
      setshowmenu(result.menu);
      
    })

  },[])
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
          <Route path="/menu" element={<Menu  menuitems={showmenu.slice(0,3)}/>} />
          <Route path="/all-menu" element={<AllMenuItems  menuitems={showmenu}/>} />
          <Route path="/menu/:id" element={<SingleMenuItem menuitems={showmenu}/>}/>
          
          {/* <Route path="/other" element={<OtherPage />} />  */}
        </Routes>
      </div>
    </div>
  );
}

export default UpdatedMember;
