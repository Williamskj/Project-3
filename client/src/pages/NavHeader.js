import React from 'react';
import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css'

function NavHeader() {
    return (
        <nav>
            <div class="nav-wrapper teal darken-3">
            <a href="#" class="brand-logo">Logo</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><a href="Home.html">Home</a></li>
                <li><a href="Login.html">Login</a></li>
                <li><a href="Signup.html">Signup</a></li>
            </ul>
            </div>
        </nav>
    );
  }

  export default NavHeader;