import React from 'react';
import { Link } from 'react-router-dom';

import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css'

import Auth from '../../utils/auth';
import Login from '../../pages/Login';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
        <nav>
            <div class="nav-wrapper teal darken-3">
            <a href="/" class="brand-logo">Logo</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><a href="/">Home</a></li>
                {/* <li><a href="/store">Store</a></li> */}
              {Auth.loggedIn() ? (
                <>
                <li><a href="/me">Post</a></li>
                <li><a href="/" onClick={logout}>Logout</a></li>
                </>
              ) : (
                <>
                <li><a href="/login">Login</a></li>
                <li><a href="/signup">Signup</a></li>
                </>
              )}
            </ul>
            </div>
        </nav>
  );
};

export default Header;
