import React from 'react';
import { LoginForm } from './login-form';

export const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <div>
      <LoginForm />
      {children}
    </div>
  );
};
