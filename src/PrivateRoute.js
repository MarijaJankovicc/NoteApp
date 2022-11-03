import { React } from 'react';
import { auth } from './firebase';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  return auth.currentUser ? <Outlet/> : <Navigate to='/'/>;
};

export default PrivateRoute;