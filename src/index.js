import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//  import App from './App';
import { SignUp } from './components/SignUp';
import {BrowserRouter as Router} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <SignUp />
    </Router>
  </React.StrictMode>
);