import { React, useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { UserContext } from './UserProvider';

const PrivateRoute = () => {
  const logged = useContext(UserContext);
  return logged ? <Outlet/> : <Navigate to='/'/>;
};

export default PrivateRoute;