import React, { useState } from 'react';
import { useLoginMutation } from '../graphql-types';
import { useAuth } from '../utils/authorization/useAuth.hook';

export const LoginForm = () => {
  const [username, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useAuth();
  const [submitLogin] = useLoginMutation();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === 'username') {
      setLogin(event.target.value);
    } else {
      setPassword(event.target.value);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { data } = await submitLogin({
      variables: {
        username,
        password,
      },
    });

    // TODO: handle errors

    const { login, token } = data;
    setUser({
      username: login,
      token,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
