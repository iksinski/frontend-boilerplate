import React from 'react';
import { Nullable } from '../common-types';
import { AuthContext, AuthContextType } from './auth-context';

export const useAuth = (): Nullable<AuthContextType> => {
  return React.useContext(AuthContext);
};
