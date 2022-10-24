import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
  import App from './App';
import { SignUp } from './components/SignUp';
import {BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/app" element={<App />} />
        </Routes>
      </Router>
  </React.StrictMode>
);