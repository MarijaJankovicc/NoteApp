import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { UserProvider } from './UserProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <Router>
        <Routes>
          <Route path='/' element={<SignUp />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/app' element={<App />} />
        </Routes>
      </Router>
    </UserProvider>
  </React.StrictMode>
);