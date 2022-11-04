import { React, useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { UserContext } from './UserProvider';

const PrivateRoute = () => {
  const {user} = useContext(UserContext);
  return user.data ? <Outlet/> : <Navigate to='/'/>;
};

export default PrivateRoute;