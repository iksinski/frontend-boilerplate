import React from 'react';
import { Nullable } from '../common-types';
import { User } from '../../types';

export interface AuthContextType {
  loggedIn: boolean;
  logout: () => void;
  setUser: (user: User) => void;
}

export const AuthContext = React.createContext<Nullable<AuthContextType>>(null);
