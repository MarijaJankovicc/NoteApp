import { React, createContext, useState, useEffect } from 'react';
import { auth } from './firebase';
import PropTypes from 'prop-types';

export const UserContext = createContext([]);

export const UserProvider = (props) => {

  const [ user, setUser ] = useState(null);

  useEffect(() => {

    const subscribe = auth.onAuthStateChanged(loggedUser => {
      if (loggedUser) {
        setUser(loggedUser);
      } else {
        setUser(null);
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