import { React, createContext, useState, useEffect } from 'react';
import { auth } from './firebase';
import PropTypes from 'prop-types';

export const UserContext = createContext({});

const UserProvider = (props) => {

  const [ user, setUser ] = useState({data: null});

  useEffect(() => {
    const authenticate = auth.onAuthStateChanged(loggedUser => {
      console.log('loggedUser', loggedUser);
      if (loggedUser) {
        setUser({data: loggedUser});
      } else {
        setUser({data: null});
      }
    });
    return () => {
      authenticate();
    };
  }, []);

  return (
    <UserContext.Provider value={{user}}>
      {props.children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.any
};
export default UserProvider;