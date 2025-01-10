import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import MainHeader from './components/Header/MainHeader';
import Home from './pages/Home';
import Login from './pages/single/Login';

import DashboardHeader from './components/dashboard/DashboardHeader';
import Dashboard from './pages/dpages/Dashboard';
import Newmember from './pages/dpages/Newmember';
import UpdatedMember from './layouts/UpdatedMember';

function App() {
  return (
    <Router>
      <div className='container-fluid homeHeader'>
        <Routes>
          {/* Home Route */}
          <Route
            path="/"
            element={
              <>
                <MainHeader />
                <Home />
              </>
            }
          />

          {/* Login Route */}
          <Route path="/login" element={<Login />} />

          {/* Dashboard Routes with Nested Structure */}
          <Route
            path="/dashboard/*"
            element={
              <>
                <DashboardHeader />
                <div className='dashboard-container'>
                  
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="newmember" element={<Newmember />} />
                    <Route path="updatedmember/*" element={<UpdatedMember />} />
                  </Routes>
                </div>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
