import React, { useState } from 'react';
import { User } from '../../types';
import { Nullable } from '../common-types';
import { AuthContext } from './auth-context';

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [currentUser, setCurrentUser] = useState<Nullable<User>>(null);

  const logout = () => {
    setCurrentUser(null);
  };

  const setUser = (user: User) => {
    setCurrentUser(user);
  };

  return (
    <AuthContext.Provider
      value={{
        loggedIn: !!currentUser,
        setUser,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
