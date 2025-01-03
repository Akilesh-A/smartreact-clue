import React from 'react';
import { Link } from 'react-router-dom';
import '../asidebar/Aside.css'
import {UserSwitchOutlined, DashboardOutlined,BankOutlined,ThunderboltOutlined,TableOutlined,ToolOutlined,UsergroupDeleteOutlined,BorderlessTableOutlined,RocketOutlined,ShoppingOutlined,ShoppingCartOutlined,ExperimentOutlined,CoffeeOutlined} from '@ant-design/icons'

function Aside() {
  return (

 
  <div className="wrapper">
  <aside className="asidebar" id="sidebar">
   <div className='sidebarheading'>
       <h1>Main Navigation</h1>
   </div>
   <ul className="list-items collide">
   <li><Link to='/dashboard/updatedmember/dashboard'> <DashboardOutlined></DashboardOutlined>  Dashboard</Link></li>
       <li><a href=""> <BankOutlined />POS</a></li>
       <li><Link to='/dashboard/updatedmember/table-management'><TableOutlined />Table Management</Link></li>
       <li><Link to="/dashboard/updatedmember/table-rate-rules"><ToolOutlined /> Table Rate Rules</Link></li>
       <li><Link to="/dashboard/updatedmember/members"><UsergroupDeleteOutlined />Members</Link></li>
       <li><a href=""><RocketOutlined />Suppliers</a></li>

       <li className="active"><a href="#inventory-submenu" data-bs-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><ShoppingOutlined />Inventory</a>

           <ul className="list-items collapse" id="inventory-submenu">
               <li><Link >Home</Link></li>
               <li><a href="">Home 2</a></li>
               <li><a href="">Home 3</a></li>
           </ul>
       </li>
       <li className="active"><a href="#menu-submenu" data-bs-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><ShoppingCartOutlined />Menu</a>

<ul className="list-items collapse" id="menu-submenu">
    <li><Link to="/dashboard/updatedmember/menu">Menu 1</Link></li>
    <li><a href="">Home 2</a></li>
    <li><a href="">Home 3</a></li>
</ul>
</li>
<li className="active"><a href="#Kitchen-submenu" data-bs-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><CoffeeOutlined />Kitchen</a>

<ul className="list-items collapse" id="Kitchen-submenu">
    <li><a href="">Home 1</a></li>
    <li><a href="">Home 2</a></li>
    <li><a href="">Home 3</a></li>
</ul>
</li>
<li><a href=""><ExperimentOutlined />Expense</a></li>
<li className="active"><a href="#reports-submenu" data-bs-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><BorderlessTableOutlined />Reports</a>

<ul className="list-items collapse" id="reports-submenu">
    <li><a href="">Home 1</a></li>
    <li><a href="">Home 2</a></li>
    <li><a href="">Home 3</a></li>
</ul>
</li>
<li><a href=""><ThunderboltOutlined />Bookings</a></li>
<li className="active"><a href="#managembnt-submenu" data-bs-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><UserSwitchOutlined />User Management</a>

<ul className="list-items collapse" id="managembnt-submenu">
    <li><a href="">Home 1</a></li>
    <li><a href="">Home 2</a></li>
    <li><a href="">Home 3</a></li>
</ul>
</li>



   </ul>

  </aside>

</div>
  );
}

export default Aside;
