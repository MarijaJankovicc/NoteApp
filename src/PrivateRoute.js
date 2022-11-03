/* eslint-disable indent */
import { React, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from './UserProvider';
// import NoteApp from './components/NoteApp';
import PropTypes from 'prop-types';

const PrivateRoute = ({children}) => {
  const { user } = useContext(UserContext);
  console.log('private route', user);
//   const navigate = useNavigate();
//   useEffect(() => {
//     // if (user) {
//     //   console.log('111');
//     //   <NoteApp/>;
//     // } else {
//     console.log('ovde', user);
//     if (user === {} || user === null) {
//       navigate('/');
//     }
//     // }
//   }, [ user, navigate ]);

   return user ? children : <Navigate to='/'/>;
};
PrivateRoute.propTypes = {
    children: PropTypes.any
};
export default PrivateRoute;