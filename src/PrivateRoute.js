// import { React } from 'react';
// import PropTypes from 'prop-types';

// const PrivateRoute = ({ children }) => {
//     const { loginStatus } = useAuth();
//     const { pathname } = useLocation();
//     console.log({ pathname });
//     return loginStatus ? (
//       children
//     ) : (
//       <Navigate to="/login" state={{ from: pathname }} replace />
//     );
// };
// PrivateRoute.propTypes = {
//     children: PropTypes.any
// };
// export default PrivateRoute;