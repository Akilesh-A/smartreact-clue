import React from 'react';
import FirstHome from './single/FirstHome';
import SecondHome from './single/SecondHome';
import ThirdHome from './single/ThirdHome';

import '../pages/Home.css';

function Home() {
  return (
    <div className='container-fluid bg'>
      {/* First section */}
      <div id="first-section">
        <FirstHome />
      </div>

      {/* Second section */}
      <div id="features-section">
        <SecondHome />
      
      </div>
      <div id='contact'>
        {/* Third section */}
        <ThirdHome />
      </div>
    </div>
  );
}

export default Home;
