import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../utils/authorization/useAuth.hook';

export const HomePage = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/image">Image Page</Link>
        </li>
        <li>
          <Link to="/authorized">Protected Page</Link>
        </li>
        {/*<button onClick={handleLogin}>Login</button>*/}
      </ul>
    </div>
  );
};
