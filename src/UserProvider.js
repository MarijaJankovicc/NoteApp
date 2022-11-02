import { React, createContext, useState, useEffect } from 'react';
import { auth } from './firebase';
import PropTypes from 'prop-types';

export const UserContext = createContext([]);

export const UserProvider = (props) => {

  const [ user, setUser ] = useState({ name: null, email: null });

  useEffect(() => {

    const subscribe = auth.onAuthStateChanged(loggedUser => {
      if (loggedUser) {
        setUser({ name: loggedUser.displayName, email: loggedUser.email });
      } else {
        setUser({ name: null, email: null });
      }
    });
    return () => {
      subscribe();
    };
  }, []);

  return (
    <UserContext.Provider value={[ user, setUser ]}>
      {props.children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.any
};