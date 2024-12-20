import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import Bootstrap and styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Import FontAwesome icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUsers, faPlus, faList, faMoneyBill, faUtensils, faGear, faUser, faFile, faLock, faPowerOff, faCartShopping } from '@fortawesome/free-solid-svg-icons';

// Add icons to the library globally
library.add(faUsers, faPlus, faList, faMoneyBill, faUtensils, faGear, faUser, faFile, faLock, faPowerOff, faCartShopping);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
